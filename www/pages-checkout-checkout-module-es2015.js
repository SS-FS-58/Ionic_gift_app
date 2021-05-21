(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n\n<ion-content>\n<ion-grid>\n    <ion-row style=\"margin-top: 13px;\">\n        <ion-col size=\"4\"><ion-icon (click)=\"goto('main')\" name=\"arrow-back\" style=\"font-weight: bold\">\n        </ion-icon>\n          <span (click)=\"goto('summary')\" style=\"font-weight: bold;margin-left: 3px\">Back</span>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"edit\">Checkout</div>\n        </ion-col>\n      </ion-row> \n    <ion-row>\n        <ion-col size=\"12\">\n            <label class=\"switch\" ><span class=\"male\">Credit card</span>\n              <!-- <span class=\"female\">Paypal</span><input  (change)=\"toggleEditable($event)\"  type=\"checkbox\" /> -->\n                 <div id=\"abc\">credit card</div>\n            </label>\n        </ion-col>\n      </ion-row>\n     \n        <ion-row style=\"margin-top: 14%;\">\n            <ion-col size=\"12\">\n                <div class=\"unmae\">Cardholder name</div>\n                <ion-input [(ngModel)]=\"cardHolderName\" class=\"inp inplong\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"12\">\n                  <div class=\"unmae\">Card number</div>\n                  <ion-input [(ngModel)]=\"card_number\" class=\"inp inplong\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"--padding-left:20px;\" size=\"6\" class=\"colpad\">\n                    <div class=\"unmae left\">MM/YY</div>\n                    <ion-input [(ngModel)]=\"mmyy\" class=\"inp\"></ion-input>\n                </ion-col>\n                <ion-col style=\"--padding-left:20px;\" size=\"6\" class=\"colpad\">\n                    <div class=\"unmae left\">CCV/CVV</div>\n                    <ion-input [(ngModel)]=\"cvv\" class=\"inp\"></ion-input>\n                  </ion-col>\n              </ion-row>\n              <ion-row style=\"margin-top:2%;\">\n                <ion-col size=\"12\" class=\"center\">\n                    <label class=\"vvv\">Payment breakdown</label>\n                </ion-col>\n                <ion-col size=\"12\" class=\"center\">\n                  <div class=\"paybox\">\n                     <ion-row>\n                            <ion-col size=\"6\">\n                                    <div class=\"txt\">Basic card<br>\n                                      2020 Birthday Card\n                                    </div>\n                                    <div class=\"txt\">\n                                      Gift Money\n                                    </div>\n                                  </ion-col>\n                                  <ion-col size=\"6\" style=\"text-align:center\">\n                                    <div class=\"txt add\">\n                                      ${{data.price}}\n                                    </div>\n                                    <div class=\"txt add price\">\n                                        ${{data.gift}}\n                                      </div>\n                                    </ion-col>\n                                \n                     </ion-row>\n                     <ion-row>\n                            <ion-col size=\"6\" style=\"padding-top: 15px;\">\n                                <div class=\"txt\">\n                                    Total\n                                  </div>\n                            </ion-col>\n                            <ion-col size=\"6\" style=\"padding-top: 15px;\">\n                                <div class=\"edit\">${{data.total_amt}} AUD</div>\n                            </ion-col>\n                          </ion-row>\n                  </div> \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"12\" class=\"center\">\n                      <label class=\"vvv\">Note</label>\n                      <div  class=\"note\">\n                        You agree to authorize the use of your credit<br>card for this deposit and future payments\n                      </div>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <button (click)=\"call()\" class=\"paybtn\">Pay ${{data.total_amt}} AUD</button>\n                </ion-col>\n              </ion-row>\n</ion-grid>\n</ion-content> \n");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");







