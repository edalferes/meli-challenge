// src/components/BuyBox.tsx

'use client';

interface BuyBoxProps {
  stock: number;
  sellerName: string;
}

export default function BuyBox({ stock, sellerName }: BuyBoxProps) {
  return (
    <div className="border p-4 rounded space-y-3 text-sm text-gray-800 w-full">

      <p className="text-green-600 font-semibold">Chegará grátis amanhã</p>
      <p className="text-blue-600 text-xs cursor-pointer">Outras formas de entrega</p>

      <p className="mt-2"><span className="font-semibold">Estoque disponível:</span> {stock}</p>
      <p><span className="font-semibold">Quantidade:</span> 1 unidade</p>

      <button className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition">
        Comprar agora
      </button>

      <button className="w-full bg-gray-100 text-gray-900 py-2 rounded font-semibold hover:bg-gray-200 transition">
        Adicionar ao carrinho
      </button>

      <div className="text-xs text-gray-600 border-t pt-2 mt-2">
        Vendido por <span className="font-semibold">{sellerName}</span>
      </div>

    </div>
  );
}