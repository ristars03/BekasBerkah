import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection, query } from './db.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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

app.get("/tambah_barang", async (req, res) => { 
    try {
        const data = await query("SELECT * FROM tambah_barang");
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

app.listen(5000, ()=> console.log('Server running at port 5000'));
