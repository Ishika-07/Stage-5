import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
          emailId : '',
          password: ''
        }
      }

      userLogin=async(id, password)=>{
        firebase.auth().signInWithEmailAndPassword(id, password).then(()=>{
            alert('Succesfully Logged In')
        }).catch(()=>{
            alert('Unable to Login')
        })
      }
      userSignUp=async(id, password)=>{
        firebase.auth().createUserWithEmailAndPassword(id, password)
        .then((response)=>{
            alert("User Added Successfully")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
      }
    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.profileContainer}>
        
                        <Text style={styles.title}>BARTER SYSTEM</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder='Username'
                        keyboardType='email-address'
                        placeholderTextColor='white'
                        onChangeText={(text)=>{
                            this.setState({
                                emailId:text
                            })
                        }}
                                    />

                        <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor='white'
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                        />

                        <TouchableOpacity style={styles.button} onPress={()=>{
                            this.userLogin(this.state.emailId, this.state.password)
                        }}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    input:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10,
        marginLeft:550

    },
    button:{
        width:100,
        height:40,
        borderWidth:1,
        backgroundColor: '#FF5F49',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:650,
        marginTop:20,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 5,
        },
    },
    text:{
        fontSize:20,
        fontWeight:'b',
        color:'#F8BE85'
    }
})