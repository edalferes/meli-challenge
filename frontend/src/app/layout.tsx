import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Mercado Livre - Challenge',
  description: 'Página de detalhes de produtos - Mercado Livre',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="max-w-7xl mx-auto py-6 px-4">{children}</main>
      </body>
    </html>
  );
}