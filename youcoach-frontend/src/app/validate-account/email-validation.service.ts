import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';
import {IValidationData} from './IValidationData';
import {IResendValidation} from './IResendValidation';
import {IValidationResult} from './IValidationResult';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  readonly url = `${environment.backendUrl}/users`;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  validate(data: IValidationData): Observable<IValidationResult> {
    return this.http.post<IValidationResult>(this.url + '/validate', data, this.httpOptions);
  }

  resend(data: IResendValidation): Observable<IResendValidation> {
    return this.http.patch<IResendValidation>(this.url + '/validate', data, this.httpOptions);
  }
}
