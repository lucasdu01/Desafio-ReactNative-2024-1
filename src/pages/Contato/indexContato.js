import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Contato() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Contato</Text>
                <Text>Caso tenha algum problema ou dúvida entre em contato conosco! Estaremos à disposição.</Text>
                <View style={styles.content}>

                    <View  style={styles.links}>
                        <Text> - Links:</Text>
                        <View style={styles.iconsLinks}>
                            <Image style={styles.iconSite} source={require('../../../assets/Icon_site.png')}/>
                            <Image style={styles.iconsImg}source={require('../../../assets/Icon_insta.png')}/>
                            <Image style={styles.iconsImg} source={require('../../../assets/Icon_WhatsApp.png')}/>
                        </View>
                    </View>

                    <View style={styles.telefone}>
                        <Text>- Telefones:</Text>
                        <Text>  (32)99999-9999</Text>
                        <Text>  (32)99999-9999</Text>
                    </View>

                    <View  style={styles.endereco}>
                        <Text>- Endereço:</Text>
                        <Text>  Rua A, 892 - São Pedro</Text>
                        <Text>  Juiz de Fora(MG)</Text>
                    </View>

                    <View  style={styles.email}>
                        <Text>- E-mail:</Text>
                        <Text>  contato@dutec.com.br</Text>
                    </View>


                </View>
            </View>
        </View>
    );
}

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
        width: "100%",
       margin: "10%" ,     
    },

    iconsLinks: {
        flexDirection: 'row',
    },

    iconSite: {
        marginLeft: '4%',
        margin: '1%',
        width: 25,
        height: 25,
    },

    iconsImg:{
        margin: '2%',
        width: 20,
        height: 20,
    },

   telefone:{
        marginTop: '10%',
   },

   endereco:{
        marginTop: '10%',
   },

   email:{
        marginTop:'10%',
   }
    

  

})