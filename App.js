import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Animated, Platform, Appearance, ImageBackground, Linking, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as rssParser from 'react-native-rss-parser';
import Constants from "expo-constants"
import * as SplashScreen from 'expo-splash-screen';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  Appbar,
  BottomNavigation,
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
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';

/*import * as rssParser from 'react-native-rss-parser';*/


import {AirAssaultScreen} from './AirAssaultHome.js';
import {Phase1Screen} from './AirAssaultHome.js';
import {Phase2Screen} from './AirAssaultHome.js';
import {PathfinderScreen} from './PathfinderHome.js';
import {RangerScreen} from './RangerHome.js';
//import {TestScreen} from './AirAssaultHome.js';

//version output
const version = Constants.manifest.version
console.log("Version: ", version)

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



//Navbar
function CustomNavigationBar({ navigation, back, route, isDarkMode, toggleDarkMode }) {
  const screen = route.name
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  return (
    <Appbar.Header style={{backgroundColor: "#221f20", borderBottomWidth: 5, borderColor: "#ffcc01", height: 55, justifyContent: "space-around"}}>
      <View style={{position: "absolute", left: 0, justifyContent: "center"}}>
        {(screen == ("Home") || screen == ("News") || screen == ("About")) &&
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="menu" onPress={openMenu} color={"#FFFFFF"} />}
          style={{position: "absolute", marginTop: 48, left: 0}}
        >
          <Image source={require("./assets/AirbornePatch.png")} style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          width: 100,
          height: 100,
          resizeMode:"contain"
          }}/>
          <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
          <Menu.Item onPress={() => { navigation.navigate('HomeScreen'); closeMenu(); }} title="Home" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('NewsScreen'); closeMenu(); }} title="News" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('AboutScreen'); closeMenu(); }} title="About" />
          <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Air Assault Program'); closeMenu(); }} title="Air Assault" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Pathfinder Program'); closeMenu(); }} title="Pathfinder" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Ranger Program'); closeMenu(); }} title="Ranger" />
          <Divider style= {{backgroundColor: "#ffcc01", height: 3, marginBottom: -10}}></Divider>
        </Menu>}
      </View>
      {(screen != ("Home") && screen != ("About") && screen != ("News")) && <Appbar.BackAction 
        style={{position: "absolute", left: 0, bottom: 0}} onPress={navigation.goBack} color={"#FFFFFF"}/>
      }
      <Appbar.Action
        icon={isDarkMode ? 'brightness-2' : 'white-balance-sunny'}
        style={{ position: 'absolute', right: 0, bottom: 0 }}
        onPress={toggleDarkMode}
        color={'#FFFFFF'}
      />
      {(screen == ("Home") || screen == ("News") || screen == ("About")) && <TouchableRipple
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
  const screenHeight = Dimensions.get('screen').height - 50;
  return (
    <View style={{justifyContent: "center", flex: 1}}>
        <View style={{marginTop: 10}}>
          <View style={styles.card}>
            <TouchableRipple
              onPress={() => navigation.navigate('Air Assault Program')}
              borderless={true}
              style={styles.cardBtn}
            >
              <Card>
              <Image source={require("./assets/Assault1.png")}
                  style={{
                    width: 'auto',
                    height: screenHeight*0.15,
                    borderTopLeftRadius: 12,
                    marginBottom: -1,
                    borderTopRightRadius: 12
                  }}
                />
                <ImageBackground
                  source={require("./assets/Assault1.png")}
                  style={{
                    width: 'auto',
                    height: 70,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                  blurRadius={50} // Set the blur radius to 5
                >
                  <Card.Title
                  title="Air Assault Program"
                  titleVariant="titleLarge"
                  titleStyle={{color: "#221f20"}}
                  subtitleStyle={{color: "#221f20"}}
                  subtitle="&quot;The Ten Toughest Days in the Army&quot;"
                  right={(props) => <Image source={require("./assets/AssaultBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                  style={{position: "absolute", bottom: 0}}
                />
                </ImageBackground>
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
              <Card>
              <Image source={require("./assets/Path1.jpg")}
                  style={{
                    width: 'auto',
                    height: screenHeight*0.15,
                    marginBottom: -1,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
                <ImageBackground
                  source={require("./assets/Path1.jpg")}
                  style={{
                    width: 'auto',
                    height: 70,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                  blurRadius={50} // Set the blur radius to 5
                >
                  <Card.Title
                  title="Pathfinder Program"
                  titleVariant="titleLarge"
                  titleStyle={{color: "#221f20"}}
                  subtitleStyle={{color: "#221f20"}}
                  subtitle="&quot;First In, Last Out&quot;"
                  right={(props) => <Image source={require("./assets/PathBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                  style={{position: "absolute", bottom: 0}}
                />
                </ImageBackground>
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
              <Card>
              <Image source={require("./assets/Ranger1.png")}
                  style={{
                    width: 'auto',
                    height: screenHeight*0.15,
                    marginBottom: -1,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
                <ImageBackground
                  source={require("./assets/Ranger1.png")}
                  style={{
                    width: 'auto',
                    height: 70,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                  blurRadius={50} // Set the blur radius to 5
                >
                  <Card.Title
                  title="Ranger Program"
                  titleVariant="titleLarge"
                  titleStyle={{color: "#221f20"}}
                  subtitleStyle={{color: "#221f20"}}
                  subtitle="&quot;Rangers Lead the Way&quot;"
                  right={(props) => <Image source={require("./assets/RangerBadgeClear.png")}
                    style={{
                      width: 60,
                      height: 60,
                      marginEnd: 16,
                      resizeMode:"contain"
                    }}
                  />}
                  style={{position: "absolute", bottom: 0}}
                />
                </ImageBackground>
              </Card>
            </TouchableRipple>
          </View>
        </View>
    </View>
  );
}

import cheerio from 'cheerio';

function News() {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolateRight: 'clamp',
  });

  async function loadArticles() {
    const response = await fetch('https://www.army.mil/news');
    const htmlString = await response.text();

    const $ = cheerio.load(htmlString);

    const articles = [];

    $('.news-item').each((index, element) => {
      const title = $(element).find('.title a').text();
      const date = $(element).find('.date').text();
      const regions = $(element).find('.sections a');
      let region = "";
      if (regions.length > 0) {
        const regionArray = [];
        regions.each((index, element) => {
          regionArray.push($(element).text());
        });
        region = regionArray.join(', ');
      } else {
        region = "Unknown District";
      }
      const imageUrl = $(element).find('.image-wrap img').attr('src');
      const scrapedLink = $(element).find('.more a').attr('href');
      const link = `https://www.army.mil${scrapedLink}`;

      articles.push({
        title,
        date,
        region,
        imageUrl,
        link,
      });
    });

    setArticles(articles);
    setLoaded(true);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    const titleLower = article.title.toLowerCase();
    const dateLower = article.date.toLowerCase();
    const regionLower = article.region.toLowerCase();
    return (
      titleLower.includes(searchLower) ||
      dateLower.includes(searchLower) ||
      regionLower.includes(searchLower)
    );
  });

return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Searchbar
          placeholder="Search News"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Animated.View>
      <ScrollView>
        {loaded ? (
          articles
          .filter(
            article =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.region.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((article, index) => (
            <List.Item style={{borderBottomWidth: 2, borderColor: "#ffcc01"}}
              key={index}
              
              title={`${article.date} | ${article.region}`}
              titleStyle={{fontSize: 12, marginBottom: 5}}

              description={article.title}
              descriptionStyle={{fontSize: 17, fontWeight: 'bold', paddingRight: 12 }}

              descriptionNumberOfLines={2}
              onPress={() => Linking.openURL(article.link)}
              right={(props) => (
                <List.Image
                  {...props}
                  source={{ uri: article.imageUrl }}
                  style={{ width: 100, height: 100, borderRadius: 10}}
                />
              )}
            />
          ))
        ) : (
          <ActivityIndicator size="large" style={{ marginTop: 50 }} />
        )}
      </ScrollView>
    </View>
  );
}


function About({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  return(
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 0}}>
        <View style={styles.card}>
          <Card style={{marginTop: -5, marginBottom: 20}}>
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={require("./assets/TSAAS.jpg")}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            <TouchableRipple
              onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas');}}
              borderless={true}
              style={{borderRadius: 0}}
            >
              <Card.Title
                title="Webpage"
                titleVariant="titleLarge"
                left={(props) => <Icon name='web' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='open-in-new' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <Divider></Divider>
            <Card.Content>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Phone:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                TSAAS: (270) 798-4410 {"\n"}
                Pre Ranger: (270) 412-1111
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Email:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                usarmy.campbell.101-abn-div.mbx.air-assault-school@army.mil
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Location:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                6883 Air Assault St. {"\n"}
                Fort Campbell, KY 42223
              </Text>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Hours of Operation:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                Class Report Times {"\n"}{"\n"}
                Air Assault Day Zero - 6:00 a.m. {"\n"}{"\n"}
                FRIES/SPIES Master Day One - 8:30 a.m. {"\n"}{"\n"}
                Pathfinder Day One - 8:00 a.m. {"\n"}{"\n"}
                Pre-Ranger Day Zero - 9:00 a.m. {"\n"}{"\n"}
                Rappel Master Day One - 8:30 a.m. 
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Graduation Times:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
              Air Assault - 11 a.m.{"\n"}
              Pathfinder - 11 a.m.
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>Note:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                ATTENTION SERVICE MEMBERS AND ATRRS MANAGERS - Please coordinate directly with The 
                Sabalauski Air Assault School (TSAAS) via phone or email on class availability and ATRRS 
                reservations. Unit ATRRS Managers are NOT allowed to slot Service Members into any TSAAS 
                courses through ATRRS, under any circumstances. TSAAS Operations executes all course 
                ATRRS slotting – any course reservations made outside of TSAAS Operations are invalid and 
                will be cancelled. Service Members attempting to “walk-on” to any course are NOT 
                guaranteed a slot in the course.
              </Text>
              <Divider></Divider>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialBottomTabNavigator();

// Create a context object to hold the state and function
const AppContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

function HomeStackScreen({navigation, route}) {
  const theme = useTheme();
  const { isDarkMode, toggleDarkMode } = React.useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Air Assault Program' component={AirAssaultScreen} />
      <Stack.Screen name='Air Assault Program: Phase I' component={Phase1Screen} />
      <Stack.Screen name='Air Assault Program: Phase II' component={Phase2Screen} />
      <Stack.Screen name='Pathfinder Program' component={PathfinderScreen}/>
      <Stack.Screen name='Ranger Program' component={RangerScreen}/>
    </Stack.Navigator>
  );
}

function NewsStackScreen({navigation, route}) {
  const { isDarkMode, toggleDarkMode } = React.useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
      }}
    >
      <Stack.Screen name='News' component={News} />
    </Stack.Navigator>
  );
}

function AboutStackScreen({navigation, route}) {
  const { isDarkMode, toggleDarkMode } = React.useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />,
      }}
    >
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
}

//SplashScreen.preventAutoHideAsync(); // Prevents the splash screen from hiding automatically, for debugging

function AnimatedSplashScreen({ children }) {
  const theme = useTheme();
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Change this to force minimum splash time
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: theme.colors.background,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            //source={splash}
            source={require('./assets/splash_screen_500.gif')}
            onLoadEnd={onImageLoaded}
            //fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(Appearance.getColorScheme() === 'dark');

  // Define the toggleDarkMode function
  const toggleDarkMode = React.useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  if (Platform.OS === 'android') {
    NavigationBar.setBackgroundColorAsync(isDarkMode ? "#221f20" : "rgb(255, 251, 255)");
  }

  return (
      <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <PaperProvider theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
          <NavigationContainer theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
          <StatusBar style="light" translucent={true} />
          <AnimatedSplashScreen>
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
            barStyle={{ backgroundColor: isDarkMode ? "#221f20" : "rgb(255, 251, 255)", height: Platform.OS === 'ios' ? 85 : 75 }}
          >
            <Tab.Screen
              name='HomeScreen'
              component={HomeStackScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused, color}) => (
                  <Icon name={focused ? 'home' : 'home-outline'} color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name='NewsScreen'
              component={NewsStackScreen}
              options={{
                tabBarLabel: 'News',
                tabBarIcon: ({ focused, color }) => (
                  <Icon name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'} color={color} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name='AboutScreen'
              component={AboutStackScreen}
              options={{
                tabBarLabel: 'About',
                tabBarIcon: ({ focused, color }) => (
                  <Icon name={focused ? 'information': 'information-outline'} color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
          </AnimatedSplashScreen>
          </NavigationContainer>
        </PaperProvider>
      </AppContext.Provider>
    );
  }

      const styles = StyleSheet.create({
        card: {
          marginTop: 0,
          justifyContent: 'center',
          marginHorizontal: 0,
        },
        cardBtn: {
          borderRadius: 10,
          marginHorizontal: 10,
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

