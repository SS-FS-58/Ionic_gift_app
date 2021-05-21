import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isZoomed: boolean = true;

  email: any;
  password: any;



  constructor(public r: Router) { }

  ngOnInit() {
  }
  goto(p) {
    this.r.navigateByUrl(p);
  }

  login(p) {
    if (this.email != '' && this.password != '') {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.r.navigateByUrl(p);
    } else {
      alert('Please fill all details');
    }
  }


}
