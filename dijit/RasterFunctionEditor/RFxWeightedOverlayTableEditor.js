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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Evented","dojo/has","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxWeightedOverlayTableEditor.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase","./utils"],function(e,a,t,i,l,r,s,n,u,d,h,c,o,f){var g=e("RFxWeightedOverlayTableEditor",[u,d,h,i,c],{templateString:n,baseClass:"esriRFxWeightedOverlayTableEditor",dataTypes_weightedOverlayGrid:[o.DATA_TYPES.raster,o.DATA_TYPES.long,o.DATA_TYPES.field],fieldNames_weightedOverlayGrid:["layer","influence","field"],dataTypes_remapGrid:[o.DATA_TYPES.string,o.DATA_TYPES.scale],fieldNames_remapGrid:["value","scale"],_grid1:null,_grid2:null,_selectedRowId:null,_data1:null,constructor:function(e){this.inherited(arguments),this._i18n=s.widgets.rasterFunctionEditor.rfxWeightedOverlayTableEditor},postCreate:function(){this.inherited(arguments),this._initializeGrids(),this._data1=this._copyData(this._grid1.data),this._addEventHandlers(),this._grid1.startup(),this._grid2.startup(),this.scalesInput.startup()},_initializeGrids:function(){var e,a,t,i,l,r=this._getGridSchemas();e=r[0],a=r[1];var s=this._readArgValues();t=s[0],i=s[1],l=s[2],this._grid1=new o({schema:e,data:t,hasIdColumn:!0,inputLayers:this.inputLayers,allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode1),this._grid2=new o({schema:a,data:i,hasIdColumn:!0,inputLayers:this.inputLayers,allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode2),this.scalesInput._setEvalFromTo(l[0].value,l[1].value)},_getGridSchemas:function(){return[this.fieldNames_weightedOverlayGrid.map(function(e,a){return{label:this._i18n[e],name:e,dataType:this.dataTypes_weightedOverlayGrid[a]}},this),this.fieldNames_remapGrid.map(function(e,a){return{label:this._i18n[e],name:e,dataType:this.dataTypes_remapGrid[a]}},this)]},_addEventHandlers:function(){this.own(this._grid1._grid.on(".dgrid-content .dgrid-row:click",a.hitch(this,function(e){var a=this._grid1._grid.row(e);a.data.idNum!==this._selectedRowId&&(this._selectedRowId=a.data.idNum,this._handleRowSelect(a))})),this._grid1.on("grid-data-change",a.hitch(this,function(e){this._updateArgValues_weightedOverlayGrid(e)})),this._grid2.on("grid-data-change",a.hitch(this,function(e){this._updateArgValues_remapGrid(e)})),this.scalesInput.on("change",a.hitch(this,function(){this._updateArgValues_scalesInput()})))},_handleRowSelect:function(e){this.inputArgs&&e&&e.data&&e.data.layer&&e.data.field&&this._refreshRemapTable()},_refreshRemapTable:function(){this._grid2.updateStoreValue(this._getRemapGridData()),this._grid2._grid.refresh(),this._updateArgValues_scalesInput()},_getRemapGridData:function(){var e=this.inputArgs.Remaps,a=this._selectedRowId-1,t=[];if(a<0||a>e.value.length-1)return t;if(e.value&&e.value[a]){e.value[a].split(";").forEach(function(e,a){var i=e.trim().match(/(?:[^\s']+|'[^']*')+/g);if(i&&2===i.length){var l=i[0],r=i[1];l.indexOf("'")>-1&&(l=l.replace(/[']+/g,"")),t.push({value:l,scale:r})}})}return t},_initLayerRemapStr:function(e,i){var l,r,s=e.layerArg.input;if(s&&s.value&&s.value.name){l=s.getSelectedLayer(s.value.name);var n="",u=e.idNum,d=this.inputArgs.Remaps,h=this.inputArgs.Fields;l&&l.hasRasterAttributeTable?l.getRasterAttributeTable({renderingRule:l.renderingRule}).then(a.hitch(this,function(a){var l=a&&a.features;if(l){var s=a&&a.fields,c=[],o=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];s&&s.length&&(c=t.filter(s,function(e){return t.indexOf(o,e.type)>-1}),e.field=e.field||c[0].name),r=e.field;var f=l.map(function(e){return e.attributes[r]}).filter(function(e,a,t){return t.indexOf(e)===a});f&&f.length>1&&!isNaN(f[0])&&f.sort(function(e,a){return e-a});var g=f.map(function(e,a){return"string"==typeof e&&(e=e.indexOf(" ")>-1?"'"+e+"'":e),e+" "+(a+1)});n=g.join(" ; "),h.value.splice(u-1,1,r),d.value.length===i&&d.value.splice(u-1,1,n),d.value.length<i&&d.value.splice(u-1,0,n),this._refreshRemapTable()}})):(d.value.length===i&&d.value.splice(u-1,1,n),d.value.length<i&&d.value.splice(u-1,0,n),this._refreshRemapTable())}},_deleteLayerRemapStr:function(e){this.inputArgs.Remaps.value.splice(e-1,1)},_copyData:function(e){var a=[];if(e&&!(e.length<1))return e.forEach(function(e){var t={id:e.id,idNum:e.idNum,layer:e.layer,influence:e.influence,field:e.field};a.push(t)}),a},_gridDataComparer:function(e){return function(a){return 0===e.filter(function(e){return"*"!==e.idNum&&e.id===a.id&&(!e.layer&&!a.layer||e.layer&&a.layer&&!e.layer.value&&!a.layer.value||e.layer&&a.layer&&e.layer.value&&a.layer.value&&e.layer.value.name===a.layer.value.name&&e.layer.value.url===a.layer.value.url)&&(!e.influence&&!a.influence||e.influence&&a.influence&&e.influence==a.influence)&&(!e.field&&!a.field||e.field&&a.field&&e.field===a.field)}).length&&"*"!==a.idNum}},_updateArgValues_weightedOverlayGrid:function(){var e=this.inputArgs,t=this._grid1.getStoreValue();if(e){var i=e.Rasters,l=e.Fields,r=e.Influences,s=e.Remaps,n=0;if(i&&(i.value={type:f.ARGUMENT_ARRAY_TYPE,elements:[]}),l&&(l.value=[]),r&&(r.value=[]),t&&Array.isArray(t)){t.forEach(a.hitch(this,function(e){if("*"!==e.idNum&&e&&e.layerArg&&e.layerArg.input){if(i&&i.value&&i.value.elements.push(e.layer),r&&r.value){e.influence&&""!==e.influence&&!isNaN(e.influence)||(e.influence=1===e.idNum?100:0);var a=e.influence/100;n+=a,r.value.push(a)}l&&l.value&&l.value.push(e.fieldArg.value)}})),this._updateSumOfInfluence(n);var u,d,h;if(!this._data1&&t.length>1&&(h=t[0],u=t[0]),this._data1){if(u=t.filter(this._gridDataComparer(this._data1))[0],d=this._data1.filter(this._gridDataComparer(t))[0],!u&&!d)return;t.length>this._data1.length?h=t[u.idNum-1]:t.length<this._data1.length?(this._deleteLayerRemapStr(d.idNum),this._selectedRowId=d.idNum):t.length===this._data1.length&&u.influence==d.influence&&(h=t[u.idNum-1])}if(s&&s.value&&h&&h.layerArg.input.value){this._selectedRowId=u.idNum;var c=t.length-1;this._initLayerRemapStr(h,c)}this._data1=this._copyData(t)}}},_updateArgValues_remapGrid:function(){var e=this.inputArgs,t=this._grid2.getStoreValue();if(e){var i=e.Remaps;if(i&&(i.value[this._selectedRowId-1]=""),t&&Array.isArray(t)){var l="",r=t.length-1;t.forEach(a.hitch(this,function(a,t){if("*"===a.idNum)return a.scaleArg=a.scaleArg||{},void(a.scaleArg.evalValues=[e.EvalFrom.value,e.EvalTo.value]);if(a.scale=a.scale||a.scaleArg.value,a.value&&a.scale){var i=a.value,s=a.scale;"string"==typeof i&&(i=i.indexOf(" ")>-1?"'"+i+"'":i),l+=i+" "+s}t<r-1&&(l+=" ; ")})),i.value[this._selectedRowId-1]=l}}},_updateArgValues_scalesInput:function(){var e=this.scalesInput.scalesComboBox;if(e.value){var a=e.value.replace(/\s/g,"").split("-");2!==a.length||a[0]>a[1]||(this.inputArgs.EvalFrom.value=parseInt(a[0],10),this.inputArgs.EvalTo.value=parseInt(a[1],10),this._updateScaleSelectStore(a),this._updateScaleSelectValue())}},_updateSumOfInfluence:function(e){var a=Math.round(100*e);this.sumOfInfluence.innerText=a,a>100?this.sumOfInfluence.classList.add("color-red"):this.sumOfInfluence.classList.remove("color-red")},_updateScaleSelectStore:function(e){this._grid2.getStoreValue().forEach(function(a){a.scaleArg&&(a.scaleArg.evalValues=e,"*"!==a.idNum&&a.scaleArg.setScaleOptions())})},_updateScaleSelectValue:function(){this._grid2.getStoreValue().forEach(function(e){e.scaleArg&&"*"!==e.idNum&&e.scaleArg.set("value",e.scale)})},_readArgValues:function(){if(this.inputArgs){var e,a=[],t=[],i=[],l=0,r=this.inputArgs,s=r.Rasters,n=r.Fields,u=r.Influences,d=r.Remaps,h=r.EvalFrom,c=r.EvalTo;if(s&&n&&u&&d&&(e=Math.max(s.value&&s.value.elements&&s.value.elements.length,n.value&&n.value.length,u.value&&u.value.length,d.value&&d.value.length),i.push(h),i.push(c),isNaN(e)))return[a,t,i];for(;l<e;)a.push({layer:s.value&&s.value.elements&&s.value.elements[l],field:n.value&&n.value[l],influence:u.value&&(100*u.value[l]||(l?0:100))}),l+=1;if(d.value.length>0)a&&a.length>0&&a[0].layer.value&&a[0].field&&(this._selectedRowId=1,t=this._getRemapGridData());else for(var o=0;o<e;o++)d.value.push("");return[a,t,i]}}});return l("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxWeightedOverlayTableEditor",g,r),g});