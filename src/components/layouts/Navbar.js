// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Button } from 'react-bootsrap'
// import ReactDom from 'react-dom'
//
// // function Navbar(){
// //   return(
// //     <div>
// //       <ul>
// //         <Link to ='/'><li>Home</li></Link>
// //         <Link to ='/ClientForm'><li>Client Form</li></Link>
// //         <Link to ='/ClientList'><li>Client</li></Link>
// //         <Link to ='/Admin'><li>LogIn</li></Link>
// //       </ul>
// //     </div>
// //   )
// // }
// // export default Navbar
//
// class header extends React.Component{
//   render() {
//     const { isAuthenticated } = this.props.auth;
//     return(
//       <div>
//           <Navbar fluid>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="#">Auth0 - React</a>
//               </Navbar.Brand>
//               <Button
//                 bsStyle="primary"
//                 className="btn-margin"
//                 onClick={this.goTo.bind(this, 'home')}
//               >
//                 Home
//               </Button>
//               {
//                 !isAuthenticated() && (
//                     <Button
//                       bsStyle="primary"
//                       className="btn-margin"
//                       onClick={this.login.bind(this)}
//                     >
//                       Log In
//                     </Button>
//                   )
//               }
//               {
//                 isAuthenticated() && (
//                     <Button
//                       bsStyle="primary"
//                       className="btn-margin"
//                       onClick={this.logout.bind(this)}
//                     >
//                       Log Out
//                     </Button>
//                   )
//               }
//             </Navbar.Header>
//           </Navbar>
//         </div>
//     )
// 
//   }
// }
// 
// export default header
// class header extends React.Component {
//   render() {
//     return(
//       <div className="Nav_container">
//       <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#brand">Home</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="#">
//         About Us
//       </NavItem>
//       <NavItem eventKey={2} href="#">
//         Task
//       </NavItem>
//       <NavItem eventKey={3} href="#">
//         Employee
//       </NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Client-Form</MenuItem>
//         <MenuItem eventKey={3.2}>Client-List</MenuItem>
//       </NavDropdown>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="#">
//         LogIn
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
// </div>
//     )
//   }
// }
//
// export default header
