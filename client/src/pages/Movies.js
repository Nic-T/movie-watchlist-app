import React from 'react';
import axios from 'axios';



function Movies(){

    const getMovies = () =>{
        axios.get("http://localhost:5000/movies")
            .then((res) =>{ 
                console.log(res);
                
        })
    }

    return (
        <div>
            <button onClick={getMovies}> Get Joke </button>
        </div>
    )
}

export default Movies;

