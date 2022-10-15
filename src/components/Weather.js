import React from 'react';
// import './styles.css';
// import { Card } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';



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
    <Card style={{ width: '50%', paddingLeft: '100px', paddingRight:'100px' }}>
       <Card.Body>{weatherData.name}</Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Temprature: {weatherData.main.temp} &deg;C</ListGroup.Item>
        <ListGroup.Item>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Description: {weatherData.weather[0].main}</ListGroup.Item>
        <ListGroup.Item>Humidity: {weatherData.main.humidity} %</ListGroup.Item>
        <ListGroup.Item>Day: {moment().format('dddd')}</ListGroup.Item>
        <ListGroup.Item>Date: {moment().format('LL')}</ListGroup.Item>
      </ListGroup>
    </Card>


<div style={{ width: '50%', paddingLeft: '100px', paddingRight:'100px' }} className="todoapp stack-large">
<h1>October Camping Check List</h1>
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>

<h4>Equipment</h4>
  <li>
    <div style={{display: 'flex', justifyContent:'flex-start'}}>
      <input type="checkbox" defaultChecked={false} />
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
  <li className="todo stack-small">
    <div className="c-cb">
      <input id="todo-1" type="checkbox" />
      <label className="todo-label" htmlFor="todo-1">
        Sleep
      </label>
    </div>
  </li>
</ul>
</div>

</div>
)



export default CardExampleCard;