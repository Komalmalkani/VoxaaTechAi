import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';

const SignIn = () => {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          {/* 🔥 Animated Heading */}
          <motion.h1 
            className="my-5 display-3 fw-bold ls-tight px-3"
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            The best offer <br />
            <span className="text-primary">for your business</span>
          </motion.h1>

          {/* 🔥 Animated Paragraph */}
          <motion.p 
            className='px-3' 
            style={{ color: 'hsl(217, 10%, 50.8%)' }}
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </motion.p>

        </MDBCol>

        <MDBCol md='5'>
          {/* 🔥 Animated Form Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md'>Sign Up</MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>
                </div>

              </MDBCardBody>
            </MDBCard>
          </motion.div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default SignIn;
