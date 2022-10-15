import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import reactDom from 'react-dom';
import { TouchableHighlight } from 'react-native-web';

/* INTRODUCTORY ANIMATION EVENT HANDLER
const intro = new Event('event');
//listen
elem.addEventListener('event', (e) => { }, false);
//dispatch
elem.dispatchEvent(intro);
*/

/* BUTTON FUNC + TEXT
      <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}> I am a button! </Text>
      </TouchableHighlight>
*/

export default function App() {
  return (
  <NavigationContainer>
    <View style={styles.container}>
      <Text>Welcome, Soldier.</Text>
      <StatusBar style="auto" />
    </View>
	</NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

