const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const db = require("../config/Database.js")
const router = require("../routes/index.js")

dotenv.config();

const app = express();
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(router);


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

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.APP_PORT}`)
})