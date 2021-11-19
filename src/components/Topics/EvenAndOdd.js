import React, { Component } from "react";

class EvenAndOdd extends Component {
  state = {
    evenArray: [],
    oddArray: [],
    userInput: "",
  };

  onUserInputChange = (e) => {
    this.setState({userInput: e.target.value})
  };

  onConfirm = () => {
    const arr = this.state.userInput.split(",");
    const oddArr = arr.filter(item => item % 2 !== 0);
    const evenArr = arr.filter((item) => item % 2 === 0);
    this.setState({evenArray: evenArr, oddArray: oddArr})
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          onChange={(e) => this.onUserInputChange(e)}
          className="inputLine"
        ></input>
        <button onClick={this.onConfirm} className="confirmationButton">
          Confirm
        </button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
