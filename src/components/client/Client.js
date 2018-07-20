import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Client(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h6>{props.address}</h6>
      <h6>{props.tel}</h6>
      <h6>{props.service}</h6>
      <h6>{props.appointmentDate}</h6>
      <h6>{displayTimeOpen(props.timeOpen)}</h6>
      <hr/>
    </div>
  )
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Client.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  appointmentDate: PropTypes.string.isRequired,
  timeOpen:PropTypes.instanceOf(Moment).isRequired
}

export default Client
