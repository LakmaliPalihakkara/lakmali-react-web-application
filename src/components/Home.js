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

<h1 class="title"> Discover the Best Camping Experience Near <br />  Barrie, Ontario</h1>
<h6 class="sub-title">If a vacation just isn't a vacation unless you can pitch a tent and cook your dinner over a campfire, Barrie's parks have just what you are looking for. Camping is an excellent way to enjoy your vacation and to get up close and personal with nature. Whether you're tenting, or have that fully equipped RV - we've got a spot for you!
</h6>



          <Row>
        
            <Col>
            <img src={camp1} alt='Camping'/>
            <p class="location"><b>Cedar & Bough </b></p>
            <p class="area">34 acres - Mulmur, Ontario</p>
            </Col>

            <Col>
            <img src={camp2} alt='Camping'/>
            <p class="location"><b>Tryfan Forest</b></p>
            <p class="area">800 acres - Ontario(124km)</p>
            </Col>

            <Col>
            <img src={camp3} alt='Camping'/>
            <p class="location"><b>Hilltop Glamorous Camping</b></p>
            <p class="area">20 acres - Verona, Ontario</p>
            </Col>
          </Row>
        </Container>
      );
    }
    

export default Home;