import {HashRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import './App.css';
//IMPORT COMPONENTS
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage'
import AddMoviePage from '../AddMoviePage/AddMoviePage'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
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
  );
}


export default App;
