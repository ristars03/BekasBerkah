import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/users',
                {
                    name,
                    email,
                    password,
                }
            );

            console.log(response.data);
            setMsg('Registration successful');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            } else {
                console.error('Error:', error.message);
                setMsg('Registration failed. Please try again later.');
                console.log(name)
                console.log(email)
                console.log(password)
            }
        }
    };

    return (
        <div className='bg-green-700 min-h-screen relative'>
            <div className='absolute inset-y-0 left-0 w-1/2 bg-green-700'></div>

            <div className='absolute inset-y-0 right-0 w-1/2 bg-white p-8 rounded-l-3xl shadow-md'>
                <div className='flex flex-col justify-center pt-32 px-16 p-4 text-4xl font-bold'>
                    Daftar
                </div>
                <form onSubmit={handleRegister} className='px-16 py-1.5 mb-2'>
                    <input
                        type='text'
                        id='username'
                        className='border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black'
                        placeholder='Nama Pengguna'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        id='email'
                        className='border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black mt-2'
                        placeholder='Alamat Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        id='password'
                        className='border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black mt-2'
                        placeholder='Sandi'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='flex items-center mt-2'>
                        <input type='checkbox' id='terms' className='w-4 h-4' />
                        <label htmlFor='terms' className='text-sm ml-2 text-green-700'>
                            Saya menyetujui dengan Kebijakan Privasi dan Ketentuan Penggunaan
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='px-16 py-3 mt-4 text-white bg-primary-700 font-normal rounded-lg block w-full p-4 text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500'>
                        Daftar
                    </button>
                    <div className='mt-2 text-sm'>
                        Sudah memiliki akun?{' '}
                        <Link
                            to='/src/pages/SignIn.jsx'
                            className='text-primary-600 hover:text-green-800'>
                            Masuk
                        </Link>
                    </div>
                    <p className='text-center mt-2'>{msg}</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

// import { Link } from "react-router-dom";
// import axios from "axios";
// import React, { useState } from "react";

// export const SignUp = () => {
//   const [formData, setformData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const { name, email, password} = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/users", {
//         name,
//         email,
//         password,
//       });
//       console.log(res.data);
//       alert("Register Berhasil");
//     } catch (error) {
//       console.error(error.response.data);
//       alert("Gagal mendaftar, silakan coba lagi.");
//     }
//   };

//   return (
//     <div className="bg-green-700 min-h-screen relative">
//       <div className="absolute inset-y-0 left-0 w-1/2 bg-green-700"></div>

//       <div className="absolute inset-y-0 right-0 w-1/2 bg-white p-8 rounded-l-3xl shadow-md">
//         <div className="flex flex-col justify-center pt-32 px-16 p-4 text-4xl font-bold">
//           Daftar
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="px-16 py-1.5 mb-2 ">
//             <input
//               type="text"
//               id="name"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Nama Pengguna"
//               value = {name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="px-16 py-1.5 mb-2">
//             <input
//               type="email"
//               id="email"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Alamat Email"
//               value= {email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="px-16 py-1.5 mb-2">
//             <input
//               type="password"
//               id="password"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Sandi"
//               value={password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex px-16 items-center justify-between mb-4">
//             <div className="flex items-center">
//               <input type="checkbox" id="terms" className="w-4 h-4" />
//               <label htmlFor="terms" className="text-sm ml-2 text-green-700">
//                 Saya menyetujui dengan Kebijakan Privasi dan Ketentuan
//                 Penggunaan
//               </label>
//             </div>
//           </div>
//           <div className="flex px-16 flex-col items-end text-center">
//             <Link
//               to="/src/pages/SignIn.jsx"
//               type="submit"
//               className="px-16 py-3 item-center text-white bg-primary-700 font-normal rounded-lg block w-full p-4 text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
//             >
//               Daftar
//             </Link>
//           </div>
//           <div className=" mt-2 text-sm px-16">
//             Sudah memiliki akun?{" "}
//             <Link
//               to="/src/pages/SignIn.jsx"
//               className="text-primary-600 hover:text-green-800"
//             >
//               Masuk
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignUp;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { name, email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/users", {
//         name,
//         email,
//         password,
//       });
//       console.log(res.data);
//       alert("Register Berhasil");
//     } catch (error) {
//       console.error(error.response.data);
//       alert("Gagal mendaftar, silakan coba lagi."); // Example: Show an error message
//     }
//   };

//   return (
//     <div className="bg-green-700 min-h-screen relative">
//       <div className="absolute inset-y-0 left-0 w-1/2 bg-green-700"></div>
//       <div className="absolute inset-y-0 right-0 w-1/2 bg-white p-8 rounded-l-3xl shadow-md">
//         <div className="flex flex-col justify-center pt-32 px-16 p-4 text-4xl font-bold">
//           Daftar
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="px-16 py-1.5 mb-2">
//             <input
//               type="text"
//               id="name"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Nama Pengguna"
//               value={name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="px-16 py-1.5 mb-2">
//             <input
//               type="email"
//               id="email"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Alamat Email"
//               value={email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="px-16 py-1.5 mb-2">
//             <input
//               type="password"
//               id="password"
//               className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
//               placeholder="Sandi"
//               value={password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex px-16 items-center justify-between mb-4">
//             <div className="flex items-center">
//               <input type="checkbox" id="terms" className="w-4 h-4" required />
//               <label htmlFor="terms" className="text-sm ml-2 text-green-700">
//                 Saya menyetujui dengan Kebijakan Privasi dan Ketentuan
//                 Penggunaan
//               </label>
//             </div>
//           </div>
//           <div className="flex px-16 flex-col items-end text-center">
//             <button
//               type="submit"
//               className="px-16 py-3 item-center text-white bg-primary-700 font-normal rounded-lg block w-full p-4 text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
//             >
//               Daftar
//             </button>
//           </div>
//           <div className=" mt-2 text-sm px-16">
//             Sudah memiliki akun?{" "}
//             <Link
//               to="/src/pages/SignIn.jsx"
//               className="text-primary-600 hover:text-green-800"
//             >
//               Masuk
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;