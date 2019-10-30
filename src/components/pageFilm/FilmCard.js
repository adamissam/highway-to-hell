import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.search.posterUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.search.title}</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;