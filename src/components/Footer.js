import React, {useState, useEffect} from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';



function Footer(){
    return (
        <MDBFooter className='bg-light text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                <MDBBtn outline color="light" floating className='m-1'  style={{ backgroundColor: '#dd4b39' }} href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/rafaela-hollanda' role='button'>
                    <MDBIcon fab icon='linkedin' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/rphm95' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='#'>
                 Rafaela Hollanda
                </a>
            </div>
    </MDBFooter>
    )
}

export default Footer;