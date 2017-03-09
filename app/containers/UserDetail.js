import React, { Component } from 'react';
import ReactNative from "react-native";
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Navbar } from 'navbar-native';
import { Actions } from 'react-native-router-flux';
import ContainerWithMenu from './ContainerWithMenu';

const {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} = ReactNative;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    marginTop: 10
  },
});

class UserDetail extends Component {
  constructor(){
    super()
    this.state =  {
      employee: ''
    }
  }

  render(){
    const user = this.user();
    if (!user) { return null }
    return(
      <ContainerWithMenu>
        <Navbar
            bgColor="#0b74c4"
            title={this.props.title}
            titleColor="white"
            left={{
                icon: "ios-arrow-back",
                iconColor: "white",
                label: "",
                onPress: Actions.pop,
                style:{color: 'white'},
            }}
            right={{
                icon: "ios-menu",
                iconColor: "white",
                onPress: this.props.openSideMenu
            }}
        />
      <View style={styles.container}>
          <View style={{marginLeft: 10,alignItems: 'center',marginBottom: 10}}>
            <Image source={require('../images/logo.png')} style={styles.photo} />
          </View>
          <View>
            <Text style={styles.text}>
              Emp Code: {user.emp_code}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Name: {user.firstname}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Designation:{user.designation_name}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              DOJ:{user.date_of_joining}
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => Communications.phonecall(user.phone_number, true)}>
              <Text style={styles.text}>
                Mobile:{user.phone_number}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ContainerWithMenu>
    )
  }

  user() {
    return this.props.users[this.props.id] || null;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(UserDetail);
