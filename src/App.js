import React , {Component} from 'react';
import {View, Spinner} from 'react-native';
import firebase from 'firebase';

import {Header, Button} from './common/header';
import LoginForm from './compoments/LoginForm'
class App extends Component {
  state ={loggedIn: null};
 componentWillMount(){
   firebase.initializeApp({
    apiKey: "AIzaSyDTgBM4RsNyH_jI_e-8NPKscZjJTSUWjjw",
    authDomain: "bionic-carving-114809.firebaseapp.com",
    databaseURL: "https://bionic-carving-114809.firebaseio.com",
    projectId: "bionic-carving-114809",
    storageBucket: "bionic-carving-114809.appspot.com",
    messagingSenderId: "280194512395"


   });
   firebase.auth().onAuthStateChanged((user)=>{
  if(user){
  this.setState({loggedIn: true});

} else{
  this.setState({loggedIn: false});
}

   });

 }
 renderContent() {
   switch (this.state.loggedIn) {

    case true:
    return <Button>Log Out</Button>
    case false:
    return <LoginForm />
    default:
    return <Spinner size="large"/>
   }
  }
 

render(){

    return(
      <View >
        
      <Header headerText="Authentication"/>
     {this.renderContent()}   
     
 </View>


    );
}



}
export default App;