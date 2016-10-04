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
	var ng2_charts_1 = __webpack_require__(107);
	var index_5 = __webpack_require__(109);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [platform_browser_1.BrowserModule, ng_semantic_1.NgSemanticModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, ng2_charts_1.ChartsModule, router_1.RouterModule.forRoot(app_routing_1.ROUTES)],
	            declarations: [app_component_1.AppComponent, login_component_1.LoginFormComponent, index_1.HomeComponent, index_2.ExpenseFormCreate, index_2.ExpenseComponent, index_5.LineChartComponent],
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


/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(108));


/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var BaseChartComponent = (function () {
	    function BaseChartComponent(element) {
	        this.labels = [];
	        this.options = { responsive: true };
	        this.chartClick = new core_1.EventEmitter();
	        this.chartHover = new core_1.EventEmitter();
	        this.initFlag = false;
	        this.element = element;
	    }
	    BaseChartComponent.prototype.ngOnInit = function () {
	        this.ctx = this.element.nativeElement.children[0].getContext('2d');
	        this.cvs = this.element.nativeElement.children[0];
	        this.parent = this.element.nativeElement;
	        this.initFlag = true;
	        if (this.data || this.datasets) {
	            this.refresh();
	        }
	    };
	    BaseChartComponent.prototype.ngOnChanges = function (changes) {
	        if (this.initFlag) {
	            // Check if the changes are in the data or datasets
	            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
	                this.chart.data.datasets = this.getDatasets();
	                this.chart.update();
	            }
	            else {
	                this.refresh();
	            }
	        }
	    };
	    BaseChartComponent.prototype.ngOnDestroy = function () {
	        if (this.chart) {
	            this.chart.destroy();
	            this.chart = void 0;
	        }
	    };
	    BaseChartComponent.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
	        var _this = this;
	        var datasets = this.getDatasets();
	        var options = Object.assign({}, this.options);
	        if (this.legend === false) {
	            options.legend = { display: false };
	        }
	        // hock for onHover and onClick events
	        options.hover = options.hover || {};
	        if (!options.hover.onHover) {
	            options.hover.onHover = function (active) {
	                if (active && !active.length) {
	                    return;
	                }
	                _this.chartHover.emit({ active: active });
	            };
	        }
	        if (!options.onClick) {
	            options.onClick = function (event, active) {
	                _this.chartClick.emit({ event: event, active: active });
	            };
	        }
	        var opts = {
	            type: this.chartType,
	            data: {
	                labels: this.labels,
	                datasets: datasets
	            },
	            options: options
	        };
	        if (typeof Chart === 'undefined') {
	            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
	        }
	        return new Chart(ctx, opts);
	    };
	    BaseChartComponent.prototype.getDatasets = function () {
	        var _this = this;
	        var datasets = void 0;
	        // in case if datasets is not provided, but data is present
	        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
	            if (Array.isArray(this.data[0])) {
	                datasets = this.data.map(function (data, index) {
	                    return { data: data, label: _this.labels[index] || "Label " + index };
	                });
	            }
	            else {
	                datasets = [{ data: this.data, label: "Label 0" }];
	            }
	        }
	        if (this.datasets && this.datasets.length ||
	            (datasets && datasets.length)) {
	            datasets = (this.datasets || datasets)
	                .map(function (elm, index) {
	                var newElm = Object.assign({}, elm);
	                if (_this.colors && _this.colors.length) {
	                    Object.assign(newElm, _this.colors[index]);
	                }
	                else {
	                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
	                }
	                return newElm;
	            });
	        }
	        if (!datasets) {
	            throw new Error("ng-charts configuration error, \n      data or datasets field are required to render char " + this.chartType);
	        }
	        return datasets;
	    };
	    BaseChartComponent.prototype.refresh = function () {
	        var _this = this;
	        if (this.options && this.options.responsive && this.parent.clientHeight === 0) {
	            return setTimeout(function () { return _this.refresh(); }, 50);
	        }
	        // todo: remove this line, it is producing flickering
	        this.ngOnDestroy();
	        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
	    };
	    BaseChartComponent.defaultColors = [
	        [255, 99, 132],
	        [54, 162, 235],
	        [255, 206, 86],
	        [231, 233, 237],
	        [75, 192, 192],
	        [151, 187, 205],
	        [220, 220, 220],
	        [247, 70, 74],
	        [70, 191, 189],
	        [253, 180, 92],
	        [148, 159, 177],
	        [77, 83, 96]
	    ];
	    BaseChartComponent.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'base-chart',
	                    template: "<canvas style=\"width: 100%; height: 100%;\"></canvas>",
	                    styles: [":host { display: block; }"]
	                },] },
	    ];
	    /** @nocollapse */
	    BaseChartComponent.ctorParameters = [
	        { type: core_1.ElementRef, },
	    ];
	    BaseChartComponent.propDecorators = {
	        'data': [{ type: core_1.Input },],
	        'datasets': [{ type: core_1.Input },],
	        'labels': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input },],
	        'chartType': [{ type: core_1.Input },],
	        'colors': [{ type: core_1.Input },],
	        'legend': [{ type: core_1.Input },],
	        'chartClick': [{ type: core_1.Output },],
	        'chartHover': [{ type: core_1.Output },],
	    };
	    return BaseChartComponent;
	}());
	exports.BaseChartComponent = BaseChartComponent;
	function rgba(colour, alpha) {
	    return 'rgba(' + colour.concat(alpha).join(',') + ')';
	}
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function formatLineColor(colors) {
	    return {
	        backgroundColor: rgba(colors, 0.4),
	        borderColor: rgba(colors, 1),
	        pointBackgroundColor: rgba(colors, 1),
	        pointBorderColor: '#fff',
	        pointHoverBackgroundColor: '#fff',
	        pointHoverBorderColor: rgba(colors, 0.8)
	    };
	}
	function formatBarColor(colors) {
	    return {
	        backgroundColor: rgba(colors, 0.6),
	        borderColor: rgba(colors, 1),
	        hoverBackgroundColor: rgba(colors, 0.8),
	        hoverBorderColor: rgba(colors, 1)
	    };
	}
	function formatPieColors(colors) {
	    return {
	        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
	        borderColor: colors.map(function () { return '#fff'; }),
	        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
	        pointBorderColor: colors.map(function () { return '#fff'; }),
	        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
	        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
	    };
	}
	function formatPolarAreaColors(colors) {
	    return {
	        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
	        borderColor: colors.map(function (color) { return rgba(color, 1); }),
	        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
	        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
	    };
	}
	function getRandomColor() {
	    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
	}
	/**
	 * Generate colors for line|bar charts
	 * @param index
	 * @returns {number[]|Color}
	 */
	function generateColor(index) {
	    return BaseChartComponent.defaultColors[index] || getRandomColor();
	}
	/**
	 * Generate colors for pie|doughnut charts
	 * @param count
	 * @returns {Colors}
	 */
	function generateColors(count) {
	    var colorsArr = new Array(count);
	    for (var i = 0; i < count; i++) {
	        colorsArr[i] = BaseChartComponent.defaultColors[i] || getRandomColor();
	    }
	    return colorsArr;
	}
	/**
	 * Generate colors by chart type
	 * @param chartType
	 * @param index
	 * @param count
	 * @returns {Color}
	 */
	function getColors(chartType, index, count) {
	    if (chartType === 'pie' || chartType === 'doughnut') {
	        return formatPieColors(generateColors(count));
	    }
	    if (chartType === 'polarArea') {
	        return formatPolarAreaColors(generateColors(count));
	    }
	    if (chartType === 'line' || chartType === 'radar') {
	        return formatLineColor(generateColor(index));
	    }
	    if (chartType === 'bar' || chartType === 'horizontalBar') {
	        return formatBarColor(generateColor(index));
	    }
	    return generateColor(index);
	}
	var ChartsModule = (function () {
	    function ChartsModule() {
	    }
	    ChartsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [
	                        BaseChartComponent
	                    ],
	                    exports: [
	                        BaseChartComponent
	                    ],
	                    imports: []
	                },] },
	    ];
	    /** @nocollapse */
	    ChartsModule.ctorParameters = [];
	    return ChartsModule;
	}());
	exports.ChartsModule = ChartsModule;


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(110));


