import { API_URL } from './config';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  payment_methods: string[];
  images: string[];
  seller: {
    name: string;
    sales: number;
  };
  stock: number;
}

export async function fetchProducts(): Promise<Product[]> {
  console.log('Fetching products from:', `${API_URL}/products`);
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to load products. Please check your API connection.');
  }
}

export async function fetchProductById(id: string): Promise<Product> {
  console.log('Fetching product by id from:', `${API_URL}/products/${id}`);
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) {
    if (res.status === 404) throw new Error('404');
    throw new Error('Failed to fetch product');
  }
  return res.json();
}