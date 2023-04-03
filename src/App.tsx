import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {NotFound} from "./pages/NotFound";
import NavBar from "./components/NavBar/NavBar";
import HeroesList from "./pages/HeroesList";
import LocationsList from "./pages/LocationsList";
import EpisodesList from "./pages/EpisodesList";
import HeroDetailedInfo from "./pages/HeroDetailedInfo";
import LocationDetailedInfo from "./pages/LocationDetailedInfo";
import EpisodeDetailedInfo from "./pages/EpisodeDetailedInfo";

function App() {
    const navigate = useNavigate();

    return (
        <div className="content">

            <div
                className="logo"
                onClick={() => {navigate('/')}}
            />

            <NavBar />

            <Routes>
                <Route path="/" element={<h1>Hi, please select category</h1>} />
                <Route path="/heroes" element={<HeroesList />} />
                <Route path='/heroes/:id' element={<HeroDetailedInfo />} />
                <Route path='/locations' element={<LocationsList />} />
                <Route path='/locations/:id' element={<LocationDetailedInfo />} />
                <Route path="/episodes" element={<EpisodesList />} />
                <Route path="/episodes/:id" element={<EpisodeDetailedInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
