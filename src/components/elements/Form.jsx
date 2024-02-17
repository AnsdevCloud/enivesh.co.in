import React, { useState } from 'react'
import styled from 'styled-components';
import DisclaimerText from '../items/ulip/DisclaimerText';
import SuccesMessage from '../items/ulip/SuccesMessage';
import InputField from '../items/ulip/InputField';
import Button from '../items/ulip/Button';
const Form = () => {
  const [errormsg, setErrorMsg] = useState({
    number: 'Number is not valid',
    pincode: 'Pincode is not valid',
    date: 'Not allow under 18 years',
    submitErr: ''
  })
  var nowDate = new Date();
  var date = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
  const [succes, setSucces] = useState(false)
  const [isNumValid, setNumIsValid] = useState(true);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    number: '',
    message: '',

  });

  // const ReeiveMail = async () => {

  //   try {
  //     const res = await fetch("http://localhost:5000/receivemail", {

  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         user_name,
  //         user_email,
  //         number,
  //         message,
  //       }),
  //     })
  //     console.log(res);

  //   } catch (error) {
  //     // setErrorMsg(error)
  //     console.log(error);
  //   }

  // }




  const validation = (formData) => {

    if (name === "number") {
      const phoneRegex = /^\d{10}$/; // Assumes a 10-digit numeric phone number
      setNumIsValid(phoneRegex.test(value));
    }

  };




  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;


    setFormData({ ...formData, [name]: value });

    validation(value);

  }
  const handleSubmit = async (e) => {
    let { user_email, number, message, user_name } = formData;
    e.preventDefault();
    if (user_email && number && user_name && message && isNumValid) {
      try {
        const res = await fetch("https://enivesh-3d58e-default-rtdb.firebaseio.com/Ulip_Plan_Users.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

          },
          body: JSON.stringify({
            user_email, number, message, user_name, createdAt: date
          })

        })
      } catch (error) {
        setErrorMsg(error)
      }


      // ReeiveMail();
      // db.ref("userdata").set(formData);

      setSucces(true);
    } else {
      setErrorMsg({ submitErr: "plz fill correct data than submit again " });
    }


  };

  const backForm = () => {
    setSucces(false);

  }

  return (
    <FormContainer onSubmit={handleSubmit}  >
      {
        succes === true ? <SuccesMessage backForm={backForm} /> :
          <>

            <Contianer >

              <InputField LabelTitle={"Full Name "} name={"user_name"} Placeholder={"Full Name"} Type={"text"} Required={true} funcs={getUserData} />
              <InputField LabelTitle={"Mobile Number "} name={"number"} Placeholder={"Phone Number"} funcs={getUserData} Type={"number"} Required={true} />
              {!isNumValid && <ErrorBox Err={errormsg.number}>{errormsg.number}</ErrorBox>}
              <InputField LabelTitle={"E-mail "} name={"user_email"} Placeholder={"Enter email"} Type={"email"} Required={true} funcs={getUserData} />
              <InputField LabelTitle={"Your City "} name={"message"} Placeholder={"City"} Type={"text"} Required={true} funcs={getUserData} />
            </Contianer>

            <ErrorBox Err={errormsg.submitErr}>{errormsg.submitErr}</ErrorBox>
            <DisclaimerText Required={true} text={"By submitting my details, I override my NDNC registration and authorize Enivesh Insurance and its representatives to contact me through call, WhatsApp or E-mail. I further consent to share my information on confidential basis with thirdparties for evaluatig and processing this proposal."} />
            {/* <DisclaimerText text={"By not undergoing the suitability analysis, you confirm to purchase the policy based on your independent assessment of the suitability of the product.If you wish to be redirected to calculate your premium without sharing your personal details."} /> */}
            <Button title={"Submit"} type={"submit"} Width={"96%"} lpWidth={"60%"} lpM={"20px 20%"} m={"20px 2%"} />
          </>
      }
    </FormContainer>
  )
}

export default Form
const FormContainer = styled.form`
  height: fit-content;

`;
const Contianer = styled.div`
  width: 96%;
  height: auto;
  padding: 10px ;
  margin: 10px 2%;
  border: 1px solid #ff5c00;
  border-radius: 10px;
  display: block;
  div{
    width:100%;

  }

 
`;

const ErrorBox = styled.p`
  font-size: .8rem;
  color: ${props => props.Err === "Succes" ? "#00ff00" : "#ff0000"};;
  font-weight: 600;
  padding: 5px 10px;

    
`;