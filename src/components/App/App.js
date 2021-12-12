import {HashRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import './App.css';
//IMPORT COMPONENTS
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage'
import AddMoviePage from '../AddMoviePage/AddMoviePage'
import HeaderBar from'../HeaderBar/HeaderBar'
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <HeaderBar/>
      </div>

      {/* //ROUTER and LINKS div */}
      <div className="routerDiv">
      {/* Home page, aka movieList */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
    
        {/* Details page */}
        <Route path="/details">
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
        <Route path="/addmovie">
          <AddMoviePage />
        </Route>
      </Router>
      </div>
    </div>
  );
}


export default App;
