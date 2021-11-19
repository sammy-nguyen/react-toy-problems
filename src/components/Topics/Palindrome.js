import React, { Component } from "react";

class Palindrome extends Component {
  state = {
    userInput: "",
    palindrome: "",
  };

  onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onConfirm = () => {
    const wordArr = this.state.userInput.split("");
    console.log(wordArr)
    let answer = false;
    for (let i = 0; i < wordArr.length; i++) {
      if (i !== wordArr.indexOf(wordArr[i])) {
        answer = true;
      }
    }

    this.setState({
      palindrome: answer,
    });
  };
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Palindrome</h4>

        <input
          onChange={(e) => this.onUserInputChange(e)}
          className="inputLine"
        ></input>

        <button onClick={this.onConfirm} className="confirmationButton">
          Check
        </button>

        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
