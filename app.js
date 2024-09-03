const express = require("express");
const path = require("path");
const app = express();
const { engine } = require("express-handlebars");

const adminRouter = require("./routes/admin");
const cineRouter = require("./routes/cine");
const errorController = require("./controllers/ErrorController");

app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(cineRouter);

app.use("/", errorController.Get404);

app.listen(8000);
