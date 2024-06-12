import * as mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql2.createPool({
    host: "localhost", 
    user: "root",
    password: "",
    database: "bekasberkah_db"
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

// Memanggil testConnection untuk menguji koneksi ke database
testConnection();

export { testConnection, query };
