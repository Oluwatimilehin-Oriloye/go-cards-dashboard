import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CreateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCardCount: number;
  maxCards: number;
}

export function CreateCardModal({ isOpen, onClose, currentCardCount, maxCards }: CreateCardModalProps) {
  const [cardName, setCardName] = useState("");
  const isLimitReached = currentCardCount >= maxCards;

  const handleCreateCard = () => {
    if (isLimitReached) {
      toast.error(`Limit reached — you can only own ${maxCards} virtual cards.`);
      return;
    }

    if (!cardName.trim()) {
      toast.error("Please enter a card name");
      return;
    }

    toast.success(`Virtual card "${cardName}" created successfully!`);
    setCardName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Virtual Card</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isLimitReached 
              ? `You've reached the maximum limit of ${maxCards} cards`
              : `You have ${maxCards - currentCardCount} card slot(s) available`
            }
          </DialogDescription>
        </DialogHeader>

        {isLimitReached ? (
          <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
            <p className="text-sm text-destructive">
              Limit reached — you can only own {maxCards} virtual cards. Please delete an existing card to create a new one.
            </p>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="cardName">Card Name</Label>
              <Input
                id="cardName"
                placeholder="e.g., Netflix Card, Shopping Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground">
                Choose a memorable name for your card
              </p>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {!isLimitReached && (
            <Button onClick={handleCreateCard}>
              Create Card
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
