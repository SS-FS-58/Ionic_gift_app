import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import {Router} from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {ApiService} from 'src/app/services/api.service';
import {FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController,AlertController } from '@ionic/angular';
declare var cordova: any;
@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {
  resPath:any = "assets/img/default.png";
  filename:any;
  password = localStorage.getItem('password');
  fname:any;
  lname:any;
  email = localStorage.getItem('email');
  pnumber:any;
  dob:any;
  gender = 'male';
  final:any;
  responsedata:any = {};
  constructor(private camera: Camera, private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,
    public loadingCtrl: LoadingController,
    public router:Router,
    private transfer: FileTransfer,
    public alertController: AlertController,
    private toastController: ToastController,
    private plt: Platform,
    private filePath: FilePath,public service:ApiService) { }

  ngOnInit() {
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
  this.resPath = this.pathForImage(filePath);
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
    const loading = await this.loadingCtrl.create({
        message: 'Please wait..'
      });
      await loading.present();
    if(this.filename == undefined){
        var data = {
            'image': '',
            'email':this.email,
            'password':this.password,
            'dob':this.dob,
            'first_name':this.fname,
            'last_name':this.lname,
            'mobile':this.pnumber,
            'gender':this.gender
        };
       this.service.withoutImgsign(data).subscribe(res=>{
           loading.dismiss();
           if(res.status == '1'){
               localStorage.setItem('user',JSON.stringify(res.result));
               this.service.presentAlert('You have received a new card!')
               this.goto('main');
           }else{
               this.service.presentAlert('Email already exist!');
           }
       },err=>{
        loading.dismiss();
        this.service.presentAlert('Network Connection Error');
       });
    }else{
       
        var targetPath = this.pathForImage(this.filename);
        var url = "https://yashtechsolutions.com/card_share/webservice/signup";
        this.filename = this.filename;
        var options = {
          fileKey: "image",
          fileName: this.filename,
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params : {'image': this.filename,
            'email':this.email,
            'password':this.password,
            'dob':this.dob,
            'first_name':this.fname,
            'last_name':this.lname,
            'mobile':this.pnumber,
            'gender':this.gender
             }
          };
       const fileTransfer: FileTransferObject = this.transfer.create();
       fileTransfer.upload(targetPath, url, options)
       .then((data) => {
           this.responsedata = data;
           loading.dismiss(); 
           if(this.responsedata.response.status == '1'){
            localStorage.setItem('user',JSON.stringify(this.responsedata.response.result));
            this.presentToast('Registeration successfull!!');
            this.goto('main');
           }else{
            this.presentToast('Email Already Exist!!');
           }
       }, (err) => {
        loading.dismiss();
        this.presentToast('Registeration failed!!');
       })
    }
  }

}
