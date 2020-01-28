import React from "react";
var femFiltered = [];
var maleFiltered = [];

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
    console.log(femFiltered);
    var maleFiltered = this.state.result.filter(function(e) {
      return e.gender === "Male";
    });
    console.log(femFiltered);
    console.log(maleFiltered);

    // for (var i = 0; i < this.state.result.length; i++) {
    //   if (this.state.result.gender === "Female") {
    //     femFiltered.push(this.state.result[i]);
    //   } else {
    //     maleFiltered.push(this.state.result[i]);
    //   }
    // }
    // console.log(femFiltered);
    // console.log(maleFiltered);
    return <h1>give it a try</h1>;
  }
}
export default Index;
