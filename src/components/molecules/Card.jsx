import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import "./card.scss";

const Card = (props) => {
  const items = props.item;

  return (
    <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
      {items.map((el) => (
        <div className="thumbnail-grid">
          <SwiperSlide key={el.id}>
            <Link to={"/detail/" + el.id}>
              <img src={el.url} className="" alt="" />
            </Link>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

Card.propTypes = {
  props: PropTypes.object,
};

export default Card;
