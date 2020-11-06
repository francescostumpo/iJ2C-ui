import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Questionnaire} from '../models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private _questionnaire: Questionnaire;


  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  set questionnaire(value: Questionnaire) {
    this._questionnaire = value;
  }

  constructor(private httpClient: HttpClient) { }

  getQuestionnaireByApplicationId(applicationId) : Observable<HttpResponse<Object>>{
    return this.httpClient
      .get<any>(environment.pfEvolutionHost + "/api/questionnaires/getQuestionnaireByApplicationId/" + applicationId, {observe: 'response'})
  }

  createQuestionnaire(questionnaire: Questionnaire) : Observable<HttpResponse<Object>>{
    return this.httpClient
      .post<any>(environment.pfEvolutionHost + "/api/questionnaires/insertQuestionnaire", questionnaire, {observe: 'response'})
  }
}