const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".switch input {\n  position: absolute;\n  opacity: 0; }\n\n/**\r\n   * 1. Adjust this to size\r\n   */\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  text-align: center;\n  height: 2.5em;\n  width: 16em;\n  position: absolute;\n  border: 1px solid gray;\n  border-radius: 12em;\n  margin-left: 9px; }\n\n.txt {\n  font-size: 13px;\n  margin-left: 18%;\n  margin-top: 5px; }\n\n.add {\n  font-size: 15px;\n  font-weight: bold;\n  color: gray; }\n\n.price {\n  margin-top: 13px; }\n\n.switch div {\n  height: 50px;\n  width: 16em;\n  border-radius: 3em;\n  background: #fcba7d;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n  margin-top: -1px;\n  position: relative;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  top: -24px;\n  color: #ffff;\n  line-height: 47px;\n  padding-left: 0%;\n  font-weight: normal; }\n\n.male {\n  position: relative;\n  top: 11px;\n  left: 14%;\n  font-size: 16px; }\n\n.female {\n  position: relative;\n  top: 11px;\n  right: -47%;\n  font-size: 16px; }\n\n.switch input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 8);\n          transform: translate3d(100%, 0, 8); }\n\n.edit {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: -5px; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 2px;\n  width: 90%;\n  margin-left: 5%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 4%;\n  margin-left: 8%; }\n\n.inplong {\n  width: 90%; }\n\n.left {\n  margin-left: 14%; }\n\n.vvv {\n  font-weight: bold;\n  margin-left: 20px;\n  margin-top: -19px; }\n\n.paybox {\n  width: 90%;\n  height: 113px;\n  margin-left: 5%;\n  border: 3px solid #f3f3f3;\n  border-radius: 20px; }\n\n.note {\n  color: gray;\n  margin-top: 10px;\n  font-size: 13px;\n  font-family: Tahoma, Geneva, sans-serif; }\n\n.paybtn {\n  background: #5162f5;\n  width: 80%;\n  height: 40px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  border-radius: 10px;\n  margin-left: 9%;\n  margin-top: 11px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvRjpcXDAxX2lvbmNcXGNhcmRuZXcvc3JjXFxhcHBcXHBhZ2VzXFxjaGVja291dFxcY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaOztJQ0NFOztBREdGO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0RBQWlEO0VBQ2pELFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDBDQUFnQztVQUFoQyxrQ0FBZ0MsRUFBQTs7QUFFbEM7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLHVDQUFzQztFQUN0QyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQ0FBK0I7RUFDL0IsZUFBZTtFQUNmLFVBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUNBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2ggaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQWRqdXN0IHRoaXMgdG8gc2l6ZVxyXG4gICAqL1xyXG4gIFxyXG4gIC5zd2l0Y2gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIHdpZHRoOiAxNmVtO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJlbTtcclxuICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG5cclxuICB9XHJcbiAgLnR4dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmFkZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLnByaWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4gIC5zd2l0Y2ggZGl2IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjYmE3ZDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgIFxyXG4gICAgdG9wOiAtMjRweDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB9XHJcbiAgLm1hbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5mZW1hbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICByaWdodDogLTQ3JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDgpO1xyXG4gIH1cclxuICAuZWRpdHtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OlRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG4uaW5we1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2VkZWRlZDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVubWFle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuLmlucGxvbmd7XHJcbiAgICB3aWR0aDo5MCU7XHJcbn1cclxuLmxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xyXG59XHJcbi52dnZ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbn1cclxuLnBheWJveHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDExM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YzZjNmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm5vdGV7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5wYXlidG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTE2MmY1O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDklO1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxufSIsIi5zd2l0Y2ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7IH1cblxuLyoqXHJcbiAgICogMS4gQWRqdXN0IHRoaXMgdG8gc2l6ZVxyXG4gICAqL1xuLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMi41ZW07XG4gIHdpZHRoOiAxNmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEyZW07XG4gIG1hcmdpbi1sZWZ0OiA5cHg7IH1cblxuLnR4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE4JTtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi5hZGQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTsgfVxuXG4ucHJpY2Uge1xuICBtYXJnaW4tdG9wOiAxM3B4OyB9XG5cbi5zd2l0Y2ggZGl2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTZlbTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZmNiYTdkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRvcDogLTI0cHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIHBhZGRpbmctbGVmdDogMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLm1hbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTFweDtcbiAgbGVmdDogMTQlO1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLmZlbWFsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogLTQ3JTtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgOCk7IH1cblxuLmVkaXQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IC01cHg7IH1cblxuLmlucCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlZGVkO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgLS1wYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDsgfVxuXG4udW5tYWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tbGVmdDogOCU7IH1cblxuLmlucGxvbmcge1xuICB3aWR0aDogOTAlOyB9XG5cbi5sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDE0JTsgfVxuXG4udnZ2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTlweDsgfVxuXG4ucGF5Ym94IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG5cbi5ub3RlIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmOyB9XG5cbi5wYXlidG4ge1xuICBiYWNrZ3JvdW5kOiAjNTE2MmY1O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogOSU7XG4gIG1hcmdpbi10b3A6IDExcHg7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");






let CheckoutPage = class CheckoutPage {
    constructor(fileTransfer, r, stripe, service) {
        this.fileTransfer = fileTransfer;
        this.r = r;
        this.stripe = stripe;
        this.service = service;
        this.data = {};
        this.imag1Obj = '';
        this.imag2Obj = '';
        this.videoObj = {};
        this.firstResObj = {};
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        this.stripe.setPublishableKey('pk_test_qg9KfrXF9i0xnGCsHI3TbiPT00Oa118vb9');
    }
    ionViewWillEnter() {
        this.data = localStorage.getItem('data');
        this.data = JSON.parse(this.data);
        document.getElementById('abc').style.transform = 'translate3d(0%,0,0)';
        document.getElementById('abc').innerText = 'Credit Card';
        this.imag1Obj = localStorage.getItem('imagefirst');
        this.imag2Obj = localStorage.getItem('imagesecond');
    }
    toggleEditable(event) {
        if (event.target.checked) {
            this.goto('paypal');
        }
        else {
            document.getElementById('abc').innerText = 'Credit Card';
        }
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
    PayNow() {
        let card = {
            number: '4242424242424242',
            expMonth: 12,
            expYear: 2020,
            cvc: '220'
        };
        this.stripe.createCardToken(card)
            .then(token => console.log(token.id))
            .catch(error => console.error(error));
    }
    call() {
        this.imag1Obj = this.imag1Obj.replace(/(\r\n|\n|\r)/gm, "");
        this.imag2Obj = this.imag2Obj.replace(/(\r\n|\n|\r)/gm, "");
        this.imag1Obj = this.imag1Obj.substr(34);
        this.imag2Obj = this.imag2Obj.substr(34);
        var obj = {
            'sender_id': '1',
            'reciever_id': '2',
            'message': 'hello',
            'gift_amount': '1000',
            'sender_email': 'fatema@gmail.com',
            'receiver_email': 'shaiwan@gmail.com',
            'card_id': '1',
            'video': '',
            'image1': this.imag1Obj,
            'image2': this.imag2Obj
        };
        this.service.sendCard(obj, this.imag1Obj, this.imag2Obj).subscribe(res => {
            this.firstResObj = res.result;
            this.id = this.firstResObj.id;
            this.service.presentToast('Pyment Successfull');
            //this.goto('main');
        }, err => {
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.page.scss */ "./src/app/pages/checkout/checkout.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es2015.js.map