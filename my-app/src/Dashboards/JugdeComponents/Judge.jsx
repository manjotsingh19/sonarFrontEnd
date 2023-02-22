import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import JudgeModal from "./JudgeModal";
// import "./.css";

const Card = ({ teamid, teamname, statement, description }) => {
  return (
    <div className="ideaCard">
      <MDBRow>
        <MDBCol md="6">
          <h6 className="fw-bold">Team ID</h6>
        </MDBCol>
        <MDBCol md="6">
          <h6 className="fw-bold">Team Name</h6>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <h4 className="fw-bold">{teamid}</h4>
        </MDBCol>
        <MDBCol md="6">
          <h4 className="fw-bold">{teamname}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <h6 className="fw-bold">Problem Statement</h6>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <p className="fw-medium">{statement}</p>
        </MDBCol>
      </MDBRow>
      {/* <JudgeModal item={{ teamid, teamname, statement, description }} /> */}
    </div>
  );
};
function Judge() {
  const data = [
    {
      teamid: "1",
      teamname: "error404",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "2",
      teamname: "team-2",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "3",
      teamname: "team-3",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "4",
      teamname: "team-4",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
  ];
  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Judge Dashboard
      </h3>
      <MDBRow>
        {data.map((value, index) => (
          <MDBCol md="6" key={index}>
            <Card {...value} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
export default Judge;
