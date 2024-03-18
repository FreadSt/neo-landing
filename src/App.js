import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { Live } from './pages/live/Live';
import { AllMovies } from './pages/allMovies/AllMovies';
import FilmDetails from './pages/filmDetails/FilmDetails';
import { AboutPage } from './pages/about/AboutPage';
import { UnderConstruction } from './pages/underConstruction/SoonPage';
import { News } from './pages/news/News';
import { Services } from './pages/services/Services';
import { NeoNft } from './pages/web3/neoNFT/NeoNft';
import { NeoStaking } from './pages/web3/stake/Stake';
import { Redeem } from './pages/web3/redeem/Redeem';
import { Contact } from './pages/contact/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/live'} element={<Live />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/all_movies'} element={<AllMovies />} />
        <Route path={'/soon'} element={<UnderConstruction />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/shop'} element={<UnderConstruction />} />
        <Route path={'/services'} element={<Services />} />
        {/*<Route path={'/web3'} element={<UnderConstruction />} />*/}
        <Route path={'/web3/neo-nft'} element={<NeoNft />} />
        <Route path={'/web3/stake'} element={<NeoStaking />} />
        <Route path={'/web3/redeem'} element={<Redeem />} />
        <Route path={'/contacts'} element={<Contact />} />
        <Route path={'/film-details/:moviePath'} element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
