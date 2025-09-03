import React from "react";
import "./wedo.css";
import {
  Link,
} from "react-router-dom";

class Wedo extends React.Component {
  componentDidMount() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.2 }); // 20% visible

    reveals.forEach(reveal => observer.observe(reveal));
  }
  render() {
    return (
      <section className="what-we-do what-we-title   ">
        <div className="container py-5">
          <div className="row align-items-end">
            <div className="col-lg-12  mb-lg-0">
              <div className="text-center">
                <h2 className="display-3 ">What we do</h2>
                

                <ul className="list-unstyled mt-2 mb-5 services-list text-center">
                  <li className="mb-3 reveal">
                    <i className=""></i> EVALUATION
                    OF FOREIGN RESULTS
                  </li>
                  <li className="mb-3 reveal">
                    <i className=""></i>{" "}
                    CERTIFICATE MIGRATION
                  </li>
                  <li className="mb-3 reveal">
                    <i className=""></i>{" "}
                    VERIFICATION AND PROFICIENCY
                  </li>
                  <li className="mb-3 reveal">
                    <i className=""></i> JC/LGCSE
                    Results Printing
                  </li>
                  <li className="mb-3 reveal">
                    <i className=""></i>{" "}
                    CERTIFICATE REPLACEMENT
                  </li>
                  <li className="mb-3 reveal">
                    <i className=""></i>{" "}
                    REGISTRATION OF EXAMINATION CENTRES
                  </li>

                 
                </ul>

                <Link to="/services" className="modern-btn services-btn"> Read more</Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}
export default Wedo;
