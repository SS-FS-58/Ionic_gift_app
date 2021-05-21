(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-received-card-received-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/received-card/received-card.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/received-card/received-card.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <div class=\"whitebox namediv\"> \n    <img class=\"imh\" src=\"assets/img/Group 104.png\">\n    <ion-row>\n        <ion-col size=\"12\" class=\"center\">\n          \n          <div class=\"lbl2\">on 16th Sep, 2019</div>\n          <ion-label class=\"lbl\">Happy 25th Birthday :)</ion-label>\n          <div class=\"namediv\">\n              <img class=\"proinm\" src=\"assets/img/Profile.png\"><span>Samantha Jophsan</span>\n          </div>\n        </ion-col>\n      </ion-row>\n  </div>\n <ion-row style=\"margin-top: 130%;\"> \n    <ion-col size=\"12\">\n        <div class=\"vvv\">You received</div>\n        <label class=\"switch\" ><span class=\"male\">You received</span><span class=\"female\">$500.00 AUD</span><input checked  type=\"checkbox\" />    <div id=\"abc\">You received</div>\n        </label>\n    </ion-col>\n </ion-row>\n <ion-row style=\"margin-top: 25%;\"> \n    <ion-col size=\"12\">\n        <div class=\"vvv\">Message from samantha</div>\n        <div class=\"msgbox\"></div>\n    </ion-col>\n </ion-row>\n <ion-row style=\"margin-top:5%;\"> \n    <ion-col size=\"12\">\n        <div class=\"vvv\">Photos and videos</div>\n        <ion-segment color=\"primary\">\n            <ion-segment-button value=\"standard\">\n              <img src=\"assets/img\"> \n            </ion-segment-button>\n            <ion-segment-button value=\"hybrid\">\n              <ion-label>Hybrid</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"sat\">\n              <ion-label>Satellite</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n    </ion-col>\n </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/received-card/received-card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/received-card/received-card.module.ts ***!
  \*************************************************************/
/*! exports provided: ReceivedCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedCardPageModule", function() { return ReceivedCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _received_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./received-card.page */ "./src/app/pages/received-card/received-card.page.ts");







const routes = [
    {
        path: '',
        component: _received_card_page__WEBPACK_IMPORTED_MODULE_6__["ReceivedCardPage"]
    }
];
let ReceivedCardPageModule = class ReceivedCardPageModule {
};
ReceivedCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_received_card_page__WEBPACK_IMPORTED_MODULE_6__["ReceivedCardPage"]]
    })
], ReceivedCardPageModule);



/***/ }),

