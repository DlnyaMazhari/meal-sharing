import React from "react";
import { Link } from "react-router-dom";

function Meals({ meals }) {
  return (
    <div className="meals-page">
      <div>
        <h2 className="Meals-title">Here is our list of meals:</h2>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <Link className="meal-links" to={`/meals/${meal.id}`}>
                {meal.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="Meals-paragraph">
          * You can simply reserve any meal by clicking on their name in the
          above list.
        </p>
      </div>
      <div>
        <img
          className="reservingMeal-image"
          src="https://miro.medium.com/max/15904/1*WIy17WqqxMX2Hkfr8Wda1g.jpeg"
          alt="food time"
        />
      </div>
    </div>
  );
}

export default Meals;
