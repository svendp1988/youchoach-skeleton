import {Injectable} from '@angular/core';
import {AuthenticationHttpService} from './authentication.http.service';
import {tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'jwt_token';
  private usernameKey = 'username';
  private userLoggedInSource = new Subject<boolean>();

  userLoggedIn$ = this.userLoggedInSource.asObservable();

  constructor(private loginService: AuthenticationHttpService, private httpClient: HttpClient) {
  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        sessionStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer', '').trim());
        sessionStorage.setItem(this.usernameKey, loginData.username);
        this.userLoggedInSource.next(true);
      }));
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }


  getUsername() {
    return sessionStorage.getItem(this.usernameKey);
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.tokenKey) !== null;
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.usernameKey);
    this.userLoggedInSource.next(false);
  }
}
