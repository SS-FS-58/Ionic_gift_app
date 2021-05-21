function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-extra-categories-extra-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/extra-categories/extra-categories.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/extra-categories/extra-categories.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExtraCategoriesExtraCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>extra-categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/extra-categories/extra-categories.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/extra-categories/extra-categories.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ExtraCategoriesPageModule */

  /***/
  function srcAppPagesExtraCategoriesExtraCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraCategoriesPageModule", function () {
      return ExtraCategoriesPageModule;
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


    var _extra_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./extra-categories.page */
    "./src/app/pages/extra-categories/extra-categories.page.ts");

    var routes = [{
      path: '',
      component: _extra_categories_page__WEBPACK_IMPORTED_MODULE_6__["ExtraCategoriesPage"]
    }];

    var ExtraCategoriesPageModule = function ExtraCategoriesPageModule() {
      _classCallCheck(this, ExtraCategoriesPageModule);
    };

    ExtraCategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_extra_categories_page__WEBPACK_IMPORTED_MODULE_6__["ExtraCategoriesPage"]]
    })], ExtraCategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/extra-categories/extra-categories.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/extra-categories/extra-categories.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExtraCategoriesExtraCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4dHJhLWNhdGVnb3JpZXMvZXh0cmEtY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/extra-categories/extra-categories.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/extra-categories/extra-categories.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ExtraCategoriesPage */

  /***/
  function srcAppPagesExtraCategoriesExtraCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraCategoriesPage", function () {
      return ExtraCategoriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExtraCategoriesPage =
    /*#__PURE__*/
    function () {
      function ExtraCategoriesPage() {
        _classCallCheck(this, ExtraCategoriesPage);
      }

      _createClass(ExtraCategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExtraCategoriesPage;
    }();

    ExtraCategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-extra-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./extra-categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/extra-categories/extra-categories.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./extra-categories.page.scss */
      "./src/app/pages/extra-categories/extra-categories.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExtraCategoriesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-extra-categories-extra-categories-module-es5.js.map