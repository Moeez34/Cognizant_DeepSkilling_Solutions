import React from "react";

class EventExamples extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {

    return (

      <div>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increase}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() =>
            this.sayWelcome("Welcome")
          }
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          Synthetic Event
        </button>

      </div>

    );

  }

}

export default EventExamples;