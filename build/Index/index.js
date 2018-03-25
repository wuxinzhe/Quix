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

	__webpack_require__(42)
	__webpack_require__(46)
	__webpack_require__(6)
	__webpack_require__(1)
	__webpack_require__(14)
	__webpack_require__(18)
	__webpack_require__(32)
	var $app_template$ = __webpack_require__(50)
	var $app_style$ = __webpack_require__(51)
	var $app_script$ = __webpack_require__(52)
	
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
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/white-space', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  ".white-space": {
	    "display": "flex",
	    "width": "100%"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initProps = __webpack_require__(5);
	
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/container', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(5);
	
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(15)
	var $app_style$ = __webpack_require__(16)
	var $app_script$ = __webpack_require__(17)
	
	$app_define$('@app-component/avatar', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": function () {return ['avatar', 'avatar-' + (this.size)]},
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.src},
	        "alt": function () {return this.alt}
	      }
	    }
	  ]
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  ".avatar": {
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".avatar > image": {
	    "resizeMode": "cover",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "avatar"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".avatar-sm": {
	    "height": "150px",
	    "width": "150px",
	    "borderRadius": "75px"
	  },
	  ".avatar-md": {
	    "height": "250px",
	    "width": "250px",
	    "borderRadius": "125px"
	  },
	  ".avatar-lg": {
	    "height": "300px",
	    "width": "300px",
	    "borderRadius": "150px"
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(5);
	
	exports.default = {
	  props: ['size', 'src', 'alt'],
	  propsDefault: {
	    size: 'sm',
	    alt: 'image'
	  },
	  data: function data() {
	    return {};
	  },
	  onInit: function onInit() {
	    initProps(this);
	  }
	};}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(19)
	var $app_style$ = __webpack_require__(20)
	var $app_script$ = __webpack_require__(21)
	
	$app_define$('@app-component/flex', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "flex"
	  ],
	  "style": {
	    "alignItems": function () {return this.align},
	    "justifyContent": function () {return this.justify},
	    "flexWrap": function () {return this.wrap},
	    "flexDirection": function () {return this.direction}
	  },
	  "children": [
	    {
	      "type": "slot",
	      "attr": {}
	    }
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  ".flex": {
	    "display": "flex",
	    "width": "100%"
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var initProps = __webpack_require__(5);
	
	exports.default = {
	    props: ['justify', 'align', 'wrap', 'direction'],
	    propsDefault: {
	        justify: 'flex-start',
	        align: 'flex-start',
	        wrap: 'nowrap',
	        direction: 'column'
	    },
	    data: function data() {
	        return {};
	    },
	    onInit: function onInit() {
	        initProps(this);
	    }
	};}

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(33)
	var $app_style$ = __webpack_require__(34)
	var $app_script$ = __webpack_require__(35)
	
	$app_define$('@app-component/divider', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
	  "attr": {},
	  "classList": [
	    "divider"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "line"
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.text}
	      },
	      "classList": [
	        "message"
	      ],
	      "style": {
	        "backgroundColor": function () {return this.bgColor}
	      }
	    }
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  ".divider": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "width": "100%"
	  },
	  ".line": {
	    "width": "60%",
	    "height": "2px",
	    "backgroundColor": "#dddddd"
	  },
	  ".message": {
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px"
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initProps = __webpack_require__(5);
	
	exports.default = {
	  props: ['text', 'bgColor'],
	  propsDefault: {
	    text: '已经到底了',
	    bgColor: '#faf7ff'
	  },
	  data: function data() {
	    return {};
	  },
	  onInit: function onInit() {
	    initProps(this);
	  }
	};}

/***/ },
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(43)
	var $app_style$ = __webpack_require__(44)
	var $app_script$ = __webpack_require__(45)
	
	$app_define$('@app-component/cell-box', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(47)
	var $app_style$ = __webpack_require__(48)
	var $app_script$ = __webpack_require__(49)
	
	$app_define$('@app-component/cell', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initProps = __webpack_require__(5);
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
/* 50 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "attr": {},
	  "children": [
	    {
	      "type": "white-space",
	      "attr": {}
	    },
	    {
	      "type": "avatar",
	      "attr": {
	        "src": function () {return this.logo},
	        "size": "md"
	      }
	    },
	    {
	      "type": "white-space",
	      "attr": {}
	    },
	    {
	      "type": "flex",
	      "attr": {
	        "align": "center",
	        "justify": "center"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "Quix"
	          },
	          "classList": [
	            "title"
	          ]
	        },
	        {
	          "type": "white-space",
	          "attr": {}
	        },
	        {
	          "type": "divider",
	          "attr": {
	            "text": "拼装你的快应用"
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
	        "head": "基本元素"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Avatar",
	            "arrow": "true",
	            "first": "true",
	            "page": "Avatar"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Divider",
	            "arrow": "true",
	            "page": "Divider"
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
	        "head": "表单组件"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Input",
	            "arrow": "true",
	            "first": "true",
	            "page": "InputField"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Switch",
	            "arrow": "true",
	            "page": "SwitchField"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Radio",
	            "arrow": "true",
	            "page": "RadioField"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Slider",
	            "arrow": "true",
	            "page": "SliderField"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Textarea",
	            "arrow": "true",
	            "page": "TextareaField"
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
	        "head": "布局组件"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Container",
	            "arrow": "true",
	            "first": "true",
	            "page": "Container"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Flex",
	            "arrow": "true",
	            "page": "Flex"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "List",
	            "arrow": "true",
	            "page": "List"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "WhiteSpace",
	            "arrow": "true",
	            "page": "WhiteSpace"
	          }
	        },
	        {
	          "type": "cell",
	          "attr": {
	            "label": "WindBlank",
	            "arrow": "true",
	            "page": "WindBlank"
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
	        "head": "交互组件"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "attr": {
	            "label": "Modal",
	            "arrow": "true",
	            "first": "true",
	            "page": "Modal"
	          }
	        }
	      ]
	    },
	    {
	      "type": "white-space",
	      "attr": {}
	    }
	  ]
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = {
	  ".title": {
	    "fontSize": "50px"
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      logo: 'http://image.showings.com.cn/logo.png'
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