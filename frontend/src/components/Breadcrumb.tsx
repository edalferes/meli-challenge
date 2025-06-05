export default function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <a href="#" className="hover:underline text-[#3483fa]">Home</a> &gt;{' '}
      <a href="#" className="hover:underline text-[#3483fa]">Categoria</a> &gt;{' '}
      <span className="text-gray-800">Produto</span>
    </nav>
  );
}