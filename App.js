import 'react-native-gesture-handler';
import React from 'react';
import { Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import toplogo from './assets/logo_top.png';
import bottomlogo from './assets/logo_bottom.png';
import Constants from "expo-constants"
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Appbar,
  Menu,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  Avatar, 
  Card, 
  Divider,
  IconButton,
  List,
  Button, 
  Title,
  Text,
  Paragraph,
  TouchableRipple,
  Provider as PaperProvider,
} from 'react-native-paper';

/*import * as rssParser from 'react-native-rss-parser';*/


import {AirAssaultScreen} from './AirAssaultHome.js';
import {Phase1Screen} from './AirAssaultHome.js';
import {Phase2Screen} from './AirAssaultHome.js';
import {PathfinderScreen} from './PathfinderHome.js';
import {RangerScreen} from './RangerHome.js';
//import {TestScreen} from './AirAssaultHome.js';

//version output
const version = Constants.manifest.version
console.log("Version:", version)

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationdark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
      "primary": "rgb(112, 93, 0)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(255, 225, 109)",
      "onPrimaryContainer": "rgb(34, 27, 0)",
      "secondary": "rgb(103, 94, 64)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(239, 226, 188)",
      "onSecondaryContainer": "rgb(33, 27, 4)",
      "tertiary": "rgb(68, 102, 78)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(198, 236, 205)",
      "onTertiaryContainer": "rgb(0, 33, 14)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(29, 27, 22)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(29, 27, 22)",
      "surfaceVariant": "rgb(234, 226, 207)",
      "onSurfaceVariant": "rgb(75, 71, 57)",
      "outline": "rgb(124, 119, 103)",
      "outlineVariant": "rgb(205, 198, 180)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(51, 48, 42)",
      "inverseOnSurface": "rgb(246, 240, 231)",
      "inversePrimary": "rgb(233, 196, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(248, 243, 242)",
        "level2": "rgb(244, 238, 235)",
        "level3": "rgb(239, 234, 227)",
        "level4": "rgb(238, 232, 224)",
        "level5": "rgb(235, 229, 219)"
      },
      "surfaceDisabled": "rgba(29, 27, 22, 0.12)",
      "onSurfaceDisabled": "rgba(29, 27, 22, 0.38)",
      "backdrop": "rgba(52, 48, 36, 0.4)"
  }
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
    colors: {
      "primary": "rgb(233, 196, 0)",
      "onPrimary": "rgb(58, 48, 0)",
      "primaryContainer": "rgb(84, 70, 0)",
      "onPrimaryContainer": "rgb(255, 225, 109)",
      "secondary": "rgb(210, 198, 161)",
      "onSecondary": "rgb(55, 48, 22)",
      "secondaryContainer": "rgb(78, 70, 42)",
      "onSecondaryContainer": "rgb(239, 226, 188)",
      "tertiary": "rgb(170, 208, 178)",
      "onTertiary": "rgb(21, 55, 34)",
      "tertiaryContainer": "rgb(45, 78, 55)",
      "onTertiaryContainer": "rgb(198, 236, 205)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(29, 27, 22)",
      "onBackground": "rgb(232, 226, 217)",
      "surface": "rgb(29, 27, 22)",
      "onSurface": "rgb(232, 226, 217)",
      "surfaceVariant": "rgb(75, 71, 57)",
      "onSurfaceVariant": "rgb(205, 198, 180)",
      "outline": "rgb(151, 144, 128)",
      "outlineVariant": "rgb(75, 71, 57)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(232, 226, 217)",
      "inverseOnSurface": "rgb(51, 48, 42)",
      "inversePrimary": "rgb(112, 93, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(39, 35, 21)",
        "level2": "rgb(45, 41, 20)",
        "level3": "rgb(51, 46, 20)",
        "level4": "rgb(54, 47, 19)",
        "level5": "rgb(58, 51, 19)"
      },
      "surfaceDisabled": "rgba(232, 226, 217, 0.12)",
      "onSurfaceDisabled": "rgba(232, 226, 217, 0.38)",
      "backdrop": "rgba(52, 48, 36, 0.4)"
  }
};

/*font stuff
import { useFonts } from 'expo-font';

const Home = () => {
  let [fontsLoaded] = useFonts ({
    'Arial-Black':  require('./assets/fontfam.ttf'),
  });
}
*/

