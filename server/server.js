const express = require("express");
const moviesRouter = require("./routes/movies");
const cors = require('cors');
const app = express();

app.use(cors())

app.use('/', moviesRouter);





app.listen(5000, err => {

    if (err) {
        console.log(err);
    }
    console.log("listening on port 5000")

});

