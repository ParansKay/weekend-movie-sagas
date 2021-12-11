import { useState } from "react";
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();
    const moviedetail = useSelector(store => store.moviedetail);
    const genres = useSelector(store => store.genres);

      useEffect(() => {
        dispatch({ 
            type: 'FETCH_GENRES',
            payload: moviedetail.id });
    }, []);

    return(
        <div>
            <h1>DetailsPage</h1>
            <section className="movieDetail">
            <div key={moviedetail.id}>
                <h4>{moviedetail.title}</h4>
                <img className="imgclass"src={moviedetail.poster} />
                <h5>{moviedetail.description}</h5>
            </div>
            <div>
                <h4>Genres:</h4>
                {genres.map(genre => {
                    return (
                        <div>
                            <h5>{genre.name}</h5>
                        </div>
                    );
                })}
            </div>
            </section>

            <Link to="/">
            <button>go back to Movie List</button>
            </Link>
        </div>
    )
}

export default DetailsPage;