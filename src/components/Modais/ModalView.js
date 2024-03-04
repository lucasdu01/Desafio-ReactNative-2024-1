import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export function ModalView( { handleClose, nome, email, aniversario, cargo } ) {
    return (
       <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex:9, }} onPress={ handleClose }></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textTitle}>Visualizar Membro</Text>
                <Text style={styles.campos}> {nome} </Text>
                <Text style={styles.campos}>{ email }</Text>
                <Text style={styles.campos}>{ aniversario }</Text>
                <Text style={styles.campos}>{ cargo }</Text>

                <TouchableOpacity 
                    style={styles.btnClose} 
                    onPress={ handleClose }
                >
                    <Text style={styles.textClose}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    content:{
        marginVertical: 20,
        marginLeft: 12,
        marginRight: 12,

        zIndex: 99,
        
        backgroundColor: "#d3d3d3",
        borderRadius: 6,
        marginTop: 8,
        
        padding: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2',

        shadowColor: 'rgba(0,0,0, 0.3',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },

    textTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,  
        padding: 4,
        marginBottom: 10,
    },

    campos:{
        backgroundColor: '#FFF',
        marginBottom: 5,
        height: 30,
        padding: 5,
    },

    btnClose:{
        borderWidth: 1,
        backgroundColor: '#FFF',
        color: 'black',
    },

    textClose:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,  
        padding: 4,
        color:'#00ced1'
    },

    
    
})