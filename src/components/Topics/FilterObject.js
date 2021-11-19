import React, { Component } from "react";

class FilterObject extends Component {
  state = {
    unFilteredArray: [
      { name: "Jimmy Joe", title: "Hack0r", age: 12 },
      { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
      { name: "Carly Armstrong", title: "CEO" },
    ],
    userInput: "",
    filteredArray: [],
  };

  onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onConfirm = () => {
    const filteredArr = this.state.unFilteredArray.filter((item) =>
      item.hasOwnProperty(this.state.userInput)
    );
    this.setState({
      filteredArray: filteredArr,
    });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          onChange={(e) => this.onUserInputChange(e)}
          className="inputLine"
        ></input>
        <button onClick={this.onConfirm} className="confirmationButton">
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
