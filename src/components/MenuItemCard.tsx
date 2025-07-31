import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  onAddToCart: (item: any, quantity: number) => void;
}

export function MenuItemCard({
  id,
  name,
  description,
  price,
  image,
  category,
  isVegetarian,
  isSpicy,
  onAddToCart
}: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      onAddToCart({ id, name, description, price, image }, 1);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    onAddToCart({ id, name, description, price, image }, newQuantity);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-food transition-all duration-300 bg-white border border-border/30 rounded-2xl">
      <CardContent className="p-0">
        <div className="flex">
          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-xl group-hover:text-primary transition-colors leading-tight">
                {name}
              </h3>
              <div className="flex gap-2">
                {isVegetarian && (
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 rounded-lg">
                    🌱 Veg
                  </Badge>
                )}
                {isSpicy && (
                  <Badge variant="secondary" className="bg-food-red/10 text-food-red border-food-red/20 rounded-lg">
                    🌶️ Spicy
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-2xl font-bold text-primary">
                  ${price.toFixed(2)}
                </span>
                <div className="text-xs text-muted-foreground">
                  {category}
                </div>
              </div>
              
              {/* Add to Cart / Quantity Controls */}
              {quantity === 0 ? (
                <Button 
                  size="lg" 
                  onClick={handleAddToCart}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 shadow-soft hover:shadow-food transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              ) : (
                <div className="flex items-center gap-3 bg-muted/50 rounded-xl p-1">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="h-8 w-8 rounded-lg hover:bg-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-lg min-w-[2rem] text-center text-foreground">
                    {quantity}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-28 h-28 m-6 flex-shrink-0">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-soft"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}