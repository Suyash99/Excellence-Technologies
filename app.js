const express = require("express")
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
//Routes
const candidate = require("./Routes/Candidate")
const testscore = require("./Routes/Testscore")

mongoose.connect("mongodb://localhost/Score", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    }).then(() =>{
        console.log("DB CONNECTED!")
    }).catch(() =>{
        console.log("DB got Bugs!")
    })
mongoose.set("useFindAndModify", false);
    
app.use(bodyParser.json())
app.use(cors())
app.use('/api', candidate)
app.use('/api', testscore)

const port = 8000;

app.listen(port, () => {
        console.log(`app running at ${port}`)
    })

