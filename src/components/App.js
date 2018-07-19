import React, { Fragment } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Error404 from './error404/Error404'
//import Home from './home/Home'
import ClientControl from './client/ClientControl'
import ClientList from './client/ClientList'
import logo from '../logo.svg'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterClientList: []
    };
    this.handleAddingClientToList = this.handleAddingClientToList.bind(this);
  }

  handleAddingClientToList(newClient){
    var newMasterClientList = this.state.masterClientList.slice();
    newMasterClientList.push(newClient);
    this.setState({masterClientList: newMasterClientList});
  }

  render(){
    return <BrowserRouter>
    <Fragment>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Senior Care App</h1>
        </header>
        <Switch>
          <Route exact path='/' render={()=><ClientList clientList={this.state.masterClientList} />} />
          <Route path='/newclient' render={()=><ClientControl onClientCreation={this.handleAddingClientToList} />} />
          <Route component={Error404} />
        </Switch>
        </div>
      </Fragment>
      </BrowserRouter>

  }

};

export default App;
