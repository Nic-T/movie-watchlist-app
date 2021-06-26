import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import MovieCard from '../components/MovieCard';

function Movies(){


    const [movies, setMovies] = useState([]);
    const [check, setCheck] = useState(false)

    const getMovies = async () =>{
       await axios.get("http://localhost:5000/movie")
            .then((res) =>{ 
                setMovies(res.data.results)
                setCheck(true)
        })
    }

    useEffect(() =>{

        getMovies();

    }, []);

    return (
        <div>
           <Grid
            container
            direction="row"
            justify="space-around"
            
            >
                
                {movies.map(movie => 
                   
                   
                <Grid item key={movie.id} xs={12} md={6} lg={3} >
                    <MovieCard movie={movie}/>
                </Grid>
                    
                        
                )}
           </Grid>
            
        </div>
    )
}

export default Movies;

