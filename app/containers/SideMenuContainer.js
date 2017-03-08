import React from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const { Dimensions } = ReactNative;
import SideMenuComponent from './SideMenuComponent';

import { SideMenu } from 'react-native-elements';

const deviceScreen = Dimensions.get('window');

function mapStateToProps(state, props){
    return {
        menu: <SideMenuComponent/>,
        menuPosition: "right",
        disableGestures: false,
        isOpen: state.sideMenu,
        onChange: (isOpen) => {
            if (isOpen) {
                props.onOpen();
            } else {
                props.onClose();
            }
        },
        openMenuOffset: deviceScreen.width - 50
    };
};

export default connect(mapStateToProps)(SideMenu);
