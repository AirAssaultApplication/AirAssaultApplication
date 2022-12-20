import * as React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
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



export function AirAssaultScreen() {
    const theme = useTheme();
    const cardQuestions = [
      'What is the allowable cargo load of the LUH-72A in its normal configuration when used for MEDEVAC operations?',
      'What is the primary use for the CH-47 when used during CASEVAC missions?',
      'What is the crew of a LUH- 72A when not being used for MEDEVAC operations?',
    ];
    const cardAnswers = [
      '2 litter, 1 medic, and 5 ambulatory.',
      'Mass Casualty Evacuation.',
      '(4) Pilot, Co Pilot, Crew Chief, and In-Flight Medic.',
    ];
    return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 8, marginBottom: 8}}>
        <Text variant='headlineSmall' style={{marginBottom:8}}>The Sabalauski Air Assault School</Text>
        <Text variant='headlineMedium'>Phase I</Text>
      </View>
      <View style={styles.card}>
        <TouchableRipple
          onPress={() => console.log('pressed')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleMedium'>{cardQuestions[0]}</Text>
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
          onPress={() => console.log('pressed')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleMedium'>{cardQuestions[1]}</Text>
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
          onPress={() => console.log('pressed')}
          borderless={true}
          style={styles.cardBtn}
        >
          <Card mode='contained'>
            <Card.Content>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <View style={{justifyContent: 'flex-start'}}>
                    <Text variant='titleMedium'>{cardQuestions[2]}</Text>
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
      </ScrollView>
    );
  }