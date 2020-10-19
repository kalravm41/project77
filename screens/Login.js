import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state= {
            email: '',
            password: ''
        }
    }

    login=async(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return alert('successful login');
        })

        .catch((error)=>{
            var errorcode = error.code;
            var errormessage = error.message;
            return alert(errormessage);
        });
        this.setState({email: '', password: ''});
    }

    signup=async(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            return alert('user added successfully');
        })

        .catch((error)=>{
            var errorcode = error.code;
            var errormessage = error.message;
            return alert(errormessage);
        });
        this.setState({email: '', password: ''});
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <Text style={styles.submitButtonText}> Barter System App </Text>
                    <Text style={styles.submitButtonText1}> Login or Signup Here... </Text>

                    <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                    placeholder='abc@example.com'
                    keyboardType= 'email-address'
                    onChangeText={(text)=>{this.setState({email: text})}}
                    value=  {this.state.email}/>

                    <TextInput style={styles.inputBox}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password: text})}}
                    value={this.state.password}/>
                    </View>

                    <TouchableOpacity onPress={()=>{this.signup(this.state.email,this.state.password)}}>
                        <Text style={styles.submitButton}>Signup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{this.login(this.state.email,this.state.password)}}>
                        <Text style={styles.submitButton}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      margin: 5
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 80,
      height:50,
      margin :5,
      justifyContent: 'center',
      textAlign: 'center'
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: '#ff0000'
    },
    transactionAlert:{
      margin:10,
      color: 'red'
    },
    submitButtonText1:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: '#00ff00',
      margin: 5
    },
  });