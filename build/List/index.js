(function(){
      
  var createPageHandler = function() {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66)
	__webpack_require__(51)
	__webpack_require__(15)
	__webpack_require__(10)
	__webpack_require__(73)
	__webpack_require__(77)
	__webpack_require__(81)
	__webpack_require__(85)
	__webpack_require__(27)
	var $app_template$ = __webpack_require__(89)
	var $app_style$ = __webpack_require__(90)
	var $app_script$ = __webpack_require__(91)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/white-space', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "white-space"
	  ],
	  "style": {
	    "height": function () {return (this.height) + 'px'}
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  ".white-space": {
	    "display": "flex",
	    "width": "100%"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	    props: ['size'],
	    propsDefault: {
	        size: 'sm'
	    },
	    data: function data() {
	        return {
	            height: 40
	        };
	    },
	    onInit: function onInit() {
	        initProps(this);
	        switch (this.size) {
	            case 'sm':
	                this.height = 30;
	                break;
	            case 'md':
	                this.height = 50;
	                break;
	            case 'lg':
	                this.height = 70;
	                break;
	        }
	    }
	};}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function (target) {
	  if (target._options.props && target._options.props.length) {
	    const { propsDefault } = target._options
	    target._options.props.forEach(prop => {
	      if (propsDefault.hasOwnProperty(prop)) {
	        target[prop] = target[prop] || propsDefault[prop]
	      }
	    })
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(16)
	var $app_style$ = __webpack_require__(17)
	var $app_script$ = __webpack_require__(18)
	
	$app_define$('@app-component/container', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "slot",
	      "attr": {}
	    }
	  ]
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "display": "flex",
	    "width": "100%",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "justifyContent": "flex-start"
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['bgColor'],
	  propsDefault: {
	    bgColor: '#faf7ff'
	  },
	  onInit: function onInit() {
	    initProps(this);
	  }
	};}

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(28)
	var $app_style$ = __webpack_require__(29)
	var $app_script$ = __webpack_require__(30)
	
	$app_define$('@app-component/example-page', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "page-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "page-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.title}
	          },
	          "classList": [
	            "title"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "name"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.name}
	          }
	        }
	      ]
	    },
	    {
	      "type": "slot",
	      "attr": {}
	    }
	  ]
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  ".page-container": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "width": "100%",
	    "backgroundColor": "#faf8fe"
	  },
	  ".page-header": {
	    "display": "flex",
	    "alignItems": "center",
	    "height": "100px",
	    "width": "100%",
	    "lineHeight": "100px",
	    "justifyContent": "center"
	  },
	  ".title": {
	    "paddingTop": "10px",
	    "paddingRight": "50px",
	    "paddingBottom": "10px",
	    "paddingLeft": "50px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dcdfe6",
	    "borderRightColor": "#dcdfe6",
	    "borderBottomColor": "#dcdfe6",
	    "borderLeftColor": "#dcdfe6",
	    "borderBottomWidth": "1px",
	    "fontSize": "50px",
	    "color": "#303133"
	  },
	  ".name": {
	    "textAlign": "center",
	    "fontSize": "25px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "marginBottom": "30px",
	    "color": "#909399"
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['name', 'title'],
	  data: function data() {
	    return {};
	  }
	};}

/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(52)
	var $app_style$ = __webpack_require__(53)
	var $app_script$ = __webpack_require__(54)
	
	$app_define$('@app-component/cell-box', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "cell-box"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.head}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "slot",
	          "attr": {}
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {
	  ".cell-box": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "width": "100%"
	  },
	  ".title": {
	    "width": "100%",
	    "color": "#909399",
	    "fontSize": "25px",
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px",
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px"
	  },
	  ".content": {
	    "display": "flex",
	    "flexDirection": "column",
	    "width": "100%",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd",
	    "borderTopWidth": "1px",
	    "borderBottomWidth": "1px"
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['head'],
	  data: function data() {
	    return {};
	  }
	};}

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(67)
	var $app_style$ = __webpack_require__(68)
	var $app_script$ = __webpack_require__(69)
	
	$app_define$('@app-component/input-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "input-field",
	    "list-field"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "list-content"
	      ],
	      "style": {
	        "borderTopWidth": function () {return (this.first?0:1) + 'px'}
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.label}
	          },
	          "classList": [
	            "list-label",
	            "input-label"
	          ],
	          "shown": function () {return this.label}
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": function () {return this.type},
	            "placeholder": function () {return this.placeholder},
	            "value": function () {return this.inputValue}
	          },
	          "classList": [
	            "input-native"
	          ],
	          "events": {
	            "change": "onInput"
	          }
	        },
	        {
	          "type": "slot",
	          "attr": {}
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "clear-box"
	          ],
	          "shown": function () {return this.clearable},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "input-clear"
	              ],
	              "shown": function () {return this.clear},
	              "events": {
	                "click": "onClear"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "×"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-field": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".list-content": {
	    "display": "flex",
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "fontSize": "30px",
	    "paddingRight": "20px",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".list-label": {
	    "marginRight": "20px",
	    "fontSize": "35px"
	  },
	  ".input-label": {
	    "width": "150px"
	  },
	  ".input-native": {
	    "flex": 1,
	    "fontSize": "30px"
	  },
	  ".clear-box": {
	    "height": "40px",
	    "width": "40px"
	  },
	  ".input-clear": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "40px",
	    "width": "40px",
	    "borderRadius": "25px",
	    "backgroundColor": "#dddddd"
	  },
	  ".input-clear > text": {
	    "width": "100%",
	    "textAlign": "center",
	    "fontSize": "35px",
	    "color": "#ffffff",
	    "marginTop": "-5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "input-clear"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['first', 'label', 'placeholder', 'type', 'value', 'clearable'],
	  propsDefault: {
	    first: false,
	    placeholder: '请输入...',
	    type: 'text',
	    value: '',
	    clearable: false
	  },
	  data: function data() {
	    return {
	      clear: false,
	      inputValue: ''
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.inputValue = this.value;
	  },
	  onInput: function onInput(_ref) {
	    var value = _ref.value;
	
	    this.clear = value !== '';
	    this.inputValue = value;
	    this.$dispatch('input', { value: value });
	  },
	  onClear: function onClear() {
	    this.clear = false;
	    this.inputValue = '';
	    this.$dispatch('clear', { value: this.value });
	  }
	};}

