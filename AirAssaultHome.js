import * as React from 'react';
import {  
          LayoutAnimation,
          Linking,
          Image,
          StyleSheet,
          View,
          TouchableOpacity,
          SafeAreaView,
          ScrollView
        } from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// this const below is for firebase
// for future maintainers, please get a new apiKey
// this github has been public for a while  --Eric

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

//  below is a stylesheet, you can change it to whatever you like
//  if a refresh is needed

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

//  Below is the flashcard display function. It's fed a flashcard object
//  and then it will display that flashcard. It's called using a map function
//  which iterates through an array of flashcard objects.

function Flashcard({ flashcard }) {
  const theme = useTheme();

  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); //LayoutAnimation animates the flash cards when they are clicked.
                                                                          //unfortunately the animation is skipped on web browsers, so changes
                                                                          //need to be previewed with mobile versions  --Eric

    setIsFlipped(!isFlipped); //sets isFlipped to the opposite of what it was before being clicked
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
                  {isFlipped && ( //isFlipped is a boolean that determines if the card shows the answer or not  --Eric
                    <View>
                      <Divider style={{backgroundColor:theme.colors.onBackground, marginTop:16, marginBottom: 16, marginHorizontal: -16}} bold={true}/>
                      <Text variant="titleMedium">{flashcard.answer}</Text>   
                      {/* when isFlipped becomes true, the card expands to show flashcard.answer.  --Eric */}
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

export function AirAssaultScreen({ navigation, route }) {
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
              <Image source={require("./assets/Assault2.png")}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            {/* The URL is hard-coded because there is not a high chance it'll change in the future.
                If the URL does change, then just paste the updated URL down here. --Eric */}
            <TouchableRipple
              onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas/air-assault');}}
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
            <Divider bold={true}></Divider>
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase I')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 1"
                subtitle="Flashcards"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase II')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 2"
                subtitle="Flashcards"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
              {/* There's a link to quizlet down here in case users want to use it.*/}
            <TouchableRipple
              onPress={() => {Linking.openURL('https://quizlet.com/AirAssaultSchool');}}
              borderless={true}
              style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Quizlet"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='open-in-new' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <Card.Content>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>PURPOSE:</Text>
                <View style={styles.rectangle}></View>
              </View>

              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                To train Soldiers in Air Assault operations, sling-load operations, and rappelling. Upon graduation of 
                the course each Soldier will be able to perform skills required to make maximum 
                use of helicopter assets in training and in combat to support their unit operations.
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>COURSE SCOPE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                Soldiers are trained on the missions performed by rotary wing aircraft, aircraft safety, 
                aero-medical evacuation procedures, pathfinder operations, principles and techniques of 
                combat assaults, rappelling techniques, and sling-load operations. The core POI 
                requires minimum support assets and is adaptable to organic aviation elements. Both the 
                core instruction and the additional instruction are conducted in a classroom/field environment.
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>INSERT TIMES:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                Day Zero - 0600{"\n"}{"\n"}
                Phase One - Day One - 0800{"\n"}{"\n"}
                Phase Two - Day Three - 0900{"\n"}{"\n"}
                Phase Three - Day Six - 1400{"\n"}{"\n"}
                12 mile Foot March - Day Nine - 1300
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
        setFlashcards(flashcards);  //  This updates the Flashcards const to load the flashcards from the database  --Eric
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

