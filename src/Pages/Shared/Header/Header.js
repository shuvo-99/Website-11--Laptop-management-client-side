// import { signOut } from "firebase/auth";
// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import auth from "../../../firebase.init";

// const Header = () => {
//   const [user] = useAuthState(auth);

//   const handleSignOut = () => {
//     signOut(auth);
//   };

//   return (
//     <Navbar bg="light" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           Dental World
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto justify-content-center align-items-center">
//             <Nav.Link href="home">Home</Nav.Link>
//             <Nav.Link href="home#services"> My Services</Nav.Link>
//             <Nav.Link as={Link} to="blogs">
//               Blogs
//             </Nav.Link>
//             <Nav.Link as={Link} to="about">
//               About Me
//             </Nav.Link>
//           </Nav>
//           <Nav>
//             {user ? (
//               <button
//                 className="btn btn-link text-black text-decoration-none"
//                 onClick={handleSignOut}
//               >
//                 Sign Out
//               </button>
//             ) : (
//               <Nav.Link as={Link} to="login">
//                 Login
//               </Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="text-center mt-5">
      <p>This is Header</p>
    </div>
  );
};

export default Header;
