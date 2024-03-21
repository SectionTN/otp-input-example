/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import COLORS from './utils/colors.ts';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VanillaOTP from './components/VanillaOTP.tsx';
import RefOTP from './components/RefOTP.tsx';
import AdvancedOTP from "./components/AdvancedOTP.tsx";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Vanilla">
          <Stack.Screen name="Vanilla" component={VanillaOTP} />
          <Stack.Screen name="Ref" component={RefOTP} />
          <Stack.Screen name="Advanced" component={AdvancedOTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
