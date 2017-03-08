import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Login from '../containers/Login';
import Users from '../containers/users';
import UserDetail from '../containers/UserDetail';

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" title="Login" component={Login} initial={true}/>
      <Scene key="users" title="Employees" component={Users} initial={false}/>
      <Scene key="user_detail" title="Employees" component={UserDetail} initial={false}/>
    </Scene>
);

export default scenes;
