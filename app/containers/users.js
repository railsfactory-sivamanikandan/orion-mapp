import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import ContainerWithMenu from './ContainerWithMenu';
import { Navbar } from 'navbar-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  ListView,
  Image,
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Users extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      ds: ds,
    };

    this.loadUsers = this.loadUsers.bind(this);
  }
  render() {
    return (
      <ContainerWithMenu>
        <Navbar
            bgColor="#0b74c4"
            title={this.props.title}
            titleColor="white"
            right={{
                icon: "ios-menu",
                iconColor: "white",
                onPress: this.props.openSideMenu
            }}
        />
      <View style={styles.container}>
          <SearchBar
          lightTheme
          onChangeText={this.setSearchText.bind(this)}
          placeholder='Search...' />
          <List containerStyle={{marginTop: 0,flexDirection: 'row'}}>
              <ListView
                enableEmptySections={true}
                automaticallyAdjustContentInsets={ false }
                dataSource={this.state.ds}
                renderRow={this.renderRow}
              />
          </List>
        </View>
      </ContainerWithMenu>
    );
  }

  componentDidMount() {
    this.loadUsers('employees');
  }

  setSearchText(searchKey){
    if(searchKey.length >= 3){
      this.loadUsers('admins/search_contact', searchKey);
    } else{
      this.loadUsers('employees', );
    }
  }

  loadUsers(url, searchKey){
    this.props.fetchUsers(url, this.props.currentUser.access_token, searchKey).then((res) => {
      this.setState({ds: ds.cloneWithRows(this.usersList())})
    })
  }

  usersList(){
    return Object.keys(this.props.users).map(key => this.props.users[key])
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.firstname}
        subtitle={rowData.designation_name}
        avatar={require('../images/avatar.jpg')}
        onPress={()=>Actions.user_detail({id: rowData.id, title: rowData.firstname })}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(Users);
