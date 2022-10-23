import React from 'react';
// import './styles.css';
// import { Card } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tools1 from '../images/tools1.jpg'
import tools2 from '../images/tools2.jpg'
import Container from 'react-bootstrap/Container';


const CardExampleCard = ({weatherData}) => (
//   <Card>
//     <Card.Content>
//         <Card.Header className="header">{weatherData.name}</Card.Header>
//     </Card.Content>
//   </Card>

/* <Card>
      <Card.Body>{weatherData.name}</Card.Body>
      <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </Card> */

   

    <div>

<h2 style={{color: "#DFF6FF",marginTop:"50px"}}>Current Weather Report</h2>
<h6 style={{color: "#DFF6FF", marginBottom:"40px"}}>Source: OpenWeather</h6>

    <Card style={{color:"#06283D", width:"50%" }} class="col d-flex justify-content-center">
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
              <h2 style={{color: "#DFF6FF",margin:"50px"}}>October - December Camping Check List</h2>
          <Row>

          <Col>

<div style={{ width: '100%', paddingLeft: '100px', paddingRight:'100px' }} className="todoapp stack-large">
<ul>

<h4 style={{ marginTop:"20px"}}>Equipment</h4>
  <li style={{display: '100%'}}>
    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id='checkbox' type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'5px', paddingTop:'7px'  }} >
      Tent
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
      <label  style={{paddingLeft:'7px', paddingTop:'7px' }}>
      Groundsheet
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Sleeping pad or air mattress
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Rope or cord
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Lantern
      </label>
    </div>
  </li>

  <h4 style={{ marginTop:"20px"}}>Kitchen gear</h4>
  <li>
    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'5px', paddingTop:'7px'  }} >
      Mess kit (plate, mug, bowl, utensils)
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
      <label  style={{paddingLeft:'7px', paddingTop:'7px' }}>
      Camp stove
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Fuel
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Large bowl
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Can opener
      </label>
    </div>


  </li>

  <h4 style={{ marginTop:"20px"}}>Personal hygiene</h4>
  <li>
    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'5px', paddingTop:'7px'  }} >
      Insect repellent
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
      <label  style={{paddingLeft:'7px', paddingTop:'7px' }}>
      Sunscreen
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Aloe gel
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Biodegradable shampoo & soap
      </label>
    </div>

    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input id="todo-0" type="checkbox" defaultChecked={false} />
      <label style={{paddingLeft:'7px', paddingTop:'7px'  }}>
      Can opener
      </label>
    </div>

    
  </li>
</ul>
</div>

</Col>

<Col>
<img  style={{marginTop:"60px"}} src={tools1} alt='Tools'/>
<img style={{marginTop:"20px"}} src={tools2} alt='Tools'/>
</Col>

</Row>
        </Container>

</div>
)



export default CardExampleCard;