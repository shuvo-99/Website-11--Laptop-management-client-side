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
            <Nav.Link as={Link} to="about">
              About Me
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <button
                className="btn btn-link text-black text-decoration-none"
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

// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";

// const Header = () => {
//   return (
//     <>
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#items">Items</Nav.Link>
//             <Nav.Link href="#aboutUs">About Us</Nav.Link>
//             <Nav.Link href="#goals">Goals</Nav.Link>
//             <Nav.Link>Login</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;
