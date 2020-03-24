!function(){"use strict";var t,n,e,r,o,i={},l=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(t,n){for(var e in n)t[e]=n[e];return t}function s(t){var n=t.parentNode;n&&n.removeChild(t)}function c(t,n,e){var r,o=arguments,i={};for(r in n)"key"!==r&&"ref"!==r&&(i[r]=n[r]);if(arguments.length>3)for(e=[e],r=3;r<arguments.length;r++)e.push(o[r]);if(null!=e&&(i.children=e),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return p(t,i,n&&n.key,n&&n.ref)}function p(n,e,r,o){var i={type:n,props:e,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return t.vnode&&t.vnode(i),i}function f(t){return t.children}function h(t,n){this.props=t,this.context=n}function d(t,n){if(null==n)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?d(t):null}function _(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return _(t)}}function m(o){(!o.__d&&(o.__d=!0)&&1===n.push(o)||r!==t.debounceRendering)&&((r=t.debounceRendering)||e)(v)}function v(){var t,e,r,o,i,l,u;for(n.sort((function(t,n){return n.__v.__b-t.__v.__b}));t=n.pop();)t.__d&&(r=void 0,o=void 0,l=(i=(e=t).__v).__e,(u=e.__P)&&(r=[],o=x(u,i,a({},i),e.__n,void 0!==u.ownerSVGElement,null,r,null==l?d(i):l),C(r,i),o!=l&&_(i)))}function y(t,n,e,r,o,u,a,c,p){var f,h,_,m,v,y,b,w=e&&e.__k||l,k=w.length;if(c==i&&(c=null!=u?u[0]:k?d(e,0):null),f=0,n.__k=g(n.__k,(function(e){if(null!=e){if(e.__=n,e.__b=n.__b+1,null===(_=w[f])||_&&e.key==_.key&&e.type===_.type)w[f]=void 0;else for(h=0;h<k;h++){if((_=w[h])&&e.key==_.key&&e.type===_.type){w[h]=void 0;break}_=null}if(m=x(t,e,_=_||i,r,o,u,a,c,p),(h=e.ref)&&_.ref!=h&&(b||(b=[]),_.ref&&b.push(_.ref,null,e),b.push(h,e.__c||m,e)),null!=m){if(null==y&&(y=m),null!=e.__d)m=e.__d,e.__d=null;else if(u==_||m!=c||null==m.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(m);else{for(v=c,h=0;(v=v.nextSibling)&&h<k;h+=2)if(v==m)break t;t.insertBefore(m,c)}"option"==n.type&&(t.value="")}c=m.nextSibling,"function"==typeof n.type&&(n.__d=m)}}return f++,e})),n.__e=y,null!=u&&"function"!=typeof n.type)for(f=u.length;f--;)null!=u[f]&&s(u[f]);for(f=k;f--;)null!=w[f]&&S(w[f],w[f]);if(b)for(f=0;f<b.length;f++)P(b[f],b[++f],b[++f])}function g(t,n,e){if(null==e&&(e=[]),null==t||"boolean"==typeof t)n&&e.push(n(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)g(t[r],n,e);else e.push(n?n("string"==typeof t||"number"==typeof t?p(null,t,null,null):null!=t.__e||null!=t.__c?p(t.type,t.props,t.key,null):t):t);return e}function b(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]="number"==typeof e&&!1===u.test(n)?e+"px":null==e?"":e}function w(t,n,e,r,o){var i,l,u,a,s;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(i=t.style,"string"==typeof e)i.cssText=e;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)e&&l in e||b(i,l,"");if(e)for(u in e)r&&e[u]===r[u]||b(i,u,e[u])}else"o"===n[0]&&"n"===n[1]?(a=n!==(n=n.replace(/Capture$/,"")),s=n.toLowerCase(),n=(s in t?s:n).slice(2),e?(r||t.addEventListener(n,k,a),(t.l||(t.l={}))[n]=e):t.removeEventListener(n,k,a)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&!o&&n in t?t[n]=null==e?"":e:"function"!=typeof e&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),e):null==e||!1===e?t.removeAttribute(n):t.setAttribute(n,e))}function k(n){this.l[n.type](t.event?t.event(n):n)}function x(n,e,r,o,i,l,u,s,c){var p,d,_,m,v,b,w,k,x,C,P=e.type;if(void 0!==e.constructor)return null;(p=t.__b)&&p(e);try{t:if("function"==typeof P){if(k=e.props,x=(p=P.contextType)&&o[p.__c],C=p?x?x.props.value:p.__:o,r.__c?w=(d=e.__c=r.__c).__=d.__E:("prototype"in P&&P.prototype.render?e.__c=d=new P(k,C):(e.__c=d=new h(k,C),d.constructor=P,d.render=T),x&&x.sub(d),d.props=k,d.state||(d.state={}),d.context=C,d.__n=o,_=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=P.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=a({},d.__s)),a(d.__s,P.getDerivedStateFromProps(k,d.__s))),m=d.props,v=d.state,_)null==P.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,C),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,C)){for(d.props=k,d.state=d.__s,d.__d=!1,d.__v=e,e.__e=r.__e,e.__k=r.__k,d.__h.length&&u.push(d),p=0;p<e.__k.length;p++)e.__k[p]&&(e.__k[p].__=e);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,C),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,v,b)}))}d.context=C,d.props=k,d.state=d.__s,(p=t.__r)&&p(e),d.__d=!1,d.__v=e,d.__P=n,p=d.render(d.props,d.state,d.context),e.__k=g(null!=p&&p.type==f&&null==p.key?p.props.children:p),null!=d.getChildContext&&(o=a(a({},o),d.getChildContext())),_||null==d.getSnapshotBeforeUpdate||(b=d.getSnapshotBeforeUpdate(m,v)),y(n,e,r,o,i,l,u,s,c),d.base=e.__e,d.__h.length&&u.push(d),w&&(d.__E=d.__=null),d.__e=null}else e.__e=E(r.__e,e,r,o,i,l,u,c);(p=t.diffed)&&p(e)}catch(n){t.__e(n,e,r)}return e.__e}function C(n,e){t.__c&&t.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(t){t.call(e)}))}catch(n){t.__e(n,e.__v)}}))}function E(t,n,e,r,o,u,a,s){var c,p,f,h,d,_=e.props,m=n.props;if(o="svg"===n.type||o,null==t&&null!=u)for(c=0;c<u.length;c++)if(null!=(p=u[c])&&(null===n.type?3===p.nodeType:p.localName===n.type)){t=p,u[c]=null;break}if(null==t){if(null===n.type)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),u=null}if(null===n.type)null!=u&&(u[u.indexOf(t)]=null),_!==m&&(t.data=m);else if(n!==e){if(null!=u&&(u=l.slice.call(t.childNodes)),f=(_=e.props||i).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!s){if(_===i)for(_={},d=0;d<t.attributes.length;d++)_[t.attributes[d].name]=t.attributes[d].value;(h||f)&&(h&&f&&h.__html==f.__html||(t.innerHTML=h&&h.__html||""))}(function(t,n,e,r,o){var i;for(i in e)i in n||w(t,i,null,e[i],r);for(i in n)o&&"function"!=typeof n[i]||"value"===i||"checked"===i||e[i]===n[i]||w(t,i,n[i],e[i],r)})(t,m,_,o,s),n.__k=n.props.children,h||y(t,n,e,r,"foreignObject"!==n.type&&o,u,a,i,s),s||("value"in m&&void 0!==m.value&&m.value!==t.value&&(t.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==t.checked&&(t.checked=m.checked))}return t}function P(n,e,r){try{"function"==typeof n?n(e):n.current=e}catch(n){t.__e(n,r)}}function S(n,e,r){var o,i,l;if(t.unmount&&t.unmount(n),(o=n.ref)&&P(o,null,e),r||"function"==typeof n.type||(r=null!=(i=n.__e)),n.__e=n.__d=null,null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){t.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(l=0;l<o.length;l++)o[l]&&S(o[l],e,r);null!=i&&s(i)}function T(t,n,e){return this.constructor(t,e)}function L(t,n){return n=a(a({},t.props),n),arguments.length>2&&(n.children=l.slice.call(arguments,2)),p(t.type,n,n.key||t.key,n.ref||t.ref)}function U(t,n,e,r,o){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)t=t?t[n[r]]:o;return t===o?e:t}function N(t){return null!=t}function j(t,n){for(var e in n)t[e]=n[e];return t}t={__e:function(t,n){for(var e;n=n.__;)if((e=n.__c)&&!e.__)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError)e.setState(e.constructor.getDerivedStateFromError(t));else{if(null==e.componentDidCatch)continue;e.componentDidCatch(t)}return m(e.__E=e)}catch(n){t=n}throw t}},h.prototype.setState=function(t,n){var e;e=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(e,this.props)),t&&a(e,t),null!=t&&this.__v&&(this.__e=!1,n&&this.__h.push(n),m(this))},h.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},h.prototype.render=f,n=[],e="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=i;var A,O=/[?&#]intl=show/,D=function(t){function n(){t.apply(this,arguments)}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.getChildContext=function(){var t=this.props,n=t.scope,e=t.definition,r=t.mark,o=j({},this.context.intl||{});return n&&(o.scope=n),e&&(o.dictionary=function t(n,e){var r=j({},n);for(var o in e)e.hasOwnProperty(o)&&(n[o]&&e[o]&&"object"==typeof n[o]&&"object"==typeof e[o]?r[o]=t(n[o],e[o]):r[o]=n[o]||e[o]);return r}(o.dictionary||{},e)),(r||"undefined"!=typeof location&&String(location).match(O))&&(o.mark=!0),{intl:o}},n.prototype.render=function(t){return t.children},n}(h),M={};function H(t,n){return A=n||M,t&&t.replace(/\{\{([\w.-]+)\}\}/g,I)}function I(t,n){for(var e=n.split("."),r=A,o=0;o<e.length;o++)if(null==(r=r[e[o]]))return"";return"string"==typeof r&&r.match(/\{\{/)&&(r=H(r,A)),r}function R(t,n,e,r,o,i){n&&(t=n+"."+t);var l=e&&U(e,t);return(o||0===o)&&l&&"object"==typeof l&&(l=l.splice?l[o]||l[0]:0===o&&N(l.none)?l.none:1===o&&N(l.one||l.singular)?l.one||l.singular:l.some||l.many||l.plural||l.other||l),l&&H(l,r)||i||null}function W(t,n){var e=t.value,r=t.id,o=n.intl;if(o&&o.mark){var i="dictionary"+(o&&o.scope?"."+o.scope:"")+"."+r;return c("mark",{style:{background:e?U(o,i)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:r},e)}return e}function F(t,n){var e=t.id,r=t.children,o=t.plural,i=t.fields,l=n.intl;return c(W,{id:e,value:R(e,l&&l.scope,l&&l.dictionary,i,o,r)})}function $(t,n,e){var r={};for(var o in n=n||{},t=function(t){if("string"==typeof(t=t||{})&&(t=t.split(",")),"join"in t){for(var n={},e=0;e<t.length;e++){var r=t[e].trim();r&&(n[r.split(".").pop()]=r)}return n}return t}(t))if(t.hasOwnProperty(o)&&t[o]){var i=t[o];e||"string"!=typeof i?i.type===F&&(i=j({fallback:i.props.children},i.props),r[o]=R(i.id,n.scope,n.dictionary,i.fields,i.plural,i.fallback)):r[o]=R(i,n.scope,n.dictionary)}return r}function B(t,n){var e=t.children,r=n.intl;return e&&e.length?e.map((function(t){return L(t,$(t.props,r,!0))})):e&&L(e,$(e.props,r,!0))}function G(t){return c(B,null,c(z,{html:c(F,t),id:t.id}))}function z(t){var n=t.html,e=t.id,r=n?"string"==typeof n?c("span",{dangerouslySetInnerHTML:{__html:n}}):c("span",null,n):n;return c(W,{id:e,value:r})}var K=function(t,n){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */function V(t,n){function e(){this.constructor=t}K(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function q(t,n,e,r){return new(e||(e=Promise))((function(o,i){function l(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e((function(n){n(t.value)})).then(l,u)}a((r=r.apply(t,n||[])).next())}))}function Z(t,n){var e,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;l;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(t,l)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function Y(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),l=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return l}function J(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(Y(arguments[n]));return t}var Q={};function X(t,n){for(var e in n)t[e]=n[e];return t}function tt(t,n){return t.rank<n.rank?1:t.rank>n.rank?-1:t.index-n.index}function nt(t,n){return t.index=n,t.rank=function(t){return t.props.default?0:(n=t.props.path,et(n).map(rt).join(""));var n}(t),t.props}function et(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function rt(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var ot=null,it=[],lt=[],ut={};function at(){var t;return""+((t=ot&&ot.location?ot.location:ot&&ot.getCurrentLocation?ot.getCurrentLocation():"undefined"!=typeof location?location:ut).pathname||"")+(t.search||"")}function st(t,n){return void 0===n&&(n=!1),"string"!=typeof t&&t.url&&(n=t.replace,t=t.url),function(t){for(var n=it.length;n--;)if(it[n].canRoute(t))return!0;return!1}(t)&&function(t,n){void 0===n&&(n="push"),ot&&ot[n]?ot[n](t):"undefined"!=typeof history&&history[n+"State"]&&history[n+"State"](null,null,t)}(t,n?"replace":"push"),ct(t)}function ct(t){for(var n=!1,e=0;e<it.length;e++)!0===it[e].routeTo(t)&&(n=!0);for(var r=lt.length;r--;)lt[r](t);return n}function pt(t){if(t&&t.getAttribute){var n=t.getAttribute("href"),e=t.getAttribute("target");if(n&&n.match(/^\//g)&&(!e||e.match(/^_?self$/i)))return st(n)}}function ft(t){if(0==t.button)return pt(t.currentTarget||t.target||this),ht(t)}function ht(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function dt(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var n=t.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")){if(n.hasAttribute("native"))return;if(pt(n))return ht(t)}}while(n=n.parentNode)}}var _t=!1;var mt=function(t){function n(n){t.call(this,n),n.history&&(ot=n.history),this.state={url:n.url||at()},_t||("function"==typeof addEventListener&&(ot||addEventListener("popstate",(function(){ct(at())})),addEventListener("click",dt)),_t=!0)}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},n.prototype.canRoute=function(t){var n=g(this.props.children);return this.getMatchingChildren(n,t,!1).length>0},n.prototype.routeTo=function(t){this.setState({url:t});var n=this.canRoute(t);return this.updating||this.forceUpdate(),n},n.prototype.componentWillMount=function(){it.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var t=this;ot&&(this.unlisten=ot.listen((function(n){t.routeTo(""+(n.pathname||"")+(n.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),it.splice(it.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(t,n,e){return t.filter(nt).sort(tt).map((function(t){var r=function(t,n,e){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),l={};if(i&&i[1])for(var u=i[1].split("&"),a=0;a<u.length;a++){var s=u[a].split("=");l[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=et(t.replace(o,"")),n=et(n||"");for(var c=Math.max(t.length,n.length),p=0;p<c;p++)if(n[p]&&":"===n[p].charAt(0)){var f=n[p].replace(/(^:|[+*?]+$)/g,""),h=(n[p].match(/[+*?]+$/)||Q)[0]||"",d=~h.indexOf("+"),_=~h.indexOf("*"),m=t[p]||"";if(!m&&!_&&(h.indexOf("?")<0||d)){r=!1;break}if(l[f]=decodeURIComponent(m),d||_){l[f]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(n[p]!==t[p]){r=!1;break}return(!0===e.default||!1!==r)&&l}(n,t.props.path,t.props);if(r){if(!1!==e){var o={url:n,matches:r};return X(o,r),delete o.ref,delete o.key,L(t,o)}return t}})).filter(Boolean)},n.prototype.render=function(t,n){var e=t.children,r=t.onChange,o=n.url,i=this.getMatchingChildren(g(e),o,!0),l=i[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},n}(h);mt.subscribers=lt,mt.getCurrentUrl=at,mt.route=st,mt.Router=mt,mt.Route=function(t){return c(t.component,t)},mt.Link=function(t){return c("a",X({onClick:ft},t))};var vt,yt,gt,bt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return V(n,t),n.prototype.render=function(t){return c(mt,{onChange:this.handleChange.bind(this)},g(t.children))},n.prototype.handleChange=function(t){this.handleRedirects(t),this.handleNav(t)},n.prototype.handleRedirects=function(t){var n=new URL(t.url,location.origin),e=n.searchParams.get("redirectTo");null!==e&&(n.pathname=decodeURIComponent(e),n.searchParams.delete("redirectTo"),st(n.href.slice(n.origin.length),!0))},n.prototype.handleNav=function(t){return q(this,void 0,void 0,(function(){return Z(this,(function(n){switch(n.label){case 0:return t.previous===t.url?[3,2]:[4,(e=0,q(void 0,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t){return setTimeout((function(){return t()}),e)}))]}))})))];case 1:n.sent(),document.body.classList.remove("navPanel-visible"),n.label=2;case 2:return[2]}var e}))}))},n}(h),wt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return V(n,t),n.prototype.componentWillMount=function(){st(this.props.to,!0)},n.prototype.render=function(){return null},n}(h),kt=["/","/contact"],xt=function(){return c("header",{id:"header"},c("h1",{id:"logo"},c("a",{href:"/"},c(F,{id:"title"}))),c("nav",{id:"nav"},c("ul",null,kt.map((function(t){return c("li",null,c("a",{href:t},c(F,{id:"section."+t})))})))))},Ct=function(){return document.body.classList.toggle("navPanel-visible")},Et=function(){return c(f,null,c("div",{id:"titleBar"},c("a",{class:"toggle",onClick:Ct}),c("span",{class:"title"},c("a",{href:kt[0]},c(F,{id:"title"})))),c("div",{id:"navPanel"},c("nav",null,kt.map((function(t){return c(Pt,{href:t},c(F,{id:"section."+t}))})))))},Pt=function(t){return c("a",{class:"link depth-0",href:t.href,style:"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"},c("span",{class:"indent-0"}),t.children)},St=function(){return c(f,null,c(xt,null),c(Et,null))},Tt=function(){return c("footer",{id:"footer"},c("ul",{class:"icons"},c("li",null,c("a",{href:"https://twitter.com/NoxWings",class:"icon brands alt fa-twitter"},c("span",{class:"label"},"Twitter"))),c("li",null,c("a",{href:"https://www.linkedin.com/in/davidgarciamiguel/",class:"icon brands alt fa-linkedin-in"},c("span",{class:"label"},"LinkedIn"))),c("li",null,c("a",{href:"https://github.com/noxwings",class:"icon brands alt fa-github"},c("span",{class:"label"},"GitHub"))),c("li",null,c("a",{href:"mailto:noxwings@gmail.com",class:"icon solid alt fa-envelope"},c("span",{class:"label"},"Email")))),c("ul",{class:"copyright"},c("li",null,"© David (NoxWings) García Miguel.")))},Lt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return V(n,t),n.prototype.render=function(t){return c(f,null,c(St,null),c("div",{id:"page-wrapper",class:t.class},g(t.children)),c(Tt,null))},n}(h),Ut=[],Nt=t.__r,jt=t.diffed,At=t.__c,Ot=t.unmount;function Dt(n){t.__h&&t.__h(yt);var e=yt.__H||(yt.__H={t:[],u:[]});return n>=e.t.length&&e.t.push({}),e.t[n]}function Mt(t){return function(t,n,e){var r=Dt(vt++);return r.__c||(r.__c=yt,r.i=[e?e(n):Wt(void 0,n),function(n){var e=t(r.i[0],n);r.i[0]!==e&&(r.i[0]=e,r.__c.setState({}))}]),r.i}(Wt,t)}function Ht(){Ut.some((function(t){t.__P&&(t.__H.u.forEach(It),t.__H.u.forEach(Rt),t.__H.u=[])})),Ut=[]}function It(t){t.m&&t.m()}function Rt(t){var n=t.i();"function"==typeof n&&(t.m=n)}function Wt(t,n){return"function"==typeof n?n(t):n}t.__r=function(t){Nt&&Nt(t),vt=0,(yt=t.__c).__H&&(yt.__H.u.forEach(It),yt.__H.u.forEach(Rt),yt.__H.u=[])},t.diffed=function(n){jt&&jt(n);var e=n.__c;if(e){var r=e.__H;r&&r.u.length&&(1!==Ut.push(e)&&gt===t.requestAnimationFrame||((gt=t.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);"undefined"!=typeof window&&(n=requestAnimationFrame(e))})(Ht))}},t.__c=function(t,n){n.some((function(t){t.__h.forEach(It),t.__h=t.__h.filter((function(t){return!t.i||Rt(t)}))})),At&&At(t,n)},t.unmount=function(t){Ot&&Ot(t);var n=t.__c;if(n){var e=n.__H;e&&e.t.forEach((function(t){return t.m&&t.m()}))}};var Ft,$t=function(){var t=Y(Mt(!0),2),n=t[0],e=t[1];return c("section",{id:"banner"},c("div",{class:"content"},c("header",null,c("h2",null),c("p",null,c(G,{id:"home.title"}))),c("span",{class:"image"},c("img",{src:"images/pic.jpg",alt:""}))),c("iframe",{src:"https://noxwings.com/nightfall?mute",class:n?"loading":"loaded",onLoad:function(){return e(!1)}}))},Bt=function(){return c(Lt,{class:"landing"},c($t,null))},Gt=function(){return c(Lt,null)},zt=function(t){var n=t.post;return c("div",null,c("h2",null,c("a",{href:"/blog/post/"+n.slug},n.title)))},Kt=function(t){function n(){var n=t.apply(this,J(arguments))||this;return n.state={posts:[]},n}return V(n,t),n.prototype.componentDidMount=function(){return q(this,void 0,void 0,(function(){var t,n,e;return Z(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("/posts/list.json")];case 1:return(t=r.sent()).ok||this.onError(),n=this.setState,e={},[4,t.json()];case 2:return n.apply(this,[(e.posts=r.sent(),e)]),[3,4];case 3:return r.sent(),this.onError(),[3,4];case 4:return[2]}}))}))},n.prototype.render=function(){return c(Lt,null,c("ul",null,this.state.posts.length?this.state.posts.map((function(t){return c("li",null,c(zt,{post:t}))})):"Loading..."))},n.prototype.onError=function(){st("/404",!0)},n}(h),Vt={};function qt(t,n,e){if(3===t.nodeType){var r="textContent"in t?t.textContent:t.nodeValue||"";if(!1!==qt.options.trim){var o=0===n||n===e.length-1;if((!(r=r.match(/^[\s\n]+$/g)&&"all"!==qt.options.trim?" ":r.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===qt.options.trim||o?"":" "))||" "===r)&&e.length>1&&o)return null}return r}if(1!==t.nodeType)return null;var i=String(t.nodeName).toLowerCase();if("script"===i&&!qt.options.allowScripts)return null;var l,u,a=qt.h(i,function(t){var n=t&&t.length;if(!n)return null;for(var e={},r=0;r<n;r++){var o=t[r],i=o.name,l=o.value;""===l&&(l=!0),"on"===i.substring(0,2)&&qt.options.allowEvents&&(l=new Function(l)),e[i]=l}return e}(t.attributes),(u=(l=t.childNodes)&&Array.prototype.map.call(l,qt).filter(Yt))&&u.length?u:null);return qt.visitor&&qt.visitor(a),a}var Zt,Yt=function(t){return t},Jt={};function Qt(t){var n=(t.type||"").toLowerCase(),e=Qt.map;e&&e.hasOwnProperty(n)?(t.type=e[n],t.props=Object.keys(t.props||{}).reduce((function(n,e){var r;return n[(r=e,r.replace(/-(.)/g,(function(t,n){return n.toUpperCase()})))]=t.props[e],n}),{})):t.type=n.replace(/[^a-z0-9-]/i,"")}var Xt=function(t){function n(){t.apply(this,arguments)}return t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n,n.setReviver=function(t){Zt=t},n.prototype.shouldComponentUpdate=function(t){var n=this.props;return t.wrap!==n.wrap||t.type!==n.type||t.markup!==n.markup},n.prototype.setComponents=function(t){if(this.map={},t)for(var n in t)if(t.hasOwnProperty(n)){var e=n.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=t[n]}},n.prototype.render=function(t){var n=t.wrap;void 0===n&&(n=!0);var e,r=t.type,o=t.markup,i=t.components,l=t.reviver,u=t.onError,a=t["allow-scripts"],s=t["allow-events"],p=t.trim,f=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===n.indexOf(r)&&(e[r]=t[r]);return e}(t,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),h=l||this.reviver||this.constructor.prototype.reviver||Zt||c;this.setComponents(i);var d={allowScripts:a,allowEvents:s,trim:p};try{e=function(t,n,e,r,o){var i=function(t,n){var e,r,o,i,l="html"===n?"text/html":"application/xml";"html"===n?(i="body",o="<!DOCTYPE html>\n<html><body>"+t+"</body></html>"):(i="xml",o='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+t+"</xml>");try{e=(new DOMParser).parseFromString(o,l)}catch(t){r=t}if(e||"html"!==n||((e=Ft||(Ft=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var t=document.createElement("iframe");return t.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",t.setAttribute("sandbox","allow-forms"),document.body.appendChild(t),t.contentWindow.document}())).open(),e.write(o),e.close()),e){var u=e.getElementsByTagName(i)[0],a=u.firstChild;return t&&!a&&(u.error="Document parse failed."),a&&"parsererror"===String(a.nodeName).toLowerCase()&&(a.removeChild(a.firstChild),a.removeChild(a.lastChild),u.error=a.textContent||a.nodeValue||r||"Unknown error",u.removeChild(a)),u}}(t,n);if(i&&i.error)throw new Error(i.error);var l=i&&i.body||i;Qt.map=r||Jt;var u=l&&function(t,n,e,r){return qt.visitor=n,qt.h=e,qt.options=r||Vt,qt(t)}(l,Qt,e,o);return Qt.map=null,u&&u.props&&u.props.children||null}(o,r,h,this.map,d)}catch(t){u?u({error:t}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+t)}if(!1===n)return e&&e[0]||null;var _=f.hasOwnProperty("className")?"className":"class",m=f[_];return m?m.splice?m.splice(0,0,"markup"):"string"==typeof m?f[_]+=" markup":"object"==typeof m&&(m.markup=!0):f[_]="markup",h("div",f,e||null)},n}(h),tn=function(t){function n(){var n=t.apply(this,J(arguments))||this;return n.state={post:void 0},n}return V(n,t),n.prototype.componentDidMount=function(){return q(this,void 0,void 0,(function(){var t,n,e;return Z(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("/posts/"+this.props.slug+".html")];case 1:return(t=r.sent()).ok||this.onError(),n=this.setState,e={},[4,t.text()];case 2:return n.apply(this,[(e.post=r.sent(),e)]),[3,4];case 3:return r.sent(),this.onError(),[3,4];case 4:return[2]}}))}))},n.prototype.render=function(t,n){var e=n.post;return c(Lt,null,e?c(Xt,{markup:e,onError:this.onError.bind(this)}):"Loading...")},n.prototype.onError=function(){st("/404",!0)},n}(h),nn=function(){return c("section",{id:"content"},c("p",{style:"text-align: justify;"},"I’m David, a passionate software developer. I am always trying to learn new things and that's why I end up doing a lot of side projects just for fun. This page is still a work in progress attempt to show all of my personal projects, findings, and experiments. I hope you find it entertaining. I have a lot of interests but they are mainly focused around rendering, game development and also motion and input devices."),c("p",null,"Feel free to say hi at anytime. You can find me on any of these:",c("ul",{class:"icons",style:"display:inline;"},c("li",null,c("a",{href:"https://twitter.com/NoxWings",class:"icon brands alt fa-twitter"},c("span",{class:"label"},"Twitter"))),c("li",null,c("a",{href:"https://www.linkedin.com/in/davidgarciamiguel/",class:"icon brands alt fa-linkedin-in"},c("span",{class:"label"},"LinkedIn"))),c("li",null,c("a",{href:"https://github.com/noxwings",class:"icon brands alt fa-github"},c("span",{class:"label"},"GitHub"))),c("li",null,c("a",{href:"mailto:noxwings@gmail.com",class:"icon solid alt fa-envelope"},c("span",{class:"label"},"Email"))))),c("div",{class:"resp-container"},c("iframe",{class:"resp-iframe",src:"https://www.shadertoy.com/embed/td3SWN?paused=false&muted=false"})))},en=function(){return c(Lt,null,c("div",{id:"main",class:"wrapper style1"},c("div",{class:"container"},c("header",{class:"major"},c("h2",null,"About me")),c(nn,null))))},rn=function(){return c(Lt,null,c("div",{id:"main"},c(F,{id:"404.notFound"})))};!function(n,e,r){var u,a,s;t.__&&t.__(n,e),a=(u=r===o)?null:r&&r.__k||e.__k,n=c(f,null,[n]),s=[],x(e,(u?e:r||e).__k=n,a||i,i,void 0!==e.ownerSVGElement,r&&!u?[r]:a?null:l.slice.call(e.childNodes),s,r||i,u),C(s,n)}(c(D,{definition:{title:"NoxWings",section:{"/":"Home","/projects":"Projects","/blog":"Blog","/contact":"Contact"},home:{title:"Love rendering, vfx and technical art topics.<br/>\n                I like game engines even more than games themselves.<br/>\n                Trading sleep for knowledge."},404:{notFound:"This is not the web page you are looking for."}}},c((function(){return c(bt,null,c(Bt,{path:"/"}),c(wt,{path:"/home",to:"/"}),c(wt,{path:"/index",to:"/"}),c(Gt,{path:"/projects"}),c(Kt,{path:"/blog"}),c(tn,{path:"/blog/post/:slug"}),c(en,{path:"/contact"}),c(rn,{default:!0}))}),null)),document.body)}();
