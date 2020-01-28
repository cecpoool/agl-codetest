import React from "react";

class Index extends React.Component {
  async componentDidMount() {
    var femFiltered = [];
    var maleFiltered = [];

    let result = fetch(
      "http://agl-developer-test.azurewebsites.net/people.json"
    )
      .then(response => response.json())
      .then(data => console.log(data));

    console.log(result);

    for (var i = 0; i < result.length; i++) {
      if (result[i].gender === "Female") {
        femFiltered.push(result[i]);
      } else {
        maleFiltered.push(result[i]);
      }
    }
    console.log(femFiltered);
    console.log(maleFiltered);
  }

  render() {
    return <h1>give it a try</h1>;
  }
}
export default Index;
