const express = require("express");
const moviesRouter = require("./routes/movies");
const movieRouter = require("./routes/movie");
const creditsRouter = require("./routes/credits");
const imageRouter = require("./routes/images");
const recRouter = require("./routes/recommendations");
const cors = require('cors');
const app = express();

app.use(cors())

app.use('/', moviesRouter);
app.use('/', movieRouter);
app.use('/', creditsRouter);
app.use('/', imageRouter);
app.use('/', recRouter);


app.listen(5000, err => {

    if (err) {
        console.log(err);
    }
    console.log("listening on port 5000")

});

