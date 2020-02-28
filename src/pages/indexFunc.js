import React, { useState, useEffect } from "react";

function Index() {
  const [result, setResult] = useState({});

  useEffect(() => {
    async function fetchData() {
      fetch("http://agl-developer-test.azurewebsites.net/people.json")
        .then(response => response.json())
        .then(data => setResult({ result: data }));
    }
    fetchData();
  });

  const Filter = async gender => {
    result.filter(function(e) {
      return e.gender === gender;
    });
  };

  var femFiltered = Filter("Female");
  var maleFiltered = Filter("Male");

  // console.log(femFiltered);
  // console.log(maleFiltered);

  let mCats = [];
  let fCats = [];

  try {
    for (let man of maleFiltered) {
      if (man.pets != null) {
        for (let pet of man.pets) {
          if (pet.type === "Cat") {
            mCats.push(pet);
          }
        }
      }
    }
    // console.log(mCats);
  } catch (err) {
    alert(err.name + ": " + err.message);
  }

  try {
    for (let woman of femFiltered) {
      if (woman.pets != null) {
        for (let pet of woman.pets) {
          if (pet.type === "Cat") {
            fCats.push(pet);
          }
        }
      }
    }
    // console.log(fCats);
  } catch (err) {
    alert(err.name + ": " + err.message);
  }

  const fellasList = mCats
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((cat, index) => (
      <li key={"fella's " + cat.type + (index + 1)}>{cat.name}</li>
    ));

  const galsList = fCats
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((cat, index) => (
      <li key={"gal's " + cat.type + (index + 1)}>{cat.name}</li>
    ));

  return (
    <div>
      <h1>Fella's Cats</h1>
      <ul>{fellasList}</ul>
      <h1>Gal's Cats</h1>
      <ul>{galsList}</ul>
    </div>
  );
}

export default Index;
