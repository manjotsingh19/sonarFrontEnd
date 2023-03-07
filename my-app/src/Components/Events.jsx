import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';

const Card = ({ eventName, startDate, endDate, description }) => {
    return (
        <div>
            <h3>{eventName}</h3>
            <div><p>{description}</p></div>
            <div><p>Start Date: {startDate}</p></div>
            <div><p>End Date  : {endDate}</p></div>
        </div>
    );
};

function Events() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios.get("/getEvent").then(
            (response) => {
                console.log(response.data);
                setEvent(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const [basicActive, setBasicActive] = useState('tab1');
    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };


    return (
        <div style={{
            color: "",
            marginLeft: "100px"
        }}>
            <h3>Hack-a-thons</h3>

            <MDBTabs className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Live
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Upcoming
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Previous
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={basicActive === 'tab1'}>
                    This is the content of tab 1
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>
        </div>
    );
}
export default Events;