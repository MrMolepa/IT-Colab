import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './fees.css';
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_PRIVATE_FEE = gql`
  query {
    privateCandidates {
      data {
        attributes {
          registration_fee
          subject_fee
          local_fee
          bank_charge
          total
        }
      }
    }
  }
`;

const GET_SCHOOL_FEE = gql`
  query {
    lgcseSchoolCandidates {
      data {
        attributes {
          registration_fee
          subject_fee
          local_fee
          bank_charge
          total
        }
      }
    }
  }
`;

const GET_AS_FEE = gql`
  query {
    asLevelFees {
      data {
        attributes {
          registration_fee
          subject_fee
          local_fee
          bank_charge
          total
        }
      }
    }
  }
`;

const GET_DELF_FEE = gql`
  query {
    lgcseDelves {
      data {
        attributes {
          subject_fee
          bank_charge
          total
        }
      }
    }
  }
`;

const GET_JC_PRIVATE_FEE = gql`
  query {
    jcPrivateCandidateFees {
      data {
        attributes {
          registration_fee
          subject_fee
          bank_charge
          total
        }
      }
    }
  }
`;

const GET_GRADE_7_FEE = gql`
  query {
    gradeSevenFees {
      data {
        attributes {
          subject_fee
          bank_charge
          total
        }
      }
    }
  }
`;
function Fees() {
  const privateCandidateData = useQuery(GET_PRIVATE_FEE);
  const privateCandidateFees = privateCandidateData?.data;

  const schoolCandidateData = useQuery(GET_SCHOOL_FEE);
  const schoolCandidateFees = schoolCandidateData?.data;

  const asLevelCandidateData = useQuery(GET_AS_FEE);
  const asLevelCandidateFees = asLevelCandidateData?.data;

  const delfCandidateData = useQuery(GET_DELF_FEE);
  const delfCandidateFees = delfCandidateData?.data;

  const jcCandidateData = useQuery(GET_JC_PRIVATE_FEE);
  const jcCandidateFees = jcCandidateData?.data;

  const gradeSevenCandidateData = useQuery(GET_GRADE_7_FEE);
  const gradeSevenCandidateFees = gradeSevenCandidateData?.data;

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
            <span>Examination Fee</span>
          </h2>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container px-md-0">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-inline-item active">Exams fee</li>
          </ul>
        </div>
      </div>
      {/* <!-- inner page banner --> */}
      <div className="examinations-container">
        <Tabs
          defaultActiveKey="LGCSE_private"
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="LGCSE_private" title="LGCSE: PRIVATE CANDIDATES">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  LGCSE Examinations Fees : Private Candidates
                </h4>
              </div>
              <div className="card-body">
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    {' '}
                    June LGCSE Examinations closing date for financial
                    registration is 28th February 2025.
                  </span>
                </p>
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    November 2025 LGCSE Examinations closing date for financial
                    registration is 30th April 2025.
                  </span>{' '}
                </p>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-light">
                      <tr className="table-secondary">
                        <th scope="col">NO.</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {privateCandidateFees?.privateCandidates.data.map(
                        (privateCandidate, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{privateCandidate.attributes.total}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="LGCSE_school" title="LGCSE: SCHOOL CANDIDATES">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="LGCSE">
                <h4 className="my-0 font-weight-normal">
                  LGCSE Examinations Fees : School Candidates
                </h4>
              </div>
              <div className="card-body">
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    Practical fee per subject is M150.00.
                  </span>{' '}
                </p>
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    Deadline for financial registration is 30th April 2025
                  </span>{' '}
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr className="table-secondary">
                        <th scope="col">NO.</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schoolCandidateFees?.lgcseSchoolCandidates.data.map(
                        (fee, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 6}</th>
                            <td>{fee.attributes.total}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="lasc" title="LASC">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="lasc">
                <h4 className="my-0 font-weight-normal">
                  LASC Examinations Fees
                </h4>
              </div>
              <div className="card-body">
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    Deadline for financial registration is 30th April 2025
                  </span>{' '}
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr className="table-secondary">
                        <th scope="col">NO. of Subjects</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jcCandidateFees?.jcPrivateCandidateFees.data.map(
                        (fee, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{fee.attributes.total}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>Deadline for financial registration is 30th April 2025</p>
            </div>
          </Tab>
          <Tab eventKey="AS_level" title="AS LEVELS">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="LGCSE">
                <h4 className="my-0 font-weight-normal">
                  AS LEVELS Examinations Fees
                </h4>
              </div>
              <div className="card-body">
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    Deadline for financial registration is 30th April 2025
                  </span>{' '}
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr className="table-secondary">
                        <th scope="col">NO. of Subjects</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {asLevelCandidateFees?.asLevelFees.data.map(
                        (fee, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{fee.attributes.total}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>Deadline for financial registration is 30th April 2025</p>
            </div>
          </Tab>
         
          <Tab eventKey="LGCSE_delf_school" title="LGCSE: DELF">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="LGCSE">
                <h4 className="my-0 font-weight-normal">
                  LGCSE Examinations Fees: DELF Candidates
                </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr className="table-secondary">
                        <th scope="col">NO. of Subjects</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {delfCandidateFees?.lgcseDelves.data.map((fee, key) => (
                        <tr key={key}>
                          <th scope="row">{key + 1}</th>
                          <td>{fee.attributes.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>Deadline for financial registration is 30th April 2025</p>
            </div>
          </Tab>
          <Tab eventKey="Grade_seven_school" title="GRADE 7: SCHOOL CANDIDATES">
            <div className="card mb-4 shadow-sm">
              <div className="card-header" id="LGCSE">
                <h4 className="my-0 font-weight-normal">
                  {new Date().getFullYear()} Grade 7 Examinations Fees : School
                  Candidates
                </h4>
              </div>
              <div className="card-body">
                <p>
                  Note :{' '}
                  <span className="text-danger">
                    Deadline for financial registration is 30th May 2025
                  </span>{' '}
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr className="table-secondary">
                        <th scope="col">NO. of Subjects</th>

                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gradeSevenCandidateFees?.gradeSevenFees.data.map(
                        (fee, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 7}</th>
                            <td>{fee.attributes.total}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
export default Fees;
