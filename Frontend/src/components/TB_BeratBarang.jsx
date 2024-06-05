import { Link } from 'react-router-dom';

export const TB_BeratBarang = () => {
    return (
        <>
            <div className='w-[1444px] relative mt-8 mb-8 p-8 bg-white rounded-lg border gap-2 border-zinc-200 mx-auto'>
                <h1 className='text-3xl font-bold py-4 px-4'>Berat</h1>
                <div className="flex items-center">
                    <div className="px-4 py-2 text-zinc-700 font-bold">Berat Barang</div>
                    <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
                </div>
                <div className="flex items-start justify-between">
                    <div className="w-[340px] px-4 text-align text-zinc-700">Masukkan berat dengan menimbang barang. Pastikan berat sesuai.</div>
                    <div className="flex-grow px-10 mt-[-32px] mb-8">
                        <input type="text" className="w-[360px] h-[53px] pl-4 bg-white rounded-lg border border-zinc-200 justify-between items-center inline-flex" placeholder='Berat Produk'/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="px-4 py-2 text-zinc-700 font-bold">Ukuran Barang</div>
                    <div className="px-2 bg-green-700 rounded text-white text-xs">Wajib</div>
                </div>
                <div className="flex items-start justify-between">
                    <div className="w-[340px] px-4 text-align text-zinc-700">Masukkan ukuran barang sesuai dengan aslinya. Pastikan ukuran sesuai.</div>
                    <div className="flex-grow px-10 mt-[-32px]">
                        <div className="w-[648px] h-[53px] justify-start items-start gap-6 inline-flex">
                            <input type="text" className="h-[53px] pl-4 bg-white rounded-lg border border-zinc-200 justify-between items-center flex" placeholder='Panjang' />
                            <input type="text" className="w-48 h-[53px] pl-4 bg-white rounded-lg border border-zinc-200 justify-between items-center flex" placeholder='Lebar' />
                            <input type="text" className="w-48 h-[53px] pl-4 bg-white rounded-lg border border-zinc-200 justify-between items-center flex" placeholder='Tinggi' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1444px] flex justify-end gap-4 mb-8 mx-auto">
                <Link to="" className="px-14 py-3 font-medium border border-green-700 bg-white text-green-700 rounded-lg">Batal</Link>
                <Link to="" className="px-14 py-3 font-medium bg-green-700 text-white rounded-lg">Simpan</Link>
            </div>
        </>
    );
}
export default TB_BeratBarang;
