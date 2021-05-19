import React from "react";
import Styles from "./events.module.css";
import { Container, CardDeck, Button } from "react-bootstrap";
//import CardImg from "../Images/cardimage.jpg";
import EventCard from "./requirements/requirements";
// import Cardbody from "../Images/cardbody.png";



function Events() {

  var eventArr = ["Card Title","This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action"];

  var items = [];
  if(eventArr){
    for(var i=0;i<3;i++){
      items.push(<EventCard 
        img="/images/robotics/body/cardimage.jpg"
        title={eventArr[0]}
        content={eventArr[1]}
      />)
    }
  }else{
    for(var j=0;j<3;j++){
      items.push(<EventCard 
        img="/images/robotics/body/cardimage.jpg"
        title={eventArr[0]}
        content={eventArr[1]}
      />)
    }
  }
  return (
    <section>
      <Container className={Styles.outercont}>
        <h1 className={Styles.heading}>Events</h1>
        <CardDeck>
          {items}
        </CardDeck>
        <Button className={Styles.button}>Show More</Button>
      </Container>
    </section>
  );
}

export default Events;
