const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Declare server port
const PORT = 8001;

app.use(bodyParser.json());
// app.use(cors());

const route = require('./routes/route');

app.use('/result', route)


// start server
app.listen(PORT, () => {
    console.log(`server starts on port ${PORT}`);
})
