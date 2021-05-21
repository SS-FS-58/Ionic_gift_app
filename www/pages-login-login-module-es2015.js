(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <ion-grid>\n    \n      <ion-row style=\"margin-top: 13px;\">\n          <ion-col><ion-icon (click)=\"goto('home')\" name=\"arrow-back\" style=\"font-weight: bold;font-size: 25px;\n          \"></ion-icon><span (click)=\"goto('home')\" style=\"    font-weight: bold;\n        margin-left: 34px;\n        margin-top: -25px;\n        display: block;\">Back</span></ion-col>\n        </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"center\">\n        <div class=\"lbl\">Register Now</div> \n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 52%;\" >\n      <ion-col size=\"12\" >\n        <div class=\"card\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"unmae\">Username or Email</div>\n              <ion-input [(ngModel)]=\"email\" class=\"inp\"></ion-input>\n              <div class=\"unmae\">Password</div>\n              <ion-input type=\"password\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\n            </ion-col>\n          </ion-row> \n         \n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-button (click)=\"goto('add-profile')\" class=\"btn\" size=\"small\" color=\"dark\">Sign Up</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"center\">\n              <span style=\"font-size: 13px;\">Already have an account?</span><span (click)=\"goto('signup')\" style=\"font-weight: bold;text-decoration: underline;font-size: 14px;\">Login</span>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n ");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff url('bglogin.png') no-repeat center center / cover; }\n\n.card {\n  width: 100%;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 11px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding-bottom: 8px; }\n\n.lbl {\n  font-weight: bold;\n  font-size: 27px;\n  margin-top: 30px; }\n\n.btn {\n  width: 92%;\n  height: 34px;\n  text-transform: capitalize;\n  margin: 0 auto;\n  display: block; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 5px;\n  width: 85%;\n  margin-left: 8%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 10%;\n  margin-left: 8%; }\n\n.for {\n  text-decoration: underline;\n  color: #fcba7d;\n  font-size: 13px;\n  margin-left: 7%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRjpcXDAxX2lvbmNcXGNhcmRuZXcvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiw2RUFBNkU7RUFDN0UsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWdCO0VBQUMsZUFBZTtFQUFDLGdCQUFnQixFQUFBOztBQUVyRDtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0NBQStCO0VBQy9CLGVBQWU7RUFDZixVQUFTO0VBQ1QsZUFBZTtFQUNmLCtCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnc3JjL2Fzc2V0cy9pbWcvYmdsb2dpbi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTFweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4ubGJse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6IDI3cHg7bWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5we1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2VkZWRlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVubWFle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG59XHJcbi5mb3J7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjZmNiYTdkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPage = class LoginPage {
    constructor(api, loadingController, router) {
        this.api = api;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
    }
    goto(p) {
        alert('Please test test');
        if (this.email != '' && this.password != '') {
            localStorage.setItem('email', this.email);
            localStorage.setItem('password', this.password);
            this.router.navigateByUrl(p);
            alert('Please success');
        }
        else {
            alert('Please fill all details');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map