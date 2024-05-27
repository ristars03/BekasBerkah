import mysql2 from "mysql2/promise";

const db = mysql2.createPool({
    host:"localhost", 
    user:"root",
    password:"",
    database:"db_pkl"
})

const testConnection=async()=>{
    try{
        await db.getConnection()
        console.log("koneksi database berhasil");
    }catch(e){
        console.log("GAGAL")
    }
}

const query = async (query, value = []) => {
    try {
        const [result] = await db.query(query, value);
        return result;
    } catch (e) {
        console.error("GAGAL", e);
        throw e; // Melempar kesalahan agar bisa ditangani di tempat lain
    }
};

export {testConnection, query}