import React from "react";
import { Card } from "react-bootstrap";
import Styles from "../events.module.css";

function EventCard(props) {
    return (<Card className={Styles.card}>
              <Card.Img variant="top" src={props.img} />
  
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  {props.content}
                </Card.Text>
              </Card.Body>
            </Card>);
  }
  export default EventCard;