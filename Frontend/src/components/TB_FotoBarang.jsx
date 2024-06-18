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
        <div className="w-[340px] px-4  text-zinc-700">
          Masukan foto barang secara jelas dari segala sisi yang mendukung.
        </div>
        
        {/* Kolom Foto Barang */}
        <Link to="" className="grid grid-cols-5 gap-14 ml-10 mt-[-32px]">
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
    </div>
  );
};

export default TB_FotoBarang;
