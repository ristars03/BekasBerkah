import { Link } from 'react-router-dom';

export const TB_DeskripsiBarang = () => {
    return (
        <div className='w-[1444px] relative mt-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto '>
            <h1 className='text-3xl font-bold py-4 px-4'>Deskripsi Barang</h1>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Nama Barang</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start justify-between ">
                <div className="w-[340px] px-4 text-align text-zinc-700">Nama barang min 40 karakter dengan memasukkan merek, jenis produk, warna, bahan atau tipe.</div>
                <div className="flex-grow px-10 mt-[-32px] mb-8 mx-auto">
                    <textarea type="text" className="border border-gray-300 rounded-lg w-full p-8" placeholder="" rows="2"/>
                    <div className="text-xs text-gray-400 py-3">Tulis deskripsi produkmu min. 260 karakter agar pembeli semakin mudah mengerti</div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Video Barang</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start  ">
                <div className="w-[340px] px-4 text-align text-zinc-700">Tambah vidio agar pembeli semakin tertarik dengan barang yang anda jual.</div>
                <div className=" px-10 mt-[-32px]">
                    <div className='border border-lg border-gray-300 text-gray-400 rounded-md flex px-2 gap-2 h-10 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#177533"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                        <Link to='/src/pages/PageTambahBarang'>Upload Video</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TB_DeskripsiBarang