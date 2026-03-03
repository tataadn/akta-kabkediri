export default function DownloadSection() {
  return (
    <section id="download" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">

        <h3 className="text-2xl font-bold justify-center item-center text-center text-gray-800">
          Formulir & Contoh Dokumen
        </h3>

        {/* FORMULIR DOWNLOAD */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="font-bold mb-4 text-blue-600">
            📄 Download Formulir (Wajib Diunduh & Dicetak)
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/pdf/formulir1.pdf" download className="text-blue-600 hover:underline">
                Download Formulir F-1.01 (WAJIB)
              </a>
            </li>
            <li>
              <a href="/pdf/formulir2.pdf" download className="text-blue-600 hover:underline">
                Download Formulir F-1.02 (WAJIB)
              </a>
            </li>
            <li>
              <a href="/pdf/formulir3.pdf" download className="text-blue-600 hover:underline">
                Download Formulir F-2.01 (WAJIB)
              </a>
            </li>
          </ul>
        </div>

        {/* CONTOH PENGISIAN (PREVIEW PDF) */}
        <div>
          <h4 className="font-bold mb-6 text-blue-600 text-lg">
            📝 Contoh Pengisian Formulir
          </h4>

          <div className="space-y-8">
            <iframe
              src="/pdf/contoh1.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Contoh Pengisian 1"
            />
            <iframe
              src="/pdf/contoh2.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Contoh Pengisian 2"
            />
            <iframe
              src="/pdf/contoh3.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Contoh Pengisian 3"
            />
          </div>
        </div>

        {/* CONTOH DOKUMEN (GAMBAR) */}
        <div>
          <h4 className="font-bold mb-6 text-blue-600 text-lg">
            🪪 Contoh Dokumen
          </h4>
          <h4 className="font-bold mb-6 text-red-600 text-lg">
            1. FC KTP SUAMI ISTRI + 2 ORANG SAKSI DARI PIHAK KELUARGA (WAJIB) <br />
            2. FC WARNA BUKU NIKAH WAJIB SESUAI KETENTUAN (WAJIB) <br />
            3. KK ASLI (WAJIB) <br />
            4. SURAT KETERANGAN LAHIR DARI RUMAH SAKIT (WAJIB) <br />
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="/pdf/contoh-ktp.jpeg"
              alt="Contoh KTP"
              className="rounded-lg shadow-md"
            />
            <img
              src="/pdf/contoh-buku-nikah.jpeg"
              alt="Contoh Buku Nikah"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            <iframe
              src="/pdf/contoh-kk.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Contoh file KK"
            />
            <iframe
              src="/pdf/contoh-skl.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Contoh Surat Keterangan Lahir"
            />
          </div>
        </div>

      </div>
    </section>
  );
}