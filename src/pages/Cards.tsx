import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNav } from "@/components/dashboard/TopNav";
import { VirtualCardCarousel } from "@/components/cards/VirtualCardCarousel";
import { CardActions } from "@/components/cards/CardActions";
import { CardTransactions } from "@/components/cards/CardTransactions";

export default function Cards() {
  const [selectedCardId, setSelectedCardId] = useState("temu-card");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <TopNav />
        
        <main className="p-6 space-y-8">
          {/* Page Title */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Cards</h1>
          </div>

          {/* Card Carousel */}
          <VirtualCardCarousel 
            selectedCardId={selectedCardId}
            onCardSelect={setSelectedCardId}
          />

          {/* Action Buttons */}
          <CardActions selectedCardId={selectedCardId} />

          {/* Recent Transactions */}
          <CardTransactions selectedCardId={selectedCardId} />
        </main>
      </div>
    </div>
  );
}
