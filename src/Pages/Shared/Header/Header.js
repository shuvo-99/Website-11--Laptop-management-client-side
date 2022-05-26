import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Laptop Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center align-items-center">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#items"> Items</Nav.Link>
            <Nav.Link as={Link} to="blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <>
                {/* My Item */}

                <Nav.Link as={Link} to="manageitem">
                  Manage Item
                </Nav.Link>

                {/* Add item */}

                <Nav.Link as={Link} to="additem">
                  Add Item
                </Nav.Link>

                {/* My Item */}

                <Nav.Link as={Link} to="myitem">
                  My Item
                </Nav.Link>
              </>
            )}
            {user ? (
              <button
                className="btn btn-warning btn-link text-black text-decoration-none "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
