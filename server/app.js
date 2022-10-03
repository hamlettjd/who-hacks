const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/search", (req, res) => {
    res.json({message: "herro!"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
