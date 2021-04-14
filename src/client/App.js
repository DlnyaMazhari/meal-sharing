import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MealDetails from "./components/MealDetails";
import Meals from "./components/Meals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async function () {
    const mealData = await fetch("/api/meals").then((resp) => resp.json());
    setMeals(mealData);
  };
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Home meals={meals} />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/Meals">
          <div>
            <Meals meals={meals} />
          </div>
        </Route>

        <Route exact path="/Meals/:id">
          <div>
            <MealDetails meals={meals} />
          </div>
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
