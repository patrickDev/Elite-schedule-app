import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailsPage } from '../team-details/team-details';
import { StandingsPage } from '../standings/standings';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public team: any ={}

  public teamDetailTab = TeamDetailsPage
  public standingsTab =  StandingsPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
