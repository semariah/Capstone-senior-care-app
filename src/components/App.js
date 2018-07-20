import React, { Fragment, Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Error404 from './error404/Error404'
import Home from './home/Home'
//import header from './layouts/Navbar'
import ClientControl from './client/ClientControl'
import ClientList from './client/ClientList'
import logo from '../logo.svg'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterClientList: []
    };
    this.handleAddingNewClientToList = this.handleAddingNewClientToList.bind(this);
  }

  handleAddingNewClientToList(newClient){
    var newMasterClientList = this.state.masterClientList.slice();
    newMasterClientList.push(newClient);
    this.setState({masterClientList: newMasterClientList});
  }

  render(){
    //const { header } = this.state
    //const { Navbar } = this.state
    return <BrowserRouter>
    <Fragment>
        <div className="App">
        //<header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Senior Care App</h1>
        </header>
        <Home/>
        <Switch>
          <Route exact path='/' render={()=><ClientList clientList={this.state.masterClientList} />} />
          <Route path='/newclient' render={()=><ClientControl onClientCreation={this.handleAddingNewClientToList} />} />
          <Route component={Error404} />
        </Switch>
        </div>
      </Fragment>
      </BrowserRouter>

  }

};

export default App;
