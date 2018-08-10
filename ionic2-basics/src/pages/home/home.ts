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

  public togglePassword(flag?: boolean) {


    if (this.showPassword) {
      this.passwordLabel = "Mostrar";
      this.passwordType = "password";
    }
    else {
      this.passwordLabel = "Ocultar";
      this.passwordType = "text";
      // this.protectPass.setFocus();
    }
    /*  if (flag){
        this.passwordLabel = "Mostrar";
        this.passwordType = "password";
        this.showPassword = false;
        console.log("inside flag");
      }*/
    this.showPassword = !this.showPassword;
    console.log(this.showPassword, " toggle")
  }

  public hide() {
    console.log(this.showPassword,'-----hideee');
    console.log("hide");
    this.showPassword = !this.showPassword;
    this.passwordLabel = "Mostrar";
    this.passwordType = "password";
    this.protectPass.setFocus();
  }

  public show() {

    console.log("show");
    this.showPassword = !this.showPassword;
    this.passwordLabel = "Ocultar";
    this.passwordType = "text";
   // this.protectPass.setFocus();
   // setTimeout(() => {
      //this.protectPass.setFocus();
      //  this.showPassword=false;
      // this.passwordLabel = "Mostrar";
      // this.passwordType = "password";
   // }, 150);

  }
  public do(){
    console.log("------do");
  }

  public nothing(){
    setTimeout(() => {
      this.protectPass.setFocus();
    }, 150);

    console.log("nothing");
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordLabel ="Ocultar"
    }
    else {
      this.passwordLabel ="Mostrar"

    }
  }
  public asdf(){
  console.log("------else");
}
}
