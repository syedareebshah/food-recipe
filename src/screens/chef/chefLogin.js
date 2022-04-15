import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Image, } from 'react-native';
import { Dimensions } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';

export default function ChefLogin() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
        <View style={styles.container}>

            <ScrollView >

                <View style={styles.imgStyle}>
                    <Image style={{ height: imageHeight, width: imageWidth, resizeMode: 'contain' }} source={require('../../assets/loginScreen.jpg')} />
                </View>

                <View style={styles.mdView}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>Login</Text>

                    <Input
                        placeholder='Enter Email'

                        leftIcon={{ type: 'font-awesome', name: 'inbox' }}
                    />
                    <Input
                        placeholder='Enter Email'

                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ textAlign: 'center', color: 'blue' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.endView}>
                    <TouchableOpacity>
                    <Text style={{ textAlign: 'center', color: 'blue' }}>Dont have account? SinUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center', color: 'red',marginTop:10, }}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        alignSelf: 'center',
        width: 300,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'blue'
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 350,
        width: 400,
    },
    imgStyle: {
        marginTop: -55,
        flex: 1,
        flexDirection: 'column'
        // padding: 20,

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom:30
        // padding: 10

    },

    mdView: {
        marginTop: 40,
        flex: 6,
        padding: 40,

    },
    endView: {
        marginTop: 40,
        flex: 4,

    }
});
