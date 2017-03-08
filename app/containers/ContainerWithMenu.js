import React, { Component } from 'react';
import { Container, Navbar } from 'navbar-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenu from './SideMenuContainer';
import { openSideMenu, closeSideMenu } from '../actions/sideMenuActions';

class ContainerWithMenu extends Component {
  render() {
    switch (true) {
      case (!!this.props.currentUser):
          return (
              <SideMenu
                  onOpen={this.props.openSideMenu}
                  onClose={this.props.closeSideMenu}
              >
                  {this._renderContainer()}
              </SideMenu>
          );

      default:
          return this._renderContainer();
    }
  }

  _renderContainer(){
    return(
      <Container type="list" data={this.props.data} style={{flex: 1,backgroundColor: 'white'}}>
        {this.props.children}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return{
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openSideMenu,
    closeSideMenu,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerWithMenu);
