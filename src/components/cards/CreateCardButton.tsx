import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export function CreateCardButton() {
  const handleCreateCard = () => {
    toast.success("Create card functionality coming soon!");
  };

  return (
    <Card 
      onClick={handleCreateCard}
      className="
        h-48 p-6 cursor-pointer
        bg-card border-2 border-dashed border-border
        hover:border-primary hover:bg-muted
        transition-all duration-300
        flex flex-col items-center justify-center
        group
      "
    >
      <div className="
        w-16 h-16 rounded-full 
        bg-muted group-hover:bg-primary/10
        flex items-center justify-center
        transition-colors duration-300
        mb-4
      ">
        <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        Create New Card
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Add a new virtual card
      </p>
    </Card>
  );
}
