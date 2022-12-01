import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  apiKey = '0053d9429eeb94a7d58981d5cff94dd2';
  URI: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(city: string, country: string) {
    return this.httpClient.get(`${this.URI}${city},${country}`);
  }
}
