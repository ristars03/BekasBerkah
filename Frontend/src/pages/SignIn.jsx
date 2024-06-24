import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
    
      console.log(response);
    
      if (!response.ok) {
        setMsg("Login gagal");
      } else {
        const data = await response.json(); // Mengambil data JSON dari response
        localStorage.setItem("user", data.data.username); // Menyimpan data ke localStorage
        console.log(data.data.username); // Menampilkan data ke konsol (opsional)
        setMsg("Login berhasil");
        navigate("/src/pages/Beranda.jsx"); // Arahkan ke halaman beranda setelah login berhasil
      }
    } catch (error) {
      console.error("Error:", error);
      setMsg("Login gagal. Silakan coba lagi nanti.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative w-3/4 bg-green-700">
        <img src="/public/moto.png" alt="Bottom Cloud" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute inset-y-0 right-0 w-7/12 bg-white p-8 rounded-l-3xl shadow-md">
        <div className="flex flex-col justify-center pt-32 px-16 p-4 text-4xl font-bold">
          Masuk
        </div>
        <form onSubmit={handleSignIn}>
          <div className="px-16 py-1.5 mb-2">
            <input
              type="text"
              name="username"
              className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
              placeholder="Nama Pengguna atau Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="px-16 py-1.5 mb-2">
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-lg block w-full p-4 dark:placeholder-gray-400 dark:text-black"
              placeholder="Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex px-16 items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm ml-2 text-green-700">
                Saya menyetujui dengan Kebijakan Privasi dan Ketentuan
                Penggunaan
              </label>
            </div>
          </div>
          <div className="flex px-16 flex-col items-end text-center">
            <button
              type="submit"
              className="px-16 py-2 item-center text-white bg-primary-700 font-normal rounded-lg block w-full p-4 text-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
            >
              Masuk
            </button>
          </div>
          <div className="mt-2 text-sm px-16">
            Belum memiliki akun?{" "}
            <Link
              to="/src/pages/SignUp.jsx"
              className="text-primary-600 hover:text-green-800"
            >
              Daftar
            </Link>
          </div>
          <p className="text-center mt-2">{msg}</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;