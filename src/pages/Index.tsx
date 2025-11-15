import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNav } from "@/components/dashboard/TopNav";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { VirtualCardsSection } from "@/components/dashboard/VirtualCardsSection";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 pl-64">
        <TopNav />

        <main className="p-6 space-y-8">
          {/* Hero Section */}
          <HeroSection />

          {/* Virtual Cards Section */}
          <VirtualCardsSection />

          {/* Quick Actions */}
          <QuickActions />

          {/* Recent Transactions */}
          <RecentTransactions />
        </main>
      </div>
    </div>
  );
};

export default Index;
