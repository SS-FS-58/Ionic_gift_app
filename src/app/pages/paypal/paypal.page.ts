import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  constructor(public r:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    document.getElementById('abc').style.transform = 'translate3d(100%,0,0)';
    document.getElementById('abc').innerText = 'Paypal';
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
        
   }else{
    this.goto('checkout');
   }
  }
  goto(p){
    this.r.navigateByUrl(p);
  }
}
