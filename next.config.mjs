/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: "tukwan.s3.us-east-2.amazonaws.com",
				pathname: "**",
			},
			{ hostname: "img.clerk.com", pathname: "**" },
		],
	},
};

export default nextConfig;
