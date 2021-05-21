(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paypal-paypal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paypal/paypal.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paypal/paypal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"margin-top: 13px;\">\n            <ion-col size=\"4\"><ion-icon (click)=\"goto('home')\" name=\"arrow-back\" style=\"font-weight: bold\"></ion-icon><span (click)=\"goto('home')\" style=\"font-weight: bold;margin-left: 3px\">Back</span></ion-col>\n            <ion-col size=\"6\">\n              <div class=\"edit\">Checkout</div>\n            </ion-col>\n          </ion-row> \n        <ion-row>\n            <ion-col size=\"12\">\n                <label class=\"switch\" ><span class=\"male\">Credit card</span><span class=\"female\">Paypal</span><input checked (change)=\"toggleEditable($event)\" type=\"checkbox\" />    <div id=\"abc\">Paypal</div>\n                </label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"margin-top: 14%;\">\n              <ion-col size=\"12\">\n                  <div class=\"unmae\">Email address</div>\n                  <ion-input class=\"inp inplong\"></ion-input>\n              </ion-col>\n            </ion-row>\n            \n                  <ion-row style=\"margin-top: 38%;\">\n                    <ion-col size=\"12\" class=\"center\">\n                        <label class=\"vvv\">Payment breakdown</label>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"center\">\n                      <div class=\"paybox\"></div>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col size=\"12\" class=\"center\">\n                          <label class=\"vvv\">Note</label>\n                          <div  class=\"note\">\n                            You agree to authorize the use of your credit<br>card for this deposit and future payments\n                          </div>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <button class=\"paybtn\">Pay $515.00 AUD</button>\n                    </ion-col>\n                  </ion-row>\n    </ion-grid>\n    </ion-content> \n    ");

/***/ }),

/***/ "./src/app/pages/paypal/paypal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/paypal/paypal.module.ts ***!
  \***********************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/pages/paypal/paypal.page.ts");







const routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]
    }
];
let PaypalPageModule = class PaypalPageModule {
};
PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
    })
], PaypalPageModule);



/***/ }),

/***/ "./src/app/pages/paypal/paypal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/paypal/paypal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".switch input {\n  position: absolute;\n  opacity: 0; }\n\n/**\r\n   * 1. Adjust this to size\r\n   */\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  height: 2.5em;\n  width: 16em;\n  position: absolute;\n  border: 1px solid gray;\n  border-radius: 6em;\n  margin-left: 9px; }\n\n.switch div {\n  height: 50px;\n  width: 8em;\n  border-radius: 3em;\n  background: #fcba7d;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n  margin-top: -1px;\n  position: relative;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  top: -24px;\n  color: #ffff;\n  line-height: 47px;\n  padding-left: 10%;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n  font-weight: normal; }\n\n.male {\n  position: relative;\n  top: 11px;\n  left: 14%;\n  font-size: 16px; }\n\n.female {\n  position: relative;\n  top: 11px;\n  right: -47%;\n  font-size: 16px; }\n\n.edit {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: -5px; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 2px;\n  width: 90%;\n  margin-left: 5%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 4%;\n  margin-left: 8%; }\n\n.inplong {\n  width: 90%; }\n\n.left {\n  margin-left: 14%; }\n\n.vvv {\n  font-weight: bold;\n  margin-left: 20px;\n  margin-top: -19px; }\n\n.paybox {\n  width: 90%;\n  height: 113px;\n  margin-left: 5%;\n  border: 3px solid #f3f3f3;\n  border-radius: 20px; }\n\n.note {\n  color: gray;\n  margin-top: 10px;\n  font-size: 13px;\n  font-family: Tahoma, Geneva, sans-serif; }\n\n.paybtn {\n  background: #5162f5;\n  width: 80%;\n  height: 40px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  border-radius: 10px;\n  margin-left: 9%;\n  margin-top: 11px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cGFsL0Y6XFwwMV9pb25jXFxjYXJkbmV3L3NyY1xcYXBwXFxwYWdlc1xccGF5cGFsXFxwYXlwYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXlwYWwvcGF5cGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7O0lDQ0U7O0FER0Y7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrREFBaUQ7RUFDakQsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFLakI7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLHVDQUFzQztFQUN0QyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQ0FBK0I7RUFDL0IsZUFBZTtFQUNmLFVBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUNBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXHJcbiAgICovXHJcbiAgXHJcbiAgLnN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgd2lkdGg6IDE2ZW07XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBkaXYge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmY2JhN2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICBcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB9XHJcbiAgLm1hbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBsZWZ0OiAxNCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5mZW1hbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICByaWdodDogLTQ3JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbi8vICAgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbi8vICAgfVxyXG4gIC5lZGl0e1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6VGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi5pbnB7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxufVxyXG4udW5tYWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxufVxyXG4uaW5wbG9uZ3tcclxuICAgIHdpZHRoOjkwJTtcclxufVxyXG4ubGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XHJcbn1cclxuLnZ2dntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTlweDtcclxufVxyXG4ucGF5Ym94e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubm90ZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLnBheWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICM1MTYyZjU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59IiwiLnN3aXRjaCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDsgfVxuXG4vKipcclxuICAgKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXHJcbiAgICovXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMi41ZW07XG4gIHdpZHRoOiAxNmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDZlbTtcbiAgbWFyZ2luLWxlZnQ6IDlweDsgfVxuXG4uc3dpdGNoIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDhlbTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZmNiYTdkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRvcDogLTI0cHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5tYWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDExcHg7XG4gIGxlZnQ6IDE0JTtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5mZW1hbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IC00NyU7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uZWRpdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogLTVweDsgfVxuXG4uaW5wIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICAtLXBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50OyB9XG5cbi51bm1hZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1sZWZ0OiA4JTsgfVxuXG4uaW5wbG9uZyB7XG4gIHdpZHRoOiA5MCU7IH1cblxuLmxlZnQge1xuICBtYXJnaW4tbGVmdDogMTQlOyB9XG5cbi52dnYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xOXB4OyB9XG5cbi5wYXlib3gge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDExM3B4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cblxuLm5vdGUge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7IH1cblxuLnBheWJ0biB7XG4gIGJhY2tncm91bmQ6ICM1MTYyZjU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5JTtcbiAgbWFyZ2luLXRvcDogMTFweDsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/paypal/paypal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/paypal/paypal.page.ts ***!
  \*********************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PaypalPage = class PaypalPage {
    constructor(r) {
        this.r = r;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        document.getElementById('abc').style.transform = 'translate3d(100%,0,0)';
        document.getElementById('abc').innerText = 'Paypal';
    }
    toggleEditable(event) {
        if (event.target.checked) {
        }
        else {
            this.goto('checkout');
        }
    }
    goto(p) {
        this.r.navigateByUrl(p);
    }
};
PaypalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paypal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paypal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paypal/paypal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paypal.page.scss */ "./src/app/pages/paypal/paypal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PaypalPage);



/***/ })

}]);
//# sourceMappingURL=pages-paypal-paypal-module-es2015.js.map