import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

const Infos =({nome, email, aniversario, cargo}) => {
  return (
    <View style={styles.container}>

      {/* Linha Nome */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text>Nome</Text>
        </View>
        <View style={styles.column}>
          <Text>{nome}</Text>
        </View>
      </View>

      {/* Linha Email */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text>E-mail</Text>
        </View>
        <View style={styles.column}>
          <Text>{email}</Text>
        </View>
      </View>

      {/* Linha Aniversario */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text>Aniversário</Text>
        </View>
        <View style={styles.column}>
          <Text>{aniversario}</Text>
        </View>
      </View>

      {/* Linha Cargo*/}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text>Cargo</Text>
        </View>
        <View style={styles.column}>
          <Text>{cargo}</Text>
        </View>
      </View>
    </View>
  );

}

const Membro = ({membros=[]}) => {

  return <ScrollView>
      {
      membros.map((el,id)=>{
        return <Infos key={id} nome={el.name} email={el.email} aniversario={el.aniversario} cargo={el.cargo}/>
      })
      }
  </ScrollView>
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    width: 150, 
    height: 40, 
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
});

export default Membro;
