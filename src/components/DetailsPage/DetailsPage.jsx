import { useState } from "react";
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMPORT MATERIAL UI
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

function DetailsPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();
    const moviedetail = useSelector(store => store.moviedetail);
    const genres = useSelector(store => store.genres);

      // FIXED NAV BAR
      const [value, setValue] = React.useState(0);
      //END FIXED NAV BAR 

      useEffect(() => {
        dispatch({ 
            type: 'FETCH_GENRES',
            payload: moviedetail.id });
    }, []);

    return(
        <div>
            {/* <h1>DetailsPage</h1> */}
            <section className="movieDetail">
            <div>
            <Grid
                container
                direction="column"
                // spacing={0} 
                alignItems="center"
                justify="center"
                // style={{ maxWidth: '50%', maxHeight: '80%'}}
                >
                <Grid item xs={6} className="movies">
                {/* <Grid item xs={5}> //centered the grid columns on the page but made long texts shove images down*/}
                    {/* the number inside {} indicates how wide the card can be. Weird.*/}
                    <Card className="card" variant="outlined" 
                    sx={{minWidth: "400px", 
                        minHeight: "380px",
                        backgroundColor: "transparent",
                        borderRadius: 7,
                        boxShadow: 1
                }}>
                        {/* MOVIE DETAIL CARD*/}
                        {/* MOVIE TITLE */}
                        <CardContent key={moviedetail.id}>
                            <Typography variant="h4">{moviedetail.title}</Typography>
                        </CardContent>
                        {/* MOVIE POSTER */}
                        <CardContent key={moviedetail.id}>
                            <img className="imgclass"src={moviedetail.poster} />
                        </CardContent>
                        {/* MOVIE DESCRIPTION */}
                        <CardContent>
                            <h5>{moviedetail.description}</h5>
                            {/* MOVIE GENRE */}
                            <div>
                            <h4>Genres:</h4>
                                {genres.map(genre => {
                                    return (
                                            <h5>{genre.name}</h5>
                                        
                                    );
                                })}
                           </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
            </section>
            {/* BOTTOM NAV BAR */}
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
            {/* END OF BOTTOM NAV BAR */}
        </div>
    )
}

export default DetailsPage;