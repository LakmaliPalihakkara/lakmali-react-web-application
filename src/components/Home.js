import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import camp1 from '../images/camp3.png'
import camp2 from '../images/camp2.jpg'
import camp3 from '../images/camp1.jpg'


function Home(){

    return (
        <Container>



<br></br>

<h1 style={{color: "#DFF6FF",margin:"30px"}}> Discover the best camping experience near <br />  Barrie, Ontario</h1>
              <h6 style={{color: "#2c85a2",margin:"50px"}}>If a vacation just isn't a vacation unless you can pitch a tent and cook your dinner over a campfire, Barrie's parks have just what you are looking for. Camping is an excellent way to enjoy your vacation and to get up close and personal with nature. Whether you're tenting, or have that fully equipped RV - we've got a spot for you!
</h6>



          <Row>
        
            <Col>
            <img src={camp1} alt='Camping'/>
            <p style={{paddingTop:"20px"}}><b>Cedar & Bough </b></p>
            <p style={{paddingBottom:"30px"}}>34 acres - Mulmur, Ontario</p>
            </Col>

            <Col>
            <img src={camp2} alt='Camping'/>
            <p style={{paddingTop:"20px"}}><b>Tryfan Forest</b></p>
            <p style={{paddingBottom:"30px"}}>800 acres - Ontario(124km)</p>
            </Col>

            <Col>
            <img src={camp3} alt='Camping'/>
            <p style={{paddingTop:"20px"}}><b>Hilltop Glamorous Camping</b></p>
            <p style={{paddingBottom:"30px"}}>20 acres - Verona, Ontario</p>
            </Col>
          </Row>
        </Container>
      );
    }
    

export default Home;