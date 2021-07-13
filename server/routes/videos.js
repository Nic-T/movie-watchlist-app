const {response} = require('express');
var express=  require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/:type/:id/videos', async (req,res) => {
    const id = (req.params.id);
    const type = (req.params.type);

    const videosURL=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
    options={
        "method": "GET",
    }
    const response = await fetch(videosURL, options)
        .then(res => res.json())
        .catch(e =>{
            console.error({
                "message": "Noo",
                error:e,
            })
        })
    res.json(response);

})

module.exports = router