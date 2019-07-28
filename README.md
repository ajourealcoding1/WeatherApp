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
    - react-native의 TouchableOpacity를 사용하여 버튼을 눌렀을 때 city list 페이지로 넘어가도록 하였습니다.
       <TouchableOpacity
            style = {styles.button}
                onPress={clickHandler}>
                <Text style={styles.text}>  City List  </Text>
            </TouchableOpacity>

* 보기에 더 깔끔하게 디자인들을 변경하였습니다.
```
