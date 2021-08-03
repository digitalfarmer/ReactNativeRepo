/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView, Text, useColorScheme } from "react-native";
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
      <ScrollView>
        <Text>O-Jol Apps </Text>
      </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
