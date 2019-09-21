import React, { Component } from 'react';
import {Platform, Alert, SafeAreaView, YellowBox, StyleSheet,Animated, ScrollView,Button, Image,View, Text, StatusBar,TouchableOpacity, TextInput} from 'react-native';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
export default class markattendance extends Component {
    constructor(props) {
     super(props);
     YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
     ]);
    }
    state={
    	year: '',
    	ltype: '',
    }
    handleChange =key => val => {
	this.setState({[key]: val})
	}
	render(){
		return(
				
			<View style={styles.container}>
      			<MenuProvider style={{ padding: 30 }}>
        			<Menu onSelect={value=>this.setState({year: value})}>
          				<MenuTrigger  >
          					<Text style={styles.headerText}>Select class : {this.state.year}</Text>
          				</MenuTrigger  >
          				<MenuOptions>
            			<MenuOption value={"Second year"}>
							<Text style={styles.menuContent}>Second year</Text>      	
            			</MenuOption>
            			<MenuOption value={"Third year"}>
              				<Text style={styles.menuContent}>Third year</Text>
            			</MenuOption>
            			<MenuOption value={"Fourth year"}>
              				<Text style={styles.menuContent}>Fourth year</Text>
            			</MenuOption>
            			<MenuOption value={"event"}>
              				<Text style={styles.menuContent}>Event</Text>
            			</MenuOption>
          				</MenuOptions>
        			</Menu>
      			</MenuProvider>
      			<MenuProvider style={{ padding: 30 }}>
        			<Menu onSelect={value=>this.setState({ltype: value})}>
          				<MenuTrigger  >
          					<Text style={styles.headerText}>Lecture type : {this.state.ltype}</Text>
          				</MenuTrigger  >
          				<MenuOptions>
            			<MenuOption value={"Theory"}>
							<Text style={styles.menuContent}>Theroy</Text>      	
            			</MenuOption>
            			<MenuOption value={"Pratical"}>
              				<Text style={styles.menuContent}>Practical</Text>
            			</MenuOption>
            			<MenuOption>
              				<TextInput style={styles.inputBox}
				               	placeholder="Enter Event name"
				                placeholderTextColor = "#000000"
				            	//value={this.state.ltype}
				               onChangeText={this.handleChange('ltype')}				                    
				             />
            			</MenuOption>
          				</MenuOptions>
        			</Menu>
      			</MenuProvider>	
      		</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#212121',
  },
  
    headerText: {
    	fontSize: 20,
    	margin: 10,
    	fontWeight: "bold",
        color : 'rgba(255, 255, 255, 0.7)'
  },
  menuContent: {
    fontWeight: "bold",
    padding: 2,
    fontSize: 20,
    color : '#000000'

  }


 });
