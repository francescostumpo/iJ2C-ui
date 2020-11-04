import { Injectable } from '@angular/core';
import {Application} from '../models/application';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Client} from '../models/client';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private _applicationList: Array<Application>;

  constructor(private httpClient: HttpClient) { }


  get applicationList(): Array<Application> {
    return this._applicationList;
  }

  set applicationList(value: Array<Application>) {
    this._applicationList = value;
  }

  getApplications(applicationId) : Observable<HttpResponse<Object>>{
    return this.httpClient
      .get<Array<Client>>(environment.pfEvolutionHost + "/api/applications/getApplicationsByClientId/" + applicationId, {observe: 'response'})
  }
}
