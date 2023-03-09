const express = require("express")
const app = express()


app.get("/status", (req, res) => {
    console.log("To get status information")
})


app.get("/stats", (req, res) => {
    console.log("To get stats information")
})