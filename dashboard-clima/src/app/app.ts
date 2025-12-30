import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  city: string = '';
  weatherData: any = null;

  constructor(
    private weatherService: WeatherService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUsuarioLocalizacao();
  }

  getUsuarioLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        this.weatherService.getWeatherByCoords(lat, lon).subscribe({
          next: (res) => {
            this.weatherData = res;
            this.city = res.name;
            this.cdr.detectChanges();
          },
          error: (err) => console.error('Erro na API:', err)
        });
      }, (error) => {
        console.warn('GPS não autorizado.');
      });
    }
  }

  buscarClima() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe({
        next: (res) => {
          this.weatherData = res;
          this.cdr.detectChanges();
        },
        error: (err) => alert('Cidade não encontrada!')
      });
    }
  }

  getBackground() {
    const imagens = {
      clouds: 'https://loremflickr.com/1920/1080/clouds',
      rain: 'https://loremflickr.com/1920/1080/rain',
      clear: 'https://loremflickr.com/1920/1080/sun',
      default: 'https://loremflickr.com/1920/1080/landscape'
    };

    if (!this.weatherData) return imagens.default;

    const main = this.weatherData.weather[0].main.toLowerCase();

    if (main.includes('cloud')) return imagens.clouds;
    if (main.includes('rain') || main.includes('drizzle')) return imagens.rain;
    if (main.includes('clear')) return imagens.clear;

    return imagens.default;
  }
}