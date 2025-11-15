import { Send, Wallet, FileText, CreditCard, Receipt } from "lucide-react";
import { Card } from "@/components/ui/card";

const actions = [
  {
    icon: Send,
    title: "Send",
    description: "Send money to 80+ countries instantly",
  },
  {
    icon: Wallet,
    title: "Fund",
    description: "Add funds to your account",
  },
  {
    icon: FileText,
    title: "Request Statement",
    description: "Download transaction history",
  },
  {
    icon: CreditCard,
    title: "Virtual Card",
    description: "Create and manage cards",
  },
  {
    icon: Receipt,
    title: "Pay Bills",
    description: "Pay for internet, cable and utility bills",
  },
];

export function QuickActions() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-foreground">Quick Actions</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {actions.map((action) => (
          <Card
            key={action.title}
            className="group cursor-pointer border border-border bg-secondary p-6 transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-primary"
          >
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
              <action.icon className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-foreground">{action.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{action.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
