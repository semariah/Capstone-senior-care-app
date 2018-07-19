import React from 'react';
import PropTypes from 'prop-types'
import ClientForm from './ClientForm'
import ConfirmationQuestions from './ConfirmationQuestions';


class ClientControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this)
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});

  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <ClientForm onClientCreation={this.props.onClientCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

ClientControl.propTypes = {
  onClientCreation: PropTypes.func
}

export default ClientControl;
