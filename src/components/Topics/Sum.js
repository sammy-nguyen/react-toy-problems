import React, { Component } from "react";

class Sum extends Component {
  state = {
    number1: 0,
    number2: 0,
    sum: null,
  };

  onChange1 = (e) => {
    this.setState({ number1: e.target.value });
  };

  onChange2 = (e) => {
    this.setState({ number2: e.target.value });
  };

  onConfirm = () => {
    const sumNum = parseInt(this.state.number1)+ parseInt(this.state.number2);

    this.setState({
      sum: sumNum
    });
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          onChange={(e) => this.onChange1(e)}
          className="inputLine"
        ></input>

        <input
          onChange={(e) => this.onChange2(e)}
          className="inputLine"
        ></input>
        <button onClick={this.onConfirm} className="confirmationButton">
          Add
        </button>
        <span className="resultsBox">
          Sum: {JSON.stringify(this.state.sum)}
        </span>
      </div>
    );
  }
}

export default Sum;
