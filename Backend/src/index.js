import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "../config/Database.js";
import router from "../routes/index.js";
import { testConnection, query } from './db.js';

dotenv.config();

const app = express();
app.use(cors({ credentials:true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.log(error);
}

app.get("/alamat", async (req, res) => { 
    try {
        const data = await query("SELECT * FROM alamat");
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: "Terjadi kesalahan" });
    }
});

app.get("/pesanan", async (req, res) => { 
    try {
        const data = await query("SELECT * FROM pesanan");
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: "Terjadi kesalahan" });
    }
});

app.get("/barang", async (req, res) => { 
    try {
        const data = await query("SELECT * FROM barang");
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: "Terjadi kesalahan" });
    }
});

app.get("/user", async (req, res) => { 
    try {
        const data = await query("SELECT * FROM user");
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: "Terjadi kesalahan" });
    }
});

<<<<<<< HEAD
app.listen(5000, ()=> console.log('Server running at port 5000'));
=======
app.listen(process.env.APP_PORT,() => {
    testConnection()
    console.log(`Server is running in http://localhost:${process.env.APP_PORT}`)
})
>>>>>>> fd7ed81ec3038961d29b0088763e2fcc3f2392df
