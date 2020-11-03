export class Client {
  private _id: string;
  private _clientName: string;
  private _clientReferent: string;
  private _clientReferentName: string;
  private _industry: string;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get clientName(): string {
    return this._clientName;
  }

  set clientName(value: string) {
    this._clientName = value;
  }

  get clientReferent(): string {
    return this._clientReferent;
  }

  set clientReferent(value: string) {
    this._clientReferent = value;
  }

  get clientReferentName(): string {
    return this._clientReferentName;
  }

  set clientReferentName(value: string) {
    this._clientReferentName = value;
  }

  get industry(): string {
    return this._industry;
  }

  set industry(value: string) {
    this._industry = value;
  }
}
