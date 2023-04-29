import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {AuthProvider} from "./context/AuthProvider";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then((reg) => console.log('Service Worker registered', reg))
        .catch((error) => console.log('Service Worker not registered', error))
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
);
