(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-comp/about-comp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-comp/about-comp.component.ts ***!
  \****************************************************/
/*! exports provided: AboutCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompComponent", function() { return AboutCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutCompComponent.ɵfac = function AboutCompComponent_Factory(t) { return new (t || AboutCompComponent)(); };
AboutCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutCompComponent, selectors: [["app-about-comp"]], decls: 2, vars: 0, template: function AboutCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWNvbXAvYWJvdXQtY29tcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-comp',
                templateUrl: './about-comp.component.html',
                styleUrls: ['./about-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/angular-pro-comp/angular-pro-comp.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/angular-pro-comp/angular-pro-comp.component.ts ***!
  \****************************************************************/
/*! exports provided: AngularProCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProCompComponent", function() { return AngularProCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AngularProCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularProCompComponent.ɵfac = function AngularProCompComponent_Factory(t) { return new (t || AngularProCompComponent)(); };
AngularProCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularProCompComponent, selectors: [["app-angular-pro-comp"]], decls: 2, vars: 0, template: function AngularProCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "angular-pro-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItcHJvLWNvbXAvYW5ndWxhci1wcm8tY29tcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularProCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-angular-pro-comp',
                templateUrl: './angular-pro-comp.component.html',
                styleUrls: ['./angular-pro-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_copponent_navbar_copponent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-copponent/navbar-copponent.component */ "./src/app/navbar-copponent/navbar-copponent.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Routing-deployment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_copponent_navbar_copponent_component__WEBPACK_IMPORTED_MODULE_1__["NavbarCopponentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_copponent_navbar_copponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar-copponent/navbar-copponent.component */ "./src/app/navbar-copponent/navbar-copponent.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _routing_module_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing-module.service */ "./src/app/routing-module.service.ts");
/* harmony import */ var _home_comp_home_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-comp/home-comp.component */ "./src/app/home-comp/home-comp.component.ts");
/* harmony import */ var _skills_comp_skills_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills-comp/skills-comp.component */ "./src/app/skills-comp/skills-comp.component.ts");
/* harmony import */ var _about_comp_about_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-comp/about-comp.component */ "./src/app/about-comp/about-comp.component.ts");
/* harmony import */ var _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-comp/contact-comp.component */ "./src/app/contact-comp/contact-comp.component.ts");
/* harmony import */ var _angular_pro_comp_angular_pro_comp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-pro-comp/angular-pro-comp.component */ "./src/app/angular-pro-comp/angular-pro-comp.component.ts");
/* harmony import */ var _react_pro_comp_react_pro_comp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./react-pro-comp/react-pro-comp.component */ "./src/app/react-pro-comp/react-pro-comp.component.ts");
/* harmony import */ var _javascript_pro_comp_javascript_pro_comp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./javascript-pro-comp/javascript-pro-comp.component */ "./src/app/javascript-pro-comp/javascript-pro-comp.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _routing_module_service__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_copponent_navbar_copponent_component__WEBPACK_IMPORTED_MODULE_3__["NavbarCopponentComponent"],
        _home_comp_home_comp_component__WEBPACK_IMPORTED_MODULE_6__["HomeCompComponent"],
        _skills_comp_skills_comp_component__WEBPACK_IMPORTED_MODULE_7__["SkillsCompComponent"],
        _about_comp_about_comp_component__WEBPACK_IMPORTED_MODULE_8__["AboutCompComponent"],
        _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_9__["ContactCompComponent"],
        _angular_pro_comp_angular_pro_comp_component__WEBPACK_IMPORTED_MODULE_10__["AngularProCompComponent"],
        _react_pro_comp_react_pro_comp_component__WEBPACK_IMPORTED_MODULE_11__["ReactProCompComponent"],
        _javascript_pro_comp_javascript_pro_comp_component__WEBPACK_IMPORTED_MODULE_12__["JavascriptProCompComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _routing_module_service__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _navbar_copponent_navbar_copponent_component__WEBPACK_IMPORTED_MODULE_3__["NavbarCopponentComponent"],
                    _home_comp_home_comp_component__WEBPACK_IMPORTED_MODULE_6__["HomeCompComponent"],
                    _skills_comp_skills_comp_component__WEBPACK_IMPORTED_MODULE_7__["SkillsCompComponent"],
                    _about_comp_about_comp_component__WEBPACK_IMPORTED_MODULE_8__["AboutCompComponent"],
                    _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_9__["ContactCompComponent"],
                    _angular_pro_comp_angular_pro_comp_component__WEBPACK_IMPORTED_MODULE_10__["AngularProCompComponent"],
                    _react_pro_comp_react_pro_comp_component__WEBPACK_IMPORTED_MODULE_11__["ReactProCompComponent"],
                    _javascript_pro_comp_javascript_pro_comp_component__WEBPACK_IMPORTED_MODULE_12__["JavascriptProCompComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _routing_module_service__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact-comp/contact-comp.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-comp/contact-comp.component.ts ***!
  \********************************************************/
/*! exports provided: ContactCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCompComponent", function() { return ContactCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactCompComponent.ɵfac = function ContactCompComponent_Factory(t) { return new (t || ContactCompComponent)(); };
ContactCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactCompComponent, selectors: [["app-contact-comp"]], decls: 2, vars: 0, template: function ContactCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtY29tcC9jb250YWN0LWNvbXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-comp',
                templateUrl: './contact-comp.component.html',
                styleUrls: ['./contact-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home-comp/home-comp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-comp/home-comp.component.ts ***!
  \**************************************************/
/*! exports provided: HomeCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCompComponent", function() { return HomeCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeCompComponent.ɵfac = function HomeCompComponent_Factory(t) { return new (t || HomeCompComponent)(); };
HomeCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCompComponent, selectors: [["app-home-comp"]], decls: 2, vars: 0, template: function HomeCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcC9ob21lLWNvbXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-comp',
                templateUrl: './home-comp.component.html',
                styleUrls: ['./home-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/javascript-pro-comp/javascript-pro-comp.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/javascript-pro-comp/javascript-pro-comp.component.ts ***!
  \**********************************************************************/
/*! exports provided: JavascriptProCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptProCompComponent", function() { return JavascriptProCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JavascriptProCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
JavascriptProCompComponent.ɵfac = function JavascriptProCompComponent_Factory(t) { return new (t || JavascriptProCompComponent)(); };
JavascriptProCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavascriptProCompComponent, selectors: [["app-javascript-pro-comp"]], decls: 2, vars: 0, template: function JavascriptProCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "javascript-pro-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phdmFzY3JpcHQtcHJvLWNvbXAvamF2YXNjcmlwdC1wcm8tY29tcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavascriptProCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-javascript-pro-comp',
                templateUrl: './javascript-pro-comp.component.html',
                styleUrls: ['./javascript-pro-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar-copponent/navbar-copponent.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/navbar-copponent/navbar-copponent.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarCopponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarCopponentComponent", function() { return NavbarCopponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarCopponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarCopponentComponent.ɵfac = function NavbarCopponentComponent_Factory(t) { return new (t || NavbarCopponentComponent)(); };
NavbarCopponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarCopponentComponent, selectors: [["navbar-component"]], decls: 29, vars: 0, consts: [[1, "data-container"], [1, "container"], [1, "navbar", "navbar-expand-sm"], ["routerLink", "/", 1, "navbar-brand", "mr-auto", "navbarbrand"], [1, "navbar-nav", "navbarnav"], [1, "nav-item", "navitem"], ["routerLink", "/", 1, "nav-link", "navlink"], ["routerLink", "/skills", 1, "nav-link", "navlink"], ["ngbDropdown", "", 1, "nav-item", "navitem"], ["ngbDropdownToggle", "", 1, "nav-link", "navlink"], [1, "fas", "fa-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdownmenu"], ["routerLink", "/angular_pro", 1, "dropdownitem"], ["routerLink", "/react_pro", 1, "dropdownitem"], ["routerLink", "/javascript_pro", 1, "dropdownitem"], ["routerLink", "/about", 1, "nav-link", "navlink"], ["routerLink", "/contact", 1, "nav-link", "navlink"]], template: function NavbarCopponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MY Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ANgular Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " React Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " JavaScript Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n}\r\n.data-container[_ngcontent-%COMP%] \r\n{\r\n    background-color: #ffc107;\r\n    padding:5px 0 ;\r\n    color: gary;\r\n}\r\n.navbarbrand[_ngcontent-%COMP%]\r\n{\r\n    width:25%;\r\n    font-size:30px;\r\n    font-weight: bold;\r\n    color: gray;\r\n\r\n}\r\n.navbarnav[_ngcontent-%COMP%]\r\n{\r\n    width: 75%;\r\n\r\n}\r\n.navitem[_ngcontent-%COMP%]\r\n{\r\n    width:120px ;\r\n    height: 55px;\r\n    margin-right:20px ;\r\n    text-align: center;\r\n    cursor: pointer;\r\n\r\n}\r\n.navitem[_ngcontent-%COMP%]:nth-child(2)\r\n{\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top:61px;\r\n    background-color: gray;\r\n    border: 0px solid transparent;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n.dropdownitem[_ngcontent-%COMP%]\r\n{\r\n    \r\n    padding:15px 10px;\r\n    display: block;\r\n    color:#ffc107;\r\n    cursor: pointer;\r\n    \r\n}\r\n.dropdownitem[_ngcontent-%COMP%]:hover\r\n{\r\n    text-decoration: none;\r\n    border: 1px solid #ffc107;\r\n    background-color: #ffc107;\r\n    color: gray;\r\n\r\n}\r\n.dropdown-toggle[_ngcontent-%COMP%]::after\r\n{\r\n    display: none;\r\n}\r\n.navlink[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; height: 100%;\r\n    padding:12px;\r\n    font-size:18px;\r\n    font-weight: bold;\r\n    color:gray;\r\n}\r\n.navlink[_ngcontent-%COMP%]:hover\r\n{\r\n    border: 1px solid gray;\r\n    border-radius: 10px;\r\n    color: gray;\r\n}\r\ni[_ngcontent-%COMP%] \r\n{\r\n    margin-left: 10px ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWNvcHBvbmVudC9uYXZiYXItY29wcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXOztBQUVmO0FBQ0E7O0lBRUksVUFBVTs7QUFFZDtBQUNBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5QjtBQUNBOzs7SUFHSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlOztBQUVuQjtBQUlBOztJQUVJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7O0FBRWY7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCO0FBS0E7O0lBRUksV0FBVyxFQUFFLFlBQVk7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXItY29wcG9uZW50L25hdmJhci1jb3Bwb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZGF0YS1jb250YWluZXIgXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICBwYWRkaW5nOjVweCAwIDtcclxuICAgIGNvbG9yOiBnYXJ5O1xyXG59XHJcbi5uYXZiYXJicmFuZFxyXG57XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcblxyXG59XHJcbi5uYXZiYXJuYXZcclxue1xyXG4gICAgd2lkdGg6IDc1JTtcclxuXHJcbn1cclxuLm5hdml0ZW1cclxue1xyXG4gICAgd2lkdGg6MTIwcHggO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHggO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4ubmF2aXRlbTpudGgtY2hpbGQoMilcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93bm1lbnVcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjYxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxufVxyXG4uZHJvcGRvd25pdGVtXHJcbntcclxuICAgIFxyXG4gICAgcGFkZGluZzoxNXB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiNmZmMxMDc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4uZHJvcGRvd25pdGVtOmhvdmVyXHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmMxMDc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcblxyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5uYXZsaW5rXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4ubmF2bGluazpob3ZlclxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5pIFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarCopponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar-component',
                templateUrl: './navbar-copponent.component.html',
                styleUrls: ['./navbar-copponent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/react-pro-comp/react-pro-comp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/react-pro-comp/react-pro-comp.component.ts ***!
  \************************************************************/
/*! exports provided: ReactProCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactProCompComponent", function() { return ReactProCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReactProCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReactProCompComponent.ɵfac = function ReactProCompComponent_Factory(t) { return new (t || ReactProCompComponent)(); };
ReactProCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReactProCompComponent, selectors: [["app-react-pro-comp"]], decls: 2, vars: 0, template: function ReactProCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "react-pro-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0LXByby1jb21wL3JlYWN0LXByby1jb21wLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactProCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-react-pro-comp',
                templateUrl: './react-pro-comp.component.html',
                styleUrls: ['./react-pro-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routing-module.service.ts":
/*!*******************************************!*\
  !*** ./src/app/routing-module.service.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_comp_home_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-comp/home-comp.component */ "./src/app/home-comp/home-comp.component.ts");
/* harmony import */ var _about_comp_about_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-comp/about-comp.component */ "./src/app/about-comp/about-comp.component.ts");
/* harmony import */ var _skills_comp_skills_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-comp/skills-comp.component */ "./src/app/skills-comp/skills-comp.component.ts");
/* harmony import */ var _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-comp/contact-comp.component */ "./src/app/contact-comp/contact-comp.component.ts");
/* harmony import */ var _angular_pro_comp_angular_pro_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-pro-comp/angular-pro-comp.component */ "./src/app/angular-pro-comp/angular-pro-comp.component.ts");
/* harmony import */ var _react_pro_comp_react_pro_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react-pro-comp/react-pro-comp.component */ "./src/app/react-pro-comp/react-pro-comp.component.ts");
/* harmony import */ var _javascript_pro_comp_javascript_pro_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./javascript-pro-comp/javascript-pro-comp.component */ "./src/app/javascript-pro-comp/javascript-pro-comp.component.ts");

 // CLI imports router









