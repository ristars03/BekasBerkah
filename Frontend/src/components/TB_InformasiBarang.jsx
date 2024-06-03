// import { Link } from 'react-router-dom';

export const TB_InformasiBarang = () => {
    return (
        <div className='w-[1444px] relative mt-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto '>
            <h1 className='text-3xl font-bold py-4 px-4'>Informasi Barang</h1>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Nama Barang</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start justify-between ">
                <div className="w-[340px] px-4 text-align text-zinc-700">Nama barang min 40 karakter dengan memasukkan merek, jenis produk, warna, bahan atau tipe.</div>
                <div className="flex-grow px-10 mt-[-32px] mb-8">
                    <input type="text" className="border border-gray-300 rounded-lg w-full p-4" placeholder="Contoh : Sepatu nike mercurial CR7 Pemakaian normal selama lima tahun" />
                    <div className="text-xs text-gray-400 py-3">Tips : Nama barang + Merek barang + Keterangan pemakaian</div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Kategori</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start justify-between ">
                <div className="w-[340px] px-4 text-align text-zinc-700">Pilih kategori yang sesuai dengan barang yang anda jual.</div>
                <div className="flex-grow px-10 mt-[-32px]">
                    <select name="" id="" className='w-full outline-none rounded-lg border border-zinc-200 px-2 py-4'>
                        <option value="" disabled selected hidden >Pilih Kategori</option>
                        <option value="">Furniture</option>
                        <option value="">Pakaian</option>
                        <option value="">Buku</option>
                        <option value="">Sepatu</option>
                        <option value="">Aksesoris</option>
                        <option value="">Alat Musik</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default TB_InformasiBarang