import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    axios.get('/api/students/'+this.props.match.params.id)
      .then(res => {
        this.setState({ student: res.data });
        console.log(this.state.student);
      });
  }

  onChange = (e) => {
    const state = this.state.student
    state[e.target.name] = e.target.value;
    this.setState({student:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, field, address, city, email, phone } = this.state.student;

    axios.put('/api/students/'+this.props.match.params.id, { name, field, address, city, email, phone })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Student
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.student.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Student List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.student.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Course Selected:</label>
                <input type="text" class="form-control" name="field" value={this.state.student.field} onChange={this.onChange} placeholder="Java, Ruby, C++, JavaScript" />
              </div>
              <div class="form-group">
                <label for="title">Address:</label>
                <input type="text" class="form-control" name="address" value={this.state.student.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="author">City:</label>
                <input type="text" class="form-control" name="city" value={this.state.student.city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="published_date">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={this.state.student.phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="description">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.student.email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="btn btn-dark btn-lg">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;