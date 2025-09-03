import React from "react";
import certificate from "../images/education.JPG";
import EcoLVedio from "../images/Ecol.mp4";
import "./services.css";

const Services = () => {
  return (
    <>
      <section
        className="services-hero"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-hero_left">
                <h2>
                  Conducting school-level assessments on behalf of the Ministry
                  of Education and Training (MoET).
                </h2>

                <p className="service-hero_paragraph text-justify">
                  The Examinations Council of Lesotho (ECoL) is a non-profit
                  organization which is responsible for conducting school-level
                  assessments on behalf of the Ministry of Education and
                  Training (MoET). conducts End-of-Level Assessments at
                  specified points in the education system, for example, Grade4
                  and Grade7. ECoL further carries out public examinations at
                  the end of Junior Secondary, Form C (Junior Certificate
                  Examination) and at the end of Senior Secondary, Form E (O’
                  Level/LGCSE). The O’ Level curriculum and examinations are
                  accredited by Cambridge International Assessment.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-hero_right">
                <video width="500" loop="true" autoplay="autoplay"  muted height="270" controls>
                  <source src={EcoLVedio} type="video/mp4" />
                </video>
                {/* <img
                  src={certificate}
                  className="service-image img-fluid"
                  alt="Services"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="custom-separator mx-auto "></div>
        <div className="container mt-4 mb-4 ">
          <div className="row ">
          {/* Service Card 1 */}
          <div className="col-md-6 col-lg-4 mb-3"> 
            <div className="box p-4 evaluation-card" data-aos="zoom-in-up"> 
              <div className="service-icon-container mb-4"> 
                <div className="service-icon evaluation-icon"> 
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/> 
                  </svg> 
                </div> 
              </div>
              <h4>EVALUATION OF FOREIGN RESULTS</h4>
              <h5 className="key-features">Key Features</h5>
              <ul>
                <li>Payment method : M-PESA or EFT</li>
                <li>Fee : M525.00</li>
                <li>Required : Copy of Statement of Results Or Certificate</li>
             

              <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://ecol.org.ls/services">Get Evaluation</a>
                 </ul>
              <a className="readmore" href="#">
                <span>Results will be available within 5 Working days</span>
              </a>
            </div>
          </div>
             {/* Service Card 2 */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4 printing-card" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon printing-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>PSLE/LGCSE Results Printing</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  <li>Payment method : M-PESA or EFT</li>
                  <li>LGCSE fee : M165.00</li>
                  <li>PSLE fee : M165.00</li>
                  <li>Requirements : Letter From School</li>
                  <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://ecol.org.ls/services">Print Results</a>
                </ul>
                <a className="readmore" href="#">
                  <span>Results are issued within a day</span>
                </a>
              </div>
            </div>
             {/* Service Card 3 */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4 verification-card" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon verification-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>RESULTS OR CERTIFICATION VERIFICATION </h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  <li>Payment method : M-PESA or EFT </li>
                  <li>Local Verification(Employers / Companies) : M200.00 </li>
                  <li>Foreign Verification : M405.00</li>
                  <li>Education Institutions Verification : M105.00</li>
                  <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://ecol.org.ls/services">Verify Now</a>
                </ul>

                <a className="readmore" href="#">
                  <span>Results will be available withing 5 working days</span>
                </a>
              </div>
            </div>
             {/* Service Card 4 */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4 certificate-card" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon certificate-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4,3C2.89,3 2,3.89 2,5V15C2,16.11 2.89,17 4,17H11V19.5L13.5,21L16,19.5V17H20C21.11,17 22,16.11 22,15V5C22,3.89 21.11,3 20,3H4M4,5H20V15H16V12H11V15H4V5M13.5,7A1.5,1.5 0 0,0 12,8.5A1.5,1.5 0 0,0 13.5,10A1.5,1.5 0 0,0 15,8.5A1.5,1.5 0 0,0 13.5,7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>CERTIFICATE REPLACEMENT</h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  <li>Payment method : M-PESA or EFT</li>
                  <li>PSLE fee : M345.00 </li>
                  <li>JC fee : M645.00 </li>
                  <li>LGCSE fee : M1245.00</li>
                  <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://ecol.org.ls/services">Apply Now</a>
                </ul>
                <a className="readmore" href="#">
                  <span>
                    <h4>REQUIREMENTS</h4>
                    <ul>
                      <li>A Letter from school</li>
                      <li>Affidavit from police station</li>
                      <li>Receipts from the bank</li>
                      <li>Passport size photo(coloured)</li>
                    </ul>
                  </span>
                </a>
              </div>
            </div>
            {/* Service Card 5 */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4 migration-card" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon migration-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="white"/>
                      <path d="M8,12V14H16V12H8M8,16V18H13V16H8Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>MIGRATION CERTIFICATE </h4>
                <h5 className="key-features">Key Features</h5>
                <ul>
                  <li>Payment method : M-PESA or EFT </li>
                  <li>Migration certificate fee : M1245.00</li>
                  <li>English Proficiency fee : M105.00</li>
                  <li>Requirements : Original LGSCE/COSC Certificate</li>
                  <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://ecol.org.ls/services">Apply Now</a>
                </ul>
                <a className="readmore" href="#">
                  <span>
                    <ul>
                      <li>
                        Migration certificate will be available within 2 working
                        days
                      </li>
                      <li>
                        English proficiency results will be available within a
                        day
                      </li>
                    </ul>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Service Card 6 - Online Registration 
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon registration-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6L21 9ZM15 10.5V12.5C15 13.3 14.3 14 13.5 14H10.5C9.7 14 9 13.3 9 12.5V10.5C9 9.7 9.7 9 10.5 9H13.5C14.3 9 15 9.7 15 10.5ZM5 16C5 14.9 5.9 14 7 14S9 14.9 9 16C9 17.1 8.1 18 7 18S5 17.1 5 16ZM15 16C15 14.9 15.9 14 17 14S19 14.9 19 16C19 17.1 18.1 18 17 18S15 17.1 15 16ZM7 19C8.1 19 9 19.9 9 21H5C5 19.9 5.9 19 7 19ZM17 19C18.1 19 19 19.9 19 21H15C15 19.9 15.9 19 17 19Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>ONLINE REGISTRATION</h4>
                <ul>
                  <li>24/7 Access to registration portal</li>
                  <li>Real-time status tracking</li>
                  <li>Email notifications</li>
                  <li>Secure payment processing</li>
                  <a className="btn btn-primary mt-2" target="_blank" rel="noreferrer" href="https://ecol.org.ls/services">
                    Register Online
                  </a>
                </ul>
                <a className="readmore" href="#">
                  <span>Streamlined digital registration for all examinations</span>
                </a>
              </div>
            </div>

           
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon support-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM19 7V9H5V7H19ZM20 10C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14H19V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V14H4C3.4 14 3 13.6 3 13V11C3 10.4 3.4 10 4 10H20ZM17 12H7V19H17V12Z" fill="white"/>
                      <path d="M9 13H15V14H9V13ZM9 15H13V16H9V15ZM9 17H15V18H9V17Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>STUDENT SUPPORT SERVICES</h4>
                <ul>
                  <li>Expert examination guidance</li>
                  <li>Academic counselling services</li>
                  <li>Resource library access</li>
                  <li>Career counselling support</li>
                  <a className="btn btn-primary mt-2" target="_blank" rel="noreferrer" href="https://ecol.org.ls/services">
                    Get Support
                  </a>
                </ul>
                <a className="readmore" href="#">
                  <span>Comprehensive support for students and educators</span>
                </a>
              </div>
            </div>

            
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="box p-4" data-aos="zoom-in-up">
                <div className="service-icon-container mb-4">
                  <div className="service-icon institutional-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>INSTITUTIONAL SERVICES</h4>
                <ul>
                  <li>Bulk processing services</li>
                  <li>Custom institutional reports</li>
                  <li>Dedicated administrative support</li>
                  <li>Educational institution partnerships</li>
                  <a className="btn btn-primary mt-2" target="_blank" rel="noreferrer" href="https://ecol.org.ls/services">
                    Learn More
                  </a>
                </ul>
                <a className="readmore" href="#">
                  <span>Specialized services for educational institutions</span>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
