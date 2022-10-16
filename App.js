import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import toplogo from './assets/logo_top.png';
import bottomlogo from './assets/logo_bottom.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={toplogo} style={styles.logo} /> 
      <TouchableOpacity /*BUTTON FUNC.*/
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Air Assault Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Pathfinder Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Ranger Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: 'yellow' }}>
        <Text style={{ fontSize: 20, color: '#000' }}>News</Text>
      </TouchableOpacity>
      <Image source={bottomlogo} style={styles.logo} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height:200
  },
});
