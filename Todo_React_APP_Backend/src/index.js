const express = require("express");
const{PORT} = require("./config/serverconfig");
const body_parser = require("body-parser");
const apiroutes = require("./routers/index");
const cors = require("cors");

const settingup = async ()=>{
    const app = express();

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}));
    app.use(cors());
    app.use("/api", apiroutes);

    
    app.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`);
    });
}

settingup();
