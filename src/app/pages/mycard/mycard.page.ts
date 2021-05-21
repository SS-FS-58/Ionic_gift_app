import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.page.html',
  styleUrls: ['./mycard.page.scss'],
})
export class MycardPage implements OnInit {

  constructor(public r:Router) { }

  ngOnInit() {
  }
  goto(p){
    this.r.navigateByUrl(p);
  }
}
