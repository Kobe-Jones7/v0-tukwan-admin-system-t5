"use client"

import * as React from "react"
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Attractions, TourPackages } from "@/app/generated/prisma"
import { useRouter } from "next/navigation"
import { routes } from "@/routes"
import { attractions } from "@/data/ghana-attractions"

type Props = {
    attractions: Attractions[]
}

const columns: ColumnDef<Attractions>[] = [

    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => {
            const location = row.getValue("location") as Attractions['location']
            return <div className="capitalize">
                {location.address.split(',').pop()},{location.region}
            </div>;
        },
    },
    {
        accessorKey: "visitingInformation",
        header: () => <div className="text-center">Entry Fee</div>,
        cell: ({ row }) => {
            const visiting_info = row.getValue("visitingInformation") as Attractions['visitingInformation']
            return <div className="capitalize text-center">{visiting_info.entry_fee}</div>
        },
    },
    {
        accessorKey: "booking",
        header: () => <div className="text-center">Bookings</div>,
        cell: ({ row }) => {
            return <div className="capitalize text-center">0</div>
        },
    },
    {
        accessorKey: "rating",
        header: () => <div className="text-center">Rating</div>,
        cell: ({ row }) => {
            return <div className="capitalize text-center">N/A</div>
        },
    },
]

export function AttractionsTable({ attractions: data }: Props) {
    const router = useRouter()
    const [sorting, setSorting] = React.useState<SortingState>([])

    console.log("attractions;", attractions)

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
    })

    return (
        <div className="w-full space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="cursor-pointer"
                                    onClick={() => { router.push(routes.dashboard.attractions.update.replace(":slug", row.original.slug)) }}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>

                <div className="text-muted-foreground text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
                {/* <div className="space-x-2">
                </div> */}
            </div>
        </div>
    )
}
