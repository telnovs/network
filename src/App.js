import React from 'react';
import './App.css';
import Header from "./components/Haeder/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="front">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path= "/dialogs" component={Dialogs}/>
                    <Route path= "/profile" component={Profile}/>
                    <Dialogs/>
                </div>
            </div>
        </BrowserRouter>


    );
};


export default App;
