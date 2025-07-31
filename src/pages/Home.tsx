import { Hero } from "@/components/Hero";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  },
  {
    id: "5",
    name: "Golden Dragon",
    image: restaurantImage,
    cuisine: "Chinese",
    rating: 4.3,
    deliveryTime: "35-45 min",
    deliveryFee: 2.49,
    isOpen: true
  },
  {
    id: "6",
    name: "Spice Garden",
    image: restaurantImage,
    cuisine: "Indian",
    rating: 4.8,
    deliveryTime: "40-50 min",
    deliveryFee: 3.49,
    isOpen: true
  },
  {
    id: "7",
    name: "Le Bistro",
    image: restaurantImage,
    cuisine: "French",
    rating: 4.9,
    deliveryTime: "45-55 min",
    deliveryFee: 4.99,
    isOpen: false
  },
  {
    id: "8",
    name: "Thai Delight",
    image: restaurantImage,
    cuisine: "Thai",
    rating: 4.2,
    deliveryTime: "30-40 min",
    deliveryFee: 2.99,
    isOpen: true
  },
  {
    id: "9",
    name: "Mediterranean Grill",
    image: restaurantImage,
    cuisine: "Mediterranean",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: 2.79,
    isOpen: true
  },
  {
    id: "10",
    name: "BBQ House",
    image: restaurantImage,
    cuisine: "BBQ",
    rating: 4.4,
    deliveryTime: "50-60 min",
    deliveryFee: 1.99,
    isOpen: true
  },
  {
    id: "11",
    name: "Vegan Paradise",
    image: restaurantImage,
    cuisine: "Vegan",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 2.49,
    isOpen: true
  },
  {
    id: "12",
    name: "Seafood Harbor",
    image: restaurantImage,
    cuisine: "Seafood",
    rating: 4.5,
    deliveryTime: "35-45 min",
    deliveryFee: 3.99,
    isOpen: false
  }
];

const categories = [
  { name: "American", emoji: "🍔" },
  { name: "Italian", emoji: "🍕" },
  { name: "Japanese", emoji: "🍣" },
  { name: "Mexican", emoji: "🌮" },
  { name: "Chinese", emoji: "🥡" },
  { name: "Indian", emoji: "🍛" },
  { name: "Thai", emoji: "🍜" },
  { name: "French", emoji: "🥐" },
  { name: "BBQ", emoji: "🍖" },
  { name: "Seafood", emoji: "🦐" },
  { name: "Vegan", emoji: "🥬" },
  { name: "Mediterranean", emoji: "🥙" }
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter restaurants based on selected category
  const filteredRestaurants = selectedCategory 
    ? featuredRestaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase() === selectedCategory.toLowerCase()
      )
    : featuredRestaurants;

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

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
          
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
             {categories.map((category) => (
               <div 
                 key={category.name}
                 onClick={() => handleCategoryClick(category.name)}
                 className={`flex flex-col items-center p-6 bg-white rounded-3xl shadow-soft hover:shadow-food cursor-pointer group transition-all duration-300 hover:-translate-y-2 border border-border/30 ${
                   selectedCategory === category.name 
                     ? 'ring-2 ring-primary shadow-food bg-primary/5' 
                     : ''
                 }`}
               >
                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                   {category.emoji}
                 </div>
                 <span className={`text-sm font-medium text-center transition-colors ${
                   selectedCategory === category.name 
                     ? 'text-primary font-semibold' 
                     : 'group-hover:text-primary'
                 }`}>
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
                {selectedCategory ? `${selectedCategory} Restaurants` : 'Featured Restaurants'}
              </h2>
              <p className="text-muted-foreground mt-2">
                {selectedCategory 
                  ? `Discover the best ${selectedCategory.toLowerCase()} restaurants in your area`
                  : 'Discover the best restaurants in your area'
                }
              </p>
            </div>
            <div className="flex items-center gap-3">
              {selectedCategory && (
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory(null)}
                  className="group border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Filter
                </Button>
              )}
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <RestaurantCard 
                  key={restaurant.id}
                  {...restaurant}
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No {selectedCategory} restaurants found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try selecting a different category or check back later
                </p>
                <Button 
                  onClick={() => setSelectedCategory(null)}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl"
                >
                  View All Restaurants
                </Button>
              </div>
            )}
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