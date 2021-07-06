import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";



function Movie() {
    
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [check, setCheck] = useState(false);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([]);
    const [rec, setRec] = useState([]);
    const [similar, setSimilar] =useState([]);
    const [release, setRelease] = useState([]);


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

    useEffect(() =>{

        getMovie();
        getCredits();
        getImages();
        getRec();
        getSimilar();
        getRelease();
    }, []);

    
    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Movie

