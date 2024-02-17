
import styled from 'styled-components';
const Table = ({ ulipdata }) => {
    return (
        <Container>

            <thead>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Date</th>
                <th>Opration</th>
            </thead>
            {
                ulipdata && ulipdata?.map((detail, index) => {
                    return <tbody key={index}>
                        <td className='num'>{index + 1}</td>
                        <td>{detail.user_name}</td>
                        <td>{detail.user_email}</td>
                        <td>{detail.number}</td>
                        <td>{detail.message}</td>
                        <td>{detail.createdAt}</td>
                        <td><button>Delete</button></td>

                    </tbody>


                })

            }


        </Container>
    )
}

export default Table

const Container = styled.table`
width: 80%;
margin: 10px auto;
height: 100px;
background-color: #333;
 border-radius :10px ;
 padding: 5px;

 thead{
    background-color: #222;
   th{
    
    color: #ff5c00;
    padding: 5px 10px;
    font-weight: 600;
   }
  
 }
 tbody{
    background-color: #4444449b;
    text-align: center;
    font-size: 14px;
    td{
        font-weight:500 ;
        padding: 5px 0;
         button{
            padding: 5px 10px;
            background-color: #ff5c00;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            color: #222;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                outline: 1px solid #ff5c00;
                background-color: #222;
                color: #ff5c00;
            }
         }
    }
    .num{
        color: #ff5c00;
       
    }
   }
`;