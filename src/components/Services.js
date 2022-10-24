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
              <h1 class="services-title">Our Services</h1>
          <Row>
        
            <Col>
            <img src={service1} alt='Camping'/>
            <p class="services"><b>Camping Instraction Services</b></p>
            </Col>

            <Col>
            <img src={service2} alt='Camping'/>
            <p class="services"><b>Health and Wellness Services</b></p>
            </Col>

            <Col>
            <img src={service3} alt='Camping'/>
            <p class="services"><b>Nature Photography Guid Services</b></p>
            </Col>

            <Col>
            <img src={service4} alt='Camping'/>
            <p class="services"><b>Weather Forcast Services</b></p>
            </Col>
          </Row>
        </Container>
      );
    }
    

export default Services;