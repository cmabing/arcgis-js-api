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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/InfographicLayoutResizer","../utils/InfographicJsonConversionUtil","../utils/InfographicThemeUtil","../../supportClasses/tableJson/TableJsonUtil","../../sections/supportClasses/InfographicValueController","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/text!../../templates/SimpleInfographic.html"],function(e,t,i,n,o,s,r,a,h,l,c,u,d,p,g,f,_,m){function I(e){return e&&e.shape&&e.shape.shapeJson.showAsBar}return e([s,r],{templateString:m,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,getPreviewValueFunction:null,isEditMode:!1,adjustElementsWhenResized:!1,_sections:null,_currentInfographicJson:null,_updatePromise:null,_destroySections:function(){this._sections=this._sections||[],this._sections.forEach(function(e){e.destroy()}),this._sections.length=0,this.domNode&&n.empty(this.mainViewDiv)},updateInfographic:function(e){if(this.domNode){if(this._currentInfographicJson=this._applyThemeToJson(e),!this.isEditMode)return this.onContentLoadingStart(),this._updatePromise=f.invoke(this,"_doUpdateInfographic",50),this.onShowWaiting(this._updatePromise),this._updatePromise.always(function(){this.onContentLoadingEnd()}.bind(this)),this._updatePromise;this._doUpdateInfographic()}},refresh:function(){this.updateInfographic(this._currentInfographicJson)},_doUpdateInfographic:function(){if(this.domNode){this._destroySections();var e=this._currentInfographicJson;this._syncJsonDimensions();var t=this.viewModel.getStaticInfographicDefaultStyles(this.theme);o.set(this.domNode,"backgroundColor",e.style.backgroundColor||t&&t.backgroundColor),o.set(this.domNode,{width:e.style.width+"px",height:e.style.height+"px"}),this._preRender(),this._renderHeader(),this._renderVariableTables(),this._postRender()}},_infographicValueController:null,_preRender:function(){this._infographicValueController=new u;var e=this._currentInfographicJson.variableTables.filter(I);this._infographicValueController.setVariableTables(e)},_renderHeader:function(){if(this._currentInfographicJson.header){var e=this._currentInfographicJson.header;this._createSection(c.getTableWidth(e),c.getTableHeight(e),[e],e.style,null,-1,null)}},_renderVariableTables:function(){var e=this;this._currentInfographicJson.variableTables.forEach(function(t,i){var n=h.variableTableToNormalTables(t);e._createSection(t.style.width,t.style.height,n.tableJsons,t.style,t,i,n)})},_prepareSectionCreationParams:function(e,t){return null},_createSection:function(e,i,n,s,r,a,h){var l=-1===a,c={};c.initialWidth=e,c.initialHeight=i,c.json={type:d.DETAILS,stack:n},c.viewModel=this.viewModel,c.theme=this.theme,c.parentWidget=this,c.currentFeatureIndex=this.currentFeatureIndex,c.initialViewMode=this.isEditMode&&!this.getPreviewValueFunction?g.EDIT:g.PREVIEW_VALUES,c.elementUsageType=l?p.INFOGRAPHIC_HEADER_SECTION:p.INFOGRAPHIC_SECTION,c.infographicValueController=I(r)&&this._infographicValueController,c.getPreviewValueFunction=this.getPreviewValueFunction,this.viewModel.dynamicReportInfo&&(c.tableParams={enableNumberAnimation:!0,allowSorting:!1}),t.mixin(c,this._prepareSectionCreationParams(r,l));var u=this.viewModel.layoutBuilder.createElement("section",c,this.mainViewDiv);return o.set(u.domNode,{position:"absolute",left:(l?0:s.left||0)+"px",top:(l?0:s.spaceBefore||s.top||0)+"px"}),u.__elementsIndexHash=h,this._sections.push(u),u},_postRender:function(){},getHeaderTable:function(){var e=this.getHeaderSection();return e&&e.getTables()[0]},getSectionIconTable:function(e){return e.getTables()[e.__elementsIndexHash.iconIndex]},getSectionVariableTable:function(e){return e.getTables()[e.__elementsIndexHash.variableIndex]},getSectionDescriptionTable:function(e){return e.getTables()[e.__elementsIndexHash.descriptionIndex]},getHeaderSection:function(){return this._sections.filter(function(e){return e.elementUsageType===p.INFOGRAPHIC_HEADER_SECTION})[0]},getVariableSections:function(){return this._sections.filter(function(e){return e.elementUsageType===p.INFOGRAPHIC_SECTION})},getVisualState:function(){return null},setVisualState:function(e){},_applyThemeToJson:function(e){var t=this.viewModel.getStaticInfographicDefaultStyles(this.theme);return l.applyThemeSettingsToJson(e,t)},notifyShown:function(){i(this._updatePromise,function(){this._sections&&this._sections.forEach(function(e){e.notifyShown()})}.bind(this))},width:null,height:null,resize:function(e,t){return void 0!==e&&(this.width=e,this.height=t),this.isEditMode?void(this._checkNeedResize()&&this._doUpdateInfographic()):this._checkNeedResize()&&f.invoke(this,"_doUpdateInfographic",50)},_checkNeedResize:function(){return this._currentInfographicJson&&this.width&&this.height&&(!_.compareEqual(this._currentInfographicJson.style.width,this.width,1)||!_.compareEqual(this._currentInfographicJson.style.height,this.height,1))},_syncJsonDimensions:function(){this._checkNeedResize()&&a.resizeLayout(this._currentInfographicJson,this.width,this.height,{preserveHeaderPosition:!0,allowResizeInnerElements:!0,ignoreMinMaxConstraints:this.adjustElementsWhenResized,updateFontSize:this.adjustElementsWhenResized&&!this._currentInfographicJson.preserveTextSize})},toJson:function(){return t.clone(this._currentInfographicJson)},onContentLoadingStart:function(){},onContentLoadingEnd:function(){},onShowWaiting:function(e){},destroy:function(){this._destroySections(),this.inherited(arguments)}})});