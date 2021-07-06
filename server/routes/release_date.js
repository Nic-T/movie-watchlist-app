const {response} = require('express');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/:type/:id/release_date', async (req,res) => {
    const id = (req.params.id);
    const type = (req.params.type);
    const releaseURL = `https://api.themoviedb.org/3/${type}/${id}/release_dates?api_key=${process.env.API_KEY}`
    options = {
        "method" : "GET",
    };
    const response= await fetch(releaseURL, options)
        .then(res => res.json())
        .catch(e =>{
            console.error({
                "message": "Noo",
                error:e,
            })
        })
    res.json(response)
});


module.exports = router
