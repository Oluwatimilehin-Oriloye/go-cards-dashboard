import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNav } from "@/components/dashboard/TopNav";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Calendar } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock transaction data
const allTransactions = [
  {
    id: "1",
    date: "13 August 2025, 18:48:45",
    amount: "₦ 85.35",
    type: "Outflow",
    description: "Ifenna Nwafor",
    status: "Completed",
    card: "Temu Card",
  },
  {
    id: "2",
    date: "13 August 2025, 18:41:53",
    amount: "₦ 160,000.00",
    type: "Inflow",
    description: "NGN to EUR",
    status: "Completed",
    card: "Temu Card",
  },
  {
    id: "3",
    date: "13 August 2025, 18:35:14",
    amount: "₦ 160,000.00",
    type: "Inflow",
    description: "IFENNA BLOSSOM NWAFOR",
    status: "Completed",
    card: "Jumia Card",
  },
  {
    id: "4",
    date: "14 July 2025, 17:35:15",
    amount: "₦ 1,552.00",
    type: "Outflow",
    description: "IKENGA OKWUTE",
    status: "Completed",
    card: "Temu Card",
  },
  {
    id: "5",
    date: "03 July 2025, 02:01:20",
    amount: "₦ 5.00",
    type: "Outflow",
    description: "Card deposit",
    status: "Completed",
    card: "Konga Card",
  },
  {
    id: "6",
    date: "03 July 2025, 01:59:59",
    amount: "₦ 8,500.00",
    type: "Inflow",
    description: "NGN to USD",
    status: "Completed",
    card: "Jumia Card",
  },
  {
    id: "7",
    date: "03 July 2025, 01:59:39",
    amount: "₦ 10,000.00",
    type: "Inflow",
    description: "OKWUTE IKENGA",
    status: "Completed",
    card: "Temu Card",
  },
  {
    id: "8",
    date: "24 May 2025, 15:50:40",
    amount: "₦ 160,900.00",
    type: "Outflow",
    description: "OKWUTE IKENGA",
    status: "Completed",
    card: "Konga Card",
  },
  {
    id: "9",
    date: "24 May 2025, 15:49:39",
    amount: "₦ 102.00",
    type: "Inflow",
    description: "USD to NGN",
    status: "Completed",
    card: "Jumia Card",
  },
  {
    id: "10",
    date: "23 May 2025, 20:44:55",
    amount: "₦ 102.00",
    type: "Inflow",
    description: "Card withdrawal",
    status: "Completed",
    card: "Temu Card",
  },
];

export default function Transactions() {
  const [transactionType, setTransactionType] = useState("all");
  const [selectedCard, setSelectedCard] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter transactions
  const filteredTransactions = allTransactions.filter((transaction) => {
    const typeMatch =
      transactionType === "all" ||
      (transactionType === "inflow" && transaction.type === "Inflow") ||
      (transactionType === "outflow" && transaction.type === "Outflow");

    const cardMatch =
      selectedCard === "all" || transaction.card === selectedCard;

    return typeMatch && cardMatch;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 ml-64">
        <TopNav />

        <main className="p-6 space-y-6">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Balance Transactions
            </h1>
          </div>

          {/* Filters Card */}
          <Card className="p-6 border-border shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Left side filters */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Transaction Type Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    Filter by:
                  </span>
                  <Select
                    value={transactionType}
                    onValueChange={setTransactionType}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Transactions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Transactions</SelectItem>
                      <SelectItem value="inflow">Inflow</SelectItem>
                      <SelectItem value="outflow">Outflow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Card Filter */}
                <div className="flex items-center gap-2">
                  <Select value={selectedCard} onValueChange={setSelectedCard}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Cards" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cards</SelectItem>
                      <SelectItem value="Temu Card">Temu Card</SelectItem>
                      <SelectItem value="Jumia Card">Jumia Card</SelectItem>
                      <SelectItem value="Konga Card">Konga Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Sort date:
                </span>
                <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    DD/MM/YYYY - DD/MM/YYYY
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Transactions Table */}
          <Card className="border-border shadow-sm overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-border">
                    <TableHead className="text-muted-foreground uppercase text-xs">
                      DATE
                    </TableHead>
                    <TableHead className="text-muted-foreground uppercase text-xs">
                      AMOUNT
                    </TableHead>
                    <TableHead className="text-muted-foreground uppercase text-xs">
                      TYPE
                    </TableHead>
                    <TableHead className="text-muted-foreground uppercase text-xs">
                      DESCRIPTION
                    </TableHead>
                    <TableHead className="text-muted-foreground uppercase text-xs">
                      STATUS
                    </TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className="hover:bg-muted/50 cursor-pointer border-border"
                    >
                      <TableCell className="text-foreground">
                        {transaction.date}
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {transaction.amount}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {transaction.type}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {transaction.description}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-success-bg text-success hover:bg-success-bg">
                          • {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-4 space-y-4">
              {filteredTransactions.map((transaction) => (
                <Card
                  key={transaction.id}
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.date}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Amount</p>
                        <p className="font-medium text-foreground">
                          {transaction.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Type</p>
                        <p className="text-foreground">{transaction.type}</p>
                      </div>
                    </div>
                    <Badge className="bg-success-bg text-success hover:bg-success-bg">
                      • {transaction.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="border-t border-border p-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="text-muted-foreground"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">6</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">7</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">8</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">9</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">18</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">19</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="text-foreground" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