/***/ },
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(74)
	var $app_style$ = __webpack_require__(75)
	var $app_script$ = __webpack_require__(76)
	
	$app_define$('@app-component/switch-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "switch-field",
	    "list-field"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "list-content"
	      ],
	      "style": {
	        "borderTopWidth": function () {return (this.first?0:1) + 'px'}
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.label}
	          },
	          "classList": [
	            "list-label",
	            "input-label"
	          ],
	          "shown": function () {return this.label}
	        },
	        {
	          "type": "switch",
	          "attr": {
	            "checked": function () {return this.checked}
	          },
	          "events": {
	            "change": "onChange"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-field": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".list-content": {
	    "display": "flex",
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "fontSize": "30px",
	    "paddingRight": "20px",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".list-label": {
	    "marginRight": "20px",
	    "fontSize": "35px"
	  },
	  ".input-label": {
	    "width": "150px"
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['first', 'label', 'value'],
	  propsDefault: {
	    first: false,
	    value: false
	  },
	  data: function data() {
	    return {
	      checked: false
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.checked = this.value;
	  },
	  onChange: function onChange(_ref) {
	    var checked = _ref.checked;
	
	    this.checked = checked;
	    this.$dispatch('change', { value: checked });
	  }
	};}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(78)
	var $app_style$ = __webpack_require__(79)
	var $app_script$ = __webpack_require__(80)
	
	$app_define$('@app-component/slider-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "slider-field",
	    "list-field"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "list-content"
	      ],
	      "style": {
	        "borderTopWidth": function () {return (this.first?0:1) + 'px'}
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.label}
	          },
	          "classList": [
	            "list-label",
	            "input-label"
	          ],
	          "shown": function () {return this.label}
	        },
	        {
	          "type": "slider",
	          "attr": {
	            "min": function () {return this.min},
	            "max": function () {return this.max},
	            "value": function () {return this.sliderValue},
	            "step": function () {return this.step}
	          },
	          "classList": [
	            "slider-native"
	          ],
	          "events": {
	            "change": "onChange"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.sliderValue}
	          },
	          "shown": function () {return this.showValue}
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-field": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".list-content": {
	    "display": "flex",
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "fontSize": "30px",
	    "paddingRight": "20px",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".list-label": {
	    "marginRight": "20px",
	    "fontSize": "35px"
	  },
	  ".input-label": {
	    "width": "150px"
	  },
	  ".slider-native": {
	    "flex": 1,
	    "height": "100%",
	    "selectedColor": "#409185",
	    "color": "#dddddd"
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['label', 'first', 'value', 'min', 'max', 'step', 'showValue'],
	  propsDefault: {
	    first: false,
	    value: 50,
	    min: 0,
	    max: 100,
	    step: 1,
	    showValue: false
	  },
	  data: function data() {
	    return {
	      sliderValue: 0
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.sliderValue = this.value;
	  },
	  onChange: function onChange(_ref) {
	    var progress = _ref.progress;
	
	    this.sliderValue = progress;
	    this.$dispatch('change', { value: progress });
	  }
	};}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(82)
	var $app_style$ = __webpack_require__(83)
	var $app_script$ = __webpack_require__(84)
	
	$app_define$('@app-component/radio-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "radio-field",
	    "list-field"
	  ],
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": {
	        "exp": function () {return this.options},
	        "key": "idx",
	        "value": "option"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "list-content"
	          ],
	          "style": {
	            "borderTopWidth": function () {return (this.first&&this.idx===0?0:1) + 'px'}
	          },
	          "events": {
	            "click": function (evt) {this.onSelect(this.option.id,evt)}
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "list-label"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.option.label}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "selected-box"
	              ],
	              "shown": function () {return this.selectedValue==this.option.id},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "selected-checked"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "○"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-field": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".list-content": {
	    "display": "flex",
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "fontSize": "30px",
	    "paddingRight": "20px",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".list-label": {
	    "marginRight": "20px",
	    "fontSize": "35px"
	  },
	  ".input-label": {
	    "width": "150px"
	  },
	  ".radio-field": {
	    "flexDirection": "column"
	  },
	  ".selected-box": {
	    "height": "40px",
	    "width": "40px"
	  },
	  ".selected-checked": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "40px",
	    "width": "40px",
	    "borderRadius": "25px",
	    "backgroundColor": "#409185"
	  },
	  ".selected-checked > text": {
	    "width": "100%",
	    "textAlign": "center",
	    "fontSize": "27px",
	    "color": "#ffffff",
	    "fontWeight": "bold",
	    "marginTop": "-2px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "selected-checked"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['options', 'first', 'value'],
	  propsDefault: {
	    first: false,
	    options: [{ id: 1, label: '是' }, { id: 2, label: '否' }],
	    value: ''
	  },
	  data: function data() {
	    return {
	      selectedValue: ''
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.selectedValue = this.value;
	  },
	  onSelect: function onSelect(id) {
	    this.selectedValue = id;
	    this.$dispatch('change', { value: this.selectedValue });
	  }
	};}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(86)
	var $app_style$ = __webpack_require__(87)
	var $app_script$ = __webpack_require__(88)
	
	$app_define$('@app-component/textarea-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "textarea-field",
	    "list-field"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "list-content"
	      ],
	      "style": {
	        "borderTopWidth": function () {return (this.first?0:1) + 'px'}
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.label}
	          },
	          "classList": [
	            "list-label",
	            "input-label"
	          ],
	          "shown": function () {return this.label}
	        },
	        {
	          "type": "textarea",
	          "attr": {
	            "placeholder": function () {return this.placeholder},
	            "value": function () {return this.textareaValue}
	          },
	          "classList": [
	            "textarea-native"
	          ],
	          "events": {
	            "change": "onChange"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-field": {
	    "display": "flex",
	    "width": "100%",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".list-content": {
	    "display": "flex",
	    "width": "100%",
	    "justifyContent": "space-between",
	    "alignItems": "flex-start",
	    "fontSize": "30px",
	    "paddingRight": "0px",
	    "height": "200px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd",
	    "paddingTop": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px"
	  },
	  ".list-label": {
	    "marginRight": "20px",
	    "fontSize": "35px"
	  },
	  ".input-label": {
	    "width": "150px"
	  },
	  ".textarea-field": {
	    "alignItems": "flex-start"
	  },
	  ".textarea-native": {
	    "flex": 1,
	    "height": "100%",
	    "fontSize": "30px"
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(14);
	
	exports.default = {
	  props: ['first', 'label', 'placeholder', 'value'],
	  propsDefault: {
	    first: false,
	    placeholder: '请输入...',
	    value: ''
	  },
	  data: function data() {
	    return {
	      textareaValue: ''
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.textareaValue = this.value;
	  },
	  onChange: function onChange(_ref) {
	    var text = _ref.text;
	
	    this.textareaValue = text;
	    this.$dispatch('input', { value: text });
	  }
	};}

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "attr": {},
	  "children": [
	    {
	      "type": "example-page",
	      "attr": {
	        "title": "List",
	        "name": "多功能列表"
	      },
	      "children": [
	        {
	          "type": "white-space",
	          "attr": {}
	        },
	        {
	          "type": "cell-box",
	          "attr": {
	            "head": function () {return this.head}
	          },
	          "children": [
	            {
	              "type": "input-field",
	              "attr": {
	                "label": "用户名",
	                "first": "true",
	                "value": function () {return this.username}
	              },
	              "events": {
	                "clear": "onClear"
	              }
	            },
	            {
	              "type": "input-field",
	              "attr": {
	                "label": "密码",
	                "type": "password",
	                "value": function () {return this.password},
	                "clearable": "true"
	              }
	            },
	            {
	              "type": "input-field",
	              "attr": {
	                "label": "验证码",
	                "type": "number",
	                "value": function () {return this.code}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "获取验证码"
	                  },
	                  "classList": [
	                    "code-link"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "switch-field",
	              "attr": {
	                "label": "是否打开",
	                "value": function () {return this.checked}
	              }
	            },
	            {
	              "type": "slider-field",
	              "attr": {
	                "label": "音量",
	                "value": function () {return this.count},
	                "showValue": "true"
	              }
	            },
	            {
	              "type": "textarea-field",
	              "attr": {
	                "label": "多行文本"
	              }
	            }
	          ]
	        },
	        {
	          "type": "white-space",
	          "attr": {}
	        },
	        {
	          "type": "cell-box",
	          "attr": {
	            "head": "单选"
	          },
	          "children": [
	            {
	              "type": "radio-field",
	              "attr": {
	                "first": "true",
	                "value": "1",
	                "options": function () {return this.options}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
	  ".code-link": {
	    "color": "#409185"
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      head: '多功能列表',
	      username: '张三',
	      password: '123456',
	      code: '',
	      checked: true,
	      count: 60,
	      options: [{
	        id: 1,
	        label: 'Yes'
	      }, {
	        id: 2,
	        label: 'No'
	      }]
	    };
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map