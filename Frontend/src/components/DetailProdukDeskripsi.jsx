import { Link } from 'react-router-dom';

export const DetailProdukDeskripsi = () => {

    return (
        <div className="w-[1122px] h-[590px] rounded-lg border border-zinc-100 items-center gap-8 inline-flex mt-5 px-4 ml-48">
            <img className="w-[550px] h-[550px] relative" src="/src/assets/BajuRajut.svg"/> 
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-4 inline-flex">
                    <div className="w-14 h-14 relative">
                        <img className="w-14 h-14 left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/56x56" />
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
                                <div className="w-20 text-center text-green-700 text-base font-medium underline">Deskripsi</div>
                            </div>
                            <div className="px-6 py-2 justify-center items-center gap-2.5 flex">
                                <div className="w-20 text-center text-neutral-400 text-base font-normal font-['Roboto'] leading-[21.12px] tracking-tight">Detail</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[5px] bg-white flex-col justify-start items-start gap-[7px] inline-flex">
                        <div className="h-[250px] flex-col justify-start items-start gap-4 flex">
                            <div className="flex-col justify-start items-start gap-2.5 flex">
                                <div className=" bg-white flex-col justify-start items-start gap-2 flex">
                                    <div className="px-1 justify-start items-start gap-2 inline-flex">
                                        <div className="justify-center items-center gap-2.5 flex">
                                            <div className=" text-neutral-400 text-sm font-normal font-['Roboto'] leading-[21px]">Ukuran Barang : </div>
                                        </div>
                                        <div className="w-[186px] flex-col justify-start items-start gap-[3px] inline-flex">
                                            <div className="justify-start items-start gap-[11px] inline-flex">
                                                <div className=" w-[52px] h-[17px] text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">Panjang </div>
                                                <div className=" w-[41px] h-[19px] justify-center items-center flex">
                                                    <div className="w-[41px] h-[19px] text-neutral-800 text-xs font-normal font-['Roboto'] leading-[18px]">70 cm</div>
                                                </div>
                                            </div>
                                            <div className="justify-start items-start gap-[11px] inline-flex">
                                                <div className="w-[52px] h-[17px] text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">Lebar </div>
                                                <div className=" w-[41px] h-[19px] justify-center items-center flex">
                                                    <div className="w-[41px] h-[19px] text-neutral-800 text-xs font-normal font-['Roboto'] leading-[18px]">116 cm</div>
                                                </div>
                                            </div>
                                            <div className="justify-start items-start gap-[11px] inline-flex">
                                                <div className="w-[52px] h-[17px] text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">Tinggi </div>
                                                <div className="w-[41px] h-[19px] justify-center items-center flex">
                                                    <div className="w-[41px] h-[19px] text-neutral-800 text-xs font-normal font-['Roboto'] leading-[18px]">50 cm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 inline-flex">
                                        <div className="text-neutral-400 text-sm font-normal font-['Roboto'] leading-[21px]">Berat Barang :</div>
                                        <div className="text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">200 g</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Frame1171278916 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">Deskripsi Barang :</div>
                            </div>
                            <div className="justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[500px] text-neutral-800 text-sm font-normal font-['Roboto'] leading-[21px]">menampilkan pakaian rajutan, khususnya sweater, yang tergantung di gantungan. Sweater ini memiliki potongan longgar dengan lengan panjang dan dirancang dengan pola rib vertikal. Warna sweater adalah nuansa merah muda atau ungu muda, dan memiliki pola garis mendatar yang lebih terang di area dada. Hem, manset.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[500px] px-[21px] py-2.5 bg-white rounded-[10px] border border-green-700 justify-center items-center gap-2.5 inline-flex">
                    <Link to="" className="text-center text-green-700 text-base font-medium">Chat Penjual</Link>
                    <div className="w-5 h-4 relative rounded-sm" />
                </div>
            </div>
        </div>
    );
}

export default DetailProdukDeskripsi;
