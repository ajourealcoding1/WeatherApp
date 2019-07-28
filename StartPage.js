import React from 'react';
import { Button, Text,  StyleSheet , View, TouchableOpacity, Image } from 'react-native';
import {Constants} from 'expo';

export default class StartPage extends React.Component{


render(){
const {navigation} = this.props;
clickHandler = () => navigation.navigate("CityList") ;

 return (

    <View style={styles.container}>
        <Text style={styles.title}> Weather App </Text>
        <Image style= {styles.image} source= {require('./WeatherImage.png')}/>
        <Text> {'\n\n'}</Text>
            <TouchableOpacity
            style = {[styles.button, padding= 20]}
                onPress={clickHandler}>
                <Text style={styles.text}>  City List  </Text>
            </TouchableOpacity>

    </View>
  );
    }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
     justifyContent: 'center',
     alignItems: 'center',
    },
    button:{
        backgroundColor:'#748BFF',
        width: '70%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin :2,
        borderWidth: 3,
        borderColor:'white',
    },
    text:{
        fontSize: 30,
        fontWeight :'bold',
        color:'black',
        
    },
    title:{
      fontSize: 60,
      fontWeight :'bold',
      color:'#0033CC',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{

    }
});
