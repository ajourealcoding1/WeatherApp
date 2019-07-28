import React from 'react';
import { Button, Text,  StyleSheet , View, TouchableOpacity } from 'react-native';
import {Constants} from 'expo';

export default class StartPage extends React.Component{


render(){
const {navigation} = this.props;
clickHandler = () => navigation.navigate("CityList") ;

 return (

    <View style={styles.container}>
        <Text style={styles.title}> Weather App {'\n\n'}</Text>

            <TouchableOpacity
            style = {styles.button}
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
        backgroundColor:'pink',
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
      color:'hotpink',
      justifyContent: 'center',
      alignItems: 'center',
    }
});
