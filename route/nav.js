import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    MainScreen,
    MovieScreen,
    Splash
} from '../src/screens'

import Screens from './screens'
import { strings } from '../src/res';

const Stack = createNativeStackNavigator();


const screenParams = {
    navigator: {
        // initialRouteName: Screens.Splash,
        screenOptions: {
            headerTitleAlign: 'center',
        },

    },
    Splash: {
        name: Screens.Splash,
        component: Splash,
        options: { headerShown: false },
    },
    MainScreen: {
        name: Screens.MainScreen,
        component: MainScreen,
        options:{
            title:strings.mainScreenTitle
        }
    },
    MovieScreen: {
        name: Screens.MovieScreen,
        component: MovieScreen,
    },

}

const nav = (props) => {

    return (
        <NavigationContainer >
            <Stack.Navigator {...screenParams.navigator}>
                <Stack.Screen {...screenParams.Splash} />
                <Stack.Screen {...screenParams.MainScreen} />
                <Stack.Screen {...screenParams.MovieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default nav;