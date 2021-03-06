import React, { Component } from 'react';
// import { format } from 'path';
import './index.css';
import axios from 'axios';

export default class NewFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        this.setState({
          name: '',
          age: '',
          email: ''
        });
        this.props.onSubmit();
      })
      .catch(error => {
        console.log(`There was an error adding a new friend: ${error}`);
      });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form">
          <img
            className="logo"
            src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_200x200.jpg"
            alt="logo"
          />
          <h4>Add A New Friend!</h4>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <button className="add-btn" onClick={e => this.onSubmit(e)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
