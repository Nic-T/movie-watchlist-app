import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";



function Movie() {
    
    const {id} = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500"
    const [movie, setMovie] = useState([]);
    const [check, setCheck] = useState(false);
    const [credits, setCredits] = useState([]);

    const getMovie = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}`)
            .then((res) =>{ 
                console.log(res.data)
                setMovie(res.data)
        })
    }

    const getCredits = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/credits`)
            .then((res) =>{
                setCredits(res.data)
        })
    }

    useEffect(() =>{

        getMovie();
        getCredits();

    }, []);

    
    return (
        <div>
            <img src={imagePath+movie.backdrop_path} />
        </div>
    )
}

export default Movie

