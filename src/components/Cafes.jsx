import React, { useState, useEffect,useCallback  } from "react";
import firebase from "../firebase";
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
  }, [ref])

  useEffect(() => {
    getCafes();
  }, [getCafes]);

  if (loading) {
    return (
      <div>
        {cafesArray.map((item) => (
          <div key={item.pincode}>
            <div >Name:{item.name}</div>
            <div>City:{item.city}</div>
            <div>Pincode:{item.pincode}</div>
            <div>Drinks:{item.drinks}</div>
          </div>
        ))}
      </div>
    );
  }

  return <h2>Coffee shops</h2>;
}

export default Cafes;
