import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import YouTube from 'react-youtube';


function Movie() {
    
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [check, setCheck] = useState(false);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([]);
    const [rec, setRec] = useState([]);
    const [similar, setSimilar] =useState([]);
    const [release, setRelease] = useState([]);
    const [video, setVideos] = useState([])
    const imagePrefix ='https://image.tmdb.org/t/p/w500'
    const videoPrefix ='https://www.youtube.com/watch?v='

    const getMovie = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}`)
            .then((res) =>{ 
                setMovie(res.data)
        })
    }

    const getCredits = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/credits`)
            .then((res) =>{
                setCredits(res.data)
        })
    }

    const getImages = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/images`)
            .then((res) =>{
                setImages(res.data)
        })
    }

    const getRec = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/rec`)
            .then((res) =>{
                setRec(res.data)
        })
    }

    const getSimilar = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/similar_movies`)
            .then((res) =>{
                setSimilar(res.data)
        })
    }

    const getRelease = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/release_date`)
            .then((res) =>{
                setRelease(res.data)
            })
    }
    const getVideos = async() =>{
        await axios.get(`http://localhost:5000/movie/${id}/videos`)
            .then((res) =>{
                setVideos(res.data)
            })
    }

    useEffect(() =>{
        getMovie();
        getCredits();
        getImages();
        getRec();
        getSimilar();
        getRelease();
        getVideos();
    }, []);
    
    if(!video.results){
        return(
        <div>

        </div>)
    }
    else{
        return (
            <div>
                <h1>{movie.title}</h1>
                {movie.genres.map(genre=>
                    <p>{genre.name}</p>
                )}
                <p>{movie.overview}</p>

                <YouTube videoId={`${video.results[0].key}`}/>
                
                <img src={imagePrefix+movie.poster_path} height="562.5" width="375"/>

                {credits.cast.map(person =>
                    
                    <div>
                        <p>{person.name}</p>
                        <p>{person.character} </p> 
                        <p>{person.known_for_department}</p> 
                        <img src={imagePrefix+person.profile_path} height="375" width="250" />
                    </div>
                )}

                {credits.crew.map(person =>
                    
                    <div>
                        <p>{person.name}</p>
                        <p>{person.character} </p> 
                        <p>{person.known_for_department}</p> 
                        <img src={imagePrefix+person.profile_path} height="375" width="250" />
                    </div>
                )}

            </div>
        )
    }
   
}

export default Movie

