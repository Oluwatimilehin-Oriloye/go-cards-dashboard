import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="rounded-xl bg-gradient-to-br from-background to-secondary p-8 shadow-sm border border-border">
      <div className="max-w-2xl">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Get your finances in your hands
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Manage, fund, track and control all your cards from one place.
        </p>
        <Button 
          size="lg" 
          className="gap-2 shadow-md hover:shadow-lg transition-all"
          aria-label="Create a new virtual card"
        >
          Create Virtual Card Now
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
