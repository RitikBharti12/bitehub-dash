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
    <Card className="group overflow-hidden hover:shadow-card transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex">
          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              <div className="flex gap-1">
                {isVegetarian && (
                  <Badge variant="secondary" className="bg-food-green text-white">
                    Veg
                  </Badge>
                )}
                {isSpicy && (
                  <Badge variant="secondary" className="bg-food-red text-white">
                    🌶️
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                ${price.toFixed(2)}
              </span>
              
              {/* Add to Cart / Quantity Controls */}
              {quantity === 0 ? (
                <Button 
                  size="sm" 
                  onClick={handleAddToCart}
                  className="bg-primary hover:bg-primary-dark"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-lg min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className="w-24 h-24 m-4 flex-shrink-0">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}