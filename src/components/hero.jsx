export default function Hero() {
  return (
    <section className="flex flex-1 items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Layanan Pengajuan Akta Kelahiran Online
        </h2>
        <p className="text-gray-600 mb-6">
          Mudah, cepat, dan terintegrasi untuk membantu masyarakat
          dalam pengurusan dokumen kependudukan.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Ajukan Sekarang
        </button>
      </div>
    </section>
  );
}