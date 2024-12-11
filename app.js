const path = require("path");
const express = require('express');
const cors = require("cors");

// Komut satırından gelen --port parametresini kontrol et
const args = process.argv.slice(2);
const portArg = args.find(arg => arg.startsWith('--port='));
const port = portArg ? parseInt(portArg.split('=')[1]) : process.env.PORT || 5788;

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/api/data", (req, res) => {
    res.json({ message: "Node.js backend çalışıyor!" });
});

// Server'ı başlat
app.listen(port, () => {
    console.log(`Server çalışıyor -- test endpoint get isteği: http://localhost:${port}/api/data`);
});
