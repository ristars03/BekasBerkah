import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection, query} from './database/db.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use(cors())

// Manggil tabel
// app.get("/mahasiswa", async (req, res) => { 
//     try {
//         const data = await query("SELECT * FROM mahasiswa");
//         return res.status(200).json(data);
//     } catch (e) {
//         return res.status(500).json({ error: "Terjadi kesalahan" });
//     }
// });

// app.get("/jurusan", async (req, res) => { 
//     try {
//         const data = await query("SELECT * FROM jurusan");
//         return res.status(200).json(data);
//     } catch (e) {
//         return res.status(500).json({ error: "Terjadi kesalahan" });
//     }
// });


app.listen(process.env.APP_PORT,() => {
    testConnection()
    console.log(`Server is running in http://localhost:${process.env.APP_PORT}`)
})