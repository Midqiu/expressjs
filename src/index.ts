import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.get("/header", async (req, res) => {
  res.json({ headers:req.headers });
});

app.get("/body", async (req, res) => {
  res.json({body:req.body});
});

app.get("/echo", async (req, res) => {
  var data={
    query:req.query,
    body:req.body,
    header:req.headers
  }
  res.json(data);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
