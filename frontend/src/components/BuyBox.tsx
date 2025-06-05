'use client';

import { useState } from 'react';

interface BuyBoxProps {
  stock: number;
  sellerName: string;
}

export default function BuyBox({ stock, sellerName }: BuyBoxProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const maxOptions = Math.min(stock, 10);

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-4 w-full">

      <p className="text-green-600 font-semibold">Chegará grátis amanhã</p>

      <div className="text-gray-800 space-y-2">
        <div>
          <p className="font-semibold">Estoque disponível:</p>
          <p>{stock} unidades</p>
        </div>

        <div>
          <p className="font-semibold mb-1">Quantidade:</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Array.from({ length: maxOptions }, (_, i) => i + 1).map((qty) => (
              <option key={qty} value={qty}>
                {qty} {qty === 1 ? 'unidade' : 'unidades'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
        Comprar agora
      </button>

      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded">
        Adicionar ao carrinho
      </button>

      <div className="pt-2 border-t border-gray-200 text-sm text-gray-600">
        Vendido por <span className="font-semibold">{sellerName}</span>
      </div>
    </div>
  );
}