/***/ "./src/app/pages/received-card/received-card.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/received-card/received-card.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: -5px; }\n\n.whitebox {\n  width: 100%;\n  height: 66%;\n  border-radius: 40px;\n  box-shadow: 0 8px 19px -6px #00000073; }\n\n.imh {\n  width: 100%;\n  height: 71%; }\n\n.lbl {\n  position: relative;\n  top: 7px;\n  font-weight: bold;\n  font-size: 22px;\n  font-family: Tahoma, Geneva, sans-serif; }\n\n.lbl2 {\n  position: relative;\n  top: 4px;\n  font-size: 13px;\n  color: gray; }\n\n.namediv {\n  position: absolute; }\n\n.namediv span {\n  position: relative;\n  font-size: 13px;\n  left: 73%;\n  top: 0px; }\n\n.proinm {\n  position: relative;\n  left: 67%;\n  top: 13px; }\n\n.switch input {\n  position: absolute;\n  opacity: 0; }\n\n/**\r\n   * 1. Adjust this to size\r\n   */\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  height: 2.5em;\n  width: 16em;\n  position: absolute;\n  border-radius: 6em;\n  margin-left: 9px;\n  background: #fcba7d; }\n\n.switch div {\n  height: 50px;\n  width: 8em;\n  border-radius: 3em;\n  background: #fcc695;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n  margin-top: -1px;\n  position: relative;\n  top: -24px;\n  color: #ffff;\n  line-height: 47px;\n  padding-left: 5%;\n  font-weight: normal;\n  font-size: 19px; }\n\n.male {\n  position: relative;\n  top: 11px;\n  left: 14%;\n  font-size: 16px; }\n\n.female {\n  position: relative;\n  top: 11px;\n  right: -25%;\n  font-family: Tahoma, Geneva, sans-serif;\n  color: #fff;\n  font-size: 21px;\n  font-weight: bold; }\n\n.vvv {\n  font-weight: bold;\n  margin-left: 20px;\n  margin-top: -19px; }\n\n.msgbox {\n  width: 100%;\n  height: 77px;\n  background: #f1f1f1;\n  border-radius: 27px;\n  border-top-left-radius: 0px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjZWl2ZWQtY2FyZC9GOlxcMDFfaW9uY1xcY2FyZG5ldy9zcmNcXGFwcFxccGFnZXNcXHJlY2VpdmVkLWNhcmRcXHJlY2VpdmVkLWNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWNlaXZlZC1jYXJkL3JlY2VpdmVkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUNBQXFDLEVBQUE7O0FBRXpDO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1Q0FBdUMsRUFBQTs7QUFFM0M7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBaUIsRUFBQTs7QUFHcEI7RUFDRyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBRVg7RUFDRyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFFWjtFQUNHLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7O0lDQUU7O0FESUY7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUFxQjtFQUFyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBS3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNlaXZlZC1jYXJkL3JlY2VpdmVkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXR7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTpUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLndoaXRlYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY2JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxOXB4IC02cHggIzAwMDAwMDczO1xyXG59XHJcbi5pbWh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzElO1xyXG59XHJcbi5sYmx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sYmwye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4ubmFtZWRpdntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gfVxyXG5cclxuIC5uYW1lZGl2IHNwYW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsZWZ0OiA3MyU7XHJcbiAgICB0b3A6IDBweDtcclxuIH1cclxuIC5wcm9pbm17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA2NyU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiB9XHJcbiAuc3dpdGNoIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIEFkanVzdCB0aGlzIHRvIHNpemVcclxuICAgKi9cclxuICBcclxuICAuc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICB3aWR0aDogMTZlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNiYTdkO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBkaXYge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmY2M2OTU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjRweDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG4gIC5tYWxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgbGVmdDogMTQlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuZmVtYWxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgcmlnaHQ6IC0yNSU7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuLy8gICAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuLy8gICB9XHJcbi52dnZ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbn1cclxuLm1zZ2JveHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn0iLCIuZWRpdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogLTVweDsgfVxuXG4ud2hpdGVib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NiU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE5cHggLTZweCAjMDAwMDAwNzM7IH1cblxuLmltaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcxJTsgfVxuXG4ubGJsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmOyB9XG5cbi5sYmwyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTsgfVxuXG4ubmFtZWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4ubmFtZWRpdiBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDczJTtcbiAgdG9wOiAwcHg7IH1cblxuLnByb2lubSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNjclO1xuICB0b3A6IDEzcHg7IH1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDsgfVxuXG4vKipcclxuICAgKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXHJcbiAgICovXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMi41ZW07XG4gIHdpZHRoOiAxNmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDZlbTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgYmFja2dyb3VuZDogI2ZjYmE3ZDsgfVxuXG4uc3dpdGNoIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDhlbTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZmNjNjk1O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjRweDtcbiAgY29sb3I6ICNmZmZmO1xuICBsaW5lLWhlaWdodDogNDdweDtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOXB4OyB9XG5cbi5tYWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDExcHg7XG4gIGxlZnQ6IDE0JTtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5mZW1hbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IC0yNSU7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnZ2diB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTE5cHg7IH1cblxuLm1zZ2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/received-card/received-card.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/received-card/received-card.page.ts ***!
  \***********************************************************/
/*! exports provided: ReceivedCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedCardPage", function() { return ReceivedCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ReceivedCardPage = class ReceivedCardPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goto(p) {
        this.router.navigateByUrl(p);
    }
};
ReceivedCardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReceivedCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-received-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./received-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/received-card/received-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./received-card.page.scss */ "./src/app/pages/received-card/received-card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ReceivedCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-received-card-received-card-module-es2015.js.map