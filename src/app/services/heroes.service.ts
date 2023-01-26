import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClientModule) {}

  s = environment.apiURL;
  getHeroes(data:) {
    return this.http.get(`${environment.apiURL}/users/login`, data)
  }
}
