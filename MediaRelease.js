import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './mediarelease.css';

function MediaRelease() {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
    dots: true,
  };
  return (
    <>
      {/* <!-- inner page banner --> */}
      <div
        className="main-banner"
        style={{
          background: 'url(./images/banner/banner.png) center top',
        }}
      >
        <div className="container px-md-0">
          <h2>
            <span>Media release</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Media release</li>
          </ul>
        </div>
      </div>
      {/* <!-- inner page banner --> */}

      <div className="container px-md-0 main-container">
        <div className="container px-md-0">
          <div className="sec-title text-center">
            <h2>Media Release</h2>
            <span className="decor">
              <span className="inner" />
            </span>
          </div>
        </div>
        <div className="notification-boxes row">
          <OwlCarousel
            loop
            margin={20}
            autoplay
            items={3}
            responsiveClass={true}
            {...options}
          >
            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>The candidate foreword by the CEO</h4>
                <p>
                  I am very happy to present the first issue of the candidate in
                  2022. This comes at the time when the organisation is in.
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/The_Candidate_Jan_March_2022_FINAL_3bbf2ec4a5.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>

            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>Assessment of educational progress</h4>
                <p>
                  In 1990, Leaders of the world made an undertaking at the world
                  conference on Education for All, Jomtier, Thailand to...
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/The_2021_Survey_Report_HR_Singles_d43d6e3756.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>

            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>The Advanced subsidiary (AS) examinations</h4>
                <p>
                  The Advanced subsidiary examinations are currently under way
                  in the three schools offering the AS curriculum...
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/Assessment_Strategy_2012v3_2dffa81653.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>
            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>The candidate foreword by the CEO</h4>
                <p>
                  I am very happy to present the first issue of the candidate in
                  2022. This comes at the time when the organisation is in.
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/The_Candidate_Jan_March_2022_FINAL_3bbf2ec4a5.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>

            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>Assessment of educational progress</h4>
                <p>
                  In 1990, Leaders of the world made an undertaking at the world
                  conference on Education for All, Jomtier, Thailand to...
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/The_2021_Survey_Report_HR_Singles_d43d6e3756.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>

            <div>
              <div className="box hover-border-outer hover-border">
                <div className="icon">
                  <i className="fas fa-bell" style={{ color: '#598abf' }} />
                </div>
                <h4>The Advanced subsidiary (AS) examinations</h4>
                <p>
                  The Advanced subsidiary examinations are currently under way
                  in the three schools offering the AS curriculum...
                </p>
                <a
                  href="https://web.examscouncil.org.ls/uploads/Assessment_Strategy_2012v3_2dffa81653.pdf"
                  className="btn"
                >
                  Read More{' '}
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
export default MediaRelease;
