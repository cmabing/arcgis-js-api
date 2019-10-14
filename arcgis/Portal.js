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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","dojo/_base/Deferred","dojo/_base/array","dojo/_base/sniff","require","../kernel","../lang","../request","../urlUtils","../Evented","../IdentityManager"],function(t,e,r,i,s,n,a,o,l,u,c,h){var m={options:{disableIdentityLookup:!0},requestParams:{f:"json"}},p=function(t){function r(e){t[e]||(t[e]=function(){var r=arguments;return i.when(t,function(t){return Array.prototype.unshift.call(r,t.results||t),p(s[e].apply(s,r))})})}return t?(t.then&&(t=e.delegate(t)),t.total||(t.total=i.when(t,function(t){return l.isDefined(t.total)?t.total:t.length||0})),r("forEach"),r("filter"),r("map"),r("some"),r("every"),t):t},d={useSSL:function(t,e){var r=m&&m.self||{};if(r&&!r.isPortal)return-1!==t.indexOf("https:")||r.allSSL?e.replace("http:","https:"):e;var i=d.getLocation(e);if(r.portalHostname.toLowerCase().indexOf(i.hostname.toLowerCase())>-1&&i.port&&"80"!==i.port&&"443"!==i.port){var s=i.pathname;return s=0===s.indexOf("/")?s:"/"+s,r.allSSL||t.indexOf("https:")>-1?"https://"+i.hostname+(r.httpsPort&&"443"!==r.httpsPort?":"+r.httpsPort:"")+s+i.search:"http://"+i.hostname+(r.httpPort&&"80"!==r.httpPort?":"+r.httpPort:"")+s+i.search}return-1!==t.indexOf("https:")||r.allSSL?e.replace("http:","https:"):e},formatUrl:function(t){var e=m.currentToken;return-1!==t.indexOf("null")?null:d.useSSL(window.location.protocol,e?t+(-1!==t.indexOf("?")?"&":"?")+"token="+e:t)},getLocation:function(t){var e=document.createElement("a");return e.href=t,{protocol:e.protocol,hostname:e.hostname,port:e.port,pathname:e.pathname,search:e.search,hash:e.hash,host:e.host}},resultsToTypedArray:function(t,r,i){return i=i?i.listings||i.notifications||i.userInvitations||i.tags||i.items||i.groups||i.comments||i.provisions||i.results||i:[],s.map(i,function(i){return i=e.mixin(i,r||{}),t?new t(i):i})},clearFieldsFromObject:function(t,r){var i,s,n=t.length;if(e.isArray(t))for(s=0;s<n;s++)delete r[t[s]];else for(i in t)delete r[i];return r},requestToTypedArray:function(t,r,i,s,n){return p(d.request(t,r,i).then(e.partial(d.resultsToTypedArray,s,n)))},request:function(t,r,i){var s,n,a;return r&&r.portal&&delete r.portal,r&&r.form&&(s=r.form,delete r.form),n=e.mixin(e.mixin({},r||{}),m.requestParams),a=e.mixin(i||{},m.options),u({url:d.useSSL(window.location.protocol,t.url||t),content:n,callbackParamName:"callback",timeout:a&&a.timeout||0,form:s},a)},formatQueryParams:function(t,r,i){var s=e.mixin(e.mixin({},t),e.isString(r)?{q:r}:r||{});return s.q=!i&&m.extraQuery?"("+s.q+")"+m.extraQuery:s.q,s}},f=t([],{declaredClass:"esri.arcgis.PortalComment",constructor:function(t){e.mixin(this,t),this.url=this.item.itemUrl+"/comments/"+this.id,this.created=this.created?new Date(this.created):null}}),g=t([],{declaredClass:"esri.arcgis.PortalRating",constructor:function(t){e.mixin(this,t),this.url=this.item.itemUrl+"/rating",this.created=this.created?new Date(this.created):null}}),y=t([],{declaredClass:"esri.arcgis.PortalItem",constructor:function(t){e.mixin(this,t),this.folderId=this.ownerFolder||this.folderId,this.itemUrl=(this.portal&&this.portal.portalUrl)+"content/items/"+this.id,this.userItemUrl=this.hasOwnProperty("ownerFolder")?this.itemUrl.replace("/content/","/content/users/"+this.owner+(this.folderId?"/"+this.folderId:"")+"/"):null,this.itemDataUrl=d.formatUrl(this.itemUrl+"/data"),this.thumbnailUrl=d.formatUrl(this.itemUrl+"/info/"+this.thumbnail),this.displayName=this._getDisplayName(),this.iconUrl=this._getIconUrl(),this.isPremiumContent=this._getIsPremiumContent(),this.created=this.created?new Date(this.created):null,this.uploaded=this.uploaded?new Date(this.uploaded):null,this.modified=this.modified?new Date(this.modified):null},getTypeInfo:function(){var t,e=this.type,r=this.typeKeywords||[];return t=s.indexOf(r,"ArcGIS Server")>-1||"Feature Collection"===e?e:null,{source:t,displayName:this.displayName,iconUrl:this.iconUrl,isPremiumContent:this.isPremiumContent,premiumIconUrl:this._getPremiumIconUrl()}},addComment:function(t){var r=e.isString(t)?{comment:t}:t;return d.request(this.itemUrl+"/addComment",r,{usePost:!0}).then(e.hitch(this,function(t){return new f(e.mixin(r,{id:t.commentId,item:this}))}))},updateComment:function(t){if(t&&t.url&&t.comment){var e={comment:t.comment};return d.request(t.url+"/update",e,{usePost:!0}).then(function(e){return t.id=e.commentId,t})}throw new Error},getComments:function(){return d.requestToTypedArray(this.itemUrl+"/comments",null,null,f,{item:this})},deleteComment:function(t){if(t&&t.url)return d.request(t.url+"/delete",null,{usePost:!0});throw new Error},addRating:function(t){var r=e.isObject(t)?t:{rating:parseFloat(t)};return d.request(this.itemUrl+"/addRating",r,{usePost:!0}).then(e.hitch(this,function(t){return new g(e.mixin(r,{id:t.ratingId,item:this}))}))},getRating:function(){return d.request(this.itemUrl+"/rating").then(e.hitch(this,function(t){return new g(e.mixin(t,{item:this}))}))},deleteRating:function(){return d.request(this.itemUrl+"/deleteRating",null,{usePost:!0})},_getDisplayName:function(){var t=this.type,e=this.typeKeywords||[],r=t;return"Feature Service"===t||"Feature Collection"===t?r=s.indexOf(e,"Table")>-1?"Table":s.indexOf(e,"Route Layer")>-1?"Route Layer":s.indexOf(e,"Markup")>-1?"Markup":"Feature Layer":"Image Service"===t?r=s.indexOf(e,"Elevation 3D Layer")>-1?"Elevation Layer":"Imagery Layer":"Scene Service"===t?r="Scene Layer":"Scene Package"===t?r="Scene Layer Package":"Stream Service"===t?r="Feature Layer":"Geoprocessing Service"===t&&this.portal&&this.portal.isPortal?r=s.indexOf(e,"Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===t?r="Locator":"Microsoft Powerpoint"===t?r="Microsoft PowerPoint":"GeoJson"===t?(r="GeoJSON",this.type="GeoJSON"):"Globe Service"===t?r="Globe Layer":"Vector Tile Service"===t?r="Tile Layer":"netCDF"===t?r="NetCDF":"Map Service"===t?r=-1===s.indexOf(e,"Spatiotemporal")&&(s.indexOf(e,"Hosted Service")>-1||s.indexOf(e,"Tiled")>-1)&&-1===s.indexOf(e,"Relational")?"Tile Layer":"Map Image Layer":t&&t.toLowerCase().indexOf("add in")>-1?r=t.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===t?r="Big Data File Share":"Compact Tile Package"===t&&(r="Tile Package (tpkx)"),r},_getIconUrl:function(){var t,e=this.type&&this.type.toLowerCase()||"",r=this.typeKeywords||[],i=!1,n=!1,o=!1,l=!1,u=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(i=s.indexOf(r,"Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(l=s.indexOf(r,"Table")>-1,n=s.indexOf(r,"Route Layer")>-1,o=s.indexOf(r,"Markup")>-1,u=-1!==s.indexOf(r,"Spatiotemporal"),t=u&&l?"spatiotemporaltable":l?"table":n?"routelayer":o?"markup":u?"spatiotemporal":i?"featureshosted":"features"):"map service"===e||"wms"===e||"wmts"===e?(u=-1!==s.indexOf(r,"Spatiotemporal"),t=i||s.indexOf(r,"Tiled")>-1||"wmts"===e?"maptiles":u?"spatiotemporal":"mapimages"):t="scene service"===e?s.indexOf(r,"Line")>-1?"sceneweblayerline":s.indexOf(r,"3DObject")>-1?"sceneweblayermultipatch":s.indexOf(r,"Point")>-1?"sceneweblayerpoint":s.indexOf(r,"IntegratedMesh")>-1?"sceneweblayermesh":s.indexOf(r,"PointCloud")>-1?"sceneweblayerpointcloud":s.indexOf(r,"Polygon")>-1?"sceneweblayerpolygon":s.indexOf(r,"Building")>-1?"sceneweblayerbuilding":"sceneweblayer":"image service"===e?s.indexOf(r,"Elevation 3D Layer")>-1?"elevationlayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&s.indexOf(r,"Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):t="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?s.indexOf(r,"ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&s.indexOf(r,"ArcGIS Pro")>-1||"explorer map"===e&&s.indexOf(r,"Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&s.indexOf(r,"Explorer Mapping Application")>-1||s.indexOf(r,"Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hub page"===e?"hubpage":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"desktop style"===e?"desktopstyle":"style"===e?"style":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"maps",t?a.toUrl("../css/images/item_type_icons/"+t+"16.png"):null},_getIsPremiumContent:function(){var t=this.typeKeywords,e=!1;return(s.indexOf(t,"Requires Subscription")>-1||s.indexOf(t,"Requires Credits")>-1)&&(e=!0),e},_getPremiumIconUrl:function(){var t,e=this.typeKeywords;return this.isPremiumContent&&(t=s.indexOf(e,"Requires Credits")>-1?"premiumcredits":"premiumitem"),t?a.toUrl("../css/images/item_type_icons/"+t+"16.png"):null},getThumbnailUrl:function(t){var e=this.thumbnailUrl;return e&&t&&(e+=(-1===e.indexOf("?")?"?":"&")+"w="+t),e}}),b=t([],{declaredClass:"esri.arcgis.PortalListing",constructor:function(t){e.mixin(this,t),this.id=this.itemId,this.url=(this.portal&&this.portal.portalUrl)+"content/"+(this.userItemUrl?"items/":"listings/")+this.itemId,this.commentsUrl=this.url+"/comments",this.created=this.created?new Date(this.created):null,this.banner=this.banner?d.formatUrl(this.url+"/info/"+this.banner):"",this.thumbnail=this.thumbnail?d.formatUrl(this.url+"/info/"+this.thumbnail):"",this.largeThumbnail=this.largeThumbnail?d.formatUrl(this.url+"/info/"+this.largeThumbnail):"",this.avgRating=this.avgRating||0,this.numRatings=this.numRatings||0,this.numComments=this.numComments||0,this.listingProperties=this.listingProperties||{priceDesc:"",creditsPerTransaction:0,licenseType:"free",trialSupported:!1,trialDuration:0,listingAccess:"private"};for(var r in this.listingProperties)this[r]&&(this.listingProperties[r]=this[r]);this.properties=this.properties||{systemRequirements:"",termsAndConditions:"",version:"1.0"},this.screenshots=s.map(this.screenshots,e.hitch(this,function(t){return d.formatUrl(this.url+"/info/"+t)})),this.vendorName=this.vendor.name,this.vendor.thumbnail=this.vendor.thumbnail?this.userItemUrl?d.formatUrl(this.portal.portalUrl+"/portals/self/resources/"+this.vendor.thumbnail):d.formatUrl(this.url+"/vendorinfo/"+this.vendor.thumbnail):""},getComments:function(){return d.requestToTypedArray(this.commentsUrl,null,null,f,{item:this})},getVendor:function(){return this.vendor}}),v=t([],{declaredClass:"esri.arcgis.PortalProvision",constructor:function(t){e.mixin(this,t),this.created=this.created?new Date(this.created):null,this.startDate=this.startDate?new Date(this.startDate):null,this.endDate=this.endDate&&-1!==this.endDate?new Date(this.endDate):null,this.listing=t.listing?new b(e.mixin(t.listing,{portal:this.portal})):null}}),x=t([],{declaredClass:"esri.arcgis.PortalGroup",constructor:function(t){e.mixin(this,t),this.url=(this.portal&&this.portal.portalUrl)+"community/groups/"+this.id,this.thumbnailUrl=d.formatUrl(this.url+"/info/"+this.thumbnail),this.modified=this.modified?new Date(this.modified):null,this.created=this.created?new Date(this.created):null},getMembers:function(){return d.request(this.url+"/users")},queryItems:function(t,e){return t=d.formatQueryParams({},t,e),t.q="group:"+this.id+(t.q?" "+t.q:""),this.portal.queryItems(t)},getThumbnailUrl:function(t){var e=this.thumbnailUrl;return e&&t&&(e+=(-1===e.indexOf("?")?"?":"&")+"w="+t),e}}),w=t([],{declaredClass:"esri.arcgis.PortalFolder",constructor:function(t){e.mixin(this,t),this.url=(this.portal&&this.portal.portalUrl)+"content/users/"+this.username+"/"+this.id,this.created=this.created?new Date(this.created):null},getItems:function(){return d.requestToTypedArray(this.url,null,null,y,{portal:this.portal,folderId:this.id})}}),P=t([],{declaredClass:"esri.arcgis.PortalUser",constructor:function(t){e.mixin(this,t),this.url=(this.portal&&this.portal.portalUrl)+"community/users/"+this.username,this.userContentUrl=(this.portal&&this.portal.portalUrl)+"content/users/"+this.username,this.thumbnailUrl=this.thumbnail?d.formatUrl(this.url+"/info/"+this.thumbnail):null,this.modified=this.modified?new Date(this.modified):null,this.created=this.created?new Date(this.created):null},getGroups:function(){return p(d.request(this.url).then(e.hitch(this,function(t){return d.resultsToTypedArray(x,{portal:this.portal},t.groups)})))},getNotifications:function(){return d.requestToTypedArray(this.url+"/notifications",null,null,null,{portal:this.portal})},getGroupInvitations:function(){return d.requestToTypedArray(this.url+"/invitations",null,null,null,{portal:this.portal})},getTags:function(){return d.requestToTypedArray(this.url+"/tags",null,null,null,{portal:this.portal})},getFolders:function(){return p(this.getContent(null,{num:1}).then(function(t){return t.folders}))},getItems:function(t){return p(this.getContent(t).then(function(t){return t.items}))},getItem:function(t){var r=this.portal.portalUrl+"content/items/"+t;return d.request(r).then(e.hitch(this,function(t){return new y(e.mixin(t,{portal:this.portal}))}))},getContent:function(t,r){var i=this.url.replace("/community/","/content/")+(t?"/"+t:"");return d.request(i,r).then(e.hitch(this,function(e){return e.folders=d.resultsToTypedArray(w,{portal:this.portal},e.folders),e.items=d.resultsToTypedArray(y,{portal:this.portal,folderId:t},e.items),e}))},getThumbnailUrl:function(t){var e=this.thumbnailUrl;return e&&t&&(e+=(-1===e.indexOf("?")?"?":"&")+"w="+t),e}}),U=t([h],{declaredClass:"esri.arcgis.Portal",onLoad:function(){},onError:function(){},constructor:function(t){var r,i=e.isObject(t)?t:{url:t};if(this.registerConnectEvents(),m={options:{disableIdentityLookup:!0},requestParams:{f:"json"}},i.self){m.self=i.self,e.mixin(this,{url:i.url||c.getProtocolForWebResource()+"//"+(i.self.urlKey?i.self.urlKey+"."+i.self.customBaseUrl:i.self.portalHostname)});var s=this.url.indexOf("/sharing");this.portalUrl=-1!==s?this.url+"/":this.url+"/sharing/rest/",r=i.self.user?this.signIn():this.init(this.url)}else i.url&&e.mixin(this,{url:i.url}),r=this.init(this.url);r.then(e.hitch(this,function(){this.emit("ready",this),this.onLoad(this)}))},init:function(t,r){t=(t||this.portalUrl).replace(/\/+$/,"");var i=t.indexOf("/sharing");return this.portalUrl=-1!==i?t+"/":t+"/sharing/rest/",this._getSelf(this.portalUrl).then(e.hitch(this,function(t){m.self=e.mixin({},t);var i=t.user;return i&&r&&(m.currentToken=r&&r.token,m.loggedInUser=new P(e.mixin(i,{portal:this,credential:r}))),m.self.id&&!1===m.self.canSearchPublic&&(m.extraQuery=" AND orgid:"+m.self.id),e.mixin(this,m.self),this.thumbnailUrl=d.formatUrl(this.portalUrl+"portals/self/resources/"+this.thumbnail),this.isOrganization=!(!this.access||!this.access.length),this.created=this.created?new Date(this.created):null,this.modified=this.modified?new Date(this.modified):null,this}),e.hitch(this,function(t){throw this.onError(t),t}))},signIn:function(){var t=new i,r=e.hitch(this,function(){this._onSignIn().then(e.hitch(this,function(){t.resolve(m.loggedInUser)}),e.hitch(this,function(e){t.reject(e)}))});return m&&m.self?m&&m.loggedInUser?setTimeout(function(){t.resolve(m.loggedInUser)},0):r():this.on("load",e.hitch(this,function(){r()})),t},signOut:function(){return m.loggedInUser.credential&&m.loggedInUser.credential.destroy(),m.loggedInUser=null,m.options.disableIdentityLookup=!0,d.clearFieldsFromObject(m.self,this),m.self=null,this.init(this.url)},getPortalUser:function(){return m.loggedInUser},addResource:function(t,e){var r={key:t,text:e};return d.request(this.portalUrl+"portals/self/addResource",r,{usePost:!0})},update:function(t){return d.request(this.portalUrl+"portals/self/update",t,{usePost:!0})},queryGroups:function(t,e){return this._queryPortal(this.portalUrl+"community/groups",d.formatQueryParams({},t,e),x)},queryItems:function(t,e){return this._queryPortal(this.portalUrl+"search",d.formatQueryParams({},t,e),y)},queryListings:function(t){var e=d.formatQueryParams({},t,!0),r="";return e.q&&e.q.toLowerCase().indexOf("mylistings:true")>-1?(e.q=e.q.toLowerCase().replace("mylistings:true",""),r="?mylistings=true"):e.q||(e.q='""'),this._queryPortal(this.portalUrl+"content/listings"+r,e,b)},queryCustomerList:function(t,e){var r=d.formatQueryParams({},t,!0);return this._queryPortal(this.portalUrl+"portals/self/customersList",r)},getProvisions:function(){return this.getCustomers().then(e.hitch(this,function(t){return t.purchases}))},getInterests:function(){return this.getCustomers().then(e.hitch(this,function(t){return t.interests}))},getTrials:function(){return this.getCustomers().then(e.hitch(this,function(t){return t.trials}))},getCustomers:function(t){var e=this.portalUrl+"portals/self/customers",r={status:t||"all"};return d.request(e,r)},getMyPurchases:function(){return this.getPurchases().then(function(t){return t.purchases})},getMyInterests:function(){return this.getPurchases().then(function(t){return t.interests})},getPurchases:function(){var t=this.portalUrl+"portals/self/purchases";return d.request(t).then(e.hitch(this,function(t){return t.interests=s.map(t.interests,function(t){return e.mixin(t.provision,{listing:t.listing})}),t.purchases=s.map(t.purchases,function(t){return e.mixin(t.provision,{listing:t.listing})}),t.trials=s.map(t.trials,function(t){return e.mixin(t.provision,{listing:t.listing})}),t.interests=d.resultsToTypedArray(v,{portal:this},t.interests),t.trials=d.resultsToTypedArray(v,{portal:this},t.trials),t.purchases=d.resultsToTypedArray(v,{portal:this},t.purchases),t}))},queryUsers:function(t,e){return this._queryPortal(this.portalUrl+"community/users",d.formatQueryParams({sortField:"username"},t,e),P)},_onSignIn:function(){return m.options.disableIdentityLookup=!1,m.self=null,o.id.getCredential(this.portalUrl).then(e.hitch(this,"init",this.url)).then(function(){return m.loggedInUser},e.hitch(this,function(t){throw m.options.disableIdentityLookup=!0,this.onError(t),t}))},_getSelf:function(t){var e,s=t+"portals/self";return m.self?(e=new i,setTimeout(function(){e.resolve(m.self)},0)):e=d.request(s,{culture:r.locale}),e},_queryPortal:function(t,r,s){var n=e.mixin({num:10,start:0,sortField:"title",sortOrder:"asc"},r),a=["start","query","num","nextStart"],o=d.request(t,n).then(e.hitch(this,function(t){return t.results=d.resultsToTypedArray(s,{portal:this},t),t.queryParams=e.mixin({},n),t.nextQueryParams=e.mixin(n,{start:t.nextStart}),d.clearFieldsFromObject(a,t)}));return o=e.delegate(o),o.queryParams=e.mixin({},n),o.nextQueryParams=i.when(o,function(t){return t.nextQueryParams}),p(o)}}),k={Portal:U,PortalFolder:w,PortalGroup:x,PortalItem:y,PortalUser:P,PortalComment:f,PortalRating:g,PortalUtil:d,PortalResult:p,PortalListing:b};return n("extend-esri")&&e.mixin(e.getObject("arcgis",!0,o),k),k});