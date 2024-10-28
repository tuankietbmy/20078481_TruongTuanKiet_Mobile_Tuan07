import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './Screen/Screen01';
import Screen02 from './Screen/Screen02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01">
          <Stack.Screen 
            name="Screen01" 
            component={Screen01} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Screen02" 
            component={Screen02} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // Đảm bảo không có padding ở trên
    paddingTop: 0, 
  },
});
