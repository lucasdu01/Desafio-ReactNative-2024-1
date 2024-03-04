import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/rotas/routes';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="white" hidden={false} t/>
        <Routes/>
      </NavigationContainer>
    
  )
}
