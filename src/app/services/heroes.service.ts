import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map, throwError, tap, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get(`${environment.apiURL}/heroes/allHeroes`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    );
  }

  getMyHeroes() {
    return this.http.get(`${environment.apiURL}/heroes/myHeroes`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
