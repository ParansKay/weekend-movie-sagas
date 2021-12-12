import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import axios from 'axios';
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const moviedetail = useSelector(store => store.moviedetail);
    //for the fixed button on page
    // FIXED NAV BAR
    const [value, setValue] = React.useState(0);
    //END FIXED NAV BAR 

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
            <div className="movieListTitle">
            <h1>Movie List</h1>
            </div>
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
                        <div className="movieListDiv">
                            <div>
                            <Grid
                                container
                                direction="column"
                                // spacing={0} 
                                alignItems="center"
                                justify="center"
                                // style={{ maxWidth: '50%', maxHeight: '80%'}}
                                >
                                <Grid item xs={5} className="movies">
                                {/* <Grid item xs={5}> //centered the grid columns on the page but made long texts shove images down*/}
                                 {/* the number inside {} indicates how wide the card can be. Weird.*/}
                                    <Card className="card" variant="outlined" 
                                    sx={{minWidth: "400px", 
                                        minHeight: "380px",
                                        backgroundColor: "transparent",
                                        borderRadius: 7,
                                        boxShadow: 1
                                }}>
                                        {/* MOVIE CARDS*/}
                                        <CardContent key={movie.id}>
                                            <Typography variant="h6">{movie.title}</Typography>
                                            <div>
                                                <Link to="/details">
                                                    <img className="imgclass" src={movie.poster} alt={movie.title} onClick={setOneMovie}/>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            </div>
                        </div>
                    );
                })}
            </section>
            <div className="bottomNavBar">
                <Box sx={{ width: 500 }}>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >
                            {/* Link HOME ICON to MovieList page */}
                            <Link to="/">
                            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                            </Link>
                            {/* Link ADD NEW ICON to AddMovie page */}
                            <Link to="/addmovie">
                            <BottomNavigationAction label="Add new movie" icon={<AddCircleIcon />} />
                            </Link>
                        </BottomNavigation>
                    </Paper>
                </Box>
                </div>

        </main>

    );
}

export default MovieList;