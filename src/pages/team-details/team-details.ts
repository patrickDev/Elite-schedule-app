import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams';


@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {
public team: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data
    console.log('**nav params', this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
  }
goHome(){
  //this.navCtrl.push(MyTeamsPage)
  console.log('**parent', this.navCtrl.parent)
  this.navCtrl.parent.parent.popToRoot()
}
}
