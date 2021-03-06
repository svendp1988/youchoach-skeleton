import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from '../message.service';
import {ICoachee} from '../register/icoachee';
import {IMember} from '../IMember';
import {catchError} from 'rxjs/operators';
import {ICoacheeRegisterResult} from './ICoacheeRegisterResult';
import {IRequestPasswordResetToken} from '../IRequestPasswordResetToken';
import {IPasswordChange} from '../IPasswordChange';
import {IPasswordChangeResult} from '../IPasswordChangeResult';
import {environment} from '../../environments/environment';
import {IMemberProfileUpdated} from '../edit-profile/IMemberProfileUpdated';

@Injectable({
  providedIn: 'root'
})
export class CoacheeService {
  readonly url = `${environment.backendUrl}/users`;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'http://localhost:4200'
    }),

  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  register(coachee: ICoachee): Observable<ICoacheeRegisterResult> {
    return this.http.post<ICoacheeRegisterResult>(this.url, coachee, this.httpOptions);
  }
  requestPasswordResetToken(tokenRequest: IRequestPasswordResetToken): Observable<any> {
    return this.http.post<any>(this.url + '/password/reset', tokenRequest, this.httpOptions);
  }
  performPasswordReset(passwordChange: IPasswordChange): Observable<IPasswordChangeResult> {
    return this.http.patch<any>(this.url + '/password/reset', passwordChange, this.httpOptions);
  }

  getCoachee(): Observable<IMember> {
    return this.http.get<IMember>(this.url + '/profile');
  }

    getCoacheeById(id: number): Observable<IMember> {
    return this.http.get<IMember>(this.url + '/profile' + `/${id}`).pipe(
      catchError(this.handleError<IMember>(`getCoachee with id: ${id}`))
    );
  }

  updateProfile(member: IMember): Observable<IMemberProfileUpdated> {
    return this.http.put<IMemberProfileUpdated>(this.url + '/profile', member, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
