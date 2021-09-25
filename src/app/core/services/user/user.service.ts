import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../model/response/base-response.model';
import { User } from '../../model/user.model';

const API_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(email: string): Observable<BaseResponse<User>> {
    return this.http.get<BaseResponse<User>>(API_URL + `/${email}`);
  }
}
