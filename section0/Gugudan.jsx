const React = require("react");
const { Component } = React;

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: Math.ceil(Math.random() * 9),
      secondNum: Math.ceil(Math.random() * 9),
      value: "", //input 값
      result: "", //결과 값
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (
      parseInt(this.state.value) ===
      this.state.firstNum * this.state.secondNum
    ) {
      this.setState({
        result: this.state.value + " 정답",
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
        value: "",
      });
      this.input.focus();
      // this.setState((prevState) => {
      //   return {
      //     result: prevState.value + " 정답",
      //     firstNum: Math.ceil(Math.random() * 9),
      //     secondNum: Math.ceil(Math.random() * 9),
      //     value: "",
      //   };
      // });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };

  onChange = (e) => this.setState({ value: e.target.value });

  input;

  render() {
    return (
      <>
        <div>
          {this.state.firstNum} 곱하기 {this.state.secondNum}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={(c) => {
              this.input = c;
            }}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = Gugudan;
