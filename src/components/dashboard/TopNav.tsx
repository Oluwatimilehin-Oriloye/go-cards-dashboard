import { Bell, Settings, ChevronDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Greeting */}
        <div>
          <h2 className="text-lg font-semibold text-foreground">Hello Ikenga, 👋</h2>
          <p className="text-sm text-muted-foreground">Send, save and receive funds in various currencies</p>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Rates Link */}
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>See our rates</span>
          </Button>

          {/* Language Selector */}
          <Button variant="ghost" size="sm" className="gap-1">
            <span>English (US)</span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Profile */}
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-primary-foreground">IO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
