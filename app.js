import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    msg: "Hello from the server - CI/CD Test",
  });
});

export default app;