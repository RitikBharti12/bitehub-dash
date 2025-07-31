import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <div className="bg-muted/40 rounded-2xl p-8 flex flex-col items-center shadow-soft">
        <ShoppingCart className="w-16 h-16 text-primary mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-foreground">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Button
          className="bg-primary text-white rounded-xl px-6 py-2 shadow-soft hover:shadow-food transition-all duration-300"
          onClick={() => navigate("/admin")}
        >
          Browse Restaurants
        </Button>
      </div>
    </div>
  );
}