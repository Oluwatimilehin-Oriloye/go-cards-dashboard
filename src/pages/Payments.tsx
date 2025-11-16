import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNav } from "@/components/dashboard/TopNav";
import { LinkedPlatformsGrid } from "@/components/payments/LinkedPlatformsGrid";

const Payments = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 pl-64">
        <TopNav />

        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Payments</h1>
          </div>

          {/* Linked Platforms Section */}
          <LinkedPlatformsGrid />
        </main>
      </div>
    </div>
  );
};

export default Payments;
