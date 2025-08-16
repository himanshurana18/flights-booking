const express = require("express");

const { ServerConfig } = require("../config");
const apiRoutes = require("./routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend URL and port
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/api", apiRoutes); // ✅ /api/v1/airports works now
app.get("/flightsService/home", (req, res) => {
  return res.json({ msg: "ok" });
});
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
