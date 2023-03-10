import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


const Timers = ({endDate}) => {

    const [event, setEvent] = useState({});

    useEffect(() => {
        axios.get("/getEvent").then(
            (response) => {
                // console.log(response.data);
                setEvent(response.data[0]);
            },
            (error) => {
                console.log(error);
            }
        );

    }, []);

    const calculateTimeLeft = () => {
       
        let difference = +new Date(event?.endDate) - +new Date() - 19800000 + 86400000;
        console.log(new Date(event?.endDate));
        console.log(new Date());
        // if(endDate){
        //     difference = +new Date(endDate) - +new Date() ;
        // }


        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <>
            {Object.keys(event).length > 0 && timerComponents.length > 0 &&  (
                <div>
                    <h5>Event ends in: </h5> <span>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</span>
                </div>
            )}
        </>

    );


}

export default Timers;
