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
}
