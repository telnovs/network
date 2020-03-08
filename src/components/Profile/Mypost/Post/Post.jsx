import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE8ONSyYrM-yJMooletyTZ-eHJF37_HHkP8SPxNHrGJ04X028k'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
};

export default Post;