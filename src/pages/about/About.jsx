import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import { teams } from "../../data/data";
import "./about.scss";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <div className="content">
      <div className="row">
        <h1 className="text-title">{"About Us"}</h1>
        <div className="col-md profile">
          <h2>Profile</h2>
          <p className={activeIndex === 0 ? "info-faadein" : "none"} index={0}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            voluptatibus optio, magni fugiat vitae ducimus ex et impedit ipsam
            adipisci earum, voluptatem esse. Quod quaerat assumenda expedita
            similique sapiente eum, sint laboriosam, ullam qui corporis
            quisquam. Ad ex dolor corrupti nulla animi assumenda exercitationem
            consectetur, eos alias voluptates natus non quam consequatur
            reiciendis debitis, ducimus quas, magni aliquam atque qui. Dolores,
            explicabo esse sapiente nostrum, est corporis, illo incidunt fuga
            laudantium in sed quae ab voluptate numquam magnam quidem. Voluptas
            at eligendi dignissimos sit neque cum debitis odit? Labore nesciunt
            ea repellat suscipit dicta at incidunt fugiat vel accusantium
            dolorum.
          </p>
        </div>
        <div className="col-md box-team">
          <h2>Team</h2>
          <div className="row justify-content-center">
            {teams.map((team) => (
              <div className="col-md-6" key={Math.random()}>
                <img
                  className="img-profile img-thumbnail rounded-5 "
                  src={team.url}
                  alt=""
                />
                <div className="team-info">
                  <h2>{team.name}</h2>
                  <p>{team.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* <Footer />  */}
      </div>
    </div>
       </> 
  );
};

export default About;
