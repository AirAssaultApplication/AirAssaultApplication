import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import toplogo from './assets/logo_top.png';
import bottomlogo from './assets/logo_bottom.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {DetailsScreen} from './PathFinderHome.js';

/*font stuff
import { useFonts } from "expo-font";

const Home = () => {
  let [fontsLoaded] = useFonts ({
    "Arial-Black":  require("./assets/fontfam.ttf"),
  });
}
*/

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={toplogo} style={styles.logo} /> 
      <TouchableOpacity /*BUTTON FUNC.*/
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={styles.homebutton}>Air Assault Program</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={styles.homebutton}>Pathfinder Program</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={styles.homebutton}>Ranger Program</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('To be implemented!')}
        style={{ backgroundColor: '#212121' }}>
        <Text style={styles.homebutton}>News</Text>
      </TouchableOpacity>

      <Image source={bottomlogo} style={styles.logo} /> 
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

    );
  }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#212121',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo: {
          width: '100%',
          height: 200,
          resizeMode: 'contain',
        },
        homebutton: {
          fontSize: 20,
          color: '#fff',
          borderColor: '#EDB402',
          borderWidth: 2,
          backgroundColor: '#2B2B2B',
          borderRadius: 4,
          width: 300,
          height: 100,
          textAlign: 'center',
          textAlignVertical: 'center',
        },
      });

