// import { Link } from 'react-router-dom';

export const TB_FotoBarang = () => {
    return (
        <div className='w-[1444px] relative mt-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto '>
            <h1 className='text-3xl font-bold py-4 px-4'>Foto Barang</h1>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Foto Barang</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start justify-between ">
                <div className="w-[340px] px-4 text-align text-zinc-700">Ratio gambar 1:1, pastikan gambar kamu bagus dan jelas.</div>
            </div>
        </div>
    )
}
export default TB_FotoBarang