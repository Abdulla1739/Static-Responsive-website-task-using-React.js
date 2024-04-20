import React from "react";
import BrandOne from "../../assets/images/Association-1.png";
import BrandTwo from "../../assets/images/Association-2.png";
import BrandThree from "../../assets/images/Association-3.png";
import BrandFour from "../../assets/images/Association-4.png";

const Associate = () => {
  return (
    <div className=" text-black" style={{ background: "#473074" }}>
      <div className="container container-fluid text-center pt-5 pe-md-5 ps-md-5 pb-3">
        <h1 className="pb-3">Our Partners</h1>
        <div className="row container-fluid">
          <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
            <img style={{ width: "75%" }} src={BrandOne} alt="BrandOne" />
          </div>

          <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-cente">
            <img style={{ width: "75%" }} src={BrandTwo} alt="BrandTwo" />
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-cente">
            <img style={{ width: "75%" }} src={BrandFour} alt="BrandFour" />
          </div>

          <div className="col-sm-6 col-lg-3 mb-3 image-fluid text-center">
            <img style={{ width: "75%" }} src={BrandThree} alt="BrandThree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
