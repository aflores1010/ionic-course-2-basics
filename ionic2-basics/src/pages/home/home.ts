import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, Searchbar} from 'ionic-angular';
import {UsersPage} from "../users/users";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  passwordType: string = "password";
  passwordLabel: string = "Mostrar"
  showPassword: boolean = false;

  passwordBackup:string ="";
  btnFlag: boolean = false;
  @ViewChild('protectPass') protectPass;

  constructor(public navCtrl: NavController) {
         // this.protectPass.subscribe()

  }

  something() {
    this.navCtrl.push(UsersPage);
  }

  openUsers() {
    this.navCtrl.push(UsersPage);
  }


  public nothing(){
    setTimeout(() => {
      this.protectPass.setFocus();
    }, 150);
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordLabel ="Ocultar"
    }
    else {
      this.passwordLabel ="Mostrar"

    }
  }
}
