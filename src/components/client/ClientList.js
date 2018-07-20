import React from 'react'
import Client from './Client'
import PropTypes from 'prop-types'

function ClientList(props){
  console.log(props.clientList)
  return(
    <div>
      <hr/>
      {props.clientList.map((client, index) =>
        <Client name={client.name}
          address={client.address}
          tel={client.tel}
          service={client.service}
          appointmentDate={client.appointmentDate}
          timeOpen={client.timeOpen}
          key={client.id}/>
      )}
    </div>
  );
}

ClientList.propTypes = {
  clientList: PropTypes.array
}

export default ClientList
