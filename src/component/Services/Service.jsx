import React from "react";
import Card from "react-bootstrap/Card";

function Service() {
  return (
    <div className="container text-center pt-5 pe-md-5 ps-md-5 pb-5">
      <h1 className="pb-3">Our Services</h1>
      <h4>"Step into a World of Healing Excellence"</h4>
      <h4>
        Hopebridge, Where Every Service Resonates with Compassion and Innovation
      </h4>

      <div className="row mx-auto pt-5">
        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center w-100">
              <Card.Title></Card.Title>
              <Card.Subtitle>
                <i class="fa-solid fa-hand-holding-medical fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Comprephensve <br /> & Critical <br /> Care
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-hospital fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Emergency <br /> Department <br /> Backup
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-notes-medical fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Emergency <br /> Surgery <br /> Backup
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-user-doctor fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Medical <br /> Education & <br /> Training
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-syringe fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Regional <br /> Anaesthesia <br /> Services
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-microchip fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Cutting <br /> Edge <br /> Technology
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-hand-holding-dollar fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Affordable <br /> Price For All <br /> Patients
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 ">
          <Card style={{ width: "100%" }}>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title></Card.Title>
              <Card.Subtitle className="me-2">
                <i class="fa-solid fa-hands-holding-child fa-5x"></i>
              </Card.Subtitle>
              <Card.Text className="text-start ms-4 fw-bolder">
                Quality Care <br /> For Every <br /> Patient
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Service;
