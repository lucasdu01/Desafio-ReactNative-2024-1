import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal,  } from 'react-native';

import QuadroGerenciamento from '../../components/QuadroGerenciamento';
import { ModalAdd } from '../../components/Modais/ModalAdd';

const Add = require('../../../assets/icon-add.png');

export default function Gerenciamento() {

  const [visibleModalAdd, setVisibleModalAdd] = useState(false)
  
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

  const fetchCreate = async (novoMembro) => {
      const response = await fetch('http://192.168.0.9:3001/membros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoMembro),
      });

      fetchData();

      setVisibleModalAdd(false);
    
  };

  return (        
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Gerenciamento</Text>

        <View style={styles.divIconAdd}>
          <TouchableOpacity onPress={ () => setVisibleModalAdd(true) }>
            <Image style={styles.iconAdd} source={Add} />
          </TouchableOpacity>
        </View>
        
        <Modal
          visible={visibleModalAdd}
          transparent={true}
          onRequestClose={ () => setVisibleModalAdd(false) }
        >
          <ModalAdd
            handleClose={ () => setVisibleModalAdd(false) }
            handleCreate={(novoMembro) => fetchCreate(novoMembro)}
          />
        </Modal>

        <ScrollView style={styles.content}>  
          <QuadroGerenciamento 
            membros={membros}
            handleAtt={() => fetchData()}
            
            />
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
    padding: '5%',
    width: '95%',
    height: '95%',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '5%',
  },

  divIconAdd: {
    width: '90%',
  },

  iconAdd: {    
    width: 25,
    height: 25,
  },

  content: {
    height: '30%',
    width: '90%',   
  },
 

});
