import React from "react";

class Index extends React.Component {
  constructor() {
    super();
    this.state = { result: [] };
  }

  async componentDidMount() {
    fetch("http://agl-developer-test.azurewebsites.net/people.json")
      .then(response => response.json())
      .then(data => this.setState({ result: data }));
  }

  render() {
    var femFiltered = this.state.result.filter(function(e) {
      return e.gender === "Female";
    });
    var maleFiltered = this.state.result.filter(function(e) {
      return e.gender === "Male";
    });
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

    // {
    //   props.Numbers.map((number, index) => <li key={index}>{number * 2}</li>);
    // }

    return (
      <div>
        <h1>Fella's Cats</h1>
        <ul>{fellasList}</ul>
        <h1>Gal's Cats</h1>
        <ul>{galsList}</ul>
      </div>
    );
  }
}
export default Index;
