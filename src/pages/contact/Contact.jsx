import React from "react";

import "./contact.scss";
import * as Bs from "react-icons/bs";
import * as Go from "react-icons/go";
export const e_mail ="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNtdgqhFrBfMFvBJmzmbnnpfsdcVKjFzPDghNTnRGwWbTbslcwtzxxTnQnRpsqbxqTWgZL";

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
            <p className="text-block my-4"> <a href="https://api.whatsapp.com/send?phone=6282125597508" target="_blank"> 0821-2559-7508 </a></p>
          </div>
          <div className="col-md-6 sosmed-email">
            <Bs.BsEnvelope />
            <p className="text-block my-4"> <a href={e_mail} target="_blank "> pradinataarchitect@gmail.com</a></p>
          </div>
          <div className="col-md-6 sosmed-ig">
            <Bs.BsInstagram />
            <p className="text-block my-4"> <a  href="https://www.instagram.com/pradinata.architect/" target="_blank"> @pradinata.architect</a></p>
          </div>
          <div className="col-md-6 sosmed-fb">
            <Bs.BsFacebook />
            <p className="text-block my-4"> <a href="https://www.facebook.com/Pradinata-Architect-101465768826062" target="_blank"> Pradinata Architects </a></p>
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
