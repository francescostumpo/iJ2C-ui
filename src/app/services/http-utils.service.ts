import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor() { }

  static verifyHttpResponse(data: any): any{
    let JSONObject = null;
    if(data.status === 200){
      JSONObject = data.body;
    }
    return JSONObject;
  }

}
