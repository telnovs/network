import React from 'react';
import './App.css';

const App =() => {
    return (
      <div className ='app-wrapper'>
          <header className = 'header' >
              <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwZxjyeFzL8gtRFMMFx2TBLt4lYY3bg72UCV_7sGMtGliqMtNw'/>
          </header>
          <nav className = 'nav'>
              <div>
                 <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className ='content'>
             <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa6oUnm1b_f08m9G5ZSj6OgEUWbRN07MFKqJ22gEF2rjVu5jxF'/>
            </div>
          </div>

    );
  };


export default App;
