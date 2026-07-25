import React, { Component } from "react";

class Getuser extends Component {

  constructor() {

    super();

    this.state = {

      person: null

    };

  }

  componentDidMount() {

    fetch("https://api.randomuser.me/")

      .then((response) => response.json())

      .then((data) => {

        this.setState({

          person: data.results[0]

        });

      })

      .catch((error) => {

        console.log(error);

      });

  }

  render() {

    if (!this.state.person) {

      return <h2>Loading...</h2>;

    }

    return (

      <div>

        <h1>User Details</h1>

        <img
          src={this.state.person.picture.large}
          alt="User"
        />

        <h2>

          {this.state.person.name.title}

          {" "}

          {this.state.person.name.first}

        </h2>

      </div>

    );

  }

}

export default Getuser;