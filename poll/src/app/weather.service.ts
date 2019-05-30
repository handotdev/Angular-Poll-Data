import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2cbcc7bfd838c3033f35f88cdbb45335").pipe(map(result => result));
  }

}
