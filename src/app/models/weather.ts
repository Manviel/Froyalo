export interface LocalWeather {
  name: string;
  main: Main;
  weather: Weather[];
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface Weather {
  id: number;
  main: string;
  icon: string;
  description: string;
}

export interface ResponseForecast {
  list: Forecast[];
}

export interface Forecast {
  temp: Temp;
  weather: Weather[];
}

export interface Temp {
  max: number;
  min: number;
}
