import React from 'react';
import s from './Profile.module.css';
import  MyPosts from './Mypost/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgGvqckoFaMZw65g-EVt4t5AmgnddZSVwITG--RMokHyji-0ez' alt="img"/>
        </div>
        <div>
            ava + description
        </div>
           < MyPosts />
            </div>
         )
};


export default Profile;