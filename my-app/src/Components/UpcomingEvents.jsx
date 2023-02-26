import React, { useRef } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


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
    <div class="" style={{ overflow: "hidden", margin: "0 10px" }}>
      <div class="team-item">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>

        <h3>{name}</h3>

        <div class="team-info">
          <p>{designation}</p>
        </div>
        <div class="tagline">
          <p>{description}</p>
        </div>

        <div class="team-icon">
          <div>
            <a href={atwitter} class="twitter">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href={agithub} class="github">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href={alinkedin} class="linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slider = useRef(null);

  

  const settings = {
    centerMode: true,
    draggable: true,
    centerPadding: "20px",
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,

    focusOnSelect: true,
    // fade: true,
  };

  const data = [
    {
      name: "Mahak Jain",
      designation: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Manjot Singh",
      designation: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/manjot-singh-5297171b4/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Mritunjay Verma",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Nikunj Gupta",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Nimish Chourasia",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Prashant sahu",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the frontend development of the application",
    },
    {
      name: "Vaibhav Agarwal",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/va29/",
      atwitter: "https://twitter.com/va2905",
      agithub: "https://github.com/va-incedo",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Yashi Gupta",
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/yashi-gupta-6b2bb3228/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
  ];
  return (
    <Slider {...settings} ref={slider}>
      {data.map((card, i) => (
        <Card {...card} />
      ))}
    </Slider>
  );
}
