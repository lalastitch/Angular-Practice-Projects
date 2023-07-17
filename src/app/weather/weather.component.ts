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
}