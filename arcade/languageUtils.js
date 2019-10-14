// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","dojo/number","../moment","./FunctionWrapper","./ImmutableArray","./ImmutablePathArray","./ImmutablePointArray","../geometry/Extent","../geometry/Geometry","../geometry/Multipoint","../geometry/Point","../geometry/Polygon","../geometry/Polyline"],function(e,n,t,r,i,a,u,o,l,f,s,c,d,g){"use strict";function m(e,n,t){return""===n?e:null===n?e:void 0===n?e:n===t?e:n===t?e:e=e.split(n).join(t)}function h(e){return e instanceof re||e instanceof i||e instanceof ie}function v(e){return!!y(e)||(!!S(e)||(!!b(e)||(!!x(e)||(null===e||(e===n.voidOperation||"number"==typeof e)))))}function p(e,n){return void 0===e?n:e}function y(e){return"string"==typeof e||e instanceof String}function x(e){return"boolean"==typeof e}function S(e){return"number"==typeof e}function T(e){return e instanceof Array}function N(e){return!0===(e&&e.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===e.declaredRootClass)}function R(e){return!0===(e&&e.declaredRootClass&&"esri.arcade.featureSetCollection"===e.declaredRootClass)}function O(e){return e instanceof a}function b(e){return e instanceof Date}function C(e,n,t){if(e.length<n||e.length>t)throw new Error("Function called with wrong number of Parameters")}function _(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?t:3&t|8).toString(16)})}function w(e,n){return!1===isNaN(e)?void 0===n||null===n||""===n?e.toString():(n=m(n,"‰",""),n=m(n,"¤",""),t.format(e,{pattern:n})):e.toString()}function I(e,n){var t=r(e);return void 0===n||null===n||""===n?t.format():t.format(A(n))}function A(e){return e.replace(/(LTS)|L|l/g,function(e){return"["+e+"]"})}function F(e,n,t){switch(t){case">":return e>n;case"<":return e<n;case">=":return e>=n;case"<=":return e<=n}return!1}function M(e,t,r){if(null===e){if(null===t||t===n.voidOperation)return F(null,null,r);if(S(t))return F(0,t,r);if(y(t))return F(0,E(t),r);if(x(t))return F(0,E(t),r);if(b(t))return F(0,t.getTime(),r)}if(e===n.voidOperation){if(null===t||t===n.voidOperation)return F(null,null,r);if(S(t))return F(0,t,r);if(y(t))return F(0,E(t),r);if(x(t))return F(0,E(t),r);if(b(t))return F(0,t.getTime(),r)}else if(S(e)){if(S(t))return F(e,t,r);if(x(t))return F(e,E(t),r);if(null===t||t===n.voidOperation)return F(e,0,r);if(y(t))return F(e,E(t),r);if(b(t))return F(e,t.getTime(),r)}else if(y(e)){if(y(t))return F(k(e),k(t),r);if(b(t))return F(E(e),t.getTime(),r);if(S(t))return F(E(e),t,r);if(null===t||t===n.voidOperation)return F(E(e),0,r);if(x(t))return F(E(e),E(t),r)}else if(b(e)){if(b(t))return F(e,t,r);if(null===t||t===n.voidOperation)return F(e.getTime(),0,r);if(S(t))return F(e.getTime(),t,r);if(x(t))return F(e.getTime(),E(t),r);if(y(t))return F(e.getTime(),E(t),r)}else if(x(e)){if(x(t))return F(e,t,r);if(S(t))return F(E(e),E(t),r);if(b(t))return F(E(e),t.getTime(),r);if(null===t||t===n.voidOperation)return F(E(e),0,r);if(y(t))return F(E(e),E(t),r)}return!!j(e,t)&&("<="===r||">="===r)}function j(e,t){if(e===t)return!0;if(null===e&&t===n.voidOperation||null===t&&e===n.voidOperation)return!0;if(b(e)&&b(t))return e.getTime()===t.getTime();if(e instanceof u)return e.equalityTest(t);if(e instanceof o)return e.equalityTest(t);if(e instanceof c&&t instanceof c){var r=void 0,i=void 0;if(r=e.getCacheValue("_arcadeCacheId"),i=t.getCacheValue("_arcadeCacheId"),void 0!==r&&null!==r)return r===i}if(void 0!==e&&void 0!==t&&null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t){if(e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return!0;if(e._underlyingGraphic===t._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return!0}return!1}function k(e,t){if(y(e))return e;if(null===e)return"";if(S(e))return w(e,t);if(x(e))return e.toString();if(b(e))return I(e,t);if(e instanceof f)return JSON.stringify(e.toJson());if(T(e)){for(var r=[],i=0;i<e.length;i++)r[i]=Z(e[i]);return"["+r.join(",")+"]"}if(e instanceof a){for(var r=[],i=0;i<e.length();i++)r[i]=Z(e.get(i));return"["+r.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():h(e)?"object, Function":(n.voidOperation,"")}function D(e){var n=[];if(!1===T(e))return null;if(e instanceof a){for(var t=0;t<e.length();t++)n[t]=E(e.get(t));return n}for(var t=0;t<e.length;t++)n[t]=E(e[t]);return n}function P(e,t){if(y(e))return e;if(null===e)return"";if(S(e))return w(e,t);if(x(e))return e.toString();if(b(e))return I(e,t);if(e instanceof f)return e instanceof l?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+W(e.spatialReference)+"}":W(e.toJson(),function(e,n){return e.key===n.key?0:"spatialReference"===e.key?1:"spatialReference"===n.key?-1:e.key<n.key?-1:e.key>n.key?1:0});if(T(e)){for(var r=[],i=0;i<e.length;i++)r[i]=Z(e[i]);return"["+r.join(",")+"]"}if(e instanceof a){for(var r=[],i=0;i<e.length();i++)r[i]=Z(e.get(i));return"["+r.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():h(e)?"object, Function":(n.voidOperation,"")}function Z(e){if(null===e)return"null";if(x(e)||S(e)||y(e))return JSON.stringify(e);if(e instanceof f)return P(e);if(e instanceof a)return P(e);if(e instanceof Array)return P(e);if(e instanceof Date)return JSON.stringify(I(e,""));if(null!==e&&"object"==typeof e){if(void 0!==e.castToText)return e.castToText()}else if(e===n.voidOperation)return"null";return"null"}function E(e,r){return S(e)?e:null===e?0:""===e?0:b(e)?NaN:x(e)?e?1:0:T(e)?NaN:""===e?NaN:void 0===e?NaN:void 0!==r&&y(e)?(r=m(r,"‰",""),r=m(r,"¤",""),t.parse(e,{pattern:r})):e===n.voidOperation?0:Number(e)}function J(e,n){if(b(e))return e;if(y(e)){var t=r(e,[void 0===n||null===n||""===n?r.ISO_8601:n]);if(t.isValid())return t.toDate()}return null}function V(e,n){if(b(e))return r(e);if(y(e)){var t=r(e,[void 0===n||null===n||""===n?r.ISO_8601:n]);if(t.isValid())return t}return null}function z(e){return x(e)?e:y(e)?"true"===(e=e.toLowerCase()):!!S(e)&&(0!==e&&!isNaN(e))}function G(e,n){return null===e||void 0===e?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=n),e)}function L(e){return null===e?null:e instanceof c?"NaN"===e.x||null===e.x||isNaN(e.x)?null:e:e instanceof d?0===e.rings.length?null:e:e instanceof g?0===e.paths.length?null:e:e instanceof s?0===e.points.length?null:e:e instanceof l?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null}function q(e,n){if(!e)return n;if(!e.domain)return n;var t=null;n="string"===e.field.type||"esriFieldTypeString"===e.field.type?k(n):E(n);for(var r=0;r<e.domain.codedValues.length;r++){var i=e.domain.codedValues[r];i.code===n&&(t=i)}return null===t?n:t.name}function U(e,n){if(!e)return n;if(!e.domain)return n;var t=null;n=k(n);for(var r=0;r<e.domain.codedValues.length;r++){var i=e.domain.codedValues[r];i.name===n&&(t=i)}return null===t?n:t.code}function B(e,n,t,r){if(void 0===t&&(t=null),!n)return null;if(!n.fields)return null;for(var i=null,a=0;a<n.fields.length;a++){var u=n.fields[a];u.name.toLowerCase()===e.toString().toLowerCase()&&(i=u)}if(null===i)throw new Error("Field not found");var o,l;return r||(r=t&&n.typeIdField&&t._field(n.typeIdField)),null!=r&&n.types.some(function(e){return e.id===r&&(o=e.domains&&e.domains[i.name],o&&"inherited"===o.type&&(o=K(i.name,n),l=!0),!0)}),l||o||(o=K(e,n)),{field:i,domain:o}}function K(e,n){var t;return n.fields.some(function(n){return n.name===e&&(t=n.domain),!!t}),t}function W(e,n){n||(n={}),"function"==typeof n&&(n={cmp:n});var t="boolean"==typeof n.cycles&&n.cycles,r=n.cmp&&function(e){return function(n){return function(t,r){var i={key:t,value:n[t]},a={key:r,value:n[r]};return e(i,a)}}}(n.cmp),i=[];return function e(n){if(n&&n.toJson&&"function"==typeof n.toJson&&(n=n.toJson()),void 0!==n){if("number"==typeof n)return isFinite(n)?""+n:"null";if("object"!=typeof n)return JSON.stringify(n);var a,u;if(Array.isArray(n)){for(u="[",a=0;a<n.length;a++)a&&(u+=","),u+=e(n[a])||"null";return u+"]"}if(null===n)return"null";if(-1!==i.indexOf(n)){if(t)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var o=i.push(n)-1,l=Object.keys(n).sort(r&&r(n));for(u="",a=0;a<l.length;a++){var f=l[a],s=e(n[f]);s&&(u&&(u+=","),u+=JSON.stringify(f)+":"+s)}return i.splice(o,1),"{"+u+"}"}}(e)}function H(e){if(null===e)return null;for(var n=[],t=0,r=e;t<r.length;t++){var i=r[t];i&&i.declaredClass&&"esri.arcade.Feature"===i.declaredClass?n.push(i.geometry()):n.push(i)}return n}function Q(e,n){if(!(n instanceof c))throw new Error("Invalid Argument");e.push([n.x,n.y])}function X(e,n){if(T(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(T(e)){for(var u=0,l=e;u<l.length;u++){var f=l[u];Q(i,f)}i.length>0&&(a=e[0].spatialReference,t=e[0].hasZ,r=e[0].hasM)}else if(e instanceof o)i=e._elements,i.length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else{if(!O(e))throw new Error("Invalid Argument");for(var s=0,c=e.toArray();s<c.length;s++){var f=c[s];Q(i,f)}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}if(0===i.length)return null;return!1===new d({rings:[],spatialReference:{wkid:4326}}).isClockwise(i)&&(i=i.slice(0).reverse()),new d({rings:[i],spatialReference:a,hasZ:t,hasM:r})}return e}function Y(e,n){if(T(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(T(e)){for(var u=0,l=e;u<l.length;u++){var f=l[u];Q(i,f)}i.length>0&&(a=e[0].spatialReference,t=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof o)i=e._elements,i.length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(var s=0,c=e.toArray();s<c.length;s++){var f=c[s];Q(i,f)}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new g({paths:[i],spatialReference:a,hasZ:t,hasM:r})}return e}function $(e,n){if(T(e)||O(e)){var t=!1,r=!1,i=[],a=n;if(T(e)){for(var u=0,l=e;u<l.length;u++){var f=l[u];Q(i,f)}i.length>0&&(a=e[0].spatialReference,t=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof o)i=e._elements,i.length>0&&(t=e._hasZ,r=e._hasM,a=e.get(0).spatialReference);else if(O(e)){for(var c=0,d=e.toArray();c<d.length;c++){var f=d[c];Q(i,f)}i.length>0&&(a=e.get(0).spatialReference,t=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new s({points:i,spatialReference:a,hasZ:t,hasM:r})}return e}function ee(e,n){void 0===n&&(n=!1);var t=[];if(null===e)return t;if(!0===T(e)){for(var r=0;r<e.length;r++){var i=k(e[r]);""===i&&!0!==n||t.push(i)}return t}if(e instanceof a){for(var r=0;r<e.length();r++){var i=k(e.get(r));""===i&&!0!==n||t.push(i)}return t}if(v(e)){var i=k(e);return""===i&&!0!==n||t.push(i),t}return[]}Object.defineProperty(n,"__esModule",{value:!0});var ne=function(){function e(e){this.value=e}return e}();n.ReturnResultE=ne;var te=function(){function e(e){this.value=e}return e}();n.ImplicitResultE=te;var re=function(){function e(e){this.fn=e}return e}();n.NativeFunctionE=re;var ie=function(){function e(e){this.fn=e}return e}();n.SizzleFunctionE=ie,n.NativeFunction=re,n.ImplicitResult=te,n.ReturnResult=ne,n.SizzleFunction=ie,n.voidOperation={type:"VOID"},n.breakResult={type:"BREAK"},n.continueResult={type:"CONTINUE"},n.multiReplace=m,n.isFunctionParameter=h,n.isSimpleType=v,n.defaultUndefined=p,n.isString=y,n.isBoolean=x,n.isNumber=S,n.isArray=T,n.isFeatureSet=N,n.isFeatureSetCollection=R,n.isImmutableArray=O,n.isDate=b,n.pcCheck=C,n.generateUUID=_,n.formatNumber=w,n.formatDate=I,n.standardiseDateFormat=A,n.greaterThanLessThan=M,n.equalityTest=j,n.toString=k,n.toNumberArray=D,n.toStringExplicit=P,n.toNumber=E,n.toDate=J,n.toDateM=V,n.toBoolean=z,n.fixSpatialReference=G,n.fixNullGeometry=L,n.getDomainValue=q,n.getDomainCode=U,n.getDomain=B,n.stableStringify=W,n.autoCastFeatureToGeometry=H,n.autoCastArrayOfPointsToPolygon=X,n.autoCastArrayOfPointsToPolyline=Y,n.autoCastArrayOfPointsToMultiPoint=$,n.toStringArray=ee});