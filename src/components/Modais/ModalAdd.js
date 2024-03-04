import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export function ModalAdd( { handleClose, handleCreate }) {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [aniversario, setAniversario] = React.useState('');
    const [cargo, setCargo] = React.useState('');

    const criarMembro = () => {
        const novoMembro = {
          name: nome, // Substitua por sua variável de estado correspondente
          email: email,
          aniversario: aniversario, // Substitua por sua variável de estado correspondente
          cargo: cargo,
        };
    
        handleCreate(novoMembro);
      };

    return (
       <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex:9, }} onPress={ handleClose }></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textTitle}>Adicionar Membro</Text>
                <TextInput style={styles.campos} placeholder='Nome:' value={nome} onChangeText={(text) => setNome(text)}></TextInput>
                <TextInput style={styles.campos} placeholder='E-mail:' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={styles.campos} placeholder='Data de Aniversário:' value={aniversario} onChangeText={(text) => setAniversario(text)}></TextInput>
                <TextInput style={styles.campos} placeholder='Cargo:' value={cargo} onChangeText={(text) => setCargo(text)}></TextInput>

                <TouchableOpacity 
                    style={styles.btnSave} 
                    onPress={ criarMembro }
                >
                    <Text style={styles.textSave}>Salvar</Text>
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
    },

    btnSave:{
        borderWidth: 1,
        backgroundColor: '#00ced1',
        color: 'black',
        borderRadius: 5,    
    },

    textSave:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
       padding: 4,
    },

    
    
})