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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridDataUtil","../../tableJson/TableJsonUtil"],function(e,n,t,o){var a={},i={provideParentInfo:function(e,n,t,o,a,i){s.collectStatistics(n),e._parentBox={x:function(){switch(a){case"floating":return n.style.left+i.left;case"page":return s.calcX(n,t,o)+i.left}}(),y:function(){switch(a){case"floating":return n.style.spaceBefore+i.top;case"page":return s.calcY(n,t,o)+i.top}}(),w:s.calcFullWidth(n,t,o),h:s.calcFullHeight(n,t,o)},e._parentStyle={backgroundColor:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n]=e.style.fields[n]||{}).backgroundColor}(t,o.field)}},sanitize:function(e){s.sanitize(e)}},s={collectStatistics:function(e){if(!e._measureInfo){var n,t={},o={};e.data.columns.forEach(function(e){n&&(o[n.field]=e),n=e,t[e.field]=e});var a={},i={},l={},c={},r={},f={};e.data.data.forEach(function(n,t){e.data.columns.forEach(function(e,o){var d=r[o]||0,u=f[t]||0,g=s._getDataHeight(n,e.field),h=s._getFieldWidth(n,e);d+=g,u+=h,r[o]=d,f[t]=u;var p=o+"_"+t;i[p]=d,a[p]=u,l[p]=a[o-1+"_"+t]||0,c[p]=i[o+"_"+(t-1)]||0})}),e._measureInfo={xPositions:l,yPositions:c,columnsHash:t,nextColumnHash:o}}},calcX:function(e,n,t){var o=e.data.columns.indexOf(t),a=e.data.data.indexOf(n);return e._measureInfo.xPositions[o+"_"+a]||0},calcY:function(e,n,t){var o=e.data.columns.indexOf(t),a=e.data.data.indexOf(n);return e._measureInfo.yPositions[o+"_"+a]||0},calcFullWidth:function(e,n,t){var o=t.field,a=s._getFieldWidth(n,e._measureInfo.columnsHash[o]),i=n.columnSpans&&n.columnSpans[o]||1;if(i>1)for(var l,c=0;c<i-1;c++)l=e._measureInfo.nextColumnHash[l?l.field:o],a+=s._getFieldWidth(n,l);return a},_getFieldWidth:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n.field]=e.style.fields[n.field]||{}).width||n.style.width},calcFullHeight:function(e,n,t){var o=t.field,a=e.data.data.indexOf(n),i=s._getDataHeight(n,o),l=n.rowSpans&&n.rowSpans[o]||1;if(l>1)for(var c,r=a+1,f=0;f<l-1;f++)c=e.data.data[r++],i+=s._getDataHeight(c,o);return i},_getDataHeight:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n]=e.style.fields[n]||{}).height||e.style.height},sanitize:function(e){delete e._measureInfo}},l={getIntersectingTableJsonsBehind:function(e,a,i,s,l){function c(e){var s=e.data.data[0].fieldInfos[e.data.columns[0].field];return!!(t.isTextLikeCell(s)||t.isShapeCell(s)||t.isImageCell(s))&&n.checkRectsIntersect([i,{x:e.style.left+a.left,y:e.style.spaceBefore+a.top,w:o.getTableWidth(e),h:o.getTableHeight(e)}])}function r(e){return n.checkRectsIntersect([i,{x:e.style.left+a.left,y:e.style.spaceBefore+a.top,w:e.style.width,h:e.style.height}])}var f=[],d=[];return e.backgroundFloatingTablesSectionJson&&e.backgroundFloatingTablesSectionJson.stack.forEach(function(e,n){if((-1===s||l||s!==n)&&("table"===e.id&&c(e)||"img"===e.id&&r(e))){-1===s||l||s>n?f.push(e):d.push(e)}}),e.foregroundFloatingTablesSectionJson&&e.foregroundFloatingTablesSectionJson.stack.forEach(function(e,n){if(l&&s===n)return!0;if("table"===e.id&&c(e)||"img"===e.id&&r(e)){l&&s>n?f.push(e):d.push(e)}}),{elementJsonsBehind:f,elementJsonsAbove:d}}};return a.collectSectionJsons=function(e,n){n=n||{};var t=[];return e?e.sections?e.sections:e.sectionsTables?(n.processSectionJson=n.processSectionJson||function(){},e.sectionsTables.forEach(function(o,i){!1!==n.backgroundForeground&&o.foregroundSectionJson&&o.foregroundSectionJson.stack&&t.push(o.foregroundSectionJson);var s=[];!1!==n.floatingTables&&o.foregroundFloatingTablesSectionJson&&o.foregroundFloatingTablesSectionJson.stack.forEach(function(t,i){"table"===t.id&&a._processTableJson(t,s,"floating",e.documentOptions,n,o,i,!0)}),s.reverse(),s.forEach(function(e){n.processSectionJson(e,{pageIndex:i,source:"foreground",floatingIndex:e.__floatingIndex}),delete e.__floatingIndex}),t=t.concat(s);var l=[];a._processTableJson(o,l,"page",e.documentOptions,n,o),l.forEach(function(e){n.processSectionJson(e,{pageIndex:i,source:"grid",index:e.__inGridIndex}),delete e.__inGridIndex}),t=t.concat(l),s.length=0,!1!==n.floatingTables&&o.backgroundFloatingTablesSectionJson&&o.backgroundFloatingTablesSectionJson.stack.forEach(function(t,i){"table"===t.id&&a._processTableJson(t,s,"floating",e.documentOptions,n,o,i,!1)}),s.reverse(),s.forEach(function(e){n.processSectionJson(e,{pageIndex:i,source:"foreground",floatingIndex:e.__floatingIndex}),delete e.__floatingIndex}),t=t.concat(s),!1!==n.backgroundForeground&&o.backgroundSectionJson&&o.backgroundSectionJson.stack&&t.push(o.backgroundSectionJson)}),t):[]:[]},a._processTableJson=function(n,t,o,a,s,c,r,f){n.data.data.forEach(function(d,u){d.fieldInfos&&n.data.columns.forEach(function(g,h){function p(n){return n=e.clone(n),n.isContextFloatingElement=!0,n.style.left=n.style.left+a.left-m._parentBox.x,"table"===n.id?n.style.spaceBefore=n.style.spaceBefore+a.top-m._parentBox.y:"img"!==n.id&&"map"!==n.id||(n.style.top=n.style.top+a.top-m._parentBox.y),n}var _=d.fieldInfos[g.field];if(_&&_.sectionJson&&_.sectionJson.stack){if(s.processFieldInfoFunc&&s.processFieldInfoFunc(_),(!1!==s.saveParentInfo||s.populateWithFloatingElementsBehind)&&i.provideParentInfo(_.sectionJson,n,d,g,o,a),s.populateWithFloatingElementsBehind){var b,m=e.clone(_.sectionJson);"page"===o?b=l.getIntersectingTableJsonsBehind(c,a,m._parentBox,-1,void 0):"floating"===o&&(b=l.getIntersectingTableJsonsBehind(c,a,m._parentBox,r,f));var y=b.elementJsonsBehind.map(p),J=b.elementJsonsAbove.map(p);m.stack=y.concat(m.stack),m.stack=m.stack.concat(J),t.push(m)}else t.push(_.sectionJson);var x=t[t.length-1];"page"===o?x.__inGridIndex=u*n.data.columns.length+h:x.__floatingIndex=r}})}),i.sanitize(n)},a.getParentBox=function(e){return e&&e._parentBox},a.getParentStyle=function(e){return e&&e._parentStyle},a});