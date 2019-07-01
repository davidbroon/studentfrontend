import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      field: '',
      address: '',
      city: '',
      phone: '',
      email: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, field, address, city, phone, email } = this.state;

    axios.post('/api/students', { name, field, address, city, phone, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, field, address, city, phone, email } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Add Student
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Students List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course Selected:</label>
                <input type="text" className="form-control" name="field" value={field} onChange={this.onChange} placeholder="Java, Ruby, C++, JavaScript" />
              </div>
           
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" className="btn btn-info btn-lg btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;