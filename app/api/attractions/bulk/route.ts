import { NextRequest, NextResponse } from "next/server";
import { upsertAttraction } from "@/lib/queries/attractions";
import { Attractions } from "@/app/generated/prisma";

// POST /api/attractions/bulk
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (!Array.isArray(body)) {
			return NextResponse.json(
				{ error: "Payload must be an array of attractions" },
				{ status: 400 }
			);
		}

		const results = await Promise.all(
			body.map(async (item: Attractions) => {
				const result = await upsertAttraction(item);
				return {
					slug: item.slug,
					success: result.success,
					error: result.success ? undefined : result.error,
				};
			})
		);

		return NextResponse.json({ success: true, results }, { status: 200 });
	} catch (error) {
		console.error("Bulk attraction POST error:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
