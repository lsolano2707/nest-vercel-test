/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const api_util_1 = __webpack_require__(18);
const version = __webpack_require__(66).version;
const exceptions_1 = __webpack_require__(67);
const logger_1 = __webpack_require__(31);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(`${api_util_1.API_PREFIX}/commons`);
    app.enableCors();
    app.use(api_util_1.defaultHeadersMiddleware);
    const logger = app.get(logger_1.LoggerService);
    app.useGlobalFilters(new exceptions_1.HttpExceptionFilter(logger));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Swagger Api Commons')
        .setVersion(version)
        .addTag('countries')
        .addTag('states')
        .addTag('cities')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
        }
    });
    await app.listen(app_module_1.AppModule.port);
    new common_1.Logger().log(`*** API COMMONS v${version} listening on port ${app_module_1.AppModule.port} ***`);
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppModule_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const app_config_1 = __webpack_require__(6);
const database_config_1 = __webpack_require__(7);
const countries_module_1 = __webpack_require__(8);
const states_module_1 = __webpack_require__(54);
const cities_module_1 = __webpack_require__(60);
let AppModule = AppModule_1 = class AppModule {
    constructor(config) {
        this.config = config;
        AppModule_1.port = config.port;
    }
};
AppModule = AppModule_1 = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, database_config_1.default],
            }),
            countries_module_1.CountriesModule,
            states_module_1.StatesModule,
            cities_module_1.CitiesModule,
        ],
    }),
    __param(0, common_1.Inject(app_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _a : Object])
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(5);
exports.default = config_1.registerAs('app', () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(5);
exports.default = config_1.registerAs('database', () => ({
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE_DATABASE,
}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesModule = void 0;
const common_1 = __webpack_require__(4);
const countries_controller_1 = __webpack_require__(9);
const countries_service_1 = __webpack_require__(30);
const countries_repository_1 = __webpack_require__(38);
const config_1 = __webpack_require__(5);
const database_config_1 = __webpack_require__(7);
const logger_1 = __webpack_require__(31);
const mongodb_util_1 = __webpack_require__(39);
let CountriesModule = class CountriesModule {
};
CountriesModule = __decorate([
    common_1.Module({
        controllers: [countries_controller_1.CountriesController],
        providers: [countries_service_1.CountriesService, countries_repository_1.CountriesRepository],
        imports: [
            logger_1.LoggerModule,
            mongodb_util_1.MongodbUtilModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [database_config_1.default.KEY],
                useFactory: async (config) => ({
                    uri: config.url,
                    dbName: config.database,
                    clientOptions: { useNewUrlParser: true, useUnifiedTopology: true },
                }),
            }),
        ],
    })
], CountriesModule);
exports.CountriesModule = CountriesModule;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const swagger_2 = __webpack_require__(10);
const api_util_1 = __webpack_require__(18);
const countries_service_1 = __webpack_require__(30);
const api_util_2 = __webpack_require__(18);
const models_1 = __webpack_require__(15);
let CountriesController = class CountriesController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    async find(queryParams) {
        return await this.countriesService.find(queryParams);
    }
    async count(queryParams) {
        return await this.countriesService.count(queryParams);
    }
    async findById(id) {
        return await this.countriesService.findById(id);
    }
    async insert(body) {
        return await this.countriesService.insert(body);
    }
    async updateById(id, body) {
        return await this.countriesService.updateById(id, body);
    }
    async deleteById(id) {
        return await this.countriesService.deleteById(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: swagger_2.CountryFindResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CountriesController.prototype, "find", null);
__decorate([
    common_1.Get('/count'),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: api_util_2.GenericResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CountriesController.prototype, "count", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: swagger_2.CountryFindByIdResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.NOT_FOUND.code, description: api_util_1.HttpStatusCodes.NOT_FOUND.message }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CountriesController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: swagger_2.CountryInsertResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.NOT_FOUND.code, description: api_util_1.HttpStatusCodes.NOT_FOUND.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.CONFLICT.code, description: api_util_1.HttpStatusCodes.CONFLICT.message }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CountriesController.prototype, "insert", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: swagger_2.CountryUpdateByIdResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.NOT_FOUND.code, description: api_util_1.HttpStatusCodes.NOT_FOUND.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.CONFLICT.code, description: api_util_1.HttpStatusCodes.CONFLICT.message }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof models_1.Country !== "undefined" && models_1.Country) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CountriesController.prototype, "updateById", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.OK.code, description: api_util_1.HttpStatusCodes.OK.message, type: api_util_2.GenericResponse }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.BAD_REQUEST.code, description: api_util_1.HttpStatusCodes.BAD_REQUEST.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.UNAUTHORIZED.code, description: api_util_1.HttpStatusCodes.UNAUTHORIZED.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.FORBIDDEN.code, description: api_util_1.HttpStatusCodes.FORBIDDEN.message }),
    swagger_1.ApiResponse({ status: api_util_1.HttpStatusCodes.NOT_FOUND.code, description: api_util_1.HttpStatusCodes.NOT_FOUND.message }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CountriesController.prototype, "deleteById", null);
