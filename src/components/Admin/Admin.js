import React from 'react'
import PropTypes from 'prop-types'
import ClientList from '../client/ClientList'
import ClientDetail from '../client/ClientDetail'

function Admin(props){
  return(
    <div>
      <h2>Admin</h2>
      <ClientDetail />
      <ClientList clientList={props.clientList} currentRouterPath={props.currentRouterPath}
      onClientSelection={props.onClientSelection}/>
    </div>
  );
}

Admin.propTypes = {
  clientList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onClientSelection: PropTypes.func.isRequired
};

export default Admin
