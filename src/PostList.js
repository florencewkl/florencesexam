import React, { useState, useEffect } from 'react';
import Post from './Post';
import PostDetail from './PostDetail';
import './style.css';

function PostList(){

    var [selectedPost, setSelectedPost] = useState({
        sections : []
    });
    var [posts, setPosts] = useState([]);

    useEffect(() => {
        // get posts
        fetch(
            "/api/articles",
            {
                method : "GET"
            }
        )
        // get response's data
        .then((response) => {
            return response.json();
        })
        // assign data to state
        .then((data) => {
            // get posts
            var posts = data.data.rows;
            // update state
            setPosts(posts);
            
        })
        // error?
        .catch((error) => {
            alert(error);
        });
    }, []);

    return (
        <div className="app-container">
            <div className="wrapper">

                {/* --------- Post List ---------- */}
                <div className="left-column">
                    <div className="nav">
                        文章列表
                    </div>
                    <div className="post-list">
                        {posts.map((a) => {
                            return (
                                <Post key={a.id} post={a} onClick={() => {
                                    // When post onClick, we set selectedPost as a
                                    setSelectedPost(a);  
                                }}/> 
                            );
                        })}
                    </div>
                </div>
                {/* --------- /Post List ---------- */}

                {/* --------- Post Reading View ---------- */}
                <div className="right-column">
                    {/*  Post Detail is a component displaying the selected Post */}
                    <PostDetail post={selectedPost} />
                </div>
                {/* --------- /Post Reading View ---------- */}

            </div>
        </div>
    );


}

export default PostList;

