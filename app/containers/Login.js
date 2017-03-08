import React, { Component } from "react";
import ReactNative from "react-native";
import Tcomb from "tcomb-form-native";
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";
import LoadingSpinnerOverlay from 'react-native-smart-loading-spinner-overlay'
import { Navbar } from 'navbar-native';
import ContainerWithMenu from "./ContainerWithMenu";

const {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 64,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#0b74c4',
    borderColor: '#0b74c4',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

const Form = Tcomb.form.Form;

// here we are: define your domain model
var Person = Tcomb.struct({
  username: Tcomb.String,
  password: Tcomb.String,
  // rememberMe: Tcomb.Boolean
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

class Login extends Component {
  constructor(props){
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  render(){
    return (
      <ContainerWithMenu>
        <Navbar title={"Login"} bgColor="#0b74c4" />
        <View style={styles.container}>
          <LoadingSpinnerOverlay
            ref={ component => this._partModalLoadingSpinnerOverLay = component }
            modal={true}
            marginTop={64}/>
          <Image source={require('../images/logo.png')}/>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </ContainerWithMenu>
    );
  }
  onSubmit(){
    let self = this;
    this._partModalLoadingSpinnerOverLay.show()
    this.props.userLogin(this.refs.form.getValue()).then((res) => {
      self._partModalLoadingSpinnerOverLay.hide()
      if(res){
        Actions.users();
      } else{
        Alert.alert('Warning',"Username or Password invalid");
      }
    })
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}
export default connect(mapStateToProps)(Login);
