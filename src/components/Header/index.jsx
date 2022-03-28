import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link head  er__title"
              href="https://www.facebook.com/profile.php?id=100017181799314"
              target="_blank"
              rel="noopener noreferrer"
            >
              tDev
            </a>
          </Col>

          <Col xs="auto">
            <NavLink className="header__link" to="/sign-in" activeclassname="header__link--active">
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
