import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./Panelist.css";
import PanelistModal from "./PanelistModal";

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
      <PanelistModal item={{ teamid, teamname, statement, description }} />
    </div>
  );
};
function Panelist() {
  const data = [
    {
      teamid: "0",
      teamname: "error404",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },

    {
      teamid: "1",
      teamname: "team-1",
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
    {
      teamid: "5",
      teamname: "team-5",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "6",
      teamname: "team-6",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "7",
      teamname: "team-7",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "8",
      teamname: "team-8",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "9",
      teamname: "team-9",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "10",
      teamname: "team-10",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "11",
      teamname: "team-11",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "12",
      teamname: "team-12",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "13",
      teamname: "team-13",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "14",
      teamname: "team-14",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
    {
      teamid: "15",
      teamname: "team-15",
      statement:
        "Distinctio pariatur deserunt eos maiores! Quos, quia? Quos atque laudantium dolor impedit, libero rem quia possimus aut, voluptatem numquam hic, nostrum nulla officia enim?",
      description:
        "description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ea dicta a quas? Vel deserunt nostrum quibusdam blanditiis fugit neque eum, consequuntur nulla necessitatibus veritatis quam soluta dolor maxime impedit commodi sint voluptatum aliquam libero aperiam quos id temporibus repellat voluptas corporis? Maxime numquam molestiae dolor est, maiores officiis sit culpa odio perferendis totam provident nihil a sequi repellendus corporis accusantium eum, iusto fuga? Error explicabo nostrum quod ipsam, aspernatur repellendus in quasi, labore est maiores quisquam cum molestiae?",
    },
  ];
  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 mt-4">
        Panelist Dashboard
      </h3>
      <MDBRow>
        {data.map((value, index) => (
          <MDBCol md="4" key={index}>
            <Card {...value} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
export default Panelist;
