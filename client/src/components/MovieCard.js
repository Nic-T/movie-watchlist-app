import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/MovieCard.module.css'

export default function MovieCard({ movie }) {

    const imagePrefix ='https://image.tmdb.org/t/p/w500'  

    return (
        <Card 
            variant="outlined"
        >
            <CardActionArea>
                <CardMedia
                    image={imagePrefix+movie.poster_path}
                    title={movie.title}
                    className={styles.cardImage}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.title}
                        </Typography>
                    </CardContent>
                </CardMedia>
            </CardActionArea>
        </Card>
    )
}

