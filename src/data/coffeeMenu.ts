
export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hot' | 'cold' | 'specialty';
  badge?: 'bestseller' | 'new' | 'seasonal';
}

export const coffeeMenu: Coffee[] = [
  {
    id: '1',
    name: 'Classic Espresso',
    description: 'Rich, bold espresso shot with perfect crema',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop&auto=format',
    category: 'hot',
    badge: 'bestseller'
  },
  {
    id: '2',
    name: 'Cappuccino Supreme',
    description: 'Velvety steamed milk with our signature espresso blend',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    category: 'hot',
    badge: 'bestseller'
  },
  {
    id: '3',
    name: 'Caramel Macchiato',
    description: 'Sweet caramel with espresso and steamed milk',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
    category: 'hot'
  },
  {
    id: '4',
    name: 'Iced Coffee Delight',
    description: 'Refreshing cold brew with your choice of milk',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop&auto=format',
    category: 'cold'
  },
  {
    id: '5',
    name: 'Frappé Supreme',
    description: 'Blended iced coffee with whipped cream',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1570968915860-85b9b52d2b8a?w=400&h=300&fit=crop&auto=format',
    category: 'cold',
    badge: 'new'
  },
  {
    id: '6',
    name: 'Pumpkin Spice Latte',
    description: 'Seasonal favorite with warm spices and pumpkin flavor',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1602057590004-dfb9ad996e20?w=400&h=300&fit=crop&auto=format',
    category: 'specialty',
    badge: 'seasonal'
  },
  {
    id: '7',
    name: 'Vanilla Latte',
    description: 'Smooth vanilla syrup with perfectly steamed milk',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&auto=format',
    category: 'hot'
  },
  {
    id: '8',
    name: 'Cold Brew Tonic',
    description: 'Refreshing cold brew with tonic water and citrus',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&auto=format',
    category: 'cold',
    badge: 'new'
  }
];
