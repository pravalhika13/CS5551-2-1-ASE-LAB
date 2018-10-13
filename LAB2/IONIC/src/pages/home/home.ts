import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchText : string;
  positive : number;
  negative : number;
  outputText : string;

  constructor(public navCtrl: NavController, public rest:RestProvider) {
  }

  clickButton(){
    this.rest.getClassified(this.searchText).then(
      data => {
        if (data.negative > data.positive)
          this.outputText = "This word is negative";
        else
          this.outputText = "This word is positive";
      }
    )};

}
