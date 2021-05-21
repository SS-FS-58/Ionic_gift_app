(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mycard-mycard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mycard/mycard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mycard/mycard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-header >\n        <ion-toolbar style=\"text-align: center\">\n          <ion-row>\n          \n              <ion-col size=\"4\"><ion-icon (click)=\"goto('main')\" name=\"arrow-back\" style=\"font-weight: bold;font-size: 19px;\"></ion-icon><span (click)=\"goto('main')\" style=\"font-weight: bold;margin-left: 3px;font-size: 20px;\">Back</span></ion-col>\n         \n            <ion-col size=\"6\"><ion-title style=\"font-family: Tahoma, Geneva, sans-serif;font-weight:bold;\">My Cards</ion-title></ion-col>\n          </ion-row>\n          \n        </ion-toolbar>\n      </ion-header>\n<ion-content>\n<ion-grid>\n  <ion-row>\n<ion-col size=\"12\">\n    <div class=\"card\" style=\"margin-top:5%\">\n        <ion-row>\n          <img style=\"height:255px;width:100%\" src=\"assets/img/Group 104@2x.png\">\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"center\">\n            <div class=\"namediv\">\n                <img  src=\"assets/img/Profile.png\"><span>Samantha Jophsan</span>\n            </div>\n            <ion-label class=\"lbl\">Happy 25th Birthday :)</ion-label>\n            <div class=\"lbl2\">on 16th Sep, 2019</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <button class=\"phot\">Photos/Videos</button>\n          </ion-col>\n          <ion-col size=\"6\">\n              <button class=\"phot2\">$500 AUD</button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"card\" style=\"margin-top:5%\">\n          <ion-row>\n            <img style=\"height:255px;width:100%\" src=\"assets/img/Group 107.png\">\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"12\" class=\"center\">\n                <div class=\"namediv\">\n                    <img  src=\"assets/img/Profile.png\"><span>Samantha Jophsan</span>\n                </div>\n                <ion-label class=\"lbl\">Happy 25th Birthday :)</ion-label>\n                <div class=\"lbl2\">on 16th Sep, 2019</div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">\n                <button class=\"phot\">Photos/Videos</button>\n              </ion-col>\n              <ion-col size=\"6\">\n                  <button class=\"phot2\">$500 AUD</button>\n              </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"card\" style=\"margin-top:5%\">\n            <ion-row>\n              <img style=\"height:255px;width:100%\" src=\"assets/img/Group 106.png\">\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" class=\"center\">\n                  <div class=\"namediv\">\n                      <img  src=\"assets/img/Profile.png\"><span>Samantha Jophsan</span>\n                  </div>\n                  <ion-label class=\"lbl\">Happy 25th Birthday :)</ion-label>\n                  <div class=\"lbl2\">on 16th Sep, 2019</div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <button class=\"phot\">Photos/Videos</button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <button class=\"phot2\">$500 AUD</button>\n                </ion-col>\n              </ion-row>\n          </div>\n</ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-row>\n      <ion-col size=\"4\">\n        <img class=\"k l\" (click)=\"goto('main')\" src=\"assets/img/Home.png\">\n        \n      </ion-col>\n      <ion-col size=\"4\">\n          <img class=\"k \" (click)=\"goto('mycard')\" src=\"assets/img/g1.png\">\n          <div class=\"cap\">cards</div>\n      </ion-col>\n      <ion-col size=\"4\">\n          <img class=\"k l\" (click)=\"goto('profile')\" src=\"assets/img/Profile.png\">\n          \n      </ion-col>\n    </ion-row>\n  </ion-footer>");

/***/ }),

/***/ "./src/app/pages/mycard/mycard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mycard/mycard.module.ts ***!
  \***********************************************/
/*! exports provided: MycardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPageModule", function() { return MycardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mycard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycard.page */ "./src/app/pages/mycard/mycard.page.ts");







const routes = [
    {
        path: '',
        component: _mycard_page__WEBPACK_IMPORTED_MODULE_6__["MycardPage"]
    }
];
let MycardPageModule = class MycardPageModule {
};
MycardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mycard_page__WEBPACK_IMPORTED_MODULE_6__["MycardPage"]]
    })
], MycardPageModule);



/***/ }),

/***/ "./src/app/pages/mycard/mycard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/mycard/mycard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 85%;\n  height: 400px;\n  background: #fff;\n  border-radius: 34px;\n  margin-left: 10%;\n  box-shadow: 0 8px 6px -6px black; }\n\n.namediv {\n  position: absolute; }\n\n.namediv img {\n  position: relative;\n  left: 45%; }\n\n.namediv span {\n  position: relative;\n  font-size: 13px;\n  left: 50%;\n  top: -9px; }\n\n.lbl {\n  position: relative;\n  top: 35px;\n  font-weight: bold;\n  font-size: 22px;\n  font-family: Tahoma, Geneva, sans-serif; }\n\n.lbl2 {\n  position: relative;\n  top: 37px;\n  font-size: 13px;\n  color: gray; }\n\n.phot {\n  width: 100px;\n  border-radius: 10px;\n  height: 30px;\n  background: #ffa50033;\n  opacity: 0.6;\n  margin-top: 37px;\n  margin-left: 20px;\n  color: orange;\n  text-align: center;\n  font-size: 13px;\n  line-height: 26px; }\n\n.phot2 {\n  width: 100px;\n  border-radius: 10px;\n  height: 30px;\n  background: #7d19ff54;\n  opacity: 0.6;\n  margin-top: 37px;\n  margin-left: 20px;\n  color: #4c0f9c;\n  text-align: center;\n  font-size: 13px;\n  line-height: 26px; }\n\n.k {\n  margin-left: 39px; }\n\n.cap {\n  font-size: 11px;\n  margin-left: 37%;\n  color: #fcba7d; }\n\n.l {\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXljYXJkL0Y6XFwwMV9pb25jXFxjYXJkbmV3L3NyY1xcYXBwXFxwYWdlc1xcbXljYXJkXFxteWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUVoQixnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDRyxrQkFBaUIsRUFBQTs7QUFFcEI7RUFDRyxrQkFBa0I7RUFDbEIsU0FBUSxFQUFBOztBQUVYO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUViO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVDQUFzQyxFQUFBOztBQUUxQztFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXljYXJkL215Y2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAvLyBib3gtc2hhZG93OiAwIDNweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbn1cclxuLm5hbWVkaXZ7XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbi5uYW1lZGl2IGltZ3tcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBsZWZ0OjQ1JTtcclxufVxyXG4ubmFtZWRpdiBzcGFue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAtOXB4O1xyXG59XHJcbi5sYmx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OlRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sYmwye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLnBob3R7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYTUwMDMzO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgbWFyZ2luLXRvcDogMzdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbi5waG90MntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2QxOWZmNTQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzRjMGY5YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcbi5re1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM5cHg7XHJcbn1cclxuLmNhcHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbiAgICBjb2xvcjojZmNiYTdkO1xyXG59XHJcbi5se1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/mycard/mycard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/mycard/mycard.page.ts ***!
  \*********************************************/
/*! exports provided: MycardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPage", function() { return MycardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MycardPage = class MycardPage {
    constructor(r) {
        this.r = r;
    }
    ngOnInit() {
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
};
MycardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MycardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mycard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mycard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mycard/mycard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mycard.page.scss */ "./src/app/pages/mycard/mycard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MycardPage);



/***/ })

}]);
//# sourceMappingURL=pages-mycard-mycard-module-es2015.js.map