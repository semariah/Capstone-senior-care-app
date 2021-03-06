import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function ClientForm(props){
  let _name = null;
  let _address = null;
  let _tel = null;
  let _service = null;
  let _appointmentDate = null;

  function handleClientFormSubmission(event) {
    event.preventDefault();
    props.onClientCreation({name: _name.value, address: _address.value, tel: _tel.value, service: _service.value, appointmentDate: _appointmentDate.value, id: v4(), timeOpen: new Moment()});
    _name.value = '';
    _address.value = '';
    _tel.value = '';
    _service.value = '';
    _appointmentDate.value = '';
  }

  return (
    <div>
      <form onSubmit={handleClientFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder= 'Name'
          ref={(input) => {_name = input;}}/>
          <br/>
        <input
          type='text'
          id='address'
          placeholder='Address'
          ref={(input) => {_address = input;}}/>
          <br/>
        <input
          id='tel'
          placeholder='Phone'
          ref={(input) => {_tel = input;}}/>
          <br/>
          <input
            id='service'
            placeholder='Service Needed'
            ref={(input) => {_service = input;}}/>
            <br/>
            <input
              id='appointmentDate'
              placeholder='Appointment Date'
              ref={(input) => {_appointmentDate = input;}}/>
              <br/>
        <button type='submit' className="btn btn-success">Submit</button>
        <br/>
      </form>
    </div>
  );
}

ClientForm.propTypes = {
  onClientCreation: PropTypes.func
}

export default ClientForm;
