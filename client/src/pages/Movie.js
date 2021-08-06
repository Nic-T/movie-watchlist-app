import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import YouTube from 'react-youtube';
import styles from '../styles/Movie.module.css'
import Carousel from 'react-material-ui-carousel'
import Credits from '../components/Credits'

function Movie() {
    
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [check, setCheck] = useState(false);
    
    const [images, setImages] = useState([]);
    const [rec, setRec] = useState([]);
    const [similar, setSimilar] =useState([]);
    const [release, setRelease] = useState([]);
    const [video, setVideos] = useState([])
    const imagePrefix ='https://image.tmdb.org/t/p/w500'
    

    const getMovie = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}`)
            .then((res) =>{ 
                setMovie(res.data)
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
        
        getImages();
        getRec();
        getSimilar();
        getRelease();
        getVideos();
    }, []);


    if(!video.results && !movie){
        return(
        <div>

        </div>)
    }
    else{
        return (
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>

                
                
                <img src={imagePrefix+movie.poster_path} height="562.5" width="375"/>

                <Credits/>

            </div>
        )
    }
   
}

export default Movie

