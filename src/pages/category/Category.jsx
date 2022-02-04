/* eslint-disable array-callback-return */
import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { data } from "../../data/data";
import './category.scss'

const Category = () => {
  const { category } = useParams();

  return (
    <div className="content">
      <div className="category-box">
        {data.map((el) => {
          if (el.category === category) {
            return (
              <div className="photo" key={el.id}>
                <Link to={"/webarchitect/detail/project/" + el.id}>
                  <img
                    src={typeof el.url == "object" ? el.url[0] : el.url}
                    className="image-custom"
                    alt=""
                  />
                  <p className="text-proyek">{el.pName}</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Category;
