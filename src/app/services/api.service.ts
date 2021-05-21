import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { AlertController,LoadingController,ToastController } from '@ionic/angular';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};
const apiUrl = "https://yashtechsolutions.com/card_share/webservice"; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient,
    public alertController: AlertController,
    public loadingctrl:LoadingController,public toastController: ToastController) {

   }
   async presentAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingctrl.create({
      spinner:'dots',
      duration: 1000
    });
    await loading.present();
  }
   login(data):Observable<any>{
     console.log(data);
    const url = `${apiUrl}/login?`;
    return this.http.post(url+'email='+data.email+'&password='+data.password,httpOptions)
   }
   forgetPass(mail):Observable<any>{
    const url = `${apiUrl}/forgot_password?`;
    return this.http.post(url+'email='+mail,httpOptions)
   }
   getProfile(id):Observable<any>{
    const url = `${apiUrl}/get_profile?`;
    return this.http.post(url+'user_id='+id,httpOptions);
   }
   withoutImgsign(data):Observable<any>{
    const url = `${apiUrl}/signup?`;
    return this.http.get(url+'image='+''+'&email='+data.email+'&password='+data.password+'&dob='+data.dob+'&first_name='+data.first_name+'&last_name='+data.last_name+'&mobile='+data.mobile+'&gender='+data.gender,httpOptions)
   }
   getCategorie(type):Observable<any>{
    const url = `${apiUrl}/get_sub_category?`;
    return this.http.post(url+'category_id='+type,httpOptions);
   }
   getMainCategories():Observable<any>{
    const url = `${apiUrl}/get_category?`;
    return this.http.post(url,httpOptions);
   }
   EditProfile(data):Observable<any>{
    const url = `${apiUrl}/update_profile?`;
    return this.http.post(url+'first_name='+data.first_name+'&last_name='+data.last_name+'&email='+data.email+'&mobile='+data.mobile+'&gender='+data.gender+'&dob='+data.dob+'&image='+''+'&user_id='+data.user_id,httpOptions);

   }
   sendCard(data,img1,kk):Observable<any>{
    const url = `${apiUrl}/add_card_details?`;
    return this.http.post(url+'sender_id='+data.sender_id+'&reciever_id='+data.reciever_id+'&message='+data.message+'&gift_amount='+data.gift_amount+'&sender_email='+data.sender_email+'&receiver_email='+data.receiver_email+'&image1='+img1+'&card_id='+data.card_id+'&image2='+kk+'&video='+'',httpOptions);
   }
} 
