import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/users';

const {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Text } = ReactNative;

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#0b74c4',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class SideMenuComponent extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('../images/avatar.jpg')}/>
          <Text style={styles.name}>{this.props.currentUser.username}</Text>
        </View>
        <Text
          onPress={this.logout.bind(this)}
          style={styles.item}>
          Logout
        </Text>
      </ScrollView>
    )
  }

  logout(){
    this.props.userLogout()
    Actions.login();
  }
}

function mapStateToProps(state) {
  return{
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userLogout,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
