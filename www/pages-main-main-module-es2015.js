(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-toolbar style=\"padding: 0;\">\n            <ion-label class=\"lab\">Cards for your</ion-label>\n            <ion-title style=\"    text-align: left;\n                    padding: 0;\n                    color: #1f1e1f;\">loved ones</ion-title>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div class=\"box\"><img class=\"imgc\" src=\"assets/img/cart.png\">\n            <ion-badge class=\"badge\" color=\"dark\">99</ion-badge>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-icon class=\"glassimg\" name=\"search\"></ion-icon>\n          <ion-input [(ngModel)]=\"searchBar\" (ionChange)=\"getItems(searchBar)\" placeholder=\"Search\" class=\"inmp\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          \n          <img style=\"margin-left: 10px;\n              margin-top: 10px;\" src=\"assets/img/Filters.png\">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n\n          <ul class=\"ulo\">\n            <!-- <li [ngClass]=\"{'active': selectedItem == 'categories'}\" (click)=\"imagegg('categories')\">\n              <div>Categories</div>\n            </li> -->\n            <li [ngClass]=\"{'active': selectedItem == 'Trending'}\" (click)=\"imagegg('Trending')\">\n              <div>Trending</div>\n            </li>\n            <li [ngClass]=\"{'active': selectedItem == 'Premium'}\" (click)=\"imagegg('Premium')\">Premium</li>\n            <li [ngClass]=\"{'active': selectedItem == 'Basic'}\" (click)=\"imagegg('Basic')\">Basic</li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n\n    <ion-row *ngIf=\"prod\">\n      <ion-col size=\"6\" *ngFor=\"let pro of resArry\" (click)=\"price(pro.amount,pro.image,pro.category_name)\">\n\n        <div style=\"margin-left: 3%;\">\n            <span style=\"font-size:13px;\">{{pro.category_name}}</span><br>\n            <ion-label style=\"color:gray;font-weight:bold\">${{pro.amount}}</ion-label>\n        </div>\n\n        <div class=\"checks\">\n          <img class=\"carimg\" src=\"{{pro.image}}\">\n          <h1>{{pro.sub_cat_name}}</h1>\n          <p>${{pro.amount}}</p>\n        </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n    <!-- <ion-row *ngIf=\"categories\">\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\">\n          <img src=\"../../../assets/img/invitation@2x.png\">\n          <p>Invitations</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#ffc5df;\">\n          <img src=\"../../../assets/img/Group 196@2x.png\">\n          <p>Wedding</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#ffcc9c;\">\n          <img src=\"../../../assets/img/cake (1)@2x.png\">\n          <p>Birthday</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#8decbb;\">\n          <img src=\"../../../assets/img/water-drop@2x.png\">\n          <p>Christening</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#a08bf6;\">\n          <img src=\"../../../assets/img/christmas-hat@2x.png\">\n          <p>Chrismas</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#aeb8c8;\">\n          <img src=\"../../../assets/img/easter-egg@2x.png\">\n          <p>Easter</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#ff8888;\">\n          <img src=\"../../../assets/img/Path 710@2x.png\">\n          <p>Valentine's Day</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#d8cebf;\">\n          <img src=\"../../../assets/img/mother-with-baby-in-arms@2x.png\">\n          <p>Mother Day</p>\n        </div>\n      </ion-col>\n\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#bbbbd2;\">\n          <img src=\"../../../assets/img/tie@2x.png\">\n          <p>Father's Day</p>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div class=\"catmm\" style=\"background:#b2d5d1;\">\n          <img src=\"../../../assets/img/chef@2x.png\">\n          <p>Kitchen</p>\n        </div>\n      </ion-col> -->\n\n      <!-- <ion-col size=\"12\">\n        <ion-list>\n          <ion-item>\n            <ion-label>\n                Invitations\n            </ion-label>\n            <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n          </ion-item>\n          <ion-item>\n              <ion-label>\n                  Wedding\n              </ion-label>\n              <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Birthday\n                </ion-label>\n                <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n              </ion-item>\n              <ion-item> \n                  <ion-label>\n                      Christening\n                  </ion-label>\n                  <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        Christmas\n                    </ion-label>\n                    <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label>\n                          Easter\n                      </ion-label>\n                      <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>\n                            Valentine’s Day\n                        </ion-label>\n                        <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                      </ion-item>\n                      <ion-item>\n                          <ion-label>\n                              Mothers day\n                          </ion-label>\n                          <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>\n                                Fathers Day\n                            </ion-label>\n                            <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                          </ion-item>\n                          <ion-item>\n                              <ion-label>\n                                  Kitchen Tea\n                              </ion-label>\n                              <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>\n                                    Hens\n                                </ion-label>\n                                <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                              </ion-item>\n                              <ion-item>\n                                  <ion-label>\n                                      Bucks\n                                  </ion-label>\n                                  <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label>\n                                        Name day\n                                    </ion-label>\n                                    <ion-icon style=\"float:right\" name=\"arrow-forward\"></ion-icon>\n                                  </ion-item>\n        </ion-list>\n      </ion-col> -->\n\n\n\n    <!-- </ion-row> -->\n  </ion-grid>\n\n</ion-content>\n<ion-footer style=\"background:#fff;\">\n  <ion-row>\n    <ion-col size=\"4\">\n      <img (click)=\"goto('main')\" class=\"k\" src=\"assets/img/h2.png\">\n      <div class=\"cap\">Home</div>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img (click)=\"goto('mycard')\" class=\"k l\" src=\"assets/img/Group.png\">\n    </ion-col>\n    <ion-col size=\"4\">\n      <img class=\"k l\" (click)=\"goto('profile')\" src=\"assets/img/Profile.png\">\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");







