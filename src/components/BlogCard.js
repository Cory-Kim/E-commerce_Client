import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">23 May, 2023</p>
                <h5 className="title">
                    A beautiful sunday morning renaissance
                </h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et mollis turpis. Duis vulputate consectetur ipsum sit
                    amet ultricies. Nulla at urna sed ligula dictum
                    pellentesque. Morbi malesuada in massa vitae blandit.
                    Pellentesque et fermentum ligula.
                </p>
                <Link to="/blog/:id" className="button">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
