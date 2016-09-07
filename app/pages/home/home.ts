import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CredentialsPage } from '../credentials/credentials'; 

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
      
  }

  public loggedIn: boolean = true;

  private data:string = "This is a string send to the next view";

  public doStuff()
  {
    // code that ony logged in users are allowed to execute
    console.log("disabled button used");
     
  }

  public doLogin()
  {
    console.log("login clicked");
    this.navCtrl.push(CredentialsPage, this.data);
  }
}
