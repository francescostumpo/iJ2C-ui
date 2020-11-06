import {Option} from './option';

export class Question {
  id: string;
  questionSequence: number;
  questionClause: string;
  options: Array<Option>;
  questionTenant: string;
  questionTooltip: string;
  questionWeight: number;
}
