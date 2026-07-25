import { Component } from "react";

class ComplaintRegister extends Component {

  constructor() {

    super();

    this.state = {

      ename: "",

      complaint: "",

      referenceNumber: Math.floor(
        Math.random() * 1000
      )

    };

  }

  handleChange = (event) => {

    this.setState({

      [event.target.name]: event.target.value

    });

  };

  handleSubmit = (event) => {

    event.preventDefault();

    alert(

      `Thanks ${this.state.ename}

Your Complaint was Submitted.

Transaction ID is:

${this.state.referenceNumber}`

    );

  };

  render() {

    return (

      <div>

        <h1>
          Register your complaints here!!!
        </h1>

        <form onSubmit={this.handleSubmit}>

          <label>

            Name :

          </label>

          <input

            type="text"

            name="ename"

            value={this.state.ename}

            onChange={this.handleChange}

          />

          <br /><br />

          <label>

            Complaint :

          </label>

          <textarea

            name="complaint"

            value={this.state.complaint}

            onChange={this.handleChange}

          />

          <br /><br />

          <button type="submit">

            Submit

          </button>

        </form>

      </div>

    );

  }

}

export default ComplaintRegister;