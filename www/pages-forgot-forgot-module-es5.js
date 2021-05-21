function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\"margin-top: 13px;\">\n      <ion-col><ion-icon (click)=\"goto('home')\" name=\"arrow-back\" style=\"font-weight: bold\"></ion-icon><span (click)=\"goto('home')\" style=\"font-weight: bold;margin-left: 3px\">Back</span></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"center\">\n        <div class=\"lbl\">Forget Password</div> \n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 52%;\" >\n      <ion-col size=\"12\" >\n        <div class=\"card\">\n          <form [formGroup]=\"forgotform\">\n              <ion-row style=\"margin-top:10%\">\n                  <ion-col size=\"12\">\n                    <div class=\"unmae\">Email</div>\n                    <ion-input formControlName=\"email\"  class=\"inp\"></ion-input>\n                    <div *ngIf=\"forgotform.controls.email.hasError('pattern') && forgotform.controls.email.touched\">\n                        <p class=\"com\">Invalid</p>\n                      </div>\n                  </ion-col>\n                </ion-row> \n                <ion-row>\n                  <ion-col size=\"12\">\n                      <ion-button [disabled]=\"forgotform.invalid\" (click)=\"change(forgotform.value)\" class=\"btn\" size=\"small\" color=\"dark\">Send Link</ion-button>\n                  </ion-col>\n                </ion-row>\n          </form>\n         \n         \n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n ";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.module.ts ***!
    \***********************************************/

  /*! exports provided: ForgotPageModule */

  /***/
  function srcAppPagesForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
      return ForgotPageModule;
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


    var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot.page */
    "./src/app/pages/forgot/forgot.page.ts");

    var routes = [{
      path: '',
      component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }];

    var ForgotPageModule = function ForgotPageModule() {
      _classCallCheck(this, ForgotPageModule);
    };

    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })], ForgotPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff url('signupback.png') no-repeat center center / cover; }\n\n.card {\n  width: 80%;\n  height: 288px;\n  background: #fff;\n  border-radius: 34px;\n  margin-left: 10%;\n  box-shadow: 0 11px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.lbl {\n  font-weight: bold;\n  font-size: 27px;\n  margin-top: 30px; }\n\n.btn {\n  width: 90%;\n  height: 34px;\n  margin-left: 5%; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 10px;\n  width: 85%;\n  margin-left: 8%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  /* margin: 10px 19px; */\n  margin-top: 32%;\n  margin-left: 8%; }\n\n.for {\n  text-decoration: underline;\n  color: #fcba7d;\n  font-size: 13px;\n  margin-left: 7%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L0Y6XFwwMV9pb25jXFxjYXJkbmV3L3NyY1xcYXBwXFxwYWdlc1xcZm9yZ290XFxmb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0VBQWEsRUFBQTs7QUFFakI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZFQUE2RSxFQUFBOztBQUVqRjtFQUNJLGlCQUFnQjtFQUFDLGVBQWU7RUFBQyxnQkFBZ0IsRUFBQTs7QUFFckQ7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQ0FBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFVBQVM7RUFDVCxlQUFlO0VBQ2YsK0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLHVCQUFBO0VBQ0EsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9zaWdudXBiYWNrLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyODhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTFweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi5sYmx7XHJcbiAgICBmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZTogMjdweDttYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5idG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbn1cclxuLmlucHtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6ODUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxufVxyXG4udW5tYWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvKiBtYXJnaW46IDEwcHggMTlweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDMyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxufVxyXG4uZm9ye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2ZjYmE3ZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forgot/forgot.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/forgot/forgot.page.ts ***!
    \*********************************************/

  /*! exports provided: ForgotPage */

  /***/
  function srcAppPagesForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
      return ForgotPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ForgotPage =
    /*#__PURE__*/
    function () {
      function ForgotPage(router, service, ldngCrtl, formBuilder) {
        _classCallCheck(this, ForgotPage);

        this.router = router;
        this.service = service;
        this.ldngCrtl = ldngCrtl;
        this.formBuilder = formBuilder;
        this.forgotform = formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])]
        });
      }

      _createClass(ForgotPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goto",
        value: function goto(p) {
          this.router.navigateByUrl(p);
        }
      }, {
        key: "change",
        value: function change(val) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // console.log(val);
                    this.service.presentLoading();
                    this.service.forgetPass(val.email).subscribe(function (res) {
                      if (res.status == '0') {
                        _this.service.presentAlert('Link send successfully');
                      } else {
                        _this.service.presentAlert('Enter valid email');
                      }
                    }, function (err) {
                      _this.service.presentAlert('Network connection error');
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ForgotPage;
    }();

    ForgotPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot.page.scss */
      "./src/app/pages/forgot/forgot.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], ForgotPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgot-forgot-module-es5.js.map