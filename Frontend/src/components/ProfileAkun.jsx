import { Link } from 'react-router-dom';


export const ProfileAkun = () => {
    return (
        <div className='w-[1444px] h-[564px] relative mt-8 bg-white rounded-lg border border-zinc-100 mx-auto'>
            <div className='h-14 px-40 bg-white border border-zinc-100 text-gray-500 flex mx-auto items-center justify-between'>
                {/* Left Section */}
                <Link to='/src/pages/PageProfile.jsx' className="flex items-center hover:text-green-700 font-medium">
                    <h1 className="text-xl ">Akun</h1>
                </Link>

                {/* Center Section */}
                <Link to='/' className="flex items-center hover:text-green-700 font-semi ">
                    <h1 className="text-xl ">Daftar Alamat</h1>
                </Link>

                {/* Right Section */}
                <Link to='/' className="flex items-center hover:text-green-700 font-medium">
                    <h1 className="text-xl ">Katalog Barang</h1>
                </Link>
            </div>
        </div>
    )
}

export default ProfileAkun;   
