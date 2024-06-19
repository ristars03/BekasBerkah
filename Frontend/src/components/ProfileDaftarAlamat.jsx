import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileDaftarAlamat = () => {
  // State untuk mengelola status modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-[1444px] h-[564px] relative mt-8 bg-white rounded-lg border border-zinc-200 mx-auto'>
      <div className='h-14 px-40 bg-white border border-zinc-200 text-gray-500 flex mx-auto items-center justify-between'>
        {/* Left Section */}
        <Link to='/src/pages/PageProfileAkun' className="flex items-center hover:text-green-800 font-medium">
          <h1 className="text-xl">Akun</h1>
        </Link>

        {/* Center Section */}
        <Link to='/src/pages/PageProfileDaftarAlamat' className="flex items-center text-green-700 font-medium">
          <h1 className="text-xl underline">Daftar Alamat</h1>
        </Link>

        {/* Right Section */}
        <Link to='/src/pages/PageProfileKatalogBarang' className="flex items-center hover:text-green-700 font-medium">
          <h1 className="text-xl">Katalog Barang</h1>
        </Link>
      </div>

      <div className="justify-between items-start flex flex-col md:flex-row md:gap-36 w-full p-5 py-7 md:px-12">
        <div className='border border-lg border-gray-400 rounded-md flex items-center px-2 gap-2 w-[250x]'>
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
          <input type="text" placeholder='Cari alamat atau nama penerima' className="h-10 w-[250px] rounded-lg focus:outline-none" />
        </div>
        <div className='flex items-end justify-end'>
          <button
            className='h-10 bg-green-700 text-white font-medium rounded-md hover:bg-green-600 w-[130px]'
            onClick={handleAddButtonClick}
          >
            Tambah
          </button>
        </div>
      </div>

      <div className="w-full ">
        <div className='p-4 ml-12 mr-12 flex items-center bg-white rounded-lg border border-zinc-400'>
          <div className="flex-col justify-center items-start gap-2 inline-flex">
            <div className="px-2 h-5 flex items-center bg-green-700 rounded">
              <div className=" text-white text-xs">Rumah</div>
            </div>
            <div className="flex-col justify-center items-start gap-1.5 flex text-neutral-800 text-xs">
              <div className='font-bold'>Jessy</div>
              <div>08346524865</div>
              <div>Jl. Ir. H. Juanda No.392 - 394, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135</div>
            </div>
            <div className="justify-start items-center gap-1.5 inline-flex font-normal text-xs text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3E8C55"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
              <div>Sudah Pinpoint</div>
            </div>
            <div className="justify-center items-center gap-2 inline-flex text-neutral-800 text-xs font-medium ">
              <Link to='' className='hover:text-green-800'>Share</Link>
              <Link to='' className='hover:text-green-800'>Ubah</Link>
              <Link to='' className='hover:text-green-800'>Hapus</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tambah Alamat */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[800px] mx-auto mt-4 mb-4 p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Tambah Alamat</h2>
      
          <form onSubmit={(e) => { e.preventDefault(); handleCloseModal(); }}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="name">Nama penerima</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Nama penerima..."
                maxLength="255"
              />
              <span className="block text-gray-400 text-right">0/255</span>
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="phone">Nomor hp</label>
              <input
                type="text"
                id="phone"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="088888888888"
                maxLength="255"
              />
              <span className="block text-gray-400 text-right">0/255</span>
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="label">Label alamat</label>
              <input
                type="text"
                id="label"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Rumah"
                maxLength="255"
              />
              <span className="block text-gray-400 text-right">0/255</span>
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="address">Alamat lengkap</label>
              <textarea
                id="address"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Tulis alamatmu..."
                maxLength="255"
                rows="4"
              />
              <span className="block text-gray-400 text-right">0/255</span>
            </div>
      
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={handleCloseModal}
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
      )}
    </div>
  );
};

export default ProfileDaftarAlamat;
