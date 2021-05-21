import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  data:any = {};
  receive_emil:any;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  goto(p){
    localStorage.setItem('receiver_email',this.receive_emil);
    this.router.navigateByUrl('checkout');
  }
  ionViewWillEnter(){
    this.data = localStorage.getItem('data');
    this.data = JSON.parse(this.data);
  }
}
 