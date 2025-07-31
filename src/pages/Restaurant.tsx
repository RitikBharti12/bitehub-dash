import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Star, Clock, DollarSign, MapPin, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import restaurantImage from "@/assets/restaurant-1.jpg";
import burgerImage from "@/assets/burger.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import sushiImage from "@/assets/sushi.jpg";

const restaurantData = {
  id: "1",
  name: "Burger Palace",
  image: restaurantImage,
  cuisine: "American",
  rating: 4.5,
  reviewCount: 1250,
  deliveryTime: "25-35 min",
  deliveryFee: 2.99,
  minimumOrder: 15,
  isOpen: true,
  description: "Serving the best gourmet burgers in town with fresh ingredients and unique flavors.",
  address: "123 Food Street, Downtown",
  phone: "(555) 123-4567"
};

const menuCategories = [
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        id: "1",
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce",
        price: 12.99,
        image: burgerImage,
        category: "burgers",
        isVegetarian: false,
        isSpicy: false
      },
      {
        id: "2", 
        name: "Spicy Chicken Burger",
        description: "Crispy chicken breast with spicy mayo, jalapenos, and pepper jack cheese",
        price: 13.99,
        image: burgerImage,
        category: "burgers",
        isVegetarian: false,
        isSpicy: true
      },
      {
        id: "3",
        name: "Veggie Delight",
        description: "Plant-based patty with avocado, sprouts, and tahini sauce",
        price: 11.99,
        image: burgerImage,
        category: "burgers",
        isVegetarian: true,
        isSpicy: false
      }
    ]
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        id: "4",
        name: "Crispy Fries",
        description: "Golden crispy potato fries with sea salt",
        price: 4.99,
        image: pizzaImage,
        category: "sides",
        isVegetarian: true,
        isSpicy: false
      },
      {
        id: "5",
        name: "Onion Rings",
        description: "Beer-battered onion rings with ranch dipping sauce",
        price: 6.99,
        image: pizzaImage,
        category: "sides",
        isVegetarian: true,
        isSpicy: false
      }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "6",
        name: "Fresh Lemonade",
        description: "House-made lemonade with fresh mint",
        price: 3.99,
        image: sushiImage,
        category: "drinks",
        isVegetarian: true,
        isSpicy: false
      }
    ]
  }
];

export default function Restaurant() {
  const { id } = useParams();
  const { toast } = useToast();
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (item: any, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(cartItem => cartItem.id !== item.id));
      toast({
        title: "Removed from cart",
        description: `${item.name} removed from your cart`
      });
    } else {
      setCart(prev => {
        const existing = prev.find(cartItem => cartItem.id === item.id);
        if (existing) {
          return prev.map(cartItem => 
            cartItem.id === item.id 
              ? { ...cartItem, quantity }
              : cartItem
          );
        }
        toast({
          title: "Added to cart",
          description: `${item.name} added to your cart`
        });
        return [...prev, { ...item, quantity }];
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Restaurant Header */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={restaurantData.image} 
            alt={restaurantData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {restaurantData.name}
                </h1>
                <p className="text-lg text-white/90 mb-4">
                  {restaurantData.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-food-yellow text-food-yellow" />
                    <span className="font-medium">{restaurantData.rating}</span>
                    <span className="text-white/70">({restaurantData.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurantData.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>${restaurantData.deliveryFee} delivery</span>
                  </div>
                </div>
              </div>
              
              <Badge 
                variant={restaurantData.isOpen ? "default" : "secondary"} 
                className={restaurantData.isOpen ? "bg-food-green" : "bg-muted"}
              >
                {restaurantData.isOpen ? "Open" : "Closed"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{restaurantData.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>Minimum order: ${restaurantData.minimumOrder}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Menu Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="burgers" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {menuCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        {...item}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border p-6">
              <h3 className="font-semibold text-lg mb-4">Your Order</h3>
              
              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-muted-foreground text-xs">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </div>
                      </div>
                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}