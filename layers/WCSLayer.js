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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/Deferred","dojo/when","dojo/io-query","dojo/has","../kernel","../request","../deferredUtils","./BaseRasterLayer","./WCSConnection","./Raster","./rasterFormats/ImageCanvasDecoder","./pixelFilters/StretchFilter","../geometry/Extent","../geometry","../graphic"],function(e,t,i,n,r,a,o,s,l,h,c,p,d,u,m,x,f,g){var v=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return i;return-1},_=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return e[i]},w=function(e,t,i){var n;if(i){for(n=0;n<e.length;n++)if(e[n][i].toLowerCase()===t.toLowerCase())return e[n]}else for(n=0;n<e.length;n++)if(e[n].toLowerCase()===t.toLowerCase())return e[n]},y={parse:function(e){var t={isMultiPart:!0,data:null},i=this._getMultiPartHeader(e);return i?(t.isMultiPart=!0,t.data=this._getParts(e.data,i)):(t.isMultiPart=!1,t.data=e.data),t},_getParts:function(e,t){var i,n,r,a=0,o=0,s=0,l=0,h=[],c=[],p=[],d=[],u="--"+t.boundary,m="--"+t.boundary+"\n",x="\n--"+t.boundary+"--",f=[10],g=[13,10];for(a=0;a<u.length;a++)c.push(u.charCodeAt(a));for(a=0;a<m.length;a++)p.push(m.charCodeAt(a));for(a=0;a<x.length;a++)d.push(x.charCodeAt(a));for(i=u.length,n=new Uint8Array(e),r=Math.min(1e4,n.length),a=0;a<r;a++)n[a]===c[l]?l===i-1?(l=0,o&&h.push(this._parsePart(n.subarray(o,a+1-i),t)),n[a+1]===f[0]?a+=1:n[a+1]===g[0]&&n[a+2]===g[1]&&(a+=2),o=a+1):l++:l=0;for(a=n.length-d.length-2;a<n.length;a++)if(n[a]===d[l]){if(l===d.length-1){l=0,s=a-d.length+1,h.push(this._parsePart(n.subarray(o,s),t));break}l++}else l=0;return h},_getMultiPartHeader:function(e){var t,i,n,r=e.getHeader("Content-Type"),a=r.split(";");if("multipart/related"===a[0]||"multipart/mixed"===a[0])for(t={boundary:"",start:"",type:""},i=1;i<a.length;i++)n=a[i].split("="),t[n[0].trim()]=n[1].trim().slice(1,n[1].length-1);return t},_parsePart:function(e,t){var i,n,r,a=String.fromCharCode.apply(null,e.subarray(0,Math.min(300,e.length))).split("\n"),o=0,s=0,l=Math.min(a.length,7);i={contentType:null,contentDescription:null,contentTransferEncoding:null,contentID:null,contentDisposition:null,contentData:null,contentLocation:null};var h,c;for(o=0;o<l;o++)if(a[o].length<4)s=s+a[o].length+1;else if("content"===a[o].slice(0,7).toLowerCase()){if(s=s+a[o].length+1,-1===a[o].indexOf(":"))continue;if(h=a[o].substring(0,a[o].indexOf(":")).trim(),c=a[o].substring(a[o].indexOf(":")+1).trim(),h)switch(h.toLowerCase()){case"content-type":i.contentType=c;break;case"content-description":i.contentDescription=c;break;case"content-transfer-encoding":i.contentTransferEncoding=c;break;case"content-id":i.contentID=c;break;case"content-disposition":i.contentDisposition=c;break;case"content-location":i.contentLocation=c}}else{if(i.contentDisposition&&a[o].length>=4&&i.contentType.toLowerCase().indexOf("image")>-1){n=new ArrayBuffer(e.length-s),r=new Uint8Array(n),r.set(e.subarray(s,e.length)),i.contentData=n;break}if((""===t.start||i.contentID===t.start)&&i.contentType){if(i.contentType.indexOf("text")>-1){i.contentData=String.fromCharCode.apply(null,e.subarray(s,e.length));break}i.contentData=e.subarray(s,e.length)}}return i}},R=e([c],{declaredClass:"esri.layers.WCSLayer",format:null,interpolation:null,bandIds:null,optionalParameters:null,multidimensionalDefinition:null,projectedFullExtent:null,wcsConnection:null,version:null,coverageId:null,coverageDescription:null,extent:null,timeInfo:null,pixelType:null,_projectedResolution:null,_WEB_MERCATOR:[102100,3857,102113,900913],_REVERSED_LAT_LONG_RANGES:[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],_pivotServerGridOrigin110:!1,constructor:function(e,t){this._rasterReadPromise=null,this._pixelValueReadPromise=null},_initialize:function(i,n){this._params={},e.safeMixin(this,n),this.optionalParameters=this.optionalParameters||{},this.bandIds=this.bandIds||null;var o=this.url.indexOf("?");o>-1&&o<=this.url.length-1&&(this.optionalParameters=t.mixin(this.optionalParameters,a.queryToObject(this.url.substring(o+1,this.url.length))),this.url=this.url.substring(0,o)),this.coverageId=this.coverageId||this.coverage||this.identifiers||this.optionalParameters.coverage||this.optionalParameters.coverageId||this.optionalParameters.identifiers;var s=t.mixin({},{version:this.version,token:this.token,coverageId:this.coverageId},this.optionalParameters),l=this.wcsConnection||new p(this.url,s)._connectPromise;r(l,t.hitch(this,this._initialized),this._errorHandler)},_initialized:function(e){var t;this.wcsConnection=e,this.version=this.version||e.version,this.coverageId=this.coverageId||e.coverages[0].id;var i=w(e.coverages,this.coverageId,"id");if(this.coverageDescription=i,this.coverageDescription.supportedInterpolations=this.coverageDescription.supportedInterpolations||e.supportedInterpolations,this.extent=this.extent||i.extent,this.timeInfo=i.timeInfo,!this.bandIds&&this.coverageDescription.bandInfo&&(this.bandIds=Object.keys(this.coverageDescription.bandInfo).map(function(e){return parseInt(e,10)})),(void 0===this.format||null===this.format||""===this.format||"tiff"===this.format)&&i.supportedFormats)for(t=0;t<i.supportedFormats.length;t++)if(i.supportedFormats[t].toLowerCase().indexOf("tiff")>-1){this.format=i.supportedFormats[t];break}this.format=this.format||"image/tiff",this._findCredential(),(this.credential&&this.credential.ssl||e&&e._ssl)&&this._useSSL(),this._params.token=this._getToken(),this.loaded=!0,this.onLoad(this);var n=this._loadCallback;n&&(delete this._loadCallback,n(this))},onRasterReadComplete:function(){},setInfoTemplate:function(e){this.infoTemplate=e},identify:function(e){var i=new n;return this._identifyPixelValue(e).then(t.hitch(this,function(e){var t=[];if(!(this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.layerOptions&&this.infoTemplate.info.layerOptions.hasOwnProperty("showNoDataRecords"))||this.infoTemplate.info.layerOptions.showNoDataRecords||"NoData"!==e.value){var n=new g;n.setInfoTemplate(this.infoTemplate),n._layer=this,n.geometry=this.projectedFullExtent,n.attributes={ObjectId:0,"Raster.ServicePixelValue":e.pixelValues.map(function(e){return e.toString()})},t.push(n)}i.resolve(t)}),t.hitch(this,function(e){i.reject(e)})),i.promise},setUseMapTime:function(e,t){this.useMapTime=e,this._toggleTime(),!t&&this._map&&this.refresh(!0)},_setMap:function(e,t){return e.extent?(this.projectedFullExtent=this.projectedFullExtent||this._convertExtentToMap(this.coverageDescription.lonLatEnvelope,e.extent.spatialReference,1e-4),this.projectedFullExtent=this.projectedFullExtent||this._convertExtentToMap(this.coverageDescription.extent,e.extent.spatialReference,1e-4),this._projectedResolution=this._projectedResolution||{x:(this.projectedFullExtent.xmax-this.projectedFullExtent.xmin)/this.coverageDescription.columns,y:(this.projectedFullExtent.ymax-this.projectedFullExtent.ymin)/this.coverageDescription.rows}):this.projectedFullExtent=this.projectedFullExtent||this.coverageDescription.extent,this.inherited(arguments)},_convertExtentToNative:function(e){if(!e)return null;var t=null,i=this.coverageDescription.lonLatEnvelope,n=i.spatialReference.wkid,r=e.spatialReference.wkid;return n===r||this._WEB_MERCATOR.indexOf(n)>-1&&this._WEB_MERCATOR.indexOf(r)>-1?t=e:4326===n&&this._WEB_MERCATOR.indexOf(r)>-1?t=f.webMercatorUtils.webMercatorToGeographic(e):4326===r&&this._WEB_MERCATOR.indexOf(n)>-1&&(t=f.webMercatorUtils.geographicToWebMercator(e)),t},_convertExtentToMap:function(e,t,i){if(!e)return null;var n=null,r=t?t.wkid:this._map.extent.spatialReference.wkid,a=e.spatialReference.wkid;if(r===a||this._WEB_MERCATOR.indexOf(r)>-1&&this._WEB_MERCATOR.indexOf(a)>-1?n=e:4326===r&&this._WEB_MERCATOR.indexOf(a)>-1?n=f.webMercatorUtils.webMercatorToGeographic(e):4326===a&&this._WEB_MERCATOR.indexOf(r)>-1&&(n=f.webMercatorUtils.geographicToWebMercator(e)),n&&n.spatialReference.wkid&&this._WEB_MERCATOR.indexOf(n.spatialReference.wkid)>-1&&(n.spatialReference.wkid=3857),i&&n&&n.spatialReference.wkid)if(3857===n.spatialReference.wkid)n.xmin=n.xmin+i,n.ymin=n.ymin+i,n.xmax=n.xmax-i,n.ymax=n.ymax-i;else if(4326===n.spatialReference.wkid||Math.abs(n.xmin)<=180&&Math.abs(n.xmax)<=180){var o=1/111111;n.xmin=n.xmin+i*o,n.ymin=n.ymin+i*o,n.xmax=n.xmax-i*o,n.ymax=n.ymax-i*o}return n},_constructGetCoverageParams:function(e,i,n,r){var a=this.projectedFullExtent,o=e;if(o.xmax<=a.xmin||o.xmin>=a.xmax||o.ymax<=a.ymin||o.ymin>=a.ymax)return null;var s=new x(o);s.xmin=Math.max(s.xmin,a.xmin),s.xmax=Math.min(s.xmax,a.xmax),s.ymin=Math.max(s.ymin,a.ymin),s.ymax=Math.min(s.ymax,a.ymax);var l=Math.round((s.xmax-s.xmin)/(o.xmax-o.xmin)*i),h=Math.round((s.ymax-s.ymin)/(o.ymax-o.ymin)*n),c=this._params;t.mixin(c,{extent:s,width:l,height:h,crs:"EPSG:"+a.spatialReference.wkid,epsgNSCRS:"urn:ogc:def:crs:EPSG::"+a.spatialReference.wkid,coverageId:this.coverageId,format:this.format,interpolation:this.interpolation}),r&&t.mixin(c,r),c.multidimensionalDefinition||(c.multidimensionalDefinition=this.multidimensionalDefinition),c.interpolation||(this.interpolation?c.interpolation=this.interpolation:this.coverageDescription.supportedInterpolations&&this.coverageDescription.supportedInterpolations.length>0&&(c.interpolation=this.coverageDescription.supportedInterpolations[0]));var p=["nearest neighbor","bilinear","bicubic"],d=["nearest","linear","cubic"],u=["nearest-neighbor","linear","cubic"];return 0!==c.interpolation&&1!==c.interpolation&&2!==c.interpolation||("1.0.0"===this.version?c.interpolation=p[c.interpolation]:"1.1.0"===this.version||"1.1.1"===this.version||"1.1.2"===this.version?c.interpolation=d[c.interpolation]:"2.0.1"===this.version&&(c.interpolation="http://www.opengis.net/def/interpolation/OGC/1/"+u[c.interpolation])),this.bandIds&&(c.bandIds=this.bandIds.map(t.hitch(this,function(e){return this.coverageDescription.bandInfo[e]}))),!c.time&&this.coverageDescription.timeInfo&&"2.0.1"!==this.version&&(c.time=this.coverageDescription.timeInfo.timeExtent.endTime.toISOString()),c},_requestData:function(e,i,r){this._rasterReadPromise&&this._rasterReadPromise.cancel();var a=this._constructGetCoverageParams(e,i,r);if(!a)return void this.clear();var o=this,s=new d("");this._requestExtent=a.extent;var l,c=this._useBrowserDecoding();if(c){var p=new u({ctx:this._context});l=t.hitch(p,"decode")}var m=new n(h._dfdCanceller);m._pendingDfd=this._getCoverage(a);var x,f,g,_=this._requestExtent;m._pendingDfd.then(function(e){var i=y.parse(e);if("1.0.0"===o.version)i=i.data;else{if(!i.isMultiPart)return f=new Error("not a valid multipart coverage response"),void o._resolve([f],null,t.hitch(o,o._requestDataErrorHandler),m,!0);g=v(i.data,function(e){return null!=e.contentType&&e.contentType.toLowerCase().indexOf("image")>-1}),g=-1===g?i.data.length-1:g,i=i.data[g].contentData}var n={width:a.width,height:a.height,planes:null,pixelType:"UNKNOWN",decodeFunc:l};s.decode(i,n).then(function(e){if(o.pixelType=o.pixelType||e.pixelType,!o.pixelFilter){var i=o._getDefaultFilter();o.pixelFilter=i.filter,o._pixelFilterArgs=i}x={pixelBlock:e,extent:_},o._resolve([x],"onRasterReadComplete",t.hitch(o,o._requestDataHandler),m,!1)},function(e){o._resolve([e],null,t.hitch(o,o._requestDataErrorHandler),m,!0)})},function(e){o._resolve([e],null,t.hitch(o,o._requestDataErrorHandler),m,!0)}),this._rasterReadPromise=m.promise},_requestDataHandler:function(e){this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this.originalPixelData=e,this.hasDataChanged=!0,this._setPixelData(e))},_setPixelData:function(e){var t=this._clonePixelData(e);this.pixelFilter&&this.pixelFilter(t),this.pixelData=t,this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this._drawPixelData(),this._rasterReadPromise=null)},_useBrowserDecoding:function(){var e=this._requestExtent,t=this._map.width,i=this._map.height,n=this.getCurrentResolution();return Math.round((e.xmax-e.xmin)/n.x)===t&&Math.round((e.ymax-e.ymin)/n.y)===i&&(void 0===this.pixelFilter||null===this.pixelFilter)&&("jpeg"===this.format.toLowerCase()||"jpg"===this.format.toLowerCase()||this.format.toLowerCase().indexOf("png")>-1)},_clonePixelData:function(e){if(null===e||void 0===e)return e;var i={};e.extent&&(i.extent=t.clone(e.extent));var n=e.pixelBlock;return null===n||void 0===n?i:(i.pixelBlock=n.clone(),i)},_resolve:function(e,t,i,n,r){t&&this[t].apply(this,e),i&&i.apply(null,e),n&&h._resDfd(n,e,r)},_getDefaultFilter:function(){var e=0;return"U8"!==this.pixelType&&(e=6),new m({stretchType:e,min:0,max:255,dRA:!0,minPercent:.2,maxPercent:.2,useGamma:!1})},_getCoverage:function(e){var i,n=this.version,r=this.coverageDescription,a=function(e){return e.toISOString()},o=t.hitch(this,function(){var t=e.extent.xmin+","+e.extent.ymin+","+e.extent.xmax+","+e.extent.ymax;i={request:"GetCoverage",service:"WCS",version:n,coverage:e.coverageId,format:e.format||"GEOTIFF",crs:e.crs,bbox:t,width:e.width,height:e.height,time:e.time,interpolation:e.interpolation,band:e.bandIds?e.bandIds.join(","):null}}),s=t.hitch(this,function(){var t,o=this.coverageDescription.nativeCoverageDescription.domain.spatialDomain,s=o.origin.x<=o.envelope.xmin&&o.origin.y<=o.envelope.ymin;t=this._pivotServerGridOrigin110&&s?[(e.extent.xmax-e.extent.xmin)/e.width,(e.extent.ymax-e.extent.ymin)/e.height]:[(e.extent.xmax-e.extent.xmin)/e.width,(e.extent.ymin-e.extent.ymax)/e.height];var l,h,c,p=_(r.nativeCoverageDescription.range,function(e){return e.axis.some(function(e){return"band"===e.identifier.toLowerCase()})}),d=p&&e.interpolation&&e.bandIds?p.identifier+":"+e.interpolation+"["+p.axis[0].identifier+"["+e.bandIds.join(",")+"]]":null;if(e.multidimensionalDefinition)for(l=0;l<e.multidimensionalDefinition.length;l++)c=e.multidimensionalDefinition[l].values,c.length>0&&(e.multidimensionalDefinition[l].dimensionName.toLowerCase().indexOf("time")>-1?(c=c.map(a).join(","),e.time=c):(p=w(r.nativeCoverageDescription.range,e.multidimensionalDefinition[l].variableName,"identifier"))&&(e.interpolation||(e.interpolation=p.supportedInterpolations[0]),(h=w(p.axis,e.multidimensionalDefinition[l].dimensionName,"identifier"))&&(c=c.join(","),d=p.identifier+":"+e.interpolation+"["+h.identifier+"["+c+"]]")));var u,m,x,f;f=this._pivotServerGridOrigin110&&s?[e.extent.xmin,e.extent.ymin]:[e.extent.xmin,e.extent.ymax],this.coverageDescription._useEPSGAxis&&this._useLatLong(e.extent.spatialReference.wkid)?(u=e.extent.ymin+","+e.extent.xmin+","+e.extent.ymax+","+e.extent.xmax+","+e.epsgNSCRS,m=f[1]+","+f[0],x=t[1]+","+t[0]):(u=e.extent.xmin+","+e.extent.ymin+","+e.extent.xmax+","+e.extent.ymax+","+e.epsgNSCRS,m=f[0]+","+f[1],x=t[0]+","+t[1]),i={request:"GetCoverage",service:"WCS",version:n,identifier:e.coverageId,format:e.format||"image/tiff",crs:e.crs,boundingbox:u,GridBaseCRS:e.epsgNSCRS,GridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",GridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",GridOrigin:m,GridOffsets:x,time:e.time,rangeSubset:d}}),h=t.hitch(this,function(){var t,o,s=[],l=r.nativeCoverageDescription.domainSet.axisLabels;"x"===l[0].toLowerCase()||"x"===l[1].toLowerCase()?(s.push("x,http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),s.push("y,http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t="x",o="y"):l[0].toLowerCase().indexOf("lat")>-1||l[0].toLowerCase().indexOf("north")>-1?(s.push(l[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),s.push(l[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=l[1],o=l[0]):l[0].toLowerCase().indexOf("lon")>-1||l[0].toLowerCase().indexOf("east")>-1?(s.push(l[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),s.push(l[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=l[0],o=l[1]):this._useLatLong(e.extent.spatialReference.wkid)?(s.push(l[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),s.push(l[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=l[1],o=l[0]):(s.push(l[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),s.push(l[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=l[0],o=l[1]),l.length>2&&(s.push(l[2]+",http://www.opengis.net(2014/04/08 00:00:00)"),s.push(l[3]+",http://www.opengis.net(0)"));var h,c,p,d,u=null,m=[],x=[];if(e.multidimensionalDefinition){for(h=0;h<r.nativeCoverageDescription.rangeType.length;h++)x=x.concat(r.nativeCoverageDescription.rangeType[h].map(function(e){return e.name}));for(h=0;h<e.multidimensionalDefinition.length;h++)c=w(l,e.multidimensionalDefinition[h].dimensionName),p=w(x,e.multidimensionalDefinition[h].variableName),-1===m.indexOf(p)&&m.push(p),c&&(d=e.multidimensionalDefinition[h].values,d.length>0&&(d[0]instanceof Array&&(d=d[0]),d=c.toLowerCase().indexOf("time")>-1?d.map(a).join(","):d.join(","),-1===v(s,function(e){return 0===e.indexOf(c)})&&s.push(c+",http://www.opengis.net("+d+")")));u=m.length>0?m.join(","):null}var f="http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid,g=s.join("&subset="),_=t+"("+e.width+"),"+o+"("+e.height+")";i={request:"GetCoverage",service:"WCS",version:n,coverageId:e.coverageId,rangesubset:u,interpolation:e.interpolation,scaleSize:_,subset:g,extension:null,format:e.format||"image/tiff",outputcrs:f}});switch(n){case"1.0.0":o();break;case"1.1.0":case"1.1.1":case"1.1.2":s();break;case"2.0.1":h()}t.mixin(i,this.optionalParameters),e.token&&(i.token=e.token);var c=this.wcsConnection.onlineResources.getCoverage||this.url;return-1===c.indexOf("?")&&(c+="?"),Object.keys(i).forEach(function(e){void 0!==i[e]&&null!==i[e]&&(c+=e,c+="=",c+=i[e],c+="&")}),c=c.substring(0,c.length-1),l({url:c,handleAs:"arraybuffer"},{returnFullResponse:!0})},_identifyPixelValue:function(e){var t=new n,i={objectId:0,name:"Pixel",value:null,location:e,pixelValues:null};this._pixelValueReadPromise&&this._pixelValueReadPromise.cancel();var r=this.projectedFullExtent,a=this._projectedResolution,o=r.xmin+Math.floor((e.x-r.xmin)/a.x)*a.x,s=r.ymin+Math.floor((e.y-r.ymin)/a.y)*a.y,l=new x;l.spatialReference=e.spatialReference,l.xmin=o,l.ymin=s,l.xmax=o+2*a.x,l.ymax=s+2*a.y;var c=this._constructGetCoverageParams(l,2,2),p=this;if(!c)return t.resolve(i),p._pixelValueReadPromise=null,t;var u,m=new d(""),f=new n(h._dfdCanceller);return f._pendingDfd=this._getCoverage(c),f._pendingDfd.then(function(e){var n=y.parse(e);if("1.0.0"===p.version)n=n.data;else{if(!n.isMultiPart)return u=new Error("not a valid multipart coverage response"),t.reject(u),void(p._pixelValueReadPromise=null);n=n.data[n.data.length-1].contentData}var r={width:c.width,height:c.height,planes:null,pixelType:"UNKNOWN"};m.decode(n,r).then(function(e){e&&e.pixels&&(!e.mask||e.mask[0]?e.pixels&&(i.pixelValues=e.pixels.map(function(e){return e[0]}),i.value=i.pixelValues.join(" ")):(i.value="NoData",i.pixelValues=[NaN])),t.resolve(i),p._pixelValueReadPromise=null},function(e){t.reject(e),p._pixelValueReadPromise=null})},function(e){t.reject(e),p._pixelValueReadPromise=null}),this._pixelValueReadPromise=t.promise,this._pixelValueReadPromise},_useLatLong:function(e){if(!e)return!1;var t,i,n;for(i=0;i<this._REVERSED_LAT_LONG_RANGES.length;i++)if(n=this._REVERSED_LAT_LONG_RANGES[i],e>=n[0]&&e<=n[1]){t=!0;break}return t},_toggleTime:function(){var e=this._map;this.timeInfo&&this.useMapTime&&e&&!this.suspended?(this._timeConnect||(this._timeConnect=i.connect(e,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(e.timeExtent)):(i.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},_setTime:function(e){var t;this._params&&(e?(t=[],e.startTime&&t.push(e.startTime.toISOString()),e.endTime&&t.push(e.endTime.toISOString()),this._params.time=t.join(",")):this._params.time=null)},_onTimeExtentChangeHandler:function(e){this.suspended||(this._setTime(e),this.refresh(!0))}});return t.mixin(R,{INTERPOLATION_NEARESTNEIGHBOR:0,INTERPOLATION_BILINEAR:1,INTERPOLATION_CUBICCONVOLUTION:2}),o("extend-esri")&&t.setObject("layers.WCSLayer",R,s),R});