import React from 'react'
import Client from './Client'
import PropTypes from 'prop-types'

function ClientList(props){
  //console.log(props.clientList) --checking if ID has been created
  return(
    <div>
      <hr/>
      {props.clientList.map((client) =>
        <Client name={client.name}
          address={client.address}
          tel={client.tel}
          service={client.service}
          appointmentDate={client.appointmentDate}
          formattedWaitTime={client.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={client.id}
          onClientSelection={props.onClientSelection}/>
      )}
    </div>
  );
}

ClientList.propTypes = {
  clientList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onClientSelection: PropTypes.func
}

export default ClientList
