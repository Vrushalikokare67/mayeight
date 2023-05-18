import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fullname : string ="";
  email : string ="";
  password : string ="";
  show: boolean= false;
  loginPageImage= 'assets/images/loginpageimage.jpg';
  logoImage= 'assets/image/logod.jpg';
submit(){
console.log("full name is " + this.fullname)
this.clear();
}

clear(){
  this.fullname ="";
  this.email ="";
  this.password = "";
  this.show = true;
  }

}
