import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    
    const today = new Date('August 20, 2023 01:15:00');
    const day = today.getDay();

    console.log(day);
    let type = "a weeekday";
    let adv = "it's time to work hard";
    if(day == 0 || day == 6){
        type = "the weekend";
        adv = "its time to have some fun";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    });

});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})