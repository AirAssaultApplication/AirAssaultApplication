import * as React from 'react';
import { Linking, Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import {   
  ActivityIndicator,
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
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_5_RK8ebZPrHAErXJS9oPWoXTSvVCVxc",
  authDomain: "airassaultapp.firebaseapp.com",
  databaseURL: "https://airassaultapp-default-rtdb.firebaseio.com",
  projectId: "airassaultapp",
  storageBucket: "airassaultapp.appspot.com",
  messagingSenderId: "338517476325",
  appId: "1:338517476325:web:83c26d9ec94afea080650c",
  measurementId: "G-5704YDZHN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

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
    marginHorizontal: 0,
  },
  scrollViewCards: {
    marginHorizontal: 10,
  },
  newsImage: {
    borderWidth: 2,
    borderRadius: 8
  },
  rectangle: {
    height: 5,
    backgroundColor: '#ffcc01',
    position: 'relative', 
  },
});

function Flashcard({ flashcard }) {
  const theme = useTheme();

  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.card} key={flashcard.id} title={flashcard.question}>
      <TouchableRipple
        onPress={toggleFlip}
        borderless={true}
        style={styles.cardBtn}
      >
        <Card mode="contained">
          <Card.Content>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <View style={{ justifyContent: "flex-start" }}>
                  <Text variant="titleMedium">{flashcard.question}</Text>
                  {isFlipped && (
                    <View>
                      <Divider style={{backgroundColor:theme.colors.onBackground, marginTop:16, marginBottom: 16, marginHorizontal: -16}} bold={true}/>
                      <Text variant="titleMedium">{flashcard.answer}</Text>
                    </View>
                  )}
                </View>
              </View>
              <View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    marginTop: 8,
                  }}
                >
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </View>
  );
}

export function RangerScreen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  return(
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -10, marginBottom: 8}}>
        <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
        </View>
        <View style={styles.card}>
          <Card style={{marginTop: -16, marginBottom: 20}}>
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={require("./assets/Ranger2.png")}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            <TouchableRipple
              onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas/pre-ranger');}}
              borderless={true}
              style={{borderRadius: 0}}
            >
              <Card.Title
                title="Home"
                subtitle="Main Page"
                titleVariant="titleLarge"
                right={(props) => <Image source={require("./assets/External_Link.png")}
                  style={{
                    marginRight: 43,
                    width: 20,
                    height: 20,
                    resizeMode:"contain"
                  }}
                />}
              />
            </TouchableRipple>
            <Divider></Divider>
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase I')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 1"
                subtitle="Questions/Answers"
                titleVariant="titleLarge"
                left={(props) => <Image source={require("./assets/RangerBadgeClear.png")}
                  style={{
                    width: 45,
                    height: 45,
                    resizeMode:"contain"
                  }}
                />}
                right={(props) => <Button 
                  style={{
                    color: "#ffcc01",
                    marginRight: 15
                  }}icon='chevron-right'></Button>
                }
              />
            </TouchableRipple>
            <Divider></Divider>
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase II')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 2"
                subtitle="Questions/Answers"
                titleVariant="titleLarge"
                left={(props) => <Image source={require("./assets/RangerBadgeClear.png")}
                  style={{
                    width: 45,
                    height: 45,
                    resizeMode:"contain"
                  }}
                />}
                right={(props) => <Button 
                  style={{
                    color: "#ffcc01",
                    marginRight: 15
                  }}icon='chevron-right'></Button>
                }
              />
            </TouchableRipple>
            <Divider></Divider>
            <Card.Content>
            <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>PURPOSE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                To train, assess, and select Ranger Candidates in order to send the most capable, 
                qualified, and prepared Screaming Eagle Soldiers to the U.S. Army’s premier leadership school.
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>COURSE SCOPE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                This course covers the skills and concepts necessary to achieve success as a Ranger Student. 
                Candidates will be evaluated on their ability to complete an RPFT, 12-mile road march, CWSA, 
                and Land Navigation.  Training will cover individual Soldiers skills and Small Unit Tactics, 
                including Ambushes, Reconnaissance operations, Formations and Movement techniques,  and Troop 
                Leading Procedures. At the conclusion of the course, Candidates will be better prepared to 
                represent the Division at the U.S. Army Ranger school.
              </Text>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>NOTE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                Packets for entrance must consist of a digitally filled FC 4137 and a complete phase 1 physical 
                dated within 120 days of course start date along with a dental memorandum. 
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}


export function Phase1Screen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  const [flashcards, setFlashcards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // add new state variable
  const flashcardsRef = ref(getDatabase(), "airAssaultPhaseOne");

  React.useEffect(() => {
    // here onValue will get initialized once
    // and on db changes its callback will get invoked
    // resulting in changing your state value
    onValue(flashcardsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flashcards = Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        });
        setFlashcards(flashcards);
        setIsLoading(false); // set loading status to false once flashcards are loaded
      } else {
        console.log("No data available");
      }
    });
    return () => {
      // this is cleanup function, will call just on component will unmount
      // you can clear your events listeners or any async calls here
    }
  }, [])

  return (
    <ScrollView style={{marginTop: -10, marginBottom: 0}} showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
      </View>
      <View style={styles.scrollViewCards}>
        {isLoading ? ( // show loading indicator when isLoading is true
          <ActivityIndicator size="large" style={{marginTop:50}} color={theme.colors.primary} />
        ) : (
          flashcards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard} />
          ))
        )}
      </View>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

export function Phase2Screen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  const [flashcards, setFlashcards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // add new state variable
  const flashcardsRef = ref(getDatabase(), "airAssaultPhaseTwo");

  React.useEffect(() => {
    // here onValue will get initialized once
    // and on db changes its callback will get invoked
    // resulting in changing your state value
    onValue(flashcardsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flashcards = Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        });
        setFlashcards(flashcards);
        setIsLoading(false); // set loading status to false once flashcards are loaded
      } else {
        console.log("No data available");
      }
    });
    return () => {
      // this is cleanup function, will call just on component will unmount
      // you can clear your events listeners or any async calls here
    }
  }, [])

  return (
    <ScrollView style={{marginTop: -10, marginBottom: 0}} showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
      </View>
      <View style={styles.scrollViewCards}>
        {isLoading ? ( // show loading indicator when isLoading is true
          <ActivityIndicator size="large" style={{marginTop:50}} color={theme.colors.primary} />
        ) : (
          flashcards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard} />
          ))
        )}
      </View>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

/*Test Screen DOES NOT WORK WITH FIREBASE, SINCE PULLING FLASHCARDS IS AN ASYNCHRONOUS TASK
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
}*/