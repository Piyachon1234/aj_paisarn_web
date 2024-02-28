const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const corsOptions = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200

}

app.use(cors(corsOptions));

const port = 4000;

const server = app.listen(port, () => {
    console.log('server running at port ${port}');
})
