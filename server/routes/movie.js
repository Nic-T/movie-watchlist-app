const { response } = require('express');
var express = require('express')
var router = express.Router()
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/movies/:id',async (req, res) => {
    const id = (req.params.id)
    console.log(id);
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`;
    options ={
        "method": "GET",
    };
    const response = await fetch(movieURL, options)
        .then(console.log("WORKS"))
        .then(res => res.json())
        .catch(e =>{
            console.error({
                "message": "Noooo",
                error:e,
            })
        })
        res.json(response);


});


module.exports = router