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
        style={{ backgroundColor: '#212121' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Air Assault Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pathfinder Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Ranger Program</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>News</Text>
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
