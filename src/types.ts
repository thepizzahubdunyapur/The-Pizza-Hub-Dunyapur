export type Category = 
  | 'All' 
  | 'Pizza' 
  | 'Burgers' 
  | 'Wings & Nuggets' 
  | 'Rolls' 
  | 'Fries' 
  | 'Pasta & Rice' 
  | 'Deals' 
  | 'Drinks';

export interface PizzaSizeOption {
  size: 'S' | 'M' | 'L' | 'F';
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  subCategory?: string;
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  calories?: string;
  prepTime?: string;
  sizeOptions?: PizzaSizeOption[];
}

export interface SpecialDeal {
  id: string;
  title: string;
  items: string[];
  originalPrice: number;
  price: number;
  image?: string;
  badge: string;
  savings: number;
  serves: string;
}

export interface CartItem {
  id: string;
  item: MenuItem | SpecialDeal;
  quantity: number;
  specialInstructions?: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  area: string;
  paymentMethod: 'cod' | 'easypaisa' | 'jazzcash' | 'card';
  notes?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  status: 'received' | 'preparing' | 'on_the_way' | 'delivered';
}

export interface FoodPartner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specialty: string;
  badge: string;
  accentColor: string;
}
