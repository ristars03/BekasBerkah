import { Link } from 'react-router-dom';

export const ProfileKatalogBarang = () => {
    return (
        <div className='w-[1444px] h-[564px] relative mt-8 bg-white rounded-lg border border-zinc-200 mx-auto'>
            <div className='h-14 px-40 bg-white border border-zinc-200 text-gray-500 flex mx-auto items-center justify-between'>
                {/* Left Section */}
                <Link to='/src/pages/PageProfileAkun' className="flex items-center hover:text-green-800 font-medium">
                    <h1 className="text-xl">Akun</h1>
                </Link>

                {/* Center Section */}
                <Link to='/src/pages/PageProfileDaftarAlamat' className="flex items-center  hover:text-green-800 font-medium">
                    <h1 className="text-xl">Daftar Alamat</h1>
                </Link>

                {/* Right Section */}
                <Link to='/src/pages/PageProfileKatalogBarang' className="flex items-center text-green-700 font-medium">
                    <h1 className="text-xl underline">Katalog Barang</h1>
                </Link>
            </div>
            <div className="justify-between flex w-full p-5 py-7 md:px-12 hover:text-green-700">
                <div className='border border-lg border-gray-400 rounded-md flex px-2 gap-2 h-10 items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#177533"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                    <Link to='/src/pages/PageTambahBarang'>Tambah Barang</Link>
                </div>
            </div>
            <div className='px-12 flex flex-col gap-4 py-2'>
                <div className='grid grid-cols-5 gap-12'>
                    <Link to="" className='rounded-md border border-black/15 flex flex-col gap-4 p-4'>
                        <img src="/src/assets/Lemari2Pintu.svg" alt="" />
                        <div className='flex justify-between text-sm items-center'>
                            <p>Produk</p>
                            <p>2 Mei 2024</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-medium'>Lemari 2 Pintu</p>
                            <p className='text-lg text-green-700'>Rp. 370,000</p>
                        </div>
                    </Link>
                    <Link to="/src/pages/PageActionProfileBarang" className='rounded-md border border-black/15 flex flex-col gap-4 p-4'>
                        <img src="/src/assets/TasSekolah.svg" alt="" />
                        <div className='flex justify-between text-sm items-center'>
                            <p>Produk</p>
                            <p>2 Mei 2024</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-medium'>Tas Sekolah</p>
                            <p className='text-lg text-green-700'>Rp. 78,000</p>
                        </div>
                    </Link>
                    <Link to="" className='rounded-md border border-black/15 flex flex-col gap-4 p-4'>
                        <img src="/src/assets/PvnSepatuuSneakers.svg" alt="" />
                        <div className='flex justify-between text-sm items-center'>
                            <p>Produk</p>
                            <p>2 Mei 2024</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-medium'>PVN Sepatu Sneaker</p>
                            <p className='text-lg text-green-700'>Rp. 98,000</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    )
}
export default ProfileKatalogBarang