import React from 'react';
import PropTypes from 'prop-types'

function ClientDetail(props){
  return (
    <div>
      <hr/>
      <h6>{props.selectedClient.name}</h6> <h6>{props.selectedClient.address}</h6>
      <h6>{props.selectedClient.tel}</h6> <h6>{props.selectedClient.service}</h6>
      <h6>{props.selectedClient.appointmentDate}</h6> 
      <h2>Submitted {props.selectedClient.formattedWaitTime} ago</h2>
      <hr/>
    </div>
  );
}

ClientDetail.propTypes = {
  selectedClient: PropTypes.object
}

export default ClientDetail;
