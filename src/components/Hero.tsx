import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative bg-gradient-hero min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-48 right-32 w-32 h-32 bg-food-yellow rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-secondary rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Fastest
                <span className="block text-primary">Delivery</span>
                <span className="text-foreground">& Easy</span>
                <span className="text-primary"> Pickup</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                When you are too lazy to cook, we are just a click away!
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl bg-white rounded-2xl p-2 shadow-soft border border-border">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Enter delivery address" 
                    className="pl-12 h-14 border-0 focus:ring-0 text-foreground bg-transparent text-base"
                  />
                </div>
                <Button size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl">
                  Find Restaurants
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">30min</div>
                <div className="text-sm text-muted-foreground">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">⭐ 4.8</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative w-96 h-96 mx-auto">
              {/* Yellow circle background */}
              <div className="absolute inset-0 bg-food-yellow rounded-full opacity-80"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-food-red rounded-full animate-pulse delay-500"></div>
              
              {/* Content overlay placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-foreground/80">
                  <div className="text-6xl mb-4">🍕</div>
                  <div className="text-lg font-medium">Delicious Food</div>
                  <div className="text-sm">Ready to Deliver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}