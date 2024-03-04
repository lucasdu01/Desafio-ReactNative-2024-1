import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export function ModalEdit( { handleClose, handleEdit, nome, email, aniversario, cargo, id } ) {

    const [novoNome, setNovoNome] = React.useState(nome);
    const [novoEmail, setNovoEmail] = React.useState(email);
    const [novoAniversario, setNovoAniversario] = React.useState(aniversario);
    const [novoCargo, setNovoCargo] = React.useState(cargo);

    const editarMembro = (id) => {
        const editMembro = {
          name: novoNome, 
          email: novoEmail,
          aniversario: novoAniversario, 
          cargo: novoCargo,
        };
        
        handleEdit(editMembro, id);
      
      };
    return (
       <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex:9, }} onPress={ handleClose }></TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.textTitle}>Editar Membro</Text>
                <TextInput style={styles.campos} placeholder = {nome} value={novoNome} onChangeText={(text) => setNovoNome(text)}></TextInput>
                <TextInput style={styles.campos} placeholder = {email} value={novoEmail} onChangeText={(text) => setNovoEmail(text)}></TextInput>
                <TextInput style={styles.campos} placeholder = {aniversario} value={novoAniversario} onChangeText={(text) => setNovoAniversario(text)}></TextInput>
                <TextInput style={styles.campos} placeholder = {cargo} value={novoCargo} onChangeText={(text) => setNovoCargo(text)}></TextInput>

                <TouchableOpacity 
                    style={styles.btnEdit} 
                    onPress={ () => editarMembro(id)}
                >
                    <Text style={styles.textEdit}>Salvar</Text>
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

    btnEdit:{
        borderWidth: 1,
        backgroundColor: '#00ced1',
        color: 'black',
    },

    textEdit:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,  
        padding: 4,
    },

})