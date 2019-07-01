import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/students/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Student Details
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Students List</Link></h4>
            <Grid fluid className="grid">
            <dl>
            <Row className="row">
            <Col className="col" xs={8} sm={6} md={4} lg={2}>
              <dt className="tabledetails">Name:</dt>
              <dd>{this.state.student.name}</dd>
              </Col>
              <Col className="col" xs={8} sm={6} md={4} lg={2}>
              <dt>Course Selected</dt>
              <dd>{this.state.student.field}</dd>
              </Col>
              <Col className="col" xs={8} sm={6} md={4} lg={2}>
              <dt>Address:</dt>
              <dd>{this.state.student.address}, {this.state.student.city}</dd>
              </Col>
              <Col className="col" xs={8} sm={6} md={4} lg={2}>
              <dt>Phone Number:</dt>
              <dd>{this.state.student.phone}</dd>
              </Col>
              <Col className="col" xs={8} sm={6} md={4} lg={2}>
              <dt>Email Address:</dt>
              <dd>{this.state.student.email}</dd>
              </Col>
              </Row>
            </dl>
            </Grid>
            <Link to={`/edit/${this.state.student.id}`} className="btn btn-success btn-block">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.student.id)} className="btn btn-danger btn-block">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;