import React from 'react'
import PropTypes from 'prop-types'


function Client(props){
  const clientInformation = 
    <div>
      <h3>{props.name}</h3>
      <h6>{props.address}</h6>
      <h6>{props.tel}</h6>
      <h6>{props.service}</h6>
      <h6>{props.appointmentDate}</h6>
      <h6>{props.formattedWaitTime}</h6>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onClientSelection({name: props.name, address: props.address, tel: props.tel, service: props.service, appointmentDate: props.appointmentDate, formattedWaitTime: props.formattedWaitTime});}}>
        {clientInformation}
      </div>
    )
  } else {
    return (
      <div>
        {clientInformation}
      </div>
    )
  }
}


Client.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  appointmentDate: PropTypes.string.isRequired,
  formattedWaitTime:PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onClientSelection: PropTypes.func
}

export default Client
