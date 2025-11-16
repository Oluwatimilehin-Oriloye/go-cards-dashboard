import { Info, Plus, Snowflake, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface CardActionsProps {
  selectedCardId: string;
}

export function CardActions({ selectedCardId }: CardActionsProps) {
  const handleDetails = () => {
    toast.info("Card details functionality coming soon!");
  };

  const handleAddMoney = () => {
    toast.info("Add money functionality coming soon!");
  };

  const handleFreeze = () => {
    toast.success("Card has been frozen successfully");
  };

  const handleDelete = () => {
    toast.success("Card has been deleted successfully");
  };

  return (
    <div className="flex justify-center gap-8">
      {/* Details */}
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={handleDetails}
          size="icon"
          className="h-14 w-14 rounded-full bg-foreground text-background hover:bg-foreground/90"
        >
          <Info className="h-6 w-6" />
        </Button>
        <span className="text-sm font-medium text-foreground">Details</span>
      </div>

      {/* Add Money */}
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={handleAddMoney}
          size="icon"
          variant="outline"
          className="h-14 w-14 rounded-full border-2"
        >
          <Plus className="h-6 w-6" />
        </Button>
        <span className="text-sm font-medium text-foreground">Add Money</span>
      </div>

      {/* Freeze */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex flex-col items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              className="h-14 w-14 rounded-full border-2"
            >
              <Snowflake className="h-6 w-6" />
            </Button>
            <span className="text-sm font-medium text-foreground">Freeze</span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Freeze Card?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to freeze this card? You can unfreeze it anytime from card details.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleFreeze} className="bg-primary hover:bg-primary/90">
              Yes, Freeze Card
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex flex-col items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              className="h-14 w-14 rounded-full border-2 hover:border-destructive hover:text-destructive"
            >
              <Trash2 className="h-6 w-6" />
            </Button>
            <span className="text-sm font-medium text-foreground">Delete</span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Card?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this card? This action cannot be undone and all card data will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Yes, Delete Card
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
