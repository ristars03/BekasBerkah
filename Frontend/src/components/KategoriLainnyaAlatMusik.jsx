import { Link } from 'react-router-dom';

export const KategoriLainnyaAlatMusik = () => {
    return (
        <div className='px-12 flex flex-col gap-5 py-12'>
            <h2 className='text-3xl font-bold'>Kategori</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Link to="/src/pages/PageAksesoris" className='text-xl rounded-lg font-medium bg-gradient-to-r from-blue-800 to-blue-500  flex p-5 h-[80px] py-2 text-white'>Aksesoris</Link>
                <Link to="/src/pages/PageFurniture" className='text-xl rounded-lg font-medium bg-gradient-to-r from-pink-800 to-pink-500  flex p-5 h-[80px] py-3 text-white'>Furniture</Link>
                <Link to="/src/pages/PagePakaian" className='text-xl rounded-lg font-medium bg-gradient-to-r from-yellow-800 to-yellow-500  flex p-5 h-[80px] py-2 text-white'>Pakaian</Link>
            </div>
        </div>
    )
}

export default KategoriLainnyaAlatMusik;