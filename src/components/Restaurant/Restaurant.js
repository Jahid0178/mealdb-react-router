import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Meals from "../Meals/Meals";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <h2>Restaurant</h2>
      {/* <InputGroup className="w-50 mx-auto">
        <FormControl
          onChange={handleSearchField}
          type="text"
          placeholder="Search your meals here"
        ></FormControl>
      </InputGroup> */}
      <Container fluid>
        <Row>
          {meals === null
            ? "Search Result Not Found"
            : meals.map((meal) => (
                <Meals key={meal.idMeal} meal={meal}></Meals>
              ))}
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
