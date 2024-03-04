import React from 'react';
import { Pressable, View, Text, StyleSheet, Image, Button } from 'react-native';




export default function Header({navigate, home}) {

    return (
        <View style={styles.container}>
             <Pressable
                onPress={home}>
                <Image source={require('../../assets/Logo_Code.png')}/>
            </Pressable>

            <Pressable
                onPress={()=>navigate("Login")}>
                <Image source={require('../../assets/icon_config.png')}/>
            </Pressable>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: '5%',
        width: '100%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#d3d3d3',           
    },
    btnHome: {
        backgroundColor: 'green',
    }
})