import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';

import Home from '../pages/Home/indexHome';
import Contato from '../pages/Contato/indexContato';
import Membros from '../pages/Membros/indexMembros';
import Login from '../pages/Login/indexLogin';
import Gerenciamento from '../pages/Gerenciamento/index_Gerenciamento';
import Header from '../components/header';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

var home;

function TabNavigator (){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                tabBarStyle:{
                    backgroundColor: '#121212',
                    paddingBottom: 5,
                    paddingTop:5,
                },
                header: ({navigation}) => { home = () => {navigation.navigate("Home")}},
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Membros" 
                component={Membros} 
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Entypo name="users" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Contato" 
                component={Contato}
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Entypo name="phone" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Login" 
                component={Login}
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Entypo name="login" size={size} color={color}/>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default function StackNavigator(){
    return (
        <Stack.Navigator
            initialRouteName='Tab'
            screenOptions={{
                header: ({navigation}) => {return <Header home={home} navigate ={ (name, parameters) => {navigation.navigate(name, parameters)}}/>},
            }}
        >

            <Stack.Screen
                name="Tab"
                component={TabNavigator}
            />

            <Stack.Screen
                name="Gerenciamento"
                component={Gerenciamento}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

        </Stack.Navigator>
)}


