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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routing-transitions */ "./src/routing-transitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                // fader,
                _routing_transitions__WEBPACK_IMPORTED_MODULE_1__["slider"]
                // transformer,
                // stepper
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/components/pricing/pricing.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], data: { animation: '' } },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], data: { animation: 'isLeft' } },
    { path: 'pricing', component: _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], data: { animation: 'isRight' } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
                _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n  background-color: #333333 !important;\n}\n\n/* make keyframes that tell the start state and the end state of our object */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  /* make things invisible upon start */\n  -webkit-animation: fadeIn ease-in 1;\n  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 5.5s;\n  animation-duration: 5.5s;\n}\n\n.profielfoto {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.WhoAmI {\n  color: white;\n  font-size: 50px;\n}\n\n.betweenRow {\n  color: #FF8300;\n  border: solid 1px\n}\n\n/* .main-row{\n    padding-top: 50px;\n  } */\n\n.container {\n  padding-top: 60px;\n}\n\n.main-row {\n  padding-top: 75px;\n}\n\n.beschrijving {\n  color: white;\n}\n\n.hi {\n  color: white;\n  border-bottom: #2EFFFF 2px solid;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLDZFQUE2RTs7QUFFN0U7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxxRkFBcUY7RUFFckYsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyxrR0FBa0c7RUFFbEcsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUVoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7O0tBRUs7O0FBRUw7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbn1cblxuLyogbWFrZSBrZXlmcmFtZXMgdGhhdCB0ZWxsIHRoZSBzdGFydCBzdGF0ZSBhbmQgdGhlIGVuZCBzdGF0ZSBvZiBvdXIgb2JqZWN0ICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIC8qIG1ha2UgdGhpbmdzIGludmlzaWJsZSB1cG9uIHN0YXJ0ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAvKiBjYWxsIG91ciBrZXlmcmFtZSBuYW1lZCBmYWRlSW4sIHVzZSBhbmltYXR0aW9uIGVhc2UtaW4gYW5kIHJlcGVhdCBpdCBvbmx5IDEgdGltZSAqL1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiB0aGlzIG1ha2VzIHN1cmUgdGhhdCBhZnRlciBhbmltYXRpb24gaXMgZG9uZSB3ZSByZW1haW4gYXQgdGhlIGxhc3Qga2V5ZnJhbWUgdmFsdWUgKG9wYWNpdHk6IDEpKi9cbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1LjVzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNS41cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1LjVzO1xufVxuXG4ucHJvZmllbGZvdG8ge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5XaG9BbUkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmJldHdlZW5Sb3cge1xuICBjb2xvcjogI0ZGODMwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHhcbn1cblxuLyogLm1haW4tcm93e1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9ICovXG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLm1haW4tcm93IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi5iZXNjaHJpanZpbmcge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogIzJFRkZGRiAycHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masthead\">\n  <div class=\"container\">\n    <div class=\"row mx-auto text-center\">\n      <div class=\"col-md-12 col-12\">\n        <h1 class=\"WhoAmI\">Who am I?</h1>\n        <br>\n      </div>\n    </div>\n    <hr class=\"betweenRow\">\n    <div class=\"row main-row mx-auto my-auto text-center\">\n      <div class=\"col-md-4 col-12 my-auto mr-auto text-center\">\n        <img src=\"../../../assets/img/Stan.jpg\" alt=\"Ik\" class=\"profielfoto rounded\">\n      </div>\n      <div class=\"col-md-8 col-12 my-auto ml-auto text-left\">\n        <h1 class=\"hi\">Hi!</h1>\n        <p class=\"beschrijving\">\n          My name is Stan van Zanten and I am a second year computer science student at Avans Hogeschool Breda. I'm\n          currently 20 years old and living in Gilze.\n          My greatest passions are drinking with my friends, sports, programming and spending time with my wonderfull\n          girlfriend. I'm putting a lot of effort in learning how to make better websites, for customers but also for\n          my own good.\n          You can check out some of my work under the \"portfolio\" tab in the menu! Have a good day and (hopefully) talk\n          to you\n          soon!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-toggler:focus {\n    outline: none;\n}\n\n.fas.fa-bars {\n    color: #FF8300;\n    border-color: transparent !important;\n}\n\n.atSign {\n    color: #FF8300 !important;\n}\n\n.navbar-brand{\n    font-size: 32px;\n}\n\n.nav-link{\n    color: white;\n    font-size: 18px;\n}\n\n.nav-link:active,\n.nav-link:hover,\n.nav-link:focus{\n\tcolor: #FF8300\n}\n\n.navbar-nav{\n    text-align: right;\n}\n\n.dotstyle{\n    text-align: center;\n}\n\n.dotstyle ul {\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tcursor: default;\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.dotstyle li {\n\tposition: relative;\n\tdisplay: block;\n\tfloat: left;\n\tmargin: 0 16px;\n\twidth: 16px;\n\theight: 16px;\n\tcursor: pointer;\n}\n\n.dotstyle li a {\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\toutline: none;\n\tborder-radius: 50%;\n\tbackground-color: #FF8300;\n\tbackground-color: white;\n\ttext-indent: -999em; /* make the text accessible to screen readers */\n    cursor: pointer;\n    text-align: center\n}\n\n.dotstyle li a:focus {\n\toutline: none;\n}\n\n.dotstyle-scaleup li a {\n\ttransition: background-color 0.3s ease, -webkit-transform 0.3s ease;\n\ttransition: transform 0.3s ease, background-color 0.3s ease;\n\ttransition: transform 0.3s ease, background-color 0.3s ease, -webkit-transform 0.3s ease;\n}\n\n.dotstyle-scaleup li a:hover,\n.dotstyle-scaleup li a:active,\n.dotstyle-scaleup li a:focus {\n\tbackground-color: #FF8300;\n}\n\n.dotstyle-scaleup li.current a {\n\tbackground-color: #FF8300;\n\t-webkit-transform: scale(1.5);\n\ttransform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0NBR0M7QUFDRDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FFekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsTUFBTTtDQUNOLE9BQU87Q0FDUCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixtQkFBbUIsRUFBRSwrQ0FBK0M7SUFDakUsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FFQyxtRUFBMkQ7Q0FBM0QsMkRBQTJEO0NBQTNELHdGQUEyRDtBQUM1RDs7QUFFQTs7O0NBR0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZhcy5mYS1iYXJzIHtcbiAgICBjb2xvcjogI0ZGODMwMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5hdFNpZ24ge1xuICAgIGNvbG9yOiAjRkY4MzAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmR7XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5hdi1saW5rOmFjdGl2ZSxcbi5uYXYtbGluazpob3Zlcixcbi5uYXYtbGluazpmb2N1c3tcblx0Y29sb3I6ICNGRjgzMDBcbn1cblxuLm5hdmJhci1uYXZ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kb3RzdHlsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb3RzdHlsZSB1bCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGN1cnNvcjogZGVmYXVsdDtcblx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kb3RzdHlsZSBsaSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW46IDAgMTZweDtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTZweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG90c3R5bGUgbGkgYSB7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MzAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0dGV4dC1pbmRlbnQ6IC05OTllbTsgLyogbWFrZSB0aGUgdGV4dCBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uZG90c3R5bGUgbGkgYTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5kb3RzdHlsZS1zY2FsZXVwIGxpIGEge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uZG90c3R5bGUtc2NhbGV1cCBsaSBhOmhvdmVyLFxuLmRvdHN0eWxlLXNjYWxldXAgbGkgYTphY3RpdmUsXG4uZG90c3R5bGUtc2NhbGV1cCBsaSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGODMwMDtcbn1cblxuLmRvdHN0eWxlLXNjYWxldXAgbGkuY3VycmVudCBhIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGODMwMDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n<nav class=\"navbar fixed-top navbar-dark \">\n      <a class=\"navbar-brand\" routerLinkActive='active' routerLink='/'>St<span class=\"atSign\">@</span>n</a>\n      <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar1\">\n              <i class=\"fas fa-bars\"></i>\n      </button> -->\n      <div class=\"dotstyle dotstyle-scaleup\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\" routerLinkActive='active'>\n                <a class=\"nav-link\" routerLink='/'></a>\n            </li>\n            <li class=\"nav-item active\" routerLinkActive='active'>\n                <a class=\"nav-link\" routerLink='/about'></a>\n            </li>\n            <li class=\"nav-item active\" routerLinkActive='active'>\n                <a class=\"nav-link\" routerLink='/portfolio'></a>\n            </li>\n            <li class=\"nav-item active\" routerLinkActive='active'>\n                <a class=\"nav-link\" routerLink='/pricing'></a>\n            </li>\n        </ul>\n    </div>\n      <!-- <div class=\"navbar-collapse collapse\" id=\"navbar1\">\n          <ul class=\"navbar-nav\">\n              <li class=\"nav-item active\" routerLinkActive='active'>\n                  <a class=\"nav-link\" routerLink='/'>Home</a>\n              </li>\n              <li class=\"nav-item active\" routerLinkActive='active'>\n                  <a class=\"nav-link\" routerLink='/about'>About me</a>\n              </li>\n              <li class=\"nav-item active\" routerLinkActive='active'>\n                  <a class=\"nav-link\" routerLink='/portfolio'>Portfolio</a>\n              </li>\n              <li class=\"nav-item active\" routerLinkActive='active'>\n                  <a class=\"nav-link\" routerLink='/pricing'>Pricing</a>\n              </li>\n          </ul>\n      </div> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .vl-1 {\n\n  border-left: 6px solid #049dff;\n  height: 430px;\n  position: absolute;\n  left: 23.6%;\n  margin-left: -3px;\n  bottom: -75px;\n  animation: line-v1 3s linear forwards;\n  height:0%;\n  animation-delay: 2s;\n}\n\n@keyframes line-v1 {\n  from {\n    bottom:355px;\n    height:0%;\n  }\n  to {\n    bottom:-274px;\n    height:629px;\n  }\n}\n\n.vl-2 {\n  border-left: 6px solid #fdba04;\n  height: 370px;\n  position: absolute;\n  left: 50%;\n  margin-left: -3px;\n  bottom: -75px;\n  animation: line-v2 2.7s linear forwards;\n  height:0%;\n}\n\n@keyframes line-v2 {\n  from {\n    bottom:295px;\n    height:0%;\n  }\n  to {\n    bottom:-75px;\n    height:370px;\n  }\n}\n\n.vl-3 {\n  border-left: 6px solid #ed687c;\n  height: 430px;\n  position: absolute;\n  left: 76.4%;\n  margin-left: -3px;\n  bottom: -75px;\n  animation: line-v3 3s linear forwards;\n  height:0%;\n  animation-delay: 2s;\n}\n\n@keyframes line-v3 {\n  from {\n    bottom:355px;\n    height:0%;\n  }\n  to {\n    bottom:-274px;\n    height:629px;\n  }\n}\n\n.hl-1{\n  border-top: 6px solid #049dff;\n  width: 226px;\n  position: absolute;\n  left: 23.7%;\n  bottom: 349px;\n  animation: line 2s linear forwards;\n  width:0%;\n}\n\n@keyframes line {\n  from {\n    left:40%;\n    width:0%;\n  }\n  to {\n    left:23.7%;\n    width:235px;\n  }\n}\n\n.hl-2{\n  border-top: 6px solid #ed687c;\n  width: 226px;\n  position: absolute;\n  left: 60%;\n  bottom: 349px;\n  animation: line-1 2s linear forwards;\n  width:0%;\n}\n\n@keyframes line-1 {\n  from {\n    left:60%;\n    width:0%;\n  }\n  to {\n    left:60%;\n    width:238px;\n  }\n} */\n\n.masthead {\n  height: 100vh;\n  min-height: 500px;\n  background-color: black;\n  /* background-image: url('../../../assets/img/SpiderWeb.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; */\n}\n\n.main-row{\n  padding-top: 60px;\n}\n\n/* .frontpageline{\n  border-top: 2px solid white;\n}\n\n.frontpagetext{\n  color: white;\n  font-size: 48px;\n  font-family: 'Playfair Display', serif;\n}\n\n.carousel-control-next{\n  padding-top: 95px;\n}\n\n.link-next{\n  color: white;\n  font-family: 'Playfair Display', serif;\n  font-size: 18px;\n}\n\n.link-next:hover{\n  color: white;\n  text-decoration: none;\n}\n\n.carousel-item {\n  height: 100vh;\n  min-height: 350px;\n  background: no-repeat center center scroll;\n  background-size: cover;\n}\n\n.secondline{\n  border-top: 2px solid white\n}\n\n.factstext{\n  font-size: 40px;\n  color: white;\n  font-family: 'Playfair Display', serif;\n} */\n\n.openingtext {\n  margin-top: 25px;\n  font-size: 100px;\n  color: white;\n  text-align: center;\n}\n\n@media (max-width: 575.98px) { \n  .openingtext{\n    font-size: 50px;\n  }\n\n  .subtext{\n    font-size: 15px;\n  }\n }\n\n/* make keyframes that tell the start state and the end state of our object */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  /* make things invisible upon start */\n  -webkit-animation: fadeIn ease-in 1;\n  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 5.5s;\n  animation-duration: 5.5s;\n}\n\n.subtext {\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  -webkit-animation-delay: 1.1s;\n  animation-delay: 1.1s;\n}\n\n.headerclass{\n  -webkit-animation-delay: 1.4s;\n  animation-delay: 1.4s;\n}\n\n.frontpageline {\n  border-top: 2px solid #FF8300;\n  width: 20%;\n}\n\n/* scroll button */\n\n#section10 a {\n  padding-top: 60px;\n}\n\n#section10 a span {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  width: 30px;\n  height: 50px;\n  margin-left: -15px;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  box-sizing: border-box;\n}\n\n#section10 a span::before {\n  position: absolute;\n  bottom: 25px;\n  left: 50%;\n  content: '';\n  width: 6px;\n  height: 6px;\n  margin-left: -3px;\n  background-color: #fff;\n  border-radius: 100%;\n  -webkit-animation: sdb10 2s infinite;\n  animation: sdb10 2s infinite;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes sdb10 {\n  0% {\n    -webkit-transform: translate(0, 0);\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: translate(0, 20px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes sdb10 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: translate(0, 20px);\n            transform: translate(0, 20px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.demo a {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  z-index: 2;\n  display: inline-block;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  color: #fff;\n  font : normal 400 20px/1 'Josefin Sans', sans-serif;\n  letter-spacing: .1em;\n  text-decoration: none;\n  transition: opacity .3s;\n}\n\n.demo a:hover {\n  opacity: .5;\n}\n\nsection {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\nsection::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: '';\n  width: 100%;\n  height: 80%;\n  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 80%,rgba(0,0,0,.8) 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZHRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCOzs7aUNBRytCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NHOztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtDQUNEOztBQUVELDZFQUE2RTs7QUFFN0U7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxxRkFBcUY7RUFFckYsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyxrR0FBa0c7RUFFbEcsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUVoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbURBQW1EO0VBQ25ELG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFFWCw2RkFBNkY7QUFDL0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnZsLTEge1xuXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzA0OWRmZjtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMy42JTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJvdHRvbTogLTc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS12MSAzcyBsaW5lYXIgZm9yd2FyZHM7XG4gIGhlaWdodDowJTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuQGtleWZyYW1lcyBsaW5lLXYxIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOjM1NXB4O1xuICAgIGhlaWdodDowJTtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOi0yNzRweDtcbiAgICBoZWlnaHQ6NjI5cHg7XG4gIH1cbn1cblxuLnZsLTIge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNmZGJhMDQ7XG4gIGhlaWdodDogMzcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgYm90dG9tOiAtNzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLXYyIDIuN3MgbGluZWFyIGZvcndhcmRzO1xuICBoZWlnaHQ6MCU7XG59XG5cbkBrZXlmcmFtZXMgbGluZS12MiB7XG4gIGZyb20ge1xuICAgIGJvdHRvbToyOTVweDtcbiAgICBoZWlnaHQ6MCU7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTotNzVweDtcbiAgICBoZWlnaHQ6MzcwcHg7XG4gIH1cbn1cblxuLnZsLTMge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNlZDY4N2M7XG4gIGhlaWdodDogNDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzYuNCU7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBib3R0b206IC03NXB4O1xuICBhbmltYXRpb246IGxpbmUtdjMgM3MgbGluZWFyIGZvcndhcmRzO1xuICBoZWlnaHQ6MCU7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbkBrZXlmcmFtZXMgbGluZS12MyB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTozNTVweDtcbiAgICBoZWlnaHQ6MCU7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTotMjc0cHg7XG4gICAgaGVpZ2h0OjYyOXB4O1xuICB9XG59XG5cbi5obC0xe1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzA0OWRmZjtcbiAgd2lkdGg6IDIyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIzLjclO1xuICBib3R0b206IDM0OXB4O1xuICBhbmltYXRpb246IGxpbmUgMnMgbGluZWFyIGZvcndhcmRzO1xuICB3aWR0aDowJTtcbn1cblxuQGtleWZyYW1lcyBsaW5lIHtcbiAgZnJvbSB7XG4gICAgbGVmdDo0MCU7XG4gICAgd2lkdGg6MCU7XG4gIH1cbiAgdG8ge1xuICAgIGxlZnQ6MjMuNyU7XG4gICAgd2lkdGg6MjM1cHg7XG4gIH1cbn1cblxuLmhsLTJ7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZWQ2ODdjO1xuICB3aWR0aDogMjI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjAlO1xuICBib3R0b206IDM0OXB4O1xuICBhbmltYXRpb246IGxpbmUtMSAycyBsaW5lYXIgZm9yd2FyZHM7XG4gIHdpZHRoOjAlO1xufVxuXG5Aa2V5ZnJhbWVzIGxpbmUtMSB7XG4gIGZyb20ge1xuICAgIGxlZnQ6NjAlO1xuICAgIHdpZHRoOjAlO1xuICB9XG4gIHRvIHtcbiAgICBsZWZ0OjYwJTtcbiAgICB3aWR0aDoyMzhweDtcbiAgfVxufSAqL1xuXG4ubWFzdGhlYWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9TcGlkZXJXZWIuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cbn1cblxuLm1haW4tcm93e1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLyogLmZyb250cGFnZWxpbmV7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmZyb250cGFnZXRleHR7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcbiAgcGFkZGluZy10b3A6IDk1cHg7XG59XG5cbi5saW5rLW5leHR7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxpbmstbmV4dDpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNlY29uZGxpbmV7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZVxufVxuXG4uZmFjdHN0ZXh0e1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG59ICovXG5cbi5vcGVuaW5ndGV4dCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXG4gIC5vcGVuaW5ndGV4dHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cblxuICAuc3VidGV4dHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiB9XG5cbi8qIG1ha2Uga2V5ZnJhbWVzIHRoYXQgdGVsbCB0aGUgc3RhcnQgc3RhdGUgYW5kIHRoZSBlbmQgc3RhdGUgb2Ygb3VyIG9iamVjdCAqL1xuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGUtaW4ge1xuICBvcGFjaXR5OiAwO1xuICAvKiBtYWtlIHRoaW5ncyBpbnZpc2libGUgdXBvbiBzdGFydCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgLyogY2FsbCBvdXIga2V5ZnJhbWUgbmFtZWQgZmFkZUluLCB1c2UgYW5pbWF0dGlvbiBlYXNlLWluIGFuZCByZXBlYXQgaXQgb25seSAxIHRpbWUgKi9cbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogdGhpcyBtYWtlcyBzdXJlIHRoYXQgYWZ0ZXIgYW5pbWF0aW9uIGlzIGRvbmUgd2UgcmVtYWluIGF0IHRoZSBsYXN0IGtleWZyYW1lIHZhbHVlIChvcGFjaXR5OiAxKSovXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNS41cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDUuNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNS41cztcbn1cblxuLnN1YnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4xcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4xcztcbn1cblxuLmhlYWRlcmNsYXNze1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS40cztcbn1cblxuLmZyb250cGFnZWxpbmUge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI0ZGODMwMDtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLyogc2Nyb2xsIGJ1dHRvbiAqL1xuXG4jc2VjdGlvbjEwIGEge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbiNzZWN0aW9uMTAgYSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jc2VjdGlvbjEwIGEgc3Bhbjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNkYjEwIDJzIGluZmluaXRlO1xuICBhbmltYXRpb246IHNkYjEwIDJzIGluZmluaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNkYjEwIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzZGIxMCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZGVtbyBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQgOiBub3JtYWwgNDAwIDIwcHgvMSAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG59XG4uZGVtbyBhOmhvdmVyIHtcbiAgb3BhY2l0eTogLjU7XG59XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwwKSAwLHJnYmEoMCwwLDAsLjgpIDgwJSxyZ2JhKDAsMCwwLC44KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApIDAscmdiYSgwLDAsMCwuOCkgODAlLHJnYmEoMCwwLDAsLjgpIDEwMCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masthead\">\n  <div class=\"container h-100\">\n    <div class=\"row main-row h-100 mx-auto text-center\">\n      <div class=\"col-md-12 my-auto\">\n        <h1 class=\"fade-in openingtext\">The web is expanding</h1>\n        <hr class=\"fade-in frontpageline\">\n        <p class=\"fade-in subtext\">Will you be part of it?</p>\n      </div>\n    </div>\n    <div class=\"row\">\n        <section id=\"section10\" class=\"demo\">\n            <a href=\"#thanks\"><span></span></a>\n        </section>\n    </div>\n  </div>\n</div>\n<app-about id=\"thanks\"></app-about>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n  background-color: #333333 !important;\n  /* background-image: url('../../../assets/img/SpiderWeb.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat; */\n}\n\n.container {\n  padding-top: 60px;\n}\n\n.MyWorks {\n  color: white;\n}\n\n.row-items {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEM7OzttQ0FHaUM7QUFDbkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL1NwaWRlcldlYi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5NeVdvcmtzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm93LWl0ZW1zIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masthead\">\n  <div class=\"container\">\n    <div class=\"row h-100 mx-auto text-center\">\n      <div class=\"col-md-12 MyWorks\">\n        <h2>Hieronder staan wat van mijn projecten weergegeven ter representatie van mijn vaardigheden!</h2>\n      </div>\n    </div>\n    <div class=\"row row-items mx-auto my-auto text-center\">\n        <div class=\"col-xl-3 col-md-6 mb-4 my-auto\">\n            <div class=\"card border-0 shadow\">\n              <img src=\"../../../assets/img/knipkamer.png\" class=\"card-img-top\" alt=\"knipkamer\">\n              <div class=\"card-body text-center\">\n                <h5 class=\"card-title mb-0\">Team Member</h5>\n                <div class=\"card-text text-black-50\">Web Developer</div>\n              </div>\n            </div>\n          </div>\n          <!-- Team Member 2 -->\n          <div class=\"col-xl-3 col-md-6 mb-4 my-auto\">\n            <div class=\"card border-0 shadow\">\n              <img src=\"https://source.unsplash.com/9UVmlIb0wJU/500x350\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body text-center\">\n                <h5 class=\"card-title mb-0\">Team Member</h5>\n                <div class=\"card-text text-black-50\">Web Developer</div>\n              </div>\n            </div>\n          </div>\n          <!-- Team Member 3 -->\n          <div class=\"col-xl-3 col-md-6 mb-4 my-auto\">\n            <div class=\"card border-0 shadow\">\n              <img src=\"https://source.unsplash.com/sNut2MqSmds/500x350\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body text-center\">\n                <h5 class=\"card-title mb-0\">Team Member</h5>\n                <div class=\"card-text text-black-50\">Web Developer</div>\n              </div>\n            </div>\n          </div>\n          <!-- Team Member 4 -->\n          <div class=\"col-xl-3 col-md-6 mb-4 my-auto\">\n            <div class=\"card border-0 shadow\">\n              <img src=\"https://source.unsplash.com/ZI6p3i9SbVU/500x350\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body text-center\">\n                <h5 class=\"card-title mb-0\">Team Member</h5>\n                <div class=\"card-text text-black-50\">Web Developer</div>\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/pricing/pricing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n    background-color: #333333;\n    /* background-image: url('../../../assets/img/SpiderWeb.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat; */\n  }\n  \n  .main-row{\n    padding-top: 60px;\n  }\n  \n  .title{\n      font-size: 50px;\n      color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qjs7O21DQUcrQjtFQUNqQzs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7TUFDZixZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvU3BpZGVyV2ViLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIH1cbiAgXG4gIC5tYWluLXJvd3tcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxuXG4gIC50aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"masthead\">\n        <div class=\"container h-100\">\n          <div class=\"row main-row h-100 mx-auto text-center\">\n            <div class=\"col-md-12 my-auto\">\n              <h1 class=\"title\">Pricing</h1>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.ts ***!
  \*********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/components/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/components/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
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