const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  border: 1px solid #f5f5f5;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: 10px;\n  position: absolute; }\n\n.imgc {\n  position: relative;\n  top: 7px; }\n\ninput:focus {\n  outline: none; }\n\n.badge {\n  position: relative;\n  z-index: 10000;\n  left: 28px;\n  top: -29px; }\n\n.lab {\n  color: #ababab;\n  /* margin-left: 7%; */\n  font-size: 20px; }\n\n.inmp {\n  top: 5px;\n  position: absolute;\n  border: none;\n  background: #efefef;\n  height: 34px;\n  border-radius: 10px;\n  width: 100%;\n  padding-left: 43px;\n  left: 0;\n  text-align: center; }\n\n.glassimg {\n  position: relative;\n  z-index: 10000;\n  left: 10px;\n  top: 8px;\n  font-size: 20px; }\n\n.trend {\n  margin-left: 13px;\n  font-size: 20px; }\n\n.trednbott {\n  width: 30px;\n  height: 4px;\n  background: #000; }\n\n.ulo li {\n  font-size: 13px;\n  display: inline-block;\n  padding: 0 30px;\n  color: #524949; }\n\n.ulo {\n  list-style: none;\n  padding: 0;\n  text-align: center;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 15px;\n  margin-bottom: 0; }\n\n.active {\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 0px;\n  position: relative; }\n\n.active::after {\n  content: \"\";\n  font-size: 30px;\n  width: 15px;\n  height: 14px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  top: 15px;\n  border-bottom: 4px solid #fcba7d; }\n\n.k {\n  display: block;\n  margin: 0 auto; }\n\n.cap {\n  font-size: 13px;\n  color: #fcba7d;\n  text-align: center;\n  margin-top: 3px; }\n\n.l {\n  margin-top: 8px; }\n\n.carimg {\n  width: 152px;\n  height: 152px;\n  border-radius: 22px; }\n\n.header-md:after {\n  background: none; }\n\n.catmm {\n  background-color: #6ed4fc;\n  padding: 10px;\n  border-radius: 18px; }\n\n.catmm img {\n  display: block;\n  margin: 0 auto;\n  width: 41px;\n  height: 40px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.catmm p {\n  margin: 0;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  margin-top: 7px;\n  font-weight: 300; }\n\n.checks img {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 135px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.checks h1 {\n  font-size: 16px;\n  margin: 0;\n  margin-left: 17px;\n  margin-top: 9px; }\n\n.checks p {\n  margin-left: 17px;\n  margin-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9GOlxcMDFfaW9uY1xcY2FyZG5ldy9zcmNcXGFwcFxccGFnZXNcXG1haW5cXG1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFPLEVBQUE7O0FBRVg7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksY0FBYztFQUNkLHFCQUFBO0VBQ0EsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFFBQU87RUFDUCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFVO0VBQUMsV0FBVTtFQUFDLGdCQUMxQixFQUFBOztBQUNBO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQixlQUFlO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFjLEVBQUE7O0FBR2pCO0VBQVEsWUFBWTtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjVmNWY1O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbWdje1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjdweDtcclxufVxyXG5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJhZGdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBsZWZ0OiAyOHB4O1xyXG4gICAgdG9wOiAtMjlweDtcclxufVxyXG4ubGFie1xyXG4gICAgY29sb3I6ICNhYmFiYWI7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNyU7ICovXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmlubXB7XHJcbiAgICB0b3A6NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNDNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdsYXNzaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnRyZW5ke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG4udHJlZG5ib3R0e1xyXG4gICAgd2lkdGg6MzBweDtoZWlnaHQ6NHB4O2JhY2tncm91bmQ6IzAwMFxyXG59XHJcbi51bG8gbGl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBjb2xvcjogIzUyNDk0OTtcclxufVxyXG4udWxve1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gXHJcbi5hY3RpdmU6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHRvcDogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmNiYTdkO1xyXG59XHJcbi5re1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY2Fwe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmY2JhN2Q7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmx7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxufVxyXG5cclxuIC5jYXJpbWd7d2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbn1cclxuLmhlYWRlci1tZDphZnRlcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXRtbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZWQ0ZmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxufVxyXG4uY2F0bW0gaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA0MXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4uY2F0bW0gcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uY2hlY2tzIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uY2hlY2tzIGgxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbn1cclxuLmNoZWNrcyBwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let MainPage = class MainPage {
    constructor(r, service) {
        this.r = r;
        this.service = service;
        this.resArry = [];
        this.resArryLoaded = [];
        this.main_cat = [];
        this.categories = false;
        this.prod = false;
        this.selectedItem = 'Trending';
        this.service.getMainCategories().subscribe(res => {
            this.main_cat = res.result;
            console.log('fsdfdsf', this.main_cat);
            this.getPro(2);
            console.log(this.main_cat[0].id);
        }, err => {
        });
    }
    ngOnInit() {
        this.prod = true;
    }
    ionViewWillEnter() {
    }
    imagegg(e) {
        this.selectedItem = e;
        if (e == 'Trending') {
            this.categories = false;
            this.prod = true;
            this.getPro('2');
        }
        else if (e == 'Premium') {
            this.categories = false;
            this.prod = true;
            this.getPro('3');
        }
        else if (e == 'Basic') {
            this.categories = false;
            this.prod = true;
            this.getPro('1');
        }
        else {
            this.categories = true;
            this.prod = false;
        }
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
    price(p, img, name) {
        var card_detail = {
            card_name: name,
            card_img: img
        };
        localStorage.setItem('card_detail', JSON.stringify(card_detail));
        this.r.navigateByUrl('card-detail/' + p);
    }
    getPro(e) {
        this.service.presentLoading();
        this.service.getCategorie(e).subscribe(res => {
            console.log(res);
            if (res.status == '1') {
                this.resArry = res.result;
                this.resArryLoaded = res.result;
            }
            else {
                this.resArry = [];
            }
        }, err => {
            this.resArry = [];
        });
    }
    initializeItems() {
        this.resArry = this.resArryLoaded;
        console;
    }
    getItems(searchbar) {
        this.initializeItems();
        let q = searchbar;
        if (!q) {
            return;
        }
        this.resArry = this.resArry.filter((v) => {
            if ((v.sub_cat_name) && q) {
                if (v.sub_cat_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    if (this.categories) {
                        this.prod = true;
                    }
                    return true;
                }
                return false;
            }
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], MainPage);



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module-es2015.js.map