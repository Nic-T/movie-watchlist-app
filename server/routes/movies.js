const { response } = require('express');
var express = require('express')
var router = express.Router()
const fetch = require('node-fetch');
require('dotenv').config();



router.get('/:type', async (req, res) => {
    const type = (req.params.type);
    const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1%22`;
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
    res.json(response);
});


 


module.exports = router