const routes = [
    { path: '', component: _home_comp_home_comp_component__WEBPACK_IMPORTED_MODULE_2__["HomeCompComponent"] },
    { path: 'about', component: _about_comp_about_comp_component__WEBPACK_IMPORTED_MODULE_3__["AboutCompComponent"] },
    { path: 'skills', component: _skills_comp_skills_comp_component__WEBPACK_IMPORTED_MODULE_4__["SkillsCompComponent"] },
    { path: 'contact', component: _contact_comp_contact_comp_component__WEBPACK_IMPORTED_MODULE_5__["ContactCompComponent"] },
    { path: 'angular_pro', component: _angular_pro_comp_angular_pro_comp_component__WEBPACK_IMPORTED_MODULE_6__["AngularProCompComponent"] },
    { path: 'react_pro', component: _react_pro_comp_react_pro_comp_component__WEBPACK_IMPORTED_MODULE_7__["ReactProCompComponent"] },
    { path: 'javascript_pro', component: _javascript_pro_comp_javascript_pro_comp_component__WEBPACK_IMPORTED_MODULE_8__["JavascriptProCompComponent"] },
]; // sets up routes constant where you define your routes
// configures NgModule imports and exports
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/skills-comp/skills-comp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/skills-comp/skills-comp.component.ts ***!
  \******************************************************/
/*! exports provided: SkillsCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsCompComponent", function() { return SkillsCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsCompComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsCompComponent.ɵfac = function SkillsCompComponent_Factory(t) { return new (t || SkillsCompComponent)(); };
SkillsCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsCompComponent, selectors: [["app-skills-comp"]], decls: 2, vars: 0, template: function SkillsCompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "skills-comp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy1jb21wL3NraWxscy1jb21wLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-comp',
                templateUrl: './skills-comp.component.html',
                styleUrls: ['./skills-comp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\12Angular\Routing-deployment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map