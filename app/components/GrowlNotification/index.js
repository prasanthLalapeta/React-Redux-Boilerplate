/**
*
* GrowlNotification
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Wrapper, CloseIcon, OverallWrapper } from './styles';

class GrowlNotification extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    messages: [],
  };

  componentWillReceiveProps(nextProps) {
    const messages = [...this.state.messages];
    messages.push(nextProps.messages);
    this.setState({ messages });
    setTimeout(() => {
      const timedOut = [...this.state.messages];
      timedOut.shift();
      this.setState({ messages: timedOut });
    }, 4000);
  }

  close = (index) => {
    const messages = [...this.state.messages];
    messages.splice(index, 1);
    this.setState({ messages });
  }

  render() {
    return (
      <OverallWrapper>
        {this.state.messages.map((message, index) =>
          (<Wrapper key={index} type={message.type}>
            {message.text}
            <CloseIcon onClick={() => this.close(index)}><i className="fa fa-times" /></CloseIcon>
          </Wrapper>)
        )}
      </OverallWrapper>
    );
  }
}

GrowlNotification.propTypes = {
  messages: PropTypes.object,
};

GrowlNotification.defaultProps = {
  messages: {},
};


const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect,
)(GrowlNotification);
