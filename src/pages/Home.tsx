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
      
      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How we <span className="text-primary">Serve</span> you
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the fastest and most reliable food delivery service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl mx-auto flex items-center justify-center shadow-soft group-hover:shadow-food transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-3xl">📦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Automated Packaging</h3>
                <p className="text-muted-foreground leading-relaxed">
                  100% environment friendly packaging for all orders
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-gradient-success rounded-3xl mx-auto flex items-center justify-center shadow-soft group-hover:shadow-food transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Packed with Love</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver the best experience with our love
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-food-yellow/80 rounded-3xl mx-auto flex items-center justify-center shadow-soft group-hover:shadow-food transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-3xl">🍽️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Serve hot Appetite</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Precise to deliver within the desired time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-soft hover:shadow-food cursor-pointer group transition-all duration-300 hover:-translate-y-2 border border-border/30"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground">
                Featured Restaurants
              </h2>
              <p className="text-muted-foreground mt-2">
                Discover the best restaurants in your area
              </p>
            </div>
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
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

      {/* Promotional Banners */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buy 2 Get 1 Free */}
            <div className="relative bg-gradient-primary rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="text-lg font-medium mb-2">Buy 2</div>
                <div className="text-4xl font-bold mb-4">Get 1 free</div>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-xl">
                  Order Now
                </Button>
              </div>
              <div className="absolute -right-8 -bottom-8 text-8xl opacity-20">🍔</div>
            </div>

            {/* 20% Off */}
            <div className="relative bg-gradient-success rounded-3xl p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="text-6xl font-bold mb-2">20%</div>
                <div className="text-lg mb-4">Off on your first order</div>
                <Button variant="secondary" className="bg-white text-secondary hover:bg-white/90 rounded-xl">
                  Order Now
                </Button>
              </div>
              <div className="absolute -right-8 -bottom-8 text-8xl opacity-20">🍕</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Download our Mobile App
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the best food delivery experience on your mobile device
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-4 text-lg">
                📱 Download for iOS
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-8 py-4 text-lg">
                🤖 Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}