import React , {Component} from 'react';
import firebase from 'firebase';
import {View,Text,TextInput} from 'react-native';
import {Button, Card,CardSection, Input, Spinner} from '../common';
class LoginForm extends Component {
  state={email: '' , password:'', error:'' , loading: false};
    onButtonPress(){
      const {email,password} = this.state;
      this.setState({error: '', loading: true})
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
      

      });
     
    }
    onLoginFail(){
         this.setState({error: 'Authentication Failed ', loading: false});

    }
    onLoginSuccess(){
      this.setState({

        email : '',
        password: '',
        loading: false,
        error: ''
      });


    }

    renderButton() {

      if(this.state.loading){
        return <Spinner size="small" />

      }
      return(
        <Button onPress={this.onButtonPress.bind(this)}>
        Login
    </Button>
      );
    }
 render(){
     return(
       <Card>
      <CardSection>
     <Input 
     placeholder="user@gmail.com"
     lable="Email"
     value={this.state.email}
     onChangeText={email => this.setState({ email})}
     />
      </CardSection>
      <CardSection >
      <Input
      placeholder="password"
      lable="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password})}
      secureTextEntry
       />
       </CardSection>
       <Text style={styles.errorTextStyle}>
         {this.state.error}
       </Text>
      <CardSection >
       {this.renderButton()}
      </CardSection>
    


       </Card>
  


     );
 }

}
const styles ={

  errorTextStyle:{
    fontSize:25,
    alignItems: 'center',
   justifyContent: 'center',
    color:'red',
    //width: '100%'
  }
}
export default LoginForm;