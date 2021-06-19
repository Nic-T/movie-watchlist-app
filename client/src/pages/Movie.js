import React, {useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";



function Movie() {
    
    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [check, setCheck]= useState(false)

    const getMovie = async () =>{
        await axios.get(`http://localhost:5000/movies/${id}`)
            .then((res) =>{ 
                setMovie(res.data.results)
                setCheck(true)
                
                 
        })
    }
    useEffect(() =>{

        getMovie();

    }, []);

    
    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Movie

