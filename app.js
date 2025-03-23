const express = require("express");
const app = express();
const PORT = 3001;

const userController = require("./controllers/userController");
const dashboardController = require("./controllers/dashboardController");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { msg: "hi" });
});

app.post("/login", userController.login);
app.post("/signup", userController.signup);
app.get("/dashboard", dashboardController.renderDashboard);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
