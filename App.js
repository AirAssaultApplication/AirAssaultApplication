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

import {DetailsScreen} from './PathFinderHome.js';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
  dark: NavigationDarkTheme,
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
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

/*font stuff
import { useFonts } from "expo-font";

const Home = () => {
  let [fontsLoaded] = useFonts ({
    "Arial-Black":  require("./assets/fontfam.ttf"),
  });
}
*/

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header mode='center-aligned'>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Air Assault Application" />
    </Appbar.Header>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 8, marginBottom: 8}}>
        <Text variant='headlineLarge'>Programs</Text>
      </View>
      <View style={styles.card}>
        <TouchableRipple
          onPress={() => console.log('Pressed')}
          borderless={true}
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant="titleLarge">Air Assault Program</Text>
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
          onPress={() => navigation.navigate('Details')}
          borderless={true}
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant="titleLarge">Pathfinder Program</Text>
                    <Paragraph>&quot;First In, Last Out&quot;</Paragraph>
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
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant="titleLarge">Ranger Program</Text>
                    <Paragraph>&quot;Rangers lead the way&quot;</Paragraph>
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
          title="Interesting news title!"
          description="Ranger News · 1h"
          titleNumberOfLines={10}
          right={props => <List.Image variant="image" style={styles.newsImage} resizeMode={"cover"} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title="Interesting news title!"
          description="Pathfinder News · 2d"
          right={props => <List.Image variant="image" style={styles.newsImage} resizeMode={"cover"} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title="Interesting news title!"
          description="Air Assault News · 3d"
          right={props => <List.Image variant="image" style={styles.newsImage} resizeMode={"cover"} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title="Interesting news title!"
          description="4d"
          right={props => <List.Image variant="image" style={styles.newsImage} resizeMode={"cover"} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
        />
        <Divider />
        <List.Item
          title="Interesting news title!"
          description="5d"
          right={props => <List.Image variant="image" style={styles.newsImage} resizeMode={"cover"} source={{uri: 'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'}} />}
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
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
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

