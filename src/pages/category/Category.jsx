/* eslint-disable array-callback-return */
import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { data } from "../../data/data";
import FilterCategory from "./FilterCategories";

const Category = () => {
  const { category } = useParams();

  return (
    <div className="container-fluid justify-content-center">
      {/* <FilterCategory /> */}
      {/* <h3 className="text-category lead">{category}</h3> */}
      <div className="row justify-content-center">
        {data.map((el) => {
          if (el.category === category) {
            return (
              <div className="col-md-6" key={el.id}>
                <Link to={"/detail/project/" + el.id}>
                  <img
                    src={typeof el.url == "object" ? el.url[0] : el.url}
                    className="img-thumbnail" 
                    alt=""
                  />
                  <p>{el.desc.slice(0, 50)}</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
