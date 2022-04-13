import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import splash from "./Screens/splash"
import Onboard from "./Screens/Onboard";


const Stack = createNativeStackNavigator();


const Rootstack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="splash"
            >
                <Stack.Screen name="splash" component={splash} />
                <Stack.Screen name="Onboard" component={Onboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rootstack;