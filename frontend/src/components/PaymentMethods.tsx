// src/components/PaymentMethods.tsx

'use client';

interface PaymentMethodsProps {
  methods: string[];
}

export default function PaymentMethods({ methods }: PaymentMethodsProps) {
  return (
    <div className="space-y-2 mt-4">

      <h2 className="font-semibold text-gray-900">Métodos de pagamento:</h2>

      <ul className="list-disc list-inside text-gray-700">
        {methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>

    </div>
  );
}