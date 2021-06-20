const { response } = require('express');
var express = require('express');
const fetch = require('node-fetch');
const router = require('./movie');
require('dotenv').config();

router.get('/:type/:id/credits', async (req, res) => {
    const id = (req.params.id);
    const type = (req.params.type);

    const creditsURL = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    options={
        "method": "GET",
    };
    const response = await fetch(creditsURL, options)
        .then(res => res.json())
        .catch(e =>{
            console.error({
                "message": "Noooo",
                error:e,
            })
        })
    res.json(response);

});

module.exports =router