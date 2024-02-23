import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { Live } from './pages/live/Live';
import { AllMovies } from './pages/allMovies/AllMovies';
import FilmDetails from './pages/filmDetails/FilmDetails';
import { AboutPage } from './pages/about/AboutPage';
import { UnderConstruction } from './pages/underConstruction/SoonPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/live'} element={<Live />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/all_movies'} element={<AllMovies />} />
        <Route path={'/soon'} element={<UnderConstruction />} />
        <Route path={'/film-details/:moviePath'} element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
