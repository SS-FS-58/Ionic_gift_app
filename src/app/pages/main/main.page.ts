import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public selectedItem: any;
  resArry: any = []
  resArryLoaded: any = []
  main_cat: any = [];
  categories: boolean = false;
  prod: boolean = false;
  searchBar:any;
  constructor(public r: Router, public service: ApiService) {
    this.selectedItem = 'Trending';

    this.service.getMainCategories().subscribe(res => {
      this.main_cat = res.result;
      console.log('fsdfdsf', this.main_cat);
      this.getPro(2);
      console.log(this.main_cat[0].id);
    }, err => {

    });
  }


  ngOnInit() {
    this.prod = true;
  }
  
  ionViewWillEnter() {

  }
  imagegg(e) {
    this.selectedItem = e;
    if (e == 'Trending') {
      this.categories = false;
      this.prod = true;
      this.getPro('2');
    } else if (e == 'Premium') {
      this.categories = false;
      this.prod = true;
      this.getPro('3');
    } else if (e == 'Basic') {
      this.categories = false;
      this.prod = true;
      this.getPro('1');
    } else {
      this.categories = true;
      this.prod = false;
    }

  }
  goto(p) {
    this.r.navigateByUrl(p);
  }
  price(p, img, name) {
    var card_detail = {
      card_name: name,
      card_img: img
    };
    localStorage.setItem('card_detail', JSON.stringify(card_detail));
    this.r.navigateByUrl('card-detail/' + p);
  }
  getPro(e) {
    this.service.presentLoading();
    this.service.getCategorie(e).subscribe(res => {
      console.log(res);
      if (res.status == '1') {
        this.resArry = res.result;
        this.resArryLoaded = res.result;
      } else {
        this.resArry = [];
      }

    }, err => {
      this.resArry = [];
    });
  }


  initializeItems(): void {
    this.resArry = this.resArryLoaded;
    console
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.resArry = this.resArry.filter((v) => {
      if ((v.sub_cat_name) && q) {
        if (v.sub_cat_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          if(this.categories){
            this.prod = true;
          }
          return true;
        }
        return false;
      }
    });
  }



}
