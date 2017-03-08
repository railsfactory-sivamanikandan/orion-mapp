import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Router } from 'react-native-router-flux';
import scenes from '../lib/scenes';
import { ActionCreators } from '../actions'
import Users from './users'

class AppContainer extends Component {
  render() {
    return <Router scenes={scenes} {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
