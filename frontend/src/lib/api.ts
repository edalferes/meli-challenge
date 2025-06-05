// src/lib/api.ts

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
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  console.log('Fetching product by id from:', `${API_URL}/products/${id}`);
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}