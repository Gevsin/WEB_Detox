const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 9000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("<h1>Hello to Self Hosted Site</h1>");
});

app.post("/register", async (req, res) => {
    res.send("You Have Made Your Post Request Baby");
});

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
});