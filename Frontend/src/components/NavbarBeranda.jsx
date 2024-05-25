export const NavbarBeranda = () => {
    return (
        <div className=' border-b border-black/20 flex flex-col md:flex-row md:gap-36 w-full justify-between p-5 py-7 md:px-12'>
            <img src="/public/Logo.svg" alt="Logo" />
            <div className='flex w-full'>
                <div className='border border-gray-400 rounded-l-md flex items-center px-2 w-1/3 md:w-1/4'>
                    <select name="" id="" className='w-full outline-none'>
                        <option value="" disabled selected hidden >Pilih Kategori</option>
                        <option value="">Furniture</option>
                        <option value="">Pakaian</option>
                        <option value="">Buku</option>
                        <option value="">Sepatu</option>
                        <option value="">Aksesoris</option>
                        <option value="">Alat Musik</option>
                    </select>
                </div>
                <div className='border border-l-0 border-gray-400 rounded-r-md flex items-center px-2 gap-2 w-2/3'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    <input className='w-full outline-none' type="text" placeholder='Cari barang disini...' />
                </div>
            </div>
            <div className='flex gap-2 mt-4 md:mt-0'>
                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6876 17V17.3728L16.9512 17.6364L18.5637 19.2489C18.7813 19.4665 18.6274 19.85 18.3126 19.85H1.85009C1.55444 19.85 1.3803 19.4801 1.61148 19.2489L3.22398 17.6364L3.48759 17.3728V17V10.75C3.48759 7.21387 5.33102 4.45766 8.42008 3.72575L9.11259 3.56168V2.85V2C9.11259 1.45956 9.54714 1.025 10.0876 1.025C10.628 1.025 11.0626 1.45956 11.0626 2V2.85V3.5611L11.7544 3.72559C14.8322 4.45738 16.6876 7.22717 16.6876 10.75V17ZM11.4074 22.9C11.1181 23.3214 10.6329 23.6 10.0876 23.6C9.66324 23.6 9.25628 23.4314 8.95622 23.1314C8.88476 23.0599 8.82075 22.9824 8.76471 22.9H11.4074Z" stroke="#202122" />
                </svg>

                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0879 0C13.9001 0.00104732 15.6885 0.412508 17.3189 1.20351C18.9493 1.9945 20.3794 3.14449 21.5018 4.56718C22.6243 5.98986 23.41 7.64829 23.7999 9.41802C24.1898 11.1877 24.1738 13.0228 23.7532 14.7855C23.3326 16.5481 22.5182 18.1926 21.3711 19.5956C20.2241 20.9985 18.7742 22.1235 17.1303 22.886C15.4863 23.6485 13.691 24.0288 11.8791 23.9983C10.0672 23.9678 8.28575 23.5274 6.66839 22.71L6.48689 22.6125L1.01939 23.9775C0.914167 24.004 0.804456 24.0073 0.697827 23.9872C0.591199 23.9672 0.490192 23.9242 0.401778 23.8613C0.313364 23.7984 0.239647 23.7171 0.185714 23.623C0.131782 23.5288 0.0989178 23.4241 0.0893905 23.316V23.193L0.110391 23.0685L1.47539 17.6025L1.38089 17.4225C0.69617 16.0706 0.273725 14.6012 0.135891 13.092L0.0983906 12.519L0.0878906 12C0.0878906 8.8174 1.35217 5.76516 3.60261 3.51472C5.85305 1.26428 8.90529 0 12.0879 0ZM12.0879 1.5C10.2556 1.4997 8.4551 1.9789 6.86535 2.88996C5.2756 3.80103 3.95193 5.11224 3.02589 6.69331C2.09984 8.27438 1.60366 10.0703 1.58664 11.9025C1.56962 13.7347 2.03237 15.5395 2.92889 17.1375C2.99849 17.2618 3.03127 17.4033 3.02339 17.5455L3.00239 17.6865L1.86839 22.218L6.40439 21.087C6.49659 21.0642 6.59229 21.0591 6.68639 21.072L6.82289 21.1035L6.95339 21.162C8.35341 21.9458 9.91442 22.3983 11.5166 22.4847C13.1187 22.5712 14.7193 22.2894 16.1956 21.6609C17.6718 21.0324 18.9844 20.0739 20.0325 18.8591C21.0806 17.6443 21.8364 16.2054 22.2418 14.653C22.6472 13.1006 22.6914 11.4759 22.3711 9.90373C22.0508 8.33156 21.3744 6.85371 20.394 5.58366C19.4135 4.31361 18.155 3.28514 16.7152 2.57724C15.2753 1.86934 13.6924 1.50082 12.0879 1.5ZM12.8379 13.5C13.0253 13.4997 13.2061 13.5695 13.3446 13.6958C13.4831 13.822 13.5693 13.9956 13.5862 14.1822C13.6031 14.3689 13.5496 14.5551 13.4361 14.7042C13.3225 14.8534 13.1573 14.9546 12.9729 14.988L12.8379 15H8.33789C8.15047 15.0003 7.96972 14.9305 7.83122 14.8042C7.69272 14.678 7.60651 14.5044 7.58958 14.3178C7.57264 14.1311 7.62621 13.9449 7.73972 13.7958C7.85323 13.6466 8.01847 13.5454 8.20289 13.512L8.33789 13.5H12.8379ZM15.8379 9C16.0253 8.99965 16.2061 9.06949 16.3446 9.19576C16.4831 9.32203 16.5693 9.49558 16.5862 9.68223C16.6031 9.86889 16.5496 10.0551 16.4361 10.2042C16.3225 10.3534 16.1573 10.4546 15.9729 10.488L15.8379 10.5H8.33789C8.15047 10.5003 7.96972 10.4305 7.83122 10.3042C7.69272 10.178 7.60651 10.0044 7.58958 9.81777C7.57264 9.63111 7.62621 9.44489 7.73972 9.29575C7.85323 9.14662 8.01847 9.04539 8.20289 9.012L8.33789 9H15.8379Z" fill="black" />
                </svg>

                <svg width="2" height="28" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0874 0V28" stroke="#EFEFEF"/>
                </svg>

              

            </div>
        </div>

    )
}

export default NavbarBeranda;
