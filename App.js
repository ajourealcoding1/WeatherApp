import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList'
import WeatherDetailScreen from './WeatherDetailScreen';
import StartPage from './StartPage';


 const AppNavigator = createStackNavigator(
    {
    StartPage : StartPage,
    CityList : CityList,
    Detail : WeatherDetailScreen,
    },
    {
    initialRouteName: 'StartPage',
    }
    );

export default createAppContainer(AppNavigator);
