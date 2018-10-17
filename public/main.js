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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-post/create-post.component */ "./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: "", redirectTo: "/posts", pathMatch: "full" },
    { path: "posts/:id", component: _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"] },
    { path: "posts", component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "add", component: _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_7__["CreatePostComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '**', redirectTo: '/posts', pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  border-width: 2px;\n  margin: 0 5px 0 5px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<body>\n    <div class=\"d-flex p-4\">\n        <router-outlet></router-outlet>\n    </div>\n    <ng-flash-message></ng-flash-message>\n</body>"

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
        this.title = 'Room Hunter';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-post/create-post.component */ "./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_flash_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
                _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_9__["PostDetailComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_12__["CreatePostComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__["NgFlashMessagesModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _services_post_service__WEBPACK_IMPORTED_MODULE_16__["PostService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _services_flash_message_service__WEBPACK_IMPORTED_MODULE_19__["FlashMessageService"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_20__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-post/create-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/create-post/create-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-post/create-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-hearder text-primary\">List My Room</h2>\n\n  <br>\n  <h3 class=\"text-muted\">Details</h3>\n  <hr class=\"my-2\">\n  <form [formGroup]=\"postForm\" (ngSubmit)=\"onCreatedSubmit()\">\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input type=\"text\" formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\n        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.title.errors.required\">Title is required</div>\n          <div *ngIf=\"f.title.errors.minlength\">Title must be at least 10 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n       <label>RoomType</label>\n       <select [(ngModel)]=\"roomType\" formControlName=\"roomType\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.roomType.errors }\">\n        <option>Private Room</option>\n        <option>Room Shared with Others</option>\n       </select>\n       <div *ngIf=\"submitted && f.roomType.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.roomType.errors.required\">RoomType is required</div>\n       </div>\n    </div>\n\n    <div class=\"form-group\">\n       <label class=\"rent\">Rent</label>\n       <div class=\"form-group\">\n         <div class=\"input-group mb-3\">\n           <div class=\"input-group-prepend\">\n             <span class=\"input-group-text\">$</span>\n           </div>\n           <input [(ngModel)]=\"rent\"  formControlName=\"rent\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.rent.errors }\"/>\n           <div class=\"input-group-append\">\n             <span class=\"input-group-text\">Per Week</span>\n           </div>\n          <div *ngIf=\"submitted && f.rent.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.rent.errors.required\">Rent is required</div>\n            <div *ngIf=\"f.rent.errors.pattern\">Rent should be postive number</div>\n          </div>\n         </div>\n       </div>\n    </div>\n\n    <div class=\"form-group\">\n       <label>Address</label>\n       <input type=\"text\" formControlName=\"address\" class=\"form-control\" google-place\n        (onSelect)=\"setAddress($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\n       <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n         <div *ngIf=\"f.address.errors.required\">Address is required</div>\n       </div>\n    </div>\n    <div class=\"form-group\">\n       <label>Postcode</label>\n       <input type=\"text\" formControlName=\"postCode\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.postCode.errors }\" />\n       <div *ngIf=\"submitted && f.postCode.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.postCode.errors.required\">PostCode is required</div>\n           <div *ngIf=\"f.postCode.errors.pattern\">PostCode format invalid</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n       <label>Description</label>\n       <textarea type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" rows=\"5\"></textarea>\n       <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.description.errors.required\">Description is required</div>\n        </div>\n    </div>\n    <h3 class=\"text-muted\">Contact Info</h3>\n    <hr class=\"my-2\">\n    <div class=\"form-group\">\n       <label>Contact Name</label>\n       <input type=\"text\" formControlName=\"contactName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.contactName.errors }\" />\n       <div *ngIf=\"submitted && f.contactName.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.contactName.errors.required\">Contact Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n       <label>Phone</label>\n       <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n       <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\n           <div *ngIf=\"f.phone.errors.pattern\">Phone should contain 10 numbers</div>\n       </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"houseImage\">House Photo</label>\n      <input type=\"file\" class=\"form-control\" formControlName=\"file\" multiple name=\"house_photo\" id=\"uploadFile\" accept='image/*'  [ngClass]=\"{ 'is-invalid': submitted && f.file.errors }\"  (change)=\"setFile($event.target.files)\">\n      <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"rounded mb-3\" width=\"180\">\n      <button type=\"button\" [disabled]=\"f.file.invalid || f.file.prestine\" (click)=\"uploadFile()\">Upload</button>\n      <div *ngIf=\"submitted && f.file.errors \" class=\"invalid-feedback\">\n        <div *ngIf=\"f.file.errors.required \">house image should upload</div>\n      </div>\n\n    </div>\n  \n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    <button type=\"button\" (click)=\"onCreatedCancel()\" class=\"btn btn-secondary\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/components/create-post/create-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-post/create-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'http://127.0.0.1:4000/upload/';
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(authService, uploadService, postService, flashMessageService, router, zone, formBuilder) {
        this.authService = authService;
        this.uploadService = uploadService;
        this.postService = postService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.fileUploaded = false;
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    CreatePostComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.street = addrObj.street_number;
            _this.suburb = addrObj.route;
            _this.city = addrObj.locality;
            _this.state = addrObj.locality;
            _this.postCode = addrObj.postal_code;
            if (_this.postCode != null && _this.postCode != undefined) {
                _this.postForm.controls.postCode.setValue(_this.postCode);
            }
            console.log(_this.addr);
            if (_this.city == null || _this.city == undefined) {
                _this.city = addrObj.formatted_address;
            }
        });
    };
    CreatePostComponent.prototype.ngOnInit = function () {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        var user = this.authService.loadUser();
        var userInfo = JSON.parse(user);
        this.byUser = userInfo.username;
        var nowDate = new Date();
        this.postDate = nowDate.toLocaleDateString();
        this.houseImage = "";
        this.postForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1000)]],
            roomType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]+.?[0-9]*$/)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-z0-9]+.*$/)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1000)]],
            contactName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]{10,10}$/)]],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    Object.defineProperty(CreatePostComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.postForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreatePostComponent.prototype.onCreatedSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.postForm.invalid) {
            return;
        }
        this.title = this.postForm.controls.title.value;
        this.roomType = this.postForm.controls.roomType.value;
        this.rent = this.postForm.controls.rent.value;
        this.description = this.postForm.controls.description.value;
        this.contactName = this.postForm.controls.contactName.value;
        this.phone = this.postForm.controls.phone.value;
        this.houseImage = this.uploadService.getHouseImage();
        //create post
        this.postService.createPost(this.title, this.street, this.suburb, this.city, this.state, this.postCode, this.roomType, this.contactName, this.phone, this.rent, this.byUser, this.postDate, this.description, this.houseImage).subscribe(function (data) {
            if (data.success) {
                _this.flashMessageService.showMessage(data.msg, true);
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessageService.showMessage(data.msg, false);
                _this.router.navigate(['/add']);
            }
        });
    };
    CreatePostComponent.prototype.onCreatedCancel = function () {
        this.router.navigate(['/']);
    };
    //set file info and read file local src info
    CreatePostComponent.prototype.setFile = function (files) {
        var _this = this;
        this.files = files;
        if (files && files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageSrc = event.target.result;
            };
            reader.readAsDataURL(files[0]);
        }
    };
    /*
     * upload house image
     */
    CreatePostComponent.prototype.uploadFile = function () {
        var _this = this;
        var formData = new FormData();
        console.log(this.files);
        for (var i = 0; i < this.files.length; i++) {
            formData.append("file", this.files[i]);
        }
        //upload image
        this.uploadService.uploadFile(formData).subscribe(function (data) {
            if (data != undefined || data != null) {
                _this.fileUploaded = true;
                _this.uploadService.addHouseImage(data.data);
                console.log(_this.uploadService.getHouseImage());
                _this.flashMessageService.showMessage(data.msg, false);
            }
            else {
                _this.fileUploaded = false;
                _this.flashMessageService.showMessage(data.msg, false);
            }
        });
    };
    CreatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/components/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/components/create-post/create-post.component.css")]
        })
        /** This class is responsible for creating a new post and save it to the database */
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/components/filter/filter.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/filter/filter.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline my-2 my-lg-0 p-2\">\n\n  <input type=\"text\" class=\"form-control mr-sm-2\" name=\"address\" [(ngModel)]=\"area\" name=\"text\" placeholder=\"Search\">\n  <button class=\"btn btn-primary my-2 my-sm-0\"  (click)=\"seachPostByArea()\"  type=\"submit\">Search</button>\n</form>\n\n<div class=\"d-flex justify-content-start p-1 \">\n  <div>\n    <label>Price:&nbsp;&nbsp;&nbsp;</label>\n  </div>\n  <div class=\"custom-control custom-checkbox \">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"less100\" name=\"0\" (change)=\"searchPostByPrice($event.target.name, $event.target.checked)\">\n    <label class=\"custom-control-label\" for=\"less100\">&lt; $100&nbsp;&nbsp;&nbsp;</label>\n  </div>\n  <div class=\"custom-control custom-checkbox \">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-100-200\" name=\"1\" (change)=\"searchPostByPrice($event.target.name, $event.target.checked)\">\n    <label class=\"custom-control-label\" for=\"price-100-200\">$100 - $200&nbsp;&nbsp;&nbsp;</label>\n  </div>\n  <div class=\"custom-control custom-checkbox \">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-200-300\" name=\"2\" (change)=\"searchPostByPrice($event.target.name, $event.target.checked)\">\n    <label class=\"custom-control-label\" for=\"price-200-300\">$200 - $300&nbsp;&nbsp;&nbsp;</label>\n  </div>\n  <div class=\"custom-control custom-checkbox \">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-300-400\"  name=\"3\" (change)=\"searchPostByPrice($event.target.name, $event.target.checked)\">\n    <label class=\"custom-control-label\" for=\"price-300-400\">$300 - $400&nbsp;&nbsp;&nbsp;</label>\n  </div>\n  <div class=\"custom-control custom-checkbox \">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"greater400\" name=\"4\" (change)=\"searchPostByPrice($event.target.name, $event.target.checked)\">\n    <label class=\"custom-control-label\" for=\"greater400\">&gt; 400&nbsp;&nbsp;&nbsp;</label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = /** @class */ (function () {
    function FilterComponent(postService, messageService, zone) {
        this.postService = postService;
        this.messageService = messageService;
        this.zone = zone;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.area = [];
        this.price = [];
    };
    //search post by price when user select price option
    FilterComponent.prototype.searchPostByPrice = function (price, bCheck) {
        var _this = this;
        console.log('set price');
        //set price 
        if (bCheck) {
            if (this.price.indexOf(price) == -1) {
                this.price.push(price);
            }
        }
        else {
            var price_tmp = [];
            for (var i = 0; i < this.price.length; ++i) {
                if (this.price[i] == price) {
                    continue;
                }
                else {
                    price_tmp.push(this.price[i]);
                }
            }
            this.price = price_tmp;
        }
        console.log(this.price);
        this.price.sort();
        this.postService.searchPostByPrice(this.price).subscribe(function (data) {
            _this.messageService.sendMessage((data));
        });
    };
    //search posts by area
    FilterComponent.prototype.seachPostByArea = function () {
        var _this = this;
        this.postService.searchPostByArea(this.area).subscribe(function (data) {
            console.log(data);
            _this.messageService.sendMessage((data));
        });
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/components/filter/filter.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
        /** The class responsible for filtering posts based on users' selection  */
        ,
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-hearder text-primary\">Login</h2>\n\n<form [formGroup]=\"loginForm\" (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label class=\"col-form-label\" for=\"username\">Username</label>\n    <input class=\"form-control\" formControlName=\"username\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Enter Username\">\n    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n       <div *ngIf=\"f.username.errors.required\">Username is required</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-form-label\" for=\"password\">Password</label>\n    <input class=\"form-control\" formControlName=\"password\"  type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\" Enter Password\">\n    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n       <div *ngIf=\"f.password.errors.required\">Password is required</div>\n    </div>\n  </div>\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function LoginComponent(authService, router, formBuilder, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var user = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        //check user name and password valid
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessageService.showMessage(data.msg, true);
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessageService.showMessage(data.msg, false);
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary \">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Room Hunter</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbars\">\n    <ul class=\"nav navbar-nav nav-left \">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/posts']\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/add']\">List\n          My Room</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav nav-right\">\n      <li class=\"nav-item\">\n        <a *ngIf=\"!authService.isLoggedIn()\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/login']\">Login\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a *ngIf=\"!authService.isLoggedIn()\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a *ngIf=\"authService.isLoggedIn()\" class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a *ngIf=\"authService.isLoggedIn()\" class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_flash_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/flash-message.service */ "./src/app/services/flash-message.service.ts");
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




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, flashMessageService, router) {
        this.authService = authService;
        this.flashMessageService = flashMessageService;
        this.router = router;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        this.flashMessageService.showMessage("You are logged out!", true);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_flash_message_service__WEBPACK_IMPORTED_MODULE_2__["FlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  */\n.comm-basic-mod{\n    width: 100%;\n\theight: 450px;\n\tmargin-top: 20px;\n\toverflow: hidden;\n\tzoom:1;\n}\n.comm-basic-mod i{\n\tfont-style: normal;\n}\n.carousel-box,\n.basic-infos-box{\n\tfloat: left;\n}\n.carousel-box{\n\twidth: 600px;\n\tmargin-right: 50px;\n}\n.carousel-box .item{\n    position: relative;\n    text-align: center;\n    vertical-align: top;\n}\n.carousel-box .switch-box{\n    position: relative;\n    width: 600px;\n}\n.carousel-box img{\n\t\n}\n.carousel-box .clip{\n    width: 600px;\n    height: 450px;\n    overflow: hidden;\n    zoom:1;\n}\n.carousel-box .con{\n    position: relative;\n}\n.carousel-box  .item{\n    width: 600px;\n    height: 450px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    cursor: pointer;\n    display: none;\n    background: #f1f1f1;\n}\n/*basic information*/\n.basic-infos-box{\n\tposition: relative;\n\twidth: 580px;\n\theight: 100%;\n}\n.basic-infos-box .price{\n    height: 68px;\n    padding-top:12px;\n    border-bottom:1px solid #e6e6e6;\n    white-space: nowrap;\n}\n.basic-infos-box .price .side-tit{\n\tpadding:0 3px 0 10px;\n    color: #999;\n    font-size: 14px;\n}\n.basic-infos-box .price .average{\n    font-size: 38px;\n    color: #E54B00;\n}\n.basic-infos-box .price .no-data{\n    color: #999;\n}\n.basic-infos-box .price .unit{\n\tfont-size: 14px;\n}\n.basic-infos-box .price .up{\n\tcolor:#eb5f00;\n}\n.basic-infos-box .price .arrow{\n\tpadding-right: 2px;\n}\n.basic-infos-box .price .down{\n\tcolor:#008000;\n}\n.basic-infos-box .price .level{\n\tcolor:#999;\n}\n.basic-parms-mod{\n   margin-top: 17px;\n   overflow: hidden;\n   zoom:1;\n}\n.basic-parms-mod dt,\n.basic-parms-mod dd{\n\tfloat: left;\n\theight: 38px;\n\tline-height: 38px;\n\tfont-size: 14px;\n}\n.basic-parms-mod dt{\n\twidth: 75px;\n\tcolor: #999;\n}\n.basic-parms-mod .other-dt{\n    width: 80px;\n}\n.basic-parms-mod dd{\n\twidth: 200px;\n\twhite-space: nowrap;\n}\n.basic-parms-mod .other-dd{\n    width: 166px;\n}\n.basic-parms-mod .dd-column{\n   width: 420px;\n}\n.houses-sets-mod{\n    position: absolute;\n    bottom: 0;\n    left:0;\n    height: 70px;\n    line-height: 70px;\n    width: 478px;\n    background: #f6f6f6;\n    padding-left: 52px;\n}\ndl {\n    display: block;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n}"

/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Show the details of selected post | date:'MM/dd/yyyy, h:mm a' -->\n<div class=\"comm-basic-mod\" *ngIf=\"post\">\n  <h1>{{post.title | uppercase}} </h1>\n  <div id=\"j-switch-basic\" class=\"carousel-box\">\n      <div class=\"switch-box\">\n          <div class=\"clip\">\n              <div class=\"con\" style=\"position: relative;\">\n                  <div class=\"item\" style=\"display: block;\">\n                      <img height=\"450\" alt=\"\" src=\"http://localhost:4000{{post.houseImage}}\">\n                  </div>\n\n              </div>\n          </div>\n          <div class=\"nav-mask-layer\"></div>\n          <a class=\"arrow arrow-pre\" href=\"javascript:void(0)\"><i class=\"iconfont\"></i></a>\n          <a class=\"arrow arrow-next\" href=\"javascript:void(0)\"><i class=\"iconfont\"></i></a>\n      </div>\n  </div>\n  <div class=\"basic-infos-box\" id=\"basic-infos-box\">\n      <div class=\"price\">\n          <label class=\"side-tit\">Rent</label><span class=\"average\">${{post.rent}}<em class=\"unit\"></em></span>\n      </div>\n\n      <dl class=\"basic-parms-mod\">\n          <dt>Post by：</dt>\n          <dd>{{post.byUser}} {{post.postDate }}</dd>\n          <dt class=\"other-dt\">RoomType：</dt>\n          <dd class=\"other-dd\">{{post.roomType}}</dd>\n          <dt>Address：</dt>\n          <dd>{{post.suburb}}</dd>\n          <dt class=\"other-dt\">Contact：</dt>\n          <dd class=\"other-dd\"> {{post.contactName}} {{post.phone}}</dd>\n          <dt>Description：</dt>\n      </dl>\n      <p class=\"other-dd\">{{post.description}}</p>\n      <button (click)=\"goBack()\">go back</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, location, postService) {
        this.route = route;
        this.location = location;
        this.postService = postService;
    }
    /** Retrieve post id from clicked url and then get the target post  */
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id"); //get post id from url
        this.postService.getPostById(id).subscribe(function (res) {
            _this.post = res;
            _this.post.houseImage = _this.post.houseImage.replace(/\"/g, "");
        });
    };
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    /** back to previous page */
    PostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-detail",
            template: __webpack_require__(/*! ./post-detail.component.html */ "./src/app/components/post-detail/post-detail.component.html"),
            styles: [__webpack_require__(/*! ./post-detail.component.css */ "./src/app/components/post-detail/post-detail.component.css")]
        })
        /** This class is responsible for  displaying the details of selected post */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  */\n@charset \"utf-8\";\nimg{\n    border:none;\n    display:inline-block;\n}\ninput, select, input, textarea{\n    font-size: 12px;\n    outline: none;\n}\nselect, input {\n    vertical-align: middle;\n}\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner{\n    border:none;\n    padding:0;\n}\ntextarea{\n    resize: none;\n}\nfieldset{\n    border: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\ncaption, th {\n    text-align: left;\n}\naddress, caption, th, cite, code, em{\n    font-style: normal;\n    font-weight: normal;\n}\na:link, a:visited, a:active {\n    color: #0041D9;\n    text-decoration: none;\n    outline: none;\n}\na:hover {\n    color: #f60;\n    text-decoration: underline;\n    outline:none;\n}\n#container {\n    width: 970px;\n    margin:0 auto;\n}\n#header, #content{\n    width: 100%;\n}\n.clearfix:after,\n#content:after {\n    clear: both;\n    content: \".\";\n    display: block;\n    font-size: 0;\n    height: 0;\n    line-height: 0;\n    visibility: hidden;\n}\n.clearfix,\n#content{\n    *zoom:1;\n}\n.clear{\n    clear:both;\n    font-size:0px;\n    line-height:0px;\n    height:0px;\n}\n#footer {\n    margin: 30px auto 0;\n    width: 100%;\n}\n.multi-tips-content .multi-icon-triangle{\n    position: absolute;\n    right: -15px;\n    _right: -16px;\n    top: 20px;\n}\n.multi-form .multi-cancelmulti{\n\tborder:1px solid #d8d8d8;\n\twidth: 76px;\n\t_width:60px;\n\tpadding: 4px 2px;\n\tdisplay: block;\n\ttext-align: center;\n\tcolor: #999;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 11px;\n\tbackground: #fdfdfd;\n}\n.multi-form .multi-cancelmulti:hover{\n    background: #f6f6f6;\n    text-decoration: none;\n}\n.multi-click{\n    border-top: 1px solid #d8d8d8;\n}\n/*css hack*/\n.multi-form a:link,.multi-form a:visited,.multi-more a:link,.multi-more a:visited{\n    color: #666;\n}\n.multi-areas a:hover , .multi-lists-wrap a:hover{\n\tcolor: #f60;\n\ttext-decoration: underline;\n}\n.multi-form .selected:link,.multi-form .selected:visited{\n    color: #fff;\n}\n.multi-form .multi-tomulti{\n\tdisplay: block;\n\theight: 30px;\n\tline-height: 30px;\n\twidth: 65px;\n\tfont-size: 13px;\n\tbackground: #62ab00;\n\tpadding-left: 15px;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 9px;\n}\n.multi-form .multi-tomulti:hover{\n\tbackground: #4a8200;\n\ttext-decoration: none;\n}\n.multi-form .multi-tomulti:link,.multi-form .multi-tomulti:visited{\n\tcolor: #fff;\n}\n.multi-tomulti .multi-icon-add{\n\tmargin: 0 8px 3px 0;\n\t*margin: 0 8px 0 0;\n}\n.multi-choose{\n\tdisplay: inline-block;\n\tfont-size: 13px;\n    *zoom:1;\n    *display: inline;\n}\n.multi-choose input{\n\tborder: 1px solid #a8a8a8;\n\twidth: 47px;\n\theight: 19px;\n\tmargin: 0 3px;\n\tpadding: 1px 3px 0 4px;\n\tcolor: #666;\n}\n.multi-choose em{\n\tcolor: #a8a8a8;\n\tmargin: 0 2px;\n}\n.multi-choose span{\n\tposition: relative;\n\tcolor: #666;\n\tleft: -6px;\n\tmargin-left: -13px;\n\tvertical-align: middle;\n}\n.multi-choose .confirm{\n\tfont-weight: normal;\n\twidth: 45px;\n\theight: 22px;\n\tline-height: 21px;\n\tcolor: #fff;\n\ttext-align: center;\n\tbackground: #62ab00;\n\tmargin-left: 4px;\n\tborder: 0;\n\tfont-family: \"Microsoft YaHei\", \"΢���ź�\", Tahoma, Arial, simhei, Helvetica, sans-serif;\n\tcursor: pointer;\n}\n.multi-choose .confirm:hover{\n\tbackground: #4a8200;\n}\n.choose-hidden{\n\tposition: absolute;\n\tright: -6px;\n\ttop : -5px;\n\tbackground: #fff;\n\tborder: 1px solid #ccc;\n\twidth: 190px;\n\tpadding: 4px 0 5px 5px;\n\tbox-shadow: 1px 2px 1px #eee;\n}\n.choose-show{\n\tposition: absolute;\n\ttop: 0;\n    right: -4px;\n}\n.multi-subareas .multi-allisok{\n    padding-right: 9px;\n}\n.multi-lists .multi-allisok{\n    position: absolute;\n    left: 43px;\n    top: 0;\n    width: 40px;\n}\n.multi-subareas a{\n    font-size: 13px;\n    padding: 1px 5px 2px;\n    margin: 0 5px;\n}\n.multi-lists a{\n    font-size: 13px;\n    width: 100px;\n    display: inline-block;\n}\n.multi-lists a em{\n    padding: 1px 5px 2px;\n}\n.multi-lists .unlimited{\n    position: absolute;\n    left: 48px;\n    top: 0;\n    width: 45px;\n}\n/**\n*/\n.houselist-filter-comp .hlc-pos .versin-switch{\n    position: absolute;\n    color: #fff;\n    width: 72px;\n    height: 24px;\n    border-radius: 12px;\n    line-height: 24px;\n    text-align: center;\n    background-color: #62ab00;\n    top: 7px;\n    right: 20px;\n    z-index: 2;\n    font-size: 12px;\n}\n.houselist-filter-comp .hlc-pos .versin-switch:hover{\n    text-decoration: none;\n    background-color: #599700;\n}\n.houselist-mod{\n    border-top: 1px solid #e6e6e6;\n    font-size: 14px;\n}\n.houselist-mod i{\n    font-style: normal;\n}\n.houselist-mod .list-item{\n    padding: 20px 20px 20px 220px;\n    height: 165px;\n    color: #666;\n    border-bottom: 1px dashed #e6e6e6;\n    position: relative;\n    z-index: 0;\n    cursor: pointer;\n    *zoom: 1;\n}\n.houselist-mod .over-bg {\n    background-color: #f9f9f9;\n}\n.houselist-mod .list-item .item-img{\n    float: left;\n    *display: inline;\n    margin-left: -200px;\n    width: 180px;\n    height: 135px;\n    position: relative;\n    z-index: 2;\n}\n.houselist-mod .list-item img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n.houselist-mod .list-item .icon-wrapper {\n    position: absolute;\n    left: 8px;\n    bottom: 8px;\n}\n.houselist-mod .icon-wrapper .icon-video-new,\n.houselist-mod .icon-wrapper .icon-720 {\n    display: inline-block;\n    height: 24px;\n    width: 24px;\n    vertical-align: middle;\n}\n.houselist-mod .icon-wrapper .icon-video-new {\n    margin-right: 5px;\n    background: url(//pages.anjukestatic.com/usersite/site/img/icon/shipin@1x.png) no-repeat;\n    background: -webkit-image-set( url(//pages.anjukestatic.com/usersite/site/img/icon/shipin@1x.png) 1x, url(//pages.anjukestatic.com/usersite/site/img/icon/shipin@2x.png) 2x );\n}\n.houselist-mod .icon-wrapper .icon-720 {\n    background: url(//pages.anjukestatic.com/usersite/site/img/icon/720@1x.png) no-repeat;\n    background: -webkit-image-set(url(//pages.anjukestatic.com/usersite/site/img/icon/720@1x.png) 1x, url(//pages.anjukestatic.com/usersite/site/img/icon/720@2x.png) 2x );\n}\n.houselist-mod .list-item .icon-duotu{\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 30px;\n    height: 24px;\n    z-index: 2;\n}\n.houselist-mod .list-item .icon-duotu .dt-bg{\n    display: block;\n    width: 24px;\n    height: 24px;\n    background: #666;\n    opacity: .5;\n    filter: alpha(opacity=50);\n}\n.houselist-mod .list-item .icon-duotu i{\n    display: block;\n    position: absolute;\n    font-size: 16px;\n    line-height: 1;\n    color: #fff;\n    left: 4px;\n    top: 5px;\n    z-index: 2;\n}\n.houselist-mod .list-item a,\n.houselist-mod .list-item .zero-reco-title {\n    color: #333;\n    font-size: 16px;\n    font-weight: bold;\n    vertical-align: top;\n    padding-right: 7px;\n}\n.houselist-mod .list-item a{\n    display: inline-block;\n    vertical-align: top;\n}\n.houselist-mod .over-bg .zero-reco-title,\n.houselist-mod .list-item .zero-reco-title:hover{\n    color: #f60;\n    text-decoration: underline;\n}\n.houselist-mod .list-item a.hover{\n    color: #f60;\n    text-decoration: underline;\n}\n.houselist-mod .house-details .house-title {\n    margin-bottom: 6px;\n    height: 34px;\n    line-height: 34px;\n    font-size: 0;\n}\n.houselist-mod .house-details .house-title a{\n    display: inline-block;\n    vertical-align: top;\n    padding-right: 7px;\n    max-width: 461px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.houselist-mod .list-item .house-icon {\n    margin-top: 7px;\n}\n.houselist-mod .list-item .house-icon-anxuan {\n    display: inline-block;\n    width: 36px;\n    line-height: 20px;\n    height: 20px;\n    text-align: center;\n    background-image: linear-gradient(-90deg, #02C26D 0%, #7ED665 100%);\n    font-size: 12px;\n    color: #fff;\n    font-weight: 100;\n}\n.houselist-mod .list-item .house-icon-default,.houselist-mod .list-item .house-icon-high,.houselist-mod .list-item .house-icon-warning {\n    position: relative;\n    padding: 0 4px;\n    height: 20px;\n    line-height: 20px;\n    font-size: 12px;\n    display: inline-block;\n}\n.house-icon-default {\n    color: #02c26d;\n}\n.house-icon-high {\n    color: #eb8a78;\n    margin-left: 5px;\n}\n.house-icon-warning {\n    color: #fa8519;\n    margin-left: 5px;\n}\n.house-icon-default:after {\n    border: 1px solid #02c26d;\n    border-left: none;\n}\n.house-icon-high:after {\n    border: 1px solid #eb8a78;\n}\n.house-icon-warning:after {\n    border: 1px solid #fa8519;\n}\n.border-line:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scale(0.5, 0.5);\n    transform: scale(0.5, 0.5);\n    box-sizing: border-box;\n}\n.houselist-mod .list-item .guarantee_icon {\n    font-size: 20px;\n    font-weight: 400;\n    color: #62ab00;\n    margin-left: 2px;\n    vertical-align: -4px;\n}\n.houselist-mod .list-item .guarantee_icon1{\n    font-size: 12px;\n    font-weight: 400;\n    padding: 2px 3px;\n    color: #62ab00;\n    border-radius: 4px;\n    border: 1px solid #62ab00;\n    margin-left: 2px;\n    vertical-align: 1px;\n}\n.houselist-mod .list-item .yzgp-icon{\n    color: #FA8519;\n    border-color: #FA8519;\n}\n.houselist-mod .house-title .icon-tag {\n    display: inline-block;\n    border-radius: 4px;\n    height: 18px;\n    line-height: 18px;\n    font-size: 12px;\n    margin-left: 2px;\n    padding: 0 2px;\n    vertical-align: 1px;\n}\n.icon-zt {\n    border:1px solid #efada0;\n    color: #e88a78;\n}\n.icon-tag01 {\n    border:1px solid #9cb3cd;\n    color: #7292b8;\n}\n.icon-tag02 {\n    border:1px solid #b6a3c5;\n    color: #977bac;\n}\n.houselist-mod .house-details .details-item {\n    height: 30px;\n    line-height: 30px;\n}\n.houselist-mod .details-item span {\n    margin-right: 10px;\n}\n.houselist-mod .brokername {\n    color: #999;\n}\n.houselist-mod .brokername .iconfont {\n    color: #ccc;\n    font-size: 14px;\n    line-height: 20px;\n    margin: 0px 2px 0 12px;\n    vertical-align: -2px;\n}\n.houselist-mod .details-item .comm-address{\n    display: inline-block;\n    max-width: 342px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-right: 0;\n    _width: expression((document.documentElement.clientWidth||document.body.clientWidth)>342?\"342\":\"auto\");\n}\n.houselist-mod .details-item .comm-address {\n    max-width: 342px;\n}\n.houselist-mod .details-item .comm-address a {\n    font-weight: normal;\n    font-size: 14px;\n    color: #797979\n}\n.houselist-mod .details-item .comm-address a:hover {\n    color: #f60\n}\n.houselist-mod .details-item .spe-lines {\n    display: inline-block;\n    margin-right: 10px;\n    width: 1px;\n    background: #ccc;\n    height: 10px;\n    /*line-height: 0;*/\n    font-size: 0;\n    text-indent: -9999px;\n    overflow: hidden;\n}\n.houselist-mod em.em_kw {\n    margin-right: 0;\n    color: #f60;\n    height: inherit;\n}\n.houselist-mod .house-title em.em_kw {\n    font-weight: 700;\n}\n.houselist-mod .details-item .bus-info {\n    display: inline-block;\n    margin-right: 0;\n    margin-left: 15px;\n    width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #f60;\n    font-size: 13px;\n}\n.houselist-mod .details-item .bus-info i{\n    font-size: 9px;\n    vertical-align: -1px;\n    color: #f60;\n    margin-right: 2px;\n}\n.houselist-mod .details-item .info-address {\n    display: inline-block;\n    width: 500px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-right: 0;\n}\n.houselist-mod .details-bottom {\n    width: 530px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.houselist-mod .details-bottom .kfsTag,\n.houselist-mod .tags-bottom .kfsTag{\n    font-size: 20px;\n    color: #62ab00;\n}\n.houselist-mod .tags-bottom .kfsTag{\n    vertical-align: 0;\n    margin: 0 5px 0 8px;\n}\n.houselist-mod .details-bottom .kfsTag {\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.houselist-mod .details-bottom .chat-reply {\n    font-size: 16px;\n    margin-right: 10px;\n    color: #f60;\n}\n.houselist-mod .tags-bottom {\n    width: 550px;\n    margin-left: -8px;\n    font-size: 0;\n    white-space:normal;\n    word-break:break-all;\n    word-wrap:break-word;\n    overflow: hidden;\n}\n.tags-bottom .item-tags {\n    display: inline-block;\n    font-size: 12px;\n    height: 22px;\n    line-height: 22px;\n    margin: 8px 0 5px 8px;\n    padding: 0 10px;\n    border-radius: 100px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.tags-bottom .iconfont {\n    margin-right: 5px;\n    font-size: 14px;\n    vertical-align: -2px;\n}\n/*  house price  */\n.houselist-mod .pro-price {\n    position: absolute;\n    top: 60px;\n    right: 20px;\n    width: 112px;\n    text-align: right;\n    white-space:nowrap;\n}\n.houselist-mod .pro-price .price-det {\n    display: block;\n    width: 112px;\n    height: 30px;\n    line-height: 30px;\n    color: #e54b00;\n}\n.houselist-mod .pro-price strong {\n    font-size: 22px;\n    font-weight: bold;\n    font-family: Tahoma;\n    margin-right: 3px;\n}\n.houselist-mod .pro-price .unit-price {\n    font-size: 12px;\n    color: #999;\n}\n.houselist-mod .visited-bg .house-title a,\n.houselist-mod .house-title a.visited{\n    color: #797979 !important;\n    text-decoration: none !important;\n\n}\n.houselist-mod-new .house-details{\n    height: 135px;\n    display: table-cell;\n    vertical-align: middle;\n}\n/* list tab1 */\n.current-tab {\n    font-weight: bold;\n    color: #454545;\n}\n.parent-1 {\n    border: 1px solid #D8D8D8;\n    padding: 0px 20px;\n}\n.tab-1 a:hover {\n    cursor: default;\n}\n.tab-2 a:link, .tab-2 a:visited {\n    color: #454545;\n}\n.tab-2 a:hover, .tab-2 a:active{\n    color: #454545;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.tab-3 a:hover, .tab-3 a:active {\n    cursor: pointer;\n}\n.tab-1 {\n    display: block;\n    border-bottom: 1px dashed #e6e6e6;\n    padding-top: 10px;\n}\n.no-btm-border {\n    border-bottom: 0;\n}\n.parent-2{\n    display: inline-block;\n    vertical-align: top;\n    width: 1022px;\n}\n.parent-3 {\n    display: none;\n}\n.parent-qa{\n    padding: 12px 0 2px 20px;\n}\n.parent-qa .tab-2 {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 15px;\n    margin-bottom: 12px;\n    width: 370px;\n    color: #999;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\nul[class=\"parent-3 btn-show\"] {\n    display: block;\n}\n.parent-3.btn-show{\n    display: block;\n}\n.tab1-a {\n    font-weight: bold;\n    display: inline-block;\n    width: 115px;\n}\na.rec_common_title:hover{\n    color: #f60;\n    text-decoration: underline;\n}\n.w1180 {\n    margin: 18px auto 10px auto;\n    width: 1180px;\n    font-size: 13px;\n}\n#content {\n    font-family: \"Microsoft YaHei\", \"΢���ź�\", Tahoma, Arial, simhei, Helvetica, sans-serif;\n    font-size: 13px;\n    width: 1180px;\n    position: relative;/* for nav */\n}\n.glbNavigation1180 {\n    width: 1180px;\n}\n.sale-filter-icon {\n    background: url(\"//pages.anjukestatic.com/usersite/site/img/salefilter/sale-filter-icon.gif\") no-repeat;\n}\n.div-border {\n    border:1px solid #D8D8D8;\n    border-radius: 5px;\n}\n/*public end*/\n.items-list {\n    padding:5px 10px;\n    border-radius: 0;\n    position: relative;\n    z-index: 1;\n}\n/* left begin*/\n.sale-left{\n    float: left;\n    width: 900px;\n    position: relative;\n    z-index: 0;\n}\n.sortby-top-v2 {\n    margin-top: 19px;\n}\n.sale-left .real-true {\n    padding: 0 9px;\n    background-color: #62ab00;\n    color: #fff;\n    border-radius: 3px;\n    font-size: 13px;\n    position: absolute;\n    top: 11px;\n    left: 30px;\n    line-height: 17px;\n}\n.sale-left .first {\n    width: 94px;\n}\n.sale-left .last {\n    position: relative;\n    width: 194px;\n}\n.sale-left .last a {\n    position: relative;\n    z-index: 2;\n    padding-left: 35px !important;\n}\n.sale-left .last a:hover .real-true {\n    text-decoration: none !important;\n}\n.solid-hr {\n    display: block;\n    height: 0px;\n    width: 870px;\n    border-bottom: 1px solid #D8D8D8;\n}\n.r-mag-top {\n    margin-top: 20px;\n}\n.r-padding {\n    padding: 20px 16.5px;\n}\n.ifx-wrap {\n    /*display: none;*/\n}\n.multi-page{\n    margin: 30px 20px 40px 0px;\n    text-align: right !important;\n}\n.tab-wrap {\n    margin-top: 24px;\n    font-size: 0;\n    border-bottom: 2px solid #62ab00;\n    position: relative;\n}\n.tab-wrap .list-tab {\n    display: inline-block;\n    padding: 0 30px;\n    color: #666;\n    font-size: 16px;\n    line-height: 38px;\n    text-decoration: none;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-bottom: none;\n    margin-right: -1px;\n}\n.tab-wrap .list-tab:hover {\n    background: #e6e6e6;\n}\n.tab-wrap .list-tab .iconfont {\n    color: #62ab00;\n    font-size: 20px;\n    margin-right: 6px;\n    vertical-align: top;\n    *vertical-align: middle;\n}\n.tab-wrap .slted .iconfont {\n    color: #fff;\n}\n.tab-wrap .slted,\n.tab-wrap .slted:hover {\n    background: #62ab00;\n    color: #fff;\n    border: 1px solid #62ab00;\n    border-bottom: none;\n}\n.tab-wrap .tab-entrust-link{\n    position: absolute;\n    right: 0;\n    top: -8px;\n    font-size: 16px;\n    font-family:\"黑体\";\n    color: #f60;\n    height: 48px;\n    line-height: 48px;\n}\n.tab-wrap .tab-entrust-link i{\n    display: inline-block;\n    width: 73px;\n    height: 48px;\n    margin-right: 6px;\n    vertical-align: -12px;\n}\n.tab-wrap .tab-entrust-link:hover{\n    color: #e35000;\n    text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-hearder text-primary\">Rooms for rent</h2>\n\n<div>\n  <app-filter></app-filter>\n</div>\n<div id=\"content\">\n<div class=\"sale-left\">\n   <div class=\"tab-wrap\">\n     <h1 *ngIf=\"!bValid()\"  class=\"houselist-mod houselist-mod-new\">Search Result Empty!</h1>\n     <ul id=\"houselist-mod-new\" class=\"houselist-mod houselist-mod-new\" *ngFor=\"let house of posts\">\n \t\t<li class=\"list-item\" data-from=\"\">\n        \t<div class=\"item-img\">\n        \t\n        \t <img src=\"http://127.0.0.1:4000{{house.houseImage}}\" width=\"180\" height=\"135\">\n        \t\n            </div>\n            <div class=\"house-details\">\n           \t <div class=\"house-title\">\n             \t<a data-from=\"\" data-company=\"\" title={{house.title}} href=\"/posts/{{house._id}}\" target=\"_blank\" class=\"houseListTitle\">\n                {{house.title}} </a>\n      \t\t </div>\n\t\t\t<div class=\"details-item\">\n        \t\t<span class=\"comm-address\" title={{house.description}}>{{house.description}} </span>\n\t\t\t</div>\n            <div class=\"details-item\">\n                <span>{{house.city}}</span><span class=\"brokername\"><i class=\"iconfont\"></i>{{house.contactName}}</span>            \n            </div>\n        \t</div>\n        <div class=\"pro-price\">\n            <span class=\"price-det\"><strong>{{house.rent}}</strong>dollar</span><span class=\"unit-price\">{{house.postDate}}</span>        \n        </div>\n      </li>\n    </ul>\n    <div id=\"IFX_p937\" class=\"ifx-wrap \" style=\"\"></div>\n    <div style=\"display: none\"></div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, messageService) {
        var _this = this;
        this.postService = postService;
        this.messageService = messageService;
        //subscribe to message service, seasrch result in filter component will post to this component
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            var msg = message.text;
            _this.posts = msg.list;
            _this.trimPost();
        });
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.fetchPosts();
    };
    //destroy subscription
    PostsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    //check post empty, if post empty, page will show tip
    PostsComponent.prototype.bValid = function () {
        if (this.posts == null || this.posts.length == 0)
            return false;
        else
            return true;
    };
    // get all the posts from server by uisng post service
    PostsComponent.prototype.fetchPosts = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (data) {
            _this.posts = data;
            _this.trimPost();
        });
    };
    //trim houseImage url in posts
    PostsComponent.prototype.trimPost = function () {
        for (var i = 0; i < this.posts.length; ++i) {
            this.posts[i].houseImage = this.posts[i].houseImage.replace(/\"/g, "");
        }
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-posts",
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
        /** This class is responsible for retrieve and list all the posts  */
        ,
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-hearder text-primary\">Profile</h2>\n<div *ngIf=\"user\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">Username: {{user.username}}</li>\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n</div>\n\n<div class=\"box-body\">\n<h2 class=\"page-hearder text-primary\">Published Home</h2>\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Description</th>\n          <th>Room Type</th>\n          <th>Price(Per Week)</th>\n          <th>address</th>\n          <th>contactName</th>\n          <th>phone</th>\n          <th>createTime</th>\n          <th>Operation</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of homeList\">\n          <td>{{item.title}}</td>\n          <td>{{item.description}}</td>\n          <td>{{item.roomType}}</td>\n          <td>${{item.rent}}</td>\n\t\t  <td>{{item.city}}</td>\n\t\t  <td>{{item.contactName}}</td>\n\t\t  <td>{{item.phone}}</td>\n          <td>{{item.postDate}}</td>\n          <td>\n            <button (click)=\"showDetail(item)\" class=\"btn btn-default\">Detail</button>\n            <button (click)=\"delHouse(item)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n \n  </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
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




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, postService, router) {
        this.authService = authService;
        this.postService = postService;
        this.router = router;
        this.pages = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.loadList();
        }, function (err) {
            return false;
        });
    };
    /*
     * load published home list
     */
    ProfileComponent.prototype.loadList = function () {
        var _this = this;
        var user = this.user;
        var username = user.username;
        this.postService.getPostByUser(username).subscribe(function (data) {
            if (data != undefined) {
                _this.homeList = data;
            }
        });
    };
    /*
     * delete house
     */
    ProfileComponent.prototype.delHouse = function (item) {
        var _this = this;
        this.postService.deletePost(item._id).subscribe(function (data) {
            if (data != undefined) {
                _this.loadList();
            }
        });
    };
    /*
     * show home detail
     */
    ProfileComponent.prototype.showDetail = function (item) {
        this.router.navigateByUrl('/posts/' + item._id);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-hearder text-primary\">Register</h2>\n\n<form [formGroup]=\"registerForm\" (submit)=\"onRegisterSubmit()\">\n    <div *ngIf=\"failed\">\n        <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"username\">Username</label>\n            <input class=\"form-control\" type=\"text\" formControlName=\"username\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"  placeholder=\"Enter Username\">\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n      \t\t  <div *ngIf=\"f.username.errors.required\">Username is required</div>\n   \t\t\t</div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"email\">Email</label>\n            <input class=\"form-control\" type=\"email\" formControlName=\"email\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"  aria-describedby=\"emailHelp\"\n                placeholder=\"Enter Email\">\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n      \t\t  <div *ngIf=\"f.email.errors.required\">Email is required</div>\n      \t\t  <div *ngIf=\"f.email.errors.pattern\">Email format invalid</div>\n   \t\t\t</div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"password\">Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"password\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" \n                placeholder=\" Enter Password\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n      \t\t  <div *ngIf=\"f.password.errors.required\">Password is required</div>\n   \t\t\t</div>\n        </div>\n        <input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\">\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flashMessageService, formBuilder, router) {
        this.authService = authService;
        this.flashMessageService = flashMessageService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.failed = true;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * Register a user and add it to database by using auth service.
     */
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid)
            return;
        // create a user object by using input data.
        var user = {
            email: this.registerForm.controls.email.value,
            username: this.registerForm.controls.username.value,
            password: this.registerForm.controls.password.value
        };
        //register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessageService.showMessage(data.msg, true);
                _this.failed = false;
                setTimeout(function () { _this.router.navigate(['/login']); }, 3000);
            }
            else {
                _this.flashMessageService.showMessage(data.msg, false);
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "password", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     *  If user logged in, return true; If user not logged in, return false.
     */
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
        /**
         * This class is used to prevent unauthorized access to the path url.
         */
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:4000';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * register user in the backend and send back response message
     */
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.url + "/users/register", user, this.httpOptions);
    };
    /**
     * Authenticate user: if success, return user info and tokens otherwise return false
     */
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.url + "/users/authenticate", user, this.httpOptions);
    };
    /*
   * check user auth
   */
    AuthService.prototype.checkAuth = function () {
        this.loadUser();
        if (this.user != null) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Get user profile
     */
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: this.authToken,
            'Content-Type': 'application/json'
        });
        return this.http.get(this.url + "/users/profile", { headers: headers });
    };
    /**
     * Store token and user info in the local storage
     */
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    /**
     * Load token from local storage into class member authToken.
     */
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    /**
     * Load user from local storage
     */
    AuthService.prototype.loadUser = function () {
        this.user = localStorage.getItem('user');
        return this.user;
    };
    /**
     * Logout, clear all stored data
     */
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    /**
     * Check if the token exists
     */
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.id_token == undefined) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/flash-message.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flash-message.service.ts ***!
  \***************************************************/
