import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import axios from 'axios';
//MATERIAL UI IMPORTS
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const moviedetail = useSelector(store => store.moviedetail);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

//FOR SOME REASON I CAN'T DEFINE THE FUNCTION OUTSIDE OF OnCLICK ON LINE 35....(ERR: movie is not defined)
    // const detailDispatch = ()=>{
    //     console.log( 'in detailDispatch' );
    //     dispatch({type: 'SET_MOVIE', payload: movie }) //everything inside the ( ) is an action that the dispatch call takes to the store
    // }

    return (
        <main>
        <Link to="/addmovie">
        <h2>add a new movie!</h2>
        </Link>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => { {/* mapping through the store */}
                const setOneMovie = () => { 
                    //This ^^ function needs to be defined within the mapping.
                    // if defined outside, it won't work.
                    dispatch( {
                        type: 'SET_ONE_MOVIE', 
                        payload:{
                            id: movie.id, 
                            title: movie.title, 
                            poster: movie.poster, 
                            description: movie.description 
                            }
                        } )
                }
                    return (
                        // appending movie information to the MovieList component
                        <div>
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                style={{ maxWidth: '100%', height: 'auto'}}
                                >
                                <Grid item xs={10}>
                                 {/* the number inside {} indicates how wide the card can be. Weird.*/}
                                    <Card className="card" variant="outlined">
                                        {/* MOVIE CARDS*/}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            <div key={movie.id} >
                                                <h5>{movie.title}</h5>
                                                <Link to="/details">
                                                    <img className="imgclass" src={movie.poster} alt={movie.title} onClick={setOneMovie}/>
                                                </Link>
                                            </div>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;