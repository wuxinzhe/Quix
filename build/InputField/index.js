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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(149)
	__webpack_require__(137)
	__webpack_require__(121)
	__webpack_require__(117)
	__webpack_require__(23)
	var $app_template$ = __webpack_require__(62)
	var $app_style$ = __webpack_require__(63)
	var $app_script$ = __webpack_require__(64)
	
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

/***/ 18:
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

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(24)
	var $app_style$ = __webpack_require__(25)
	var $app_script$ = __webpack_require__(26)
	
	$app_define$('@app-component/example-page', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 24:
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

/***/ 25:
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

/***/ 26:
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

/***/ 62:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "attr": {},
	  "children": [
	    {
	      "type": "example-page",
	      "attr": {
	        "title": "InputField",
	        "name": "文本输入"
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
	                "input": "onInput",
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
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = {
	  ".code-link": {
	    "color": "#409185"
	  }
	}

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      head: '表单',
	      username: '',
	      password: '',
	      code: ''
	    };
	  },
	  onInput: function onInput(_ref) {
	    var value = _ref.detail.value;
	
	    this.username = value;
	  },
	  onClear: function onClear() {}
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

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(118)
	var $app_style$ = __webpack_require__(119)
	var $app_script$ = __webpack_require__(120)
	
	$app_define$('@app-component/white-space', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 118:
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

/***/ 119:
/***/ function(module, exports) {

	module.exports = {
	  ".white-space": {
	    "display": "flex",
	    "width": "100%"
	  }
	}

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initProps = __webpack_require__(18);
	
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

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(122)
	var $app_style$ = __webpack_require__(123)
	var $app_script$ = __webpack_require__(124)
	
	$app_define$('@app-component/container', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 122:
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

/***/ 123:
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

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(18);
	
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

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(138)
	var $app_style$ = __webpack_require__(139)
	var $app_script$ = __webpack_require__(140)
	
	$app_define$('@app-component/cell-box', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 138:
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

/***/ 139:
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

/***/ 140:
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

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(150)
	var $app_style$ = __webpack_require__(151)
	var $app_script$ = __webpack_require__(152)
	
	$app_define$('@app-component/input-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 150:
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

/***/ 151:
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

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(18);
	
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

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map