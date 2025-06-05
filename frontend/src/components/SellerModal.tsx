'use client';

interface SellerModalProps {
  sellerName: string;
  sellerSales: number;
  onClose: () => void;
}

export default function SellerModal({ sellerName, sellerSales, onClose }: SellerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Name */}
        <h2 className="text-2xl font-bold">{sellerName}</h2>

        {/* Seller */}
        <div className="text-gray-700 mb-4">
          <p className="text-lg font-semibold">+{(sellerSales / 1000).toFixed(0)} mil vendas</p>
        </div>

        {/* Performance bars */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Entrega no prazo</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="h-2 bg-green-500 rounded w-4/5"></div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Bom atendimento</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="h-2 bg-green-500 rounded w-3/5"></div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Experiência geral</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="h-2 bg-green-500 rounded w-2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}