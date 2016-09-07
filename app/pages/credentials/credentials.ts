import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the CredentialsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/credentials/credentials.html',
})
export class CredentialsPage {

  constructor(public navCtrl: NavController, navParams:NavParams, alertCtrl: AlertController)
  {
    this.alertCtrl = alertCtrl
    this.data = navParams.data;
  }

  private alertCtrl;

  private data;

  doCancel()
  {
    this.navCtrl.pop();
  }

  onPageDidEnter()
  {
    console.log("lifecycle event: entered credential page");

    let alert = this.alertCtrl.create({
    title: 'params data',
    subTitle: this.data,
    buttons: ['Dismiss']
    });
  
    alert.present();

  }
}
