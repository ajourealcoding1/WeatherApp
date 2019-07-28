import React from 'react';
import { Button, Text, StyleSheet, View, Animated, TouchableOpacity, Image } from 'react-native';
import { Constants } from 'expo';

export default class StartPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          value: new Animated.Value(0),
          position: new Animated.ValueXY({x:100, y:0}),
        };
      }
    
      componentDidMount(){
        this._moveX();
      }
    
      _moveX(){
        Animated.spring (
          this.state.position, {
            toValue : {x:0, y:0},
            friction : 2,
            tension : 50,
        }).start();
      }
    
      _getStyle(){
        return {
          transform:[
            {translateX:this.state.position.x},
          ]
        }
      }

    render() {
        const { navigation } = this.props;
        clickHandler = () => navigation.navigate("CityList");

        return (

            <View style={styles.container}>
                <Text style={styles.title}> Weather App </Text>
                <Image style={styles.image} source={require('./WeatherImage.png')} />
                <Text> {'\n\n'}</Text>

                <Animated.View style= {this._getStyle()}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={clickHandler}>
                        <Text style={styles.text}>  City List  </Text>
                    </TouchableOpacity>
                </Animated.View>

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
    button: {
        backgroundColor: '#748BFF',
        width: '70%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 2,
        borderWidth: 3,
        borderColor: 'white',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',

    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#0033CC',
        justifyContent: 'center',
        alignItems: 'center',
    },
});