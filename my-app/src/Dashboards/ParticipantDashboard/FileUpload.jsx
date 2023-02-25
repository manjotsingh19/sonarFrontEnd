import React from "react";
import { MDBFile, MDBInput,MDBBtn} from "mdb-react-ui-kit";
import { useState } from "react";

export default function FileUpload({userData}) {
  const [data,setData] = useState({
    gitHubLink:'',
  });
  
  const handleInput = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  }
  
  const handleSubmit= () => {
      console.log(data);
      console.log(userData);
  };
  return (
    <div className="ml-5 pb-2">
      <MDBFile label="Upload the presentation file" id="customFile" />
      <MDBInput label="Github repository link" id="gitHubLink" value={data.gitHubLink} onChange={(e) => handleInput(e)} type="url" />
      <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>

    </div>
  );
}
