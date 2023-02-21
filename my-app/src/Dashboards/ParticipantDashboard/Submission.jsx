import React from "react";
import { MDBFile, MDBInput } from "mdb-react-ui-kit";

export default function FileUpload() {
  return (
    <div className="ml-5 pb-2">
      <MDBFile label="Upload the presentation file" id="customFile" />
      <MDBInput label="Github repository link" id="typeURL" type="url" />
    </div>
  );
}
