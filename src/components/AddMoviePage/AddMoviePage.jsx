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
    const newMovie = useSelector(store => store.newMovie);
    const moviedetail = useSelector(store => store.moviedetail);
    const genres = useSelector(store => store.genres);

    // const[movie, setMovie] =useState('');
    // useEffect(() => {
    //     dispatch({ 
    //         type: 'ADD_MOVIE',
    //         payload: moviedetail.id });
    // }, []);
    const [newTitle, setNewTitle] = useState(newMovie.title);
    
    const addTitle = (event) => {
        setNewTitle(event.target.value);
        console.log( 'new title is:', newTitle );
    };

    const [newDescription, setNewDescription] = useState(newMovie.description);

    const addDescription =(event) => {
        setNewDescription(event.target.value);
        console.log( 'new description is:', newDescription );
    }

    const [newUrl, setNewUrl] = useState(newMovie.imgurl);

    const addUrl =(event) =>{
        setNewUrl(event.target.value);
        console.log( 'new imgurl is:', newUrl);
    }

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
                {/* the number inside {} indicates how wide the card can be. Weird. */}
                    <Card className="card" variant="outlined">
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
                        {/* DESCRIPTION INOUT */}
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
                        {/* IMAGE URL INPUT */}
                        <CardContent>
                        <TextField
                                id="outlined-multiline-static"
                                label="movie poster"
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={newMovie.description}
                                onChange={ ( event )=>addUrl( event )}
                                />
                        </CardContent>  
                        <CardActions sx={{ justifyContent: "right" }}> 
                        {/* ^^ centers the button, but not the card itself */}
                            <div className="NextPageButton">
                                {/* <Link to="/support">
                                    <Button size="large" variant="outlined" color="secondary" fontSize="large">go back</Button>
                                </Link>
                                <Link to="/review">
                                    <Button className="next" variant="contained" color="secondary" size="large">Next</Button>
                                </Link> */}
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