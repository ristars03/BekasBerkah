export const TB_HargaBarang = () => {
    return (
        <div className='w-[1444px] relative mt-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto'>
            <h1 className='text-3xl font-bold py-4 px-4'>Harga</h1>
            <div className="flex items-center">
                <div className="px-4 py-2 text-zinc-700 font-bold">Harga Barang</div>
                <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
            </div>
            <div className="flex items-start justify-between">
                <div className="w-[340px] px-4 text-zinc-700">Masukkan harga barang dengan menggunakan angka.</div>
                <div className="flex-grow px-10 mt-[-32px]">
                    <input type="text" className="border border-gray-300 rounded-lg w-full p-4" placeholder="Masukkan harga" />
                    <div className="text-xs text-gray-400 py-3">Contoh : 78.000</div>
                </div>
            </div>
        </div>
    );
}
export default TB_HargaBarang;
