import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@material-ui/core/TextField';

function AddMoviePage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();

    const moviedetail = useSelector(store => store.moviedetail);
    const genres = useSelector(store => store.genres);

    //Creating a new variable that allows us to send info updates to the store
    //default value is the pre-existing values we've given newMovie.title in the store
    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre: ''
    });
    //updating the value of title based on the input field
    const addTitle = (event) => {
        //changing only the title property in newMovie to the value in our input field
        setNewMovie({...newMovie, title: event.target.value});
        console.log( 'new title is:', newMovie.title );
    };
     //updating the value of poster based on the input field
    const addPoster = (event) => {
        //changing only the poster property in newMovie to the value in our input field
        setNewMovie({...newMovie, poster: event.target.value});
        console.log( 'new title is:', newMovie.poster );
    };
    //updating the value of description based on the input field
    const addDescription = (event) => {
        //changing only the description property in newMovie to the value in our input field
        setNewMovie({...newMovie, description: event.target.value});
        console.log( 'new title is:', newMovie.description );
    };
    //updating the value of genre based on the input field
    const addGenre = (event) => {
        //changing only the genre property in newMovie to the value in our input field
        setNewMovie({...newMovie, genre: event.target.value});
        console.log( 'new title is:', newMovie.genre );
    };

    const addNewMovie = (event) => {
        dispatch({ 
            type: 'NEW_MOVIE',
            payload: newMovie
        }, []);
    };

    return(
        <div>
            <div>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ width: '100%', height: 'auto'}}
                    >

                <Grid item xs={7}>
                {/* the number inside {} indicates how wide the card can be. Weird.*/}
                    <Card className="card" variant="outlined">
                        {/* HEADER */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <h3>Let's add in a new movie</h3>
                            </Typography>
                        </CardContent>
                        {/* TITLE INPUT */}
                        <CardContent>
                            <TextField
                                id="outlined-multiline-static"
                                label="movie title"
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={newMovie.title}
                                onChange={ ( event )=>addTitle( event )}
                                />
                        </CardContent> 
                        {/* IMAGE URL INPUT */}
                        <CardContent>
                        <TextField
                                id="outlined-multiline-static"
                                label="movie poster url"
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={newMovie.poster}
                                onChange={ ( event )=>addPoster( event )}
                                />
                        </CardContent>  
                        {/* DESCRIPTION INPUT */}
                        <CardContent>
                        <TextField
                                id="outlined-multiline-static"
                                label="movie description"
                                multiline
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={newMovie.description}
                                onChange={ ( event )=>addDescription( event )}
                                />
                        </CardContent> 
                        {/* GENRE DROP DOWN */}
                       <CardContent>
                            <FormControl className="formClass" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="genre-select-label">pick a genre</InputLabel>
                                    <Select
                                        labelId="genre-select-label"
                                        // this ID needs to be the same as the ID of InputLabel ^^
                                        id="genre-select"
                                        // but this id needs to be different from the other two above ^^
                                        value={newMovie.genre}
                                        label="genreSelect"
                                        onChange={( event )=>addGenre( event )}
                                    >
                                        <MenuItem value="">
                                            <em>pick a genre</em>
                                            {/* this is an empty value. when a user clicks on this, the selector box will go back to displaying the label */}
                                        </MenuItem>
                                        <MenuItem value={1}>Adventure</MenuItem>
                                        <MenuItem value={2}>Animated</MenuItem>
                                        <MenuItem value={3}>Biographical</MenuItem>
                                        <MenuItem value={4}>Comedy</MenuItem>
                                        <MenuItem value={5}>Disaster</MenuItem>
                                        <MenuItem value={6}>Drama</MenuItem>
                                        <MenuItem value={7}>Epic</MenuItem>
                                        <MenuItem value={8}>Fantasy</MenuItem>
                                        <MenuItem value={9}>Musical</MenuItem>
                                        <MenuItem value={10}>Romantic</MenuItem>
                                        <MenuItem value={11}>Science Fiction</MenuItem>
                                        <MenuItem value={12}>Space-Opera</MenuItem>
                                        <MenuItem value={13}>Superhero</MenuItem>
                                    </Select>
                                    <FormHelperText>Select a genre that best describes this movie!</FormHelperText>
                                    {/* this places a "helper text" for the user under the select box */}
                            </FormControl>
                        </CardContent>
                         {/*BUTTONS  */}
                        <CardActions sx={{ justifyContent: "right" }}> 
                        {/* ^^ centers the button, but not the card itself */}
                            <div className="NextPageButton">
                                <Link to="/">
                                    <Button size="large" variant="outlined" color="secondary" fontSize="large">Cancel</Button>
                                </Link>
                                <Link to="/">
                                    <Button className="next" variant="contained" color="secondary" size="large" onClick={addNewMovie}>Save</Button>
                                </Link>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>      
            </Grid>
        </div>
        {/* <div>
            <h2>JSON.stringify {newComment}</h2>
        </div> */}
    </div>
        
    )
}

export default AddMoviePage;