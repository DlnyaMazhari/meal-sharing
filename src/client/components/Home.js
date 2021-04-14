import React from "react";

function Home({ meals }) {
  return (
    <div className="home-content">
      <div>
        <section className="home-meals">
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                <h4>{meal.title}</h4>
                <p> {meal.description}.</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>
        <img
          className="home-image"
          src="https://www.gloriafood.com/wp-content/uploads/2018/06/Restaurant-Photography-Tips-Tricks.png"
          alt="food"
        />
      </div>
    </div>
  );
}

export default Home;
