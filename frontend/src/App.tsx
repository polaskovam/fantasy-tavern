import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/game" element={<GamePage />}/>

            </Routes>
        </Router>
    );
}

export default App;