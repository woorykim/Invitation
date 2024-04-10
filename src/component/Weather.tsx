import React, { useEffect, useState } from "react";
import WeatherDescKo from "../assets/images/WeatherDescKo";
import * as weatherStyled from "./styled/weatherStyled";

// OpenWeatherMap API의 날씨 응답 데이터에 대한 인터페이스 정의
interface WeatherData {
  name: string;
  weather: { description: string; icon: string; id: number }[];
  main: { temp: number };
  // 기타 필요한 속성들 추가
}

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const API_KEY = "d7cbad81ceb1098ce8859e486c762645";

  // API 가져오기
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []); // 마운트될 시 한 번만 호출

  // 데이터를 가져오지 않았을 때, 처리
  if (!weatherData) {
    return <div>...</div>;
  }
  const { name, weather, main } = weatherData;

  // id에 해당하는 한글 날씨 설명 가져오기
  const weatherId = weather[0].id;
  let weatherDescriptionKo = "";
  WeatherDescKo.forEach((weatherDesc) => {
    if (weatherDesc[weatherId]) {
      weatherDescriptionKo = weatherDesc[weatherId];
    }
  });

  return (
    <weatherStyled.WeatherWrapper>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
      <p> {Math.round(main.temp - 273.15)}°C</p>

      {/* <p> {weatherDescriptionKo}</p> */}
    </weatherStyled.WeatherWrapper>
  );
};
