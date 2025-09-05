import React from 'react';
// import certificate from "../images/education.JPG";
import Picture_1 from '../images/service-clock.jpg';

import './services.css';

const Services = () => {
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
            <span>Services</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Services</li>
          </ul>
        </div>
      </div>
      {/* <!-- inner page banner --> */}

      <div className="conduct_layout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">{/* Optional content */}</div>
            </div>
          </div>

          <div className="row top-img">
            <div className="col-md-5 col-sm-12 col-xsm-12 image_contain">
              <div className="conduct-img">
                <img
                  src={Picture_1}
                  alt="Picture_1"
                  className="w-75 img-thumbnail"
                />
                <img
                  src={Picture_1}
                  width={1300}
                  alt="Picture_1"
                  className="w-75 img-thumbnail"
                />
              </div>
            </div>
            <div className="col-md-7 mt-2">
              <div className="full">
                <div className="container px-md-0">
                  <div className="sec-title style-two mb-tt">
                    <h2>
                      Conducting school-level assessments on behalf of the
                      Ministry of Education and Training (MoET).
                    </h2>

                    <span className="decor">
                      <span className="inner" />
                    </span>
                  </div>
                </div>
                <p align="justify">
                  The Examinations Council of Lesotho (ECoL) is a non-profit
                  organization which is responsible for conducting school-level
                  assessments on behalf of the Ministry of Education and
                  Training (MoET). conducts End-of-Level Assessments at
                  specified points in the education system, for example, Grade4
                  and Grade7. ECoL further carries out public examinations at
                  the end of Junior Secondary, Form C (Junior Certificate
                  Examination) and at the end of Senior Secondary, Form E (O’
                  Level/LGCSE). The O’ Level curriculum and examinations are
                  accredited by Cambridge International Assessment...
                </p>
                <p>
                  <a className="btn btn-1" href="/about-us">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="eservice">
        <div className="container px-md-0">
          <div className="sec-title text-center">
            <h2>Services</h2>
            <p>Payment method : M-PESA or EFT</p>
            <span className="decor">
              <span className="inner" />
            </span>
          </div>
          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="box evaluation-card" data-aos="fade-up">
                <div className="service-icon-container">
                  <div className="service-icon evaluation-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Evaluation of Foreign Results</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  <li>Evaluation Fee: M675.00</li>
                  
                  <li>Requirements: Copy of Statement of Results or Certificate</li>
                </ul>
                <a 
                  href="https://ecol.org.ls/services" 
                  className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Evaluation
                </a>
                <div className="readmore">
                  <ul>
                  <li>Results: available within 5 working days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="box printing-card" data-aos="fade-up" data-aos-delay="100">
                <div className="popular-badge">Popular</div>
                <div className="service-icon-container">
                  <div className="service-icon printing-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM16 19H8V14H16V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12ZM18 3H6V7H18V3Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>GRADE 7/LGCSE Results Printing</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                 
                  <li>LGCSE Printing Fee: M220.00</li>
                  <li>Grade 7 - Printing Fee: M220.00</li>
                  <li>Correction of spelling: M260.00</li>
      
                  <li>Requirements: Letter From School</li>
                </ul>
                <a 
                  href="https://ecol.org.ls/services" 
                  className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Print Results
                </a>
                <div className="readmore">
                  <ul>
                  <li>Results:within a day</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="box verification-card" data-aos="fade-up" data-aos-delay="200">
                <div className="service-icon-container">
                  <div className="service-icon verification-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Results/Certification Verification</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  
                  <li>Local Verification: M250.00</li>
                  <li>Foreign Verification: M545.00</li>
                  <li>Education Institutions: M165.00</li>
                    <p></p>
                     <p> <span className=" mr-3"></span>
                      <b>Note:</b>
                    
                    
                      Local Verification(Employers/Companies).
                  
                    </p>
                    


                </ul>
                <a 
                  href="https://ecol.org.ls/services" 
                  className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Verify Now
                </a>
                <div className="readmore">
                  <ul><li>Results: available within 5 working days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="box certificate-card" data-aos="fade-up" data-aos-delay="300">
                <div className="service-icon-container">
                  <div className="service-icon certificate-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4,3C2.89,3 2,3.89 2,5V15C2,16.11 2.89,17 4,17H11V19.5L13.5,21L16,19.5V17H20C21.11,17 22,16.11 22,15V5C22,3.89 21.11,3 20,3H4M4,5H20V15H16V12H11V15H4V5M13.5,7A1.5,1.5 0 0,0 12,8.5A1.5,1.5 0 0,0 13.5,10A1.5,1.5 0 0,0 15,8.5A1.5,1.5 0 0,0 13.5,7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Certificate Replacement</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  
                  <li>PSLE fee:   1365.00</li>
                  <li>JC fee:  1365.00</li>
                  <li>LGCSE fee:  1365.00</li>
                </ul>
                <a 
                  href="https://ecol.org.ls/services" 
                  className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <div className="readmore">
                  <h6>Requirements:</h6>
                  <ul>
                    <li>Letter from school</li>
                    <li>Affidavit from police station</li>
                    <li>Bank payment receipt</li>
                    <li>Passport size photo (coloured)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="box migration-card" data-aos="fade-up">
                <div className="service-icon-container">
                  <div className="service-icon migration-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Migration Certificate</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  
                  <li>Migration certificate: M1365.00</li>
                  <li>Requirements: Original LGSCE/COSC Certificate</li>
                </ul>
                <a 
                href="https://ecol.org.ls/services" className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <div className="readmore">
                  <ul>
                    <li>Migration certificate: Within a day</li>
                  </ul>
                </div>
              </div>
            </div>
			{/*Service Card 6 - Online Registration*/}
            <div className="col-md-6 col-lg-4">
              <div className="box proficiency-card" data-aos="fade-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon proficiency-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4,3C2.89,3 2,3.89 2,5V15C2,16.11 2.89,17 4,17H11V19.5L13.5,21L16,19.5V17H20C21.11,17 22,16.11 22,15V5C22,3.89 21.11,3 20,3H4M4,5H20V15H16V12H11V15H4V5M13.5,7A1.5,1.5 0 0,0 12,8.5A1.5,1.5 0 0,0 13.5,10A1.5,1.5 0 0,0 15,8.5A1.5,1.5 0 0,0 13.5,7Z" fill="white"/>
                   </svg>
                  </div>
                </div>
                <h4>ENGLISH PROFICIENCY</h4>
                <h5 className="key-features">Key Features</h5>
                    <ul>
                  <li>English Proficiency Fee:M400.00</li>
                  
                  <li>requirements: Original LGSCE/COSC Certificate</li>
                </ul>
                 <a 
                href="https://ecol.org.ls/services" className="btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <div className="readmore">
                <ul>
                  <li>Results: within 2 working days</li>
                </ul>
                </div>
              </div>
            </div>
			
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Services;
