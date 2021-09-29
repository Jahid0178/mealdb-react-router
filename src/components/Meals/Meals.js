import React from "react";
import { Card, CardGroup, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Meals.css";

const Meals = (props) => {
  console.log("hello");
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
  // console.log(props.meal.idMeal);

  let history = useHistory();

  const handleMealId = () => {
    history.push(`/meal/${idMeal}`);
  };

  return (
    <>
      <Col md={4}>
        <CardGroup>
          <Card className="my-2">
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
              <Card.Title>{strMeal}</Card.Title>
              <Card.Text>{strInstructions.slice(0, 250)}</Card.Text>
              <Button onClick={handleMealId}>Visit Our Channel</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
    </>
  );
};

export default Meals;
