import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('/api/students')
      .then(res => {
        this.setState({ students: res.data });
        console.log(this.state.students);
      });
  }

  render() {                
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Student List
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Contact</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course Selected</th>
                  <th>Address</th> 
                  <th>Email</th>
                  <th>Phone #</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                    <td>{c.field}</td>
                    <td>{c.address}, {c.city}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;