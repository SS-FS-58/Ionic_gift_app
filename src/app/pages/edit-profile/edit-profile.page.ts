import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { File } from '@ionic-native/file/ngx';
import {Router} from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController,AlertController } from '@ionic/angular';
declare var cordova: any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  resPath:any = 'assets/img/default.png';
  userdata:any = {};
  fname:any;
  lname:any;
  email:any;
  pnumber:any; 
  dob:any;
  gender;
  filename:any;
  checkg:any = false;
  final:any;
  responsedata:any = [];
  constructor(public service:ApiService,
    private camera: Camera, private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,
    public loadingCtrl: LoadingController,
    public router:Router,
    private transfer: FileTransfer,
    public alertController: AlertController,
    private toastController: ToastController,
    private plt: Platform,
    private filePath: FilePath
    ) { 
    this.userdata = localStorage.getItem('user');
    this.userdata = JSON.parse(this.userdata);
    this.getProfile();
  }

  ngOnInit() {
  }
  getProfile(){
    this.service.presentLoading();
    this.service.getProfile(this.userdata.id).subscribe(res=>{
      console.log(res);
      this.resPath = res.result.image;
      this.fname = res.result.first_name;
      this.lname = res.result.last_name;
      this.email = res.result.email;
      this.pnumber = res.result.mobile;
      this.dob = res.result.dob;
      this.gender = res.result.gender;
      if(this.gender == 'female'){
        this.checkg = true;
        document.getElementById('abc').innerText = 'female';
      }else{
        this.checkg = false;
      }
    },err=>{
      console.log(err);
    });
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
        document.getElementById('abc').innerText = 'female';
        this.gender = 'female';
   }else{
    document.getElementById('abc').innerText = 'male';
    this.gender = 'male';
   }
}
//
async selectImage() {
  const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
              text: 'Load from Library',
              handler: () => { 
                  this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
              }
          },
          {
              text: 'Use Camera',
              handler: () => {
                  this.takePicture(this.camera.PictureSourceType.CAMERA);
              }
          },
          {
              text: 'Cancel',
              role: 'cancel'
          }
      ]
  });
  await actionSheet.present();
}
takePicture(sourceType: PictureSourceType) {
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  });

}
createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
}
pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    this.resPath = this.webview.convertFileSrc(img);
    return this.file.dataDirectory + img;
  }
}
copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    let filePath = this.file.dataDirectory + newFileName;
    this.filename = newFileName;
  this.final = this.pathForImage(filePath);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}
async presentToast(text) {
  const toast = await this.toastController.create({
      message: text,
      position: 'top',
      duration: 2000
  });
  toast.present();
}
goto(p){
  this.router.navigateByUrl(p);
}
async upload(){ 
  console.log(this.filename);
    const loading = await this.loadingCtrl.create({
        message: 'Please wait..'
      });
      await loading.present();
      if(this.filename == undefined){
        var obj = {

          'image': '',
        'email':this.email,
        'dob':this.dob,
        'first_name':this.fname,
        'last_name':this.lname,
        'mobile':this.pnumber,
        'gender':this.gender,
        'user_id':this.userdata.id
         }
        this.service.EditProfile(obj).subscribe(res=>{
          if(res.status == '1'){
            this.service.presentToast('Profile Updated Successfully !!');
          }else{
            this.service.presentToast('Error while updating profile !!');
          }
        },err=>{
          console.log(err);
        });
      }else{
        var targetPath = this.pathForImage(this.filename);
        var url = "http://yashtechsolutions.com/card_share/webservice/update_profile";
        this.filename = this.filename;
        var options = {
          fileKey: "image",
          fileName: this.filename, 
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params : {'image': this.filename,
            'email':this.email,
            'dob':this.dob,
            'first_name':this.fname,
            'last_name':this.lname,
            'mobile':this.pnumber,
            'gender':this.gender,
            'user_id':this.userdata.id
             }
          };
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.upload(targetPath, url, options)
          .then((data) => {
              this.responsedata = data;
              loading.dismiss(); 
              if(this.responsedata.response.status == '1'){
               localStorage.setItem('user',JSON.stringify(this.responsedata.response.result));
               this.presentToast('Update successfull!!');
               this.goto('main');
              }else{
               this.presentToast('Email Already Exist!!');
              }
          }, (err) => {
           loading.dismiss();
           this.presentToast('Network Connection Error!!');
          })
      }
  }
}
