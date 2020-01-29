import React from "react";

class Index extends React.Component {
  constructor() {
    super();
    this.state = { result: [] };
  }

  async componentDidMount() {
    fetch("http://agl-developer-test.azurewebsites.net/people.json")
      .then(response => response.json())
      .then(data => this.setState({ result: data }))
      .then(console.log(this.state.result));
  }

  render() {
    var femFiltered = this.state.result.filter(function(e) {
      return e.gender === "Female";
    });
    var maleFiltered = this.state.result.filter(function(e) {
      return e.gender === "Male";
    });
    console.log(femFiltered);
    console.log(maleFiltered);

    let pets = [];

    try {
      for (let man of maleFiltered) {
        for (let pet of man.pets) {
          pets.push(pet);
        }
      }
      console.log(pets);
    } catch (err) {
      alert("error with new list");
    }

    return (
      <div>
        <h1>Fella's Cats</h1>
        <ul></ul>
        <h1>Gal's Cats</h1>
        <ul></ul>
      </div>
    );
  }
}
export default Index;
