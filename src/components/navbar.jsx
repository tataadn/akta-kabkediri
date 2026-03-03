import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            RS
          </div> */}
          <img
              src="/logo-saja.png"
              alt="Logo RS DKT Kediri"
              className="w-12 h-12 flex items-center justify-center"
            />
          <div>
            <h1 className="font-bold text-gray-800">
              RS DKT Kediri
            </h1>
            <p className="text-xs text-gray-500">
              Layanan Akta Kelahiran Kab Kediri
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#persyaratan" className="hover:text-blue-600 transition">
            Persyaratan
          </a>
          <a href="#download" className="hover:text-blue-600 transition">
            Formulir
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm text-gray-700">
          <a href="#persyaratan" className="block hover:text-blue-600">
            Persyaratan
          </a>
          <a href="#download" className="block hover:text-blue-600">
            Formulir
          </a>
          {/* <a href="#validasi" className="block hover:text-blue-600">
            Validasi 40 Hari
          </a> */}
        </div>
      )}
    </nav>
  );
}