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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/Deferred","dojo/has","./kernel","./graphic","./geometry/Point","./geometry/jsonUtils","./geometry/mathUtils","./geometry/webMercatorUtils","./symbols/SimpleMarkerSymbol","./symbols/SimpleLineSymbol","./symbols/CartographicLineSymbol","./symbols/SimpleFillSymbol","./tasks/query","./Evented","dojo/has!extend-esri?./PopupInfo"],function(e,t,i,s,r,n,h,a,o,l,u,c,d,f,g,m,p,_){function y(e){return"sizeInfo"===e.type}var b=e(_,{declaredClass:"esri.PopupBase",_featureLayers:{},_updateEndHandles:[],_mapLevelChangeHandle:null,_evtMap:{"set-features":!0,"clear-features":!0,"selection-change":!0,"dfd-complete":!0},onSetFeatures:function(){},onClearFeatures:function(){},onSelectionChange:function(){},onDfdComplete:function(){},initialize:function(){this.count=0,this.selectedIndex=-1,this.on("clear-features",t.hitch(this,this._resetUpdateEndListeners)),this.on("dfd-complete",t.hitch(this,this._processFeatures)),this.on("set-features",t.hitch(this,this._processFeatures)),this.on("selection-change",t.hitch(this,this._checkFeatureResolution))},cleanup:function(){this.features=this.deferreds=null,this._resetUpdateEndListeners(),this._untrackMapLevelChange()},setFeatures:function(e){if(e&&e.length){this.clearFeatures(!0);var s,n;e[0]instanceof r?n=e:s=e,s?this._updateFeatures(null,s):(this.deferreds=n,n=n.slice(0),i.forEach(n,function(e){e.addBoth(t.hitch(this,this._updateFeatures,e))},this))}},clearFeatures:function(e){this.features=this.deferreds=this._marked=null,this.count=0;var t=this.selectedIndex;this.selectedIndex=-1,t>-1&&this.onSelectionChange(),this.onClearFeatures({isIntermediate:!!e})},getSelectedFeature:function(){var e=this.features;if(e)return e[this.selectedIndex]},select:function(e){e<0||e>=this.count||(this.selectedIndex=e,this.onSelectionChange())},enableHighlight:function(e){if(this._highlighted=e.graphics.add(new a(new o(0,0,e.spatialReference))),this._highlighted.attr("data-popup-highlight",""),this._highlighted.hide(),this._trackMapLevelChange(e),!this.markerSymbol){var t=this.markerSymbol=new d;t.setStyle(d.STYLE_TARGET),t._setDim(16,16,0),t.setOutline(new g(f.STYLE_SOLID,new s([0,255,255]),2,g.CAP_ROUND,g.JOIN_ROUND)),t.setColor(new s([0,0,0,0]))}this.lineSymbol||(this.lineSymbol=new f(f.STYLE_SOLID,new s([0,255,255]),2)),this.fillSymbol||(this.fillSymbol=new m(m.STYLE_NULL,new f(f.STYLE_SOLID,new s([0,255,255]),2),new s([0,0,0,0]))),this.clusterFillSymbol||(this.clusterFillSymbol=new m(m.STYLE_SOLID,new f(f.STYLE_SOLID,new s([0,255,255]),1.33),null))},disableHighlight:function(e){var t=this._highlighted;t&&(t.hide(),e.graphics.remove(t),delete this._highlighted),this._untrackMapLevelChange(),this.markerSymbol=this.lineSymbol=this.fillSymbol=null},showHighlight:function(){var e=this.features&&this.features[this.selectedIndex];this._highlighted&&e&&e.geometry&&this._highlighted.show()},hideHighlight:function(){this._highlighted&&this._highlighted.hide()},updateHighlight:function(e,t){var i=t.geometry,s=this._highlighted;if(!i||!s)return void(s&&s.hide());s.hide(),!s._graphicsLayer&&e&&e.graphics.add(s),s.setGeometry(l.fromJson(i.toJson()));var r;switch(i.type){case"point":case"multipoint":var n=t.getLayer(),h=t.symbol||n&&n._getSymbol(t);if(n&&h){var a,o,u=h.xoffset||0,c=h.yoffset||0,d=h.angle||0;switch(h.type){case"simplemarkersymbol":a=o=h.size||0;break;case"picturemarkersymbol":a=h.width||0,o=h.height||0;break;case"textsymbol":a=o=h.font&&h.font.size||0}var f,g,m=t.symbol?null:n._getRenderer(t),p=this._getSizeInfo(m);p?f=g=m.getSize(t,{sizeInfo:p,shape:h.style,resolution:e&&e.getResolutionInMeters&&e.getResolutionInMeters()}):null!=t.size?f=g=t.size:(f=a,g=o),r=this.markerSymbol,f&&g&&(u&&(u=f*(u/a)),c&&(c=g*(c/o)),r._setDim(f+4,g+4,0)),r.setOffset(u,c),r.setAngle(d)}break;case"polyline":r=this.lineSymbol;break;case"polygon":r=this.fillSymbol}s.setSymbol(r)},showClosestFirst:function(e){var t=this.features;if(t&&t.length){if(t.length>1){var i,s,r,n,h,a=1/0,o=-1,l=u.getLength,d=e.spatialReference;for(e=e.normalize(),i=t.length-1;i>=0;i--)if(s=t[i].geometry){n=s.spatialReference,r=0;try{h="point"===s.type?s:s.getExtent().getCenter(),h=h.normalize(),d&&n&&!d.equals(n)&&d._canProject(n)&&(h=d.isWebMercator()?c.geographicToWebMercator(h):c.webMercatorToGeographic(h)),r=l(e,h)}catch(e){}r>0&&r<a&&(a=r,o=i)}o>0&&(t.splice(0,0,t.splice(o,1)[0]),this.select(0))}}else this.deferreds&&(this._marked=e)},_trackMapLevelChange:function(e){this._untrackMapLevelChange(),this._mapLevelChangeHandle=e.on("extent-change",t.hitch(this,function(e){e.levelChange&&this._checkFeatureResolution()}))},_untrackMapLevelChange:function(){this._mapLevelChangeHandle&&(this._mapLevelChangeHandle.remove(),this._mapLevelChangeHandle=null)},_unbind:function(e){var t=i.indexOf(this.deferreds,e);if(-1!==t)return this.deferreds.splice(t,1),this.deferreds.length?1:(this.deferreds=null,2)},_fireComplete:function(e){var t=this._marked;t&&(this._marked=null,this.showClosestFirst(t)),this.onDfdComplete(e)},_updateFeatures:function(e,t){if(e){if(this.deferreds){var s=this._unbind(e);if(!s)return;if(t&&t instanceof Error)return this._fireComplete(t),void(2===s&&this.onSetFeatures());if(t&&t.length)if(this.features){var r=i.filter(t,function(e){return-1===i.indexOf(this.features,e)},this);this.features=this.features.concat(r),this.count=this.features.length,this._fireComplete(),2===s&&this.onSetFeatures()}else this.features=t,this.count=t.length,this.selectedIndex=0,this._fireComplete(),2===s&&this.onSetFeatures(),this.select(0);else this._fireComplete(),2===s&&this.onSetFeatures()}}else this.features=t,this.count=t.length,this.selectedIndex=0,this.onSetFeatures(),this.select(0)},_getSizeInfo:function(e){return e?e.sizeInfo||i.filter(e.visualVariables,y)[0]:null},_resetUpdateEndListeners:function(){this._featureLayers={},i.forEach(this._updateEndHandles,function(e){e.remove()}),this._updateEndHandles=[]},_processFeatures:function(){i.forEach(this.features,function(e){var i=e.getLayer();if(i&&!this._featureLayers[i.id]&&(1===i.currentMode||0===i.currentMode&&6===i.mode)&&i.objectIdField&&i.hasXYFootprint&&i.queryFeatures){this._featureLayers[i.id]=i;var s=i.on("update-end",t.hitch(this,this._fLyrUpdateEndHandler));this._updateEndHandles.push(s)}},this)},_fLyrUpdateEndHandler:function(e){if(!e.error){var t=this,s=e.target,r=s.getSelectedFeatures(),n=0===s.currentMode&&6===s.mode,h={},a=[];if(i.forEach(this.features,function(e){if(e.getLayer()===s){var t=e.attributes[s.objectIdField];h[t]=e,a.push(t)}}),a.length){var o=new p;o.objectIds=a,s.queryFeatures(o,function(e){i.forEach(e.features,function(e){var t=e.attributes[s.objectIdField],a=h[t],o=!1;a.geometry!==e.geometry||s.hasWebGLSurface()?(a.setGeometry(e.geometry),o=!0):n&&r&&-1!==i.indexOf(r,e)&&(o=!0),o&&this._highlighted&&a===this.getSelectedFeature()&&this._highlighted.setGeometry(e.geometry)},t)})}}},_checkFeatureResolution:function(){var e=this.getSelectedFeature(),i=this.map;if(e&&i){var s=e.getLayer();if(s){var r=e.getResolution();if(2===s.currentMode&&e.geometry&&r&&r>i.getResolution()){var n=i.getResolutionForPopup(),h=this._refetchFeature(e,n,s);h&&h.then(t.hitch(this,this._updateFeatureResolution,e,n))}}}},_refetchFeature:function(e,t,i){var s=this._createQueryForCustomResolution(e,t,i);if(s)return i.queryFeatures(s).then(function(e){return e&&e.features[0]})},_createQueryForCustomResolution:function(e,t,i){var s=i.objectIdField,r=e.attributes,n=r&&s&&r[s];if(null==n)return null;var h=new p;return h.objectIds=[n],h.maxAllowableOffset=t,h.outFields=[s],h.outSpatialReference=e.geometry.spatialReference,h},_updateFeatureResolution:function(e,t,i){e.getResolution()!==t&&(e.setResolution(t),e.setGeometry(i.geometry),this._highlighted&&e===this.getSelectedFeature()&&this._highlighted.setGeometry(e.geometry))}});return n("extend-esri")&&(h.PopupBase=b),b});