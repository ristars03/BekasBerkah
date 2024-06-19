import { Link } from 'react-router-dom';

export const DetailDeskripsi = () => {

    return (
        <div className="w-[1122px] h-[590px] rounded-lg border border-zinc-100 items-center gap-8 inline-flex mt-5 px-4 ml-48">
            <img className="w-[550px] h-[550px] relative" src="/src/assets/BajuRajut.svg" />
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-4 inline-flex">
                    <div className="w-14 h-14 relative">
                        <img className="w-14 h-14 left-0 top-0 absolute rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-neutral-800 text-2xl font-bold">Jisoo</div>
                        <div className="text-zinc-400 text-sm">Online 5 Menit Lalu</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className=" text-neutral-800 text-2xl font-medium">Baju Rajut</div>
                        <div className="w-[200px] text-green-600 text-[32px] font-medium">Rp. 30.000</div>
                    </div>
                </div>
                <div className="w-[500px] h-[274px] bg-white flex-col justify-end items-start flex">
                    <div className="h-[37px] bg-white flex-col justify-center items-start inline-flex">
                        <div className="elf-stretch justify-start items-start inline-flex">
                            <div className="px-6 py-2 border-b border-green-700 justify-center items-center gap-2.5 flex">
                                <Link to='/src/pages/PageDetailDeskripsi' className="w-20 text-center text-neutral-400 font-medium hover:text-green-700 ">Deskripsi</Link>
                            </div>
                            <div className="px-6 py-2 justify-center items-center gap-2.5 flex">
                                <div className="w-20 text-center text-green-700 font-medium underline">Detail</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[5px] bg-white flex-col justify-start items-start inline-flex">
                        <div className="h-[250px] flex-col justify-start items-start gap-2 flex">
                            <div className="flex-col justify-start items-start flex">
                                <div className=" bg-white flex-col justify-start items-start gap-2 flex">
                                    <div className="px-1 justify-start items-start gap-2 inline-flex">
                                        <div className="justify-center items-start gap-2 inline-flex">
                                            <div className=" text-neutral-400 text-sm">Jangka Waktu Pemakaian Barang : </div>
                                        </div>
                                        <div className="w-[186px] flex-col justify-start items-start gap-[3px] inline-flex">
                                            <div className="justify-start items-start gap-[11px] inline-flex">
                                                <div className=" w-[52px] h-[17px] text-neutral-800 text-sm">5 Bulan </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 inline-flex">
                                        <div className="text-neutral-400 text-sm">Berat Barang :</div>
                                        <div className="text-neutral-800 text-sm">200 gram</div>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 inline-flex">
                                        <div className="text-neutral-400 text-sm">Bahan :</div>
                                        <div className="text-neutral-800 text-sm">Rajut Premium</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 justify-start items-start inline-flex">
                                <div className="text-neutral-800 text-sm">Analisa Hasil Kelayakan :</div>
                            </div>
                            <div className="justify-start items-start gap-2 inline-flex">
                                <div className="text-neutral-400 text-sm">Layak Pakai :</div>
                                <div className="text-neutral-800 text-sm">98/100</div>
                            </div>
                            <div className="justify-start items-start gap-2 inline-flex">
                                <div className="text-neutral-400 text-sm">Noda :</div>
                                <div className="text-neutral-800 text-sm">10/100</div>
                            </div>
                            <div className="justify-start items-start gap-2 inline-flex">
                                <div className="text-neutral-400 text-sm">Kusut :</div>
                                <div className="text-neutral-800 text-sm">20/100</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/src/pages/PageChat" className=" w-[500px] px-[21px] py-2.5 bg-white rounded-[10px] border border-green-700 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-green-700 font-medium">Chat Penjual</div>
                    <div className="w-5 h-4 relative rounded-sm" />
                </Link>
            </div>
        </div>
    );
}

export default DetailDeskripsi;
