import React, { useState, useEffect, useCallback } from "react";
import "./Cafes.css";
import firebase from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Cafes() {
  const [cafesArray, setCafesArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("cafes");

  const getCafes = useCallback(() => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCafesArray(items);
      setLoading(false);
    });
  }, [ref]);

  useEffect(() => {
    getCafes();
  }, [getCafes]);

  if (loading) {
    return (
      <div className="container">
        {cafesArray.map((item) => (
          <div className="cafeCard" key={item.pincode}>
            <FontAwesomeIcon className="cofee" icon={faCoffee} size="4x" />
            <div className="category">Name</div>
            <div>{item.name}</div>
            <div className="category">City </div>
            <div>{item.city}</div>
            <div className="category">Pincode </div>
            <div>{item.pincode}</div>
            <div className="category">Drinks </div>
            <div>{item.drinks}</div>
          </div>
        ))}
      </div>
    );
  }

  return <div>loading...</div>;
}

export default Cafes;
