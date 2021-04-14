import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealDetails() {
  const params = useParams();
  const [meal, setMeal] = useState({});
  const [reservation, setReservation] = useState({});
  const [members, setMembers] = useState(0);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    fetch(`/api/meals/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((meal) => {
          if (meal.id === Number(params.id)) {
            setMeal(meal);
          }
        });
      });
  }, []);

  useEffect(() => {
    fetch("/api/reservations")
      .then((resp) => resp.json())
      .then((data) => {
        const guests = [];
        data.forEach((item) => {
          if (item.meal_id === Number(params.id)) {
            guests.push(item.number_of_guests);
          }
        });

        guests.reduce((acc, item) => {
          if (item) {
            acc += item;
            setMembers(acc);
          } else {
            setMembers(0);
          }
        }, 0);
      });
  }, [meal]);

  useEffect(() => {
    if (members >= meal.max_reservations) {
      setCanSubmit(false);
    }
  }, [members]);

  function onSubmitHandler(e) {
    e.preventDefault();

    if (!canSubmit) {
      console.log("cant");
    } else {
      fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation),
      });
      console.log("Reservation is added");
    }
  }

  function bookMealHandler(e) {
    setReservation({
      ...reservation,
      meal_id: meal.id,
      created_date: new Date().toISOString().slice(0, 10),
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="mealDetail-form">
      <div className="meals-fullList">
        <h2>
          <strong>Title :</strong> {meal.title}
        </h2>
        <p>
          <strong>Description : </strong>
          {meal.description}.
        </p>
        <p>
          <strong>Location :</strong> {meal.location}
        </p>
        <p>
          <strong>When :</strong> {meal.when}
        </p>
        <p>
          <strong>Max-reservation :</strong> {meal.max_reservations}
        </p>
        <p>
          <strong>price :</strong> {meal.price} Kr.
        </p>
        <p>
          <strong>Created Date :</strong> {meal.created_date}
        </p>
      </div>
      {canSubmit && (
        <form onSubmit={onSubmitHandler} className="reservation-form">
          <h3>Reservation form:</h3>
          <label htmlFor="contact_phonenumber">* Phone Number :</label>
          <input
            onChange={bookMealHandler}
            id="phonenumber"
            type="number"
            name="contact_phonenumber"
          />
          <br />
          <label htmlFor="contact_name">* Name :</label>
          <input
            onChange={bookMealHandler}
            type="text"
            id="name"
            name="contact_name"
          />
          <br />
          <label htmlFor="contact_email">* E-mail :</label>
          <input
            onChange={bookMealHandler}
            type="email"
            id="email"
            name="contact_email"
          />
          <br />
          <label htmlFor="number_of_guests">* Number of Guests :</label>
          <input
            onChange={bookMealHandler}
            id="number_of_guests"
            type="number"
            name="number_of_guests"
          />
          <br />
          <button className="reservation-button"> Book meal</button>
        </form>
      )}
    </div>
  );
}

export default MealDetails;
