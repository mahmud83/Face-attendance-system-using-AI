import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Routes from './src/Routes';
import firebase from 'firebase';
console.disableYellowBox = true;

export default class App extends Component {

  componentWillMount(){
    var config = {
            apiKey: "AIzaSyDqYNKj1j0_gKBXRLkS6kqywkpvoJrSd3Y",

            authDomain: "project-91479.firebaseapp.com",
            databaseURL: "https://project-91479.firebaseio.com",
            projectId: "project-91479",
            storageBucket: "project-91479.appspot.com",
            messagingSenderId: "105873065430043653167"

    };
    firebase.initializeApp(config);   
  }


  render() {
    
    return (
      
      <View style={styles.container}>
      <StatusBar backgroundColor="#27057f" barStyle="light-content" />
    
        <Routes/>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
  }
});


