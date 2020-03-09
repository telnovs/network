import React from 'react';
import'./App.css';
import Header from "./components/Haeder/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className="front">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>


    );
};


export default App;
