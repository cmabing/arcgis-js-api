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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-style","dojo/query","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/infographicUtils/theme","./_Infographic","../InfographicTypes","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/MouseUtil","../utils/InfographicJsonUtil","../extentions/BaseSelectComparisonExt","dojo/text!../../templates/DynamicInfographic.html","dojo/i18n!esri/nls/jsapi","../../../_devConfig"],function(t,e,i,r,o,n,s,a,h,l,g,c,d,u,f,_,p,y,m,w,v){w=w.geoenrichment.dijit.ReportPlayer.Infographics;var I={};I[c.ONE_VAR]=230,I[c.AGE_PYRAMID]=0,I[c.RELATED_VARS]=320,I[c.TAPESTRY]=300,I[c.PRIZM5]=300;var S=t([a,h],{templateString:m,nls:w,viewModel:null,theme:null,currentFeatureIndex:null,_infographic:null,_progressHanlder:null,_stdPolygonsController:null,_thisAreasHighlightController:null,_initPromise:null,buildRendering:function(){y.init(),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._showError(!1),this._showEmptyView(!1)},_currentInfographicJson:null,updateInfographic:function(t){if(this.viewDiv)return this._destroyCurrentInfographic(),this._currentInfographicJson=t,this.viewModel.dynamicReportInfo&&this._currentInfographicJson.calcData&&c.supportsComparison(this._currentInfographicJson.type)&&(this._stdPolygonsController=this.viewModel.getStdPolygonsController(this._currentInfographicJson.calcData.calculatorName,this.currentFeatureIndex),this._currentInfographicJson.type===c.ONE_VAR&&(this._thisAreasHighlightController=this.viewModel.getThisAreasHighlightController())),this._enrichInfographicJsonWithProps(t),this.domNode.style.opacity="0.001",this._initPromise=r(this._createInfographicWidgetFromJson(t),function(){this._applyTheme(t),this.domNode.style.opacity=""}.bind(this)),this._initPromise},_enrichInfographicJsonWithProps:function(t){p.setLevels(t,t.levels)},_createInfographicWidgetFromJson:function(t){var e=this,o=new i,n=this.viewModel.getInfographicDefaultStyles(this.theme);if(l.set(this.viewDiv,n&&n.agePyramid&&n.agePyramid.theme||"light"),this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.infographicOptions){var s=this.viewModel.dynamicReportInfo.infographicOptions;return this.viewModel.dynamicReportInfo.isFixedDataMode||this.viewModel.dynamicReportInfo.geClient.hasCapability("ComparisonLevelsInCalculators")||(t.calcData=null),this._infographic=new g({documentStyleProvider:this.viewModel.getDocumentDefaultStyles(this.theme),infographicStyleProvider:n,widgetParams:this._getWidgetCreationParams(t),returnGeometry:!1,autoTitle:!1,subtitle:!1,levels:p.getSubLevels(t),highestLevel:p.getHighestLevel(t),onDataRequest:function(){e._showProgress(!0,"data")},onDataReady:function(){r(e.resize(),function(){e._showProgress(!1,"data"),e._syncWithShownFeatures(),o.resolve()})},onDataError:function(){e._showProgress(!1,"data"),e._showError(!0)},onExpandedStateChanged:function(){e._doResize()},onSelectedFeatureChanged:function(){e._syncWithShownFeatures()}}).placeAt(this.infographicDiv),this._showProgress(!0,"item"),r(function(){if(t.calcData){return{title:t.title,type:t.type,variables:t.variables||t.calcData.variables}}return r(s.getOptions().getItems(s.countryID),function(e){var i;return e.some(function(e){if(e.variables&&e.variables.length){var r=p.analyzeVariables(t),o=e.variables[0];return r.variableID&&-1!==o.indexOf(r.variableID)?(i=e,!0):r.dataCollectionID&&0===o.indexOf(r.dataCollectionID)?(i=e,!0):void 0}}),i})}(),function(i){if(e._showProgress(!1,"item"),i){var n=s.createGeoenrichment({infographicJson:t,areaData:e.viewModel.dynamicReportInfo.fieldData.areaData,isMultiFeature:!1,currentFeatureIndex:e.currentFeatureIndex});e._infographic.setGeoenrichment(n),e._infographic.set("studyArea",s.studyArea),e._infographic.set("countryID",s.countryID),e._infographic.set("type",t.type),e._infographic.set("variables",i.variables),e._infographic.set("title",i.title),e._infographic.startup();var a=!n.isBusy();return t.title=t.title||i.title,r(e.resize(),function(){return a&&(e._showProgress(!1,"data"),e._syncWithShownFeatures(),o.resolve()),o.promise})}e._showError(!0)})}try{return this._createDummyInfographic(t)}catch(t){console.log(t),this._showError(!0)}},_getWidgetCreationParams:function(t){var e={};switch(t.type){case c.AGE_PYRAMID:e.showVerticalAxis=t.showVerticalAxis;break;case c.ONE_VAR:e.isMultiFeature=!1;break;case c.TAPESTRY:case c.PRIZM5:e.titleStyle=t.style.titleStyle,e.backgroundColor=t.style.backgroundColor,e.tableBackgroundColor=t.style.tableBackgroundColor,e.tableBorderColor=t.style.tableBorderColor,e.textStyle=t.style.textStyle,e.subtextStyle=t.style.subtextStyle,e.hyperlinkTextStyle=t.style.hyperlinkTextStyle,e.detailsValueBorderColor=t.style.detailsValueBorderColor}return e},_createDummyInfographic:function(t){},_syncWithShownFeatures:function(){if(this._stdPolygonsController&&this._infographic&&this._infographic._widget){this._stdPolygonsController.setAttributeFields(this._infographic.dataProvider.getAttributeFields());var t,e=this._infographic.dataProvider.getAllGeographyAttributes({ignoreFilters:!0});if(this._currentInfographicJson.type===c.ONE_VAR)t=this._infographic.dataProvider.getAllGeographyAttributes();else{t=[];var i=this._infographic._widget.select.getSelectedAttributes();i&&t.push(i)}this._stdPolygonsController.setShownFeatureAttributes(t),this._stdPolygonsController.setAllFeatureAttributes(e),this._currentInfographicJson.type===c.ONE_VAR&&(this._registerStdPolygonsHighlight(e),this._registerThisAreaHighlight())}},_registerStdPolygonsHighlight:function(t){var e=this;this._stdPolygonsController.registerInfographic({highlightInfographicForAttributes:function(t){if(e._isCreated()){var i=e._infographic._widget.setTableRowHighlighted(t);i&&(e.viewDiv.scrollTop=i.offsetTop+200-e.viewDiv.clientHeight)}}}).then(function(){if(e._isCreated()){var i;s(e._infographic._widget.table,"mouseover, mousemove",function(){var r=e._infographic._widget.getOverRow();if(r&&r!==i){i=r;var o,n=r&&r.cells[0].innerHTML;n&&t.some(function(t){if(t.StdGeographyName===n)return o=t,!0}),o&&(e._stdPolygonsController.highlightGraphicForAttributes(o),e._infographic._widget.setTableRowHighlighted(o))}}),s(e._infographic._widget.table,"mouseout",function(){e._stdPolygonsController.highlightGraphicForAttributes(null),e._infographic._widget.setTableRowHighlighted(null),i=null})}})},_registerThisAreaHighlight:function(){var t=this;this._thisAreasHighlightController.registerTable({highlightTableForAreaIndex:function(e){if(t._isCreated())if(t.currentFeatureIndex===e){var i=t._infographic._widget.setThisAreaTableRowHighlighted();i&&(t.viewDiv.scrollTop=i.offsetTop+200-t.viewDiv.clientHeight)}else t._infographic._widget.setTableRowHighlighted(null)}}).then(function(){if(t._isCreated()){var e;s(t._infographic._widget.table,"mouseover, mousemove",function(){var i=t._infographic._widget.getOverRow();i&&i!==e&&(e=i,t._infographic._widget.isThisAreaRow(e)&&(t._thisAreasHighlightController.highlightGraphicForAreaIndex(t.currentFeatureIndex),t._infographic._widget.setThisAreaTableRowHighlighted()))}),s(t._infographic._widget.table,"mouseout",function(){t._thisAreasHighlightController.highlightGraphicForAreaIndex(null),t._infographic._widget.setTableRowHighlighted(null),e=null})}})},_applyTheme:function(t){if(this._infographic){var e=t.style&&t.style.backgroundColor||"transparent";o.set(this._infographic.domNode,"backgroundColor",e),o.set(this._infographic.domNode,"fontFamily","inherit")}},_destroyCurrentInfographic:function(){this._showError(!1),this._showProgress(!1),this._infographic&&this._infographic.destroy(),this._infographic=null},_itemLoadingState:0,_dataLoadingState:0,_contentLoadingState:0,_waitingDfd:null,_showProgress:function(t,e){t?this._waitingDfd||(this._waitingDfd=new i,this.onShowWaiting(this._waitingDfd.promise)):this._waitingDfd&&(this._waitingDfd.resolve(),this._waitingDfd=null),"item"===e?this._itemLoadingState=t?1:2:"data"===e&&(this._dataLoadingState=t?1:2),1!==this._itemLoadingState&&1!==this._dataLoadingState||0!==this._contentLoadingState||(this._contentLoadingState=1,this.onContentLoadingStart()),2===this._itemLoadingState&&2===this._dataLoadingState&&1===this._contentLoadingState&&(this._contentLoadingState=2,this.onContentLoadingEnd())},_filterRangesStats:null,_filterRanges:null,getFilterRanges:function(){return r(this._initPromise,function(){return this._filterRangesStats=this._infographic.dataProvider.collectFilterRangesStats({excludeThisAreas:!0}),this._filterRangesStats&&this._filterRangesStats.filterRanges}.bind(this))},setFilterRanges:function(t){return this._filterRanges=t,r(this._initPromise,function(){this._infographic.dataProvider.setFilterRanges(t,{ignoreThisAreas:this._currentInfographicJson.type===c.ONE_VAR}),this._infographic._widget.select?(this._infographic._widget.select.setFeatures(this._infographic.dataProvider.getData().features),this._infographic._widget.select.setDefaultValue({emitEvent:!0})):(this._infographic._widget.setDataProvider(this._infographic.dataProvider),this._doResize()),this._syncWithShownFeatures(),this._showEmptyView(!this.getNumAreasShown()),this.onContentUpdated()}.bind(this))},getNumAreasTotal:function(){return this._filterRangesStats&&this._filterRangesStats.numAreasTotal||0},getNumAreasShown:function(){return this._currentInfographicJson.type===c.ONE_VAR?this._infographic.dataProvider.getAllGeographyAttributes().length:this._infographic._widget.select.getNumFeatures&&this._infographic._widget.select.getNumFeatures()||0},_showEmptyView:function(t){u[t?"hide":"show"](this.infographicDiv),u[t?"show":"hide"](this.noDataPlaceHolder),t&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&o.set(this.noDataPlaceHolder,"paddingTop",(this.height-o.get(this.noDataPlaceHolder,"height"))/2+"px")},notifyShown:function(){},width:null,height:null,_infographicResizedAtLeastOnce:!1,_hasScroll:!1,resize:function(t,e){return void 0!==t&&(this.width=t,this.height=e),f.invoke(this,"_doResize",50)},_doResize:function(){var t=this;if(this._infographic&&this._infographic.domNode&&u.isNodeInLayout(this.domNode)&&this._currentInfographicJson){this._syncJsonDimensions();var e=this._currentInfographicJson.type,i=Math.max(function(){if(e===c.ONE_VAR){var i=n(".OneVarMultiComparison_Table",t.domNode)[0],r=i?o.get(i,"height")+120:0;return Math.max(r,I[e])}if(e===c.TAPESTRY){var i=n(".Tapestry_Main_Table",t.domNode)[0],r=i?o.get(i,"height")+60:0;return Math.max(r,I[e])}if(e===c.PRIZM5){var i=n(".Prizm5_Main_Table",t.domNode)[0],r=i?o.get(i,"height")+60:0;return Math.max(r,I[e])}return I[e]}(),this.height);this._hasScroll=i>this.height;var r=this.width-(this._hasScroll?u.getScrollbarSize().w+3:0);return o.set(this._infographic.domNode,{width:r+"px",height:i+"px"}),o.set(this.viewDiv,{height:this.height+"px",overflowY:"auto"}),this._infographic.resize(),this._adjustErrorMessage(),d.delay()}},hasScroll:function(){return this._hasScroll},changeScroll:function(t,e){this.domNode.scrollLeft+=t,this.domNode.scrollTop+=e},_syncJsonDimensions:function(){this._currentInfographicJson.style=this._currentInfographicJson.style||{},this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height},getPreferredHeight:function(){return this._infographic&&o.get(this._infographic.domNode,"height")},collapseContent:function(){this._infographic&&this._infographic.collapseContent()},getVisualState:function(){return{type:this._currentInfographicJson.type,selectedFeatureId:this._infographic&&this._infographic.getSelectedFeatureID(),filterRanges:this._filterRanges?e.clone(this._filterRanges):null}},setVisualState:function(t){if(t){var e=this;return r(this._initPromise,function(){if(e._infographic)return r(t.filterRanges&&e.setFilterRanges(t.filterRanges),function(){return t.selectedFeatureId&&e._infographic.setSelectedFeatureID(t.selectedFeatureId)})})}},isMouseOver:function(){return _.isMouseOver(this.domNode)||this._infographic&&this._infographic._widget.select&&this._infographic._widget.select.isMouseOver()},_showError:function(t){v.emulateErrors.contentErrors&&(t=!0),u[t?"show":"hide"](this.errorDiv),u[t?"hide":"show"](this.infographicDiv)},_adjustErrorMessage:function(){o.set(this.errorDiv,"paddingTop",o.get(this.domNode,"height")/2-20+"px")},toJson:function(){return e.clone(this._currentInfographicJson)},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},onContentUpdated:function(){},onShowWaiting:function(t){},_isCreated:function(){return this.domNode&&this._infographic&&this._infographic.domNode},destroy:function(){this._stdPolygonsController&&this._stdPolygonsController.setShownFeatureAttributes([]),this._destroyCurrentInfographic(),this.inherited(arguments)}});return S.Infographic=g,S});