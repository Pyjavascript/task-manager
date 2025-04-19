const express = require("express");
const PORT = 5000;
const app = express();

// app.use("/api");
app.get("/api/health", (req, res) => {
  res.send("Server is healthy!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
