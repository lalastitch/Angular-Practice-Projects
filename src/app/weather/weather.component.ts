import { Component } from '@angular/core';
import { WeatherDashService } from '../weatherDash.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherDashboardComponent {
  cityName: string = '';
  weatherData: any;

  constructor(private WeatherDashService: WeatherDashService) {}

  searchWeather() {
    if (this.cityName) {
      this.WeatherDashService.getWeatherByCity(this.cityName).subscribe((data: any) => {
        this.weatherData = data;
      });
    }
  }
  getTemperatureClass(temperature: number): string {
    const newTemp = (temperature  - 273.15) * 9/5 + 32
    if (newTemp >= 70) {
      return 'hot-weather';
    } else if (newTemp >= 60) {
      return 'moderate-weather';
    } else {
      return 'cold-weather';
    }
  }

  getBackgroundColor(humidity: number): string {
    const humidityPercentage = humidity / 100;

    const lightness = 80 - humidityPercentage * 20;

    const backgroundColor = `hsl(200, ${lightness}%, ${lightness}%)`;

    return backgroundColor;
  }

}