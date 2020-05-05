import React, { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import { faTrashAlt, faEdit, faKey } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import IState from '../../core/models/IState';
import * as actions from '../../core/actions/actions';
import Loader from '../../shared/components/Loader/Loader';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap';

const Dashboard = (props:any) => {
  
return(
<React.Fragment>
<Navbar bg="dark" variant="dark" sticky="top" className="justify-content-between">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
    
    <Container className="container">
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="box">
                </div>
            </Col>
            <Col>
                <div className="box">
                </div>
            </Col>
        </Row>
    </Container>
</React.Fragment>
)
}

const mapStateToProps = (state: IState) => ({
  
});

const mapDispatchToProps = (dispatch:any) => {
	return {
    
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);