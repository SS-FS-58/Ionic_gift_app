import { Component, OnInit } from '@angular/core';
import {Camera,CameraOptions,PictureSourceType} from '@ionic-native/camera/ngx';
import {File,FileEntry } from '@ionic-native/file/ngx';

import {WebView} from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {ActivatedRoute,Router} from '@angular/router';
const MAX_FILE_SIZE = 20 * 1024 * 1024;
const ALLOWED_MIME_TYPE = "video/mp4";
import { NavController, ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
const formdata = new FormData();
import * as $ from 'jquery';
declare var cordova: any;
import {Base64} from '@ionic-native/base64/ngx';
@Component({ 
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  image_arry:any = [];
  selectedVideo: string;
  uploadedVideo:any =null;
  inputValue:any;
  msg:any;
  price:any;
  totalAmt:any;
  cardObj:any;
  image1:any = 'assets/img/image12.png';
  image2:any = 'assets/img/image12.png';
 
  constructor(private camera: Camera,
    private file: File,
    public platform:Platform,
   private webview:WebView,
   private filePath: FilePath,
   public router:Router,
   public activated:ActivatedRoute,
   private toastController: ToastController,
   private base64: Base64,
   private actionSheetController: ActionSheetController,public loadingController: LoadingController) {
    this.cardObj = localStorage.getItem('card_detail');
    this.cardObj = JSON.parse(this.cardObj);
    }

  ngOnInit() {
  }
  ionViewWillEnter(){
   
    console.log(this.cardObj);
    this.price = this.activated.snapshot.paramMap.get('price');
    this.totalAmt = this.price;
   
  }
  
async selectVideo() {
    const loading = await this.loadingController.create({
        message: 'Loading',
        duration: 2000
      });
    const options: CameraOptions = {
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options)
      .then( async (videoUrl) => {
        if (videoUrl) {
            await loading.present();
          this.uploadedVideo = null;
          
          var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
          var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);

          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
          
          try {
            var dirUrl = await this.file.resolveDirectoryUrl(dirpath);
            var retrievedFile = await this.file.getFile(dirUrl, filename, {});

          } catch(err) {
            await loading.dismiss();
            this.presentToast("Something went wrong.");
          }
          
          retrievedFile.file( data => {
             loading.dismiss();
              if (data.size > MAX_FILE_SIZE) {
                this.presentToast("You cannot upload more than 5mb.");
              }
              if (data.type !== ALLOWED_MIME_TYPE){
            this.presentToast("Incorrect file type.");
              }else{
                this.selectedVideo = retrievedFile.nativeURL;
              }
          });
        }
      },
      (err) => {
        console.log(err);
      });
  }
async imageFromWhre(){
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
                text: 'Library',
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
async selectImage2(){
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image source",
    buttons: [{
            text: 'Library',
            handler: () => {
                this.takePicture2(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
        },
        {
            text: 'Use Camera',
            handler: () => {
                this.takePicture2(this.camera.PictureSourceType.CAMERA);
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
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              this.base64.encodeFile(filePath).then((base64File: string) => {
                localStorage.setItem('imagefirst',base64File);
              }, (err) => {
                console.log(err);
              });
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
takePicture2(sourceType: PictureSourceType) {
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
    // this.startUpload(imagePath);
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              this.base64.encodeFile(filePath).then((base64File: string) => {
                localStorage.setItem('imagesecond',base64File);
              }, (err) => {
                console.log(err);
              });
                let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                this.copyFileToLocalDir2(correctPath, currentName, this.createFileName());
            });
    } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir2(correctPath, currentName, this.createFileName());
    }  
  });

}
createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
}

copyFileToLocalDir2(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    let filePath = this.file.dataDirectory + newFileName;
    var name = newFileName;
    this.image2 = this.pathForImage2(filePath);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}
copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    let filePath = this.file.dataDirectory + newFileName;
    this.image1 = this.pathForImage(filePath);
    
  }, error => {
      this.presentToast('Error while storing file.');
  });
}
  pathForImage(img) {
    if (img === null) {
      return ''; 
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
  pathForImage2(img) {
    if (img === null) {
      return ''; 
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  decrese(){
     this.inputValue = (<HTMLInputElement>document.getElementById("amt")).value;
     this.totalAmt = (<HTMLInputElement>document.getElementById("totalamt")).value;
     if(this.inputValue == 0){
        alert('amount cannot be less than zero');
     }else{
        this.inputValue = parseFloat(this.inputValue) -1;
        this.totalAmt = parseFloat(this.totalAmt)  - 1;
        (<HTMLInputElement>document.getElementById("amt")).value = this.inputValue;
        (<HTMLInputElement>document.getElementById("totalamt")).value = this.totalAmt;
     }
   
  }
  increase(){
    this.inputValue = (<HTMLInputElement>document.getElementById("amt")).value;
    this.totalAmt = (<HTMLInputElement>document.getElementById("totalamt")).value;
       this.inputValue = parseFloat(this.inputValue) +1;
       this.totalAmt = parseFloat(this.totalAmt)  + 1;
       (<HTMLInputElement>document.getElementById("amt")).value = this.inputValue;
       (<HTMLInputElement>document.getElementById("totalamt")).value = this.totalAmt;

  }
  buyNow(){
    var obj = {
      'total_amt':this.totalAmt,
      'price':this.price,
      'gift':this.inputValue,
      'message':this.msg,
      'card_img':this.cardObj.card_img
        };
      localStorage.setItem('data',JSON.stringify(obj));
      this.router.navigateByUrl('summary');
  }
  goback(){
    this.router.navigateByUrl('main');
  }
}