/***/ },

/***/ 110:
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
	var LineChartComponent = (function () {
	    function LineChartComponent() {
	        // lineChart
	        this.lineChartData = [
	            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
	            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
	            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
	        ];
	        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	        this.lineChartOptions = {
	            animation: false,
	            responsive: true
	        };
	        this.lineChartColors = [
	            {
	                backgroundColor: 'rgba(148,159,177,0.2)',
	                borderColor: 'rgba(148,159,177,1)',
	                pointBackgroundColor: 'rgba(148,159,177,1)',
	                pointBorderColor: '#fff',
	                pointHoverBackgroundColor: '#fff',
	                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	            },
	            {
	                backgroundColor: 'rgba(77,83,96,0.2)',
	                borderColor: 'rgba(77,83,96,1)',
	                pointBackgroundColor: 'rgba(77,83,96,1)',
	                pointBorderColor: '#fff',
	                pointHoverBackgroundColor: '#fff',
	                pointHoverBorderColor: 'rgba(77,83,96,1)'
	            },
	            {
	                backgroundColor: 'rgba(148,159,177,0.2)',
	                borderColor: 'rgba(148,159,177,1)',
	                pointBackgroundColor: 'rgba(148,159,177,1)',
	                pointBorderColor: '#fff',
	                pointHoverBackgroundColor: '#fff',
	                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	            }
	        ];
	        this.lineChartLegend = true;
	        this.lineChartType = 'line';
	    }
	    LineChartComponent.prototype.randomize = function () {
	        var _lineChartData = new Array(this.lineChartData.length);
	        for (var i = 0; i < this.lineChartData.length; i++) {
	            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
	            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
	                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
	            }
	        }
	        this.lineChartData = _lineChartData;
	    };
	    // events
	    LineChartComponent.prototype.chartClicked = function (e) {
	        console.log(e);
	    };
	    LineChartComponent.prototype.chartHovered = function (e) {
	        console.log(e);
	    };
	    LineChartComponent = __decorate([
	        core_1.Component({
	            selector: 'line-chart',
	            templateUrl: 'app/charts/line-chart.component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LineChartComponent);
	    return LineChartComponent;
	}());
	exports.LineChartComponent = LineChartComponent;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map