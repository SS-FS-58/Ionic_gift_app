(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <img src=\"assets/img/bglogin.png\" [class]=\"isZoomed?'backImg scale-up-tl':'backImg scale-down-tl'\" />\r\n\r\n\r\n\r\n  <ion-grid [class]=\"isZoomed\r\n    ?\r\n    'fade-out md hydrated loginComp'\r\n    :\r\n    'fade-in md hydrated loginComp'\">\r\n\r\n   \r\n    <ion-row style=\"margin-top: 13px;\">\r\n      <ion-col (click)=\"isZoomed=true\">\r\n        <ion-icon (click)=\"goto('home')\" name=\"arrow-back\" class=\"backIcon\">\r\n        </ion-icon>\r\n        <span (click)=\" goto('home')\" class=\"backText\">\r\n          Back\r\n        </span>\r\n        \r\n  \r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    \r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <div class=\"lblll\">Welcome back</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n\r\n\r\n    <ion-row style=\"margin-top: 57%;\" *ngIf=\"loginId\">\r\n      <ion-col size=\"12\">\r\n        <div class=\"card\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div class=\"unmae\">Username or Email</div>\r\n              <ion-input [(ngModel)]=\"email\" class=\"inp\"></ion-input>\r\n              <div class=\"unmae\">Password</div>\r\n              <ion-input type=\"password\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <span class=\"for\" (click)=\"goto('forgot')\">Forgot password?</span>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-button (click)=\"login()\" class=\"btn\" size=\"small\" color=\"dark\">Login</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"center\">\r\n              <span style=\"font-size: 13px;\">Don't have an account?</span><span\r\n                style=\"font-weight: bold;text-decoration: underline;font-size: 14px;\">Signup</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row style=\"margin-top: 52%;\" *ngIf=\"signupId\">\r\n      <ion-col size=\"12\" >\r\n        <div class=\"card\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div class=\"unmae\">Username or Email</div>\r\n              <ion-input [(ngModel)]=\"email\" class=\"inp\"></ion-input>\r\n              <div class=\"unmae\">Password</div>\r\n              <ion-input type=\"password\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\r\n            </ion-col>\r\n          </ion-row> \r\n         \r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n                <ion-button (click)=\"goto('add-profile')\" class=\"btn\" size=\"small\" color=\"dark\">Sign Up</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"center\">\r\n              <span style=\"font-size: 13px;\">Already have an account?</span><span (click)=\"goto('signup')\" style=\"font-weight: bold;text-decoration: underline;font-size: 14px;\">Login</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n  <div style=\"position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 49px;\r\n\">\r\n  <ion-row [class]=\"isZoomed\r\n    ?\r\n    'fade-in md hydrated loginComp'\r\n    : \r\n    'fade-out md hydrated loginComp'\">\r\n      \r\n      <ion-col size=\"12\" class=\"center\">\r\n        <div class=\"lbll\">Lets share</div>\r\n        <div class=\"lbl\">happiness<img class=\"emot\" src=\"assets/img/emoticons-smileys.jpg\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div style=\"position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 49px;\r\n\">\r\n    \r\n    <ion-row >\r\n      <ion-col size=\"6\" class=\"right\">\r\n        <ion-button (click)=\"isZoomed=false;checkPage('login')\"\r\n          [class]=\"isZoomed\r\n          ?\r\n          'fade-in btn ion-color ion-color-dark md button button-small button-solid ion-activatable ion-focusable hydrated'\r\n          :\r\n          'fade-out btn ion-color ion-color-dark md button button-small button-solid ion-activatable ion-focusable hydrated'\" color=\"dark\">\r\n          Login</ion-button>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button (click)=\"isZoomed=false;checkPage('signup')\"\r\n          [class]=\"isZoomed\r\n        ?\r\n        'fade-in btn ion-color ion-color-tertiary md button button-small button-solid ion-activatable ion-focusable hydrated'\r\n        :\r\n        'fade-out btn ion-color ion-color-tertiary md button button-small button-solid ion-activatable ion-focusable hydrated'\"\r\n          >Signup</ion-button>\r\n      </ion-col>\r\n    </ion-row >\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-label [class]=\"isZoomed\r\n        ?\r\n        'fade-in white sc-ion-label-md-h sc-ion-label-md-s md hydrated'\r\n        :\r\n        'fade-out white sc-ion-label-md-h sc-ion-label-md-s md hydrated'\">\r\n          or login with\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"google\" [class]=\"isZoomed\r\n        ?\r\n        'fade-in google'\r\n        :\r\n        'fade-out google'\">\r\n\r\n          <img class=\"stick\" src=\"assets/img/google.png\">\r\n          <span class=\"gimg\">Google</span>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <!-- <app-login style=\"position: absolute;bottom: '20%';\"></app-login> -->\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backImg {\n  position: fixed;\n  width: \"100%\";\n  height: \"100%\" !important; }\n\n.scale-up-tl {\n  -webkit-animation: scale-up-tl 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: scale-up-tl 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n.scale-down-tl {\n  -webkit-animation: scale-down-tl 0.8s cubic-bezier(0.25, 0.86, 0.85, 1) both;\n          animation: scale-down-tl 0.8s cubic-bezier(0.25, 0.86, 0.85, 1) both;\n  height: 100%; }\n\n.fade-out {\n  -webkit-animation: fade-out 0.6s ease-out both;\n  animation: fade-out 0.6s ease-out both; }\n\n.fade-in {\n  -webkit-animation: fade-in 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n\n.backIcon {\n  font-weight: bold;\n  font-size: 25px; }\n\n.backText {\n  font-weight: bold;\n  margin-left: 34px;\n  margin-top: -25px;\n  display: block; }\n\n@-webkit-keyframes scale-down-tl {\n  0% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; } }\n\n@keyframes scale-down-tl {\n  0% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; } }\n\n@-webkit-keyframes scale-up-tl {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n  100% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; } }\n\n@keyframes scale-up-tl {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n  100% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.head {\n  color: grey;\n  margin-top: 26%;\n  font-size: 26px; }\n\n.subhead {\n  font-size: 41px;\n  font-weight: bold;\n  position: relative;\n  left: 19%; }\n\n.btn {\n  width: 122px;\n  height: 34px; }\n\n.google {\n  width: 90%;\n  height: 35px;\n  border-radius: 10px;\n  margin-left: 5%;\n  background: #fff;\n  position: absolute; }\n\n.gimg {\n  position: relative;\n  left: 31%;\n  top: -5px; }\n\n.stick {\n  max-width: 100%;\n  position: relative;\n  border: 0;\n  left: 10px;\n  top: 5px; }\n\nion-button {\n  text-transform: capitalize; }\n\n.loginComp .card {\n  width: 100%;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 11px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding-bottom: 8px; }\n\n.loginComp .lblll {\n  font-weight: bold;\n  font-size: 35px;\n  font-weight: 700;\n  margin-top: 55px; }\n\n.loginComp .lbl {\n  font-size: 35px;\n  font-weight: 700;\n  margin-top: -10px; }\n\n.loginComp .lbll {\n  font-size: 25;\n  font-size: 22px;\n  color: darkgray;\n  margin-top: 98px; }\n\n.loginComp .emot {\n  max-width: 10%;\n  position: relative;\n  border: 0;\n  left: 10px;\n  top: 5px; }\n\n.loginComp .btn {\n  width: 92%;\n  height: 34px;\n  text-transform: capitalize;\n  margin: 0 auto;\n  display: block; }\n\n.loginComp .inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 5px;\n  width: 85%;\n  margin-left: 8%;\n  --padding-bottom: 2px !important; }\n\n.loginComp .unmae {\n  font-size: 14px;\n  margin-top: 10%;\n  margin-left: 8%; }\n\n.loginComp .for {\n  text-decoration: underline;\n  color: #fcba7d;\n  font-size: 13px;\n  margin-left: 7%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9GOlxcMDFfaW9uY1xcY2FyZG5ldy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBdUIsRUFBQTs7QUFHekI7RUFDRSw0RUFBb0U7VUFBcEUsb0VBQW9FLEVBQUE7O0FBRXRFO0VBQ0UsNEVBQW9FO1VBQXBFLG9FQUFvRTtFQUNwRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSw4Q0FBOEM7RUFDOUMsc0NBQXNDLEVBQUE7O0FBRXhDO0VBQ0Usd0VBQXdFO0VBQ3hFLGdFQUFnRSxFQUFBOztBQUdsRTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBQSxFQUFBOztBQVh6QjtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBQSxFQUFBOztBQUd6QjtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBQSxFQUFBOztBQVh6QjtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBQSxFQUFBOztBQUd6QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFMZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFHZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFMZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVEsRUFBQTs7QUFFVjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUVJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSxtQkFBbUIsRUFBQTs7QUFOdkI7RUFTSyxpQkFBaUI7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFacEI7RUFnQkksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFsQnJCO0VBcUJJLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQXhCcEI7RUEyQkksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVEsRUFBQTs7QUEvQlo7RUFrQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUF0Q2xCO0VBeUNJLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZixnQ0FBaUIsRUFBQTs7QUE3Q3JCO0VBZ0RJLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQWxEbkI7RUFxREksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCdzcmMvYXNzZXRzL2ltZy9iZy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcbi5iYWNrSW1nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IFwiMTAwJVwiO1xyXG4gIGhlaWdodDpcIjEwMCVcIiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY2FsZS11cC10bCB7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC10bCAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XHJcbn1cclxuLnNjYWxlLWRvd24tdGwge1xyXG4gIGFuaW1hdGlvbjogc2NhbGUtZG93bi10bCAwLjhzIGN1YmljLWJlemllcigwLjI1LCAwLjg2LCAwLjg1LCAxKSBib3RoO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5mYWRlLW91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDAuNnMgZWFzZS1vdXQgYm90aDtcclxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuNnMgZWFzZS1vdXQgYm90aDtcclxufVxyXG4uZmFkZS1pbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC44cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5iYWNrVGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS1kb3duLXRsIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS11cC10bCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi5oZWFkIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBtYXJnaW4tdG9wOiAyNiU7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5zdWJoZWFkIHtcclxuICBmb250LXNpemU6IDQxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE5JTtcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTIycHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5nb29nbGUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5naW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMzElO1xyXG4gIHRvcDogLTVweDtcclxufVxyXG4uc3RpY2sge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5sb2dpbkNvbXAge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDExcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIC5sYmxsbCB7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICB9XHJcbiAgIC5sYmwge1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5sYmxse1xyXG4gICAgZm9udC1zaXplOiAyNTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDk4cHg7XHJcbiAgfVxyXG4gIC5lbW90e1xyXG4gICAgbWF4LXdpZHRoOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmlucCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWRlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnVubWFlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICB9XHJcbiAgLmZvciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjZmNiYTdkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let HomePage = class HomePage {
    constructor(api, loadingController, r, alertController) {
        this.api = api;
        this.loadingController = loadingController;
        this.r = r;
        this.alertController = alertController;
        this.isZoomed = true;
        this.loginId = false;
        this.signupId = false;
    }
    ngOnInit() {
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
    checkPage(id) {
        if (id === 'login') {
            this.loginId = true;
            this.signupId = false;
        }
        else {
            this.loginId = false;
            this.signupId = true;
        }
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var data = {
                'email': this.email,
                'password': this.password
            };
            this.api.presentLoading();
            this.api.login(data).subscribe(res => {
                if (res.status == '0') {
                    this.api.presentAlert('Invalid Credentials test ok!!!');
                }
                if (res.status == '1') {
                    // this.api.presentAlert('!!!');
                    localStorage.setItem('user', JSON.stringify(res.result));
                    this.goto('main');
                }
            }, err => {
                this.api.presentAlert('Network connection error');
            });
        });
    }
    presentAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map