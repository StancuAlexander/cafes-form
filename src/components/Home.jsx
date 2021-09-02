import React, { useState } from "react";
import firebase from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [drinks, setDrinks] = useState("");

  const ref = firebase.firestore().collection("cafes");

  // ADD FUNCTION
  function addCafe() {
    const newCafe = {
      name,
      city,
      pincode,
      drinks,
    };
    if (name !== "" && city !== "" && pincode !== "" && drinks !== "") {
      ref
        .doc()
        .set(newCafe)
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Please fill in all the fields!");
    }
  }
  return (
    <div className="containerHome">
      <h1 style={{ color: "#0066b2" }}>
        <FontAwesomeIcon className="cofee" icon={faCoffee} /> Add Cafe
      </h1>
      <div className="containerHome">
        <div>
          <div className="categoryHome">Title</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="category">City</div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <div className="category">Pincode</div>
          <input
            type="number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div>
          <div className="category">Number of drinks</div> {" "}
          <input
            onChange={(e) => setDrinks(e.target.value)}
            type="radio"
            id="lessthan5"
            name="drinks_number"
            value="less than 5"
          />
            <label htmlFor="lessthan5">Less than 5</label>
          <br /> {" "}
          <input
            onChange={(e) => setDrinks(e.target.value)}
            type="radio"
            id="morethan5"
            name="drinks_number"
            value="greater or equal to 5"
          />
            <label htmlFor="morethan5">More or equal to 5</label>
        </div>
        <br />
        <button className="submitBtn" onClick={() => addCafe()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
