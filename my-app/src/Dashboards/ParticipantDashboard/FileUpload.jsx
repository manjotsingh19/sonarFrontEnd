import React from "react";
import { MDBFile, MDBInput,MDBBtn} from "mdb-react-ui-kit";
// import { useState } from "react";

// const [data,handleData] = useState();


// const handleclick = () => {

// };

export default function FileUpload() {
  return (
    <div className="ml-5 pb-2">
      <MDBFile label="Upload the presentation file" id="customFile" />
      <MDBInput label="Github repository link" id="typeURL" type="url" />
      <MDBBtn >Submit</MDBBtn>

    </div>
  );
}
