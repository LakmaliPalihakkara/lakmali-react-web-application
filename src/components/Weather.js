import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tools1 from '../images/tools1.jpg'
import tools2 from '../images/tools2.jpg'
import Container from 'react-bootstrap/Container';


const CardExampleCard = ({weatherData}) => (
    <div>

<h2 class="tools-topic" >Current Weather Report</h2>
<h6 class="weather-source">Source: OpenWeather</h6>

    <Card id="card" class="col d-flex justify-content-center">
       <Card.Body>{weatherData.name}</Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Date: {moment().format('LL')}</ListGroup.Item>
        <ListGroup.Item>Day: {moment().format('dddd')}</ListGroup.Item>
        <ListGroup.Item>Temprature: {weatherData.main.temp} &deg;C</ListGroup.Item>
        <ListGroup.Item>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Description: {weatherData.weather[0].main}</ListGroup.Item>
        <ListGroup.Item>Humidity: {weatherData.main.humidity} %</ListGroup.Item>
     
       
      </ListGroup>
    </Card>


    <Container>
              <h2 class="tools-topic">October - December Camping Check List</h2>
          <Row>

          <Col>

<div id="check-list" className="todoapp stack-large">
<ul>

<h4 class="check-list-topic">Equipment</h4>
  <li class="check-list">
    <div class="check-list-item">
      <input id='checkbox' type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Tent
      </label>
    </div>

    <div class="check-list-item">
      <input type="checkbox" defaultChecked={false} />
      <label  class="check-list-label">
      Groundsheet
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Sleeping pad
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Rope or cord
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Lantern
      </label>
    </div>
  </li>

  <h4 class="check-list-topic">Kitchen Gear</h4>
  <li>
    <div class="check-list-item">
      <input type="checkbox" defaultChecked={false} />
      <label class="check-list-label" >
      Mess kit
      </label>
    </div>

    <div class="check-list-item">
      <input type="checkbox" defaultChecked={false} />
      <label  class="check-list-label">
      Camp stove
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Fuel
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Large bowl
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Can opener
      </label>
    </div>


  </li>

  <h4 class="check-list-topic">Personal Hygiene</h4>
  <li>
    <div class="check-list-item">
      <input type="checkbox" defaultChecked={false} />
      <label class="check-list-label" >
      Insect repellent
      </label>
    </div>

    <div class="check-list-item">
      <input type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Sunscreen
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Aloe gel
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
     Shampoo & soap
      </label>
    </div>

    <div class="check-list-item">
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label class="check-list-label">
      Can opener
      </label>
    </div>

    
  </li>
</ul>
</div>

</Col>

<Col>
<img class="tools-img1" src={tools1} alt='Tools'/>
<img class="tools-img2" src={tools2} alt='Tools'/>
</Col>

</Row>
        </Container>

</div>
)



export default CardExampleCard;