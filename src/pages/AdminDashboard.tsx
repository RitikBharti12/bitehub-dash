import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-food-green"
  },
  {
    title: "Orders Today",
    value: "45",
    change: "+8.2%", 
    icon: ShoppingBag,
    color: "text-primary"
  },
  {
    title: "Total Customers",
    value: "1,234",
    change: "+5.1%",
    icon: Users,
    color: "text-secondary"
  },
  {
    title: "Average Order",
    value: "$28.50",
    change: "+3.8%",
    icon: TrendingUp,
    color: "text-food-yellow"
  }
];

const recentOrders = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    items: "2x Burger, 1x Fries",
    total: 25.97,
    status: "preparing",
    time: "2 min ago"
  },
  {
    id: "ORD-002", 
    customerName: "Jane Smith",
    items: "1x Pizza, 2x Drinks",
    total: 18.99,
    status: "ready",
    time: "5 min ago"
  },
  {
    id: "ORD-003",
    customerName: "Mike Johnson", 
    items: "3x Sushi Rolls",
    total: 32.50,
    status: "delivered",
    time: "12 min ago"
  }
];

const menuItems = [
  {
    id: "1",
    name: "Classic Burger",
    description: "Beef patty with lettuce, tomato, cheese",
    price: 12.99,
    category: "Burgers",
    isAvailable: true
  },
  {
    id: "2", 
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil",
    price: 15.99,
    category: "Pizza", 
    isAvailable: true
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons",
    price: 9.99,
    category: "Salads",
    isAvailable: false
  }
];

export default function AdminDashboard() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing": return "bg-food-yellow";
      case "ready": return "bg-primary";
      case "delivered": return "bg-food-green";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing": return <Clock className="h-4 w-4" />;
      case "ready": return <AlertCircle className="h-4 w-4" />;
      case "delivered": return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
            <p className="text-muted-foreground">Manage your restaurant operations</p>
          </div>
          <Button className="bg-primary hover:bg-primary-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-food-green font-medium">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="menu">Menu Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage incoming orders and update their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors"
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="space-y-1">
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customerName}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm">{order.items}</p>
                          <p className="text-sm text-muted-foreground">{order.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold">${order.total.toFixed(2)}</p>
                          <Badge 
                            variant="secondary" 
                            className={`${getStatusColor(order.status)} text-white`}
                          >
                            <span className="flex items-center gap-1">
                              {getStatusIcon(order.status)}
                              {order.status}
                            </span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Management Tab */}
          <TabsContent value="menu">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Menu Items List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Menu Items</CardTitle>
                    <CardDescription>Manage your restaurant menu</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {menuItems.map((item) => (
                        <div 
                          key={item.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{item.name}</h3>
                              <Badge variant={item.isAvailable ? "default" : "secondary"}>
                                {item.isAvailable ? "Available" : "Unavailable"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="font-semibold text-primary">${item.price}</span>
                              <span className="text-muted-foreground">{item.category}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Add/Edit Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Item</CardTitle>
                    <CardDescription>Add a new item to your menu</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="item-name">Item Name</Label>
                      <Input id="item-name" placeholder="Enter item name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="item-description">Description</Label>
                      <Textarea 
                        id="item-description" 
                        placeholder="Enter item description"
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="item-price">Price</Label>
                      <Input 
                        id="item-price" 
                        type="number" 
                        step="0.01"
                        placeholder="0.00" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="item-category">Category</Label>
                      <Input id="item-category" placeholder="Enter category" />
                    </div>
                    
                    <Button className="w-full">
                      Add Item
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Revenue trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Chart placeholder - Analytics will be implemented with real data
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Popular Items</CardTitle>
                  <CardDescription>Best performing menu items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Classic Burger</span>
                      <span className="font-semibold">127 orders</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Margherita Pizza</span>
                      <span className="font-semibold">98 orders</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Caesar Salad</span>
                      <span className="font-semibold">76 orders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}