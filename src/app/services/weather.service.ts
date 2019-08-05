import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'fe3b709abf1bcbaa011ce9e667ec6c3c';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }
  getWeathers() {
    return this.http.get<any[]>(`${this.URI}`);
  }
}
