import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative bg-gradient-food min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Food delivered to your
          <span className="block text-food-yellow">doorstep</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-slide-up">
          Order from your favorite restaurants and get fresh, hot meals delivered fast
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-food animate-scale-in">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Enter your delivery address" 
                className="pl-12 h-14 border-0 focus:ring-0 text-foreground bg-transparent"
              />
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search restaurants or dishes" 
                className="pl-12 h-14 border-0 focus:ring-0 text-foreground bg-transparent"
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-semibold">
              Find Food
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}