/*! exports provided: FlashMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashMessageService", function() { return FlashMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlashMessageService = /** @class */ (function () {
    function FlashMessageService(ngFlashMessageService) {
        this.ngFlashMessageService = ngFlashMessageService;
    }
    /**
     * Flush message shows error or sucess message
     */
    FlashMessageService.prototype.showMessage = function (msg, isSuccess) {
        if (isSuccess) {
            this.msgType = "success";
        }
        else {
            this.msgType = "danger";
        }
        this.ngFlashMessageService.showFlashMessage({
            messages: [msg],
            dismissible: true,
            timeout: 5000,
            type: this.msgType.toString()
        });
    };
    FlashMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__["NgFlashMessageService"]])
    ], FlashMessageService);
    return FlashMessageService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    //send message to subscriber
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    //get message
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
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


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        //base url of the server
        //url = "http://213.159.202.247:4000";
        this.url = 'http://localhost:4000';
    }
    //get all posts
    PostService.prototype.getPosts = function () {
        return this.http.get(this.url + "/posts");
    };
    //get post by id
    PostService.prototype.getPostById = function (id) {
        return this.http.get(this.url + "/posts/" + id);
    };
    //create post
    PostService.prototype.createPost = function (title, street, suburb, city, state, postCode, roomType, contactName, phone, rent, byUser, postDate, description, houseImage) {
        var post = {
            title: title,
            street: street,
            suburb: suburb,
            city: city,
            state: state,
            postCode: postCode,
            roomType: roomType,
            contactName: contactName,
            phone: phone,
            rent: rent,
            byUser: byUser,
            postDate: postDate,
            description: description,
            houseImage: houseImage
        };
        // adding a new post by sending a post request
        return this.http.post(this.url + "/posts/add", post);
    };
    //delete post by id
    PostService.prototype.deletePost = function (id) {
        return this.http.get(this.url + "/delete/" + id);
    };
    //searcg post by user name
    PostService.prototype.getPostByUser = function (username) {
        return this.http.get(this.url + "/posts/user/" + username);
    };
    /*
     * search post by area
     */
    PostService.prototype.searchPostByArea = function (city) {
        if (city == null || city == undefined || city.length == 0)
            city = 'all';
        return this.http.get(this.url + "/posts/search/city/" + city);
    };
    /*
    * search post by price
    */
    PostService.prototype.searchPostByPrice = function (price) {
        console.log(price);
        var price_begin = parseFloat(price[0]), price_end = parseFloat(price[price.length - 1]);
        var price_low = 0, price_high = 10000;
        if (price_begin == 1) {
            price_low = 99;
        }
        else if (price_begin == 2) {
            price_low = 200;
        }
        else if (price_begin == 3) {
            price_low = 300;
        }
        else if (price_begin == 4) {
            price_low = 400;
        }
        if (price_end == 0) {
            price_high = 99;
        }
        else if (price_end == 1) {
            price_high = 200;
        }
        else if (price_end == 2) {
            price_high = 300;
        }
        else if (price_end == 3) {
            price_high = 400;
        }
        else if (price_end == 4) {
            price_high = 10000;
        }
        console.log(price_low);
        console.log(price_high);
        return this.http.get(this.url + "/posts/search/price/" + price_low + "/" + price_high);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /** Service for getting posts from the server */
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
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


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.houseImage = '';
        //url = "http://213.159.202.247:4000";
        this.url = 'http://localhost:4000';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})
        };
    }
    //upload file
    UploadService.prototype.uploadFile = function (formData) {
        return this.http.post(this.url + "/posts/upload", formData, this.httpOptions);
    };
    UploadService.prototype.addHouseImage = function (images) {
        this.houseImage = images;
    };
    UploadService.prototype.getHouseImage = function () {
        return this.houseImage;
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.password == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/shared/google_places/google-places.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/google_places/google-places.directive.ts ***!
  \*****************************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
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

var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            console.log(place.formatted_address);
            if (item['types'].indexOf('locality') > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf('administrative_area_level_1') > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf('street_number') > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf('route') > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf('country') > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf('postal_code') > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _google_places_google_places_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google_places/google-places.directive */ "./src/app/shared/google_places/google-places.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_google_places_google_places_directive__WEBPACK_IMPORTED_MODULE_5__["GooglePlacesDirective"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            exports: [_google_places_google_places_directive__WEBPACK_IMPORTED_MODULE_5__["GooglePlacesDirective"]]
        })
    ], SharedModule);
    return SharedModule;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/LingChen/Desktop/AIP-Ass3-RoomHunter/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map