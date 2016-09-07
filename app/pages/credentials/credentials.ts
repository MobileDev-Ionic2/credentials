import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CredentialsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/credentials/credentials.html',
})
export class CredentialsPage {

  constructor(public navCtrl: NavController) {

  }

  doCancel()
  {
    this.navCtrl.pop();
  }

  onPageDidEnter()
  {
    console.log("lifecycle event: entered credential page");
  }
}
