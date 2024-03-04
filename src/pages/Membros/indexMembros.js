import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Quadro from '../../components/Quadro';
const Att = require('../../../assets/icon-reload.png');

export default function Membros() {
    const [membros, setMembros] = useState()

    const fetchData = async () => {
        const fetchMembers = await fetch('http://192.168.0.9:3001/membros', {
            method: 'GET'
        }) 
        const data = await fetchMembers.json()
        setMembros(data);
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (       
         
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>Membros</Text>

            <View style={styles.divIconAtt}>
                <TouchableOpacity onPress={ () => fetchData() }>
                    <Image style={styles.iconAtt} source={Att} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                <Quadro membros={membros}/>
            </ScrollView> 
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

card: {
    alignItems: 'center',
    padding:'5%',
    width: '95%',
    height: '95%',
    backgroundColor: '#d3d3d3',
    borderRadius:10,
},

title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '5%',
},

divIconAtt: {
    width: '90%',
    marginBottom: 10,
},

content:{
    height: '30%',
    width: '90%',   
},








})