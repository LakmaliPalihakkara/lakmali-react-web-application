import React from 'react';
// import './styles.css';
// import { Card } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';


const CardExampleCard = ({weatherData}) => (
//   <Card>
//     <Card.Content>
//         <Card.Header className="header">{weatherData.name}</Card.Header>
//     </Card.Content>
//   </Card>

<Card>
      <Card.Body>{weatherData.name}</Card.Body>
    </Card>
)

export default CardExampleCard;