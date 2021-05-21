import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isZoomed: boolean = true;
  loginId: boolean = false;
  signupId: boolean = false;

  email: any;
  password: any;


  constructor(public api:ApiService,public loadingController: LoadingController,public r:Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  goto(p){
    this.r.navigateByUrl(p);
  }
  checkPage(id){
    if(id==='login'){
      this.loginId = true;
      this.signupId = false;
    }else{
      this.loginId = false;
      this.signupId = true;
    }
  }

  async login(){
    var data = {
      'email':this.email,
      'password':this.password
    };
    this.api.presentLoading();
    this.api.login(data).subscribe(res=>{
     if(res.status == '0'){
      this.api.presentAlert('Invalid Credentials test ok!!!');
     }if(res.status == '1'){
      // this.api.presentAlert('!!!');
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

