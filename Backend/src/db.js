import * as mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql2.createPool({
    host: "localhost", 
    user: "root",
    password: "",
<<<<<<< HEAD
    database: "BekasBerkah"
=======
    database: "bekasberkah"
>>>>>>> fd7ed81ec3038961d29b0088763e2fcc3f2392df
});

const testConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log("Koneksi database berhasil");
        connection.release(); // Setelah selesai, pastikan untuk melepaskan koneksi
    } catch (e) {
        console.log("Gagal terhubung ke database:", e.message);
    }
};

const query = async (query, values = []) => {
    try {
        const [result] = await db.query(query, values);
        return result;
    } catch (e) {
        console.error("Gagal mengeksekusi query:", e.message);
        throw e;
    }
};

testConnection();

export { testConnection, query };
