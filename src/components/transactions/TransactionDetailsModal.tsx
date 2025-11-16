import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, CreditCard, Hash, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  amount: string;
  type: "Inflow" | "Outflow";
  description: string;
  status: string;
  card: string;
}

interface TransactionDetailsModalProps {
  transaction: Transaction | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransactionDetailsModal({
  transaction,
  open,
  onOpenChange,
}: TransactionDetailsModalProps) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Transaction Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Amount Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-full ${
                  transaction.type === "Inflow"
                    ? "bg-success-bg"
                    : "bg-muted"
                }`}
              >
                {transaction.type === "Inflow" ? (
                  <ArrowDownRight className="h-5 w-5 text-success" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-2xl font-bold text-foreground">
                  {transaction.amount}
                </p>
              </div>
            </div>
            <Badge
              className={`${
                transaction.type === "Inflow"
                  ? "bg-success-bg text-success hover:bg-success-bg"
                  : "bg-muted text-muted-foreground hover:bg-muted"
              }`}
            >
              {transaction.type}
            </Badge>
          </div>

          <Separator />

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="text-sm font-medium text-foreground">
                  {transaction.id}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="text-sm font-medium text-foreground">
                  {transaction.date}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Card Used</p>
                <p className="text-sm font-medium text-foreground">
                  {transaction.card}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="text-sm font-medium text-foreground">
                  {transaction.description}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                <div className="h-2 w-2 rounded-full bg-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="bg-success-bg text-success hover:bg-success-bg mt-1">
                  • {transaction.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
