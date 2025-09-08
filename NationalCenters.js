import React from 'react';
import './nationalcenters.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//
function NationalCenters() {
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
            <span>Center</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Center</li>
          </ul>
        </div>
      </div>
      {/* <!-- inner page banner --> */}

      <div className="examinations-container">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <h2>Good</h2>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <h2>Good</h2>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h2>Good</h2>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default NationalCenters;
