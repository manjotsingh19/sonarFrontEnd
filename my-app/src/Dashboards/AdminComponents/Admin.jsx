import { MDBContainer } from 'mdb-react-ui-kit';
import 'react-datepicker/dist/react-datepicker.css';
import AddJudges from './AddJudges';
import CreateEvent from './CreateEvent';
import AddDomain from './AddDomain';
import ShowUsers from './ShowUsers';



function Admin() {
    return (
        <>
            <MDBContainer fluid>
                {/* //////////////////////add judges/////////////////// */}
                <AddJudges/> 

                {/* ///////////////////create event///////////////////////////// */}
               
                <CreateEvent/>

                {/* /////////////////////////////add domain ///////////////////*/}

                <AddDomain/>

                {/* ////////////////show alll */}
                <ShowUsers/>
            </MDBContainer>
        </>
    )
}
export default Admin;