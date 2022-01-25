import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import { data } from "../../data/data";
import { Accordion } from "react-bootstrap";
import "./category.scss";

const FilterCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const categories = [
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];

  return (
    <div className="row">
      <div className="col-md-3">
        <Accordion>
          <Accordion.Item eventKey="0" >
            <Accordion.Header>Category</Accordion.Header>
            {categories.map((option) => (
              <Accordion.Body>
                <li
                  className="dd-list-item"
                  // onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  <Link to={"/category/" + option}>{option}</Link>
                </li>
              </Accordion.Body>
            ))}
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterCategory;
