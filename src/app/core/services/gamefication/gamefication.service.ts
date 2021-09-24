import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../model/response/base-response.model';
import { User } from '../../model/user.model'

const BASE_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})
export class GameficationService {

  constructor(private http: HttpClient) { }

  getTopList(): Observable<BaseResponse<User[]>> {
    const url = `${BASE_URL}/top`;
    return this.http.get<BaseResponse<User[]>>(url);
  }
}
