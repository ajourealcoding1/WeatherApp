import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import dataImage from './data.png';


export default class WeatherDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `          Weather Info : ${navigation.getParam('city', 'Unknown')}`,
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };


  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,

    };

  }

  componentDidMount() {

    const { navigation } = this.props;
    const city = navigation.getParam('city', null);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6be3be648c795ee8faadb5bf2e84b4d8`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <Image style={styles.image} source={require('./data.png')} />
          <Text style={styles.info}> 날씨 정보를 가져오고 있습니다. </Text>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;
    let maxTempCelsius = this.state.main.temp_max - 273.15;
    let minTempCelsius = this.state.main.temp_min - 273.15;
    let humidity = this.state.main.humidity;
    let description = this.state.weather[0].description;
    let icon = this.state.weather[0].icon;


    return (
      <View style={styles.container}>
        <Text style={styles.todayWeather}>오늘의 날씨 {'\n'} </Text>
        <Image style={styles.icon}
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
        <Text style={styles.description}>  {'\n'} 날씨: {description}</Text>
        <Text style={styles.info}> {'\n'}온도: {celsius.toFixed(1)}℃</Text>
        <Text style={styles.info}> 최저온도: {minTempCelsius.toFixed(1)}℃</Text>
        <Text style={styles.info}> 최고온도: {maxTempCelsius.toFixed(1)}℃</Text>
        <Text style={styles.info}> 습도: {humidity.toFixed(1)}%</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 2,
    fontSize: 25,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayWeather: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
  description: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 25,
  },
  icon: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
  },
  image: {
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});