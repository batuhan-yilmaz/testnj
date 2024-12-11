const path = require("path");
const express = require('express');
const cors = require("cors");
const port = process.env.PORT || 5788;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
    res.json({ message: "Node.js backend çalışıyor!" });
});
app.listen(port, () => {
    console.log(`Server çalışıyor -- test endpoint get isteği: http://localhost:${port}/api/data`);
});