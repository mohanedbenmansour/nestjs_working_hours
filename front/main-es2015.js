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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-posts/view-posts.component */ "./src/app/components/view-posts/view-posts.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _auth_user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/user.guard */ "./src/app/auth/user.guard.ts");








const routes = [
    { path: 'home', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    {
        path: 'addpost',
        component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_3__["AddPostComponent"],
        canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
    },
    {
        path: 'viewposts',
        component: _components_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_2__["ViewPostsComponent"],
        canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'working-hours';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view-posts/view-posts.component */ "./src/app/components/view-posts/view-posts.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slide-toggle.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _change_time_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-time.pipe */ "./src/app/change-time.pipe.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _auth_user_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/user.guard */ "./src/app/auth/user.guard.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _auth_user_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"],
        _components_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_5__["ViewPostsComponent"],
        _change_time_pipe__WEBPACK_IMPORTED_MODULE_12__["ChangeTimePipe"],
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"],
                    _components_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_5__["ViewPostsComponent"],
                    _change_time_pipe__WEBPACK_IMPORTED_MODULE_12__["ChangeTimePipe"],
                    _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                    _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ng5_slider__WEBPACK_IMPORTED_MODULE_6__["Ng5SliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                ],
                providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"], _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _auth_user_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuardService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/user.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/change-time.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/change-time.pipe.ts ***!
  \*************************************/
/*! exports provided: ChangeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeTimePipe", function() { return ChangeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChangeTimePipe {
    transform(value) {
        let newValue = Number(value);
        if (newValue == 12)
            return newValue.toString();
        newValue -= 12;
        return newValue.toString();
    }
}
ChangeTimePipe.ɵfac = function ChangeTimePipe_Factory(t) { return new (t || ChangeTimePipe)(); };
ChangeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "changeTime", type: ChangeTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'changeTime',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/__ivy_ngcc__/esm2015/ng5-slider.js");













function AddPostComponent_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostComponent_div_18_div_4_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r4.selectedOption[i_r1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "morning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "afternoon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "double shift");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedOption[i_r1]);
} }
function AddPostComponent_div_18_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng5-slider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddPostComponent_div_18_div_5_div_1_Template_ng5_slider_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r10.value[i_r1] = $event); })("highValueChange", function AddPostComponent_div_18_div_5_div_1_Template_ng5_slider_highValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r13.highValue[i_r1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.value[i_r1])("highValue", ctx_r8.highValue[i_r1])("options", ctx_r8.options);
} }
function AddPostComponent_div_18_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng5-slider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddPostComponent_div_18_div_5_div_2_Template_ng5_slider_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r16.value2[i_r1] = $event); })("highValueChange", function AddPostComponent_div_18_div_5_div_2_Template_ng5_slider_highValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r19.highValue2[i_r1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.value2[i_r1])("highValue", ctx_r9.highValue2[i_r1])("options", ctx_r9.options2);
} }
function AddPostComponent_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPostComponent_div_18_div_5_div_1_Template, 2, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPostComponent_div_18_div_5_div_2_Template, 2, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedOption[i_r1] == "morning" || ctx_r3.selectedOption[i_r1] == "doubleshift");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedOption[i_r1] == "afternoon" || ctx_r3.selectedOption[i_r1] == "doubleshift");
} }
function AddPostComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostComponent_div_18_Template_mat_slide_toggle_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r1 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r23.day[i_r1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPostComponent_div_18_div_4_Template, 8, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddPostComponent_div_18_div_5_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.day[i_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dayName[i_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.day[i_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedOption[i_r1] && ctx_r0.day[i_r1]);
} }
class AddPostComponent {
    constructor(postService, router, userService) {
        this.postService = postService;
        this.router = router;
        this.userService = userService;
        this.working_hours = [];
        this.boucle = [0, 1, 2, 3, 4, 5, 6];
        this.dayName = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
        ];
        this.selectedOption = ['', '', '', '', '', '', ''];
        this.day = [true, false, false, false, false, false, false];
        this.value = [7, 7, 7, 7, 7, 7, 7];
        this.highValue = [10, 10, 10, 10, 10, 10, 10];
        this.options = {
            floor: 6,
            ceil: 12,
            step: 0.5,
        };
        this.value2 = [14, 14, 14, 14, 14, 14, 14];
        this.highValue2 = [16, 16, 16, 16, 16, 16, 16];
        this.options2 = {
            floor: 12,
            ceil: 19,
            step: 0.5,
        };
    }
    ngOnInit() {
        console.log(this.value[0]);
    }
    onClick() {
        this.addWokringHours();
        console.log(this.working_hours);
        this.postService.createPost(this.working_hours).subscribe((data) => {
            this.working_hours = [];
            alert('Post added successfully');
        }, (err) => {
            console.log(err);
        });
    }
    addWokringHours() {
        for (let i = 0; i < 7; i++)
            if (this.day[i] == true) {
                if (this.selectedOption[i] == 'morning') {
                    this.newPost = {
                        day: this.getDay(i),
                        start: this.value[i].toString(),
                        end: this.highValue[i].toString(),
                        start2: null,
                        end2: null,
                    };
                    this.working_hours.push(this.newPost);
                }
                else if (this.selectedOption[i] == 'afternoon') {
                    this.newPost = {
                        day: this.getDay(i),
                        start: null,
                        end: null,
                        start2: this.value2[i].toString(),
                        end2: this.highValue2[i].toString(),
                    };
                    this.working_hours.push(this.newPost);
                }
                else if (this.selectedOption[i] == 'doubleshift') {
                    this.newPost = {
                        day: this.getDay(i),
                        start: this.value[i].toString(),
                        end: this.highValue[i].toString(),
                        start2: this.value2[i].toString(),
                        end2: this.highValue2[i].toString(),
                    };
                    this.working_hours.push(this.newPost);
                }
            }
    }
    getDay(i) {
        switch (i) {
            case 0: {
                return 'monday';
            }
            case 1: {
                return 'tuesday';
            }
            case 2: {
                return 'wednesday';
            }
            case 3: {
                return 'thursday';
            }
            case 4: {
                return 'friday';
            }
            case 5: {
                return 'saturday';
            }
            case 6: {
                return 'sunday';
            }
        }
    }
    logout() {
        this.userService.deleteToken();
        this.router.navigateByUrl('/home');
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 22, vars: 1, consts: [[1, "container_row"], [1, "layer1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#e7008a", "fill-opacity", "1", "d", "M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,160C672,160,768,128,864,117.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"], [1, "layer2"], ["routerLink", "/viewposts"], [3, "click"], [1, "text-center", "m-5"], [1, "container", "d-flex", "justify-content-center"], ["class", "row", 4, "ngFor", "ngForOf"], ["mat-button", "", "id", "submit", 3, "click"], [1, "row"], [1, "col-3"], [3, "ngModel", "ngModelChange"], ["class", "col-3", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["placeholder", "select option", 3, "ngModel", "ngModelChange"], ["value", "morning"], ["value", "afternoon"], ["value", "doubleshift"], [1, "col-6"], ["class", "custom-slider", 4, "ngIf"], [1, "custom-slider"], [3, "value", "highValue", "options", "valueChange", "highValueChange"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "view Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Working hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPostComponent_div_18_Template, 6, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_button_click_20_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boucle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], ng5_slider__WEBPACK_IMPORTED_MODULE_11__["ɵa"]], styles: [".custom-slider .ng5-slider .ng5-slider-bar {\n  background: #ffe4d1;\n  height: 2px;\n}\n  .custom-slider .ng5-slider .ng5-slider-selection {\n  background: #e7008a;\n}\n  .custom-slider .ng5-slider .ng5-slider-pointer {\n  width: 16px;\n  height: 16px;\n  background-color: #333;\n}\n  .custom-slider .ng5-slider .ng5-slider-pointer:after {\n  display: none;\n}\n  .custom-slider .ng5-slider .ng5-slider-bubble {\n  bottom: 14px;\n}\n  .custom-slider .ng5-slider .ng5-slider-limit {\n  font-weight: bold;\n  color: #e7008a;\n}\n  .custom-slider .ng5-slider .ng5-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px;\n}\n  .custom-slider .ng5-slider .ng5-slider-tick.ng5-slider-selected {\n  background: #e7008a;\n}\nmat-card[_ngcontent-%COMP%] {\n  width: 80%;\n}\n#submit[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e7008a;\n}\n#viewPosts[_ngcontent-%COMP%] {\n  background: #e7008a;\n}\nh1[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 5%;\n  left: 25%;\n  z-index: 2;\n  font-size: 30px;\n}\n.row[_ngcontent-%COMP%] {\n  height: 140px;\n  border: 1px solid #e7008a;\n  margin: 3px;\n  padding: 10px;\n}\n.container_row[_ngcontent-%COMP%] {\n  display: grid;\n}\n.layer1[_ngcontent-%COMP%], .layer2[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n.layer1[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.layer2[_ngcontent-%COMP%] {\n  z-index: 2;\n  text-align: center;\n  margin-top: 60px;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%] {\n  z-index: 0;\n  padding: 10px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: right;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0 30px;\n  z-index: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcG9zdC9DOlxcVXNlcnNcXG1vaGFuXFxEZXNrdG9wXFxkb3VibGVcXHdvcmtpbmctaG91cnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZC1wb3N0XFxhZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcG9zdC9hZGQtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0FDRko7QURLRTtFQUNFLGFBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDTko7QURTRTtFQUNFLG1CQUFBO0FDUEo7QURVQTtFQUNFLFVBQUE7QUNQRjtBRFNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDTkY7QURRQTtFQUNFLG1CQUFBO0FDTEY7QURPQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNKRjtBRE1BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNIRjtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7O0VBRUUsY0FBQTtFQUNBLFdBQUE7QUNKRjtBRE9BO0VBQ0UsVUFBQTtBQ0pGO0FETUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hGO0FES0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNGRjtBRElBO0VBQ0UsVUFBQTtFQUVBLGFBQUE7QUNGRjtBRElBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDREY7QURHQTtFQUNFLFdBQUE7QUNBRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcG9zdC9hZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmU0ZDE7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItc2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNzAwOGE7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1idWJibGUge1xyXG4gICAgYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItbGltaXQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2U3MDA4YTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2sge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZTRkMTtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2submc1LXNsaWRlci1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTcwMDhhO1xyXG4gIH1cclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4jc3VibWl0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZTcwMDhhO1xyXG59XHJcbiN2aWV3UG9zdHMge1xyXG4gIGJhY2tncm91bmQ6ICNlNzAwOGE7XHJcbn1cclxuaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiAyNSU7XHJcbiAgei1pbmRleDogMjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTcwMDhhO1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuc3ZnIHtcclxufVxyXG4uY29udGFpbmVyX3JvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmxheWVyMSxcclxuLmxheWVyMiB7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi5sYXllcjEge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmxheWVyMiB7XHJcbiAgei1pbmRleDogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbm5hdiB7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5uYXYgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxubmF2IHVsIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5uYXYgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCI6Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZTRkMTtcbiAgaGVpZ2h0OiAycHg7XG59XG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2U3MDA4YTtcbn1cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1idWJibGUge1xuICBib3R0b206IDE0cHg7XG59XG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItbGltaXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNlNzAwOGE7XG59XG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItdGljayB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2ZmZTRkMTtcbiAgdG9wOiAtMXB4O1xufVxuOjpuZy1kZWVwIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2submc1LXNsaWRlci1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNlNzAwOGE7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuI3N1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZTcwMDhhO1xufVxuXG4jdmlld1Bvc3RzIHtcbiAgYmFja2dyb3VuZDogI2U3MDA4YTtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbGVmdDogMjUlO1xuICB6LWluZGV4OiAyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5yb3cge1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTcwMDhhO1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRhaW5lcl9yb3cge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubGF5ZXIxLFxuLmxheWVyMiB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbn1cblxuLmxheWVyMSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sYXllcjIge1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubmF2IHtcbiAgei1pbmRleDogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxubmF2IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbm5hdiB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAzMHB4O1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.scss'],
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");





class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 13, vars: 0, consts: [[1, "container_row"], [1, "layer1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#e7008a", "fill-opacity", "1", "d", "M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,90.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"], [1, "layer2", "text-light"], [1, "text-center", "container"], ["mat-align-tabs", "center"], ["label", "signIn"], ["label", "signUp"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "working hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]], styles: ["svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.container_row[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.layer1[_ngcontent-%COMP%], .layer2[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.layer1[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.layer2[_ngcontent-%COMP%] {\n  z-index: 2;\n  text-align: center;\n  margin-top: 60px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid #e7008a;\n  border-radius: 10px;\n  width: 50%;\n  height: 500px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvQzpcXFVzZXJzXFxtb2hhblxcRGVza3RvcFxcZG91YmxlXFx3b3JraW5nLWhvdXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uY29udGFpbmVyX3JvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmxheWVyMSxcclxuLmxheWVyMiB7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbn1cclxuXHJcbi5sYXllcjEge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmxheWVyMiB7XHJcbiAgei1pbmRleDogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNzAwOGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iLCJzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY29udGFpbmVyX3JvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5sYXllcjEsXG4ubGF5ZXIyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xufVxuXG4ubGF5ZXIxIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxheWVyMiB7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTcwMDhhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SignInComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check your input!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        // if (this.userService.isLoggedIn()) this.router.navigate(['/addpost']);
    }
    onSubmit(form) {
        this.submitted = true;
        this.userService.login(form.value).subscribe((res) => {
            this.userService.setToken(res['token']);
            alert('welcome to your profile');
            this.goToDashboard();
        }, (err) => {
            this.serverErrorMessages = true;
            console.log(err);
        });
    }
    goToDashboard() {
        this.router.navigateByUrl('/addpost');
    }
    logout() { }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 13, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["placeholder", "Email", "type", "email", "matInput", "", "formControlName", "email"], ["placeholder", "Password", "type", "password", "matInput", "", "formControlName", "password"], ["mat-button", "", "color", "accent", "type", "submit"], [4, "ngIf"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.profileForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignInComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignInComponent_mat_error_12_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profileForm.valid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMessages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-top: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL0M6XFxVc2Vyc1xcbW9oYW5cXERlc2t0b3BcXGRvdWJsZVxcd29ya2luZy1ob3Vycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss'],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");










function SignUpComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "server error try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() { }
    onSubmit(form) {
        this.submitted = true;
        this.userService.createUser(form.value).subscribe((data) => {
            alert('you have signed up successfully');
            form.reset();
        }, (err) => {
            console.log(form.value);
            this.serverErrorMessages = true;
        });
    }
    get email() {
        return this.profileForm.get('email');
    }
    get name() {
        return this.profileForm.get('name');
    }
    get password() {
        return this.profileForm.get('password');
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 19, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["placeholder", "Full Name", "type", "text", "matInput", "", "formControlName", "name"], [4, "ngIf"], ["placeholder", "Email", "type", "email", "matInput", "", "formControlName", "email"], ["placeholder", "Password", "type", "password", "matInput", "", "formControlName", "password"], ["mat-button", "", "color", "accent", "type", "submit"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_0_listener() { return ctx.profileForm.valid && ctx.onSubmit(ctx.profileForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignUpComponent_mat_error_5_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignUpComponent_mat_error_10_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignUpComponent_mat_error_15_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignUpComponent_mat_error_18_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && ctx.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMessages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-top: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL0M6XFxVc2Vyc1xcbW9oYW5cXERlc2t0b3BcXGRvdWJsZVxcd29ya2luZy1ob3Vycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss'],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/view-posts/view-posts.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/view-posts/view-posts.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostsComponent", function() { return ViewPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _change_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../change-time.pipe */ "./src/app/change-time.pipe.ts");






function ViewPostsComponent_div_1_mat_card_content_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pp_r3.day, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", pp_r3.start, " am ---->", pp_r3.end, " am ");
} }
function ViewPostsComponent_div_1_mat_card_content_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "changeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pp_r3.day, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, pp_r3.start2), " pm ---->", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, pp_r3.end2), " pm ");
} }
function ViewPostsComponent_div_1_mat_card_content_4_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "changeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pp_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pp_r3.day, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", pp_r3.start, " am -->", pp_r3.end, " am ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, pp_r3.start2), " pm -->", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, pp_r3.end2), " pm ");
} }
function ViewPostsComponent_div_1_mat_card_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewPostsComponent_div_1_mat_card_content_4_p_1_Template, 4, 3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewPostsComponent_div_1_mat_card_content_4_p_2_Template, 6, 7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewPostsComponent_div_1_mat_card_content_4_p_3_Template, 9, 9, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pp_r3.start && !pp_r3.start2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pp_r3.start2 && !pp_r3.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pp_r3.start2 && pp_r3.start);
} }
function ViewPostsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " working hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewPostsComponent_div_1_mat_card_content_4_Template, 4, 3, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r1.working_hours);
} }
class ViewPostsComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.readPosts();
    }
    readPosts() {
        this.postService.getPosts().subscribe((data) => {
            this.posts = data;
        }, (error) => {
            console.log(error);
        });
    }
}
ViewPostsComponent.ɵfac = function ViewPostsComponent_Factory(t) { return new (t || ViewPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
ViewPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPostsComponent, selectors: [["app-view-posts"]], decls: 2, vars: 1, consts: [[1, "row", "flex-row", "container"], ["class", "col-6 postCard", 4, "ngFor", "ngForOf"], [1, "col-6", "postCard"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function ViewPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewPostsComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_change_time_pipe__WEBPACK_IMPORTED_MODULE_4__["ChangeTimePipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  color: #f15670;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: #4a4aff;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  border: 1px solid #f15670;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXBvc3RzL0M6XFxVc2Vyc1xcbW9oYW5cXERlc2t0b3BcXGRvdWJsZVxcd29ya2luZy1ob3Vycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdmlldy1wb3N0c1xcdmlldy1wb3N0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXBvc3RzL3ZpZXctcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctcG9zdHMvdmlldy1wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IHJnYigyNDEsIDg2LCAxMTIpO1xyXG59XHJcbnN0cm9uZyB7XHJcbiAgY29sb3I6IHJnYig3NCwgNzQsIDI1NSk7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDEsIDg2LCAxMTIpO1xyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmMTU2NzA7XG59XG5cbnN0cm9uZyB7XG4gIGNvbG9yOiAjNGE0YWZmO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMTU2NzA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-posts',
                templateUrl: './view-posts.component.html',
                styleUrls: ['./view-posts.component.scss'],
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PostService {
    constructor(http) {
        this.http = http;
    }
    createPost(post) {
        return this.http.post('post', post);
    }
    getPosts() {
        return this.http.get('post');
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
        this.selectedUser = {
            email: '',
            password: '',
            id: '',
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ NoAuth: 'True' }) };
    }
    createUser(user) {
        return this.http.post('auth/signup', user);
    }
    login(authCredentials) {
        return this.http.post('auth/login', authCredentials, this.noAuthHeader);
    }
    getUserProfile() {
        return this.http.get('getuser');
    }
    //token field
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        let token = this.getToken();
        if (token) {
            let userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }
    isLoggedIn() {
        let userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\mohan\Desktop\double\working-hours\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map