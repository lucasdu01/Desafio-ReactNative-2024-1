import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.cards}>
            
                <View style={styles.card1}>
                    <Text style={styles.title}>DuTec</Text>
                    <Text>Bem vindo a DuTec, o melhor e-commerce de computadores e acessórios da região. Corra para garantir as melhores ofertas e preços da região!</Text>
                </View>

                <View style={styles.card2}>
                    <Text style={styles.title}>Ofertas</Text>

                    <View style={styles.listaOfertas}>

                                    {/* Oferta1 */}
                        <View style={styles.oferta}>
                            <Image source={require('../../../assets/oferta1.png')}/>
                            <View style={styles.descricaoOferta}>
                                <Text> - Placa Mãe Asus TUF GAMING</Text>
                                <Text> - A520M-PLUS, AMD AM4</Text>
                                <Text> - 10x de R$ 68,00 </Text>
                                <Text> - À vista por R$ 540,00</Text>
                            </View>
                        </View>    

                                    {/* Oferta2 */}
                        <View style={styles.oferta}>
                            <Image source={require('../../../assets/oferta2.png')}/>
                            <View style={styles.descraicaoOferta}>
                                <Text> - Placa de Vídeo MSI Geforce</Text>
                                <Text> - RTX 4060 Ti</Text>
                                <Text> - 10x de R$ 330,00 </Text>
                                <Text> - À vista por R$ 2.799,00</Text>
                            </View>
                        </View>

                                    {/* Oferta3 */}
                        <View style={styles.oferta}>
                            <Image source={require('../../../assets/oferta3.png')}/>
                            <View style={styles.descricaoOferta}>
                                <Text> - PC Gamer AMD</Text>
                                <Text> - Ryzen 5 5600, 16GB, RTX 3060</Text>
                                <Text> - 12x de R$ 400,00</Text>
                                <Text> - À vista por R$ 4.200,00</Text>
                            </View>
                        </View>

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
    },

    cards: {
        width: '95%',
        height: '95%',
    },

    card1: {
        alignItems: 'center',
        padding:'2%',
        backgroundColor: '#d3d3d3',
        borderRadius:10,
    },

    card2: {
        alignItems: 'center',
        marginTop: '2%',
        padding:'2%',
        backgroundColor: '#d3d3d3',
        borderRadius:10,
        
      
    },

    listaOfertas: {
        marginTop: "10%",
        width: "100%",
        alignItems: 'flex-start',
    },

    oferta: {
        flexDirection: "row",
        margin: "2%",
        alignItems: "center"
    },
})