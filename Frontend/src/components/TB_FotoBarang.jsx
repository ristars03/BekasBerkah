import { Link } from 'react-router-dom';

const TB_FotoBarang = () => {
  const images = Array(10).fill(null);

  return (
    <div className='w-[1444px] relative mt-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto'>
      <h1 className='text-3xl font-bold py-4 px-4'>Foto Barang</h1>
      <div className="flex items-center">
        <div className="px-4 py-2 text-zinc-700 font-bold">Foto Barang</div>
        <div className="px-2 bg-green-700 rounded text-white text-xs ml-2">Wajib</div>
      </div>
      <div className="flex">
        {/* Kolom Keterangan */}
        <div className="w-[340px] px-4 text-zinc-700">
          Masukan foto barang secara jelas dari segala sisi yang mendukung.
        </div>

        {/* Kolom Foto Barang */}
        <Link to="" className="grid grid-cols-5 gap-10 ml-8 mt-[-32px] px-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-32 w-32"
            >
              <div className="text-gray-400 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                {index === 0 ? 'Foto Utama 1' : `Foto ${index + 1}`}
              </div>
            </div>
          ))}
        </Link>
      </div>
      <div className="flex items-center pt-12">
        <div className="px-4 py-2 text-zinc-700 font-bold">Hasil Scan</div>
      </div>
      <div className="flex items-start justify-between">
        <div className="w-[340px] px-4 text-zinc-700">Hasil scan kelayakan barang. Jika keterangan barang <b>"Layak"</b> dapat lanjut ke tahap berikutnya. Jika keterangan barang <b>"Tidak Layak"</b> maka barang tidak dapat di upload pada platform BekasBerkah.</div>
        <div className="flex-grow px-10 mt-[-46px]">
          <div className="w-[310px] h-[310px] rounded-lg justify-center items-center inline-flex">
            <div className="w-[310px] h-[280px] bg-zinc-100 rounded-lg justify-center items-center inline-flex">
              <img src='/src/assets/gantiprofile.svg' className="w-25 h-25 relative" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between px-[380px] hidden">
      <div className="px-6 py-2 bg-green-200 rounded-lg border border-green-500 justify-center items-center gap-2.5 inline-flex">
        <div className="text-justify text-green-600">Barang Layak</div>
      </div>
      </div>
      <div className="flex items-start justify-between px-[380px] py-2 hidden">
      <div className="px-6 py-2 bg-red-200 rounded-lg border border-red-500 justify-center items-center gap-2.5 inline-flex">
        <div className="text-justify text-red-600">Barang Tidak Layak</div>
      </div>
    </div>
    </div>
  );
};

export default TB_FotoBarang;