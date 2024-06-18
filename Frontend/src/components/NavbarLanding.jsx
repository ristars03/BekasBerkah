import { Link } from 'react-router-dom';

export const NavbarLanding = () => {
    return (
        <div className=' border-b border-black/20 flex flex-col md:flex-row md:gap-36 w-full justify-between p-5 py-7 md:px-12'>
             <Link to='/'>
            <img src="/public/Logo.svg" alt="Logo" width='185' height='40'/>  
            </Link>
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
                    <div className='border border-l-0 border-gray-400 rounded-r-md flex items-center px-2 gap-2 w-2/3 md:w-3/4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        <input className='w-full outline-none' type="text" placeholder='Cari barang disini...' />
                    </div>
                </div>
            <div className='flex gap-2 mt-4 md:mt-0'>
                <Link to="/src/pages/SignIn.jsx" className='hover:bg-green-700 hover:text-white duration-200 rounded-md border px-5 font-semibold border-green-700 bg-none text-green-700 flex justify-center items-center'>Masuk</Link>
                <Link to="/src/pages/SignUp.jsx" className='hover:bg-opacity-0 hover:text-green-700 duration-200 rounded-md border px-5 font-semibold border-green-700 bg-green-700 text-white flex justify-center items-center'>Daftar</Link>
            </div>
        </div>

    )
}

export default NavbarLanding;
