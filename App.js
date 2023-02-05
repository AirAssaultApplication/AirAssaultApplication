import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import toplogo from './assets/logo_top.png';
import bottomlogo from './assets/logo_bottom.png';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Appbar,
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

import {AirAssaultScreen} from './AirAssaultHome.js';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationdark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
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
  },
};

/*font stuff
import { useFonts } from 'expo-font';

const Home = () => {
  let [fontsLoaded] = useFonts ({
    'Arial-Black':  require('./assets/fontfam.ttf'),
  });
}
*/

function CustomNavigationBar({ navigation, back, route }) {
  return (
    <Appbar.Header mode='center-aligned'>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 8, marginBottom: 8}}>
        <Text variant='headlineLarge'>Programs</Text>
      </View>
      <View style={styles.card}>
        <TouchableRipple
          onPress={() => navigation.navigate('Air Assault Program')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='outlined'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleLarge'>Air Assault Program</Text>
                    <Paragraph>&quot;The Ten Toughest Days in the Army&quot;</Paragraph>
                  </View>
                </View>
                <View>
                  <View style={{justifyContent: 'flex-end', marginTop: 8}}>
                    <Button icon='chevron-right' contentStyle={{flexDirection: 'row-reverse'}} style={{marginHorizontal: -8}}>
                    </Button>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableRipple>
      </View>
      <View style={styles.card}>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='outlined'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleLarge'>Pathfinder Program</Text>
                    <Paragraph>Coming soon</Paragraph>
                  </View>
                </View>
                <View>
                  <View style={{justifyContent: 'flex-end', marginTop: 8}}>
                    <Button icon='chevron-right' contentStyle={{flexDirection: 'row-reverse'}} style={{marginHorizontal: -8}}>
                    </Button>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableRipple>
      </View>
      <View style={styles.card}>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='outlined'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleLarge'>Ranger Program</Text>
                    <Paragraph>Coming soon</Paragraph>
                  </View>
                </View>
                <View>
                  <View style={{justifyContent: 'flex-end', marginTop: 8}}>
                    <Button icon='chevron-right' contentStyle={{flexDirection: 'row-reverse'}} style={{marginHorizontal: -8}}>
                    </Button>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableRipple>
      </View>
      <View style={{marginTop: 48}}>
        <Text variant='headlineLarge'>News</Text>
        <List.Item
          title='Interesting news title!'
          description='Ranger News · 1h'
          titleNumberOfLines={10}
          right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title='Interesting news title!'
          description='Pathfinder News · 2d'
          right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title='Interesting news title!'
          description='Air Assault News · 3d'
          right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title='Interesting news title!'
          description='4d'
          right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title='Interesting news title!'
          description='5d'
          right={props => <List.Image variant='image' style={styles.newsImage} resizeMode={'cover'} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator 
          initialRouteName='Air Assault Application'
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name='Air Assault Application' component={HomeScreen}/>
          <Stack.Screen name='Air Assault Program' component={AirAssaultScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
  }

      const styles = StyleSheet.create({
        card: {
          marginTop: 16,
          justifyContent: 'center',
        },
        cardBtn: {
          borderRadius: 10
        },
        container: {
          flex: 1,
          paddingTop: 8,
          paddingLeft: 8,
          paddingRight: 8,
        },
        scrollView: {
          marginHorizontal: 20,
        },
        newsImage: {
          borderWidth: 2,
          borderRadius: 8
        },
      });

