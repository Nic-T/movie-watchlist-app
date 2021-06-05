import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from '../styles/MovieCard.module.css'
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const imagePrefix ='https://image.tmdb.org/t/p/w500'  

    return (
        <Card 
            variant="outlined"
        >
            <Link to={`/movies/${movie.id}`} >
                <CardActionArea>
                    <CardMedia 
                    component="img"
                    className={styles.cardImage}
                    image={imagePrefix+movie.poster_path}
                    />
                </CardActionArea>
            </Link>
        </Card>
    )
}

