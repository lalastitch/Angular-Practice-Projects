import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDashService {
  private apiKey: string = '179bab31dfbde7b4d34da5b76ecf7280';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}