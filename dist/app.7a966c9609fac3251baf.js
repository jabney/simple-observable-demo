webpackJsonp(["app"],{

/***/ "./client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <h1>SimpleObservable</h1>\n\n  <!-- <img src=\"\"> -->\n</main>\n";

/***/ }),

/***/ "./client/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "main {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  display: block; }\n"

/***/ }),

/***/ "./client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tokens__ = __webpack_require__("./client/app/tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./client/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_styles_scss__ = __webpack_require__("./client/scss/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_styles_scss__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */]({
        selector: 'my-app',
        template: __webpack_require__("./client/app/app.component.html"),
        styles: [__webpack_require__("./client/app/app.component.scss")],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__tokens__["a" /* APP_MESSAGES */], useClass: __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] }
        ]
    }),
    __param(0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */](__WEBPACK_IMPORTED_MODULE_1__tokens__["a" /* APP_MESSAGES */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
], AppComponent);



/***/ }),

/***/ "./client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./client/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */]({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./client/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_subject_observer__ = __webpack_require__("./node_modules/simple-subject-observer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_subject_observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_subject_observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var so = new __WEBPACK_IMPORTED_MODULE_0_simple_subject_observer__();
console.log(so);
var MessageService = (function () {
    function MessageService() {
        this.handler = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MessageService.prototype.broadcast = function (type, payload) {
        this.handler.next({ type: type, payload: payload });
    };
    MessageService.prototype.subscribe = function (type, callback) {
        return this.handler
            .filter(function (message) { return message.type === type; })
            .map(function (message) { return message.payload; })
            .subscribe(callback);
    };
    return MessageService;
}());
MessageService = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */](),
    __metadata("design:paramtypes", [])
], MessageService);



/***/ }),

/***/ "./client/app/tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_MESSAGES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");

var APP_MESSAGES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.messages');


/***/ }),

/***/ "./client/main-jit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./client/app/app.module.ts");


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./client/scss/styles.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/simple-subject-observer/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/simple-subject-observer/lib/simple-observable.js").SimpleObservable


/***/ }),

/***/ "./node_modules/simple-subject-observer/lib/simple-observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscription_token_1 = __webpack_require__("./node_modules/simple-subject-observer/lib/subscription-token.js");
/**
 * A simple subject/observer pattern implementation. Observers can
 * subscribe and receive notifications when a specified event ocurrs.
 *
 * @export
 * @class SimpleObservable
 */
var SimpleObservable = (function () {
    function SimpleObservable() {
        this._observers = Object.create(null);
        this._nextId = 0;
    }
    /**
     *
     *
     * @param {TNotifyCallback} callback
     * @returns {ISubscriptionToken}
     * @memberof SimpleObservable
     */
    SimpleObservable.prototype.subscribe = function (callback) {
        var id = this._nextId++;
        this._observers[id] = callback;
        return subscription_token_1.subscriptionToken(this._observers, id);
    };
    /**
     * Notify observers and deliver a data payload
     *
     * @param {*} [payload=null] The data payload to deliver to subscribers
     * @returns {this}
     * @memberof SimpleObservable
     */
    SimpleObservable.prototype.notify = function (payload) {
        if (payload === void 0) { payload = null; }
        for (var id in this._observers) {
            var callback = this._observers[id];
            callback(payload, +id);
        }
        return this;
    };
    /**
     * Notify observers asynchronously and deliver a data payload
     *
     * @param {*} [payload=null] The data payload to deliver to subscribers
     * @returns {this}
     * @memberof SimpleObservable
     */
    SimpleObservable.prototype.notifyAsync = function (payload) {
        if (payload === void 0) { payload = null; }
        for (var id in this._observers) {
            var callback = this._observers[id];
            setTimeout(executeCallbackFn(callback, payload, +id), 0);
        }
        return this;
    };
    return SimpleObservable;
}());
exports.SimpleObservable = SimpleObservable;
/**
 * Helper for notifyAsync setTimeout calls
 * @function
 * @param {TNotifyCallback} callback
 * @param {*} payload
 * @param {number} id
 * @returns {() => void}
 */
function executeCallbackFn(callback, payload, id) {
    return function () {
        callback(payload, id);
    };
}


/***/ }),

/***/ "./node_modules/simple-subject-observer/lib/subscription-token.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate and return an ISubscriptionToken
 *
 * @export
 * @param {IObservers} observers
 * @param {number} id
 * @returns {ISubscriptionToken}
 */
function subscriptionToken(observers, id) {
    return { id: id, unsubscribe: function () {
            delete observers[id];
        } };
}
exports.subscriptionToken = subscriptionToken;


/***/ })

},["./client/main-jit.ts"]);
//# sourceMappingURL=app.7a966c9609fac3251baf.js.map