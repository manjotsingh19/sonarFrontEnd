import "react-datepicker/dist/react-datepicker.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function Participant() {
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
export default Participant;
