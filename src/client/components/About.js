import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-paragraph">
        Meal sharing app is my <strong>first</strong> project. <br />
        This app helps you to reserve our meals easily. <br /> We share
        happiness here <br />
        You can reserve and leave us a review as well. <br /> Your feedback
        helps us grow :)
      </div>
      <div>
        <img
          className="about-image"
          src="https://global-uploads.webflow.com/5e465eaf479e4cc0ef41f077/5ed609baf722b825410adb9c_5ec3714af9aaf9787943a936_sharing-a-meal-opti.jpg"
          alt="cheers"
        />
      </div>
    </div>
  );
}

export default About;
