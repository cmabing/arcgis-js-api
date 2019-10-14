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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix/mat2d","../../../../../../core/libs/gl-matrix/vec2","../../color","../../definitions","../../enums","../../number","../../WGLDisplayRecord","./WGLMeshTemplate"],function(e,t,r,i,o,s,h,n,p,a,u,l,f){Object.defineProperty(t,"__esModule",{value:!0});var d=i.getLogger("esri.views.2d.engine.webgl.WGLMeshTemplate"),_=255,c=function(e){function t(t,r,i,o,n,p,l,f,c,m,y){(l>_||f>_)&&(d.error("mapview-oversized-resource","Marker size was clamped to the maximum allowed value of 200x200 pixels"),l>f?(f*=_/l,l=_):(l*=_/f,f=_));var g=e.call(this)||this;g.geometryType=a.WGLGeometryType.MARKER;var x=h.create(),w=s.create(),v=y.sdf?.5:1;if(s.translate(w,w,new Float32Array([v*i,v*-o])),n){s.rotate(w,w,3.14159265359/180*n)}g._materialStore=t,g.vvFlags=r,g._materialId=t.createSpriteMaterial(y,g.geometryType,r),g._fillColor=p,g._outlineColor=c,g._sizeOutlineWidth=u.i8888to32(l,f,m,0);var M=Math.round(y.rect.x/4),V=Math.round(y.rect.y/4),T=M+Math.round(y.rect.width/4),O=V+Math.round(y.rect.height/4);return x.set([-.5*l,-.5*f]),h.transformMat2d(x,x,w),g._offsetAndTexUpperLeft=u.i8888to32(x[0],x[1],M,V),x.set([.5*l,-.5*f]),h.transformMat2d(x,x,w),g._offsetAndTexUpperRight=u.i8888to32(x[0],x[1],T,V),x.set([-.5*l,.5*f]),h.transformMat2d(x,x,w),g._offsetAndTexBottomLeft=u.i8888to32(x[0],x[1],M,O),x.set([.5*l,.5*f]),h.transformMat2d(x,x,w),g._offsetAndTexBottomRight=u.i8888to32(x[0],x[1],T,O),g.height=f,g.width=l,g.xOffset=i,g.yOffset=o,g}return r(t,e),t.fromPictureMarker=function(e,r,i,s,h){var n=Math.round(o.pt2px(i.width)),a=Math.round(o.pt2px(i.height)),u=p.PICTURE_FILL_COLOR;return new t(e,r,Math.round(o.pt2px(i.xoffset||0)),Math.round(o.pt2px(i.yoffset||0)),i.angle,u,n,a,0,0,s)},t.fromSimpleMarker=function(e,r,i,s,h){var p=n.premultiplyAlphaRGBA(i.color),a=Math.round(o.pt2px(i.size)),u=a,l=Math.round(o.pt2px(i.xoffset||0)),f=Math.round(o.pt2px(i.yoffset||0)),d=i.outline,_=0|(d&&d.color&&n.premultiplyAlphaRGBA(d.color)),c=0|(d&&d.width&&Math.round(o.pt2px(d.width)));return new t(e,r,l,f,i.angle,p,a,u,_,c,s)},t.prototype.writeMesh=function(e,t,r,i,o,s,h){var n=this._materialStore.get(this._materialId),p=t.indexVector,a=t.get("geometry"),u=new l(i,this.geometryType,this._materialId),f=this._getOffset(a,n);switch(e.push(u),u.vertexFrom=f,u.indexFrom=p.length,r){case"esriGeometryPoint":var _=o.geometry,c=_.x,m=_.y;return this._writeVertices(u,a,i,this._getPos(c,m),n,h),void this._writeIndices(u,p,f);case"esriGeometryPolyline":var y=o.geometry.paths;return void this._writeMany(u,p,a,f,i,y[0],n,h);case"esriGeometryPolygon":var g=o.centroid;if(g){var c=g.x,m=g.y;this._writeVertices(u,a,i,this._getPos(c,m),n,h),this._writeIndices(u,p,f)}else d.error("Tried to render polygon geometries as markers, but found no centroid!");return;case"esriGeometryMultipoint":var x=o.geometry.points;return void this._writeMany(u,p,a,f,i,x,n,h);case"esriGeometryEnvelope":default:d.error("Unable to handle geometryType: "+r)}},t.prototype._getPos=function(e,t){return u.i1616to32(e,t)},t.prototype._writeMany=function(e,t,r,i,o,s,h,n){for(var p=0,a=0,u=0,l=0,f=s;l<f.length;l++){var d=f[l],_=d[0],c=d[1];this._writeVertices(e,r,o,this._getPos(_+p,c+a),h,n),this._writeIndices(e,t,i+u),p+=_,a+=c,u+=4}},t.prototype._getOffset=function(e,t){var r=t.materialKeyInfo,i=r.hasVV()?10:6;return e.length/i},t.prototype._writeVertices=function(e,t,r,i,o,s){t.push(i),t.push(this._offsetAndTexUpperLeft),t.push(r),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),this._writeVV(t,s,o),t.push(i),t.push(this._offsetAndTexUpperRight),t.push(r),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),this._writeVV(t,s,o),t.push(i),t.push(this._offsetAndTexBottomLeft),t.push(r),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),this._writeVV(t,s,o),t.push(i),t.push(this._offsetAndTexBottomRight),t.push(r),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),this._writeVV(t,s,o),e.vertexCount+=4},t.prototype._writeVV=function(e,t,r){r.materialKeyInfo.hasVV()&&(e.push(t[a.VVType.SIZE]),e.push(t[a.VVType.COLOR]),e.push(t[a.VVType.OPACITY]),e.push(t[a.VVType.ROTATION]))},t.prototype._writeIndices=function(e,t,r){var i=r;t.push(i+0),t.push(i+1),t.push(i+2),t.push(i+1),t.push(i+3),t.push(i+2),e.indexCount+=6},t}(f.default);t.default=c});