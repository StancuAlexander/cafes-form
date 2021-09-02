import React, { useState } from "react";
import firebase from "../firebase";

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

    ref
      .doc()
      .set(newCafe)
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <h1>Add Cafe</h1>
      <div className="inputBox">
        <h6>Title</h6>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h6>City</h6>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <h6>Pincode</h6>
        <input
          type="number"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <h6>Number of drinks</h6> {" "}
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
          <label htmlFor="morethan5">Greater or equal to 5</label>
        <br />
        <button onClick={() => addCafe()}>Submit</button>
      </div>
    </div>
  );
}

export default Home;
