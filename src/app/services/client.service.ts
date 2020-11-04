import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Client } from '../models/client';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _clients: Array<Client>;
  private _clientSelectedId: string;
  private _clientSelectedName: string;

  constructor(private httpClient: HttpClient) { }


  get clients(): Array<Client> {
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }

  get clientSelectedId(): string {
    return this._clientSelectedId;
  }

  set clientSelectedId(value: string) {
    this._clientSelectedId = value;
  }

  get clientSelectedName(): string {
    return this._clientSelectedName;
  }

  set clientSelectedName(value: string) {
    this._clientSelectedName = value;
  }

  getClients() : Observable<HttpResponse<Object>>{
    return this.httpClient
      .get<Array<Client>>(environment.pfEvolutionHost + "/api/clients/getAllClients", {observe: 'response'})
  }

  getClientById(clientId : string) : Observable<HttpResponse<Object>> {
    return this.httpClient
      .get<Array<Client>>(environment.pfEvolutionHost + "/api/clients/getClientById/" + clientId, {observe: 'response'})
  }

  createClient(client) : Observable<HttpResponse<Object>> {
    return this.httpClient
      .post(environment.pfEvolutionHost + "/api/clients/insertClient", client, {observe: 'response'});
  }
}
