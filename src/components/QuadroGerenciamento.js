import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

import { ModalView} from '../components/Modais/ModalView';
import {ModalEdit} from '../components/Modais/ModalEdit';
import {ModalDelete} from '../components/Modais/ModalDelete';

const Ver = require('../../assets/icon-ver1.png');
const Edit = require('../../assets/icon-editar1.png');
const Delete = require('../../assets/icon-delete1.png');


const Linha = ({id, nome, email, aniversario, cargo, handleAtt}) =>{
  const [visibleModalView, setVisibleModalView] = useState(false)
  const [visibleModalEdit, setVisibleModalEdit] = useState(false)
  const [visibleModalDelete, setVisibleModalDelete] = useState(false)

  const fetchDelete = async (id) => {
    const response = await fetch(`http://192.168.0.9:3001/membros/${id}`, {
      method: 'DELETE',
    })
    

    setVisibleModalDelete(false);
    handleAtt();
}

const fetchUpdate = async (editMembro, id) => {
  const response = await fetch(`http://192.168.0.9:3001/membros/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editMembro),
  });

  setVisibleModalEdit(false);
  handleAtt();

}
  
  return(
      <View style={styles.quadroRow}>
        <Text style={styles.quadroCell}>{nome}</Text>
        <Text style={styles.quadroCell}>{email}</Text>
        <View style={styles.quadroActions} >
          <TouchableOpacity onPress={() => setVisibleModalView(true)}>
            <Image style={styles.icon} source={Ver} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisibleModalEdit(true)}>
            <Image style={styles.icon} source={Edit} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisibleModalDelete(true)}>
            <Image style={styles.icon} source={Delete} />
          </TouchableOpacity>
        </View>

        <Modal
        visible={visibleModalView}
        transparent={true}
        onRequestClose={ () => setVisibleModalView(false) }
        >
          <ModalView 
            nome={nome}
            email={email}
            aniversario={aniversario}
            cargo={cargo}
            handleClose={ () => setVisibleModalView(false) }
          />
        </Modal>

        <Modal
        visible={visibleModalEdit}
        transparent={true}
        onRequestClose={ () => setVisibleModalEdit(false) }
        >
          <ModalEdit
            id={id}
            nome={nome}
            email={email}
            aniversario={aniversario}
            cargo={cargo}
            handleClose={ () => setVisibleModalEdit(false)}
            handleEdit={ (editMembro, id) =>fetchUpdate(editMembro, id) }
          />

        </Modal>

        <Modal
        visible={visibleModalDelete}
        transparent={true}
        onRequestClose={ () => setVisibleModalDelete(false) }
        >
          <ModalDelete
           id={id}
           nome={nome}
           handleClose={ () => setVisibleModalDelete(false) }
           handleDelete={ (id) =>fetchDelete(id) }
          />
        </Modal>

      </View>
  )
}


const QuadroGerenciamento = ({membros=[], handleAtt}) => {
     
  return (
    <View style={styles.quadroContainer}>
      <ScrollView>

        {/* Cabeçalho do Quadro */}
        <View style={styles.quadroHeader}>
          <Text style={styles.quadroHeaderText}>Nome</Text>
          <Text style={styles.quadroHeaderText}>E-mail</Text>
          <Text style={styles.quadroHeaderText}>Ações</Text>
        </View>

        {/* Linha do Quadro */}
        {   
        membros.map((el, id)=>{
          return <Linha 
            key={id}
            id={el.id} 
            nome={el.name} 
            email={el.email} 
            aniversario={el.aniversario} 
            cargo={el.cargo}
            handleAtt={handleAtt} 
            />
        })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  quadroContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    marginTop: 10,
  },
  quadroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  quadroHeaderText: {
    fontWeight: 'bold',
  },
  quadroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    alignItems: 'center'
  },
  quadroCell: {
    flex: 1,
    margin: 0,
  },
  quadroActions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 5,

  },

});

export default QuadroGerenciamento;
