import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ HomeScreen }
            options={
              {
                headerTitle: "Leandro Faria",
                headerStyle: {
                  backgroundColor: Platform.OS === 'ios' ? '#3c74d7': '#93bb3a',
                },
              }
            }
          />
          <Stack.Screen name="Season" component={ SeasonScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}