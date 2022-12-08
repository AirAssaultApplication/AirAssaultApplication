import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { BottomNavigation, Text, Appbar } from 'react-native-paper';

const _handleSearch = () => console.log('Searching');


const ExploreRoute = () => <Text>Explore</Text>;

const HomeRoute = () => <Text>Home</Text>;

const ProfileRoute = () => <Text>Profile</Text>;


export function AirAssaultScreen() {
    const theme = useTheme();
    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
      { key: 'explore', title: 'Explore', focusedIcon: 'compass', unfocusedIcon: 'compass-outline'},
      { key: 'home', title: 'Home', focusedIcon: 'home-circle', unfocusedIcon: 'home-circle-outline' },
      { key: 'profile', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      explore: ExploreRoute,
      home: HomeRoute,
      profile: ProfileRoute,
    });
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.background }}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    );
  }