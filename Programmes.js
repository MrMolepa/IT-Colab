import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './programmes.css';

function Programmes() {
  return (
    <>
      {/* <!-- inner page banner --> */}
      <div
        className="main-banner"
        style={{
          background: 'url(./images/banner/banner1.png) center top',
        }}
      >
        <div className="container px-md-0">
          <h2>
            <span>Programmes</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Programmes</li>
          </ul>
        </div>
      </div>
      {/* <!-- inner page banner --> */}
      <div className="examinations-container">
        <Tabs
          defaultActiveKey="LGCSE"
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="LGCSE" title="LGCSE">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="LGCSE">
                <div className="sec-title text-center mb-tt">
                  <h2 className="main-heading2">
                    Lesotho General Certificate of Secondary Education
                  </h2>
                  <span className="decor">
                    <span className="inner"></span>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <section className="LGCSE_brief">
                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="text-justify">
                          Stages of the Development of the LGCSE:Collaboration
                          between the Examinations Council of Lesotho and
                          Cambridge International Examinations. The Cambridge
                          Overseas School Certificate taken at the end of
                          secondary in{' '}
                        </p>
                        <p className="text-justify">
                          &nbsp;Lesotho is currently made up of Cambridge GCE O
                          Levels, marked and graded by ECOL in Lesotho since,
                          1989. As part of Lesotho&#8217;s national educational
                          development, the COSC is being replaced by a locally
                          produced qualification the LGCSE, which is being
                          developed over a period of years in three/four main
                          stages. In light of the prevailing and envisaged
                          changes in the assessment of education in Lesotho,
                          LGCSE is more relevant than COSC. The reason being
                          that, LGCSE will exist as a qualification where
                          performance in each subject is individually
                          recognized, unlike with COSC, which is based on a
                          group award system.This is an examination written at
                          the end of Senior Secondary. It is based on the IGCSE
                          model and it is accredited by Cambridge International
                          Examinations.
                        </p>

                        <h4 className="mt-3">Types of Candidates</h4>
                        <h5>School Candidates</h5>
                        <p>
                          Are fulltime learners and are doing a minimum of 6
                          subjects. Their registration is done in 2 ways:firstly
                          they submit softcopy of registration lists which ends
                          on February. Secondly they complete the financial
                          registration (pay for the candidates registered for
                          examinations) towards end of May
                        </p>
                        <h5>Private Candidates</h5>
                        <p>
                          Are learners who are studying as individuals without
                          attending any formal schools. They study six subjects
                          or more or less. They can register to the nearest
                          schools or go directly to Examinations Council of
                          Lesotho. Their registration ends towards end of May
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="certifications">
                  <div className="container">
                    <div className="row mt-3 subjectlist">
                    <h6>Subjects classified into five disciplines</h6>
                      <ul>
                        <li>Languages</li>
                        <li>Social sciences</li>
                        <li>Sciences</li>
                        <li>Mathematics</li>
                        <li>Creative, Technical and Vocational</li>
                      </ul>
                      <h5>
                        Subject combinations for fulfilment of Certification
                      </h5>
                      <ul>
                        <li>English Language</li>
                        <li>Sesotho</li>
                        <li>Mathematics</li>
                      </ul>

                      <h5>
                        At least one subject from the social sciences category
                        which comprises of the following syllabus
                      </h5>
                      <ul>
                        <li>Literature in English</li>
                        <li>Religious Studies</li>
                        <li>History</li>
                        <li>Geography</li>
                        <li>Development Studies</li>
                        <li>Economics (IGCSE)</li>
                      </ul>

                      <h5>At least one subject from Science category</h5>
                      <ul>
                        <li>Physical Science</li>
                        <li>Biology</li>
                      </ul>
                      <h5>
                        At least one subject from Creative, Technical and
                        Vocational
                      </h5>
                      <ul>
                        <li>Agriculture</li>
                        <li>Design and Technology</li>
                        <li>Fashion and Textiles</li>
                        <li>Food and Nutrition</li>
                        <li>Accounting</li>
                        <li>Travel and Tourism</li>
                        <li>Business Studies(IGCSE)</li>
                        <li>ICT (IGCSE)</li>
                      </ul>
                      <p>
                        Life skills Based Sexuality Education is a compulsory
                        subject for all school candidates.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Tab>
          <Tab eventKey="JC" title="JC">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <div className="sec-title  text-center mb-tt">
                  <h2 className="main-heading2">Junior Certificate</h2>
                  <span className="decor">
                    <span className="inner"></span>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <section className="LGCSE_brief">
                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="text-justify">
                          Foreign candidates must take any of the modern
                          languages instead of Sesotho.
                        </p>

                        <h4 className="mt-3">Types of Candidates</h4>
                        <h5>School Candidates</h5>
                        <p>
                          Are fulltime learners and are doing a minimum of 6
                          subjects. Their registration is done in 2 ways:firstly
                          they submit softcopy of registration lists which ends
                          on February. Secondly they complete the financial
                          registration (pay for the candidates registered for
                          examinations) towards end of May
                        </p>
                        <h5>Private Candidates</h5>
                        <p>
                          Are learners who are studying as individuals without
                          attending any formal schools. They study six subjects
                          or more or less. They can register to the nearest
                          schools or go directly to Examinations Council of
                          Lesotho. Their registration ends towards end of May
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="certifications">
                  <div className="container">
                    <div className="row mt-3 subjectlist">
                      <h5>GROUP One</h5>
                      <h6>compulsory subjects for all candidates</h6>
                      <ul>
                        <li>101 English</li>
                        <li>204 Sesotho</li>
                        <li>309. Mathematics</li>
                        <li>414. Science</li>
                      </ul>
                      <h6>
                        For foreign students there are the following languages
                      </h6>
                      <ul>
                        <li>202 French</li>
                        <li>208 Afrikaans</li>
                      </ul>

                      <h5>
                        Subject combinations for fulfilment of Certification
                      </h5>
                      <ul>
                        <li>English Language</li>
                        <li>Sesotho</li>
                        <li>Mathematics</li>
                      </ul>

                      <h5>GROUP Two</h5>
                      <h6>
                        Social Sciences from which candidates choose two
                        subjects
                      </h6>
                      <ul>
                        <li>511 Development Studies</li>
                        <li>513 History</li>
                        <li>515 Geography</li>
                        <li>623 Religious Knowledge</li>
                        <li>624 Religious. Knowledge (Alt)</li>
                      </ul>

                      <h5>GROUP Three</h5>
                      <h6>
                        Practical Studies from which candidates choose three{' '}
                      </h6>
                      <ul>
                        <li>611 Agriculture</li>
                        <li>616 Business Education</li>
                        <li>617 Domestic Science</li>
                        <li>621 Integrated. Home Economics</li>
                        <li>625 Typewriting</li>
                        <li>626 Woodwork</li>
                        <li>627 Basic Handcrafts</li>
                        <li>628 Technical Drawing</li>
                        <li>631 Computer Education </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Tab>
          <Tab eventKey="PSLE" title="GRADE 7">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <div className="sec-title  text-center mb-tt">
                  <h2 className="main-heading2">Grade 7</h2>
                  <span className="decor">
                    <span className="inner"></span>
                  </span>
                </div>
              </div>

              <div className="card-body">
                <section className="certifications">
                  <div className="container">
                    <h6>Compulsory subjects for all candidates</h6>
                    <div className="row mt-3 subjectlist">
                      <ul>
                        <li>English</li>
                        <li>Sesotho</li>
                        <li>Mathematics</li>
                        <li>Social Science</li>
                        <li>Life skills</li>
                        <li>Science and Technology</li>
                        <li>Arts and Enterpreneurship</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Programmes;
