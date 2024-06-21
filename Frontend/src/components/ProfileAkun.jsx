import { Link } from 'react-router-dom';
import { useState } from 'react';

console.log(localStorage.getItem("user"))

export const ProfileAkun = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData({
            ...formData,
            [username]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server
        console.log('Form submitted:', formData);
    };


    return (
        <div className='w-[1444px] h-[564px] relative mt-8 bg-white rounded-lg border border-zinc-200 mx-auto'>
            <div className='h-14 px-40 bg-white border border-zinc-200 text-gray-500 flex mx-auto items-center justify-between'>
                {/* Left Section */}
                <Link to='/src/pages/PageProfileAkun' className="flex items-center text-green-700 font-medium">
                    <h1 className="text-xl underline">Akun</h1>
                </Link>

                {/* Center Section */}
                <Link to='/src/pages/PageProfileDaftarAlamat' className="flex items-center hover:text-green-700 font-medium">
                    <h1 className="text-xl">Daftar Alamat</h1>
                </Link>

                {/* Right Section */}
                <Link to='/src/pages/PageProfileKatalogBarang' className="flex items-center hover:text-green-700 font-medium">
                    <h1 className="text-xl">Katalog Barang</h1>
                </Link>
            </div>
            <div className='flex'>
                <div className="px-8 py-4 ml-8 mt-6 bg-white rounded-lg border border-zinc-200 flex-col justify-center items-center gap-4 inline-flex">
                    <div className="w-[310px] h-[310px] rounded-lg justify-center items-center inline-flex">
                        <div className="w-[310px] h-[280px] bg-zinc-100 rounded-lg justify-center items-center inline-flex">
                            <img src='/src/assets/gantiprofile.svg' className="w-25 h-25 relative" alt="Profile" />
                        </div>
                    </div>
                    <Link to='' className="w-[310px] py-2 bg-green-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-neutral-100 text-base font-normal">Ganti Foto</div>
                    </Link>
                    <div className="w-[310px] text-neutral-400 text-sm font-normal">
                        Besar file: maksimum 10MB. Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                    </div>
                </div>
                <div className="flex flex-col py-6 ml-8 w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Detail Akun</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-4">
                            <label className="mr-2 text-gray-600 w-24">Nama</label>
                            <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="mr-2 text-gray-600 w-24">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileAkun;
