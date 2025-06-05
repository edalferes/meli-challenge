'use client';

interface PurchaseBoxProps {
  stock: number;
}

export default function PurchaseBox({ stock }: PurchaseBoxProps) {
  return (
    <div className="border rounded p-4 space-y-3 text-sm text-gray-800">
      <p className="text-green-600 font-semibold">Chegará grátis amanhã</p>
      <p className="text-gray-600 text-xs">Outras formas de entrega</p>

      <p className="mt-2">Estoque: {stock}</p>
      <p>Quantidade: 1 unidade</p>

      <button
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold"
      >
        Comprar agora
      </button>

      <button
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded font-semibold"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}