import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "./detailProject.scss";
import Zoom from "react-medium-image-zoom";

const DetailProject = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  const item = data[id];
  const [src, setSrc] = useState(item.url[0]);

  return (
    <div className="content">
      <div className="row project-content-container">
        <div className="col-md project-img">
          <Zoom media="(max-width:100vw" srcSet={src} className="zoom-img">
            <img
              src={typeof item.url == "object" ? src : item.url}
              alt=""
              className="image-custom"
            />
          </Zoom>
          <div className="thumbnail">
            {typeof item.url == "object" ? (
              item.url.map((el) => (
                <img
                  className="image-custom img-thumbnail"
                  onClick={() => setSrc(el)}
                  key={el}
                  src={el}
                  alt=""
                />
              ))
            ) : (
              <img
                className="img-thumbnail"
                key={item.url}
                src={item.url}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="col-md-6 project-info-container">
          <h2 className="h2">{item.pName}</h2>
          <div className="project-info">
            <button
              className={activeIndex === 0 ? "active" : "false"}
              onClick={() => setActiveIndex(0)}
              to="#"
            >
              <h3 className="fs-5"> Project Data</h3>
            </button>
            <button
              className={activeIndex === 1 ? "active" : "false"}
              onClick={() => setActiveIndex(1)}
              to="#"
            >
              <h3 className="fs-5">Project Info</h3>
            </button>
          </div>
          <div className="project-detail">
            {activeIndex === 1 ? (
              <p
                className={activeIndex === 1 ? "info-fadein" : "none"}
                index={0}
              >
                {item.desc}
              </p>
            ) : (
              <div
                className={activeIndex === 0 ? "naration-fadein" : "none"}
                index={0}
              >
                <div className="row box-data">
                  <div className="col-md">
                    <h4 className="">Type </h4>
                    <p>{item.type}</p>
                  </div>
                  <div className="col-md">
                    <h4 className="">Lokasi </h4>
                    <p> {item.location}</p>
                  </div>
                  <div className="col-md">
                    <h4 className="">Site Area </h4>
                    <p> {item.siteArea}</p>
                  </div>
                  <div className="col-md">
                    <h4 className="">Build Area</h4>
                    <p> {item.builtArea}</p>
                  </div>
                  <div className="col-md">
                    <h4 className="">Height </h4>
                    <p>{item.height}</p>
                  </div>
                  <div className="col-md">
                    <h4 className="">Year</h4>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
