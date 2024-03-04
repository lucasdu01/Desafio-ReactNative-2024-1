import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ModalDelete( { handleClose, handleDelete, nome,id}) {

    

    return (
       <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex:9, }} onPress={ handleClose }></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textTitle}>Deletar Membro</Text>
                <Text style={styles.textMsg}>{nome}</Text>
                
                <View style={styles.botoes}>

                    <TouchableOpacity 
                        style={styles.btnCancel} 
                        onPress={ handleClose }
                    >
                        <Text style={styles.textCancel}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btnDelete} 
                        onPress={ () => handleDelete(id)}
                    >
                        <Text style={styles.textDelete}>Deletar</Text>
                    </TouchableOpacity>

                    
                </View>
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

    textMsg: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 20,
    },

    botoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 15,

    },

    btnCancel:{
        borderWidth: 1,
        backgroundColor: '#FFF',
        width: '45%',

        borderRadius: 5,
        marginLeft: "1%",
    },

    btnDelete:{
        borderWidth: 1,
        backgroundColor: '#FFF',
        width: '45%',

        borderRadius: 5,
        marginRight: "1%",
    },

    textCancel:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 4,
        color: '#00ced1',
    },

    textDelete:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 4,
        color: '#FF0000',
    },

    



    
})