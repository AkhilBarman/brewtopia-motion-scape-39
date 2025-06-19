
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { coffeeMenu, Coffee } from '@/data/coffeeMenu';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MenuSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'hot' | 'cold' | 'specialty'>('all');

  const filteredMenu = filter === 'all' 
    ? coffeeMenu 
    : coffeeMenu.filter(item => item.category === filter);

  const handleAddToCart = (coffee: Coffee) => {
    addToCart({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      description: coffee.description
    });
    
    toast({
      title: "Added to cart!",
      description: `${coffee.name} has been added to your cart.`,
    });
  };

  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'bestseller': return 'default';
      case 'new': return 'secondary';
      case 'seasonal': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section id="menu" className="py-20 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 dark:text-amber-200 mb-4">
            Our Coffee Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffees, each made with love and the finest ingredients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {[
              { key: 'all', label: 'All' },
              { key: 'hot', label: 'Hot Drinks' },
              { key: 'cold', label: 'Cold Drinks' },
              { key: 'specialty', label: 'Specialty' }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? 'default' : 'outline'}
                onClick={() => setFilter(key as any)}
                className="bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((coffee) => (
            <Card key={coffee.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {coffee.badge && (
                    <Badge 
                      variant={getBadgeVariant(coffee.badge)}
                      className="absolute top-3 left-3 capitalize"
                    >
                      {coffee.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  {coffee.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-3">
                  {coffee.description}
                </CardDescription>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  ${coffee.price.toFixed(2)}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(coffee)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
