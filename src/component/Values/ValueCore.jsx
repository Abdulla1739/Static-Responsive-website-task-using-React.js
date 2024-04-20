import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TeamOne from "../../assets/images/Team-1.png"
import TeamTwo from "../../assets/images/Team-2.png"
import TeamThree from "../../assets/images/Team-3.png"
import TeamFour from "../../assets/images/Team-4.png"




const ValueCore = () => {
  return (
    <div className='mt-3 mb-5'>
            <div className="container container-fluid text-center  pe-md-5 ps-md-5 pb-3">

            <h1 className="pb-3">Our Team</h1>
                <div className="row container-fluid mt-5">
                  <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={TeamOne} />
                    <Card.Body style={{height:"20vh"}}>
                      <Card.Title>Dr. Anwar Hassain</Card.Title>
                      <Card.Text>
                      Co-Founder & MD
                      </Card.Text>
                    </Card.Body>
                  </Card>




                  </div>
                  <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={TeamTwo} />
                    <Card.Body style={{height:"20vh"}}>
                      <Card.Title>Dr. Anantha Narayanan Pisharody</Card.Title>
                      <Card.Text>
                      Co-Founder & CEO
                      </Card.Text>
                    </Card.Body>
                  </Card>




                  </div>

                  <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={TeamThree} />
                    <Card.Body style={{height:"20vh"}}>
                      <Card.Title>Dr. Muhammed Alif</Card.Title>
                      <Card.Text>
                      Director "Executive Director – Academics and Clinical Coordinator"
                      </Card.Text>
                    </Card.Body>
                  </Card>




                  </div>

                  <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={TeamFour} />
                    <Card.Body style={{height:"20vh"}}>
                      <Card.Title>Dr Shedin Bharathan</Card.Title>
                      <Card.Text>
                      Director "Executive Director – Academics and Clinical Coordinator"
                      </Card.Text>
                    </Card.Body>
                  </Card>




                  </div>








                </div>








            </div>

      
    </div>
  )
}

export default ValueCore
