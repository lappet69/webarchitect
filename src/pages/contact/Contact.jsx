import React, { useState } from "react";
import axios from "axios";
import "./contact.scss";
import instagram from "../../components/assets/instagram.svg";
import $ from 'jquery'



const Contact = ()=>{
  const [data,setData] =useState()

 const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    setData(data)
  });
  
  const randomQuote=()=>{
    const num =()=>{
      Math.random(1,1600)
    }
  }
randomQuote()
  
    return (
      <div className="content">
        <div className="contact-us">
          <h2 className="text-contact">LOGO</h2>
          <h3 className="text-company">PT Desain Revolusi Indonesia </h3>
          <p className="text-information">Contact us</p>
          <div className="row sosmed">
            <div className="col-md-6 sosmed-wa">WA</div>
            <div className="col-md-6 sosmed-email">EMAIL</div>
            <div className="col-md-6 sosmed-ig">IG</div>
            <div className="col-md-6 sosmed-fb">Facebook</div>
          </div>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }




export default Contact;
