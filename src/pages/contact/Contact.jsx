import React from "react";

import "./contact.scss";
import * as Bs from "react-icons/bs";
import * as Go from "react-icons/go";
const Contact = () => {
  return (
    <div className="content">
      <div className="contact-us">
        <h2 className="text-contact my-2">LOGO</h2>
        <h3 className="text-company my-2">
          Pradinata Architect Design Studio{" "}
        </h3>
        <p className="text-information">Contact us</p>
        <div className="row sosmed">
          <div className="col-md-6 sosmed-wa">
            <Bs.BsWhatsapp />
            <p className="text-block my-4"> +62567829839</p>
          </div>
          <div className="col-md-6 sosmed-email">
            <Bs.BsEnvelope />
            <p className="text-block my-4"> pradinata@architect.com</p>
          </div>
          <div className="col-md-6 sosmed-ig">
            <Bs.BsInstagram />
            <p className="text-block my-4"> @pradinataarchitect</p>
          </div>
          <div className="col-md-6 sosmed-fb">
            <Bs.BsFacebook />
            <p className="text-block my-4"> Pradinata Architect</p>
          </div>
        </div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <Go.GoLocation className="loc" />
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title"> Sekitar Jalan jalan Indonesia </cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Contact;
