import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Page2(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <h2 className='h1 bg-danger text-white p-5'>I am bootstrap</h2>
                    </div>
                </div>
            </div> 
            <Container>
                <Row>
                    <Col bg="primary" xs={12}>
                    <h1 className='h1 bg-danger text-white p-5'>Hye Jhuni ,I am column of react-bootstrap</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default Page2;