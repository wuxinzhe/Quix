(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(131)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};
	(exports.default || module.exports).manifest = {"package":"com.showings.quix","name":"Quix","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Index","pages":{"Index":{"component":"index"},"Flex":{"component":"index"},"InputField":{"component":"index"},"SwitchField":{"component":"index"},"RadioField":{"component":"index"},"SelectField":{"component":"index"},"Modal":{"component":"index"},"SliderField":{"component":"index"},"List":{"component":"index"},"WindBlank":{"component":"index"},"WhiteSpace":{"component":"index"},"Avatar":{"component":"index"},"Container":{"component":"index"},"TextareaField":{"component":"index"},"Divider":{"component":"index"},"Mask":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#000","titleBarTextColor":"#fff","menu":true,"pages":{"Index":{"titleBarText":"Quix","menu":false},"Flex":{"titleBarText":"Flex","menu":false},"Container":{"titleBarText":"Container","menu":false},"InputField":{"titleBarText":"InputField","menu":false},"SwitchField":{"titleBarText":"SwitchField","menu":false},"RadioField":{"titleBarText":"RadioField","menu":false},"SelectField":{"titleBarText":"SelectField","menu":false},"Modal":{"titleBarText":"Modal","menu":false},"SliderField":{"titleBarText":"SliderField","menu":false},"List":{"titleBarText":"List","menu":false},"WindBlank":{"titleBarText":"WindBlank","menu":false},"WhiteSpace":{"titleBarText":"WhiteSpace","menu":false},"Avatar":{"titleBarText":"Avatar","menu":false},"TextareaField":{"titleBarText":"TextareaField","menu":false},"Divider":{"titleBarText":"Divider","menu":false},"Mask":{"titleBarText":"Mask","menu":false}}}};
	}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.showings.quix","name":"Quix","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Index","pages":{"Index":{"component":"index"},"Flex":{"component":"index"},"InputField":{"component":"index"},"SwitchField":{"component":"index"},"RadioField":{"component":"index"},"SelectField":{"component":"index"},"Modal":{"component":"index"},"SliderField":{"component":"index"},"List":{"component":"index"},"WindBlank":{"component":"index"},"WhiteSpace":{"component":"index"},"Avatar":{"component":"index"},"Container":{"component":"index"},"TextareaField":{"component":"index"},"Divider":{"component":"index"},"Mask":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#000","titleBarTextColor":"#fff","menu":true,"pages":{"Index":{"titleBarText":"Quix","menu":false},"Flex":{"titleBarText":"Flex","menu":false},"Container":{"titleBarText":"Container","menu":false},"InputField":{"titleBarText":"InputField","menu":false},"SwitchField":{"titleBarText":"SwitchField","menu":false},"RadioField":{"titleBarText":"RadioField","menu":false},"SelectField":{"titleBarText":"SelectField","menu":false},"Modal":{"titleBarText":"Modal","menu":false},"SliderField":{"titleBarText":"SliderField","menu":false},"List":{"titleBarText":"List","menu":false},"WindBlank":{"titleBarText":"WindBlank","menu":false},"WhiteSpace":{"titleBarText":"WhiteSpace","menu":false},"Avatar":{"titleBarText":"Avatar","menu":false},"TextareaField":{"titleBarText":"TextareaField","menu":false},"Divider":{"titleBarText":"Divider","menu":false},"Mask":{"titleBarText":"Mask","menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map