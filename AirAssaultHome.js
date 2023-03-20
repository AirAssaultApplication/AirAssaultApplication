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
import phaseOneFlashcards from './Phase_One.json';
import phaseTwoFlashcards from './Phase_Two.json';

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

  const [flashcardText, setFlashcardText] = React.useState(flashcard.question);

  return(
    <View style={styles.card} key={flashcard.id}>
      <TouchableRipple
        onPress={() => {
          if(flashcardText != flashcard.answer){
            setFlashcardText(flashcard.answer);
          }
          else{
            setFlashcardText(flashcard.question);
          }
        }}
        borderless={true}
        style={styles.cardBtn}
      >
        <Card mode='contained'>
          <Card.Content>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text variant='titleMedium'>{flashcardText}</Text>
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

export function AirAssaultScreen({ navigation }) {
  const theme = useTheme();

  return(
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 8, marginBottom: 8}}>
        <Text variant='headlineSmall' style={{marginBottom:8, alignSelf: "center"}}>The Sabalauski Air Assault School</Text>
        <View style={{ marginTop: 20, justifyContent: "space-between", flexDirection:"row"}}>
          <View style={{width:'45%', marginHorizontal: 10}}>
            <TouchableRipple
              onPress={() => {navigation.navigate('Air Assault Program: Phase I')}}
              borderless={true}
              style={{borderRadius: 20}}
            >
              <Button mode="contained-tonal" labelStyle={{fontSize: 20, marginTop: 30}} style={{height: 80}}>Phase I</Button>
            </TouchableRipple>
          </View>
          <View style={{width:'45%', marginHorizontal: 10}}>
            <TouchableRipple
              onPress={() => {navigation.navigate('Air Assault Program: Phase II')}}
              borderless={true}
              style={{borderRadius: 20}}
            >
              <Button mode="contained-tonal" labelStyle={{fontSize: 20, marginTop: 30}} style={{height: 80}}>Phase II</Button>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export function Phase1Screen({ navigation }){
  const theme = useTheme();
  let flashcardViews = [];

  for(const item of phaseOneFlashcards){
    flashcardViews.push(createFlashcard(item));
  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    {flashcardViews}
    </ScrollView>
  );
}

export function Phase2Screen({ navigation }){
  const theme = useTheme();
  let flashcardViews = [];

  for(const item of phaseTwoFlashcards){
    flashcardViews.push(createFlashcard(item));
  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    {flashcardViews}
    </ScrollView>
  );
}

/*shuffle*/

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

/*Test Screen*/
export function TestScreen({ navigation }){
  const theme = useTheme();
  let flashcardViews = [];

  for(const item of phaseTwoFlashcards){
    flashcardViews.push(createFlashcard(item));
  }
  
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    
    <View style={{marginTop: 8, marginBottom: 8}}>
      <TouchableRipple
        onPress={() => {navigation.navigate('Air Assault Program: Testing')}}
        borderless={true}
        style={{borderRadius: 20}}
      >
      <Button mode="contained-tonal" labelStyle={{fontSize: 20, marginTop: 30}} style={{height: 80}}>Shuffle</Button>
      </TouchableRipple> 
    </View>

    {shuffle(flashcardViews)}
    </ScrollView>
  );
}