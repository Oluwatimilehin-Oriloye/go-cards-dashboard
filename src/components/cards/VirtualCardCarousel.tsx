import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { VirtualCardDisplay } from "./VirtualCardDisplay";
import { CreateCardButton } from "./CreateCardButton";

interface VirtualCardCarouselProps {
  selectedCardId: string;
  onCardSelect: (cardId: string) => void;
}

const cards = [
  { id: "temu-card", name: "Temu Card", balance: "₦50.00", lastFour: "6762" },
  { id: "jumia-card", name: "Jumia Card", balance: "₦150.00", lastFour: "8923" },
  { id: "konga-card", name: "Konga Card", balance: "₦75.00", lastFour: "3456" },
];

export function VirtualCardCarousel({ selectedCardId, onCardSelect }: VirtualCardCarouselProps) {
  return (
    <div className="relative px-12">
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id}>
              <div 
                className="cursor-pointer"
                onClick={() => onCardSelect(card.id)}
              >
                <VirtualCardDisplay
                  name={card.name}
                  balance={card.balance}
                  lastFour={card.lastFour}
                  isSelected={selectedCardId === card.id}
                />
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <CreateCardButton />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
