(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n<ion-grid>\n    <ion-row style=\"margin-top: 13px;\">\n        <ion-col size=\"4\"><ion-icon (click)=\"goto('card-detail')\" name=\"arrow-back\" style=\"font-weight: bold\">\n        </ion-icon>\n        <span (click)=\"goto('card-detail')\" style=\"font-weight: bold;margin-left: 3px\">Back</span>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"edit\">Summary</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"center\">\n          <img src=\"{{data.card_img}}\"  width=\"275\">\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"border-bottom:1px solid gray\">\n        <ion-col size=\"6\">\n          <div class=\"txt\">Basic card<br>\n            2020 Birthday Card\n          </div>\n          <div class=\"txt\">\n            Gift Money\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align:center\">\n          <div class=\"txt add\">\n            ${{data.price}}\n          </div>\n          <div class=\"txt add price\">\n              ${{data.gift}}\n            </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" style=\"padding-top: 15px;\">\n            <div class=\"txt\">\n                Total\n              </div>\n        </ion-col>\n        <ion-col size=\"6\" style=\"padding-top: 15px;\">\n            <div class=\"edit\">${{data.total_amt}} AUD</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"8\" style=\"padding-top: 15px;\">\n              <div class=\"txt\">\n                  Enter recipent's Mobile Number\n                </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input [(ngModel)]=\"receive_emil\" class=\"inp\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"12\">\n            <button class=\"profbtn\">Edit Card</button>\n        </ion-col>\n        <ion-col size=\"12\">\n            <button (click)=\"goto('checkout')\" class=\"profbtn hh\">Checkout</button>\n        </ion-col>\n      </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/summary/summary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.module.ts ***!
  \*************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");







const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]
    }
];
let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })
], SummaryPageModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: -5px; }\n\n.txt {\n  font-size: 13px;\n  margin-left: 18%;\n  margin-top: 5px; }\n\n.add {\n  font-size: 15px;\n  font-weight: bold;\n  color: gray; }\n\n.price {\n  margin-top: 13px; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  width: 85%;\n  margin-left: 8%;\n  --padding-bottom:0px !important; }\n\n.profbtn {\n  width: 85%;\n  height: 33px;\n  border: 3px solid #e8e8e8;\n  background: none;\n  border-radius: 5px;\n  margin-top: 0px;\n  margin-left: 5%; }\n\n.hh {\n  border: 3px solid #fcba7d;\n  background: #fcba7d;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VtbWFyeS9GOlxcMDFfaW9uY1xcY2FyZG5ldy9zcmNcXGFwcFxccGFnZXNcXHN1bW1hcnlcXHN1bW1hcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQ0FBK0I7RUFDL0IsVUFBUztFQUNULGVBQWU7RUFDZiwrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixXQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXR7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTpUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLnR4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmFkZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLnByaWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4uaW5we1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2VkZWRlZDtcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZidG57XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2U4ZThlODtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmhoe1xyXG4gICAgYm9yZGVyOiAgM3B4IHNvbGlkICNmY2JhN2Q7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNiYTdkO1xyXG4gICAgY29sb3I6ICNmZmZcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/summary/summary.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/summary/summary.page.ts ***!
  \***********************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SummaryPage = class SummaryPage {
    constructor(router) {
        this.router = router;
        this.data = {};
    }
    ngOnInit() {
    }
    goto(p) {
        localStorage.setItem('receiver_email', this.receive_emil);
        this.router.navigateByUrl('checkout');
    }
    ionViewWillEnter() {
        this.data = localStorage.getItem('data');
        this.data = JSON.parse(this.data);
    }
};
SummaryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.page.scss */ "./src/app/pages/summary/summary.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SummaryPage);



/***/ })

}]);
//# sourceMappingURL=pages-summary-summary-module-es2015.js.map