'use client';

interface ErrorMessageProps {
  type: '404' | '500';
}

export default function ErrorMessage({ type }: ErrorMessageProps) {
  let title = '';
  let message = '';
  let bgColor = '';

  if (type === '404') {
    title = 'Produto não encontrado';
    message = 'O produto que você está procurando não existe ou foi removido.';
    bgColor = 'bg-yellow-100 border-yellow-400 text-yellow-700';
  } else {
    title = 'Erro de conexão com a API';
    message = 'Não foi possível carregar os dados. Verifique sua conexão com a API.';
    bgColor = 'bg-red-100 border-red-400 text-red-700';
  }

  return (
    <div className={`border ${bgColor} px-4 py-3 rounded relative max-w-3xl mx-auto mt-8`} role="alert">
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
}