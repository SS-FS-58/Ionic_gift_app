(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"outer\">\n    <div class=\"innerdiv\">\n      <img  class=\"topimg\" src=\"{{userData.image}}\" onError=\"this.src='assets/img/default.png'\">\n      <div class=\"ruppe2\">{{userData.first_name}} {{userData.last_name}}</div>\n      <ion-label class=\"graytxt\">{{userData.email}}</ion-label><br>\n      <button class=\"editbtn\" (click)=\"goto('edit-profile')\">Edit Profile</button>\n    </div>\n    <ion-label style=\"color:#fff;font-size: 13px\">Received gift amount</ion-label>\n      <div class=\"ruppe\">$0.00 AUD</div>\n      <ion-icon name=\"arrow-forward\" style=\"color: #fff;\n      position: relative;\n      top: -34px;\n      left: 115px;\n      font-size: 35px;\"></ion-icon>\n  </div>\n  <ion-row style=\"margin-top:60%\">\n    <ion-col style=\"padding-right: 28px;\" no-padding size=\"12\" *ngFor=\"let opt of option\">\n      <div>\n        <ion-label class=\"sublbl\">{{opt.head}}</ion-label>\n        <div class=\"sub_head\">{{opt.sub_head}}</div>\n        <ion-icon class=\"myicon\" name=\"arrow-forward\"></ion-icon>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" class=\"center\">\n      <button (click)=\"logout()\" class=\"logout_bbtn\">Logout</button>\n    </ion-col>\n    <!-- <ion-col size=\"12\">\n        <div>\n          <ion-label style=\"font-family:Verdana, Geneva, sans-serif;font-size:20px;margin-left: 24px;\">Terms and conditions</ion-label>\n          <div style=\"margin-left: 24px;font-size: 14px;\">Read our terms and conditions</div>\n          <ion-icon name=\"arrow-forward\" style=\"color: #000;\n          position: relative;\n          top: -34px;\n          float: right;\n          font-size: 30px;\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <div>\n            <ion-label style=\"font-family:Verdana, Geneva, sans-serif;font-size:20px;margin-left: 24px;\">Contact support</ion-label>\n            <div style=\"margin-left: 24px;font-size: 14px;\">We are ready to assist you</div>\n            <ion-icon name=\"arrow-forward\" style=\"color: #000;\n            position: relative;\n            top: -34px;\n            float: right;\n            font-size: 30px;\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n            <div>\n              <ion-label style=\"font-family:Verdana, Geneva, sans-serif;font-size:20px;margin-left: 24px;\">FAQ's </ion-label>\n              <div style=\"margin-left: 24px;font-size: 14px;\">frequently asked questions</div>\n              <ion-icon name=\"arrow-forward\" style=\"color: #000;\n              position: relative;\n              top: -34px;\n              float: right;\n              font-size: 30px;\"></ion-icon>\n            </div>\n          </ion-col> -->\n  </ion-row>\n</ion-content>\n<ion-footer>\n    <ion-row>\n      <ion-col size=\"4\">\n        <img class=\"k l\" (click)=\"goto('main')\" src=\"assets/img/Home.png\">\n        \n      </ion-col>\n      <ion-col size=\"4\">\n          <img class=\"k l\" (click)=\"goto('mycard')\" src=\"assets/img/Group.png\">\n      </ion-col>\n      <ion-col size=\"4\">\n          <img class=\"k \" (click)=\"goto('profile')\" src=\"assets/img/p2.png\">\n          <div class=\"cap\">Profile</div>\n      </ion-col>\n    </ion-row>\n  </ion-footer>");

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".innerdiv {\n  width: 100%;\n  height: 175px;\n  background: #fff;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px; }\n\n.graytxt {\n  color: gray;\n  font-size: 15px; }\n\n.ruppe {\n  font-weight: bold;\n  font-size: 23px;\n  color: #fff;\n  margin-top: 3%; }\n\n.ruppe2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #000; }\n\n.outer {\n  width: 100%;\n  height: 246px;\n  background: #5162f5;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  position: absolute;\n  text-align: center; }\n\n.k {\n  margin-left: 39px; }\n\n.cap {\n  font-size: 11px;\n  margin-left: 37%;\n  color: #fcba7d; }\n\n.l {\n  margin-top: 8px; }\n\n.editbtn {\n  width: 155px;\n  background: none;\n  border: 2px solid #e8e8e8;\n  height: 30px;\n  position: relative;\n  top: 6px;\n  border-radius: 8%; }\n\n.sublbl {\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 20px;\n  margin-left: 24px; }\n\n.sub_head {\n  margin-left: 24px;\n  font-size: 14px; }\n\n.myicon {\n  position: relative;\n  top: -34px;\n  float: right;\n  font-size: 30px;\n  color: #000; }\n\n.topimg {\n  margin-top: 16px;\n  width: 70px;\n  height: 70px;\n  border-radius: 70px; }\n\n.logout_bbtn {\n  border: 1px solid #feebeb;\n  background: none;\n  color: #f84545;\n  width: 135px;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9GOlxcMDFfaW9uY1xcY2FyZG5ldy9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLCtCQUErQixFQUFBOztBQUVuQztFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxXQUFVO0VBQ1YsY0FBYSxFQUFBOztBQUVqQjtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsV0FBVSxFQUFBOztBQUVkO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHdDQUF1QztFQUN2QyxlQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQUMsV0FBVTtFQUMzQixZQUFXO0VBQ1gsbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXJkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5ncmF5dHh0e1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnJ1cHBle1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToyM3B4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbn1cclxuLnJ1cHBlMntcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGNvbG9yOiMwMDA7XHJcbn1cclxuLm91dGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzUxNjJmNTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ua3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzOXB4O1xyXG59XHJcbi5jYXB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzclO1xyXG4gICAgY29sb3I6I2ZjYmE3ZDtcclxufVxyXG4ubHtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG59XHJcbi5lZGl0YnRue1xyXG4gICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xyXG59XHJcbi5zdWJsYmx7XHJcbiAgICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcbi5zdWJfaGVhZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5teWljb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMzRweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi50b3BpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O3dpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NzBweDtcclxufVxyXG4ubG9nb3V0X2JidG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVlYmViO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjZjg0NTQ1O1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfilePage = class ProfilePage {
    constructor(r) {
        this.r = r;
        this.option = [
            { head: 'Privacy Policy', sub_head: 'Read our privacy ploicy', goto: '' },
            { head: 'Terms and conditions', sub_head: 'Read our terms and conditions', goto: '' },
            { head: 'Contact support', sub_head: 'We are ready to assist you', goto: '' },
            { head: "FAQ's", sub_head: 'frequently asked questions', goto: '' },
        ];
        this.userData = {};
        console.log(this.option);
        this.userData = localStorage.getItem('user');
        this.userData = JSON.parse(this.userData);
    }
    ngOnInit() {
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
    logout() {
        localStorage.clear();
        this.r.navigateByUrl('home');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map