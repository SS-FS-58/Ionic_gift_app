import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-received-card',
  templateUrl: './received-card.page.html',
  styleUrls: ['./received-card.page.scss'],
}) 
export class ReceivedCardPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
goto(p){
  this.router.navigateByUrl(p);
}
}