/***/ "./src/routing-transitions.ts":
/*!************************************!*\
  !*** ./src/routing-transitions.ts ***!
  \************************************/
/*! exports provided: fader, slider, transformer, stepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepper", function() { return stepper; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Basic
var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
    ]),
]);
// Positioned
// @dynamic
var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', slideTo('left'))
]);
var transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }))
]);
// @dynamic
function slideTo(direction) {
    var _a, _b, _c, _d;
    var optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_a = {
                    position: 'absolute',
                    top: 0
                },
                _a[direction] = 0,
                _a.width = '100%',
                _a))
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_b = {}, _b[direction] = '-100%', _b))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_c = {}, _c[direction] = '100%', _c)))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_d = {}, _d[direction] = '0%', _d)))
            ])
        ]),
    ];
}
function translateTo(_a) {
    var _b = _a.x, x = _b === void 0 ? 100 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.rotate, rotate = _d === void 0 ? 0 : _d;
    var optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(" + x + "%, " + y + "%) rotate(" + rotate + "deg)" })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(" + x + "%, " + y + "%) rotate(" + rotate + "deg)" }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(0, 0) rotate(0)" }))
            ])
        ]),
    ];
}
// Keyframes
var stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0) translateX(100%)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1) translateX(0%)', offset: 1 }),
                ])),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                ])),
            ])
        ]),
    ])
]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stan/Documents/Persoonlijk/Own websites/TheWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map