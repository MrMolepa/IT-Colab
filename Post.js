import React,{ useEffect } from "react";


import "./wedo.css";

function Post(props) {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 } // 20% visible
    );

    reveals.forEach((reveal) => observer.observe(reveal));

    // Cleanup on unmount
    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);
  
  return (
    <div className="post-slide reveal">
      <div className="post-img">
     
        <a href="#" className="over-layer">
          <i className="fa fa-link"></i>
        </a>
      </div>
      <div className="post-content">
        <h3 className="post-title">
          <a href="#">
            {" "}
            {props.title} 
          </a>
        </h3>
        <p className="post-description">
          {props.description}
        </p>
        <span className="post-date">
          <i className="fa fa-clock-o"></i>
          {props.date}
        </span>
        <a href={props.url} className="btn read-more" target="_blank" rel="noopener noreferrer">
          read more
        </a>

     
      </div>
    </div>
  );
}

export default Post;
