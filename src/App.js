import React from 'react';
import './App.css';
import Button from "./Components/Button"
import Input from "./Components/Input"
import Clear from "./Components/Clear"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      prevNum: "",
      curNum: "",
      operator: ""
    }
  }

  handleInput = value => {
    this.setState({ input: this.state.input + value })
  }
  handleZeroInput = value => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + value
      })
    }
  }
  handleDecimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + value
      })
    }
  }
  clear = () => {
    this.setState({
      input: ""
    })
  }
  add = () => {
    this.state.prevNum = this.state.input
    this.setState({
      input: ""
    })
    this.state.operator = "+"
  }
  minus = () => {
    this.state.prevNum = this.state.input
    this.setState({
      input: ""
    })
    this.state.operator = "-"
  }
  divide = () => {
    this.state.prevNum = this.state.input
    this.setState({
      input: ""
    })
    this.state.operator = "/"
  }
  multiply = () => {
    this.state.prevNum = this.state.input
    this.setState({
      input: ""
    })
    this.state.operator = "*"
  }
  equals = () => {
    this.state.curNum = this.state.input
    if (this.state.operator === "+") {
      this.setState({
        input: parseFloat(this.state.prevNum) + parseFloat(this.state.curNum)
      })
    } else if (this.state.operator === "-") {
      this.setState({
        input: parseFloat(this.state.prevNum) - parseFloat(this.state.curNum)
      })
    } else if (this.state.operator === "/") {
      this.setState({
        input: parseFloat(this.state.prevNum) / parseFloat(this.state.curNum)
      })
    } else if (this.state.operator === "*") {
      this.setState({
        input: parseFloat(this.state.prevNum) * parseFloat(this.state.curNum)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>7</Button>
            <Button handleClick={this.handleInput}>8</Button>
            <Button handleClick={this.handleInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>4</Button>
            <Button handleClick={this.handleInput}>5</Button>
            <Button handleClick={this.handleInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleInput}>1</Button>
            <Button handleClick={this.handleInput}>2</Button>
            <Button handleClick={this.handleInput}>3</Button>
            <Button handleClick={this.minus}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleDecimal}>.</Button>
            <Button handleClick={this.handleZeroInput}>0</Button>
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row clear">
            <Clear handleClear={this.clear}>Clear</Clear>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
