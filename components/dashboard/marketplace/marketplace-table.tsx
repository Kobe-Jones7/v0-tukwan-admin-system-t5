"use client"

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table"
import * as React from "react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Attractions, Booking, Marketplace, Vendor } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { routes } from "@/routes"
import { formatCurrency } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type Props = {
    items: Marketplace[]
}

const columns: ColumnDef<Marketplace>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
            <Badge variant="default" className="lowercase w-fit">{row.getValue("category")}</Badge>
        ),
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
            <div className="capitalize">{formatCurrency(row.getValue("price"))}</div>
        ),
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("quantity")}</div>
        ),
    },
    {
        accessorKey: "items_sold",
        header: "Sales",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("items_sold")}</div>
        ),
    },
    {
        accessorKey: "vendor",
        header: "vendor",
        cell: ({ row }) => {
            const vendor = row.getValue('vendor') as Vendor
            return <div className="capitalize" > {vendor.name}</div>
        }
        ,
    },
]

export function MarketplaceTable({ items: data }: Props) {
    const router = useRouter()
    const [sorting, setSorting] = React.useState<SortingState>([])

    console.log("marketplace items;", data)

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
                                    onClick={() => { router.push(routes.dashboard.marketplace.details.replace(":slug", row.original.slug)) }}
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

                {/* <div className="text-muted-foreground text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}

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
