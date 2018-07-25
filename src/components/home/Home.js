import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Button } from 'react-bootstrap'

function Home(){
  return(
    <div>
      <Link to='/'>Home</Link> | <Link to="/newclient"> Register</Link> | <Link to="/login">Login</Link>
    </div>
  );
}

// class Home extends React.Component{
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
 export default Home
