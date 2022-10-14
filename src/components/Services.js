import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service4.jpg'

function Services(){

    return (
        <Container>
              <h1 style={{color: "red",margin:"50px"}}>Our Services</h1>
          <Row>
        
            <Col>
            <img src={service1} alt='Camping'/>
            <p style={{paddingTop:"20px", paddingBottom:"30px"}}><b>Camping Instraction Services</b></p>
            </Col>

            <Col>
            <img src={service2} alt='Camping'/>
            <p style={{paddingTop:"20px", paddingBottom:"30px"}}><b>Health and Wellness Services</b></p>
            </Col>

            <Col>
            <img src={service3} alt='Camping'/>
            <p style={{paddingTop:"20px", paddingBottom:"30px"}}><b>Nature Photography Guid Services</b></p>
            </Col>

            <Col>
            <img src={service4} alt='Camping'/>
            <p style={{paddingTop:"20px", paddingBottom:"30px"}}><b>Weather Forcast Services</b></p>
            </Col>
          </Row>
          {/* <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row> */}
        </Container>
      );
    }
    

export default Services;