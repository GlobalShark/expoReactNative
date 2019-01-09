import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component {
    componentDidMount(){
        setTimeout(()=>{
            Actions.homescreen()
        },2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={["#5F0A87", "#A4508B"]}
                    style={{
                        position: 'absolute',
                        flex: 1,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: Dimensions.get('window').height,
                    }} >
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SplashScreen;