import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './style.css';

function PostDetail(props){

    // setup an array called sections to contain our post content
  
    var sections = props.post.sections;
   
    return(
        <div className="post-detail-view">
            {/* -------------- Display post section by section -------------- */}
            {
                sections.map((s) => {
                    // get the url of the first image from this section
                    var imageUrl = s.media[0].url;
                    
                    
                    return (
                        
                        <div key={s.id} className="section">
                            <img src = {imageUrl} className="section-image" alt="section-thumbnail"/>
                            <div className="section-title">{s.title}</div>

                            <div className="section-description">
                            {ReactHtmlParser(s.description)}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )

}

export default PostDetail;