import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Settings } from './screens/settings'
import { Profile } from './screens/profile'
import { NavigationContainer } from '@react-navigation/native'

export type RootStackParams = {
  Profile: any;
  Settings: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Profile">
        <RootStack.Screen name="Settings" component={Settings} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
