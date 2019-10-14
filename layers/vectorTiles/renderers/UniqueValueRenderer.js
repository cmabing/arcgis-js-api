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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../symbols","../core/arrayUtils","../core/Error","../core/lang","../core/Logger","../core/urlUtils","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../portal/Portal","./Renderer","./support/diffUtils","./support/LegendOptions","./support/UniqueValueInfo","../support/arcadeUtils","../symbols/support/jsonUtils","../symbols/support/styleUtils","../symbols/support/typeUtils"],function(e,t,r,l,o,i,n,u,a,s,p,y,f,d,c,m,b,h,v,g,S,w){var V=s.getLogger("esri.renderers.UniqueValueRenderer"),q=f.ensureType(h.default);return function(e){function t(t){var r=e.call(this)||this;return r._valueInfoMap={},r._isDefaultSymbolDerived=!1,r.type="unique-value",r.backgroundFillSymbol=null,r.field=null,r.field2=null,r.field3=null,r.valueExpression=null,r.valueExpressionTitle=null,r.legendOptions=null,r.defaultLabel=null,r.fieldDelimiter=null,r.portal=null,r.styleOrigin=null,r.diff={uniqueValueInfos:function(e,t){if(e||t){if(!e||!t)return{type:"complete",oldValue:e,newValue:t};for(var r=!1,l={type:"collection",added:[],removed:[],changed:[],unchanged:[]},o=0;o<t.length;o++)!function(o){var i=n.find(e,function(e){return e.value===t[o].value});i?m.diff(i,t[o])?(l.changed.push({type:"complete",oldValue:i,newValue:t[o]}),r=!0):(l.unchanged.push({oldValue:i,newValue:t[o]}),r=!0):(l.added.push(t[o]),r=!0)}(o);for(var o=0;o<e.length;o++)!function(o){n.find(t,function(t){return t.value===e[o].value})||(l.removed.push(e[o]),r=!0)}(o);return r?l:void 0}}},r._set("uniqueValueInfos",[]),r}return r(t,e),s=t,t.prototype.writeType=function(e,t,r,l){t.type="uniqueValue"},t.prototype.writeBackgroundFillSymbolWebScene=function(e,t,r,l){g.writeTarget(e,t,r,l)},t.prototype.castField=function(e){return null==e?e:"function"==typeof e?e:f.ensureString(e)},t.prototype.writeField=function(e,t,r,l){"string"==typeof e?t[r]=e:l&&l.messages?l.messages.push(new u("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):V.error(".field: cannot write field to JSON since it's not a string value")},Object.defineProperty(t.prototype,"compiledFunc",{get:function(){return v.createFunction(this.valueExpression)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"defaultSymbol",{set:function(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)},enumerable:!0,configurable:!0}),t.prototype.readDefaultSymbol=function(e,t,r){return g.read(e,t,r)},t.prototype.writeDefaultSymbolWebScene=function(e,t,r,l){this._isDefaultSymbolDerived||g.writeTarget(e,t,r,l)},t.prototype.writeDefaultSymbol=function(e,t,r,l){this._isDefaultSymbolDerived||g.writeTarget(e,t,r,l)},t.prototype.readPortal=function(e,t,r){return r.portal||d.getDefault()},t.prototype.readStyleOrigin=function(e,t,r){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){var l=p.read(t.styleUrl,r);return Object.freeze({styleUrl:l})}},t.prototype.writeStyleOrigin=function(e,t,r,l){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=p.write(e.styleUrl,l),p.isAbsolute(t.styleUrl)&&(t.styleUrl=p.normalize(t.styleUrl)))},Object.defineProperty(t.prototype,"uniqueValueInfos",{set:function(e){if(this.styleOrigin)return void V.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");this._set("uniqueValueInfos",e),this._updateValueInfoMap()},enumerable:!0,configurable:!0}),t.prototype.addUniqueValueInfo=function(e,t){if(this.styleOrigin)return void V.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");var r;r="object"==typeof e?q(e):new h.default({value:e,symbol:t}),this.uniqueValueInfos.push(r),this._valueInfoMap[r.value]=r},t.prototype.removeUniqueValueInfo=function(e){if(this.styleOrigin)return void V.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");for(var t=0;t<this.uniqueValueInfos.length;t++){if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}},t.prototype.getUniqueValueInfo=function(e,t){var r,l=this.field,o=e.attributes;if(this.valueExpression)r=v.executeFunction(this.compiledFunc,v.createExecContext(e,v.getViewInfo(t)));else if("function"!=typeof l&&this.field2){var i=this.field2,n=this.field3,u=[];l&&u.push(o[l]),i&&u.push(o[i]),n&&u.push(o[n]),r=u.join(this.fieldDelimiter||"")}else"function"==typeof l?r=l(e):l&&(r=o[l]);return this._valueInfoMap[r+""]},t.prototype.getSymbol=function(e,t){var r=this.getUniqueValueInfo(e,t);return r&&r.symbol||this.defaultSymbol},t.prototype.getSymbols=function(){for(var e=[],t=0,r=this.uniqueValueInfos;t<r.length;t++){var l=r[t];l.symbol&&e.push(l.symbol)}return this.defaultSymbol&&e.push(this.defaultSymbol),e},t.prototype.clone=function(){var e=new s({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:a.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:a.clone(this.visualVariables),legendOptions:a.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:a.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);var t=a.clone(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(a.clone(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e},t.prototype.collectRequiredFields=function(e){this.inherited(arguments),[this.field,this.field2,this.field3].forEach(function(t){t&&"string"==typeof t&&(e[t]=!0)}),this.valueExpression&&v.extractFieldNames(this.valueExpression).forEach(function(t){e[t]=!0})},t.prototype.populateFromStyle=function(){var e=this;return S.fetchStyle(this.styleOrigin,{portal:this.portal}).then(function(t){var r=[];return e._valueInfoMap={},t&&t.data&&Array.isArray(t.data.items)&&t.data.items.forEach(function(l){var o=new i.WebStyleSymbol({styleUrl:t.styleUrl,styleName:t.styleName,portal:e.portal,name:l.name});e.defaultSymbol||l.name!==t.data.defaultItem||(e.defaultSymbol=o,e._isDefaultSymbolDerived=!0);var n=new h.default({value:l.name,symbol:o});r.push(n),e._valueInfoMap[l.name]=n}),e._set("uniqueValueInfos",Object.freeze(r)),!e.defaultSymbol&&e.uniqueValueInfos.length&&(e.defaultSymbol=e.uniqueValueInfos[0].symbol,e._isDefaultSymbolDerived=!0),e})},t.prototype._updateValueInfoMap=function(){var e=this;this._valueInfoMap={},this.uniqueValueInfos.forEach(function(t){return e._valueInfoMap[t.value+""]=t})},t.fromPortalStyle=function(e,t){var r=new s(t&&t.properties);r._set("styleOrigin",Object.freeze({styleName:e})),r._set("portal",t&&t.portal||d.getDefault());var l=r.populateFromStyle();return l.catch(function(t){V.error("#fromPortalStyle('"+e+"'[, ...])","Failed to create unique value renderer from style name",t)}),l},t.fromStyleUrl=function(e,t){var r=new s(t&&t.properties);r._set("styleOrigin",Object.freeze({styleUrl:e}));var l=r.populateFromStyle();return l.catch(function(t){V.error("#fromStyleUrl('"+e+"'[, ...])","Failed to create unique value renderer from style URL",t)}),l},l([y.property()],t.prototype,"type",void 0),l([y.writer("type")],t.prototype,"writeType",null),l([y.property({types:{base:i.BaseSymbol,key:"type",typeMap:{"simple-fill":w.rendererTypes.typeMap["simple-fill"],"picture-fill":w.rendererTypes.typeMap["picture-fill"],"polygon-3d":w.rendererTypes.typeMap["polygon-3d"]}},json:{read:g.read,write:g.writeTarget}})],t.prototype,"backgroundFillSymbol",void 0),l([y.writer("web-scene","backgroundFillSymbol",{backgroundFillSymbol:{type:i.PolygonSymbol3D}})],t.prototype,"writeBackgroundFillSymbolWebScene",null),l([y.property({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],t.prototype,"field",void 0),l([y.cast("field")],t.prototype,"castField",null),l([y.writer("field")],t.prototype,"writeField",null),l([y.property({type:String,json:{write:!0}})],t.prototype,"field2",void 0),l([y.property({type:String,json:{write:!0}})],t.prototype,"field3",void 0),l([y.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),l([y.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),l([y.property({dependsOn:["valueExpression"]})],t.prototype,"compiledFunc",null),l([y.property({type:b.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),l([y.property({type:String,json:{write:!0}})],t.prototype,"defaultLabel",void 0),l([y.property({types:w.rendererTypes})],t.prototype,"defaultSymbol",null),l([y.reader("defaultSymbol")],t.prototype,"readDefaultSymbol",null),l([y.writer("web-scene","defaultSymbol",{defaultSymbol:{types:w.rendererTypes3D}})],t.prototype,"writeDefaultSymbolWebScene",null),l([y.writer("defaultSymbol")],t.prototype,"writeDefaultSymbol",null),l([y.property({type:String,json:{write:!0}})],t.prototype,"fieldDelimiter",void 0),l([y.property({type:d,readOnly:!0})],t.prototype,"portal",void 0),l([y.reader("portal",["styleName"])],t.prototype,"readPortal",null),l([y.property({readOnly:!0})],t.prototype,"styleOrigin",void 0),l([y.reader("styleOrigin",["styleName","styleUrl"])],t.prototype,"readStyleOrigin",null),l([y.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],t.prototype,"writeStyleOrigin",null),l([y.property({type:[h.default],json:{write:{overridePolicy:function(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],t.prototype,"uniqueValueInfos",null),l([y.property({dependsOn:["field","field2","field3","valueExpression"],readOnly:!0})],t.prototype,"requiredFields",void 0),l([o(1,y.cast(w.ensureType))],t.prototype,"addUniqueValueInfo",null),t=s=l([y.subclass("esri.renderers.UniqueValueRenderer")],t);var s}(y.declared(c))});