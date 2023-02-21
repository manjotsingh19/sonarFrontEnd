import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

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
function TeamDetails() {
  const data1 = [
    {
      participantName: "error404",
    },
    {
      participantName: "team-1",
    },
    {
      participantName: "team-2",
    },
    {
      participantName: "team-3",
    },
  ];
  const data2 = {
    teamName: "error404",
    statement:
      "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
    description:
      "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
  };

  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Team Details
      </h3>
      <MDBRow>
        {data1.map((value, index) => (
          <MDBCol md="3" key={index}>
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
