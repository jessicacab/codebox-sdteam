import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';


const Login = () => {
  const navigate = useNavigate();
  const navigateToHomepage = () => navigate('/home');

  return (
    <MDBContainer className="py-3 my-5 d-flex flex-column w-25">
      <h1>YOGA PROJECT MANAGEMENT TOOL</h1>
      <form className="py-3">
        <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />
        <MDBRow className='mb-4'>
          <MDBCol className='d-flex justify-content'>
            <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
          </MDBCol>
        </MDBRow>
        <MDBBtn type='submit' onClick={navigateToHomepage} block style={{ height: 50, width: 100 }}>
          Sign in
        </MDBBtn>
    </form>
    </MDBContainer>
  );
};

export default Login;

