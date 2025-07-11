"use client"

import React, { Children, ReactNode } from 'react'
import { TableRow } from './ui/table'
import { useRouter } from 'next/navigation'

type Props = { children: ReactNode, link?: string }

const CustomTableRow = ({ children, link }: Props) => {
    const router = useRouter()

    return (
        <TableRow className="cursor-pointer" onClick={() => { link && router.push(link) }}>
            {children}
        </TableRow>
    )
}

export default CustomTableRow