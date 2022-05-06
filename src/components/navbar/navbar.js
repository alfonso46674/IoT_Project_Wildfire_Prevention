import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './navbar.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import logo from '../../assets/simple_logo.png';
const Navbar = ({ user, setUser }) => {

  // console.log(logo);
  return (
    <Container>
        <Row className='Navbar'>
            <Col md={8} className='Slogan'>
                {/* <Button><Link to='/' className='navbar-text'></Link></Button> */}
                <a href ="/">
                    <img src={logo} alt='LOGO.PNG' width="50" height="50">
                    </img>
                </a>
            </Col>
            <Col >

            </Col>
            <Col className='Client'>
            <button type="button" class="btn btn-danger buttons" ><Link to='/' className='navbar-text' >Dashboard</Link></button>
            </Col>
            <Col >
                <button type="button" class="btn btn-outline-danger buttons" ><Link to='/aboutUs' className='navbar-text' >About us</Link></button>
            </Col>
        </Row>
    </Container>
  )
}
export default Navbar;