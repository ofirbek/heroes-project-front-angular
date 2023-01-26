import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isUserLogged = new BehaviorSubject<boolean>(false);
  isUserLogged = this._isUserLogged.asObservable();
  private _myUser = new BehaviorSubject<User | null>(null);
  myUser$ = this._myUser.asObservable();
  private _token: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >('');
  token: Observable<string | null> = this._token.asObservable();

  get myUser() {
    return this._myUser.value;
  }

  private setMyUser(user: User) {
    this._myUser.next(user);
    this._isUserLogged.next(true);
  }

  logout() {
    this._myUser.next(null);
    this._isUserLogged.next(false);
    this._token.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${environment.apiURL}/users/login`, data).pipe(
      tap((res: any): void => {
        const token: string = res.token;
        localStorage.setItem('token', res.token);
        this.setToken(token);
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        console.log(error);
        return error;
      })
    );
  }

  setToken(token: string) {
    this._token.next(token);
  }

  isAuthenticated(): boolean {
    if (this._token.value) {
      const exp = (jwt_decode as any).default(this._token.value).exp;
      if (exp && Date.now() / 1000 < exp) return true;
    }
    return false;
  }
  handleTokenExpiration(): void {
    if (!this.isAuthenticated()) this.logout();
  }
}
