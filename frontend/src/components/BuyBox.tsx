'use client';

interface BuyBoxProps {
  stock: number;
  sellerName: string;
}

export default function BuyBox({ stock, sellerName }: BuyBoxProps) {
  return (
    <div className="border border-gray-200 rounded-md p-4 space-y-4 shadow-sm bg-white">
      <p className="text-green-600 font-semibold">Chegará grátis amanhã</p>
      <p className="text-sm text-blue-600">Outras formas de entrega</p>

      <p className="font-semibold text-gray-900">Estoque disponível:</p>
      <p className="text-gray-800">{stock}</p>

      <p className="font-semibold text-gray-900">Quantidade:</p>
      <p className="text-gray-800">1 unidade</p>

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-medium">
        Comprar agora
      </button>

      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 transition font-medium">
        Adicionar ao carrinho
      </button>

      <hr className="border-gray-200" />

      <p className="text-sm text-gray-600">
        Vendido por <span className="font-semibold text-gray-800">{sellerName}</span>
      </p>
    </div>
  );
}