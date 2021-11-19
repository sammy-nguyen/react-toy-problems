import React, { Component } from "react";

class FilterString extends Component {
    state = {
    unFilteredArray:[ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
    userInput: "",
    filteredArray: [],
  };


onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };



onConfirm = () => {
    const filteredArr = this.state.unFilteredArray.filter(
      (item) => (item === this.state.userInput));
    this.setState({
      filteredArray: filteredArr,
    });
  };









  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          onChange={(e) => this.onUserInputChange(e)}
          className="inputLine"
          
        ></input>
        <button onClick={this.onConfirm} className="confirmationButton">
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
