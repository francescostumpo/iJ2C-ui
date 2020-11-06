import {QuestionAnswer} from './question-answer';

export class Questionnaire {
  id: string;
  applicationId: string;
  questionAnswerList: Array<QuestionAnswer>;
  resultClause: string;
  resultValue: number;
}
