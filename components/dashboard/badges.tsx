import { Badge } from "../ui/badge"

// Status badge renderer
export const renderStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
        case "confirmed":
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
        case "pending":
            return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
        case "cancelled":
            return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
        case "completed":
            return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
        default:
            return <Badge variant="outline">{status}</Badge>
    }
}

// Payment status badge renderer
export const renderPaymentBadge = (status: string) => {
    switch (status.toLowerCase()) {
        case "paid":
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
        case "partial":
            return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Partial</Badge>
        case "pending":
            return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
        case "refunded":
            return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Refunded</Badge>
        default:
            return <Badge variant="destructive">Failed</Badge>
    }
}
