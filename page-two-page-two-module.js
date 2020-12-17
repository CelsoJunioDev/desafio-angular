(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-two-page-two-module"],{

/***/ "9fwA":
/*!************************************************!*\
  !*** ./src/app/page-two/page-two.component.ts ***!
  \************************************************/
/*! exports provided: PageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoComponent", function() { return PageTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _via_cep_shared_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../via-cep/shared/cep.service */ "rmvG");



class PageTwoComponent {
    constructor(cepService) {
        this.cepService = cepService;
    }
    ngOnInit() {
        this.consultarCep();
    }
    adicionarCep() {
        console.log('clicou!');
    }
    consultarCep() {
        this.cepService.getCep('72450050').subscribe(res => {
            console.log(res);
        }, error => {
        });
    }
}
PageTwoComponent.ɵfac = function PageTwoComponent_Factory(t) { return new (t || PageTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_via_cep_shared_cep_service__WEBPACK_IMPORTED_MODULE_1__["CepService"])); };
PageTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTwoComponent, selectors: [["page-two"]], decls: 2, vars: 0, template: function PageTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PAGE TWO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-two',
                templateUrl: './page-two.component.html',
                styleUrls: ['./page-two.component.scss']
            }]
    }], function () { return [{ type: _via_cep_shared_cep_service__WEBPACK_IMPORTED_MODULE_1__["CepService"] }]; }, null); })();


/***/ }),

/***/ "QFow":
/*!*********************************************!*\
  !*** ./src/app/page-two/page-two.module.ts ***!
  \*********************************************/
/*! exports provided: PageTwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoModule", function() { return PageTwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _page_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-two.component */ "9fwA");
/* harmony import */ var _page_two_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-two.routing.module */ "lIOA");





class PageTwoModule {
}
PageTwoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageTwoModule });
PageTwoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageTwoModule_Factory(t) { return new (t || PageTwoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _page_two_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageTwoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageTwoModule, { declarations: [_page_two_component__WEBPACK_IMPORTED_MODULE_2__["PageTwoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _page_two_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageTwoRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTwoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_two_component__WEBPACK_IMPORTED_MODULE_2__["PageTwoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_two_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageTwoRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lIOA":
/*!*****************************************************!*\
  !*** ./src/app/page-two/page-two.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PageTwoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoRoutingModule", function() { return PageTwoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _page_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-two.component */ "9fwA");





const routes = [
    {
        path: '',
        component: _page_two_component__WEBPACK_IMPORTED_MODULE_2__["PageTwoComponent"]
    }
];
class PageTwoRoutingModule {
}
PageTwoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageTwoRoutingModule });
PageTwoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageTwoRoutingModule_Factory(t) { return new (t || PageTwoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageTwoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTwoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=page-two-page-two-module.js.map