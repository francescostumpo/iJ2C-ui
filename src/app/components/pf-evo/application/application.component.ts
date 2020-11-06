import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../services/application.service';
import {ClientService} from '../../../services/client.service';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import {QuestionService} from '../../../services/question.service';
import {Question} from '../../../models/question';
import {Questionnaire} from '../../../models/questionnaire';
import {QuestionAnswer} from '../../../models/question-answer';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applicationName: string = this.applicationService.applicationSelectedName;
  clientName: string = this.clientService.clientSelectedName;
  questionList: Array<Question>;
  questionnaire: Questionnaire;
  questionnaireAnswerList: Array<QuestionAnswer>;
  resultClause: string = "No strategy available"
  resultValue: number = 0.0;

  constructor(private applicationService: ApplicationService, private clientService: ClientService, private questionnaireService: QuestionnaireService, private questionService: QuestionService) {  }

  ngOnInit(): void {
    this.getQuestionnaireByApplicationId();
    this.getAllQuestions();
  }

  getQuestionnaireByApplicationId(){
    this.questionnaireService.getQuestionnaireByApplicationId(this.applicationService.applicationSelectedId).subscribe( res =>{

      if(this.isEmpty(res.body)){
        console.log("No questionnaires found for applicationId: " + this.applicationService.applicationSelectedId);
        this.questionnaire = undefined;
      }else{
        console.log("Questionnaire from mongo: ", res.body)
        // @ts-ignore
        this.questionnaire = res.body;
        this.resultClause = this.questionnaire.resultClause;
        this.resultValue = this.questionnaire.resultValue;
      }
    }, error => {
      console.log("No questionnaires found for applicationId: " + this.applicationService.applicationSelectedId);
      this.questionnaire = new Questionnaire();
    })
  }

  getAllQuestions(){
    this.questionService.getAllQuestions().subscribe( res =>{
      // @ts-ignore
      this.questionList = res.body;
      console.log("Available questions: ", this.questionList)
    })
  }

  getAnswerValue(question: Question) {
    if(this.questionnaire === undefined){
      return 1.0;
    }
    for(let i=0; i< this.questionnaire.questionAnswerList.length; i++){
      if(question.id === this.questionnaire.questionAnswerList[i].questionId){
        return this.questionnaire.questionAnswerList[i].answerValue;
      }
    }
    console.log("No matching questions")
    return 1.0;
  }

  submitQuestionnaireOnMongo() {
    if(this.questionnaire === undefined){
      this.questionnaire = new Questionnaire();
      this.questionnaire.questionAnswerList = this.questionnaireAnswerList;
    }
    this.questionnaire.applicationId = this.applicationService.applicationSelectedId;
    console.info(this.questionnaire);
    let message: any;
    this.questionnaireService.createQuestionnaire(this.questionnaire).subscribe(res =>{
      message = res.body;
      alert(message.message)
      this.getQuestionnaireByApplicationId();
    }, error => {
      message = error.message;
      alert("Error: " + message.message)
    })

  }

  handleChange(event, questionId){
    if(this.questionnaire !== undefined){
      for(let i=0; i< this.questionnaire.questionAnswerList.length; i++){
        if(questionId === this.questionnaire.questionAnswerList[i].questionId){
          this.questionnaire.questionAnswerList[i].answerValue = event.target.value;
          return;
        }
      }
      let questionAnswer = new QuestionAnswer();
      questionAnswer.questionId = questionId;
      questionAnswer.answerValue = event.target.value;
      this.questionnaire.questionAnswerList.push(questionAnswer);
      return;
    }else{
      if(this.questionnaireAnswerList === undefined){
        this.questionnaireAnswerList = new Array<QuestionAnswer>();
      }
      for(let i=0; i< this.questionnaireAnswerList.length; i++){
        if(questionId === this.questionnaireAnswerList[i].questionId){
          this.questionnaireAnswerList[i].answerValue = event.target.value;
          return;
        }
      }
      let questionAnswer = new QuestionAnswer();
      questionAnswer.questionId = questionId;
      questionAnswer.answerValue = event.target.value;
      this.questionnaireAnswerList.push(questionAnswer);
      return;
    }

  }


  isEmpty(obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
}
