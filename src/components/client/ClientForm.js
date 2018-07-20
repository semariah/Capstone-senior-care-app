import React from 'react';
import PropTypes from 'prop-types'

function ClientForm(props){
  let _name = null;
  let _address = null;
  let _tel = null;
  let _service = null;

  function handleClientFormSubmission(event) {
    event.preventDefault();
    props.onClientCreation({name: _name.value, address: _address.value, tel: _tel.value, service: _service.value});
    _name.value = '';
    _address.value = '';
    _tel.value = '';
    _service.value = '';
  }

  return (
    <div>
      <form onSubmit={handleClientFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder= 'Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='address'
          placeholder='Address'
          ref={(input) => {_address = input;}}/>
        <input
          id='tel'
          placeholder='Phone'
          ref={(input) => {_tel = input;}}/>
          <input
            id='service'
            placeholder='Service Needed'
            ref={(input) => {_service = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

ClientForm.propTypes = {
  onClientCreation: PropTypes.func
}

export default ClientForm;
