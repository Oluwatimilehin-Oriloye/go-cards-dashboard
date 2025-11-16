import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Unlink, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Platform {
  name: string;
  cardLastFour: string;
}

interface ManagePlatformModalProps {
  platform: Platform;
  isOpen: boolean;
  onClose: () => void;
}

export function ManagePlatformModal({ platform, isOpen, onClose }: ManagePlatformModalProps) {
  const handleRemoveCard = () => {
    toast.success(`Card removed from ${platform.name}`);
    onClose();
  };

  const handleReplaceCard = () => {
    toast.info("Card replacement feature coming soon");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Manage {platform.name}</DialogTitle>
          <DialogDescription>
            View and manage the virtual card linked to this platform
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {/* Linked Card Display */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{platform.name}</h4>
                <p className="text-sm text-muted-foreground">
                  •••• •••• •••• {platform.cardLastFour}
                </p>
              </div>
            </div>
          </Card>

          {/* Info Note */}
          <div className="mt-4 p-4 rounded-lg bg-muted/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Removing a card does not delete
              it — only unlinks it from this platform.
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button
            onClick={handleReplaceCard}
            variant="outline"
            className="w-full"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Replace Linked Card
          </Button>
          <Button
            onClick={handleRemoveCard}
            variant="destructive"
            className="w-full"
          >
            <Unlink className="w-4 h-4 mr-2" />
            Remove Card from Platform
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
