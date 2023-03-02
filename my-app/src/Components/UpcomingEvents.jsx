import React, { useRef, useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import axios from "axios";



const Card = ({ description, endDate, eventId, eventName, startDate, }) => {

  return (
    <div className="" style={{ overflow: "hidden", margin: "-15px 10px" }}>
      <div className="team-item" style={{
        border: "0px solid black", borderRadius: "30px", 
        background: "linear-gradient(90deg, rgba(210,192,165,1) 8%, rgba(172,168,237,1) 52%, rgba(56,219,252,1) 94%)",
        height: "50vh"
      }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>

        <h3>{eventName}</h3>

        <div className="">
          <p>{description}</p>
        </div>
        <div className="tagline">
          <p>{ }</p>
        </div>
        <div className="tagline">
          <p>Start Date: {startDate}</p>
        </div>
        <div className="tagline">
          <p>End Date: {endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slider = useRef(null);

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios.get("/getEvent").then(
      (response) => {
        setEvent(response.data);
      },
      (error) => {
        console.log(error);
      }
    );

  }, []);

  const settings = { centerMode: true, draggable: true, centerPadding: "20px", pauseOnHover: true, infinite: true, swipeToSlide: true, slidesToShow: (event?.length < 3) ? event?.length : 3, slidesToScroll: 1, autoplay: true, speed: 1000, autoplaySpeed: 2000, focusOnSelect: true, };

  return (
    <>
      {event?.length > 0 && (
        <div className="bg-color">
          <h2 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center">Hack-a-thon Events</h2>
          <Slider {...settings} ref={slider}>
            {event.map((card, i) => (
              <Card {...card} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
