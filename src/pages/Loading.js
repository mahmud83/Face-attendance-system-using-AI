import React, {Component }from 'react'
import {Actions} from 'react-native-router-flux';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar,Animated, Image,ImageBackground} from 'react-native'
import firebase from 'react-native-firebase';
class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return(
      <Animated.Image
      onLoad={this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })
            }
          ]
        },
          this.props.style,
        ]}
        />
      )
  }
}
export default class Loading extends React.Component {
  call(){
    Actions.code()
  }

  call2(){
    Actions.drawer()
  }

  constructor() {
    super();
    this.unsubscriber = null;
    this.state={
      user: null,
    };
  }

   componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {this.setState({user });
  });
  }
  

  render( ) {

    if(!this.state.user) {
  
            this.call();
    }
    if(this.state.user) {       this.call2();         }
    return (
      <ImageBackground source={require('../Images/backg.png')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Image
                style={{ flex:2, resizeMode: 'center'}}
                source={require('../Images/Logo.png')}/> 
       <Text style={{fontSize: 30, color : 'rgba(255, 255, 255, 0.7)'}}>Loading</Text>
       <ActivityIndicator size="large" /> 
      </View>
      </ImageBackground>

  );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    }
  }
);