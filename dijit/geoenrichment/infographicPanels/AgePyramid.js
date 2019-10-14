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

define(["esri/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/number","dojox/charting/Chart","dojox/charting/axis2d/Default","dojox/charting/plot2d/Bars","dojox/charting/plot2d/Lines","dojox/charting/action2d/Tooltip","dojox/charting/action2d/Highlight","dojox/charting/SimpleTheme","../BaseSelectComparison","../infographicUtils/utils","../infographicUtils/theme","dojo/i18n!esri/nls/jsapi"],function(e,t,i,a,s,n,r,h,l,d,o,m,c,g,_,u){u=u.geoenrichment.dijit.AgePyramid;return e("esri.dijit.geoenrichment.AgePyramid",c,{baseClass:"Infographics_AgePyramid",showVerticalAxis:!1,tooltipClass:d,chart:null,_currentTheme:null,_themeChangeHandle:null,createUI:function(e){this.inherited(arguments),e.contentClass.push("AgePyramid_ContentPane"),this.chartDiv=e.addContent("div",{class:"AgePyramid_Chart"})},createUIExpanded:function(e){this.inherited(arguments);var t=e.addContent("div",{class:"AgePyramid_MinMax"});a.create("div",{innerHTML:u.maxLabel},t),this.max=a.create("div",{class:"AgePyramid_Text"},t),a.create("div",{class:"AgePyramid_MinLabel",innerHTML:u.minLabel},t),this.min=a.create("div",{class:"AgePyramid_Text"},t);var i=e.addContent("div",{class:"AgePyramid_Comparison"});a.create("div",{class:"AgePyramid_ComparisonLabel",innerHTML:u.compLabel},i),this._createComboBox(i)},createUICollapsed:function(e){this.inherited(arguments),a.create("div",{class:"MenLabel",innerHTML:u.menLabel},this.chartDiv),a.create("div",{class:"WomenLabel",innerHTML:u.womenLabel},this.chartDiv)},updateUI:function(){this.inherited(arguments),this._themeChangeHandle||(this._themeChangeHandle=_.on("change",t.hitch(this,this._onThemeChange))),this._currentTheme?this._doUpdateUI():_.load("AgePyramid").then(t.hitch(this,this._onThemeLoad))},_onThemeChange:function(){this._currentTheme=null,this._destroyChart(),this.updateUI()},_onThemeLoad:function(e){this._currentTheme=e,this._currentTheme.theme=new m(e.theme),this._doUpdateUI()},_doUpdateUI:function(){this._ensureChart();var e=this.getDataFields();this.maleIndices=[],this.femaleIndices=[];for(var a,s,n=e.length/2,h=Number.NEGATIVE_INFINITY,l=Number.POSITIVE_INFINITY,d=!0,o=!0,m=0;m<e.length;m++){var c=m<n;c?this.maleIndices.push(e[m]):this.femaleIndices.push(e[m]);var _=this.getValueByIndex(0,e[m]);_>h?(h=_,a=this.getFieldByIndex(e[m]).alias,d=c):_<l&&(l=_,s=this.getFieldByIndex(e[m]).alias,o=c)}var u,p,x=this._setSeriesData(this.chart.getSeries("male_bars"),0,this.maleIndices,-1),f=this._setSeriesData(this.chart.getSeries("female_bars"),0,this.femaleIndices,1);if(this.expanded){var I=this._getComparisonRow();u=this._setSeriesData(this.chart.getSeries("male_lines"),I,this.maleIndices,-1),p=this._setSeriesData(this.chart.getSeries("female_lines"),I,this.femaleIndices,1)}else this.chart.getSeries("male_lines").update([]),this.chart.getSeries("female_lines").update([]),u=Number.NEGATIVE_INFINITY,p=Number.NEGATIVE_INFINITY;if(this.extreme=g.getCeiling(Math.max(x,f,u,p),!0),this.chart.removeAxis("y"),this.chart.addAxis("y",{type:r,min:-this.extreme,max:this.extreme,minorTicks:!1,labelFunc:t.hitch(this,this._getAxisLabel)}),this.chart.removeAxis("x"),this.showVerticalAxis){var T=/\d+$/i;this.chart.addAxis("x",{type:r,min:.5,max:this.maleIndices.length+1,majorTickStep:1e3,majorTicks:!1,minorTicks:!0,minorTickStep:2,vertical:!0,labelFunc:t.hitch(this,function(e,t,i){var a=this.maleIndices[t-1],s=this.data.fields[a],n=s&&s.name.match(T);return(n=n&&n[0])||" "})})}this.chart.render(),this.expanded&&(d?i.replace(this.max,"AgePyramid_TextMale","AgePyramid_TextFemale"):i.replace(this.max,"AgePyramid_TextFemale","AgePyramid_TextMale"),o?i.replace(this.min,"AgePyramid_TextMale","AgePyramid_TextFemale"):i.replace(this.min,"AgePyramid_TextFemale","AgePyramid_TextMale"),this.max.innerHTML=a,this.min.innerHTML=s)},_getAxisLabel:function(e,t,i){return t=Math.abs(t),t!=this.extreme?s.format(t,{places:0}):s.format(t/100,{places:0,type:"percent"})},_setSeriesData:function(e,t,i,a){var s,n,r=[],h=0;for(s=0;s<i.length;s++)n=this.getValueByIndex(t,i[s]),r.push(n),h+=n;var l=Number.NEGATIVE_INFINITY;for(s=0;s<i.length;s++)n=r[s]/h*100,r[s]=n*a,n>l&&(l=n);if("lines"===e.plot)for(s=0;s<r.length;s++)r[s]={x:r[s],y:s+1};return e.update(r),l},_ensureChart:function(){if(!this.chart){var e=this._currentTheme,i=this.chart=new n(this.chartDiv);i.setTheme(e.theme),i.addPlot("lines",{type:this._getLinesPlot(),markers:!0}),i.addPlot("bars",{type:this._getBarsPlot(),gap:this.expanded?1.5:1}),i.addSeries("male_bars",[],t.mixin({plot:"bars"},e.male)),i.addSeries("female_bars",[],t.mixin({plot:"bars"},e.female)),i.addSeries("male_lines",[],t.mixin({plot:"lines"},e.line)),i.addSeries("female_lines",[],t.mixin({plot:"lines"},e.line));var a={text:t.hitch(this,this._getTooltip)};new this.tooltipClass(i,"bars",a),new this.tooltipClass(i,"lines",a),new o(i,"bars",{duration:1}),new o(i,"lines",{duration:1,highlight:e.highlight})}},_getLinesPlot:function(){return l},_getBarsPlot:function(){return h},_getTooltip:function(e){var t,i,a=this._currentTheme;switch(e.run.name){case"male_bars":t=this.maleIndices[e.index],i=0;break;case"female_bars":t=this.femaleIndices[e.index],i=0;break;case"male_lines":t=this.maleIndices[e.index],i=this._getComparisonRow();break;case"female_lines":t=this.femaleIndices[e.index],i=this._getComparisonRow();break;default:return""}var n=this.getFeatureTitle(i),r=this.getFieldByIndex(t).alias,h=s.format(this.getValueByIndex(i,t),{places:0}),l="lines"===e.plot.name?e.x:e.y,d=s.format(Math.abs(l)/100,{places:1,type:"percent"});return"<div class='AgePyramid_Tooltip_Content'><span style='font:"+a.font+"; color:"+a.color+";'><b>"+n+"</b > <br / > "+r+"<br/>"+h+" ("+d+")</span></div>"},resize:function(){this.inherited(arguments),this.chart&&this.chart.resize()},destroy:function(){this._destroyChart(),this._themeChangeHandle&&(this._themeChangeHandle.remove(),this._themeChangeHandle=null),this.inherited(arguments)},_destroyChart:function(){this.chart&&(this.chart.destroy(),this.chart=null)}})});