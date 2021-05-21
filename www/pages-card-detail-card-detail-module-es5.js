function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-detail-card-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-detail/card-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-detail/card-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCardDetailCardDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n    <ion-icon (click)=\"goback()\" class=\"back\" name=\"arrow-back\"></ion-icon><span (click)=\"goback()\" class=\"back text-b\">Back</span>\n    <img src=\"{{cardObj.card_img}}\" style=\"width:100%;height:38%\">\n    \n    <ion-row>\n      <ion-col size=\"12\" class=\"center\">\n       <div class=\"trends\"><img src=\"assets/img/f2.png\"><span>Trending</span></div>\n       <ion-label class=\"lbl\">{{cardObj.card_name}}</ion-label>\n       <div class=\"lbl2\">Customize your card</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <button  class=\"add\"><ion-icon name=\"add-circle\" style=\"font-size:17px\"></ion-icon> Add photos and videos</button>\n      </ion-col>\n    </ion-row> \n  \n    <ion-row style=\"margin-top:15%\">\n      <ion-col class=\"center\">\n\n        <img (click)=\"imageFromWhre()\" style=\"width:60px\" src=\"{{image1}}\">\n      </ion-col>\n      <ion-col class=\"center\">\n        <img (click)=\"selectImage2()\" style=\"width:60px\" src=\"{{image2}}\">\n      </ion-col>\n      <ion-col class=\"center\">\n        <img (click)=\"selectVideo()\" style=\"width:60px;height:70px\" src=\"assets/img/youtube.png\">\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top:5%;\">\n      <ion-col size=\"4\">\n        <div (click)=\"decrese()\" class=\"right\">-</div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"center\">\n          <div syle=\"font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif\t\n          \">Gift Money</div>\n          <div  class=\"ruppe\">$<input id=\"amt\" type=\"number\" class=\"amnt\" value=\"00\">AUD</div>\n        </ion-col>\n      <ion-col size=\"4\">\n          <div (click)=\"increase()\" class=\"left\">+</div> \n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n      <ion-label style=\"margin-left: 24px;margin-top: 13px;\">Add Text</ion-label>\n      <ion-input [(ngModel)]=\"msg\" style=\"border-bottom:1px solid gray;width:95%\"></ion-input>\n      </ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"5\" style=\"text-align:right\">\n        <div class=\"ruppe tt\">$<input style=\"background:none\" disabled id=\"totalamt\" type=\"number\" class=\"amnt\" value=\"{{price}}\"> AUD</div>\n        <div class=\"lbl3\" syle=\"font-family:'Lucida Sans Unicode', 'Lucida Grande', sans-serif\">Including all taxes</div>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"5\" style=\"text-align:right\">\n      <button (click)=\"buyNow()\" class=\"bttn\"><ion-icon name=\"cart\"></ion-icon>Buy card</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/card-detail/card-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/card-detail/card-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: CardDetailPageModule */

  /***/
  function srcAppPagesCardDetailCardDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailPageModule", function () {
      return CardDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _card_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-detail.page */
    "./src/app/pages/card-detail/card-detail.page.ts");

    var routes = [{
      path: '',
      component: _card_detail_page__WEBPACK_IMPORTED_MODULE_6__["CardDetailPage"]
    }];

    var CardDetailPageModule = function CardDetailPageModule() {
      _classCallCheck(this, CardDetailPageModule);
    };

    CardDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_card_detail_page__WEBPACK_IMPORTED_MODULE_6__["CardDetailPage"]]
    })], CardDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/card-detail/card-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/card-detail/card-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCardDetailCardDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".trends {\n  width: 106px;\n  height: 26px;\n  background: #000;\n  border-radius: 10px;\n  color: #fff;\n  left: 34%;\n  font-size: 13px;\n  position: absolute; }\n\n.trends img {\n  position: relative; }\n\n.back {\n  position: fixed;\n  top: 10px;\n  color: #000;\n  font-size: 30px;\n  font-weight: bold;\n  left: 18px; }\n\n.text-b {\n  left: 46px;\n  font-size: 18px;\n  top: 13px; }\n\n.trends span {\n  position: relative;\n  top: -6px; }\n\n.trends span {\n  position: relative;\n  left: -5px; }\n\n.lbl {\n  position: relative;\n  top: 35px;\n  font-weight: bold;\n  font-size: 22px;\n  font-family: Tahoma, Geneva, sans-serif; }\n\n.lbl2 {\n  position: relative;\n  top: 50px;\n  font-size: 13px;\n  color: gray;\n  font-family: \"Courier New\", Courier, monospace; }\n\n.lbl3 {\n  font-size: 13px;\n  color: gray; }\n\n.add {\n  border: 2px solid gray;\n  background: none;\n  width: 197px;\n  height: 30px;\n  top: 49px;\n  position: relative;\n  border-radius: 10px;\n  left: 21%; }\n\n.right {\n  width: 50px;\n  height: 50px;\n  background: #f4f4f4;\n  border-radius: 50px;\n  float: right;\n  text-align: center;\n  font-size: 59px;\n  line-height: 50px; }\n\n.left {\n  width: 50px;\n  height: 50px;\n  background: #f4f4f4;\n  border-radius: 50px;\n  float: left;\n  text-align: center;\n  font-size: 35px;\n  line-height: 50px; }\n\n.ruppe {\n  font-weight: bold;\n  font-size: 20px;\n  color: #fcba7d; }\n\n.tt {\n  color: #000; }\n\n.bttn {\n  width: 113px;\n  height: 40px;\n  background: #fcba7d;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 10px; }\n\n.amnt {\n  width: 58px;\n  padding: 0px;\n  border: none;\n  text-align: center; }\n\n.amnt:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZC1kZXRhaWwvRjpcXDAxX2lvbmNcXGNhcmRuZXcvc3JjXFxhcHBcXHBhZ2VzXFxjYXJkLWRldGFpbFxcY2FyZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBUztFQUNULGVBQWM7RUFDZCxTQUFTLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUViO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1Q0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsOENBQTZDLEVBQUE7O0FBRWpEO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUVqQjtFQUNJLFdBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBRVosa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZC1kZXRhaWwvY2FyZC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyZW5kc3tcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnRyZW5kcyBpbWd7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGVmdDogMThweDtcclxufVxyXG4udGV4dC1ie1xyXG4gICAgbGVmdDo0NnB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbn1cclxuLnRyZW5kcyBzcGFue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNnB4O1xyXG59XHJcbi50cmVuZHMgc3BhbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbn1cclxuLmxibHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6VGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sYmwye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTpcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG4ubGJsM3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbi5hZGR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHdpZHRoOiAxOTdweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRvcDogNDlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBsZWZ0OiAyMSU7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnJ1cHBle1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgY29sb3I6I2ZjYmE3ZDtcclxufVxyXG4udHR7XHJcbiAgICBjb2xvcjojMDAwO1xyXG59XHJcbi5idHRue1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZjYmE3ZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYW1udHtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLy9wYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5hbW50OmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/card-detail/card-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/card-detail/card-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: CardDetailPage */

  /***/
  function srcAppPagesCardDetailCardDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDetailPage", function () {
      return CardDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");

    var MAX_FILE_SIZE = 20 * 1024 * 1024;
    var ALLOWED_MIME_TYPE = "video/mp4";
    var formdata = new FormData();

    var CardDetailPage =
    /*#__PURE__*/
    function () {
      function CardDetailPage(camera, file, platform, webview, filePath, router, activated, toastController, base64, actionSheetController, loadingController) {
        _classCallCheck(this, CardDetailPage);

        this.camera = camera;
        this.file = file;
        this.platform = platform;
        this.webview = webview;
        this.filePath = filePath;
        this.router = router;
        this.activated = activated;
        this.toastController = toastController;
        this.base64 = base64;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.image_arry = [];
        this.uploadedVideo = null;
        this.image1 = 'assets/img/image12.png';
        this.image2 = 'assets/img/image12.png';
        this.cardObj = localStorage.getItem('card_detail');
        this.cardObj = JSON.parse(this.cardObj);
      }

      _createClass(CardDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log(this.cardObj);
          this.price = this.activated.snapshot.paramMap.get('price');
          this.totalAmt = this.price;
        }
      }, {
        key: "selectVideo",
        value: function selectVideo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading, options;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading',
                      duration: 2000
                    });

                  case 2:
                    loading = _context2.sent;
                    options = {
                      mediaType: this.camera.MediaType.VIDEO,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                    };
                    this.camera.getPicture(options).then(function (videoUrl) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var filename, dirpath, dirUrl, retrievedFile;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!videoUrl) {
                                  _context.next = 22;
                                  break;
                                }

                                _context.next = 3;
                                return loading.present();

                              case 3:
                                this.uploadedVideo = null;
                                filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                                dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                                _context.prev = 7;
                                _context.next = 10;
                                return this.file.resolveDirectoryUrl(dirpath);

                              case 10:
                                dirUrl = _context.sent;
                                _context.next = 13;
                                return this.file.getFile(dirUrl, filename, {});

                              case 13:
                                retrievedFile = _context.sent;
                                _context.next = 21;
                                break;

                              case 16:
                                _context.prev = 16;
                                _context.t0 = _context["catch"](7);
                                _context.next = 20;
                                return loading.dismiss();

                              case 20:
                                this.presentToast("Something went wrong.");

                              case 21:
                                retrievedFile.file(function (data) {
                                  loading.dismiss();

                                  if (data.size > MAX_FILE_SIZE) {
                                    _this2.presentToast("You cannot upload more than 5mb.");
                                  }

                                  if (data.type !== ALLOWED_MIME_TYPE) {
                                    _this2.presentToast("Incorrect file type.");
                                  } else {
                                    _this2.selectedVideo = retrievedFile.nativeURL;
                                  }
                                });

                              case 22:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this, [[7, 16]]);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "imageFromWhre",
        value: function imageFromWhre() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Library',
                        handler: function handler() {
                          _this3.takePicture(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this3.takePicture(_this3.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    _context3.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "selectImage2",
        value: function selectImage2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Library',
                        handler: function handler() {
                          _this4.takePicture2(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this4.takePicture2(_this4.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(sourceType) {
          var _this5 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imagePath) {
            if (_this5.platform.is('android') && sourceType === _this5.camera.PictureSourceType.PHOTOLIBRARY) {
              _this5.filePath.resolveNativePath(imagePath).then(function (filePath) {
                _this5.base64.encodeFile(filePath).then(function (base64File) {
                  localStorage.setItem('imagefirst', base64File);
                }, function (err) {
                  console.log(err);
                });

                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this5.copyFileToLocalDir(correctPath, currentName, _this5.createFileName());
              });
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this5.copyFileToLocalDir(correctPath, currentName, _this5.createFileName());
            }
          });
        }
      }, {
        key: "takePicture2",
        value: function takePicture2(sourceType) {
          var _this6 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imagePath) {
            // this.startUpload(imagePath);
            if (_this6.platform.is('android') && sourceType === _this6.camera.PictureSourceType.PHOTOLIBRARY) {
              _this6.filePath.resolveNativePath(imagePath).then(function (filePath) {
                _this6.base64.encodeFile(filePath).then(function (base64File) {
                  localStorage.setItem('imagesecond', base64File);
                }, function (err) {
                  console.log(err);
                });

                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this6.copyFileToLocalDir2(correctPath, currentName, _this6.createFileName());
              });
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this6.copyFileToLocalDir2(correctPath, currentName, _this6.createFileName());
            }
          });
        }
      }, {
        key: "createFileName",
        value: function createFileName() {
          var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".jpg";
          return newFileName;
        }
      }, {
        key: "copyFileToLocalDir2",
        value: function copyFileToLocalDir2(namePath, currentName, newFileName) {
          var _this7 = this;

          this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            var filePath = _this7.file.dataDirectory + newFileName;
            var name = newFileName;
            _this7.image2 = _this7.pathForImage2(filePath);
          }, function (error) {
            _this7.presentToast('Error while storing file.');
          });
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(namePath, currentName, newFileName) {
          var _this8 = this;

          this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            var filePath = _this8.file.dataDirectory + newFileName;
            _this8.image1 = _this8.pathForImage(filePath);
          }, function (error) {
            _this8.presentToast('Error while storing file.');
          });
        }
      }, {
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return '';
          } else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "pathForImage2",
        value: function pathForImage2(img) {
          if (img === null) {
            return '';
          } else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: text,
                      position: 'bottom',
                      duration: 3000
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "decrese",
        value: function decrese() {
          this.inputValue = document.getElementById("amt").value;
          this.totalAmt = document.getElementById("totalamt").value;

          if (this.inputValue == 0) {
            alert('amount cannot be less than zero');
          } else {
            this.inputValue = parseFloat(this.inputValue) - 1;
            this.totalAmt = parseFloat(this.totalAmt) - 1;
            document.getElementById("amt").value = this.inputValue;
            document.getElementById("totalamt").value = this.totalAmt;
          }
        }
      }, {
        key: "increase",
        value: function increase() {
          this.inputValue = document.getElementById("amt").value;
          this.totalAmt = document.getElementById("totalamt").value;
          this.inputValue = parseFloat(this.inputValue) + 1;
          this.totalAmt = parseFloat(this.totalAmt) + 1;
          document.getElementById("amt").value = this.inputValue;
          document.getElementById("totalamt").value = this.totalAmt;
        }
      }, {
        key: "buyNow",
        value: function buyNow() {
          var obj = {
            'total_amt': this.totalAmt,
            'price': this.price,
            'gift': this.inputValue,
            'message': this.msg,
            'card_img': this.cardObj.card_img
          };
          localStorage.setItem('data', JSON.stringify(obj));
          this.router.navigateByUrl('summary');
        }
      }, {
        key: "goback",
        value: function goback() {
          this.router.navigateByUrl('main');
        }
      }]);

      return CardDetailPage;
    }();

    CardDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    CardDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-detail/card-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-detail.page.scss */
      "./src/app/pages/card-detail/card-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], CardDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-card-detail-card-detail-module-es5.js.map