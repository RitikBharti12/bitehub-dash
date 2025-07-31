import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  isOpen: boolean;
  onClick?: () => void;
}

export function RestaurantCard({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  isOpen,
  onClick
}: RestaurantCardProps) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-food transition-all duration-300 hover:-translate-y-2 bg-white border border-border/30 rounded-3xl"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!isOpen && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <Badge variant="secondary" className="text-white bg-black/70 rounded-xl px-4 py-2">
              Closed
            </Badge>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm rounded-xl px-3 py-1 shadow-soft">
            {cuisine}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 bg-food-yellow/10 rounded-lg px-2 py-1">
            <Star className="h-4 w-4 fill-food-yellow text-food-yellow" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>${deliveryFee}</span>
          </div>
        </div>
        
        {/* Delivery fee highlight */}
        <div className="mt-3 text-xs text-muted-foreground">
          Free delivery over $25
        </div>
      </CardContent>
    </Card>
  );
}