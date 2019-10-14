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

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/WaitingUtil","dojo/text!../templates/InfographicContainer.html"],function(t,i,e,n,r,o,s,h,a,c,u,d){return i([o,s],{isInfographic:!0,templateString:d,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,getPreviewValueFunction:null,adjustElementsWhenResized:!1,_pendingResizeFlag:!1,_pendingUpdateFlag:!1,postCreate:function(){this.inherited(arguments),this._initDfd=new n},_initDfd:null,_currentInfographic:null,_updatePromise:null,_isBeingUpdated:!1,getInnerInfographic:function(){return this._currentInfographic},getContentInitPromise:function(){return this._initDfd&&this._initDfd.promise},getContentFullPromise:function(){return this._initDfd&&this._initDfd.promise.then(function(){return this._updatePromise}.bind(this))},_getTypeToClassPathMap:function(){var t={};return t[h.STATIC]="./simpleInfographic/SimpleInfographicWithDataDrilling",t[h.ATTACHMENTS]="./AttachmentsInfographic",t[h.AREA_DETAILS]="./areaDetails/AreaDetailsInfographic",t[h.LOCATOR_TABLE]="./locator/LocatorTableInfographic",t[h.COMPARISON_TABLE]="./comparison/ComparisonTableInfographic",t.dynamic="./dynamic/DynamicInfographic",t},_getRelativeRequire:function(){return t},_lastAppliedJson:null,updateInfographic:function(t){var i=this;if(this.viewDiv&&t&&h.isSupported(t.type)&&!this._isBeingUpdated){if(t.style=t.style||{},this._lastAppliedJson=t,this._type=t.type,this._currentInfographic)return this._updatePromise=this._currentInfographic.updateInfographic(t);this._initDfd=this._initDfd||new n,this._isBeingUpdated=!0;var e=this._getTypeToClassPathMap(),r=e[h.isDynamic(t.type)?"dynamic":t.type],o=new n;return this._getRelativeRequire()([r],function(t){o.resolve(t)}),u.showProgressPromise(this.domNode,o.promise),this.onContentLoadingStart(),o.promise.then(function(e){i._createInfographicForClass(t,e),i.onContentLoadingEnd()}).then(function(){return i._isBeingUpdated=!1,a.isNodeInLayout(i.domNode)?i._updatePromise=i._currentInfographic.updateInfographic(t):i._pendingUpdateFlag=!0,i._initDfd.resolve(),i._initDfd=null,i._updatePromise})}},_createInfographicForClass:function(t,i){var n=this,r=e.mixin({viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex,getPreviewValueFunction:this.getPreviewValueFunction,width:this.width,height:this.height,adjustElementsWhenResized:this.adjustElementsWhenResized,onContentLoadingStart:function(){n.onContentLoadingStart()},onContentLoadingEnd:function(){n.onContentLoadingEnd()},onShowWaiting:function(t){return u.showProgressPromise(n.domNode,t)}},this._prepareCreationParameters(t),r);return this._currentInfographic=new i(r),this._currentInfographic.placeAt(this.viewDiv),this._currentInfographic},_prepareCreationParameters:function(t){return null},_type:null,getType:function(){return this._type},width:null,height:null,resize:function(t,i){void 0!==t&&(this.width=t,this.height=i),r(this._initDfd&&this._initDfd.promise,function(){if(!a.isNodeInLayout(this.domNode))return void(this._pendingResizeFlag=!0);this._currentInfographic&&this._currentInfographic.resize(this.width,this.height)}.bind(this))},getPreferredHeight:function(){return this._currentInfographic.getPreferredHeight&&this._currentInfographic.getPreferredHeight()},collapseContent:function(){this._currentInfographic.collapseContent&&this._currentInfographic.collapseContent()},toJson:function(){return this._currentInfographic?this._currentInfographic.toJson():this._lastAppliedJson&&e.clone(this._lastAppliedJson)},getVisualState:function(){return this._currentInfographic&&this._currentInfographic.getVisualState&&this._currentInfographic.getVisualState()},setVisualState:function(t){return this._currentInfographic&&this._currentInfographic.setVisualState&&this._currentInfographic.setVisualState(t)},notifyShown:function(){r(this._initDfd&&this._initDfd.promise,function(){a.isNodeInLayout(this.domNode)&&(this._pendingResizeFlag&&this.resize(),this._pendingResizeFlag=!1,this._updatePromise=this._pendingUpdateFlag&&this._currentInfographic.updateInfographic(this._lastAppliedJson),this._pendingUpdateFlag=!1,r(this._updatePromise,function(){this._currentInfographic&&this._currentInfographic.notifyShown&&this._currentInfographic.notifyShown()}.bind(this)))}.bind(this))},_panelScale:null,notifyPanelScaleChanged:function(t){this._panelScale=t,r(this._initDfd&&this._initDfd.promise,function(){this._currentInfographic&&this._currentInfographic.notifyPanelScaleChanged&&this._currentInfographic.notifyPanelScaleChanged(this._panelScale)}.bind(this))},isMouseOver:function(){return c.isMouseOver(this.domNode)||this._currentInfographic&&this._currentInfographic.isMouseOver&&this._currentInfographic.isMouseOver()},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},destroy:function(){this._currentInfographic&&this._currentInfographic.destroy(),this.inherited(arguments)}})});