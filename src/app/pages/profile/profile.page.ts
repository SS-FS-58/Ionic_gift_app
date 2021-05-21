import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  option:any = [
    {head:'Privacy Policy',sub_head:'Read our privacy ploicy',goto:''},
    {head:'Terms and conditions',sub_head:'Read our terms and conditions',goto:''},
    {head:'Contact support',sub_head:'We are ready to assist you',goto:''},
    {head:"FAQ's",sub_head:'frequently asked questions',goto:''},
  ];
  userData:any = {};
  constructor(public r:Router) {
    console.log(this.option);
    this.userData = localStorage.getItem('user');
    this.userData = JSON.parse(this.userData);
   }

  ngOnInit() {
  }
  goto(p){
    this.r.navigateByUrl(p);
  }
  logout(){
    localStorage.clear();
    this.r.navigateByUrl('home');
  }
}
