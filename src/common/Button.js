
import {Text,TouchableOpacity} from 'react-native';

import React from 'react';
 const Button = ({onPress, children}) => {
     const {buttonStyle,textStyle} = styles;
   return(
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
   <Text style={textStyle}>{children}</Text>
   </TouchableOpacity>

   );

 };
 const styles ={
 textStyle:
 {

    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
 },
 buttonStyle: {

    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,

 }


 }
 export  {Button} ;