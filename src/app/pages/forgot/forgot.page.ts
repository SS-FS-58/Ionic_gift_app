import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public forgotform: FormGroup;
  email:any; 
  constructor(public router:Router,
      public service:ApiService,
      public ldngCrtl: LoadingController,
      public formBuilder: FormBuilder
    ) { 
      this.forgotform = formBuilder.group({
        email: ['', Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])]
      });
     
    }

  ngOnInit() {
  }
  goto(p){
    this.router.navigateByUrl(p);
  }
 async change(val){
  // console.log(val);
   this.service.presentLoading();
    this.service.forgetPass(val.email).subscribe(res=>{
     if(res.status == '0'){
      this.service.presentAlert('Link send successfully');
     }else{
      this.service.presentAlert('Enter valid email');
     }
    },err=>{
     this.service.presentAlert('Network connection error');
    });
  }
}
