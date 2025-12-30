import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '9683a2de4765b1b595716004f2a2141c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const urlFinal = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    return this.http.get(urlFinal);
  }
  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}&lang=pt_br`);
  }
}