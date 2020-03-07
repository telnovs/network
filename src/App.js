import React from 'react';
import './App.css';
import Header from "./components/Heder/Heder";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>


    );
};


export default App;
