function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-profile-add-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-profile/add-profile.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-profile/add-profile.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddProfileAddProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n \n\n\n<ion-content>\n<ion-grid>\n\n    <ion-row style=\"margin-top: 13px;\">\n      \n      </ion-row>\n\n  <ion-row style=\"margin-top: 13px;\"> \n      <!-- <ion-col size=\"4\"><ion-icon (click)=\"goto('login')\" name=\"arrow-back\" style=\"font-weight: bold;font-size: 25px;\n        \"></ion-icon><span (click)=\"goto('home')\" style=\"    font-weight: bold;\n      margin-left: 34px;\n      margin-top: -25px;\n      display: block;\">Back</span></ion-col> -->\n    <ion-col size=\"6\">\n      <div class=\"edit\">Add Profile</div>\n    </ion-col>\n  </ion-row> \n\n  <ion-row>\n    <ion-col size=\"12\" class=\"center\">\n      <img class=\"proj\"  src=\"{{resPath}}\"><br>\n      <button (click)=\"selectImage()\" class=\"profbtn\">Change Profile Picture</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\" class=\"colpad\">\n        <div class=\"unmae\">First name</div>\n        <ion-input [(ngModel)]=\"fname\" class=\"inp\"></ion-input>\n    </ion-col>\n    <ion-col size=\"6\" class=\"colpad\">\n        <div class=\"unmae\">Last name</div>\n        <ion-input [(ngModel)]=\"lname\" class=\"inp\"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col size=\"12\">\n          <div class=\"unmae\">Email address</div>\n          <ion-input [(ngModel)]=\"email\" class=\"inp inplong\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"12\">\n            <div class=\"unmae\">Phone number</div>\n            <ion-input [(ngModel)]=\"pnumber\" class=\"inp inplong\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"12\">\n              <div class=\"unmae\">Birthday</div>\n              <!-- <ion-input [(ngModel)]=\"birthday\" class=\"inp inplong\"></ion-input> -->\n              <ion-datetime [(ngModel)]=\"dob\" class=\"inp inplong\" displayFormat=\"DD MMMM YYYY\" ></ion-datetime>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n              <label class=\"switch\"><span class=\"male\">Male</span><span class=\"female\">Female</span><input (change)=\"toggleEditable($event)\" type=\"checkbox\" />    <div id=\"abc\">Male</div>\n              </label>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-top: 24%;\">\n          <ion-col size=\"12\">\n              <ion-button (click)=\"upload()\" class=\"bttn\" color=\"tertiary\">Save Changes</ion-button>\n          </ion-col>\n        </ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/add-profile/add-profile.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-profile/add-profile.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddProfilePageModule */

  /***/
  function srcAppPagesAddProfileAddProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProfilePageModule", function () {
      return AddProfilePageModule;
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


    var _add_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-profile.page */
    "./src/app/pages/add-profile/add-profile.page.ts");

    var routes = [{
      path: '',
      component: _add_profile_page__WEBPACK_IMPORTED_MODULE_6__["AddProfilePage"]
    }];

    var AddProfilePageModule = function AddProfilePageModule() {
      _classCallCheck(this, AddProfilePageModule);
    };

    AddProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_add_profile_page__WEBPACK_IMPORTED_MODULE_6__["AddProfilePage"]]
    })], AddProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-profile/add-profile.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-profile/add-profile.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddProfileAddProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: 0;\n  align-content: center; }\n\n.profbtn {\n  width: 74%;\n  /* height: 30px; */\n  border: 1px solid #d0d0d0;\n  background: none;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 9px; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 2px;\n  width: 90%;\n  margin-left: 5%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 4%;\n  margin-left: 8%; }\n\n.inplong {\n  width: 90%; }\n\n.switch input {\n  position: absolute;\n  opacity: 0; }\n\n/**\r\n   * 1. Adjust this to size\r\n   */\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  height: 2.5em;\n  width: 100%;\n  position: absolute;\n  border: 1px solid #d6d6d6;\n  border-radius: 6em; }\n\n.switch div {\n  height: 50px;\n  width: 50%;\n  border-radius: 3em;\n  background: #fcba7d;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n  margin-top: -1px;\n  position: relative;\n  top: -24px;\n  color: #ffff;\n  line-height: 47px;\n  padding-left: 17%;\n  font-weight: normal; }\n\n.male {\n  position: relative;\n  top: 11px;\n  left: 14%;\n  font-size: 16px; }\n\n.female {\n  position: relative;\n  top: 11px;\n  right: -60%;\n  font-size: 16px; }\n\n.switch input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\n.bttn {\n  text-transform: capitalize;\n  border-radius: 47px !important;\n  width: 93%;\n  display: block;\n  margin: 0 auto;\n  background-color: #5162f5; }\n\n.colpad {\n  padding-left: 21px; }\n\n.proj {\n  width: 70px;\n  height: 70px;\n  border-radius: 70px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXByb2ZpbGUvRjpcXDAxX2lvbmNcXGNhcmRuZXcvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtcHJvZmlsZVxcYWRkLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtcHJvZmlsZS9hZGQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsVUFBVTtFQUNSLGtCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxnQ0FBK0I7RUFDL0IsZUFBZTtFQUNmLFVBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBUyxFQUFBOztBQUViO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7SUNDRTs7QURHRjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2YseUJBQXlCLEVBQUE7O0FBRTFCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1wcm9maWxlL2FkZC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2ZidG57XHJcbiAgd2lkdGg6IDc0JTtcclxuICAgIC8qIGhlaWdodDogMzBweDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG4uaW5we1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2VkZWRlZDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVubWFle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuLmlucGxvbmd7XHJcbiAgICB3aWR0aDo5MCU7XHJcbn1cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXHJcbiAgICovXHJcbiAgXHJcbiAgLnN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNmVtO1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjYmE3ZDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTclO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIH1cclxuICAubWFsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDE0JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLmZlbWFsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIHJpZ2h0OiAtNjAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgLmJ0dG57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ3cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE2MmY1O1xyXG4gIH1cclxuICAuY29scGFke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMXB4O1xyXG4gIH1cclxuICAucHJvantcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NzBweDtcclxuICB9XHJcbiAgIiwiLmVkaXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ucHJvZmJ0biB7XG4gIHdpZHRoOiA3NCU7XG4gIC8qIGhlaWdodDogMzBweDsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZDBkMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA5cHg7IH1cblxuLmlucCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlZGVkO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgLS1wYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDsgfVxuXG4udW5tYWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tbGVmdDogOCU7IH1cblxuLmlucGxvbmcge1xuICB3aWR0aDogOTAlOyB9XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7IH1cblxuLyoqXHJcbiAgICogMS4gQWRqdXN0IHRoaXMgdG8gc2l6ZVxyXG4gICAqL1xuLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xuICBib3JkZXItcmFkaXVzOiA2ZW07IH1cblxuLnN3aXRjaCBkaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgYmFja2dyb3VuZDogI2ZjYmE3ZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yNHB4O1xuICBjb2xvcjogI2ZmZmY7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE3JTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4ubWFsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAxNCU7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uZmVtYWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiAtNjAlO1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgZGl2IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTsgfVxuXG4uYnR0biB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA0N3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MyU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxNjJmNTsgfVxuXG4uY29scGFkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMXB4OyB9XG5cbi5wcm9qIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDsgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/add-profile/add-profile.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-profile/add-profile.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddProfilePage */

  /***/
  function srcAppPagesAddProfileAddProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProfilePage", function () {
      return AddProfilePage;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AddProfilePage =
    /*#__PURE__*/
    function () {
      function AddProfilePage(camera, file, webview, actionSheetController, alertCtrl, loadingCtrl, router, transfer, alertController, toastController, plt, filePath, service) {
        _classCallCheck(this, AddProfilePage);

        this.camera = camera;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.transfer = transfer;
        this.alertController = alertController;
        this.toastController = toastController;
        this.plt = plt;
        this.filePath = filePath;
        this.service = service;
        this.resPath = "assets/img/default.png";
        this.password = localStorage.getItem('password');
        this.email = localStorage.getItem('email');
        this.gender = 'male';
        this.responsedata = {};
      }

      _createClass(AddProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleEditable",
        value: function toggleEditable(event) {
          if (event.target.checked) {
            document.getElementById('abc').innerText = 'female';
            this.gender = 'female';
          } else {
            document.getElementById('abc').innerText = 'male';
            this.gender = 'male';
          }
        } //

      }, {
        key: "selectImage",
        value: function selectImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Load from Library',
                        handler: function handler() {
                          _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(sourceType) {
          var _this2 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imagePath) {
            if (_this2.plt.is('android') && sourceType === _this2.camera.PictureSourceType.PHOTOLIBRARY) {
              _this2.filePath.resolveNativePath(imagePath).then(function (filePath) {
                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this2.copyFileToLocalDir(correctPath, currentName, _this2.createFileName());
              });
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this2.copyFileToLocalDir(correctPath, currentName, _this2.createFileName());
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
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return '';
          } else {
            this.resPath = this.webview.convertFileSrc(img);
            return this.file.dataDirectory + img;
          }
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(namePath, currentName, newFileName) {
          var _this3 = this;

          this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            var filePath = _this3.file.dataDirectory + newFileName;
            _this3.filename = newFileName;
            _this3.final = _this3.pathForImage(filePath);
            _this3.resPath = _this3.pathForImage(filePath);
          }, function (error) {
            _this3.presentToast('Error while storing file.');
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: text,
                      position: 'top',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goto",
        value: function goto(p) {
          this.router.navigateByUrl(p);
        }
      }, {
        key: "upload",
        value: function upload() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var loading, data, targetPath, url, options, fileTransfer;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Please wait..'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    if (this.filename == undefined) {
                      data = {
                        'image': '',
                        'email': this.email,
                        'password': this.password,
                        'dob': this.dob,
                        'first_name': this.fname,
                        'last_name': this.lname,
                        'mobile': this.pnumber,
                        'gender': this.gender
                      };
                      this.service.withoutImgsign(data).subscribe(function (res) {
                        loading.dismiss();

                        if (res.status == '1') {
                          localStorage.setItem('user', JSON.stringify(res.result));

                          _this4.service.presentAlert('You have received a new card!');

                          _this4.goto('main');
                        } else {
                          _this4.service.presentAlert('Email already exist!');
                        }
                      }, function (err) {
                        loading.dismiss();

                        _this4.service.presentAlert('Network Connection Error');
                      });
                    } else {
                      targetPath = this.pathForImage(this.filename);
                      url = "https://yashtechsolutions.com/card_share/webservice/signup";
                      this.filename = this.filename;
                      options = {
                        fileKey: "image",
                        fileName: this.filename,
                        chunkedMode: false,
                        mimeType: "multipart/form-data",
                        params: {
                          'image': this.filename,
                          'email': this.email,
                          'password': this.password,
                          'dob': this.dob,
                          'first_name': this.fname,
                          'last_name': this.lname,
                          'mobile': this.pnumber,
                          'gender': this.gender
                        }
                      };
                      fileTransfer = this.transfer.create();
                      fileTransfer.upload(targetPath, url, options).then(function (data) {
                        _this4.responsedata = data;
                        loading.dismiss();

                        if (_this4.responsedata.response.status == '1') {
                          localStorage.setItem('user', JSON.stringify(_this4.responsedata.response.result));

                          _this4.presentToast('Registeration successfull!!');

                          _this4.goto('main');
                        } else {
                          _this4.presentToast('Email Already Exist!!');
                        }
                      }, function (err) {
                        loading.dismiss();

                        _this4.presentToast('Registeration failed!!');
                      });
                    }

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AddProfilePage;
    }();

    AddProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }];
    };

    AddProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-profile/add-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-profile.page.scss */
      "./src/app/pages/add-profile/add-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])], AddProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-profile-add-profile-module-es5.js.map