import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "./detailProject.scss";
import Zoom from "react-medium-image-zoom";

const DetailProject = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  const item = data[id];
  const [src, setSrc] = useState(item.url[0]);

  return (
    <div className="content">
      <div className="project-content-container">
        <div className="project-img">
          <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"1"}>
            {item.url.map((x) => (
              <SwiperSlide key={x}>
                <Zoom media="(max-width:100vw" srcSet={x} className="zoom-img">
                  <img
                    src={typeof item.url == "object" ? src : item.url}
                    alt=""
                    className="img-thumbnail"
                  />
                </Zoom>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="thumbnail">
            {typeof item.url == "object" ? (
              item.url.map((el) => (
                <img className="img-thumbnail" onClick={() => setSrc(el)} key={el} src={el} alt="" />
              ))
            ) : (
              <img className="img-thumbnail" key={item.url} src={item.url} alt="" />
            )}
          </div>
        </div>
        <div className="project-info-container">
          <h2>{item.pName}</h2>
          <div className="project-info">
            <button
              className={activeIndex === 0 ? "active" : "false"}
              onClick={() => setActiveIndex(0)}
              to="#"
            >
              Project Info
            </button>
            <button
              className={activeIndex === 1 ? "active" : "false"}
              onClick={() => setActiveIndex(1)}
              to="#"
            >
              Project Data
            </button>
          </div>
          <div className="project-detail">
            {activeIndex === 0 ? (
              <p
                className={activeIndex === 0 ? "info-fadein" : "none"}
                index={0}
              >
                {item.desc}
              </p>
            ) : (
              <p
                className={activeIndex === 1 ? "naration-fadein" : "none"}
                index={1}
              >
                <p>Type: {item.type}</p>
                <p>Lokasi: {item.location}</p>
                <p>Site Area: {item.siteArea}</p>
                <p>Build Area: {item.builtArea}</p>
                <p>Height : {item.height}</p>
                <p>Year : {item.year}</p>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
