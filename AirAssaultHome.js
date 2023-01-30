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

export function createFlashcard(flashcard){
  const theme = useTheme();
  return(
    <View style={styles.card} key={flashcard.id}>
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
                  <Text variant='titleMedium'>{flashcard.question}</Text>
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
  );
}

export function AirAssaultScreen() {
  const theme = useTheme();

  let flashcards = [
    {
      "id": 0,
      "question": "What is the allowable cargo load of the LUH-72A in its normal configuration when used for MEDEVAC operations?",
      "answer": "2 litter, 1 medic, and 5 ambulatory."
    },
    {
      "id": 1,
      "question": "What is the primary use for the CH-47 when used during CASEVAC missions?",
      "answer": "Mass Casualty Evacuation."
    },
    {
      "id": 2,
      "question": "What is the crew of a LUH- 72A when not being used for MEDEVAC operations?",
      "answer": "(4) Pilot, Co Pilot, Crew Chief, and In-Flight Medic."
    },
  ];

  let flashcardViews = [];

  for(const item of flashcards){
    flashcardViews.push(createFlashcard(item));
  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    <View style={{marginTop: 8, marginBottom: 8}}>
      <Text variant='headlineSmall' style={{marginBottom:8}}>The Sabalauski Air Assault School</Text>
      <Text variant='headlineMedium'>Phase I</Text>
    </View>
    {flashcardViews}
    </ScrollView>
  );
}