CountriesController = __decorate([
    swagger_1.ApiHeaders(api_util_1.getDefaultHeaders()),
    swagger_1.ApiTags('countries'),
    common_1.Controller('countries'),
    __metadata("design:paramtypes", [typeof (_j = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _j : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateByIdResponse = exports.CountryInsertResponse = exports.CountryFindByIdResponse = exports.CountryFindResponse = void 0;
const interfaces_1 = __webpack_require__(12);
const models_1 = __webpack_require__(15);
const swagger_1 = __webpack_require__(2);
class CountryFindResponse extends interfaces_1.GenericResponse {
}
__decorate([
    swagger_1.ApiProperty({ type: models_1.Country, isArray: true }),
    __metadata("design:type", Array)
], CountryFindResponse.prototype, "data", void 0);
exports.CountryFindResponse = CountryFindResponse;
class CountryFindByIdResponse extends interfaces_1.GenericResponse {
}
__decorate([
    swagger_1.ApiProperty({ type: models_1.Country }),
    __metadata("design:type", typeof (_a = typeof models_1.Country !== "undefined" && models_1.Country) === "function" ? _a : Object)
], CountryFindByIdResponse.prototype, "data", void 0);
exports.CountryFindByIdResponse = CountryFindByIdResponse;
class CountryInsertResponse extends interfaces_1.GenericResponse {
}
__decorate([
    swagger_1.ApiProperty({ type: models_1.Country }),
    __metadata("design:type", typeof (_b = typeof models_1.Country !== "undefined" && models_1.Country) === "function" ? _b : Object)
], CountryInsertResponse.prototype, "data", void 0);
exports.CountryInsertResponse = CountryInsertResponse;
class CountryUpdateByIdResponse extends interfaces_1.GenericResponse {
}
__decorate([
    swagger_1.ApiProperty({ type: models_1.Country }),
    __metadata("design:type", typeof (_c = typeof models_1.Country !== "undefined" && models_1.Country) === "function" ? _c : Object)
], CountryUpdateByIdResponse.prototype, "data", void 0);
exports.CountryUpdateByIdResponse = CountryUpdateByIdResponse;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
const swagger_1 = __webpack_require__(2);
const metadata_interface_1 = __webpack_require__(14);
class GenericResponse {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
], GenericResponse.prototype, "data", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", typeof (_b = typeof Object !== "undefined" && Object) === "function" ? _b : Object)
], GenericResponse.prototype, "errors", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", typeof (_c = typeof metadata_interface_1.Metadata !== "undefined" && metadata_interface_1.Metadata) === "function" ? _c : Object)
], GenericResponse.prototype, "meta", void 0);
exports.GenericResponse = GenericResponse;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
const swagger_1 = __webpack_require__(2);
class Metadata {
}
__decorate([
    swagger_1.ApiProperty({ example: 1 }),
    __metadata("design:type", Number)
], Metadata.prototype, "recordCount", void 0);
exports.Metadata = Metadata;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryObjectSchema = exports.Country = void 0;
const Joi = __webpack_require__(17);
const swagger_1 = __webpack_require__(2);
class Country {
}
__decorate([
    swagger_1.ApiProperty({ example: '5dd823c99bfbc38266cb0a1d', description: 'The unique id of the country', required: false }),
    __metadata("design:type", String)
], Country.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'COL', description: 'The id of the country', minimum: 3, maximum: 3, required: true }),
    __metadata("design:type", String)
], Country.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'CO', description: 'The code of the country', minimum: 2, maximum: 2, required: true }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Colombia', description: 'The name of the country', required: true }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'America', description: 'The continent of the country', required: true }),
    __metadata("design:type", String)
], Country.prototype, "continent", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'COP', description: 'The currency of the country', required: false }),
    __metadata("design:type", String)
], Country.prototype, "currency", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Bogota', description: 'The capital of the country', required: false }),
    __metadata("design:type", String)
], Country.prototype, "capital", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '57', description: 'The phone code of the country', required: false }),
    __metadata("design:type", String)
], Country.prototype, "phoneCode", void 0);
__decorate([
    swagger_1.ApiProperty({ example: true, description: 'The status of the country', required: false }),
    __metadata("design:type", Boolean)
], Country.prototype, "status", void 0);
exports.Country = Country;
exports.countryObjectSchema = Joi.object()
    .keys({
    id: Joi.string()
        .min(3)
        .max(3)
        .required(),
    code: Joi.string()
        .min(2)
        .max(2)
        .required(),
    name: Joi.string().required(),
    continent: Joi.string().required(),
    currency: Joi.string(),
    capital: Joi.string(),
    phoneCode: Joi.string(),
    status: Joi.boolean(),
})
    .options({ stripUnknown: true });


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUtilModule = void 0;
const common_1 = __webpack_require__(4);
let ApiUtilModule = class ApiUtilModule {
};
ApiUtilModule = __decorate([
    common_1.Module({})
], ApiUtilModule);
exports.ApiUtilModule = ApiUtilModule;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addParam = void 0;
const KEY_QUERY = 'query';
const parseJSONString = (string) => {
    try {
        return JSON.parse(string);
    }
    catch (err) {
        return false;
    }
};
exports.addParam = (queryParams, param) => {
    try {
        let query = typeof queryParams[KEY_QUERY] === 'string' ? JSON.parse(queryParams[KEY_QUERY]) : queryParams[KEY_QUERY];
        queryParams[KEY_QUERY] = Object.assign(Object.assign({}, query), param);
    }
    catch (err) {
        console.error('Error getAddParam', err);
    }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultHeaders = void 0;
const headers_1 = __webpack_require__(23);
exports.getDefaultHeaders = () => {
    return [
        {
            name: headers_1.HEADER_APP_ID,
            example: 'Swagger',
            required: true,
        },
        {
            name: headers_1.HEADER_REQUEST_ID,
            example: '77e1c83b-7bb0-437b-bc50-a7a58e5660ac',
            required: true,
        }
    ];
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HEADER_ACCEPT_LANGUAGE = exports.HEADER_LOCATION = exports.HEADER_REQUEST_ID = exports.HEADER_DEVICE_ID = exports.HEADER_APP_ID = void 0;
exports.HEADER_APP_ID = 'App-Id';
exports.HEADER_DEVICE_ID = 'Device-Id';
exports.HEADER_REQUEST_ID = 'Request-Id';
exports.HEADER_LOCATION = 'Location';
exports.HEADER_ACCEPT_LANGUAGE = 'Accept-Language';


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationPipe = void 0;
const common_1 = __webpack_require__(4);
let JoiValidationPipe = class JoiValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(body, metadata) {
        const result = this.schema.validate(body);
        if (result.error) {
            throw new common_1.BadRequestException(result.error.message);
        }
        return result.value;
    }
};
JoiValidationPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], JoiValidationPipe);
exports.JoiValidationPipe = JoiValidationPipe;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHeadersMiddleware = void 0;
const common_1 = __webpack_require__(4);
const headers_1 = __webpack_require__(23);
const EXCLUDE_PATH_SWAGGER = /^\/api\/docs/;
const DEFAULT_HEADERS_NOT_FOUND = 'default headers not found';
function defaultHeadersMiddleware(req, res, next) {
    if (EXCLUDE_PATH_SWAGGER.test(req.path)) {
        return next();
    }
    if (!req.header(headers_1.HEADER_APP_ID) || !req.header(headers_1.HEADER_REQUEST_ID)) {
        throw new common_1.BadRequestException(DEFAULT_HEADERS_NOT_FOUND);
    }
    next();
}
exports.defaultHeadersMiddleware = defaultHeadersMiddleware;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PREFIX = void 0;
exports.API_PREFIX = 'api';


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCodes = void 0;
exports.HttpStatusCodes = {
    CONTINUE: {
        code: 100,
        message: 'Continue'
    },
    SWITCHING_PROTOCOLS: {
        code: 101,
        message: 'Switching Protocols'
    },
    PROCESSING: {
        code: 102,
        message: 'Processing'
    },
    OK: {
        code: 200,
        message: 'Ok'
    },
    CREATED: {
        code: 201,
        message: 'Created'
    },
    ACCEPTED: {
        code: 202,
        message: 'Accepted'
    },
    NON_AUTHORITATIVE_INFORMATION: {
        code: 203,
        message: 'Non Authoritative Information'
    },
    NO_CONTENT: {
        code: 204,
        message: 'No Content'
    },
    RESET_CONTENT: {
        code: 205,
        message: 'Reset Content'
    },
    PARTIAL_CONTENT: {
        code: 206,
        message: 'Partial Content'
    },
    MULTIPLE_CHOICES: {
        code: 300,
        message: 'Multiple Choices'
    },
    MOVED_PERMANENTLY: {
        code: 301,
        message: 'Moved Permanently'
    },
    MOVED_TEMPORARILY: {
        code: 302,
        message: 'Moved Temporarily'
    },
    SEE_OTHER: {
        code: 303,
        message: 'See Other'
    },
    NOT_MODIFIED: {
        code: 304,
        message: 'Not Modified'
    },
    TEMPORARY_REDIRECT: {
        code: 307,
        message: 'Temporary Redirect'
    },
    PERMANENT_REDIRECT: {
        code: 308,
        message: 'Permanent Redirect'
    },
    BAD_REQUEST: {
        code: 400,
        message: 'Bad Request'
    },
    UNAUTHORIZED: {
        code: 401,
        message: 'Unauthorized'
    },
    PAYMENT_REQUIRED: {
        code: 402,
        message: 'Payment Required'
    },
    FORBIDDEN: {
        code: 403,
        message: 'Forbidden'
    },
    NOT_FOUND: {
        code: 404,
        message: 'Not Found'
    },
    METHOD_NOT_ALLOWED: {
        code: 405,
        message: 'Method Not Allowed'
    },
    NOT_ACCEPTABLE: {
        code: 406,
        message: 'Not Acceptable'
    },
    PROXY_AUTHENTICATION_REQUIRED: {
        code: 407,
        message: 'Proxy Authentication Required'
    },
    REQUEST_TIMEOUT: {
        code: 408,
        message: 'Request Timeout'
    },
    CONFLICT: {
        code: 409,
        message: 'Conflict'
    },
    GONE: {
        code: 410,
        message: 'Gone'
    },
    LENGTH_REQUIRED: {
        code: 411,
        message: 'Length Required'
    },
    PRECONDITION_FAILED: {
        code: 412,
        message: 'Precondition Failed'
    },
    PAYLOAD_TOO_LARGE: {
        code: 413,
        message: 'Request Entity Too Large'
    },
    URI_TOO_LONG: {
        code: 414,
        message: 'Request-URI Too Long'
    },
    UNSUPPORTED_MEDIA_TYPE: {
        code: 415,
        message: 'Unsupported Media Type'
    },
    TOO_MANY_REQUESTS: {
        code: 429,
        message: 'Too Many Requests'
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Internal Server Error'
    },
    NOT_IMPLEMENTED: {
        code: 501,
        message: 'Not Implemented'
    },
    BAD_GATEWAY: {
        code: 502,
        message: 'Bad Gateway'
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        message: 'Service Unavailable'
    },
    GATEWAY_TIMEOUT: {
        code: 504,
        message: 'Gateway Timeout'
    },
    HTTP_VERSION_NOT_SUPPORTED: {
        code: 505,
        message: 'HTTP Version Not Supported'
    },
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
var CountriesService_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = __webpack_require__(4);
const logger_1 = __webpack_require__(31);
const countries_repository_1 = __webpack_require__(38);
let CountriesService = CountriesService_1 = class CountriesService {
    constructor(logger, countriesRepository) {
        this.logger = logger;
        this.countriesRepository = countriesRepository;
        logger.setContext(CountriesService_1.name);
    }
    async find(queryParams) {
        let response;
        const p1 = this.countriesRepository.find(queryParams);
        const p2 = this.countriesRepository.count(queryParams);
        await Promise.all([p1, p2]).then(values => {
            response = {
                data: values[0],
                meta: {
                    recordCount: values[1],
                },
            };
        });
        return response;
    }
    async findById(id) {
        const obj = await this.countriesRepository.findOne({ id });
        if (!obj) {
            throw new common_1.NotFoundException();
        }
        return {
            data: obj,
        };
    }
    async count(queryParams) {
        const count = await this.countriesRepository.count(queryParams);
        return {
            meta: {
                recordCount: count
            },
        };
    }
    async insert(obj) {
        let responseRepository;
        if (Array.isArray(obj)) {
            responseRepository = await this.countriesRepository.insertMany(obj);
        }
        else {
            responseRepository = await this.countriesRepository.insertOne(obj);
        }
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async updateById(id, obj) {
        const responseRepository = await this.countriesRepository.updateOne({ id }, obj);
        if (!responseRepository.recordCount) {
            throw new common_1.NotFoundException();
        }
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async deleteById(id) {
        const responseRepository = await this.countriesRepository.deleteOne({ id });
        if (!responseRepository.recordCount) {
            throw new common_1.NotFoundException();
        }
        return {
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
};
CountriesService = CountriesService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object, typeof (_b = typeof countries_repository_1.CountriesRepository !== "undefined" && countries_repository_1.CountriesRepository) === "function" ? _b : Object])
], CountriesService);
exports.CountriesService = CountriesService;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(33);
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    common_1.Module({
        providers: [logger_service_1.LoggerService],
        exports: [logger_service_1.LoggerService],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = __webpack_require__(4);
const PrettyError = __webpack_require__(34);
const chalk = __webpack_require__(35);
const date_fns_1 = __webpack_require__(36);
const logger_enum_1 = __webpack_require__(37);
let LoggerService = class LoggerService extends common_1.Logger {
    constructor() {
        super();
        this.prettyError = new PrettyError();
        this.prettyError.skipNodeFiles();
        this.prettyError.skipPackage('express', '@nestjs/common', '@nestjs/core');
    }
    log(message) {
        this.printMessage(logger_enum_1.Level.LOG, message);
    }
    error(message, trace) {
        this.printMessage(logger_enum_1.Level.ERROR, message, trace);
    }
    warn(message) {
        this.printMessage(logger_enum_1.Level.WARN, message);
    }
    debug(message) {
        this.printMessage(logger_enum_1.Level.DEBUG, message);
    }
    verbose(message) {
        this.printMessage(logger_enum_1.Level.VERBOSE, message);
    }
    printMessage(level, message, error) {
        const time = date_fns_1.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        let printMessageColor = this.getColor(level);
        const logMessage = `${printMessageColor(`[${level}]`)}` +
            ` ${printMessageColor(`[${this.context}]`)}` +
            ` ${printMessageColor(`[${time}]`)}` +
            ` ${message}`;
        console.log(logMessage);
        if (error) {
            console.log(error);
        }
    }
    getColor(level) {
        switch (level) {
            case logger_enum_1.Level.LOG:
                return chalk.green;
            case logger_enum_1.Level.ERROR:
                return chalk.red;
            case logger_enum_1.Level.WARN:
                return chalk.yellow;
            case logger_enum_1.Level.DEBUG:
                return chalk.cyanBright;
            case logger_enum_1.Level.VERBOSE:
                return chalk.magentaBright;
        }
    }
};
LoggerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var Level;
(function (Level) {
    Level["LOG"] = "LOG";
    Level["ERROR"] = "ERROR";
    Level["WARN"] = "WARN";
    Level["DEBUG"] = "DEBUG";
    Level["VERBOSE"] = "VERBOSE";
})(Level = exports.Level || (exports.Level = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRepository = void 0;
const common_1 = __webpack_require__(4);
const mongodb_util_1 = __webpack_require__(39);
let CountriesRepository = class CountriesRepository extends mongodb_util_1.CrudRepository {
    constructor() {
        super(...arguments);
        this.COLLECTION_NAME = 'countries_es';
        this.INDEXES = [
            { key: { id: 1 }, unique: true },
        ];
        this.WHITELIST = [
            '_id',
            'id',
            'code',
            'name',
            'continent',
            'currency',
            'capital',
            'status',
        ];
    }
};
CountriesRepository = __decorate([
    common_1.Injectable()
], CountriesRepository);
exports.CountriesRepository = CountriesRepository;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MongodbUtilModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbUtilModule = void 0;
const common_1 = __webpack_require__(4);
const mongodb_util_core_module_1 = __webpack_require__(41);
const mongo_providers_1 = __webpack_require__(45);
let MongodbUtilModule = MongodbUtilModule_1 = class MongodbUtilModule {
    static forRoot(uri, dbName, options, connectionName) {
        return {
            module: MongodbUtilModule_1,
            imports: [mongodb_util_core_module_1.MongodbUtilCoreModule.forRoot(uri, dbName, options, connectionName)]
        };
    }
    static forRootAsync(options) {
        return {
            module: MongodbUtilModule_1,
            imports: [mongodb_util_core_module_1.MongodbUtilCoreModule.forRootAsync(options)]
        };
    }
    static forFeature(collections = [], connectionName) {
        const providers = mongo_providers_1.createMongoProviders(connectionName, collections);
        return {
            module: MongodbUtilModule_1,
            providers: providers,
            exports: providers
        };
    }
};
MongodbUtilModule = MongodbUtilModule_1 = __decorate([
    common_1.Module({})
], MongodbUtilModule);
exports.MongodbUtilModule = MongodbUtilModule;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MongodbUtilCoreModule_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbUtilCoreModule = void 0;
const common_1 = __webpack_require__(4);
const core_1 = __webpack_require__(1);
const mongodb_1 = __webpack_require__(42);
const mongo_util_1 = __webpack_require__(43);
const connection_constants_1 = __webpack_require__(44);
let MongodbUtilCoreModule = MongodbUtilCoreModule_1 = class MongodbUtilCoreModule {
    constructor(connectionName, moduleRef) {
        this.connectionName = connectionName;
        this.moduleRef = moduleRef;
    }
    static forRoot(uri, dbName, clientOptions = connection_constants_1.DEFAULT_MONGO_CLIENT_OPTIONS, connectionName = connection_constants_1.DEFAULT_MONGO_CONNECTION_NAME) {
        const connectionNameProvider = {
            provide: connection_constants_1.MONGO_CONNECTION_NAME,
            useValue: connectionName
        };
        const clientProvider = {
            provide: mongo_util_1.getClientToken(connectionName),
            useFactory: async () => {
                const client = new mongodb_1.MongoClient(uri, clientOptions);
                return await client.connect();
            }
        };
        const dbProvider = {
            provide: mongo_util_1.getDbToken(connectionName),
            useFactory: (client) => client.db(dbName),
            inject: [mongo_util_1.getClientToken(connectionName)]
        };
        return {
            module: MongodbUtilCoreModule_1,
            providers: [connectionNameProvider, clientProvider, dbProvider],
            exports: [clientProvider, dbProvider]
        };
    }
    static forRootAsync(options) {
        var _a;
        const mongoConnectionName = (_a = options.connectionName) !== null && _a !== void 0 ? _a : connection_constants_1.DEFAULT_MONGO_CONNECTION_NAME;
        const connectionNameProvider = {
            provide: connection_constants_1.MONGO_CONNECTION_NAME,
            useValue: mongoConnectionName
        };
        const clientProvider = {
            provide: mongo_util_1.getClientToken(mongoConnectionName),
            useFactory: async (mongoModuleOptions) => {
                const { uri, clientOptions } = mongoModuleOptions;
                const client = new mongodb_1.MongoClient(uri, clientOptions !== null && clientOptions !== void 0 ? clientOptions : connection_constants_1.DEFAULT_MONGO_CLIENT_OPTIONS);
                return await client.connect();
            },
            inject: [connection_constants_1.MONGO_MODULE_OPTIONS]
        };
        const dbProvider = {
            provide: mongo_util_1.getDbToken(mongoConnectionName),
            useFactory: (mongoModuleOptions, client) => client.db(mongoModuleOptions.dbName),
            inject: [connection_constants_1.MONGO_MODULE_OPTIONS, mongo_util_1.getClientToken(mongoConnectionName)]
        };
        const asyncProviders = this.createAsyncProviders(options);
        return {
            module: MongodbUtilCoreModule_1,
            imports: options.imports,
            providers: [...asyncProviders, clientProvider, dbProvider, connectionNameProvider],
            exports: [clientProvider, dbProvider]
        };
    }
    async onModuleDestroy() {
        const client = this.moduleRef.get(mongo_util_1.getClientToken(this.connectionName));
        if (client && client.isConnected())
            await client.close();
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        else if (options.useClass) {
            return [
                this.createAsyncOptionsProvider(options),
                {
                    provide: options.useClass,
                    useClass: options.useClass
                }
            ];
        }
        else {
            return [];
        }
    }
    static createAsyncOptionsProvider(options) {
        var _a;
        if (options.useFactory) {
            return {
                provide: connection_constants_1.MONGO_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: (_a = options.inject) !== null && _a !== void 0 ? _a : []
            };
        }
        else if (options.useExisting) {
            return {
                provide: connection_constants_1.MONGO_MODULE_OPTIONS,
                useFactory: async (optionsFactory) => await optionsFactory.createMongoOptions(),
                inject: [options.useExisting]
            };
        }
        else if (options.useClass) {
            return {
                provide: connection_constants_1.MONGO_MODULE_OPTIONS,
                useFactory: async (optionsFactory) => await optionsFactory.createMongoOptions(),
                inject: [options.useClass]
            };
        }
        else {
            throw new Error('Invalid MongoModule options');
        }
    }
};
MongodbUtilCoreModule = MongodbUtilCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({}),
    __param(0, common_1.Inject(connection_constants_1.MONGO_CONNECTION_NAME)),
    __metadata("design:paramtypes", [String, typeof (_a = typeof core_1.ModuleRef !== "undefined" && core_1.ModuleRef) === "function" ? _a : Object])
], MongodbUtilCoreModule);
exports.MongodbUtilCoreModule = MongodbUtilCoreModule;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionToken = exports.getDbToken = exports.getClientToken = void 0;
const connection_constants_1 = __webpack_require__(44);
function getClientToken(connectionName = connection_constants_1.DEFAULT_MONGO_CONNECTION_NAME) {
    return `${connectionName}Client`;
}
exports.getClientToken = getClientToken;
function getDbToken(connectionName = connection_constants_1.DEFAULT_MONGO_CONNECTION_NAME) {
    return `${connectionName}Db`;
}
exports.getDbToken = getDbToken;
function getCollectionToken(collectionName) {
    return `${collectionName}Collection`;
}
exports.getCollectionToken = getCollectionToken;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MONGO_CLIENT_OPTIONS = exports.DEFAULT_MONGO_CONNECTION_NAME = exports.MONGO_MODULE_OPTIONS = exports.MONGO_CONNECTION_NAME = exports.DATABASE_CONNECTION = void 0;
exports.DATABASE_CONNECTION = 'DATABASE_CONNECTION';
exports.MONGO_CONNECTION_NAME = 'MongoConnectionName';
exports.MONGO_MODULE_OPTIONS = 'MongoModuleOptions';
exports.DEFAULT_MONGO_CONNECTION_NAME = 'DefaultMongo';
exports.DEFAULT_MONGO_CLIENT_OPTIONS = {
    useNewUrlParser: true,
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createMongoProviders = void 0;
const mongo_util_1 = __webpack_require__(43);
function createMongoProviders(connectionName, collections = []) {
    return collections.map(collectionName => ({
        provide: mongo_util_1.getCollectionToken(collectionName),
        useFactory: (db) => db.collection(collectionName),
        inject: [mongo_util_1.getDbToken(connectionName)]
    }));
}
exports.createMongoProviders = createMongoProviders;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectCollection = exports.InjectDb = exports.InjectClient = void 0;
const common_1 = __webpack_require__(4);
const mongo_util_1 = __webpack_require__(43);
exports.InjectClient = (connectionName) => common_1.Inject(mongo_util_1.getClientToken(connectionName));
exports.InjectDb = (connectionName) => common_1.Inject(mongo_util_1.getDbToken(connectionName));
exports.InjectCollection = (collectionName) => common_1.Inject(mongo_util_1.getCollectionToken(collectionName));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit = void 0;
class Audit {
}
exports.Audit = Audit;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudRepository = void 0;
const mongodb_1 = __webpack_require__(42);
const mongo_decorators_1 = __webpack_require__(46);
const error_constants_1 = __webpack_require__(51);
const query_param_util_1 = __webpack_require__(52);
const common_1 = __webpack_require__(4);
const mongodb_codes_constants_1 = __webpack_require__(53);
let CrudRepository = class CrudRepository {
    constructor(db) {
        this.db = db;
        this.COLLECTION_NAME = null;
    }
    getCollection() {
        if (!this.collection) {
            this.collection = this.db.collection(this.COLLECTION_NAME);
            this.collection.createIndexes(this.INDEXES);
        }
        return this.collection;
    }
    async find(queryParams) {
        const params = query_param_util_1.getQueryParams(queryParams, {
            whitelist: this.WHITELIST,
        });
        console.log('paramsFINALfind', JSON.stringify(params.query));
        return await this.getCollection()
            .find(params.query)
            .sort(params.sort)
            .skip(params.skip)
            .limit(params.limit)
            .toArray();
    }
    async count(queryParams) {
        const params = query_param_util_1.getQueryParams(queryParams, {
            whitelist: this.WHITELIST,
            onlyQuery: true,
        });
        console.log('paramsFINALcount', JSON.stringify(params.query));
        return await this.getCollection()
            .find(params.query)
            .count();
    }
    async findOne(query) {
        return await this.db.collection(this.COLLECTION_NAME).findOne(query);
    }
    async findById(id, query) {
        if (!mongodb_1.ObjectID.isValid(id)) {
            throw new Error(error_constants_1.ERROR_INVALID_ID);
        }
        return await this.findOne(Object.assign({ _id: new mongodb_1.ObjectID(id) }, query));
    }
    async insertOne(obj) {
        try {
            const course = await this.db.collection(this.COLLECTION_NAME).insertOne(obj);
            return {
                recordCount: course.insertedCount,
                data: obj,
            };
        }
        catch (error) {
            if (error.code === mongodb_codes_constants_1.DUPLICATE_KEY_CODE) {
                throw new common_1.ConflictException(error_constants_1.ERROR_DUPLICATE_KEY);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async insertOneWithAudit(obj, createdBy) {
        obj = Object.assign(Object.assign({}, obj), { createdBy, createdAt: new Date() });
        return await this.insertOne(obj);
    }
    async insertMany(objs) {
        try {
            const course = await this.db.collection(this.COLLECTION_NAME).insertMany(objs);
            return {
                recordCount: course.insertedCount,
                data: objs,
            };
        }
        catch (error) {
            if (error.code === mongodb_codes_constants_1.DUPLICATE_KEY_CODE) {
                throw new common_1.ConflictException(error_constants_1.ERROR_DUPLICATE_KEY);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async insertManyWithAudit(objs, createdBy) {
        objs.forEach((obj) => {
            obj['createdBy'] = createdBy;
            obj['createdAt'] = new Date();
        });
        return await this.insertMany(objs);
    }
    async updateOne(query, obj) {
        try {
            const course = await this.db.collection(this.COLLECTION_NAME).updateOne(query, {
                $set: Object.assign({}, obj),
            });
            return {
                recordCount: course.modifiedCount,
                data: obj,
            };
        }
        catch (error) {
            if (error.code === mongodb_codes_constants_1.DUPLICATE_KEY_CODE) {
                throw new common_1.ConflictException(error_constants_1.ERROR_DUPLICATE_KEY);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async updateById(id, obj, query) {
        if (!mongodb_1.ObjectID.isValid(id)) {
            throw new Error(error_constants_1.ERROR_INVALID_ID);
        }
        return await this.updateOne(Object.assign({ _id: new mongodb_1.ObjectID(id) }, query), obj);
    }
    async updateByIdWithAudit(id, obj, updatedBy) {
        obj = Object.assign(Object.assign({}, obj), { updatedBy, updatedAt: new Date() });
        return await this.updateById(id, obj);
    }
    async deleteOne(query) {
        const course = await this.db.collection(this.COLLECTION_NAME).deleteOne(query);
        return {
            recordCount: course.deletedCount,
        };
    }
    async deleteById(id, query) {
        if (!mongodb_1.ObjectID.isValid(id)) {
            throw new common_1.BadRequestException(error_constants_1.ERROR_INVALID_ID);
        }
        return await this.deleteOne(Object.assign({ _id: new mongodb_1.ObjectID(id) }, query));
    }
};
CrudRepository = __decorate([
    __param(0, mongo_decorators_1.InjectDb()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongodb_1.Db !== "undefined" && mongodb_1.Db) === "function" ? _a : Object])
], CrudRepository);
exports.CrudRepository = CrudRepository;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_DUPLICATE_KEY = exports.ERROR_INVALID_ID = void 0;
exports.ERROR_INVALID_ID = 'Error, invalid ID';
exports.ERROR_DUPLICATE_KEY = {
    code: 'ERROR-DUPLICATE_KEY',
    message: 'Error, duplicate key'
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParams = void 0;
const KEY_QUERY = 'query';
const KEY_LIMIT = 'limit';
const KEY_SKIP = 'skip';
const KEY_SORT = 'sort';
const PAGE_NUMBER = 'pageNumber';
const PAGE_SIZE = 'pageSize';
const builtInCasters = {
    string: val => String(val),
    date: val => new Date(String(val)),
};
const parseValue = (value, key, options) => {
    const casters = Object.assign(Object.assign({}, builtInCasters), options.casters);
    const casting = value.match(/^(\w+)\((.*)\)$/);
    if (casting && casters[casting[1]]) {
        return casters[casting[1]](casting[2]);
    }
    const regexes = value.match(/\/.*?\/(?:[igm]*)/g);
    const parts = regexes || value.split(',');
    if (parts && parts.length > 1) {
        return parts.map(part => parseValue(part, key, options));
    }
    if (options.castParams &&
        options.castParams[key] &&
        casters[options.castParams[key]]) {
        return casters[options.castParams[key]](value);
    }
    const regex = value.match(/^\/(.*)\/([igm]*)$/);
    if (regex) {
        return new RegExp(regex[1], regex[2]);
    }
    if (value === 'true') {
        return true;
    }
    if (value === 'false') {
        return false;
    }
    if (value === 'null') {
        return null;
    }
    if (!Number.isNaN(Number(value)) && !/^0[0-9]+/.test(value)) {
        return Number(value);
    }
    const date = value.match(/^[12]\d{3}(-(0[1-9]|1[0-2])(-(0[1-9]|[12][0-9]|3[01]))?)(T| )?(([01][0-9]|2[0-3]):[0-5]\d(:[0-5]\d(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/);
    if (date) {
        return new Date(value);
    }
    return value;
};
const parseUnaries = (unaries, values = { plus: 1, minus: -1 }) => {
    const unariesAsArray = typeof unaries === 'string' ? unaries.split(',') : unaries;
    return unariesAsArray
        .map(unary => unary.match(/^(\+|-)?(.*)/))
        .reduce((result, [, val, key]) => {
        result[key.trim()] = val === '-' ? values.minus : values.plus;
        return result;
    }, {});
};
const parseJSONString = (string) => {
    try {
        return JSON.parse(string);
    }
    catch (err) {
        return false;
    }
};
const getSort = (sort) => (sort ? parseUnaries(sort) : undefined);
const getSkip = (pageNumber, pageSize) => {
    return pageNumber && pageSize
        ? (Number(pageNumber) - 1) * Number(pageSize)
        : 0;
};
const getLimit = (limit) => (limit ? Number(limit) : 0);
const parseQuery = query => {
    if (typeof query === 'object') {
        return query;
    }
    const jsonQuery = parseJSONString(query);
    if (jsonQuery) {
        return jsonQuery;
    }
    throw new Error(`Invalid JSON string: ${query}`);
};
const getQuery = (query) => {
    return query ? parseQuery(query) : {};
};
const getKey = (options, defaultKey) => {
    return options[`${defaultKey}Key`] || defaultKey;
};
const getValue = (params, options, defaultKey) => {
    const key = getKey(options, defaultKey);
    return params[key];
};
const generateQueryObject = (params, options) => {
    const paramsNew = Object.assign({}, params);
    [KEY_SORT, getKey(options, KEY_LIMIT), getKey(options, KEY_SKIP)].forEach(e => delete paramsNew[e]);
    params[KEY_QUERY] = paramsNew;
};
const aqp = (params, options) => {
    const result = {};
    if (!options.onlyQuery) {
        result[KEY_SORT] = getSort(getValue(params, options, KEY_SORT));
        result[KEY_LIMIT] = getLimit(getValue(params, options, KEY_LIMIT));
        result[KEY_SKIP] = getSkip(getValue(params, options, KEY_SKIP), getValue(params, options, KEY_LIMIT));
    }
    if (params.hasOwnProperty(KEY_QUERY)) {
        if (options.whitelist) {
            const paramsQuery = typeof params[KEY_QUERY] === 'string'
                ? JSON.parse(params[KEY_QUERY])
                : params[KEY_QUERY];
            Object.keys(paramsQuery).forEach((val) => {
                if (options.whitelist.indexOf(val) === -1) {
                    delete paramsQuery[val];
                }
            });
            params[KEY_QUERY] = paramsQuery;
        }
        result[KEY_QUERY] = getQuery(getValue(params, options, KEY_QUERY));
    }
    return result;
};
exports.getQueryParams = (queryParams, options) => {
    try {
        options = Object.assign(Object.assign({}, options), { limitKey: PAGE_SIZE, skipKey: PAGE_NUMBER });
        const params = Object.assign({}, typeof queryParams === 'string'
            ? parseJSONString(queryParams)
            : queryParams);
        return aqp(params, options);
    }
    catch (err) {
        console.error('errorrrr', err);
    }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DUPLICATE_KEY_CODE = void 0;
exports.DUPLICATE_KEY_CODE = 11000;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesModule = void 0;
const common_1 = __webpack_require__(4);
const states_service_1 = __webpack_require__(55);
const states_controller_1 = __webpack_require__(57);
const states_repository_1 = __webpack_require__(56);
const config_1 = __webpack_require__(5);
const database_config_1 = __webpack_require__(7);
const logger_1 = __webpack_require__(31);
const mongodb_util_1 = __webpack_require__(39);
let StatesModule = class StatesModule {
};
StatesModule = __decorate([
    common_1.Module({
        providers: [states_service_1.StatesService, states_repository_1.StatesRepository],
        controllers: [states_controller_1.StatesController],
        imports: [
            logger_1.LoggerModule,
            mongodb_util_1.MongodbUtilModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [database_config_1.default.KEY],
                useFactory: async (config) => ({
                    uri: config.url,
                    dbName: config.database,
                    clientOptions: { useNewUrlParser: true, useUnifiedTopology: true },
                }),
            }),
        ],
    })
], StatesModule);
exports.StatesModule = StatesModule;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

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
var StatesService_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesService = void 0;
const common_1 = __webpack_require__(4);
const logger_1 = __webpack_require__(31);
const states_repository_1 = __webpack_require__(56);
let StatesService = StatesService_1 = class StatesService {
    constructor(logger, statesRepository) {
        this.logger = logger;
        this.statesRepository = statesRepository;
        logger.setContext(StatesService_1.name);
    }
    async find(queryParams) {
        let response;
        const p1 = this.statesRepository.find(queryParams);
        const p2 = this.statesRepository.count(queryParams);
        await Promise.all([p1, p2]).then(values => {
            response = {
                data: values[0],
                meta: {
                    recordCount: values[1],
                },
            };
        });
        return response;
    }
    async findById(countryId, id) {
        const obj = await this.statesRepository.findOne({ countryId, id });
        return {
            data: obj,
        };
    }
    async count(queryParams) {
        const count = await this.statesRepository.count(queryParams);
        return {
            meta: {
                recordCount: count
            },
        };
    }
    async insert(countryId, body) {
        let responseRepository;
        if (Array.isArray(body)) {
            body.forEach((obj) => {
                obj.countryId = countryId;
            });
            responseRepository = await this.statesRepository.insertMany(body);
        }
        else {
            body.countryId = countryId;
            responseRepository = await this.statesRepository.insertOne(body);
        }
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async updateById(countryId, id, obj) {
        const responseRepository = await this.statesRepository.updateOne({ countryId, id }, obj);
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async deleteById(countryId, id) {
        const responseRepository = await this.statesRepository.deleteOne({ countryId, id });
        return {
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
};
StatesService = StatesService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object, typeof (_b = typeof states_repository_1.StatesRepository !== "undefined" && states_repository_1.StatesRepository) === "function" ? _b : Object])
], StatesService);
exports.StatesService = StatesService;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesRepository = void 0;
const common_1 = __webpack_require__(4);
const mongodb_util_1 = __webpack_require__(39);
let StatesRepository = class StatesRepository extends mongodb_util_1.CrudRepository {
    constructor() {
        super(...arguments);
        this.COLLECTION_NAME = 'states';
        this.INDEXES = [
            { key: { id: 1, countryId: 1 }, unique: true },
        ];
        this.WHITELIST = [
            '_id',
            'id',
            'name',
            'nationalCode',
            'countryId',
            'status',
        ];
    }
};
StatesRepository = __decorate([
    common_1.Injectable()
], StatesRepository);
exports.StatesRepository = StatesRepository;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const states_service_1 = __webpack_require__(55);
const api_util_1 = __webpack_require__(18);
const util_1 = __webpack_require__(20);
const interfaces_1 = __webpack_require__(58);
const PARAM_COUNTRY_ID = 'countryId';
const PATH = `countries/:${PARAM_COUNTRY_ID}/states`;
let StatesController = class StatesController {
    constructor(statesService) {
        this.statesService = statesService;
    }
    async find(countryId, queryParams) {
        console.log('queryParamsOld', queryParams);
        util_1.addParam(queryParams, { countryId });
        console.log('queryParamsNew', queryParams);
        return await this.statesService.find(queryParams);
    }
    async count(countryId, queryParams) {
        util_1.addParam(queryParams, { countryId });
        return await this.statesService.count(queryParams);
    }
    async findById(countryId, id) {
        return await this.statesService.findById(countryId, id);
    }
    async insert(countryId, body) {
        return await this.statesService.insert(countryId, body);
    }
    async updateById(countryId, id, body) {
        return await this.statesService.updateById(countryId, id, body);
    }
    async deleteById(countryId, id) {
        return await this.statesService.deleteById(countryId, id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], StatesController.prototype, "find", null);
__decorate([
    common_1.Get('/count'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], StatesController.prototype, "count", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], StatesController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Body(new api_util_1.JoiValidationPipe(interfaces_1.stateSchemaObjectAndArray))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], StatesController.prototype, "insert", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_f = typeof interfaces_1.State !== "undefined" && interfaces_1.State) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], StatesController.prototype, "updateById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], StatesController.prototype, "deleteById", null);
StatesController = __decorate([
    swagger_1.ApiTags('states'),
    common_1.Controller(PATH),
    __metadata("design:paramtypes", [typeof (_j = typeof states_service_1.StatesService !== "undefined" && states_service_1.StatesService) === "function" ? _j : Object])
], StatesController);
exports.StatesController = StatesController;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stateSchemaObjectAndArray = exports.stateSchemaArray = exports.stateSchemaObject = void 0;
const Joi = __webpack_require__(17);
exports.stateSchemaObject = Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
    nationalCode: Joi.string(),
    status: Joi.boolean(),
}).options({ stripUnknown: true });
exports.stateSchemaArray = Joi.array().items(exports.stateSchemaObject);
exports.stateSchemaObjectAndArray = Joi.alternatives().try(exports.stateSchemaObject, exports.stateSchemaArray);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesModule = void 0;
const common_1 = __webpack_require__(4);
const cities_controller_1 = __webpack_require__(61);
const cities_service_1 = __webpack_require__(62);
const cities_repository_1 = __webpack_require__(63);
const config_1 = __webpack_require__(5);
const database_config_1 = __webpack_require__(7);
const logger_1 = __webpack_require__(31);
const mongodb_util_1 = __webpack_require__(39);
let CitiesModule = class CitiesModule {
};
CitiesModule = __decorate([
    common_1.Module({
        controllers: [cities_controller_1.CitiesController],
        providers: [cities_service_1.CitiesService, cities_repository_1.CitiesRepository],
        imports: [
            logger_1.LoggerModule,
            mongodb_util_1.MongodbUtilModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [database_config_1.default.KEY],
                useFactory: async (config) => ({
                    uri: config.url,
                    dbName: config.database,
                    clientOptions: { useNewUrlParser: true, useUnifiedTopology: true },
                }),
            }),
        ],
    })
], CitiesModule);
exports.CitiesModule = CitiesModule;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const cities_service_1 = __webpack_require__(62);
const api_util_1 = __webpack_require__(18);
const util_1 = __webpack_require__(20);
const interfaces_1 = __webpack_require__(64);
const PARAM_COUNTRY_ID = 'countryId';
const PARAM_STATE_ID = 'stateId';
const PATH = `countries/:${PARAM_COUNTRY_ID}/states/:${PARAM_STATE_ID}/cities`;
let CitiesController = class CitiesController {
    constructor(citiesService) {
        this.citiesService = citiesService;
    }
    async find(countryId, stateId, queryParams) {
        console.log('queryParamsOld', queryParams);
        util_1.addParam(queryParams, { stateId });
        console.log('queryParamsNew', queryParams);
        return await this.citiesService.find(queryParams);
    }
    async count(countryId, stateId, queryParams) {
        util_1.addParam(queryParams, { countryId });
        return await this.citiesService.count(queryParams);
    }
    async findById(countryId, stateId, id) {
        return await this.citiesService.findById(countryId, stateId, id);
    }
    async insert(countryId, stateId, body) {
        return await this.citiesService.insert(countryId, stateId, body);
    }
    async updateById(countryId, stateId, id, body) {
        return await this.citiesService.updateById(countryId, stateId, id, body);
    }
    async deleteById(countryId, stateId, id) {
        return await this.citiesService.deleteById(countryId, stateId, id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CitiesController.prototype, "find", null);
__decorate([
    common_1.Get('/count'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CitiesController.prototype, "count", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CitiesController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Body(new api_util_1.JoiValidationPipe(interfaces_1.citySchemaObjectAndArray))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CitiesController.prototype, "insert", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Param('id')),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, typeof (_f = typeof interfaces_1.City !== "undefined" && interfaces_1.City) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CitiesController.prototype, "updateById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param(PARAM_COUNTRY_ID)),
    __param(1, common_1.Param(PARAM_STATE_ID)),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CitiesController.prototype, "deleteById", null);
CitiesController = __decorate([
    swagger_1.ApiTags('cities'),
    common_1.Controller(PATH),
    __metadata("design:paramtypes", [typeof (_j = typeof cities_service_1.CitiesService !== "undefined" && cities_service_1.CitiesService) === "function" ? _j : Object])
], CitiesController);
exports.CitiesController = CitiesController;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

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
var CitiesService_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesService = void 0;
const common_1 = __webpack_require__(4);
const logger_1 = __webpack_require__(31);
const cities_repository_1 = __webpack_require__(63);
let CitiesService = CitiesService_1 = class CitiesService {
    constructor(logger, citiesRepository) {
        this.logger = logger;
        this.citiesRepository = citiesRepository;
        logger.setContext(CitiesService_1.name);
    }
    async find(queryParams) {
        let response;
        const p1 = this.citiesRepository.find(queryParams);
        const p2 = this.citiesRepository.count(queryParams);
        await Promise.all([p1, p2]).then(values => {
            response = {
                data: values[0],
                meta: {
                    recordCount: values[1],
                },
            };
        });
        return response;
    }
    async findById(countryId, stateId, id) {
        const obj = await this.citiesRepository.findOne({ countryId, stateId, id });
        return {
            data: obj,
        };
    }
    async count(queryParams) {
        const count = await this.citiesRepository.count(queryParams);
        return {
            meta: {
                recordCount: count
            },
        };
    }
    async insert(countryId, stateId, body) {
        let responseRepository;
        if (Array.isArray(body)) {
            body.forEach((obj) => {
                obj.countryId = countryId;
                obj.stateId = stateId;
            });
            responseRepository = await this.citiesRepository.insertMany(body);
        }
        else {
            body.countryId = countryId;
            body.stateId = stateId;
            responseRepository = await this.citiesRepository.insertOne(body);
        }
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async updateById(countryId, stateId, id, obj) {
        const responseRepository = await this.citiesRepository.updateOne({ countryId, stateId, id }, obj);
        return {
            data: responseRepository.data,
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
    async deleteById(countryId, stateId, id) {
        const responseRepository = await this.citiesRepository.deleteOne({ countryId, stateId, id });
        return {
            meta: {
                recordCount: responseRepository.recordCount,
            },
        };
    }
};
CitiesService = CitiesService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object, typeof (_b = typeof cities_repository_1.CitiesRepository !== "undefined" && cities_repository_1.CitiesRepository) === "function" ? _b : Object])
], CitiesService);
exports.CitiesService = CitiesService;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesRepository = void 0;
const common_1 = __webpack_require__(4);
const mongodb_util_1 = __webpack_require__(39);
let CitiesRepository = class CitiesRepository extends mongodb_util_1.CrudRepository {
    constructor() {
        super(...arguments);
        this.COLLECTION_NAME = 'cities';
        this.INDEXES = [
            { key: { id: 1, stateId: 1, countryId: 1 }, unique: true },
        ];
        this.WHITELIST = [
            '_id',
            'id',
            'name',
            'nationalCode',
            'stateId',
            'countryId',
            'status',
        ];
    }
};
CitiesRepository = __decorate([
    common_1.Injectable()
], CitiesRepository);
exports.CitiesRepository = CitiesRepository;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchemaObjectAndArray = exports.citySchemaArray = exports.citySchemaObject = void 0;
const Joi = __webpack_require__(17);
exports.citySchemaObject = Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
    nationalCode: Joi.string(),
    status: Joi.boolean(),
}).options({ stripUnknown: true });
exports.citySchemaArray = Joi.array().items(exports.citySchemaObject);
exports.citySchemaObjectAndArray = Joi.alternatives().try(exports.citySchemaObject, exports.citySchemaArray);


/***/ }),
/* 66 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"nestjs-base\",\"version\":\"1.0.0\",\"description\":\"\",\"author\":\"\",\"private\":true,\"license\":\"UNLICENSED\",\"scripts\":{\"prebuild\":\"rimraf dist\",\"build\":\"nest build\",\"format\":\"prettier --write \\\"apps/**/*.ts\\\" \\\"libs/**/*.ts\\\"\",\"start\":\"nest start\",\"start:dev\":\"nest start --watch\",\"start:debug\":\"nest start --debug --watch\",\"start:prod\":\"node dist/main\",\"lint\":\"eslint \\\"{src,apps,libs,test}/**/*.ts\\\" --fix\",\"test\":\"jest\",\"test:watch\":\"jest --watch\",\"test:cov\":\"jest --coverage\",\"test:debug\":\"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand\",\"test:e2e\":\"jest --config ./apps/nestjs-base/test/jest-e2e.json\"},\"dependencies\":{\"@hapi/joi\":\"^17.1.1\",\"@nestjs/common\":\"^7.0.0\",\"@nestjs/config\":\"^0.5.0\",\"@nestjs/core\":\"^7.0.0\",\"@nestjs/platform-express\":\"^7.0.0\",\"@nestjs/swagger\":\"^4.5.12\",\"chalk\":\"^4.1.0\",\"class-transformer\":\"^0.2.3\",\"class-validator\":\"^0.12.2\",\"date-fns\":\"^2.14.0\",\"mongodb\":\"^3.5.9\",\"pretty-error\":\"^2.1.1\",\"query-string\":\"^6.13.1\",\"reflect-metadata\":\"^0.1.13\",\"rimraf\":\"^3.0.2\",\"rxjs\":\"^6.5.4\",\"swagger-ui-express\":\"^4.1.4\"},\"devDependencies\":{\"@nestjs/cli\":\"^7.0.0\",\"@nestjs/schematics\":\"^7.0.0\",\"@nestjs/testing\":\"^7.0.0\",\"@types/express\":\"^4.17.3\",\"@types/hapi__joi\":\"^17.1.3\",\"@types/jest\":\"25.2.3\",\"@types/mongodb\":\"^3.5.25\",\"@types/node\":\"^13.9.1\",\"@types/supertest\":\"^2.0.8\",\"@typescript-eslint/eslint-plugin\":\"3.0.2\",\"@typescript-eslint/parser\":\"3.0.2\",\"eslint\":\"7.1.0\",\"eslint-config-prettier\":\"^6.10.0\",\"eslint-plugin-import\":\"^2.20.1\",\"jest\":\"26.0.1\",\"prettier\":\"^1.19.1\",\"supertest\":\"^4.0.2\",\"ts-jest\":\"26.1.0\",\"ts-loader\":\"^6.2.1\",\"ts-node\":\"^8.6.2\",\"tsconfig-paths\":\"^3.9.0\",\"typescript\":\"^3.7.4\"},\"jest\":{\"moduleFileExtensions\":[\"js\",\"json\",\"ts\"],\"rootDir\":\".\",\"testRegex\":\".spec.ts$\",\"transform\":{\"^.+\\\\.(t|j)s$\":\"ts-jest\"},\"coverageDirectory\":\"./coverage\",\"testEnvironment\":\"node\",\"roots\":[\"<rootDir>/apps/\",\"<rootDir>/libs/\"],\"moduleNameMapper\":{\"@app/env-util/(.*)\":\"<rootDir>/libs/env-util/src/$1\",\"@app/env-util\":\"<rootDir>/libs/env-util/src\",\"@app/config-util/(.*)\":\"<rootDir>/libs/config-util/src/$1\",\"@app/config-util\":\"<rootDir>/libs/config-util/src\",\"@util/logger/(.*)\":\"<rootDir>/libs/logger/src/$1\",\"@util/logger\":\"<rootDir>/libs/logger/src\",\"@util/api-util/(.*)\":\"<rootDir>/libs/api-util/src/$1\",\"@util/api-util\":\"<rootDir>/libs/api-util/src\",\"@util/mongodb-util/(.*)\":\"<rootDir>/libs/mongodb-util/src/$1\",\"@util/mongodb-util\":\"<rootDir>/libs/mongodb-util/src\"}}}");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(4);
const logger_1 = __webpack_require__(31);
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        this.logger.error('error', exception.stack);
        response
            .status(status)
            .json(exception.getResponse());
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ })
/******/ ]);