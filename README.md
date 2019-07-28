# WeatherApp

## How to run

### Clone the repository

```bash
$ git clone https://github.com/ajourealcoding1/WeatherApp.git
```

### Install whole dependencies

```bash
$ cd WeatherApp
$ npm install
```

### Execute

```bash
$ expo start
```

## 구현사항

```bash
* OpenWeather에서 api 호출하여 선택한 도시의 날씨 정보를 가져왔습니다.
    - fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID={APPID}`)
    - description에 따른 icon도 나오도록 구현하였고, 최저온도, 최고온도, 온도, 습도 정보를 가져와 화면에 띄웠습니다.
   
* 시작페이지를 만들었습니다.
    - 아래의 코드처럼 react-native의 TouchableOpacity를 사용하여 view가 클릭에 적절히 응답하도록 하였습니다.
      그리고 City List라고 써있는 버튼을 만들었습니다.

       <TouchableOpacity
            style = {styles.button}
                onPress={clickHandler}>
                <Text style={styles.text}>  City List  </Text>
            </TouchableOpacity>

    - clickHandler = () => navigation.navigate("CityList") ;
      이 코드는 클릭 시(onPress) clickHandler(CityList.js로 이동)가 작동하도록 하였습니다.


* 보기에 더 깔끔하게 디자인들을 변경하였습니다.
```
