(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();function M(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),U=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),g=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=g&&e[g]||e["@@iterator"],typeof e=="function"?e:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,L={};function p(e,t,i){this.props=e,this.context=t,this.refs=L,this.updater=i||P}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T(){}T.prototype=p.prototype;function R(e,t,i){this.props=e,this.context=t,this.refs=L,this.updater=i||P}var b=R.prototype=new T;b.constructor=R;I(b,p.prototype);b.isPureReactComponent=!0;var O=Array.isArray,N=Object.prototype.hasOwnProperty,w={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,i){var n,r={},o=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(o=""+t.key),t)N.call(t,n)&&!A.hasOwnProperty(n)&&(r[n]=t[n]);var f=arguments.length-2;if(f===1)r.children=i;else if(1<f){for(var s=Array(f),a=0;a<f;a++)s[a]=arguments[a+2];r.children=s}if(e&&e.defaultProps)for(n in f=e.defaultProps,f)r[n]===void 0&&(r[n]=f[n]);return{$$typeof:y,type:e,key:o,ref:c,props:r,_owner:w.current}}function Q(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var j=/\/+/g;function S(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function h(e,t,i,n,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case U:c=!0}}if(c)return c=e,r=r(c),e=n===""?"."+S(c,0):n,O(r)?(i="",e!=null&&(i=e.replace(j,"$&/")+"/"),h(r,t,i,"",function(a){return a})):r!=null&&(k(r)&&(r=Q(r,i+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(j,"$&/")+"/")+e)),t.push(r)),1;if(c=0,n=n===""?".":n+":",O(e))for(var f=0;f<e.length;f++){o=e[f];var s=n+S(o,f);c+=h(o,t,i,s,r)}else if(s=Y(e),typeof s=="function")for(e=s.call(e),f=0;!(o=e.next()).done;)o=o.value,s=n+S(o,f++),c+=h(o,t,i,s,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,i){if(e==null)return e;var n=[],r=0;return h(e,n,"","",function(o){return t.call(i,o,r++)}),n}function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},_={transition:null},ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:_,ReactCurrentOwner:w};u.Children={map:d,forEach:function(e,t,i){d(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=q;u.Profiler=B;u.PureComponent=R;u.StrictMode=V;u.Suspense=G;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;u.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=I({},e.props),r=e.key,o=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,c=w.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)N.call(t,s)&&!A.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&f!==void 0?f[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=i;else if(1<s){f=Array(s);for(var a=0;a<s;a++)f[a]=arguments[a+2];n.children=f}return{$$typeof:y,type:e.type,key:r,ref:o,props:n,_owner:c}};u.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z,_context:e},e.Consumer=e};u.createElement=D;u.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:W,render:e}};u.isValidElement=k;u.lazy=function(e){return{$$typeof:K,_payload:{_status:-1,_result:e},_init:Z}};u.memo=function(e,t){return{$$typeof:J,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=_.transition;_.transition={};try{e()}finally{_.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,i){return l.current.useImperativeHandle(e,t,i)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,i){return l.current.useReducer(e,t,i)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,i){return l.current.useSyncExternalStore(e,t,i)};u.useTransition=function(){return l.current.useTransition()};u.version="18.2.0";(function(e){e.exports=u})(E);const x=M(E.exports);var $={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=E.exports,re=Symbol.for("react.element"),ne=Symbol.for("react.fragment"),oe=Object.prototype.hasOwnProperty,ue=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ie={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,i){var n,r={},o=null,c=null;i!==void 0&&(o=""+i),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)oe.call(t,n)&&!ie.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:re,type:e,key:o,ref:c,props:r,_owner:ue.current}}v.Fragment=ne;v.jsx=F;v.jsxs=F;(function(e){e.exports=v})($);const m=$.exports.jsx,C=$.exports.jsxs;function ce(){return C("hgroup",{children:[m("h1",{children:"Meet the StarGazers"}),C("p",{children:["Members of an ",m("b",{children:"intergalactic alliance"})," paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education."]})]})}x.createRoot(document.getElementById("root")).render(m(x.StrictMode,{children:m(ce,{})}));
