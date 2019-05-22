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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_rounting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.rounting */ "./src/app/app.rounting.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_rounting__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_9__["SignupService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.rounting.ts":
/*!*********************************!*\
  !*** ./src/app/app.rounting.ts ***!
  \*********************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0;\n  padding: 0;\n}\n.intro{\n  margin: auto;\n}\n.black {\n  width: 50%;\n  float: left;\n  background: #283644;\n  height: 100vh;\n}\n.white{\n  width: 50%;\n  float: right;\n  background: #4D727E;\n  height: 100vh;\n}\n.box{\n  height: 300px;\n  width: 500px;\n  background: #069A8E;\n  position:absolute;\n  top:150px;\n  left:0;\n  right:0;\n  margin:auto;\n  border-radius:20px;\n}\n.boxfather{\n  width:100%;\n  position:absolute;\n}\n.box h1{\n  color: #E4E4E4;\n  font-size: 5em;\n  text-align: center;\n  position: relative;\n  top:70px;\n  font-family: 'Montserrat', sans-serif;\n}\n.box button{\n  left:43%;\n  position:relative;\n  top:120px;\n  padding: 8px 20px;\n  cursor:pointer;\n  border:0;\n  outline:none;\n  color:#525252;\n  background:#E4E4E4;\n  transition:all .3s ease;\n  font-size: 19px;\n  font-family: montserrat;\n  border-radius:5px;\n}\n.homepage{\n  height: 100vh;\n  position:relative;\n  top:40px;\n  \n \n}\n.homepage p{\n  width: 80%;\n  line-height: 1.5;\n  margin:50px auto;\n  font-family: oxygen;\n  font-size: 18px;\n  color: #585858;\n}\n.homepage h1{\n  padding-top: 50px;\n  width: 80%;\n  margin:auto;\n  font-family: montserrat;\n  color: #525252;\n  font-size: 40px;\n}\n.test-box {\n  padding: 16px;\n  color: white;\n  font-size: 16px;\n}\n.text-area {\n  margin: 16px 0;\n}\nbutton {\n  padding: 8px 16px;\n}\ninput[type=\"text\"] {\n  color: black;\n  width: 70%;\n  padding: 8px;\n}\ntextarea {\n  color: black;\n  width: 70%;\n  padding: 8px;\n  height: 20vh;\n}\n.selected-paper {\n  cursor: pointer;\n}\n.selected-paper:hover {\n  color: yellowgreen;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"intro\">\n    <div class=\"black\"></div>\n    <div class=\"boxfather\">\n        <div class=\"box\">\n            <h1>WELCOME</h1>\n            <button (click)=\"logout()\">Logout</button>\n        </div>\n    </div>\n</div> -->\n<div class=\"container-fluid\" style=\"background: #4D727E;\">\n    <div class=\"row\">\n        <div class=\"col-md-6 test-box\">\n            <h2>Create Test Paper</h2>\n            <br>\n            <p>This dashboard is for teachers to create the test papers.</p>\n            <br>\n            <form>\n                <button (click)=\"addTest()\" class=\"btn btn-primary\">Add Test paper</button>\n                <button (click)=\"showAllPapers()\" style=\"float: right\" class=\"btn btn-primary\">Show all papers</button>\n                <br>\n                <div *ngIf=\"!showPapers\">\n                    <div class=\"col-md-12 text-area\" *ngIf=\"test\">\n                        <ng-container *ngIf=\"questions.length === 0\">\n                            <input style=\"color:black\" name=\"name\" type=\"text\"\n                                placeholder=\"Enter name of question paper\" [(ngModel)]=\"test.name\">\n                        </ng-container>\n\n                        <br>\n                        <br>\n                        <textarea [(ngModel)]=\"test.question\" name=\"question\" placeholder=\"Enter your question here\"\n                            style=\"color: black\"></textarea>\n                        <div *ngIf=\"test\">\n                            <br>\n                            <p>Is your question having multiple answers?</p>\n                            <label style=\"margin: 4px 16px 0 0\">\n                                <input type=\"radio\" name=\"radioGroup\" [checked]=\"!test.singleCorrect\"\n                                    (click)=\"multiple('yes')\">\n                                yes\n                            </label>\n                            <label>\n                                <input type=\"radio\" name=\"radioGroup\" #radio [checked]=\"test.singleCorrect\"\n                                    (click)=\"multiple('no')\"> no\n                            </label>\n                            <br>\n                            <br>\n                            <button (click)=\"addOptions()\" class=\"btn btn-primary\">Add options</button>\n                            <br>\n                            <label style=\"padding: 16px 0;\" *ngFor=\"let option of test.options; let i = index\">\n                                Answer {{i}}: <input [name]=\"i\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n                                    style=\"color:black\" [(ngModel)]=\"test.options[i]['text']\">\n                                <br>\n                            </label>\n                            <br>\n                            <br>\n                            <p>Your Answer: </p>\n                            <div *ngIf=\"test.singleCorrect\">\n                                <label style=\"margin: 4px 16px 0 0\" *ngFor=\"let option of test.options; let i = index\">\n                                    <input type=\"radio\" id=\"{{i}}\" name=\"radioGroup2\" (click)=\"answers(option, i)\">\n                                    {{i}}\n                                    <br>\n                                </label>\n                            </div>\n                            <div *ngIf=\"!test.singleCorrect\">\n                                <label style=\"margin: 4px 16px 0 0\" *ngFor=\"let option of test.options; let i = index\">\n                                    <input type=\"checkbox\" id=\"checkbox{{i}}\" name=\"checkbox\"\n                                        (click)=\"answers(option, i)\"> {{i}}\n                                    <br>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-primary\" *ngIf=\"test\">Add\n                        Question</button>\n                    <button type=\"submit\" style=\"float: right\" (click)=\"submitTest()\" class=\"btn btn-primary\"\n                        *ngIf=\"questions.length\">Submit test</button>\n                    <br>\n                    <p *ngIf=\"loader.status\">{{loader.message}}</p>\n                </div>\n\n                <!-- show all papers -->\n                <div *ngIf=\"showPapers\">\n                    <ng-container>\n                        <br>\n                        <p *ngIf=\"allTests.length === 0\">There is no test paper yet</p>\n                        <p *ngIf=\"allTests.length > 0\">Click the test paper to more details</p>\n                        <ol style=\"padding: 16px\">\n                            <li class=\"selected-paper\" *ngFor=\"let test of allTests; let i=index\"\n                                (click)=\"selectedPaper(i)\">{{test[0].name}}</li>\n                        </ol>\n                    </ng-container>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-6 test-box\">\n            <div *ngFor=\"let question of questions; let i = index\">\n                <div *ngIf=\"i===0\">\n                    <h2>Your question in {{question.name}}</h2>\n                </div>\n                <br>\n                <p>Question {{i}}: {{question.question}}</p>\n                <ol style=\"margin: 0 20px;\">\n                    <li *ngFor=\"let option of question.options\">{{option.text}}</li>\n                </ol>\n                <br>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
        this.allTests = [];
        this.questions = [];
        this.showPapers = false;
        this.url = '';
        this.loader = {
            status: false,
            message: ''
        };
        if (window.location.hostname === 'localhost') {
            this.url = 'http://localhost:4100/test-paper';
        }
        else {
            this.url = '/test-paper';
        }
    }
    DashboardComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.reset = function () {
        this.test = {
            question: '',
            name: '',
            singleCorrect: true,
            options: [],
            answers: []
        };
    };
    DashboardComponent.prototype.addTest = function () {
        this.questions = [];
        this.showPapers = false;
        this.reset();
    };
    DashboardComponent.prototype.multiple = function (value) {
        this.test.answers = [];
        if (value === 'yes') {
            this.test.singleCorrect = false;
        }
        else {
            this.test.singleCorrect = true;
        }
    };
    DashboardComponent.prototype.addOptions = function () {
        this.test['options'][this.test['options'].length] = {
            number: this.test['options'].length,
            text: ''
        };
    };
    DashboardComponent.prototype.answers = function (event, index) {
        if (this.test.singleCorrect) {
            this.test.answers[0] = index;
        }
        else {
            var ele = document.getElementById('checkbox' + index);
            if (ele['checked']) {
                this.test.answers.push(index);
            }
            else {
                this.test.answers.splice(this.test.answers.indexOf(index), 1);
            }
        }
    };
    DashboardComponent.prototype.submit = function () {
        this.questions.push(this.test);
        this.reset();
    };
    DashboardComponent.prototype.submitTest = function () {
        var _this = this;
        this.allTests.push(this.questions);
        this.loader.status = true;
        this.loader.message = 'Saving... Please wait.';
        this.http.post(this.url, this.allTests, { headers: { 'Content-Type': 'application/json' } })
            .subscribe(function (data) {
            _this.questions = [];
            _this.reset();
            _this.loader.status = true;
            _this.loader.message = 'You have succesfully added your paper';
            console.log(_this.allTests);
        }, function (err) {
            _this.loader.status = true;
            _this.loader.message = 'Error while adding your paper';
        });
    };
    DashboardComponent.prototype.showAllPapers = function () {
        this.showPapers = true;
    };
    DashboardComponent.prototype.selectedPaper = function (i) {
        this.questions = this.allTests[i];
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #ffffff;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4caf50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,\n.form button:active,\n.form button:focus {\n  background: #43a047;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #4caf50;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before,\n.container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #ef3b3a;\n}\n.login {\n    height: 100vh;\n  background: #76b852 !important; /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8dc26f);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n    <div class=\"login-page\">\n        <div class=\"form\">\n          <form class=\"login-form\">\n            <h3>Login <p [hidden]=\"!errorMessage\">{{errorMessage}}</p></h3>\n            <input type=\"email\" name=\"email\"placeholder=\"Your email\" [(ngModel)]=\"email\">\n            <input type=\"password\" name=\"password\"placeholder=\"Password\" [(ngModel)]=\"password\">\n            <button (click)=\"login()\">login</button>\n            <p class=\"message\">Not registered? <a (click)=\"signup()\" >Create an account</a></p>\n          </form>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(titleService, router, loginService) {
        this.titleService = titleService;
        this.router = router;
        this.loginService = loginService;
        this.email = '';
        this.password = '';
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('This is login page');
        var user = sessionStorage.getItem('user');
        if (sessionStorage.getItem('user')) {
            this.user = JSON.parse(user);
            this.loginSuccessful(JSON.parse(user));
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            email: this.email,
            password: this.password
        })
            .subscribe(function (res) {
            if (res) {
                _this.user = res;
                _this.loginSuccessful(res);
            }
            else {
                _this.errorMessage = 'Please check your email or password';
            }
        });
    };
    LoginComponent.prototype.loginSuccessful = function (user) {
        this.setUserDetails(user);
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.setUserDetails = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        if (window.location.hostname === 'localhost') {
            this.url = 'http://localhost:4100/login';
        }
        else {
            this.url = '/login';
        }
    }
    LoginService.prototype.login = function (member) {
        return this.http
            .post(this.url, member, { headers: { 'Content-Type': 'application/json' } });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background: #384047;\n    font-family: sans-serif;\n    font-size: 10px;\n  }\n  .post {\n    height: 100vh;\n    background: #76b852 !important; /* fallback for old browsers */\n    background: linear-gradient(to left, #76b852, #8dc26f);\n    font-family: \"Roboto\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  form {\n    background: #fff;\n    padding: 2em 2em 2em;\n    max-width: 400px;\n    margin: auto;\n    box-shadow: 0 0 1em #222;\n    border-radius: 2px;\n  }\n  form h2 {\n    margin: 0 0 50px 0;\n    padding: 10px;\n    text-align: center;\n    font-size: 30px;\n    color: #666666;\n    border-bottom: solid 1px #e5e5e5;\n  }\n  form p {\n    position: relative;\n  }\n  form input {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    outline: none;\n    margin: 0;\n  }\n  form input[type=\"text\"],\n  form input[type=\"password\"] {\n    background: #fff;\n    border: 1px solid #dbdbdb;\n    font-size: 1.6em;\n    padding: 0.2em 0.5em;\n    border-radius: 2px;\n  }\n  form input[type=\"text\"]:focus,\n  form input[type=\"password\"]:focus {\n    background: #fff;\n  }\n  form span {\n    display: block;\n    background: #f9a5a5;\n    padding: 2px 5px;\n    color: #666;\n  }\n  form input[type=\"submit\"] {\n    background: rgba(148, 186, 101, 0.7);\n    box-shadow: 0 3px 0 0 rgba(123, 163, 73, 0.7);\n    border-radius: 2px;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 1.4em;\n    line-height: 1.6em;\n    margin: 2em 0 0;\n    outline: none;\n    padding: 0.1em 0;\n    text-shadow: 0 1px #68b25b;\n  }\n  form input[type=\"submit\"]:hover {\n    background: #94af65;\n    text-shadow: 0 1px 3px rgba(70, 93, 41, 0.7);\n  }\n  form label {\n    position: absolute;\n    left: 8px;\n    top: 12px;\n    color: #999;\n    font-size: 16px;\n    display: inline-block;\n    padding: 4px 10px;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 0);\n    transition: color 0.3s, top 0.3s, background-color 0.8s;\n  }\n  form label.floatLabel {\n    top: -11px;\n    background-color: rgba(255, 255, 255, 0.8);\n    font-size: 14px;\n  }\n  .login {\n    background: #94af65;\n    padding: 13px 0px 13px 0px;\n    width: 100%;\n    display: inline-block;\n    color: white;\n    margin: 0px !important;\n    text-decoration: none\n  }"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n<form action=\"#\" method=\"post\">\n    <h2>Sign Up</h2>\n    <p>{{errorMessage}}</p>\n      <p>\n        <label for=\"password\" class=\"floatLabel\">Name</label>\n        <input id=\"Email\" name=\"username\"  type=\"text\" [(ngModel)]=\"username\" (ngModelChange)=\"change($event)\">\n      </p>\n      \n      <p>\n        <label for=\"Email\" class=\"floatLabel\">Email</label>\n        <input id=\"Email\" name=\"Email\" type=\"text\"  [(ngModel)]=\"email\" (ngModelChange)=\"change($event)\">\n      </p>\n      <p>\n        <label for=\"password\" class=\"floatLabel\">Password</label>\n        <input id=\"password\" name=\"password\"  type=\"password\" [(ngModel)]=\"password\" (ngModelChange)=\"change($event)\">\n      </p>\n      <p>\n        <input type=\"submit\" name=\"submit\"value=\"Create My Account\" id=\"submit\" (click)=\"register()\">\n      </p>\n      <p style=\"text-align: center\"><a  class=\"login\" (click)=\"login()\">Login</a></p>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService, router, titleService) {
        this.signUpService = signUpService;
        this.router = router;
        this.titleService = titleService;
        this.username = '';
        this.email = '';
        this.password = '';
        this.userType = 'admin';
        this.errorMessage = '';
        this.regView = [true, false, false, false];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Sign Up');
    };
    SignUpComponent.prototype.register = function () {
        var _this = this;
        if (!this.checkName())
            return;
        this.signUpService.register({
            email: this.email,
            username: this.username,
            password: this.password,
            usertype: this.userType
        })
            .subscribe(function (result) {
            if (result) {
                _this.errorMessage = 'Thanks your for sign up ';
                _this.regView = [false, true, false, false];
            }
            else {
                _this.errorMessage = 'User already exists';
            }
        });
    };
    SignUpComponent.prototype.checkName = function () {
        if (this.username.length < 3 || this.username.length > 20) {
            this.errorMessage = 'Names should be greater than 3 and less than 20 words';
            return false;
        }
        if (this.password.length < 6 || this.password.length > 20) {
            this.errorMessage = 'Password should be greater than 6 and less than 20 words';
            return false;
        }
        if (!/^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/.test(this.email)) {
            this.errorMessage = 'Invalid email';
            return false;
        }
        return true;
    };
    SignUpComponent.prototype.change = function (event) {
        this.errorMessage = '';
    };
    SignUpComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_sign_up_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.url = '';
        if (window.location.hostname === 'localhost') {
            this.url = 'http://localhost:4100/signup';
        }
        else {
            this.url = '/signup';
        }
    }
    SignupService.prototype.register = function (member) {
        return this.http.post(this.url, member, { headers: { 'Content-Type': 'application/json' } });
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deepaksharma/personal/amtica/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map