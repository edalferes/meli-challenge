interface PaymentMethodsProps {
  methods: string[];
}

export default function PaymentMethods({ methods }: PaymentMethodsProps) {
  const icons: Record<string, string> = {
    credit_card: '💳',
    pix: '⚡',
    boleto: '🏦',
  };

  return (
    <div className="space-x-2 text-xl">
      {methods.map((method) => (
        <span key={method} title={method} className="inline-block">
          {icons[method] || '💰'}
        </span>
      ))}
    </div>
  );
}