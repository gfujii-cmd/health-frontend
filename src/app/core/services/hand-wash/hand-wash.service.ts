import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../model/response/base-response.model';
import { HandWashResponse } from '../../model/response/hand-wash-response.model';

const BASE_URL = environment.apiUrl + '/hand-wash-data'

@Injectable({
  providedIn: 'root'
})
export class HandWashService {

  constructor(private http: HttpClient) { }

  getWashData(email: string): Observable<BaseResponse<HandWashResponse>> {
    const url = `${BASE_URL}/${email}`;
    return this.http.get<BaseResponse<HandWashResponse>>(url);
  }
}
