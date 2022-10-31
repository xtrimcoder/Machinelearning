const express = require("express");
const cors = require("cors");
dotenv.config();
// set up server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
app.use(express.json());

app.use(express.static("build"));
const path = require("path");
app.get("*",(req,res)=>{
    res.sendFile(path.resolve('build','index.html'));
})
