function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\"margin-top: 13px;\">\n      <ion-col><ion-icon (click)=\"goto('home')\" name=\"arrow-back\" style=\"font-weight: bold;font-size: 25px;\n      \"></ion-icon><span (click)=\"goto('home')\" style=\"    font-weight: bold;\n    margin-left: 34px;\n    margin-top: -25px;\n    display: block;\">Back</span></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"center\">\n        <div class=\"lbl\">Welcome back</div> \n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 52%;\" >\n      <ion-col size=\"12\" >\n        <div class=\"card\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"unmae\">Username or Email</div>\n              <ion-input [(ngModel)]=\"email\" class=\"inp\"></ion-input>\n              <div class=\"unmae\">Password</div>\n              <ion-input type=\"password\" [(ngModel)]=\"password\" class=\"inp\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"12\" >\n                <span class=\"for\" (click)=\"goto('forgot')\">Forgot password?</span>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-button (click)=\"login()\" class=\"btn\" size=\"small\" color=\"dark\" style=\"\">Login</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"center\">\n              <span style=\"font-size: 13px;\">Don't have an account?</span><span style=\"font-weight: bold;text-decoration: underline;font-size: 14px;\">Signup</span>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n ";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }];

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff url('bglogin.png') no-repeat center center / cover; }\n\n.card {\n  width: 100%;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 11px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding-bottom: 8px; }\n\n.lbl {\n  font-weight: bold;\n  font-size: 27px;\n  margin-top: 30px; }\n\n.btn {\n  width: 92%;\n  height: 34px;\n  text-transform: capitalize;\n  margin: 0 auto;\n  display: block; }\n\n.inp {\n  border-bottom: 2px solid #ededed;\n  margin-top: 5px;\n  width: 85%;\n  margin-left: 8%;\n  --padding-bottom:2px !important; }\n\n.unmae {\n  font-size: 14px;\n  margin-top: 10%;\n  margin-left: 8%; }\n\n.for {\n  text-decoration: underline;\n  color: #fcba7d;\n  font-size: 13px;\n  margin-left: 7%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0Y6XFwwMV9pb25jXFxjYXJkbmV3L3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUVBQWEsRUFBQTs7QUFFakI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiw2RUFBNkU7RUFDN0UsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWdCO0VBQUMsZUFBZTtFQUFDLGdCQUFnQixFQUFBOztBQUVyRDtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0NBQStCO0VBQy9CLGVBQWU7RUFDZixVQUFTO0VBQ1QsZUFBZTtFQUNmLCtCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ2xvZ2luLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDExcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuLmxibHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOiAyN3B4O21hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlucHtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi51bm1hZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxufVxyXG4uZm9ye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2ZjYmE3ZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(api, loadingController, r, alertController) {
        _classCallCheck(this, SignupPage);

        this.api = api;
        this.loadingController = loadingController;
        this.r = r;
        this.alertController = alertController;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goto",
        value: function goto(p) {
          this.r.navigateByUrl(p);
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    data = {
                      'email': this.email,
                      'password': this.password
                    };
                    this.api.presentLoading();
                    this.api.login(data).subscribe(function (res) {
                      if (res.status == '0') {
                        _this.api.presentAlert('Invalid  test');
                      }

                      if (res.status == '1') {
                        console.log("Valid login");

                        _this.api.presentAlert('Valid Credentials');

                        localStorage.setItem('user', JSON.stringify(res.result));

                        _this.goto('main');
                      }
                    }, function (err) {
                      _this.api.presentAlert('Network connection error');
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map