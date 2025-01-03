const express = require("express");
const{PORT} = require("./config/serverconfig");
const body_parser = require("body-parser");
const apiroutes = require("./routers/index");
const cors = require("cors");
const corsOptions = {
    origin: 'http://todoApp-frontend:3000', // Replace with the frontend's exact origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // If you are using cookies or authentication
};
const settingup = async ()=>{
    const app = express();

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}));
    app.use(cors(corsOptions));
    app.use("/api", apiroutes);

    
    app.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`);
    });
}

settingup();
