function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n \n<ion-content>\n    <ion-grid>\n      <ion-row style=\"margin-top: 13px;\">\n        <ion-col size=\"4\"><ion-icon (click)=\"goto('profile')\" name=\"arrow-back\" style=\"font-weight: bold\"></ion-icon><span (click)=\"goto('profile')\" style=\"font-weight: bold;margin-left: 3px\">Back</span></ion-col>\n        <ion-col size=\"6\">\n          <div class=\"edit\">Edit Profile</div>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\" class=\"center\">\n          <img class=\"proj\"   src=\"{{resPath}}\"><br>\n          <button (click)=\"selectImage()\" class=\"profbtn\">Change Profile Picture</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"colpad\">\n            <div class=\"unmae\">First name</div>\n            <ion-input [(ngModel)]=\"fname\" class=\"inp\"></ion-input>\n        </ion-col>\n        <ion-col size=\"6\" class=\"colpad\">\n            <div class=\"unmae\">Last name</div>\n            <ion-input [(ngModel)]=\"lname\" class=\"inp\"></ion-input>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"12\">\n              <div class=\"unmae\">Email address</div>\n              <ion-input [(ngModel)]=\"email\" class=\"inp inplong\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"unmae\">Phone number</div>\n                <ion-input [(ngModel)]=\"pnumber\" class=\"inp inplong\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"12\">\n                  <div class=\"unmae\">Birthday</div>\n                  <!-- <ion-input [(ngModel)]=\"birthday\" class=\"inp inplong\"></ion-input> -->\n                  <ion-datetime [(ngModel)]=\"dob\" class=\"inp inplong\" displayFormat=\"DD MMMM YYYY\" ></ion-datetime>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <div class=\"unmae\">Gender</div>\n              <ion-col size=\"12\">\n                  <label class=\"switch\" ><span class=\"male\">Male</span><span class=\"female\">Female</span><input [checked]=\"checkg\" (change)=\"toggleEditable($event)\" type=\"checkbox\" />    <div id=\"abc\">male</div>\n                  </label>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-top: 24%;\">\n              <ion-col size=\"12\">\n                  <ion-button (click)=\"upload()\" class=\"bttn\" color=\"tertiary\">Save Changes</ion-button>\n              </ion-col>\n            </ion-row>\n    </ion-grid>\n    </ion-content>\n    ";
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppPagesEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/pages/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }];

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Tahoma, Geneva, sans-serif;\n  margin-top: -5px; }\n\n.profbtn {\n  width: 50%;\n  height: 32%;\n  border: 2px solid gray;\n  background: none;\n  border-radius: 5px;\n  margin: 12px; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 2px;\n  width: 90%;\n  margin-left: 5%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 4%;\n  margin-left: 8%; }\n\n.inplong {\n  width: 90%; }\n\n.switch input {\n  position: absolute;\n  opacity: 0; }\n\n/**\r\n   * 1. Adjust this to size\r\n   */\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  height: 2.5em;\n  width: 16em;\n  position: absolute;\n  border: 1px solid gray;\n  border-radius: 6em;\n  margin-left: 9px; }\n\n.switch div {\n  height: 50px;\n  width: 8em;\n  border-radius: 3em;\n  background: #fcba7d;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n  margin-top: -1px;\n  position: relative;\n  top: -24px;\n  color: #ffff;\n  line-height: 47px;\n  padding-left: 17%;\n  font-weight: normal; }\n\n.male {\n  position: relative;\n  top: 11px;\n  left: 14%;\n  font-size: 16px; }\n\n.female {\n  position: relative;\n  top: 11px;\n  right: -60%;\n  font-size: 16px; }\n\n.switch input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\n.bttn {\n  width: 94%;\n  height: 149%;\n  margin-left: 10px; }\n\n.colpad {\n  padding-left: 21px; }\n\n.proj {\n  width: 70px;\n  height: 70px;\n  border-radius: 70px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Y6XFwwMV9pb25jXFxjYXJkbmV3L3NyY1xcYXBwXFxwYWdlc1xcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsdUNBQXNDO0VBQ3RDLGdCQUFnQixFQUFBOztBQUVwQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVkO0VBQ0ksZ0NBQStCO0VBQy9CLGVBQWU7RUFDZixVQUFTO0VBQ1QsZUFBZTtFQUNmLCtCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFVBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7O0lDQ0U7O0FER0Y7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdHtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OlRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG4ucHJvZmJ0bntcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzIlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG59XHJcbi5pbnB7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxufVxyXG4udW5tYWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxufVxyXG4uaW5wbG9uZ3tcclxuICAgIHdpZHRoOjkwJTtcclxufVxyXG4uc3dpdGNoIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIEFkanVzdCB0aGlzIHRvIHNpemVcclxuICAgKi9cclxuICBcclxuICAuc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICB3aWR0aDogMTZlbTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcblxyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjYmE3ZDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTclO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIH1cclxuICAubWFsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDE0JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLmZlbWFsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIHJpZ2h0OiAtNjAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgLmJ0dG57XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgaGVpZ2h0OiAxNDklO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb2xwYWR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIxcHg7XHJcbiAgfVxyXG4gIC5wcm9qe1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo3MHB4O1xyXG4gIH1cclxuICAiLCIuZWRpdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogLTVweDsgfVxuXG4ucHJvZmJ0biB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzIlO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTJweDsgfVxuXG4uaW5wIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVkZWQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICAtLXBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50OyB9XG5cbi51bm1hZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1sZWZ0OiA4JTsgfVxuXG4uaW5wbG9uZyB7XG4gIHdpZHRoOiA5MCU7IH1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDsgfVxuXG4vKipcclxuICAgKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXHJcbiAgICovXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMi41ZW07XG4gIHdpZHRoOiAxNmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDZlbTtcbiAgbWFyZ2luLWxlZnQ6IDlweDsgfVxuXG4uc3dpdGNoIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDhlbTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZmNiYTdkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI0cHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIHBhZGRpbmctbGVmdDogMTclO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5tYWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDExcHg7XG4gIGxlZnQ6IDE0JTtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5mZW1hbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IC02MCU7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApOyB9XG5cbi5idHRuIHtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiAxNDklO1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuXG4uY29scGFkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMXB4OyB9XG5cbi5wcm9qIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDsgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
    \*********************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppPagesEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
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

    var EditProfilePage =
    /*#__PURE__*/
    function () {
      function EditProfilePage(service, camera, file, webview, actionSheetController, alertCtrl, loadingCtrl, router, transfer, alertController, toastController, plt, filePath) {
        _classCallCheck(this, EditProfilePage);

        this.service = service;
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
        this.resPath = 'assets/img/default.png';
        this.userdata = {};
        this.checkg = false;
        this.responsedata = [];
        this.userdata = localStorage.getItem('user');
        this.userdata = JSON.parse(this.userdata);
        this.getProfile();
      }

      _createClass(EditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this = this;

          this.service.presentLoading();
          this.service.getProfile(this.userdata.id).subscribe(function (res) {
            console.log(res);
            _this.resPath = res.result.image;
            _this.fname = res.result.first_name;
            _this.lname = res.result.last_name;
            _this.email = res.result.email;
            _this.pnumber = res.result.mobile;
            _this.dob = res.result.dob;
            _this.gender = res.result.gender;

            if (_this.gender == 'female') {
              _this.checkg = true;
              document.getElementById('abc').innerText = 'female';
            } else {
              _this.checkg = false;
            }
          }, function (err) {
            console.log(err);
          });
        }
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
            var _this2 = this;

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
                          _this2.takePicture(_this2.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Use Camera',
                        handler: function handler() {
                          _this2.takePicture(_this2.camera.PictureSourceType.CAMERA);
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
          var _this3 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imagePath) {
            if (_this3.plt.is('android') && sourceType === _this3.camera.PictureSourceType.PHOTOLIBRARY) {
              _this3.filePath.resolveNativePath(imagePath).then(function (filePath) {
                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this3.copyFileToLocalDir(correctPath, currentName, _this3.createFileName());
              });
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this3.copyFileToLocalDir(correctPath, currentName, _this3.createFileName());
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
          var _this4 = this;

          this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            var filePath = _this4.file.dataDirectory + newFileName;
            _this4.filename = newFileName;
            _this4.final = _this4.pathForImage(filePath);
          }, function (error) {
            _this4.presentToast('Error while storing file.');
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
            var _this5 = this;

            var loading, obj, targetPath, url, options, fileTransfer;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(this.filename);
                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      message: 'Please wait..'
                    });

                  case 3:
                    loading = _context3.sent;
                    _context3.next = 6;
                    return loading.present();

                  case 6:
                    if (this.filename == undefined) {
                      obj = {
                        'image': '',
                        'email': this.email,
                        'dob': this.dob,
                        'first_name': this.fname,
                        'last_name': this.lname,
                        'mobile': this.pnumber,
                        'gender': this.gender,
                        'user_id': this.userdata.id
                      };
                      this.service.EditProfile(obj).subscribe(function (res) {
                        if (res.status == '1') {
                          _this5.service.presentToast('Profile Updated Successfully !!');
                        } else {
                          _this5.service.presentToast('Error while updating profile !!');
                        }
                      }, function (err) {
                        console.log(err);
                      });
                    } else {
                      targetPath = this.pathForImage(this.filename);
                      url = "http://yashtechsolutions.com/card_share/webservice/update_profile";
                      this.filename = this.filename;
                      options = {
                        fileKey: "image",
                        fileName: this.filename,
                        chunkedMode: false,
                        mimeType: "multipart/form-data",
                        params: {
                          'image': this.filename,
                          'email': this.email,
                          'dob': this.dob,
                          'first_name': this.fname,
                          'last_name': this.lname,
                          'mobile': this.pnumber,
                          'gender': this.gender,
                          'user_id': this.userdata.id
                        }
                      };
                      fileTransfer = this.transfer.create();
                      fileTransfer.upload(targetPath, url, options).then(function (data) {
                        _this5.responsedata = data;
                        loading.dismiss();

                        if (_this5.responsedata.response.status == '1') {
                          localStorage.setItem('user', JSON.stringify(_this5.responsedata.response.result));

                          _this5.presentToast('Update successfull!!');

                          _this5.goto('main');
                        } else {
                          _this5.presentToast('Email Already Exist!!');
                        }
                      }, function (err) {
                        loading.dismiss();

                        _this5.presentToast('Network Connection Error!!');
                      });
                    }

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"]
      }];
    };

    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map