//Navbar
function CustomNavigationBar({ navigation, back, route, isDarkMode, toggleDarkMode }) {
  const screen = route.name
  return (
    <Appbar.Header style={{backgroundColor: "#221f20", borderBottomWidth: 5, borderColor: "#ffcc01", height: 55, justifyContent: "space-around"}}>
      {screen == "Home" && <Appbar.Action icon="menu" style={{position: "absolute", left: 0, bottom: 0}} onPress={() => {}} color={"#FFFFFF"}/>}
      {back ? <Appbar.BackAction style={{position: "absolute", left: 0, bottom: 0}} onPress={navigation.goBack} color={"#FFFFFF"}/> : null}
      <Appbar.Action
        icon={isDarkMode ? 'white-balance-sunny' : 'brightness-2'}
        style={{ position: 'absolute', right: 0, bottom: 0 }}
        onPress={toggleDarkMode}
        color={'#FFFFFF'}
      />
      {screen == "Home" && <TouchableRipple
        onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas');}} 
        style={{
          height: 75,
          backgroundColor: "#221f20",
          borderColor: "#221f20",
          justifyContent: "flex-end",
          borderRadius: 0,
          borderBottomWidth: 32,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <Image source={require("./assets/AllBadgesClear.png")} style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: -20,
          width: 100,
          height: 45,
          resizeMode:"contain"
          }}/>
      </TouchableRipple>}
      {(screen == ("Air Assault Program") || screen == ("Air Assault Program: Phase I") || screen == ("Air Assault Program: Phase II")) && <TouchableRipple
        onPress={() => navigation.navigate('Home')}
        style={{
          height: 75,
          backgroundColor: "#221f20",
          borderColor: "#221f20",
          justifyContent: "flex-end",
          borderRadius: 0,
          borderBottomWidth: 32,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <Image source={require("./assets/AssaultBadgeClear.png")} style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: -20,
          width: 100,
          height: 45,
          resizeMode:"contain"
          }}/>
      </TouchableRipple>}
      {screen == "Pathfinder Program" && <TouchableRipple
        onPress={() => navigation.navigate('Home')}
        style={{
          height: 75,
          backgroundColor: "#221f20",
          borderColor: "#221f20",
          justifyContent: "flex-end",
          borderRadius: 0,
          borderBottomWidth: 32,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <Image source={require("./assets/PathBadgeClear.png")} style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: -20,
          width: 100,
          height: 45,
          resizeMode:"contain"
          }}/>
      </TouchableRipple>}
      {screen == "Ranger Program" && <TouchableRipple
        onPress={() => navigation.navigate('Home')}
        style={{
          height: 75,
          backgroundColor: "#221f20",
          borderColor: "#221f20",
          justifyContent: "flex-end",
          borderRadius: 0,
          borderBottomWidth: 32,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}>
        <Image source={require("./assets/RangerBadgeClear.png")} style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: -20,
          width: 100,
          height: 45,
          resizeMode:"contain"
          }}/>
      </TouchableRipple>}
    </Appbar.Header>
  );
} 

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  const screen = route.name
  return (
    <View>
      <StatusBar style="auto" translucent={true} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: -10}}>
          <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, marginBottom: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
            <Text style={{color:"#FFFFFF", fontSize: 20, top: 5}} variant='headlineLarge'>{screen}</Text>
          </View>
          <View style={styles.card}>
            <TouchableRipple
              onPress={() => navigation.navigate('Air Assault Program')}
              borderless={true}
              style={styles.cardBtn}
            >
              <Card mode='outlined'>
                <Image source={require("./assets/Assault1.png")}
                  style={{
                    width: 'auto',
                    height: 135,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
                <Card.Title
                  title="Air Assault Program"
                  titleVariant="titleLarge"
                  subtitle="&quot;The Ten Toughest Days in the Army&quot;"
                  right={(props) => <Image source={require("./assets/AssaultBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                />
              </Card>
            </TouchableRipple>
          </View>
          <View style = {{marginTop: 10}}></View>
          <View style={styles.card}>
            <TouchableRipple
              onPress={() => navigation.navigate('Pathfinder Program')}
              borderless={true}
              style={styles.cardBtn}
            >
              <Card mode='outlined'>
                <Image source={require("./assets/Path1.jpg")}
                  style={{
                    width: 'auto',
                    height: 135,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
                <Card.Title
                  title="Pathfinder Program"
                  titleVariant="titleLarge"
                  subtitle="&quot;First In, Last Out&quot;"
                  right={(props) => <Image source={require("./assets/PathBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                />
              </Card>
            </TouchableRipple>
          </View>
          <View style = {{marginTop: 10}}></View>
          <View style={styles.card}>
            <TouchableRipple
              onPress={() => navigation.navigate('Ranger Program')}
              borderless={true}
              style={styles.cardBtn}
            >
              <Card mode='outlined'>
                <Image source={require("./assets/Ranger1.png")}
                  style={{
                    width: 'auto',
                    height: 135,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
                <Card.Title
                  title="Ranger Program"
                  titleVariant="titleLarge"
                  subtitle="&quot;Rangers Lead the Way&quot;"
                  right={(props) => <Image source={require("./assets/RangerBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                />
              </Card>
            </TouchableRipple>
          </View>
          <View style={{marginTop: 10, marginBottom: 8}}>
            <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, marginBottom: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
              <Text style={{color:"#FFFFFF", fontSize: 20, top: 5}} variant='headlineLarge'>News</Text>
            </View>
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263877/us_africa_commands_exercise_justified_accord_2023_begins_in_kenya');}}
              title="US Africa Command's Exercise Justified Accord 2023 begins in Kenya"
              description='By Capt. Joe Legros · Feb 9, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/09/7f4f1fc4/size0-full.jpg'}} />}
            />
            <Divider />
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263876/all_domain_communications_focus_of_afcea_symposium');}}
              title='All-domain communications focus of AFCEA symposium'
              description='By Spc. Richard Carlisi · Feb 8, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/09/0194f7dd/size0-full.jpg'}} />}
            />
            <Divider />
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263834/resilience_intertwined_in_puerto_rico_guards_future_says_guard_chief');}}
              title="Resilience intertwined in Puerto Rico Guard's future, says Guard Chief"
              description='By Sgt. 1st Class Zach Sheely, National Guard Bureau · Feb 8, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/08/0e3cf8c4/size0-full.jpg'}} />}
            />
            <Divider />
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263789/secretary_of_the_army_discusses_modernization_efforts_during_scaap_visit');}}
              title="Secretary of the Army discusses modernization efforts during  SCAAP visit"
              description='By Matthew Wheaton · Feb 7, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/07/bcbd949c/size0-full.jpg'}} />}
            />
            <Divider />
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263781/ncaa_champion_sam_chelanga_finds_new_purpose_as_army_officer');}}
              title='NCAA champion Sam Chelanga finds new purpose as Army officer'
              description='By Alun Thomas · Feb 6, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/06/2fe87cf8/size0-full.jpg'}} />}
            />
            <Divider />
            <List.Item button onPress={() => {Linking.openURL('https://www.army.mil/article/263764/data_centric_exercise_showcases_joint_capabilities_lethality');}}
              title='Data-centric exercise showcases joint capabilities, lethality'
              description='By Spc. Osvaldo Fuentes · Feb 6, 2023'
              titleNumberOfLines={10}
              right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://api.army.mil/e2/c/images/2023/02/06/8cc05b8f/size0-full.jpg'}} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <PaperProvider theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
          }}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Air Assault Program' component={AirAssaultScreen}/>
          <Stack.Screen name='Air Assault Program: Phase I' component={Phase1Screen}/>
          <Stack.Screen name='Air Assault Program: Phase II' component={Phase2Screen}/>
          <Stack.Screen name='Pathfinder Program' component={PathfinderScreen}/>
          <Stack.Screen name='Ranger Program' component={RangerScreen}/>
          {/* <Stack.Screen name='Air Assault Program: Testing' component={TestScreen}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }

      const styles = StyleSheet.create({
        card: {
          marginTop: 0,
          justifyContent: 'center',
          marginHorizontal: 8,
        },
        cardBtn: {
          borderRadius: 10
        },
        container: {
          flex: 1,
          paddingLeft: 8,
          paddingRight: 8,
          marginHorizontal: 0,
        },
        scrollView: {
          marginHorizontal: 0,
        },
        newsImage: {
          borderWidth: 2,
          borderRadius: 8
        },
        rectangle: {
          height: 8,
          backgroundColor: '#ffcc01',
          position: 'relative', 
        },
      });

