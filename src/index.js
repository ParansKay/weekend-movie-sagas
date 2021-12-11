import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('NEW_MOVIE', postNewMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all movies:', movies.data);
        yield put({ 
            type: 'SET_MOVIES',
            payload: movies.data }); 

    } catch {
        console.log('get all movies error');
    }      
}// END fetchAllMovies

function* fetchAllGenres(action) {
    // get all genres from the DB
    try {
        const genres = yield axios.get(`/api/genre?id=${action.payload}`); //using query method
        // const genres = yield axios.get(`/api/genre/${action.payload}`); // using params method
        console.log('get all genres:', genres.data);
        yield put({ 
            type: 'SET_GENRES', 
            payload: genres.data }); //if we write movie.data, none of the movies will be appended on the dom

    } catch {
        console.log('get all genres error');
    }
}//END fetchAllGenres

function* postNewMovie(action){
   // post new movie to the DB
   try {
    const movie = yield axios.post(`/api/movie`, {title: action.payload.title, poster: action.payload.poster, description: action.payload.description, genre_id: action.payload.genre });
    console.log('adding new movie:', movie.data);
    yield put({ 
        type: 'FETCH_MOVIES'});
} catch {
    console.log('error adding new movie');
} 

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const moviedetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        moviedetail
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
