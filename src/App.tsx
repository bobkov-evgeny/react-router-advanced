import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {NotFound} from "./pages/NotFound";
import HeroesList from "./pages/HeroesList";
import LocationsList from "./pages/LocationsList";
import EpisodesList from "./pages/EpisodesList";
import HeroDetailedInfo from "./pages/HeroDetailedInfo";
import LocationDetailedInfo from "./pages/LocationDetailedInfo";
import EpisodeDetailedInfo from "./pages/EpisodeDetailedInfo";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import {useAuth} from "./context/AuthProvider";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const navigate = useNavigate();
    const auth = useAuth();

    return (
        <div className="content">

            <div
                className="logo"
                onClick={() => {navigate('/')}}
            />

            <NavBar />

            <Routes>
                <Route
                    path="/"
                    element={auth?.user
                        ? <h1>Hello {auth.user}! Select desired category to proceed</h1>
                        : <h1>Hello! Please sign in to continue</h1>
                    }
                />
                <Route path="/login" element={<Login />} />

                <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
                    <Route path="/heroes" element={<HeroesList />} />
                    <Route path='/heroes/:id' element={<HeroDetailedInfo />} />
                    <Route path='/locations' element={<LocationsList />} />
                    <Route path='/locations/:id' element={<LocationDetailedInfo />} />
                    <Route path="/episodes" element={<EpisodesList />} />
                    <Route path="/episodes/:id" element={<EpisodeDetailedInfo />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
