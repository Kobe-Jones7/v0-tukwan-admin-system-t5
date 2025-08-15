import React from 'react'
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type Props = { link: string }

const BackButton = ({ link }: Props) => {
    return (
        <Button variant="outline" size="icon" asChild>
            <Link href={link}>
                <ArrowLeft className="h-4 w-4" />
            </Link>
        </Button>
    )
}

export default BackButton