
import React, {Component} from 'react';
import { Image,StyleSheet, Text, View,SafeAreaView,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';


export default class signUp extends Component {
  static navigationOptions = {
    header: null
}

constructor(props) {
  super(props);
  this.unsubscriber = null;
  this.state = {
      isAuthenticated: false,
      typedEmail: '',
      typedPassword: '',
      user: null,
  };
}
componentDidMount() {
  this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
    //  console.log(`changed User : ${JSON.stringify(changedUser.toJSON())}`);
      this.setState({ user: changedUser });
  });
}
componentWillUnmount() {
  if (this.unsubscriber) {
      this.unsubscriber();
  }
}

onRegister = () => {
  firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
      .then((loggedInUser) => {
          this.setState({ user: loggedInUser })
          alert('yep')
         
            Actions.Login({
              name: this.state.name,
            });
          //console.log(`Register with user : ${JSON.stringify(loggedInUser.toJSON())}`);
      }).catch((error) => {
          //console.log(`Register fail with error: ${error}`);
          alert('UserError')

      });
}

  render() {
    return (
      <SafeAreaView style={styles.container} >
            <View style={styles.imgCont}>
            <Image
           style={styles.icon}
           source={require('../img/sa.png')}
            />
               <Text style={styles.title}>Sign Up</Text>
              
             
            </View>
            <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholderTextColor='black'
            placeholder="User Name" 
             keyboardType='email-address'
             onChangeText={(text) => this.setState({text})}
          />
                 
            <TextInput
            style={styles.input}
            placeholderTextColor='black'
            placeholder="Email" 
             keyboardType='email-address'
             onChangeText={
                        (text) => {
                            this.setState({ typedEmail: text });
                        }
                    }
          />
    
           <TextInput
           style={styles.input}
            placeholderTextColor='black'
            placeholder="Password"
           keyboardType='default'
            secureTextEntry={true}
            onChangeText={
                        (text) => {
                            this.setState({ typedPassword: text });
                        }
                    }
          
          />

       
       
         

          {/* <Button
           color='red'
           title="Go Login"
          style={styles.button}
          onPress={() => {
          Alert.alert('success');   }}
                       
            /> */}

  
                 </View>
                 <TouchableOpacity activeOpacity={.5}>
             
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}   onPress={this.onRegister}  >
              <View style={styles.button}>
                <Text  style={styles.Sign}>Create my account</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>I alredy have an account </Text>
              <TouchableOpacity activeOpacity={.5}
              onPress={() => {
            Actions.Login({
              name: this.state.name,
            });
          }}
              >
                <View>
                  <Text style={styles.signupLinkText}> Log in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          </SafeAreaView> 
          
          

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  
  },
  imgCont:{
    alignItems:'center',
    justifyContent:'center',

     },
    icon:{
     padding:90,
     alignSelf: 'center',
    width: '50%',
     height: '30%',

    },
    title:{
   
       fontSize:40,
       marginTop: 10,
      
       color: 'blue',
       fontWeight: 'bold',
       borderRadius: 10,
       borderWidth: 0.5,
       borderColor: 'red',

      },
      form:{
     //  alignContent:'center',
       // justifyContent:'center',
      // alignSelf: 'center',
       //paddingHorizontal: 10,
  
       
      },
      input:{
       // alignItems:'center',
        height:50,
        margin: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
      
        
        
 
      },
      Forgot:{
  alignSelf: 'center',
  fontWeight:'bold',
  fontSize:10

      },
      Sign:{
        fontSize:30,
        alignSelf: 'center',

        color: '#F6972A',
        fontWeight: 'bold',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'red',
        paddingTop:10,
        margin: 15,
        padding:5

      },
      signupWrap:{

        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:10

      },
      signupLinkText:{

        color: "#F6972A",
        marginLeft: 5,
      }
    
     
  
    

});
