const { response } = require('express');
var express = require('express')
var router = express.Router()
const fetch = require('node-fetch');
require('dotenv').config();



router.get('/movies', async (req, res) => {
    console.log("/movies has been called");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1%22`;
    options ={
        "method": "GET",
    };
    const response = await fetch(url, options)
        .then( res => res.json())
        .catch(e =>{
            console.error({
                "message": "Nooooo",
                error: e,
                
            })
        })
    console.log("RESPONSE", response);
    res.json(response);
});





module.exports = router