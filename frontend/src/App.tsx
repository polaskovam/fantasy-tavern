import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/main-page/MainPage";
import GamePage from "./components/game-page/GamePage";

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