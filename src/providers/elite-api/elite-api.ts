import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EliteApi {

  private baseUrl = "https://elite-schedule-app-i2-2a790.firebaseio.com/"
  
  constructor(public http: HttpClient) {
  }

}
