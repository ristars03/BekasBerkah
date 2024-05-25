export const KategoriLanding = () => {
    return (
        <div className='px-12 flex flex-col gap-5 py-12'>
            <h2 className='text-3xl font-bold'>Kategori</h2>
            <div className='grid grid-cols-3 gap-5'>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-pink-800 to-pink-500  flex p-5 h-[80px] py-3 text-white'>Furniture</div>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-yellow-800 to-yellow-500  flex p-5 h-[80px] py-2 text-white'>Pakaian</div>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-green-800 to-green-500  flex p-5 h-[80px] py-2 text-white'>Buku</div>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-amber-800 to-amber-500  flex p-5 h-[80px] py-2 text-white'>Sepatu</div>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-blue-800 to-blue-500  flex p-5 h-[80px] py-2 text-white'>Aksesoris</div>
                <div className='text-xl rounded-lg font-medium bg-gradient-to-r from-pink-800 to-pink-500  flex p-5 h-[80px] py-2 text-white'>Alat Musik</div>
            </div>
        </div>
    )
}

export default KategoriLanding;