import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootsrap'

// function Navbar(){
//   return(
//     <div>
//       <ul>
//         <Link to ='/'><li>Home</li></Link>
//         <Link to ='/ClientForm'><li>Client Form</li></Link>
//         <Link to ='/ClientList'><li>Client</li></Link>
//         <Link to ='/Admin'><li>LogIn</li></Link>
//       </ul>
//     </div>
//   )
// }
// export default Navbar

class header extends React.Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Home</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        About Us
      </NavItem>
      <NavItem eventKey={2} href="#">
        Task
      </NavItem>
      <NavItem eventKey={3} href="#">
        Employee
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Client-Form</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Client-List</MenuItem>
        <MenuItem divider />
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        LogIn
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export { header }
