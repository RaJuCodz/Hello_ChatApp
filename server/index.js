const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chats = require("./dummy/data");

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log("server started at", PORT);
});
