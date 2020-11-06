import * as React from 'react';
import { Text, View, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, color:'dodgerblue', fontWeight:'bold', fontStyle:'italic'}}>Home!</Text>
    </View>
  );
}
function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, color:'dodgerblue', fontWeight:'bold', fontStyle:'italic'}}>Services!</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, color:'dodgerblue', fontWeight:'bold', fontStyle:'italic'}}>About!</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, color:'dodgerblue', fontWeight:'bold', fontStyle:'italic'}}>Contact!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
}
)