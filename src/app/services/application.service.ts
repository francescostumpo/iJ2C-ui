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
  private clientName: string;
  private _applicationSelectedId: string;
  private _applicationSelectedName: string;

  constructor(private httpClient: HttpClient) {
  }


  get applicationList(): Array<Application> {
    return this._applicationList;
  }

  set applicationList(value: Array<Application>) {
    this._applicationList = value;
  }


  get applicationSelectedId(): string {
    return this._applicationSelectedId;
  }

  set applicationSelectedId(value: string) {
    this._applicationSelectedId = value;
  }

  get applicationSelectedName(): string {
    return this._applicationSelectedName;
  }

  set applicationSelectedName(value: string) {
    this._applicationSelectedName = value;
  }



  getApplications(applicationId) : Observable<HttpResponse<Object>>{
    return this.httpClient
      .get<Array<Application>>(environment.pfEvolutionHost + "/api/applications/getApplicationsByClientId/" + applicationId, {observe: 'response'})
  }

  createApplication(application) : Observable<HttpResponse<Object>>{
    return this.httpClient
      .post(environment.pfEvolutionHost + "/api/applications/insertApplication", application, {observe: 'response'});
  }

}
