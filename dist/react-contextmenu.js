!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],e):"object"==typeof exports?exports.ReactContextMenu=e(require("react"),require("react-dom")):t.ReactContextMenu=e(t.React,t.ReactDOM)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);Object.defineProperty(e,"ContextMenu",{enumerable:!0,get:function(){return r(i)["default"]}});var o=n(10);Object.defineProperty(e,"ContextMenuLayer",{enumerable:!0,get:function(){return r(o)["default"]}});var s=n(14);Object.defineProperty(e,"MenuItem",{enumerable:!0,get:function(){return r(s)["default"]}});var a=n(5);Object.defineProperty(e,"monitor",{enumerable:!0,get:function(){return r(a)["default"]}})},function(e,n){e.exports=t},function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=Object.assign||function(t,e){for(var o,s,a=n(t),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var u in o)r.call(o,u)&&(a[u]=o[u]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(o);for(var f=0;f<s.length;f++)i.call(o,s[f])&&(a[s[f]]=o[s[f]])}}return a}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),c=n(11),u=r(c),f=n(12),l=r(f),p=function(t){function e(){i(this,e);var t=o(this,Object.getPrototypeOf(e).call(this));return t.createActions("menu",u["default"]),t.createStore("menu",l["default"],t),t}return s(e,t),e}(a.Flummox);e["default"]=new p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t.prototype.constructor.name}function c(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e}e.__esModule=!0,e.Actions=e.Store=e.Flummox=e.Flux=void 0;var u=n(17),f=r(u),l=n(16),p=r(l),h=n(20),d=n(7),y=r(d),v=n(2),_=r(v),m=function(t){function e(){i(this,e);var n=o(this,t.call(this));return n.dispatcher=new h.Dispatcher,n._stores={},n._actions={},n}return s(e,t),e.prototype.createStore=function(t,e){if(!(e.prototype instanceof f["default"])){var n=a(e);throw new Error("You've attempted to create a store from the class "+n+", which does not have the base Store class in its prototype chain. Make sure "+("you're using the `extends` keyword: `class "+n+" extends ")+"Store { ... }`")}if(this._stores.hasOwnProperty(t)&&this._stores[t])throw new Error("You've attempted to create multiple stores with key "+t+". Keys must be unique.");for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;r>o;o++)i[o-2]=arguments[o];var s=new(Function.prototype.bind.apply(e,[null].concat(i))),c=this.dispatcher.register(s.handler.bind(s));return s._waitFor=this.waitFor.bind(this),s._token=c,s._getAllActionIds=this.getAllActionIds.bind(this),this._stores[t]=s,s},e.prototype.getStore=function(t){return this._stores.hasOwnProperty(t)?this._stores[t]:void 0},e.prototype.removeStore=function(t){if(!this._stores.hasOwnProperty(t))throw new Error("You've attempted to remove store with key "+t+" which does not exist.");this._stores[t].removeAllListeners(),this.dispatcher.unregister(this._stores[t]._token),delete this._stores[t]},e.prototype.createActions=function(t,e){if(!(e.prototype instanceof p["default"])&&e!==p["default"]){if("function"==typeof e){var n=a(e);throw new Error("You've attempted to create actions from the class "+n+", which does not have the base Actions class in its prototype chain. Make "+("sure you're using the `extends` keyword: `class "+n+" ")+"extends Actions { ... }`")}var r=e;e=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}return s(e,t),e}(p["default"]),(0,_["default"])(e.prototype,r)}if(this._actions.hasOwnProperty(t)&&this._actions[t])throw new Error("You've attempted to create multiple actions with key "+t+". Keys must be unique.");for(var c=arguments.length,u=Array(c>2?c-2:0),f=2;c>f;f++)u[f-2]=arguments[f];var l=new(Function.prototype.bind.apply(e,[null].concat(u)));return l.dispatch=this.dispatch.bind(this),l.dispatchAsync=this.dispatchAsync.bind(this),this._actions[t]=l,l},e.prototype.getActions=function(t){return this._actions.hasOwnProperty(t)?this._actions[t]:void 0},e.prototype.getActionIds=function(t){var e=this.getActions(t);if(e)return e.getConstants()},e.prototype.removeActions=function(t){if(!this._actions.hasOwnProperty(t))throw new Error("You've attempted to remove actions with key "+t+" which does not exist.");delete this._actions[t]},e.prototype.getAllActionIds=function(){var t=[];for(var e in this._actions)if(this._actions.hasOwnProperty(e)){var n=this._actions[e].getConstants();t=t.concat(c(n))}return t},e.prototype.dispatch=function(t,e){this._dispatch({actionId:t,body:e})},e.prototype.dispatchAsync=function(t,e,n){var r=this,i={actionId:t,async:"begin"};return n&&(i.actionArgs=n),this._dispatch(i),e.then(function(e){return r._dispatch({actionId:t,body:e,async:"success"}),e},function(e){r._dispatch({actionId:t,error:e,async:"failure"})})["catch"](function(t){throw r.emit("error",t),t})},e.prototype._dispatch=function(t){this.dispatcher.dispatch(t),this.emit("dispatch",t)},e.prototype.waitFor=function(t){Array.isArray(t)||(t=[t]);var e=function(t){return t instanceof f["default"]?t._token:t},n=t.map(e);this.dispatcher.waitFor(n)},e.prototype.removeAllStoreListeners=function(t){for(var e in this._stores)if(this._stores.hasOwnProperty(e)){var n=this._stores[e];n.removeAllListeners(t)}},e.prototype.serialize=function(){var t={};for(var e in this._stores)if(this._stores.hasOwnProperty(e)){var n=this._stores[e],r=n.constructor.serialize;if("function"==typeof r){var i=r(n.state);if("string"!=typeof i){n.constructor.name}if(t[e]=i,"function"!=typeof n.constructor.deserialize){n.constructor.name}}}return JSON.stringify(t)},e.prototype.deserialize=function(t){var e=void 0;try{e=JSON.parse(t)}catch(n){this.constructor.name}for(var r in this._stores)if(this._stores.hasOwnProperty(r)){var i=this._stores[r],o=i.constructor.deserialize;if("function"==typeof o){var s=e[r],a=o(s);if(i.replaceState(a),"function"!=typeof i.constructor.serialize){i.constructor.name}}}},e}(y["default"]);e["default"]=m,m.prototype.getConstants=m.prototype.getActionIds,m.prototype.getAllConstants=m.prototype.getAllActionIds,m.prototype.dehydrate=m.prototype.serialize,m.prototype.hydrate=m.prototype.deserialize;var g=m;e.Flux=m,e.Flummox=g,e.Store=f["default"],e.Actions=p["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=r(i);e["default"]={getItem:function(){return o["default"].getStore("menu").state.currentItem},getPosition:function(){var t=o["default"].getStore("menu").state,e=t.x,n=t.y;return{x:e,y:n}}}},function(t,e,n){var r,i;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var s in r)o.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=n:(r=[],i=function(){return n}.apply(e,r),!(void 0!==i&&(t.exports=i)))}()},function(t,e){"use strict";function n(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function r(){}r.prototype._events=void 0,r.prototype.listeners=function(t){if(!this._events||!this._events[t])return[];if(this._events[t].fn)return[this._events[t].fn];for(var e=0,n=this._events[t].length,r=new Array(n);n>e;e++)r[e]=this._events[t][e].fn;return r},r.prototype.emit=function(t,e,n,r,i,o){if(!this._events||!this._events[t])return!1;var s,a,c=this._events[t],u=arguments.length;if("function"==typeof c.fn){switch(c.once&&this.removeListener(t,c.fn,!0),u){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,r),!0;case 5:return c.fn.call(c.context,e,n,r,i),!0;case 6:return c.fn.call(c.context,e,n,r,i,o),!0}for(a=1,s=new Array(u-1);u>a;a++)s[a-1]=arguments[a];c.fn.apply(c.context,s)}else{var f,l=c.length;for(a=0;l>a;a++)switch(c[a].once&&this.removeListener(t,c[a].fn,!0),u){case 1:c[a].fn.call(c[a].context);break;case 2:c[a].fn.call(c[a].context,e);break;case 3:c[a].fn.call(c[a].context,e,n);break;default:if(!s)for(f=1,s=new Array(u-1);u>f;f++)s[f-1]=arguments[f];c[a].fn.apply(c[a].context,s)}}return!0},r.prototype.on=function(t,e,r){var i=new n(e,r||this);return this._events||(this._events={}),this._events[t]?this._events[t].fn?this._events[t]=[this._events[t],i]:this._events[t].push(i):this._events[t]=i,this},r.prototype.once=function(t,e,r){var i=new n(e,r||this,!0);return this._events||(this._events={}),this._events[t]?this._events[t].fn?this._events[t]=[this._events[t],i]:this._events[t].push(i):this._events[t]=i,this},r.prototype.removeListener=function(t,e,n){if(!this._events||!this._events[t])return this;var r=this._events[t],i=[];if(e&&(r.fn&&(r.fn!==e||n&&!r.once)&&i.push(r),!r.fn))for(var o=0,s=r.length;s>o;o++)(r[o].fn!==e||n&&!r[o].once)&&i.push(r[o]);return i.length?this._events[t]=1===i.length?i[0]:i:delete this._events[t],this},r.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[t]:this._events={},this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.EventEmitter=r,r.EventEmitter2=r,r.EventEmitter3=r,t.exports=r},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=r(i),s=n(15),a=r(s),c=n(3),u=r(c),f=n(13),l=r(f),p=o["default"].PropTypes,h=o["default"].createClass({displayName:"ContextMenu",propTypes:{identifier:p.string.isRequired},render:function(){return o["default"].createElement(a["default"],{flux:u["default"],connectToStores:["menu"]},o["default"].createElement(l["default"],this.props))}});e["default"]=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e["default"]=function(t,e){return function(n){var r=n.displayName||n.name||"Component";return(0,l["default"])(t&&("string"==typeof t||"symbol"===("undefined"==typeof t?"undefined":o(t))||"function"==typeof t),"Expected identifier to be string, symbol or function. See %s",r),(0,l["default"])("function"==typeof e,"Expected configure to be a function. See %s",r),a["default"].createClass({displayName:r+"ContextMenuLayer",componentDidMount:function(){document.addEventListener("contextmenu",this.handleContextClick),document.addEventListener("click",this.handleClick)},componentWillUnmount:function(){document.removeEventListener("contextmenu",this.handleContextClick),document.removeEventListener("click",this.handleClick)},handleClick:function(){var t=y["default"].getActions("menu");t.setParams({isVisible:!1})},handleContextClick:function(n){var i=n.target,o=u["default"].findDOMNode(this);if(i===o||o.contains(i)){var s=e(this.props);(0,l["default"])((0,h["default"])(s),"Expected configure to return an object. See %s",r),n.preventDefault();var a=y["default"].getActions("menu");a.setParams({x:n.clientX,y:n.clientY,currentItem:s,isVisible:"function"==typeof t?t(this.props):t})}},render:function(){return a["default"].createElement(n,i({},this.props,{identifier:t}))}})}};var s=n(1),a=r(s),c=n(8),u=r(c),f=n(23),l=r(f),p=n(24),h=r(p),d=n(3),y=r(d);a["default"].Component},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(4),c=function(t){function e(){return r(this,e),i(this,Object.getPrototypeOf(e).apply(this,arguments))}return o(e,t),s(e,[{key:"setParams",value:function(t){return t}}]),e}(a.Actions);e["default"]=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(4),c=function(t){function e(t){r(this,e);var n=i(this,Object.getPrototypeOf(e).call(this)),o=t.getActions("menu");return n.register(o.setParams,n.onSetParams),n.state={x:0,y:0,isVisible:!1,currentItem:{}},n}return o(e,t),s(e,[{key:"onSetParams",value:function(t){this.setState(t)}}]),e}(a.Store);e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=r(i),s=n(8),a=r(s),c=n(6),u=r(c),f=o["default"].createClass({displayName:"MenuContainer",getInitialState:function(){return{position:"fixed",left:0,right:0}},componentDidMount:function(){this.localNode=a["default"].findDOMNode(this.refs.menu)},componentWillReceiveProps:function(t){var e=this;if(this._unbindHandlers(),t.isVisible){var n="requestAnimationFrame"in window?window.requestAnimationFrame:setTimeout;n(function(){return e.setState(e.getMenuPosition(t.x,t.y))})}},shouldComponentUpdate:function(t){return this.props.isVisible!==t.visible},componentDidUpdate:function(){this.props.isVisible&&this._bindHandlers()},componentWillUnmount:function(){this._unbindHandlers(),delete this.localNode},getMenuPosition:function(t,e){var n=a["default"].findDOMNode(this.refs.menu),r=document.documentElement.scrollTop,i=document.documentElement.scrollLeft,o=window,s=o.innerWidth,c=o.innerHeight,u=n.offsetWidth,f=n.offsetHeight,l={};return l.top=e+i,e+f>c&&(l.top-=f),l.left=t+r,t+u>s&&(l.left-=u),l},_outsideClickHandler:function(t){var e=this.props,n=e.isVisible,r=e.identifier;if(n===r){for(var i=this.localNode,o=t.target,s=!1;o.parentNode;){if(s=o===i)return;o=o.parentNode}this._hideMenu()}},_hideMenu:function(){this.props.flux.getActions("menu").setParams({isVisible:!1,currentItem:{}})},_bindHandlers:function(){var t=this._outsideClickHandler,e=this._hideMenu;document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),window.addEventListener("resize",e),document.addEventListener("scroll",e)},_unbindHandlers:function(){var t=this._outsideClickHandler,e=this._hideMenu;document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t),window.removeEventListener("resize",e),document.removeEventListener("scroll",e)},render:function(){var t=this.props,e=t.isVisible,n=t.identifier,r=(0,u["default"])({"context-menu":!0,open:e===n});return o["default"].createElement("div",{className:r,style:this.state},o["default"].createElement("ul",{ref:"menu",className:"dropdown-menu"},this.props.children))}});e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=r(i),s=n(6),a=r(s),c=n(2),u=r(c),f=n(3),l=r(f),p=n(5),h=r(p),d=o["default"].PropTypes,y=o["default"].createClass({displayName:"MenuItem",propTypes:{data:d.object,disabled:d.bool,divider:d.bool,selected:d.bool,onClick:d.func,onSelect:d.func},defaultProps:{disabled:!1,selected:!1,data:{}},handleClick:function(t){var e=this.props,n=e.disabled,r=e.onSelect,i=e.onClick,o=e.data;return n?t.preventDefault():((0,u["default"])(o,h["default"].getItem()),"function"==typeof r?(t.preventDefault(),r(o),this.hideMenu()):("function"==typeof i&&i(t,o),void this.hideMenu()))},hideMenu:function(){l["default"].getActions("menu").setParams({isVisible:!1,currentItem:{}})},render:function(){var t=this.props,e=t.divider,n=t.disabled,r=t.selected,i=t.children;if(e)return o["default"].createElement("li",{className:"divider"});var s=(0,a["default"])({disabled:n,active:r});return o["default"].createElement("li",{className:s},o["default"].createElement("a",{href:"#",onMouseDown:this.handleClick},i))}});e["default"]=y},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return t&&"function"==typeof t.then}e.__esModule=!0;var s=n(25),a=r(s),c=function(){function t(){i(this,t),this._baseId=(0,a["default"])();for(var e=this._getActionMethodNames(),n=0;n<e.length;n++){var r=e[n];this._wrapAction(r)}this.getConstants=this.getActionIds}return t.prototype.getActionIds=function(){var t=this;return this._getActionMethodNames().reduce(function(e,n){return e[n]=t[n]._id,e},{})},t.prototype._getActionMethodNames=function(t){var e=this;return Object.getOwnPropertyNames(this.constructor.prototype).filter(function(t){return"constructor"!==t&&"function"==typeof e[t]})},t.prototype._wrapAction=function(t){var e=this,n=this[t],r=this._createActionId(t),i=function(){for(var i=arguments.length,s=Array(i),a=0;i>a;a++)s[a]=arguments[a];var c=n.apply(e,s);if(o(c)){var u=c;e._dispatchAsync(r,u,s,t)}else e._dispatch(r,c,s,t);return c};i._id=r,this[t]=i},t.prototype._createActionId=function(t){return this._baseId+"-"+t},t.prototype._dispatch=function(t,e,n,r){return"function"==typeof this.dispatch&&"undefined"!=typeof e&&this.dispatch(t,e,n),e},t.prototype._dispatchAsync=function(t,e,n,r){"function"==typeof this.dispatchAsync&&this.dispatchAsync(t,e,n)},t}();e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return"function"==typeof t?t._id:t}e.__esModule=!0;var c=n(7),u=r(c),f=n(2),l=r(f),p=function(t){function e(){i(this,e);var n=o(this,t.call(this));return n.state=null,n._handlers={},n._asyncHandlers={},n._catchAllHandlers=[],n._catchAllAsyncHandlers={begin:[],success:[],failure:[]},n}return s(e,t),e.prototype.setState=function(t){if("function"==typeof t){var e=this._isHandlingDispatch?this._pendingState:this.state;t=t(e)}this._isHandlingDispatch?(this._pendingState=this._assignState(this._pendingState,t),this._emitChangeAfterHandlingDispatch=!0):(this.state=this._assignState(this.state,t),this.emit("change"))},e.prototype.replaceState=function(t){this._isHandlingDispatch?(this._pendingState=this._assignState(void 0,t),this._emitChangeAfterHandlingDispatch=!0):(this.state=this._assignState(void 0,t),this.emit("change"))},e.prototype.getStateAsObject=function(){return this.state},e.assignState=function(t,e){return(0,l["default"])({},t,e)},e.prototype._assignState=function(){return(this.constructor.assignState||e.assignState).apply(void 0,arguments)},e.prototype.forceUpdate=function(){this._isHandlingDispatch?this._emitChangeAfterHandlingDispatch=!0:this.emit("change")},e.prototype.register=function(t,e){t=a(t),"function"==typeof e&&(this._handlers[t]=e.bind(this))},e.prototype.registerAsync=function(t,e,n,r){t=a(t);var i=this._bindAsyncHandlers({begin:e,success:n,failure:r});this._asyncHandlers[t]=i},e.prototype.registerAll=function(t){"function"==typeof t&&this._catchAllHandlers.push(t.bind(this))},e.prototype.registerAllAsync=function(t,e,n){var r=this,i=this._bindAsyncHandlers({begin:t,success:e,failure:n});Object.keys(i).forEach(function(t){r._catchAllAsyncHandlers[t].push(i[t])})},e.prototype._bindAsyncHandlers=function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];"function"==typeof n?t[e]=n.bind(this):delete t[e]}return t},e.prototype.waitFor=function(t){this._waitFor(t)},e.prototype.handler=function(t){var e=t.body,n=t.actionId,r=t.async,i=t.actionArgs,o=t.error,s=this._catchAllHandlers,a=this._handlers[n],c=this._catchAllAsyncHandlers[r],u=this._asyncHandlers[n]&&this._asyncHandlers[n][r];if(r){var f=c.concat([u]);switch(r){case"begin":return void this._performHandler(f,i);case"failure":return void this._performHandler(f,[o]);case"success":return void this._performHandler(c.concat([u||a].concat(u&&[]||s)),[e]);default:return}}this._performHandler(s.concat([a]),[e])},e.prototype._performHandler=function(t,e){this._isHandlingDispatch=!0,this._pendingState=this._assignState(void 0,this.state),this._emitChangeAfterHandlingDispatch=!1;try{this._performHandlers(t,e)}finally{this._emitChangeAfterHandlingDispatch&&(this.state=this._pendingState,this.emit("change")),this._isHandlingDispatch=!1,this._pendingState=void 0,this._emitChangeAfterHandlingDispatch=!1}},e.prototype._performHandlers=function(t,e){var n=this;t.forEach(function(t){return"function"==typeof t&&t.apply(n,e)})},e}(u["default"]);e["default"]=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var c=n(1),u=r(c),f=n(19),l=n(2),p=r(l),h=function(t){function e(n,r){o(this,e);var i=s(this,t.call(this,n,r));return i.initialize(),i.state=i.connectToStores(n.connectToStores,n.stateGetter),i.wrapChild=i.wrapChild.bind(i),i}return a(e,t),e.prototype.wrapChild=function(t){return u["default"].cloneElement(t,this.getChildProps())},e.prototype.getChildProps=function(){var t=this.props,e=(t.children,t.render,t.connectToStores,t.stateGetter,t.flux,i(t,["children","render","connectToStores","stateGetter","flux"]));return(0,p["default"])({flux:this.getFlux()},this.state,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=t.render;if("function"==typeof n)return n(this.getChildProps(),this.getFlux());if(!e)return null;if(Array.isArray(e))return u["default"].createElement("span",null,u["default"].Children.map(e,this.wrapChild));var r=e;return this.wrapChild(r)},e}(u["default"].Component);(0,p["default"])(h.prototype,f.instanceMethods),(0,p["default"])(h,f.staticProperties),e["default"]=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){return function(){var t=n(e,this.props);this.setState(t)}.bind(t)}function o(t){return t.getStateAsObject()}function s(t){return t.reduce(function(t,e){return(0,l["default"])(t,e.getStateAsObject())},{})}e.__esModule=!0,e.staticProperties=e.instanceMethods=void 0;var a=n(1),c=r(a),u=n(4),f=n(2),l=r(f),p={getChildContext:function(){var t=this.getFlux();return t?{flux:t}:{}},getFlux:function(){return this.props.flux||this.context.flux},initialize:function(){if(this._fluxStateGetters=[],this._fluxListeners={},this.flux=this.getFlux(),!(this.flux instanceof u.Flux))throw new Error("fluxMixin: Could not find Flux instance. Ensure that your component has either `this.context.flux` or `this.props.flux`.")},componentWillUnmount:function(){var t=this.getFlux();for(var e in this._fluxListeners)if(this._fluxListeners.hasOwnProperty(e)){var n=t.getStore(e);if("undefined"!=typeof n){var r=this._fluxListeners[e];n.removeListener("change",r)}}},componentWillReceiveProps:function(t){this.updateStores(t)},updateStores:function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0],e=this.getStoreState(t);this.setState(e)},getStoreState:function(){var t=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];return this._fluxStateGetters.reduce(function(e,n){var r=n.getter,i=n.stores,o=r(i,t);return(0,l["default"])(e,o)},{})},connectToStores:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?null:arguments[1],r=this.getFlux(),a=function(t){var e=r.getStore(t);if("undefined"==typeof e)throw new Error("connectToStores(): Store with key '"+t+"' does not exist.");return e};if("string"==typeof e){var c=e,u=a(c),f=n||o;this._fluxStateGetters.push({stores:u,getter:f});var l=i(this,u,f);u.addListener("change",l),this._fluxListeners[c]=l}else if(Array.isArray(e))!function(){var r=e.map(a),o=n||s;t._fluxStateGetters.push({stores:r,getter:o});var c=i(t,r,o);e.forEach(function(e,n){var i=r[n];i.addListener("change",c),t._fluxListeners[e]=c})}();else for(var c in e){var u=a(c),f=e[c]||o;this._fluxStateGetters.push({stores:u,getter:f});var l=i(this,u,f);u.addListener("change",l),this._fluxListeners[c]=l}return this.getStoreState()}},h={contextTypes:{flux:a.PropTypes.instanceOf(u.Flux)},childContextTypes:{flux:a.PropTypes.instanceOf(u.Flux)},propTypes:{connectToStores:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.arrayOf(a.PropTypes.string),a.PropTypes.object]),flux:a.PropTypes.instanceOf(u.Flux),render:c["default"].PropTypes.func,stateGetter:c["default"].PropTypes.func}};e.instanceMethods=p,e.staticProperties=h},function(t,e,n){t.exports.Dispatcher=n(21)},function(t,e,n){"use strict";function r(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var i=n(22),o=1,s="ID_";r.prototype.register=function(t){var e=s+o++;return this.$Dispatcher_callbacks[e]=t,e},r.prototype.unregister=function(t){i(this.$Dispatcher_callbacks[t],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this.$Dispatcher_callbacks[t]},r.prototype.waitFor=function(t){i(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];this.$Dispatcher_isPending[n]?i(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(i(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},r.prototype.dispatch=function(t){i(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(t);try{for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]||this.$Dispatcher_invokeCallback(e)}finally{this.$Dispatcher_stopDispatching()}},r.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},r.prototype.$Dispatcher_invokeCallback=function(t){this.$Dispatcher_isPending[t]=!0,this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[t]=!0},r.prototype.$Dispatcher_startDispatching=function(t){for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]=!1,this.$Dispatcher_isHandled[e]=!1;this.$Dispatcher_pendingPayload=t,this.$Dispatcher_isDispatching=!0},r.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=r},function(t,e){"use strict";var n=function(t,e,n,r,i,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],f=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[f++]}))}throw c.framesToPop=1,c}};t.exports=n},function(t,e,n){"use strict";var r=function(t,e,n,r,i,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],f=0;c=new Error(e.replace(/%s/g,function(){return u[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};t.exports=r},function(t,e){function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=n},function(t,e){"use strict";var n=0,r=t.exports=function(t){t=t||{};var e=t.prefix,r=t.suffix,i=++n*(t.multiplier||1);return null==e&&(e=""),null==r&&(r=""),String(e)+i+String(r)};r.reset=function(){return n=0}}])});