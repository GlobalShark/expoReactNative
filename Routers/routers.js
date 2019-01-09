import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import SplashScreenfrom from '../Components/splashScreen/splashScreen';
import HomeScreen from '../Components/homeScreen/homeScreen';

class ScreenRouter extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="splashscreen"
                        component={SplashScreenfrom}
                        hideNavBar={true}
                        initial
                    />
                    <Scene key="homescreen"
                        component={HomeScreen}
                        hideNavBar={true}
                        type={ActionConst.RESET} 
                    />
                </Scene>
            </Router>
        )
    }
}
export default ScreenRouter;