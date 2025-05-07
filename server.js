require("dotenv").config();
const express = require("express");
// const sandBox = require("./public/functionType")
const typeAliases = require("./public/typeAliases")

const PORT = 3345

const app = express();

app.use(express.json())

app.listen(PORT, () => {
    typeAliases
    // sandBox
    console.log(`server is listening to port: ${PORT}`);
    
})