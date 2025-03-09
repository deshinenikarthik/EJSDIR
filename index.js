const express = require("express");
const app = express();
const port = 3000;
app.set("views engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
    res.render("home.ejs")
    // res.send("Hi iam karthik just started from scratch");
})
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
})
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
})
app.get("*", (res, req) => {
    res.setEncoding("Hi this page does not exist");
})
app.listen(port, () => {
    console.log("app is listening");
})