/* eslint-disable array-callback-return */
/* eslint-disable valid-typeof */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";

import "./projectCard.scss";

const ProjectCard = (props) => {
  const items = props.item;
  return (
    <>
      {items.map((el) => {
        return (
          <div className="col-md-6" key={el.id}>
            <Link to={"/detail/project/" + el.id}>
              <img
                src={typeof el.url == "object" ? el.url[0] : el.url}
                className="img-thumbnail"
                alt=""
              />
              {/* <p>{el.desc.slice(0, 100)}</p> */}
            </Link>
          </div>
        );
      })}
    </>
  );
};

ProjectCard.propTypes = {
  props: PropTypes.object,
};

export default ProjectCard;
