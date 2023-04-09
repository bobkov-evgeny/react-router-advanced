import React, {Suspense, lazy} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./layout/MainLayout";
import {useAuth} from "./context/AuthProvider";
import NavBar from "./components/NavBar/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader/Loader";

const Login = lazy(() => import("./pages/Login"));
const HeroesList = lazy(() => import("./pages/HeroesList"));
const HeroDetailedInfo = lazy(() => import("./pages/HeroDetailedInfo"));
const LocationsList = lazy(() => import("./pages/LocationsList"));
const LocationDetailedInfo = lazy(() => import("./pages/LocationDetailedInfo"));
const EpisodesList = lazy(() => import("./pages/EpisodesList"));
const EpisodeDetailedInfo = lazy(() => import("./pages/EpisodeDetailedInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const navigate = useNavigate();
    const auth = useAuth();

    return (
        <div className="content">
            <header>
                <div
                    className="logo"
                    onClick={() => {navigate('/')}}
                />

                <NavBar />
            </header>

            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path="/"
                            element={auth?.user
                                ? <h1>Hello {auth.user}! Select desired category to proceed</h1>
                                : <h1>Please sign in to continue</h1>
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
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
