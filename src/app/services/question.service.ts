import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  getAllQuestions() : Observable<HttpResponse<Object>>{
    return this.httpClient
      .get<any>(environment.pfEvolutionHost + "/api/questions/getAllQuestions", {observe: 'response'})
  }
}
