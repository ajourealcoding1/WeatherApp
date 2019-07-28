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

- OpenWeather에서 api 호출하여 선택한 도시의 날씨 정보를 가져왔습니다.
    - fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID={APPID}`)
    - weather description에 따른 icon도 나오도록 구현하였고, 최저온도, 최고온도, 온도, 습도 정보를 가져와 화면에 띄웠습니다.
    - icon은 source ={{uri : `https://openweathermap.org/img/wn/${icon}@2x.png`}}를 통해 불러왔습니다.
   
- 시작페이지를 추가로 만들었습니다.
    - 아래의 코드처럼 react-native의 TouchableOpacity를 사용하여 view가 클릭에 적절히 응답하도록 했습니다.
    ```bash
       <TouchableOpacity
            style = {styles.button}
                onPress={clickHandler}>
                <Text style={styles.text}>  City List  </Text>
            </TouchableOpacity>
    ```
    - 그리고 City List라고 써있는 버튼을 만들어 City List를 보여주는 화면으로 넘어갈 수 있도록 했습니다.
    - clickHandler = () => navigation.navigate("CityList") ;
      이 코드는 클릭 시(onPress) clickHandler(CityList.js로 이동)가 작동하도록 하였습니다.

- 보기에 더 깔끔하게 디자인들을 변경하였습니다.

- 날씨 아이콘 외에 사용자들의 이해도와 시각적인 부분을 고려하여 첫 화면과 로딩 화면에 이미지를 추가했습니다.

