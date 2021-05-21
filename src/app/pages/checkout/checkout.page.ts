import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stripe} from '@ionic-native/stripe/ngx';
import {ApiService} from '../../services/api.service';
declare var cordova: any;
import {FileTransfer,FileTransferObject,FileUploadOptions} from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  data:any = {};
  mmyy:any;
  card_number:any;
  videoFileUpload: FileTransferObject;
  cvv:any;
  imag1Obj:any = '';
  imag2Obj:any = '';
  videoObj:any = {};
  cardHolderName:any;
  firstResObj:any = {};
  id:any;
  constructor( public fileTransfer:FileTransfer,public r:Router,public stripe:Stripe,public service:ApiService) { 
    
  }

  ngOnInit() {
  }
  ionViewDidLoad(){
    this.stripe.setPublishableKey('pk_test_qg9KfrXF9i0xnGCsHI3TbiPT00Oa118vb9');
  
  }
  ionViewWillEnter(){
    this.data = localStorage.getItem('data');
    this.data = JSON.parse(this.data);
    document.getElementById('abc').style.transform = 'translate3d(0%,0,0)';
    document.getElementById('abc').innerText = 'Credit Card';
   
    this.imag1Obj = localStorage.getItem('imagefirst');
    this.imag2Obj = localStorage.getItem('imagesecond');
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
        this.goto('paypal');
   }else{
   
    document.getElementById('abc').innerText = 'Credit Card';
   }
  }

  goto(p){
    this.r.navigateByUrl(p);
  }
  PayNow(){
    let card = {
      number: '4242424242424242', 
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
     }
     this.stripe.createCardToken(card)
        .then(token => console.log(token.id))
        .catch(error => console.error(error));
  }
  call(){
    this.imag1Obj =  this.imag1Obj.replace(/(\r\n|\n|\r)/gm, "");
   this.imag2Obj = this.imag2Obj.replace(/(\r\n|\n|\r)/gm, "");
   this.imag1Obj =  this.imag1Obj.substr(34);
   this.imag2Obj = this.imag2Obj.substr(34);
    var obj = {
      'sender_id':'1',
      'reciever_id':'2',
      'message':'hello',
      'gift_amount':'1000',
      'sender_email':'fatema@gmail.com',
      'receiver_email':'shaiwan@gmail.com',
      'card_id':'1',
      'video':'',
      'image1':this.imag1Obj,
      'image2':this.imag2Obj
    };
    this.service.sendCard(obj,this.imag1Obj,this.imag2Obj).subscribe(res=>{
      this.firstResObj = res.result;
      this.id = this.firstResObj.id;
      this.service.presentToast('Pyment Successfull');
      //this.goto('main');
    },err=>{
      
    })
  }
  
}
