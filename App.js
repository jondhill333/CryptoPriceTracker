import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { Provider } from 'react-redux';
import Store from './src/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CryptoContainer} from './src/components';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Prices"
        onPress={() => navigation.navigate('coinPrice')}
      />
    </View>
  );
}

function App() {
    return (
      <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="coinPrice"
            component={CryptoContainer}
          />

            {/* <Header /> */}
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
}

export default App;



