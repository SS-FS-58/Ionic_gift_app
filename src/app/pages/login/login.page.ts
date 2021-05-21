import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import { LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:any;
  password:any;
  constructor(public api:ApiService,
    public loadingController: LoadingController,public router:Router) { }

  ngOnInit() {
  }
  goto(p){
    alert('Please test test');
    if(this.email != '' && this.password != ''){
      localStorage.setItem('email',this.email);
      localStorage.setItem('password',this.password);
      this.router.navigateByUrl(p);
      alert('Please success');
    }else{
      alert('Please fill all details');
    }
  }
}
