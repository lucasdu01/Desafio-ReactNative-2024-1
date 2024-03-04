import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Entrar = () => {
  const navigation = useNavigation();

  const handleEntrarPress = () => {
    navigation.navigate('Gerenciamento');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
      <Text>Entrar</Text>
    </TouchableOpacity>
  );
};

export default function Login() {
  return (        
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.content}>
          <View style={styles.cardlogin}>
            <View style={styles.campos}>
              <Image source={require('../../../assets/icon_email.png')}/>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
              />
            </View>

            <View style={styles.campos}>
              <Image source={require('../../../assets/icon_senha.png')}/>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Digite sua senha"
              />
            </View>

            <Entrar/>
            
          </View>
        </View> 
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'black',        
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '5%',
    },

    card: {
        alignItems: 'center',
        padding:'5%',
        width: '95%',
        height: '95%',
        backgroundColor: '#d3d3d3',
        borderRadius:10,
    },

    content:{
        flex: 1,
        width: '100%',
        justifyContent: "center",
        
    },

    cardlogin: {
        minHeight: 200,
        width: '100%',
        height: '50%',
        backgroundColor: '#606060',
        borderRadius:10,
        alignItems: "center",
        justifyContent: 'center',
    },

    campos: {
        flexDirection: 'row',
        margin: 10,
    },

    input:{
        padding: 5,
        backgroundColor: '#d3d3d3',
        marginLeft: 5,
        width: '80%',
        borderRadius:10,
    },

    button:{
        marginTop: 20,
        backgroundColor: '#d3d3d3',
        width: '50%',
        height: '22%',
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center",

    },
 })

