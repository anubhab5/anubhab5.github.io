(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <router-outlet></router-outlet> -->\n<!-- <app-header-bar></app-header-bar> -->\n<app-landing-page></app-landing-page>\n<app-skill></app-skill>\n<!-- <app-education></app-education> -->\n<!-- <app-contact></app-contact> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AB';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_6__["HeaderBarComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_7__["SkillComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='contact-container'>\n  <div class='contact-heading'>\n    <h2>CONTACT</h2>\n  </div>\n  <div class='contact-body'>\n    <div class='card'>\n      <div class='card-body'>\n        <span><i style='color: #b23121' class=\"fa fa-envelope\" aria-hidden=\"true\"> </i> anubhabmukherjee5@gmail.com</span>\n        <span><i style='color: #0077B5' class=\"fa fa-linkedin\" aria-hidden=\"true\"> </i> https://www.linkedin.com/in/anubhabmukherjee/</span>\n        <span><i class=\"fa fa-github\" aria-hidden=\"true\"> </i> https://github.com/anubhab5</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container .contact-heading {\n  background-color: #008073;\n  color: white;\n  padding: 1rem;\n  width: 100vw;\n  font-size: 1.28rem;\n  line-height: 1.508rem;\n  margin: 1.14rem 0 0.912rem 0; }\n\n.contact-container .contact-body .card {\n  position: relative;\n  overflow: hidden;\n  margin: 1rem;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 2px;\n  background-clip: padding-box;\n  padding: 20px;\n  width: 47%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.contact-container .contact-body .card .card-body {\n    font-size: 1.2rem;\n    line-height: 2.5rem; }\n\n.contact-container .contact-body .card .card-body span {\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9FOlxcU1RVRFlcXGNvZGVCbG9ja1xccGVyc29uYWxXZWJzaXRlL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7O0FBUmhDO0VBWU0sa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBR3RCLHNCQUFzQjtFQUd0QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixVQUFVO0VBQ1YsNkVBQ2tDLEVBQUE7O0FBMUJ4QztJQTZCUSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBOUIzQjtNQWlDVSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb250YWluZXIge1xyXG4gIC5jb250YWN0LWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA3MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBmb250LXNpemU6IDEuMjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41MDhyZW07XHJcbiAgICBtYXJnaW46IDEuMTRyZW0gMCAwLjkxMnJlbSAwO1xyXG4gIH1cclxuICAuY29udGFjdC1ib2R5IHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcclxuICAgICAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='education-container'>\n  <div class='education-heading'>\n    <h2>EDUCATION</h2>\n  </div>\n  <div class='education-body'>\n    <div class='card'>\n      <div class='card-header'>\n        <h4>Institute of Engineering and Management</h4>\n      </div>\n      <div class='card-body'>Bachelor of Technology (83%) : [ 2007 - 2011 ]</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".education-container .education-heading {\n  background-color: #008073;\n  color: white;\n  padding: 1rem;\n  width: 100vw;\n  font-size: 1.28rem;\n  line-height: 1.508rem;\n  margin: 1.14rem 0 0.912rem 0; }\n\n.education-container .education-body .card {\n  position: relative;\n  overflow: hidden;\n  margin: 1rem;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 2px;\n  background-clip: padding-box;\n  padding: 20px;\n  width: 47%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.education-container .education-body .card .card-header h4 {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 20px;\n    color: #795548 !important;\n    font-size: 2rem;\n    line-height: 2.508rem;\n    margin: 1.14rem 0 0.912rem 0; }\n\n.education-container .education-body .card .card-body {\n    font-size: 1.2rem;\n    line-height: 2.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL0U6XFxTVFVEWVxcY29kZUJsb2NrXFxwZXJzb25hbFdlYnNpdGUvc3JjXFxhcHBcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7O0FBUmhDO0VBWU0sa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBR3RCLHNCQUFzQjtFQUd0QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixVQUFVO0VBQ1YsNkVBQ2tDLEVBQUE7O0FBMUJ4QztJQThCVSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDRCQUE0QixFQUFBOztBQW5DdEM7SUF3Q1EsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZHVjYXRpb24tY29udGFpbmVyIHtcclxuICAuZWR1Y2F0aW9uLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA3MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBmb250LXNpemU6IDEuMjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41MDhyZW07XHJcbiAgICBtYXJnaW46IDEuMTRyZW0gMCAwLjkxMnJlbSAwO1xyXG4gIH1cclxuICAuZWR1Y2F0aW9uLWJvZHkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB3aWR0aDogNDclO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxyXG4gICAgICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM3OTU1NDggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjUwOHJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMS4xNHJlbSAwIDAuOTEycmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/header-bar/header-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header-bar'>\n  <div class='logo'>\n    <img src='../../assets/images/logo.png' />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bar {\n  width: 99vw;\n  height: 70px;\n  background: #009688; }\n  .header-bar .logo img {\n    margin-left: 1rem;\n    margin-top: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWJhci9FOlxcU1RVRFlcXGNvZGVCbG9ja1xccGVyc29uYWxXZWJzaXRlL3NyY1xcYXBwXFxoZWFkZXItYmFyXFxoZWFkZXItYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtFQUhyQjtJQU1JLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1iYXIvaGVhZGVyLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFyIHtcclxuICB3aWR0aDogOTl2dztcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwOTY4ODtcclxuXHJcbiAgLmxvZ28gaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.scss */ "./src/app/header-bar/header-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='landingpage-container'>\n  <section class='content'>\n\n    <div class='portfolio-name'>\n      <img src='../../assets/images/mf-avatar.svg' />\n      <span>ANUBHAB MUKHERJEE</span>\n    </div>\n\n    <div style='display: none;' class='portfolio-msg'>\n      <p>\n        I make things\n        that make a difference.\n      </p>\n    </div>\n\n    <div class='portfolio-bio'>\n      I am a UI Developer moving boldly to become a full stack developer\n    </div>\n\n  </section>\n  <section class='landing-misc-img'>\n    <img src='../../assets/images/hero.png' />\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 0;\n  padding: 0; }\n\n.landingpage-container {\n  display: flex;\n  justify-content: space-between;\n  background-image: url('lm9.jpg');\n  height: 100vh;\n  width: 100vw; }\n\n.content {\n  margin-left: 2rem;\n  width: inherit; }\n\n.landing-misc-img {\n  position: absolute;\n  bottom: 0;\n  right: 10px; }\n\n.landing-misc-img img {\n    height: 170px;\n    width: auto; }\n\n.portfolio-bio {\n  color: #5e35b1; }\n\n.portfolio-name {\n  color: #5e35b1;\n  font-size: 25px;\n  display: flex;\n  align-items: center; }\n\n.portfolio-name img {\n    height: 100px;\n    margin-right: 1rem; }\n\n.portfolio-name span {\n    font-size: 3.3rem;\n    color: #ffebee;\n    font-weight: 800; }\n\np {\n  border-right: solid 3px rgba(0, 255, 0, 0.75);\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"Source Code Pro\", monospace;\n  font-size: 28px;\n  color: white;\n  margin: 0 auto; }\n\n/* Animation */\n\np {\n  -webkit-animation: animated-text 4s steps(35, end) 1s 1 normal both, animated-cursor 600ms steps(29, end) infinite;\n          animation: animated-text 4s steps(35, end) 1s 1 normal both, animated-cursor 600ms steps(29, end) infinite; }\n\n/* text animation */\n\n@-webkit-keyframes animated-text {\n  from {\n    width: 0px; }\n  to {\n    width: 600px; } }\n\n@keyframes animated-text {\n  from {\n    width: 0px; }\n  to {\n    width: 600px; } }\n\n/* cursor animations */\n\n@-webkit-keyframes animated-cursor {\n  from {\n    border-right-color: rgba(0, 255, 0, 0.75); }\n  to {\n    border-right-color: transparent; } }\n\n@keyframes animated-cursor {\n  from {\n    border-right-color: rgba(0, 255, 0, 0.75); }\n  to {\n    border-right-color: transparent; } }\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .landingpage-container {\n    background: linear-gradient(#673ab7, #7e57c2); }\n  .content {\n    width: inherit;\n    margin: 0.2rem; }\n    .content .portfolio-msg {\n      display: none; }\n    .content .portfolio-name {\n      color: #5e35b1;\n      font-size: 12px;\n      display: flex; }\n      .content .portfolio-name img {\n        height: 75px;\n        margin-right: 1rem; }\n      .content .portfolio-name span {\n        font-size: 1.8rem;\n        letter-spacing: 2px;\n        color: #212121; }\n  .landing-misc-img {\n    position: absolute;\n    bottom: 0;\n    right: 10px; }\n    .landing-misc-img img {\n      height: 100px;\n      width: auto; }\n  .portfolio-bio {\n    font-size: 14px;\n    margin: 4rem;\n    color: #5e35b1; } }\n\n@media only screen and (min-device-width: 481px) and (max-device-width: 640px) {\n  .landingpage-container {\n    background-size: 100% 100%; }\n  .content {\n    width: inherit;\n    margin: 0.2rem; }\n    .content .portfolio-msg {\n      display: none; }\n  .landing-misc-img {\n    position: absolute;\n    bottom: 0;\n    right: 10px; }\n    .landing-misc-img img {\n      height: 100px;\n      width: auto; }\n  .portfolio-bio {\n    font-size: 14px;\n    margin: 4rem;\n    color: #5e35b1; }\n  .portfolio-name {\n    color: #5e35b1;\n    font-size: 12px;\n    display: flex; }\n    .portfolio-name img {\n      height: 75px;\n      margin-right: 1rem; }\n    .portfolio-name span {\n      font-size: 1.8rem;\n      letter-spacing: 2px;\n      color: #212121; } }\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-device-width: 641px) and (min-width: 768px) {\n  .landingpage-container {\n    background-size: 100% 100%; }\n  .content {\n    width: inherit;\n    margin: 0.2rem; }\n    .content .portfolio-msg {\n      display: none; }\n  .landing-misc-img {\n    position: absolute;\n    bottom: 0;\n    right: 10px; }\n    .landing-misc-img img {\n      height: 100px;\n      width: auto; }\n  .portfolio-bio {\n    font-size: 14px;\n    margin: 4rem;\n    color: #5e35b1; }\n  .portfolio-name {\n    color: #5e35b1;\n    font-size: 12px;\n    display: flex; }\n    .portfolio-name img {\n      height: 75px;\n      margin-right: 1rem; }\n    .portfolio-name span {\n      font-size: 1.8rem;\n      letter-spacing: 2px;\n      color: #212121; } }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 992px) {\n  .landingpage-container {\n    background-size: 100% 100%; } }\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL0U6XFxTVFVEWVxcY29kZUJsb2NrXFxwZXJzb25hbFdlYnNpdGUvc3JjXFxhcHBcXGxhbmRpbmctcGFnZVxcbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0NBQWtEO0VBQ2xELGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUhiO0lBTUksYUFBYTtJQUNiLFdBQVcsRUFBQTs7QUFJZjtFQUNFLGNBakNjLEVBQUE7O0FBb0NoQjtFQUNFLGNBckNjO0VBc0NkLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksYUFBYTtJQUNiLGtCQUFrQixFQUFBOztBQVJ0QjtJQVlJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsNkNBdERpQztFQXVEakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCLGNBQUE7O0FBRUE7RUFDRSxrSEFDK0M7VUFEL0MsMEdBQytDLEVBQUE7O0FBR2pELG1CQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFlBQVksRUFBQSxFQUFBOztBQUxoQjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxZQUFZLEVBQUEsRUFBQTs7QUFJaEIsc0JBQUE7O0FBQ0E7RUFDRTtJQUNFLHlDQUF5QyxFQUFBO0VBRTNDO0lBQ0UsK0JBQStCLEVBQUEsRUFBQTs7QUFMbkM7RUFDRTtJQUNFLHlDQUF5QyxFQUFBO0VBRTNDO0lBQ0UsK0JBQStCLEVBQUEsRUFBQTs7QUFJbkM7RUFDRTtJQUVFLDZDQUE2QyxFQUFBO0VBRy9DO0lBQ0UsY0FBYztJQUNkLGNBQWMsRUFBQTtJQUZoQjtNQUtJLGFBQWEsRUFBQTtJQUxqQjtNQVNJLGNBekdVO01BMEdWLGVBQWU7TUFDZixhQUFhLEVBQUE7TUFYakI7UUFjTSxZQUFZO1FBQ1osa0JBQWtCLEVBQUE7TUFmeEI7UUFtQk0saUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixjQUFjLEVBQUE7RUFLcEI7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVcsRUFBQTtJQUhiO01BTUksYUFBYTtNQUNiLFdBQVcsRUFBQTtFQUlmO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQXhJWSxFQUFBLEVBeUliOztBQUdIO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUc1QjtJQUNFLGNBQWM7SUFDZCxjQUFjLEVBQUE7SUFGaEI7TUFLSSxhQUFhLEVBQUE7RUFJakI7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVcsRUFBQTtJQUhiO01BTUksYUFBYTtNQUNiLFdBQVcsRUFBQTtFQUlmO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQXhLWSxFQUFBO0VBMktkO0lBQ0UsY0E1S1k7SUE2S1osZUFBZTtJQUNmLGFBQWEsRUFBQTtJQUhmO01BT0ksWUFBWTtNQUNaLGtCQUFrQixFQUFBO0lBUnRCO01BWUksaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixjQUFjLEVBQUEsRUFDZjs7QUFJTCxxREFBQTs7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCLEVBQUE7RUFHNUI7SUFDRSxjQUFjO0lBQ2QsY0FBYyxFQUFBO0lBRmhCO01BS0ksYUFBYSxFQUFBO0VBSWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXLEVBQUE7SUFIYjtNQU1JLGFBQWE7TUFDYixXQUFXLEVBQUE7RUFJZjtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osY0EzTlksRUFBQTtFQThOZDtJQUNFLGNBL05ZO0lBZ09aLGVBQWU7SUFDZixhQUFhLEVBQUE7SUFIZjtNQU9JLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtJQVJ0QjtNQVlJLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsY0FBYyxFQUFBLEVBQ2Y7O0FBSUwsbURBQUE7O0FBQ0E7RUFDRTtJQUNFLDBCQUEwQixFQUFBLEVBQzNCOztBQUdILG9FQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR2aW9sZXQ6ICM1ZTM1YjE7XHJcbiRjdXJzb3Jjb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNzUpO1xyXG5cclxuOmhvc3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubGFuZGluZ3BhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sbTkuanBnKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGFuZGluZy1taXNjLWltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMTBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tYmlvIHtcclxuICBjb2xvcjogJHZpb2xldDtcclxufVxyXG5cclxuLnBvcnRmb2xpby1uYW1lIHtcclxuICBjb2xvcjogJHZpb2xldDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzLjNyZW07XHJcbiAgICBjb2xvcjogI2ZmZWJlZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDNweCAkY3Vyc29yY29sb3I7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbnAge1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZWQtdGV4dCA0cyBzdGVwcygzNSwgZW5kKSAxcyAxIG5vcm1hbCBib3RoLFxyXG4gICAgYW5pbWF0ZWQtY3Vyc29yIDYwMG1zIHN0ZXBzKDI5LCBlbmQpIGluZmluaXRlO1xyXG59XHJcblxyXG4vKiB0ZXh0IGFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVkLXRleHQge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogY3Vyc29yIGFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBhbmltYXRlZC1jdXJzb3Ige1xyXG4gIGZyb20ge1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC43NSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubGFuZGluZ3BhZ2UtY29udGFpbmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwdmggMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjczYWI3LCAjN2U1N2MyKTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwLjJyZW07XHJcblxyXG4gICAgLnBvcnRmb2xpby1tc2cge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8tbmFtZSB7XHJcbiAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLW1pc2MtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby1iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA0cmVtO1xyXG4gICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NDBweCkge1xyXG4gIC5sYW5kaW5ncGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMC4ycmVtO1xyXG5cclxuICAgIC5wb3J0Zm9saW8tbXNnIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLW1pc2MtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby1iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA0cmVtO1xyXG4gICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvLW5hbWUge1xyXG4gICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjQxcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5sYW5kaW5ncGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMC4ycmVtO1xyXG5cclxuICAgIC5wb3J0Zm9saW8tbXNnIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYW5kaW5nLW1pc2MtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpby1iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA0cmVtO1xyXG4gICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvLW5hbWUge1xyXG4gICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubGFuZGluZ3BhZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/skill/skill.component.html":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='skill-container'>\n  <div class='skill-header'>\n    <h2>SKILLS</h2>\n  </div>\n  <div class='skill-container'>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>HTML</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/html5.png' alt='HTML5' />\n          <span>HTML5</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/jade.png' alt='JADE' />\n          <span>JADE</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>CSS</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/css3.png' alt='CSS3' />\n          <span>CSS3</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/sass.png' alt='SASS' />\n          <span>SASS</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/bootstrap.png' alt='BOOTSTRAP' />\n          <span>BOOTSTRAP</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/materialize.png' alt='MATERIALIZE' />\n          <span>MATERIALIZE</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>JAVASCRIPT</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/javascript.png' alt='JAVASCRIPT' />\n          <span>JAVASCRIPT</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/jquery.png' alt='JQUERY' />\n          <span>JQUERY</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/angular.png' alt='ANGULAR' />\n          <span>ANGULAR</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/nodejs.png' alt='NODE' />\n          <span>NODE</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>BACK-END</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/postgresql.png' alt='POSTGRESSQL' />\n          <span>POSTGRESSQL</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/mongodb.png' alt='MONGODB' />\n          <span>MONGODB</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>BUILD-TOOLS</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/grunt.png' alt='GRUNT' />\n          <span>GRUNT</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/gulp.png' alt='GULP' />\n          <span>GULP</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/bower.png' alt='BOWER' />\n          <span>BOWER</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/webpack.png' alt='WEBPACK' />\n          <span>WEBPACK</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='card'>\n      <div class='card-header'>\n        <h4>OTHER</h4>\n      </div>\n      <div class='card-body'>\n        <div class='skill-item'>\n          <img src='../../assets/images/github.png' alt='GITHUB' />\n          <span>GITHUB</span>\n        </div>\n        <div class='skill-item'>\n          <img src='../../assets/images/heroku.png' alt='HEROKU' />\n          <span>HEROKU</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skill/skill.component.scss":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-container .skill-header {\n  background-color: #008073;\n  color: white;\n  padding: 1rem;\n  width: 100vw;\n  font-size: 1.28rem;\n  line-height: 1.508rem;\n  margin: 1.14rem 0 0.912rem 0; }\n\n.skill-container .skill-container .card {\n  margin: 1rem;\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 2px;\n  background-clip: padding-box;\n  padding: 20px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.skill-container .skill-container .card .card-header h4 {\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    color: #795548 !important;\n    font-size: 1.8rem;\n    line-height: 2.508rem;\n    margin: 1.14rem 0 0.912rem 0;\n    letter-spacing: 2px; }\n\n.skill-container .skill-container .card .card-body {\n    display: flex; }\n\n.skill-container .skill-container .card .card-body .skill-item {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin: 1rem; }\n\n.skill-container .skill-container .card .card-body .skill-item span {\n        font-size: 1.2em;\n        font-weight: 900;\n        letter-spacing: 1px; }\n\n.skill-container .skill-container .card .card-body .skill-item img {\n        margin: 0 auto;\n        max-height: 4rem;\n        padding-bottom: 10px;\n        text-align: center;\n        vertical-align: middle;\n        display: table-cell; }\n\n@media only screen and (min-width: 320px) and (max-width: 480px) {\n  .skill-container .skill-header {\n    padding: 1%;\n    width: auto;\n    font-size: 1.28rem;\n    line-height: 0.5rem;\n    margin: 1px;\n    letter-spacing: 0.5rem;\n    text-align: center; }\n  .skill-container .skill-container .card {\n    margin: 1rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 5px;\n    width: auto;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n    .skill-container .skill-container .card .card-header {\n      display: flex;\n      justify-content: center;\n      background: aliceblue; }\n      .skill-container .skill-container .card .card-header h4 {\n        margin-bottom: 0;\n        padding-bottom: 0;\n        font-size: 1.5rem;\n        line-height: 1.2rem;\n        margin: 1rem 0 0.9rem 0;\n        letter-spacing: 1px; }\n    .skill-container .skill-container .card .card-body {\n      flex-wrap: wrap;\n      justify-content: space-evenly; }\n      .skill-container .skill-container .card .card-body .skill-item {\n        margin: 1rem; }\n        .skill-container .skill-container .card .card-body .skill-item span {\n          font-size: 0.8em;\n          font-weight: 700;\n          letter-spacing: 2px; }\n        .skill-container .skill-container .card .card-body .skill-item img {\n          margin: 0 auto;\n          max-height: 1.5rem;\n          padding-bottom: 10px;\n          text-align: center;\n          vertical-align: middle;\n          display: table-cell; } }\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (min-device-width: 481px) and (max-device-width: 640px) {\n  .skill-container .skill-header {\n    padding: 1%;\n    width: auto;\n    font-size: 1.28rem;\n    line-height: 0.5rem;\n    margin: 1px;\n    letter-spacing: 0.5rem;\n    text-align: center; }\n  .skill-container .skill-container .card {\n    margin: 1rem;\n    background-color: #fff;\n    box-sizing: border-box;\n    padding: 5px;\n    width: auto;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n    .skill-container .skill-container .card .card-header {\n      display: flex;\n      justify-content: center;\n      background: aliceblue; }\n      .skill-container .skill-container .card .card-header h4 {\n        margin-bottom: 0;\n        padding-bottom: 0;\n        font-size: 1.5rem;\n        line-height: 1.2rem;\n        margin: 1rem 0 0.9rem 0;\n        letter-spacing: 1px; }\n    .skill-container .skill-container .card .card-body {\n      flex-wrap: wrap;\n      justify-content: space-evenly; }\n      .skill-container .skill-container .card .card-body .skill-item {\n        margin: 1rem; }\n        .skill-container .skill-container .card .card-body .skill-item span {\n          font-size: 0.8em;\n          font-weight: 700;\n          letter-spacing: 2px; }\n        .skill-container .skill-container .card .card-body .skill-item img {\n          margin: 0 auto;\n          max-height: 1.5rem;\n          padding-bottom: 10px;\n          text-align: center;\n          vertical-align: middle;\n          display: table-cell; } }\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvRTpcXFNUVURZXFxjb2RlQmxvY2tcXHBlcnNvbmFsV2Vic2l0ZS9zcmNcXGFwcFxcc2tpbGxcXHNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7O0FBUmhDO0VBa0JNLFlBQVk7RUFDWixzQkFBc0I7RUFHdEIsc0JBQXNCO0VBR3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUViLDZFQUNrQyxFQUFBOztBQTlCeEM7SUFtQ1UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsbUJBQW1CLEVBQUE7O0FBekM3QjtJQThDUSxhQUFhLEVBQUE7O0FBOUNyQjtNQWlEVSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBOztBQXJEdEI7UUF3RFksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTs7QUExRC9CO1FBOERZLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsbUJBQW1CLEVBQUE7O0FBUS9CO0VBQ0U7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBQTtFQVJ0QjtJQWFNLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkVBQ2tDLEVBQUE7SUFuQnhDO01Bc0JRLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIscUJBQXFCLEVBQUE7TUF4QjdCO1FBMkJVLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7SUFoQzdCO01BcUNRLGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtNQXRDckM7UUF5Q1UsWUFBWSxFQUFBO1FBekN0QjtVQTRDWSxnQkFBZ0I7VUFDaEIsZ0JBQWdCO1VBQ2hCLG1CQUFtQixFQUFBO1FBOUMvQjtVQWtEWSxjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLG9CQUFvQjtVQUNwQixrQkFBa0I7VUFDbEIsc0JBQXNCO1VBQ3RCLG1CQUFtQixFQUFBLEVBQ3BCOztBQVFiLGlEQUFBOztBQUNBO0VBQ0U7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBQTtFQVJ0QjtJQWFNLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkVBQ2tDLEVBQUE7SUFuQnhDO01Bc0JRLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIscUJBQXFCLEVBQUE7TUF4QjdCO1FBMkJVLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7SUFoQzdCO01BcUNRLGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtNQXRDckM7UUF5Q1UsWUFBWSxFQUFBO1FBekN0QjtVQTRDWSxnQkFBZ0I7VUFDaEIsZ0JBQWdCO1VBQ2hCLG1CQUFtQixFQUFBO1FBOUMvQjtVQWtEWSxjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLG9CQUFvQjtVQUNwQixrQkFBa0I7VUFDbEIsc0JBQXNCO1VBQ3RCLG1CQUFtQixFQUFBLEVBQ3BCOztBQU9iLHFEQUFBOztBQUlBLG1EQUFBOztBQUlBLG9FQUFBIiwiZmlsZSI6InNyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGVlcC1wdXJwbGU6ICM2NzNhYjc7XHJcblxyXG4uc2tpbGwtY29udGFpbmVyIHtcclxuICAuc2tpbGwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwNzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZm9udC1zaXplOiAxLjI4cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTA4cmVtO1xyXG4gICAgbWFyZ2luOiAxLjE0cmVtIDAgMC45MTJyZW0gMDtcclxuICB9XHJcblxyXG4gIC5za2lsbC1jb250YWluZXIge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIC8vIHdpZHRoOiA0NyU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXHJcbiAgICAgICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICM3OTU1NDggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNTA4cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjE0cmVtIDAgMC45MTJyZW0gMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAuc2tpbGwtaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5za2lsbC1jb250YWluZXIge1xyXG4gICAgLnNraWxsLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxLjI4cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDFweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1jb250YWluZXIge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcclxuICAgICAgICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG5cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwLjlyZW0gMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgICAgLnNraWxsLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjQwcHgpIHtcclxuICAuc2tpbGwtY29udGFpbmVyIHtcclxuICAgIC5za2lsbC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yOHJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtY29udGFpbmVyIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXHJcbiAgICAgICAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMC45cmVtIDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAgIC5za2lsbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDY0MXB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.scss */ "./src/app/skill/skill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\STUDY\codeBlock\personalWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map