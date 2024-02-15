import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { FooterCreds } from './components/credsFooter/FooterCreds';
import { Live } from './pages/live/Live';
import { AllMovies } from './pages/allMovies/AllMovies';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/live'} element={<Live />} />
        <Route path={'/all_movies'} element={<AllMovies />} />
      </Routes>
      {/*<FooterCreds />*/}
    </div>
  );
}

export default App;
