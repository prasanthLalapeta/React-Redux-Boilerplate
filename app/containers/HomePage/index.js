/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { bindActionCreators, compose } from 'redux';
// import { getPageLoadStatus } from 'orm/selectors';
// import { NavLink } from 'react-router-dom';
import { Wrapper } from './styles';
import * as homepageActions from './actions';
import saga from './saga';
import reducer from './reducer';
import { getPageLoadStatus } from './selectors';

class HomePage extends React.PureComponent {   // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickEvents = this.handleClickEvents.bind(this);
  }

  componentWillMount() {
    this.props.actions.allHomepageActions.fetchApi();
  }

  handleClickEvents(event) {
    if (event && event.target.closest('.clickBtn')) {
      const targetButton = event.target
        .closest('.clickBtn')
        .getAttribute('data-modal');
      event.preventDefault();
      switch (targetButton) {
        case 'container':
          console.log('clicked container');
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { pageLoadingStatus } = this.props;
    return (
      <Wrapper>
        {pageLoadingStatus ? 'loading...' : 'React-Redux Boilerplate'}
      </Wrapper>
    );
  }
}

HomePage.defaultProps = {
  pageLoadingStatus: false,
};

HomePage.propTypes = {
  pageLoadingStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  pageLoadingStatus: getPageLoadStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    allHomepageActions: bindActionCreators(homepageActions, dispatch),
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const homepageSaga = injectSaga({ key: 'homepage', saga });

const homepageReducer = injectReducer({ key: 'homepage', reducer });

export default compose(
  homepageReducer,
  homepageSaga,
  withConnect
)(HomePage);
