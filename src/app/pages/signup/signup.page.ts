import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import { LoadingController,AlertController  } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:any;
  password:any;
  constructor(public api:ApiService,public loadingController: LoadingController,public r:Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  goto(p){
    this.r.navigateByUrl(p);
  }
  async login(){
    var data = {
      'email':this.email,
      'password':this.password
    };
    this.api.presentLoading();
    this.api.login(data).subscribe(res=>{
     if(res.status == '0'){
      this.api.presentAlert('Invalid  test');
     }if(res.status == '1'){
       console.log("Valid login");
      this.api.presentAlert('Valid Credentials');
       localStorage.setItem('user',JSON.stringify(res.result));
       this.goto('main');
     }
    },err=>{
      this.api.presentAlert('Network connection error');
    });
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
