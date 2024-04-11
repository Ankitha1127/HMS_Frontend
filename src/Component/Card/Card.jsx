import React from "react";
import { Container } from "reactstrap";
import web from "../../images/ss.jpg";
import { NavLink } from "react-router-dom";
import BaseCa from "../Base/BaseCa";

function Card(props) {
  return (<BaseCa>
      <>
      {/* <div class="container">
        <div class="row">
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            One of three columns
          </div>
        </div>
      </div> */}


        <div className="col-md-6 col-10 mx-auto">
          <div className="card">
            <img
              src={props.imgsrc}
            className="card-img-top"
              alt={props.imgsrc}
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <h5 className="card-title font-weight-bold">{props.desc}</h5>
              <p className="card-text"></p>
              <NavLink to="/Login" className="btn btn-primary">
                Book Appointment
              </NavLink>
            </div>
          </div>
          <br></br>
        </div>
      </></BaseCa>
  );
}

export default Card;
