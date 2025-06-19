
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
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e33?w=400&h=300&fit=crop',
    category: 'hot',
    badge: 'bestseller'
  },
  {
    id: '2',
    name: 'Cappuccino Supreme',
    description: 'Velvety steamed milk with our signature espresso blend',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'hot',
    badge: 'bestseller'
  },
  {
    id: '3',
    name: 'Caramel Macchiato',
    description: 'Sweet caramel with espresso and steamed milk',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'hot'
  },
  {
    id: '4',
    name: 'Iced Coffee Delight',
    description: 'Refreshing cold brew with your choice of milk',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    category: 'cold'
  },
  {
    id: '5',
    name: 'Frappé Supreme',
    description: 'Blended iced coffee with whipped cream',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1570968915860-85b9b52d2b8a?w=400&h=300&fit=crop',
    category: 'cold',
    badge: 'new'
  },
  {
    id: '6',
    name: 'Pumpkin Spice Latte',
    description: 'Seasonal favorite with warm spices and pumpkin flavor',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
    category: 'specialty',
    badge: 'seasonal'
  },
  {
    id: '7',
    name: 'Vanilla Latte',
    description: 'Smooth vanilla syrup with perfectly steamed milk',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop',
    category: 'hot'
  },
  {
    id: '8',
    name: 'Cold Brew Tonic',
    description: 'Refreshing cold brew with tonic water and citrus',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    category: 'cold',
    badge: 'new'
  }
];
