import { MDBCardBody, MDBBtn, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowUsers() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('/getUsers')
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            }, (error) => {
                console.log(error);
            });
    }, []);


    const handleDelete = (id) => {
        axios.post('/', id)
        .then((response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }


    const tableRows = user.map((info) => {
        return (
            <tr>
                <td>{info.email}</td>
                <td>{info.name}</td>
                <td><MDBBtn onClick={handleDelete(info.id)} ></MDBBtn></td>
            </tr>
        );
    });

    const myStyle = {
        color: 'red'
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            {/* <tbody>{tableRows}</tbody> */}
                        </table>


                    </MDBCardBody>
                </MDBCard>

            </MDBRow></>
    )
}

export default ShowUsers;