require("dotenv").load();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const conversationRouter = require("./routes/assistant-routes.route");
const configRouter = require("./routes/config-routes.route");
const app = express();
app.set("port", process.env.PORT || 8080);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/assistant", conversationRouter);
app.use("/api/v1/", configRouter);

app.use("/", express.static(path.join(__dirname, "public")));
app.use((_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(app.get("port"), "0.0.0.0", () => {
  console.log(`Server starting on => ${app.get("port")} `);
});
