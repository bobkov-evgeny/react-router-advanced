import React, {Suspense, lazy, useState, useRef, useCallback} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./layout/MainLayout";
import {useAuth} from "./context/AuthProvider";
import NavBar from "./components/NavBar/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import {useSearch} from "./hooks/useSearch";
import Loader from "./components/Loader/Loader";

const Login = lazy(() => import("./pages/Login"));
const HeroesList = lazy(() => import("./pages/HeroesList"));
const HeroDetailedInfo = lazy(() => import("./pages/HeroDetailedInfo"));
const LocationsList = lazy(() => import("./pages/LocationsList").then(module => ({
    default: module.LocationsList
})));
const LocationDetailedInfo = lazy(() => import("./pages/LocationDetailedInfo"));
const EpisodesList = lazy(() => import("./pages/EpisodesList"));
const EpisodeDetailedInfo = lazy(() => import("./pages/EpisodeDetailedInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const {
        loading,
        error,
        data,
        hasMoreData
    } = useSearch(query, pageNumber);
    const observer = useRef<IntersectionObserver>();

    const lastNodeRef: any = useCallback((node: Element) => {
        if(loading) return;
        if(observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMoreData) {
                setPageNumber(prev => prev + 1);
            }
        });

        if(node) {
            observer.current.observe(node);
        }
    }, [loading, hasMoreData]);

    const handleChange = (e: any) => {
        setQuery(e.target.value);
        setPageNumber(1);
    }

    return (
        <div className="content">
            <header>
                <div
                    className="logo"
                    onClick={() => {navigate('/')}}
                />


                <NavBar />
            </header>
            
            {/*<input onChange={handleChange} />*/}

            {/*{data.map((item, index)=> {*/}
            {/*    if(data.length === index + 1) {*/}
            {/*        return (*/}
            {/*            <span ref={lastNodeRef} style={{color: 'red'}} key={item}>{item}</span>*/}
            {/*        )*/}
            {/*    }*/}
            {/*    return (*/}
            {/*        <span key={item}>{item}</span>*/}
            {/*    )*/}
            {/*})}*/}

            {/*{loading && <span>Loading</span>}*/}
            {/*{error && <span>Error</span>}*/}

            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
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
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
