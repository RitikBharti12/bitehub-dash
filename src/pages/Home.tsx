import { Hero } from "@/components/Hero";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import restaurantImage from "@/assets/restaurant-1.jpg";

const featuredRestaurants = [
  {
    id: "1",
    name: "Burger Palace",
    image: restaurantImage,
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    isOpen: true
  },
  {
    id: "2", 
    name: "Pizza Corner",
    image: restaurantImage,
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "30-45 min",
    deliveryFee: 1.99,
    isOpen: true
  },
  {
    id: "3",
    name: "Sushi Express",
    image: restaurantImage,
    cuisine: "Japanese",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 3.99,
    isOpen: false
  },
  {
    id: "4",
    name: "Taco Fiesta",
    image: restaurantImage,
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "15-25 min",
    deliveryFee: 1.49,
    isOpen: true
  }
];

const categories = [
  { name: "Burgers", emoji: "🍔" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Mexican", emoji: "🌮" },
  { name: "Chinese", emoji: "🥡" },
  { name: "Indian", emoji: "🍛" },
  { name: "Desserts", emoji: "🍰" },
  { name: "Healthy", emoji: "🥗" }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-card hover:shadow-food cursor-pointer group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">
              Featured Restaurants
            </h2>
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id}
                {...restaurant}
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Partner Restaurants</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100K+</div>
              <div className="text-primary-foreground/80">Orders Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How BiteHub Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-food rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Choose Restaurant</h3>
              <p className="text-muted-foreground">
                Browse through hundreds of restaurants and find your favorite cuisine
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-food rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Order Food</h3>
              <p className="text-muted-foreground">
                Select your favorite dishes and add them to your cart
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-food rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your order delivered fresh and hot to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}