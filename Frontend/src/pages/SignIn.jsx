import { Link } from 'react-router-dom';


export const SignUp = () => {
    return (
        <div className='bg-green-700 min-h-screen relative'>
            <div className="absolute inset-y-0 left-0 w-1/2 bg-green-700"></div>



            <div className="absolute inset-y-0 right-0 w-1/2 bg-white p-8 rounded-l-3xl shadow-md">
                <div className="text-left px-16 py-28 text-4xl font-bold">Masuk</div>
                <form action="#">
                    <div className="px-16 py-1.5">
                        <input type="text" id="username" className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black" placeholder="Nama Pengguna" />
                    </div>
                    <div className="px-16 py-1.5">
                        <input type="email" id="email" className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black" placeholder="Alamat Email" />
                    </div>
                    <div className="flex px-16 items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="w-4 h-4" />
                            <label htmlFor="terms" className="text-sm ml-2 text-green-700">Saya menyetujui dengan Kebijakan Privasi dan Ketentuan Penggunaan</label>
                        </div>
                    </div>
                    <Link to='/src/pages/Beranda.jsx' type="submit" className="px-16 py-2 item-center p-4 text-white bg-primary-700 font-normal rounded-lg text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">Masuk</Link>
                    <div className="mt-2 text-sm px-16">
                        Belum memiliki akun? <Link to='/src/pages/SignUp.jsx' className="text-primary-600 hover:text-green-800">Daftar</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default SignUp;