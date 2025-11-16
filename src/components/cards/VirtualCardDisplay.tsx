import { CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

interface VirtualCardDisplayProps {
  name: string;
  balance: string;
  lastFour: string;
  isSelected?: boolean;
}

export function VirtualCardDisplay({ name, balance, lastFour, isSelected }: VirtualCardDisplayProps) {
  return (
    <Card className={`
      relative overflow-hidden h-48 p-6 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
      text-white
      transition-all duration-300
      ${isSelected ? 'shadow-2xl scale-105' : 'shadow-lg'}
    `}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 -right-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
      </div>

      {/* Card Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <CreditCard className="h-8 w-8 text-white/80" />
          <div className="text-right">
            <p className="text-xs text-white/70">{name}</p>
          </div>
        </div>

        {/* Middle Section - Card Number */}
        <div>
          <p className="text-lg tracking-wider font-mono">
            **** **** **** {lastFour}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-white/70 mb-1">Balance</p>
            <p className="text-2xl font-bold">{balance}</p>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-red-500 opacity-80" />
            <div className="w-8 h-8 rounded-full bg-orange-500 opacity-80 -ml-4" />
          </div>
        </div>
      </div>
    </Card>
  );
}
