import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
const apiKey: string = environment.apiKeyOpenWeather;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}
