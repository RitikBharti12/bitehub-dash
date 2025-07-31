import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  User, 
  MapPin, 
  Menu,
  Store,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [cartCount] = useState(0);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-food transition-all duration-300">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-foreground">BiteHub</span>
              <div className="text-xs text-muted-foreground">Food Delivery</div>
            </div>
          </div>

          {/* Location (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 bg-muted/30 rounded-xl px-4 py-2">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium text-foreground">Deliver to</div>
              <div className="text-xs text-muted-foreground">Current Location</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/admin')}
                className="hover:bg-accent text-foreground hover:text-primary transition-colors rounded-xl"
              >
                <Store className="h-4 w-4 mr-2" />
                Restaurant
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="hover:bg-accent text-foreground hover:text-primary transition-colors rounded-xl"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </div>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative hover:bg-accent rounded-xl p-3"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary border-2 border-white"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 shadow-soft hover:shadow-food transition-all duration-300"
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden hover:bg-accent rounded-xl p-3">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}