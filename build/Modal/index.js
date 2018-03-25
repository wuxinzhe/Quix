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

	__webpack_require__(169)
	__webpack_require__(153)
	__webpack_require__(137)
	__webpack_require__(121)
	__webpack_require__(117)
	__webpack_require__(141)
	__webpack_require__(23)
	var $app_template$ = __webpack_require__(88)
	var $app_style$ = __webpack_require__(89)
	var $app_script$ = __webpack_require__(90)
	
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

/***/ 88:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "attr": {},
	  "children": [
	    {
	      "type": "example-page",
	      "attr": {
	        "title": "Model",
	        "name": "提示窗口"
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
	              "type": "cell",
	              "attr": {
	                "label": "大吉大利",
	                "extra": function () {return this.extra},
	                "first": "true"
	              },
	              "events": {
	                "click": "onOpen"
	              }
	            }
	          ]
	        },
	        {
	          "type": "modal",
	          "attr": {
	            "visible": function () {return this.visible},
	            "message": function () {return this.message},
	            "footerList": function () {return this.footer}
	          },
	          "events": {
	            "close": "onClose",
	            "click": "onClick"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      head: '点击打开',
	      visible: false,
	      extra: 'Close',
	      message: '今晚吃鸡？',
	      footer: [{
	        label: '不吃'
	      }, {
	        label: '吃',
	        color: '#409185'
	      }]
	    };
	  },
	  onOpen: function onOpen() {
	    this.visible = true;
	    this.extra = 'Open';
	  },
	  onClose: function onClose() {
	    this.visible = false;
	    this.extra = 'Close';
	  },
	  onClick: function onClick(_ref) {
	    var idx = _ref.detail.idx;
	
	    console.log(idx);
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

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(142)
	var $app_style$ = __webpack_require__(143)
	var $app_script$ = __webpack_require__(144)
	
	$app_define$('@app-component/cell', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 142:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "cell",
	    "list-field"
	  ],
	  "events": {
	    "click": "onClick"
	  },
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
	            "list-label"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.extra}
	          },
	          "classList": [
	            "extra"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "〉"
	          },
	          "shown": function () {return this.arrow}
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 143:
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
	  ".extra": {
	    "color": "#c0c4cc"
	  }
	}

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initProps = __webpack_require__(18);
	exports.default = {
	  props: ['extra', 'arrow', 'label', 'first', 'page'],
	  propsDefault: {
	    arrow: false,
	    first: false
	  },
	  data: function data() {
	    return {};
	  },
	  onInit: function onInit() {
	    initProps(this);
	  },
	  onClick: function onClick() {
	    if (this.page) {
	      _system2.default.push({ uri: '/' + this.page });
	    }
	    this.$dispatch('click');
	  }
	};}

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(154)
	var $app_style$ = __webpack_require__(155)
	var $app_script$ = __webpack_require__(156)
	
	$app_define$('@app-component/switch-field', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 154:
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

/***/ 155:
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

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(18);
	
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

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(170)
	var $app_style$ = __webpack_require__(171)
	var $app_script$ = __webpack_require__(172)
	
	$app_define$('@app-component/modal', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 170:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "stack",
	      "attr": {},
	      "shown": function () {return this.visible},
	      "classList": [
	        "modal"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "backdrop"
	          ],
	          "style": {
	            "opacity": function () {return this.opacity}
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": function () {return ['modal-container', this.modalVisible?'fly-in':'fly-out']},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "modal-title"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "modal-body"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.message}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "modal-footer"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "footer-btn"
	                  ],
	                  "repeat": {
	                    "exp": function () {return this.footerList},
	                    "key": "idx",
	                    "value": "footer"
	                  },
	                  "events": {
	                    "click": function (evt) {this.onClick(this.idx,evt)}
	                  },
	                  "style": {
	                    "borderLeftWidth": function () {return (this.idx===0?0:1) + 'px'}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.footer.label}
	                      },
	                      "style": {
	                        "color": function () {return this.footer.color?this.footer.color:'#909399'}
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

/***/ 171:
/***/ function(module, exports) {

	module.exports = {
	  ".fly-in": {
	    "animationName": "flyIn",
	    "animationDuration": "500ms",
	    "animationTimingFunction": "ease-out"
	  },
	  ".fly-out": {
	    "animationName": "flyOut",
	    "animationDuration": "500ms",
	    "animationTimingFunction": "ease-in"
	  },
	  "@KEYFRAMES": {
	    "flyIn": [
	      {
	        "opacity": 0,
	        "transform": "{\"translateY\":\"-3000px\"}",
	        "time": 0
	      },
	      {
	        "opacity": 1,
	        "transform": "{\"translateY\":\"1px\"}",
	        "time": 100
	      }
	    ],
	    "flyOut": [
	      {
	        "opacity": 1,
	        "transform": "{\"translateY\":\"1px\"}",
	        "time": 0
	      },
	      {
	        "opacity": 0,
	        "transform": "{\"translateY\":\"-3000px\"}",
	        "time": 100
	      }
	    ]
	  },
	  ".modal": {
	    "position": "fixed",
	    "height": "100%",
	    "width": "100%",
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".modal-container": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "width": "450px",
	    "backgroundColor": "#ffffff",
	    "borderRadius": "10px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dcdfe6",
	    "borderRightColor": "#dcdfe6",
	    "borderBottomColor": "#dcdfe6",
	    "borderLeftColor": "#dcdfe6"
	  },
	  ".modal-title": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#303133",
	    "paddingTop": "10px",
	    "paddingRight": "0px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px",
	    "width": "100%"
	  },
	  ".modal-title > text": {
	    "fontSize": "35px",
	    "fontWeight": "bold",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "modal-title"
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
	  },
	  ".modal-body": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#888888",
	    "fontSize": "30px",
	    "paddingTop": "10px",
	    "paddingRight": "15px",
	    "paddingBottom": "20px",
	    "paddingLeft": "15px",
	    "width": "100%"
	  },
	  ".modal-footer": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": "100%",
	    "height": "80px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dcdfe6",
	    "borderRightColor": "#dcdfe6",
	    "borderBottomColor": "#dcdfe6",
	    "borderLeftColor": "#dcdfe6",
	    "borderTopWidth": "1px"
	  },
	  ".footer-btn": {
	    "flex": 1,
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "100%",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".backdrop": {
	    "height": "100%",
	    "width": "100%",
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  }
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(18);
	
	exports.default = {
	  props: ['visible', 'title', 'message', 'footerList'],
	  propsDefault: {
	    visible: false,
	    title: '提示',
	    footerList: [{
	      label: 'OK',
	      color: '#909399'
	    }]
	  },
	  data: function data() {
	    return {
	      opacity: 0,
	      modalVisible: false
	    };
	  },
	  onInit: function onInit() {
	    initProps(this);
	    this.$watch('visible', 'showModal');
	  },
	  showModal: function showModal() {
	    var _this = this;
	
	    if (this.visible) {
	      this.modalVisible = true;
	      var id = setInterval(function () {
	        _this.opacity += 0.05;
	        if (_this.opacity > 1) {
	          _this.opacity = 1;
	          clearInterval(id);
	        }
	      }, 16);
	    } else {
	      this.onClose();
	    }
	  },
	  onClick: function onClick(idx) {
	    this.onClose();
	    this.$dispatch('click', { idx: idx });
	  },
	  onClose: function onClose() {
	    var _this2 = this;
	
	    var id = setInterval(function () {
	      _this2.modalVisible = false;
	      _this2.opacity -= 0.05;
	      if (_this2.opacity <= 0) {
	        clearInterval(id);
	        _this2.opacity = 0;
	        _this2.$dispatch('close');
	      }
	    }, 16);
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