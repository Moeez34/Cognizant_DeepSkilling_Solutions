import { Component } from "react";

class Register extends Component {

  constructor() {

    super();

    this.state = {

      name: "",

      email: "",

      password: "",

      errors: {}

    };

  }

  handleChange = (event) => {

    this.setState({

      [event.target.name]: event.target.value

    });

  };

  validate = () => {

    let errors = {};

    let valid = true;

    // Name Validation
    if (this.state.name.length < 5) {

      errors.name = "Name should have at least 5 characters";

      valid = false;

    }

    // Email Validation
    if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {

      errors.email = "Enter a valid Email";

      valid = false;

    }

    // Password Validation
    if (this.state.password.length < 8) {

      errors.password =
        "Password should have at least 8 characters";

      valid = false;

    }

    this.setState({ errors });

    return valid;

  };

  handleSubmit = (event) => {

    event.preventDefault();

    if (this.validate()) {

      alert("Registration Successful");

    }

  };

  render() {

    return (

      <div>

        <h1>Register Here!!!</h1>

        <form onSubmit={this.handleSubmit}>

          <input

            type="text"

            placeholder="Name"

            name="name"

            value={this.state.name}

            onChange={this.handleChange}

          />

          <br />

          <span style={{ color: "red" }}>

            {this.state.errors.name}

          </span>

          <br /><br />

          <input

            type="text"

            placeholder="Email"

            name="email"

            value={this.state.email}

            onChange={this.handleChange}

          />

          <br />

          <span style={{ color: "red" }}>

            {this.state.errors.email}

          </span>

          <br /><br />

          <input

            type="password"

            placeholder="Password"

            name="password"

            value={this.state.password}

            onChange={this.handleChange}

          />

          <br />

          <span style={{ color: "red" }}>

            {this.state.errors.password}

          </span>

          <br /><br />

          <button type="submit">

            Register

          </button>

        </form>

      </div>

    );

  }

}

export default Register;