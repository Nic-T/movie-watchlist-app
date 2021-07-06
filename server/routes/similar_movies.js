const {response } = require('express');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/:type/:id/similar_movies', async (req,res) => {
    const id = (req.params.id);
    const type = (req.params.type);
    const similarURL = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    options= {
        "method": "GET",
    };

    const response = await fetch(similarURL, options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "Nooo",
            error:e,
        })
    })
    res.json(response)


})

module.exports = router