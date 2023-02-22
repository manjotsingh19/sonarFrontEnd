/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import p1 from "./images/1.jpeg";
import p2 from "./images/2.jpeg";
import p3 from "./images/3.png";
import p4 from "./images/4.png";
import p5 from "./images/5.jpeg";
import p6 from "./images/6.jpeg";
import p7 from "./images/7.jpeg";
import p8 from "./images/8.jpeg";

const Card = ({
  name,
  description,
  image,
  atwitter,
  alinkedin,
  agithub,
  designation,
}) => {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="team-item">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} class="team-img" alt="pic" />
        </div>

        <h3>{name}</h3>

        <div class="team-info">
          <p>{designation}</p>
        </div>

        <p>{description}</p>

        <div class="team-icon">
          <div>
            <a href={atwitter} class="twitter">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
          <div>
            <a href={agithub} class="github">
              <i class="fa fa-github"></i>
            </a>
          </div>
          <div>
            <a href={alinkedin} class="linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function OurTeam() {
  const data = [
    {
      name: "Mahak Jain",
      image: p1,
      description: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Manjot Singh",
      image: p2,
      description: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/manjot-singh-5297171b4/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Mritunjay Verma",
      image: p3,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation: "Responsible for the backend development of the application",
    },
    {
      name: "Nikunj Gupta",
      image: p4,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation: "Responsible for the backend development of the application",
    },
    {
      name: "Nimish Chourasia",
      image: p5,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation: "Responsible for the backend development of the application",
    },
    {
      name: "Prashant sahu",
      image: p6,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation:
        "Responsible for the frontend development of the application",
    },
    {
      name: "Vaibhav Agarwal",
      image: p7,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/va29/",
      atwitter: "https://twitter.com/va2905",
      agithub: "https://github.com/va-incedo",
      designation: "Responsible for the backend development of the application",
    },
    {
      name: "Yashi Gupta",
      image: p8,
      description: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/yashi-gupta-6b2bb3228/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      designation: "Responsible for the backend development of the application",
    },
  ];
  let message =
    "People from different tech stacks came together and collaborated in order to come up with this Hack-a-Thon portal";
  return (
    <section class="section-white">
      <div class="container">
        <div class="col-md-12 text-center">
          <h1 class="section-title">Our Team</h1>
          <p class="section-subtitle">{message}</p>
        </div>

        <div class="row">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;