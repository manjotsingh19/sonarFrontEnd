import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const Card1 = ({ teamObj }) => {
//   const { name } = teamObj;
//   return (
//     <>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="fw-bold ">Participant Name</h5>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="">{name}</h5>
//           </MDBCol>
//         </MDBRow>
//       </div>
//     </>
//   );
// };
const Card1 = ({ participantName }) => {
  return (
    <>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="fw-bold">Participant Name</h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="">{participantName}</h5>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};
// const Card2 = ({ teamObj }) => {
//   const { team } = teamObj;
//   return (
//     <>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="fw-bold">Team Name</h5>
//           </MDBCol>
//           <MDBCol md="12">
//             <h6 className="">{team.teamName}</h6>
//           </MDBCol>
//         </MDBRow>
//       </div>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="fw-bold">Problem Statement</h5>
//           </MDBCol>
//           <MDBCol md="12">
//             <h6 className="">{team.idea.problemStatement}</h6>
//           </MDBCol>
//         </MDBRow>
//       </div>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="fw-bold">Problem Description</h5>
//           </MDBCol>
//           <MDBCol md="12">
//             <h6 className="">{team.idea.description}</h6>
//           </MDBCol>
//         </MDBRow>
//       </div>
//     </>
//   );
// };
const Card2 = ({ teamName, statement, description }) => {
  return (
    <>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Team Name</h5>
          </MDBCol>
          <MDBCol md="12">
            <h6 className="">{teamName}</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Problem Statement</h5>
          </MDBCol>
          <MDBCol md="12">
            <h6 className="">{statement}</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="ideaCard">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="fw-bold">Problem Description</h5>
          </MDBCol>
          <MDBCol md="12">
            <h6 className="">{description}</h6>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};
// function TeamDetails({ userObj }) {
//   const { id, email } = userObj;
//   const [teamData, setTeamData] = useState({});
//   const [flag, setFlag] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`/particpantsDetails/${email}`).then(
//       (response) => {
//         // console.log( response.data);
//         setTeamData(response.data);
//         setFlag(true);
//       },
//       (error) => {
//         console.log("this is error in team detail", error);
//       }
//     );
//   }, []);

//   // return (
//   //   <div className="cards">
//   //     <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
//   //       Team Details
//   //     </h3>
//   //     <MDBRow>
//   //       {/* {teamData.map((value, index) => (
//   //         <MDBCol md="3" key={index}>
//   //           <Card1 teamObj={value} />
//   //           <Card2  teamObj={value} />
//   //         </MDBCol>
//   //       ))}  */}

//   //       {flag && (
//   //         <>
//   //           <MDBCol md="3">
//   //             <Card1 teamObj={teamData} />

//   //           </MDBCol>
//   //           <MDBCol md="6">
//   //             <Card2 teamObj={teamData} />
//   //           </MDBCol>
//   //         </>
//   //       )}
//   //     </MDBRow>
//   //   </div>
//   // );

// }

function TeamDetails({ id, email, mobile, name, password }) {
  const data1 = [
    {
      participantName: "Nikunj Gupta",
    },
    {
      participantName: "Prashant Sahu",
    },
    {
      participantName: "Vaibhav Agarwal",
    },
    {
      participantName: "Yashi Gupta",
    },
  ];
  const data2 = {
    teamName: "error404",
    statement:
      "All India Council for Technical Education wants a chatbot to be implemented, since there have always been queries of people regarding various topics to which answers are provided manually by people.",
    description:
      "In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Also for every question asked it can be stored and the list of questions can be increased to provide better mapping of question and answers. This process can reduce lot of work pressure for both the consumer and the government. Also providing quick responses and suggestions can help in the better economical market growth. Summary: There have always been queries of people regarding various topics to which answers are provided manually by people. In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Objective: We need you to develop an AI based Chatbot (mobile/web app) to create answers to queries based on FAQs and more FAQs getting automatically added including categorization. You can use machine learning algorithms to increase the dataset of questions and answers and ensure that the mapping of questions and answers remain maintained every time there is an increase in the dataset.",
  };
  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Team Details
      </h3>
      <MDBRow>
        {data1.map((value, index) => (
          <MDBCol col-lg-3 col-md-6 col-sm-6 col-xs-12 /*md="3"*/ key={index}>
            <Card1 {...value} />
          </MDBCol>
        ))}
        <MDBCol md="12">
          <Card2 {...data2} />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
export default TeamDetails;
