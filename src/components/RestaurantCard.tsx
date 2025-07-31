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
      className="group cursor-pointer overflow-hidden hover:shadow-food transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="text-white bg-black/70">
              Closed
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {cuisine}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-food-yellow text-food-yellow" />
            <span className="font-medium">{rating}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>${deliveryFee} delivery</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}