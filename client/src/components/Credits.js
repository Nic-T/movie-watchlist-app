import React, { useEffect,useState } from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Credits() {

    const {id} = useParams();
    const [credits, setCredits] = useState([]);
    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:5,
        className: "slides",
    }
    const imagePrefix ='https://image.tmdb.org/t/p/w500'
    const getCredits = async () =>{
        await axios.get(`http://localhost:5000/movie/${id}/credits`)
            .then((res) =>{
                setCredits(res.data)
        })
    }
    let cast = credits.cast;

    useEffect(() =>{

        getCredits();

    }, []);

    if (cast == null) {
        return null;
    } 
    return (
        <Slider {...settings}>
            {cast.map(person=>
                
                <div>
                    <p>{person.name}</p>
                    <img src={imagePrefix+person.profile_path} heigth={375} width={250} />
                    <p>{person.character}</p>
                </div>
                )}
        </Slider>
    )
}

export default Credits

