import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";



function Movie() {
    
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [check, setCheck] = useState(false);
    const [credits, setCredits] = useState([]);
    const [images, setImages] = useState([])
    const [rec, setRec] = useState([])

    const getMovie = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}`)
            .then((res) =>{ 
                setMovie(res.data.results)
        })
    }

    const getCredits = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/credits`)
            .then((res) =>{
                setCredits(res.data.results)
        })
    }

    const getImages = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/images`)
            .then((res) =>{
                setImages(res.data.results)
        })
    }

    const getRec = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/rec`)
            .then((res) =>{
                setRec(res.data.results)
        })
    }


    useEffect(() =>{

        getMovie();
        getCredits();
        getImages();
        getRec();

    }, []);

    
    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Movie

