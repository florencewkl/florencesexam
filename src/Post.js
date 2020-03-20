import React from 'react';
import './style.css';

function Post(props){  
    var post = props.post;
    var first_section = post.sections[0] || {};
    var thumbnail = first_section.media[0].url;

    console.log(first_section); // HINT: see what is first section at your console

    return (
        <div className="post" onClick={() => { 
            if(typeof props.onClick == "function") {
                props.onClick();
            }
        }}>

            <img src={thumbnail} className="thumbnail" alt="Section"/>
            <div>
                <p className="post-title">{first_section.title}</p>
                <p className="post-time">{post.time}</p>
            </div>
        </div>
    );
}

export default Post;

