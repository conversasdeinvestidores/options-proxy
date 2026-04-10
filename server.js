const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const API_KEY = "UaBEFMBFegMBbQBywwVTYwtsJWBUTp7Y";
const BASE = "https://financialmodelingprep.com/api/v3";

app.get("/api/options/:symbol", async (req, res) => {
  try {
    const url = BASE + "/stock/option-chain/" + req.params.symbol + "?apikey=" + API_KEY;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/api/quote/:symbol", async (req, res) => {
  try {
    const url = BASE + "/quote/" + req.params.symbol + "?apikey=" + API_KEY;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Proxy a correr na porta " + PORT));
