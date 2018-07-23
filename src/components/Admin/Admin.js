import React from 'react'
import PropTypes from 'prop-types'
import ClientList from '../client/ClientList'
import ClientDetail from '../client/ClientDetail'

function Admin(props){
  let optionalSelectedClientContent = null;
  if (props.selectedClient != null){
    optionalSelectedClientContent = <ClientDetail selectedClient={props.selectedClient}/>
  }
  return(
    <div>
      <h2>Admin</h2>
      {optionalSelectedClientContent}
      <ClientList clientList={props.clientList} currentRouterPath={props.currentRouterPath}
      onClientSelection={props.onClientSelection}/>
    </div>
  );
}

Admin.propTypes = {
  clientList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onClientSelection: PropTypes.func.isRequired,
  selectedClient: PropTypes.object
};

export default Admin
