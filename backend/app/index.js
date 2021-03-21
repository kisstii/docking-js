const express = require("express");
const app = express();
const winston = require("winston");
const expressWinston = require("express-winston");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const logLevel = "info";
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console({ level: logLevel })],
  })
);

app.post("/hello", (req, res) => {
  res.json({ greeting: `Hello ${req.body.username}` });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
