import React from 'react'
import PropTypes from 'prop-types'
import ClientList from '../client/ClientList'

function Admin(props){
  console.log(props.currentRouterPath);
  return(
    <div>
      <h2>Admin</h2>
      <ClientList clientList={props.clientList} />
    </div>
  );
}

Admin.propTypes = {
  clientList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin
