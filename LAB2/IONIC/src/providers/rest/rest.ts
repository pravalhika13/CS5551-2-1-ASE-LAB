import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiUrl = 'https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=HwMJB7HorNpN&text=';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getClassified(searchText) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + searchText).subscribe(data => {resolve(data);}
      ,err => {
      console.log(err);
    });
  });
  }

}
