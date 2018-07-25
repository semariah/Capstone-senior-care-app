import React, { Fragment, Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Error404 from './error404/Error404'
import Home from './home/Home'
import Navbar from './layouts/Navbar'
import ClientControl from './client/ClientControl'
import ClientList from './client/ClientList'
import logo from '../logo.svg'
import Moment from 'moment'
import Admin from './admin/Admin'
import Auth from './auth/Auth'
import History from './history/History'
import Callback from './callback/Callback'




class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterClientList: [],
      selectedClient: null
    };
    this.handleAddingNewClientToList = this.handleAddingNewClientToList.bind(this);
    this.handleChangingSelectedClient = this.handleChangingSelectedClient.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateClientElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateClientElapsedWaitTime() {
    let newMasterClientList = this.state.masterClientList.slice();
    newMasterClientList.forEach((client) =>
      client.formattedWaitTime = (client.timeOpen).fromNow(true)
    );
    this.setState({masterClientList: newMasterClientList});
  }

  handleAddingNewClientToList(newClient){
    var newMasterClientList = this.state.masterClientList.slice();
    newClient.formattedWaitTime = (newClient.timeOpen).fromNow(true)
    newMasterClientList.push(newClient);
    this.setState({masterClientList: newMasterClientList});
  }
  
  handleChangingSelectedClient(client){
  this.setState({selectedClient: client});
  alert('The selected client is now: ' + this.state.selectedClient.name);
}

goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render(){
    const auth = new Auth();
    auth.login();

    const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
    
    return <BrowserRouter>
    <Fragment>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Senior Care App</h1>
        </header>
        //<Home />
        <Navbar />
        <Switch>
          <Route exact path='/' render={()=><ClientList clientList={this.state.masterClientList} />} />
          <Route path='/newclient' render={()=><ClientControl onClientCreation={this.handleAddingNewClientToList} />} />
          <Route path='/admin' render={(props)=><Admin clientList={this.state.masterClientList} currentRouterPath={props.location.pathname} onClientSelection={this.handleChangingSelectedClient} selectedClient={this.state.selectedClient}/>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
          <Route component={Error404} />
        </Switch>
        </div>
      </Fragment>
      </BrowserRouter>

  }

};

export default App;
