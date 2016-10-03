webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var platform_browser_1 = __webpack_require__(21);
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	var app_component_1 = __webpack_require__(25);
	var login_component_1 = __webpack_require__(26);
	var index_1 = __webpack_require__(63);
	var index_2 = __webpack_require__(65);
	var forms_1 = __webpack_require__(27);
	var index_3 = __webpack_require__(31);
	var router_1 = __webpack_require__(36);
	var app_routing_1 = __webpack_require__(68);
	var index_4 = __webpack_require__(69);
	var ng_semantic_1 = __webpack_require__(71);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, ng_semantic_1.NgSemanticModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routing_1.ROUTES)],
	            declarations: [app_component_1.AppComponent, login_component_1.LoginFormComponent, index_1.HomeComponent, index_2.ExpenseFormCreate, index_2.ExpenseComponent],
	            providers: [index_3.AuthenticationService, index_3.ExpenseService, index_4.AuthGuard],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            templateUrl: 'app/app.component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(27);
	var index_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(36);
	var LoginFormComponent = (function () {
	    function LoginFormComponent(fb, authenticationService, router) {
	        this.fb = fb;
	        this.authenticationService = authenticationService;
	        this.router = router;
	        this.loading = false;
	        this.error = '';
	        this.usernameCtrl = fb.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]));
	        this.passwordCtrl = fb.control('', forms_1.Validators.required);
	        this.userForm = fb.group({
	            username: this.usernameCtrl,
	            password: this.passwordCtrl
	        });
	    }
	    LoginFormComponent.prototype.login = function () {
	        var _this = this;
	        this.loading = true;
	        this.authenticationService.login(this.usernameCtrl.value, this.passwordCtrl.value)
	            .subscribe(function (result) {
	            if (result === true) {
	                _this.router.navigate(['/']);
	            }
	            else {
	                _this.error = 'Username or password incorrect';
	                _this.loading = false;
	            }
	        });
	    };
	    LoginFormComponent.prototype.register = function (user) {
	        console.log(this.userForm.value);
	    };
	    LoginFormComponent = __decorate([
	        core_1.Component({
	            selector: 'login-form',
	            templateUrl: './app/login/login.component.html'
	        }), 
	        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.AuthenticationService, router_1.Router])
	    ], LoginFormComponent);
	    return LoginFormComponent;
	}());
	exports.LoginFormComponent = LoginFormComponent;


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(32));
	__export(__webpack_require__(35));


/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	__webpack_require__(33);
	var AuthenticationService = (function () {
	    function AuthenticationService(http) {
	        this.http = http;
	        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
	        this.token = currentUser && currentUser.token;
	    }
	    AuthenticationService.prototype.login = function (email, password) {
	        var _this = this;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post('/api/auth/login', JSON.stringify({ email: email, password: password }), options)
	            .map(function (response) {
	            var token = response.json() && response.json().token;
	            if (token) {
	                _this.token = token;
	                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
	                return true;
	            }
	            else {
	                return false;
	            }
	        });
	    };
	    AuthenticationService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], AuthenticationService);
	    return AuthenticationService;
	}());
	exports.AuthenticationService = AuthenticationService;


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(24);
	__webpack_require__(33);
	var index_1 = __webpack_require__(31);
	var ExpenseService = (function () {
	    function ExpenseService(authenticationService, http) {
	        this.authenticationService = authenticationService;
	        this.http = http;
	    }
	    ExpenseService.prototype.getExpenses = function () {
	        var _this = this;
	        var headers = new http_1.Headers({ 'Authorization': this.authenticationService.token });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.get('/api/expense', options)
	            .map(function (response) {
	            _this.expenses = response.json();
	            if (_this.expenses) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        });
	    };
	    ExpenseService.prototype.createExpense = function (body) {
	        var _this = this;
	        var bodyString = JSON.stringify(body);
	        var headers = new http_1.Headers({
	            'Authorization': this.authenticationService.token,
	            'Content-Type': 'application/json'
	        });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post('/api/expense', bodyString, options)
	            .map(function (response) {
	            var expense = response.json();
	            if (expense) {
	                _this.expenses.push(expense);
	                return true;
	            }
	            else {
	                return false;
	            }
	        });
	    };
	    ExpenseService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [index_1.AuthenticationService, http_1.Http])
	    ], ExpenseService);
	    return ExpenseService;
	}());
	exports.ExpenseService = ExpenseService;


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(64));


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            templateUrl: 'app/home/home.component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(66));
	__export(__webpack_require__(67));


/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(27);
	var index_1 = __webpack_require__(31);
	var router_1 = __webpack_require__(36);
	var ExpenseFormCreate = (function () {
	    function ExpenseFormCreate(fb, expenseService, router) {
	        this.fb = fb;
	        this.expenseService = expenseService;
	        this.router = router;
	        this.loading = false;
	        this.error = '';
	        this.categoryCtrl = fb.control('', forms_1.Validators.required);
	        this.descriptionCtrl = fb.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)]));
	        this.amountCtrl = fb.control('', forms_1.Validators.required);
	        this.expenseForm = fb.group({
	            category: this.categoryCtrl,
	            description: this.descriptionCtrl,
	            amount: this.amountCtrl
	        });
	    }
	    ExpenseFormCreate.prototype.createExpense = function () {
	        this.expenseService.createExpense(this.expenseForm.value)
	            .subscribe(function (result) {
	            if (result) {
	                console.log(result);
	            }
	        });
	    };
	    ExpenseFormCreate = __decorate([
	        core_1.Component({
	            selector: 'expense-create',
	            templateUrl: 'app/expense/expense-create.component.html'
	        }), 
	        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.ExpenseService, router_1.Router])
	    ], ExpenseFormCreate);
	    return ExpenseFormCreate;
	}());
	exports.ExpenseFormCreate = ExpenseFormCreate;


/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var index_1 = __webpack_require__(31);
	var ExpenseComponent = (function () {
	    function ExpenseComponent(expenseService) {
	        this.expenseService = expenseService;
	        this.expenses = [];
	    }
	    ExpenseComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.expenseService.getExpenses()
	            .subscribe(function (response) {
	            if (response) {
	                _this.expenses = _this.expenseService.expenses;
	            }
	        });
	    };
	    ExpenseComponent = __decorate([
	        core_1.Component({
	            selector: 'ng-expense',
	            templateUrl: 'app/expense/expense.component.html'
	        }), 
	        __metadata('design:paramtypes', [index_1.ExpenseService])
	    ], ExpenseComponent);
	    return ExpenseComponent;
	}());
	exports.ExpenseComponent = ExpenseComponent;


/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var login_component_1 = __webpack_require__(26);
	var index_1 = __webpack_require__(63);
	var index_2 = __webpack_require__(65);
	var index_3 = __webpack_require__(69);
	exports.ROUTES = [
	    { path: 'login', component: login_component_1.LoginFormComponent },
	    { path: '', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
	    { path: 'expense/create', component: index_2.ExpenseFormCreate, canActivate: [index_3.AuthGuard] },
	    //Otherwise redirect to home
	    { path: '**', redirectTo: '' }
	];


/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(70));


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(36);
	var AuthGuard = (function () {
	    function AuthGuard(router) {
	        this.router = router;
	    }
	    AuthGuard.prototype.canActivate = function () {
	        if (localStorage.getItem('currentUser')) {
	            return true;
	        }
	        this.router.navigate(['/login']);
	        return false;
	    };
	    AuthGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AuthGuard);
	    return AuthGuard;
	}());
	exports.AuthGuard = AuthGuard;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map