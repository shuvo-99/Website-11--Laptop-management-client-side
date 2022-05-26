import React from "react";
import Aboutusimg from "../../images/Aboutusimg.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1 className="title "> About Us </h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ width: "100%", height: "75%" }}
              src={Aboutusimg}
              alt=""
            />
          </div>
          <div className="col">
            <p>
              Greetings fellow clients, we are here to ensure your website is
              professional, up-to-date, and functioning as intended. We
              encompasses general maintenance, security, and long-term
              development of the website, as well as organizing your content
              delivery and marketing strategy. At its most basic, our services
              involves performing maintenance, Implementing design updates,
              Planning and delivering content updates, Implementing marketing
              strategies, Guaranteeing website security, Providing web support
              to staff and customers. We refers to a set of practices and
              techniques. However, we also often talk about website management
              systems. Our platform provide businesses with the tools you need
              to effectively manage you website, deliver powerful customer
              experiences, and develop and distribute content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
