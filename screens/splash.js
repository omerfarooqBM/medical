import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import heart from '../assets/images/heart.png'


function Splash() {
    return (
        <>
            <View style={styles.containerss} >

                <View style={styles.containers}>
                    <Image source={heart} style={{ width: 120, height: 100 }} />
                </View>
                <View style={styles.container}>
                    <Text style={{ color: '#fff', fontSize: 40 }}>Medical App</Text>
                    <StatusBar style="auto" />

                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,

        alignItems: 'center',


    },
    containers: {
        flex: 0.8,

        alignItems: 'center',
        justifyContent: 'center',

    },
    containerss: {
        flex: 1,
        backgroundColor: '#2A2AC0',



    }
});
export default Splash;