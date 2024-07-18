const express = require("express");
const exphbs = require("express-handlebars");
const userRoutes = require("./routes/users-sql");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use("/api", userRoutes);
