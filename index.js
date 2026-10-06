require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Desplegado en Render", autor: "Alexander Huayta" });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
