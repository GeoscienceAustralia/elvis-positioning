/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var versions={3:{version:"3.0",link:"https://creativecommons.org/licenses/by/3.0/au/"},4:{version:"4.0",link:"https://creativecommons.org/licenses/by/4.0/"}};angular.module("common.cc",[]).directive("commonCc",[function(){return{templateUrl:"common/cc/cc.html",scope:{version:"=?"},link:function(e){e.version?e.details=versions[e.version]:e.details=versions[4],e.template="common/cc/cctemplate.html"}}}]),angular.module("common.accordion",["ui.bootstrap.collapse"]).constant("commonAccordionConfig",{closeOthers:!0}).controller("commonAccordionController",["$scope","$attrs","commonAccordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(o){var r=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;r&&angular.forEach(this.groups,function(e){e!==o&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(n){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);t!==-1&&this.groups.splice(t,1)}}]).directive("commonAccordion",function(){return{controller:"commonAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(e,t){return t.templateUrl||"common/accordion/accordion.html"}}}).directive("commonAccordionGroup",function(){return{require:"^commonAccordion",transclude:!0,restrict:"A",templateUrl:function(e,t){return t.templateUrl||"common/accordion/accordionGroup.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(e){this.heading=e}},link:function(e,t,n,o){t.addClass("panel"),o.addGroup(e),e.openClass=n.openClass||"panel-open",e.panelClass=n.panelClass||"panel-default",e.$watch("isOpen",function(n){t.toggleClass(e.openClass,!!n),n&&o.closeOthers(e)}),e.toggleOpen=function(t){e.isDisabled||t&&32!==t.which||(e.isOpen=!e.isOpen)};var r="accordiongroup-"+e.$id+"-"+Math.floor(1e4*Math.random());e.headingId=r+"-tab",e.panelId=r+"-panel"}}}).directive("commonAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^commonAccordionGroup",link:function(e,t,n,o,r){o.setHeading(r(e,angular.noop))}}}).directive("commonAccordionTransclude",function(){function e(){return"common-accordion-header,data-common-accordion-header,x-common-accordion-header,common\\:accordion-header,[common-accordion-header],[data-common-accordion-header],[x-common-accordion-header]"}return{require:"^commonAccordionGroup",link:function(t,n,o,r){t.$watch(function(){return r[o.commonAccordionTransclude]},function(t){if(t){var o=angular.element(n[0].querySelector(e()));o.html(""),o.append(t)}})}}}),function(e){e.module("common.header",[]).controller("headerController",["$scope","$q","$timeout",function(e,t,n){var o=function(e){return e};e.$on("headerUpdated",function(t,n){e.headerConfig=o(n)})}]).directive("icsmHeader",[function(){var t={current:"none",heading:"ICSM",headingtitle:"ICSM",helpurl:"help.html",helptitle:"Get help about ICSM",helpalttext:"Get help about ICSM",skiptocontenttitle:"Skip to content",skiptocontent:"Skip to content",quicklinksurl:"/search/api/quickLinks/json?lang=en-US"};return{transclude:!0,restrict:"EA",templateUrl:"common/header/header.html",scope:{current:"=",breadcrumbs:"=",heading:"=",headingtitle:"=",helpurl:"=",helptitle:"=",helpalttext:"=",skiptocontenttitle:"=",skiptocontent:"=",quicklinksurl:"="},link:function(n,o,r){e.copy(t);e.forEach(t,function(e,t){t in n||(n[t]=e)})}}}]).factory("headerService",["$http",function(){}])}(angular),function(e){function t(e){if(e.toUpperCase()==e)return e;var t=e.split("_"),n=t[t.length-1];return n.replace(/./,function(e){return e.toUpperCase()}).replace(/([A-Z])/g," $1").trim()}e.module("common.iso19115",["common.recursionhelper"]).directive("iso19115Metadata",[function(){return{templateUrl:"common/iso19115/metadata.html",scope:{node:"="}}}]).directive("iso19115Contact",[function(){return{templateUrl:"common/iso19115/contact.html",restrict:"AE",scope:{node:"="}}}]).directive("iso19115Double",[function(){return{templateUrl:"common/iso19115/double.html",restrict:"AE",scope:{node:"=",name:"@",type:"@"},link:function(e){e.node&&(e.value=e.node[e.name][e.type])}}}]).directive("iso19115Node",[function(){var e={CharacterString:function(e){return e&&e.CharacterString?e.CharacterString.__text:null},LanguageCode:function(e){return e&&e.LanguageCode?e.LanguageCode._codeListValue:null},MD_CharacterSetCode:function(e){return e&&e.MD_CharacterSetCode?e.LanguageCode._codeListValue:null},_codeListValue:function(e){return e?e._codeListValue:null}};return{template:'<ul><li><span class="iso19115-head" ng-show="display">{{display}}:</span> <span class="iso19115-value">{{value}}</span></li></ul>',restrict:"AE",replace:!0,scope:{node:"=",name:"@",type:"@"},link:function(n){n.display=t(n.name),n.value=e[n.type](n.node)}}}]).filter("iso19115NodeName",[function(){return t}])}(angular);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e){e.module("common.metaview",[]).directive("commonMetaview",["metaviewService",function(e){return{templateUrl:"common/metaview/metaview.html",restrict:"AE",scope:{url:"=",container:"=",item:"="},link:function(t){console.log("URL = "+t.url),t.select=function(){e.get(t.url,{cache:!0}).then(function(e){t.item.metadata=e,t.container.selected=t.item})}}}}]).directive("commonItemMetaview",[function(){return{templateUrl:"common/metaview/item.html",restrict:"AE",scope:{container:"="},link:function(e){}}}]).directive("metaviewIso19115",[function(){return{templateUrl:"common/metaview/iso19115.html",restrict:"AE",scope:{data:"="},link:function(e){}}}]).directive("metaviewIso19115Array",["RecursionHelper",function(t){function n(t){t.isObject=function(){return e.isObject(t.node)},t.getKeys=function(){if(t.isObject())return Object.keys(t.node).filter(function(e){return!(excludeNodes[e]||e.indexOf(":")>-1)}).map(function(e){return""===e?'""':e})}}return{template:'<metaview-node ng-repeat="nextKey in getKeys() track by $index" node="node[nextKey]" key="nextKey"></metaview-node>',restrict:"AE",scope:{data:"="},compile:function(e){return t.compile(e,n)}}}]).directive("metaviewIso19115Node",["RecursionHelper",function(t){function n(t){t.isObject=function(){return e.isObject(t.node)},t.getKeys=function(){if(t.isObject())return Object.keys(t.node).filter(function(e){return!(o[e]||e.indexOf(":")>-1)}).map(function(e){return""===e?'""':e})},t.isArray=function(){return e.isArray(t.node)}}var o={$$hashKey:!0,__prefix:!0,__text:!0,_codeList:!0,_codeListValue:!0,CharacterString:!0,DateTime:!0,LanguageCode:!0,MD_ScopeCode:!0,scopeCode:!0};return{templateUrl:"common/metaview/iso19115node.html",restrict:"E",replace:!0,scope:{node:"=",key:"=",array:"="},compile:function(e){return t.compile(e,n)}}}]).filter("metaviewText",[function(){var t={CharacterString:"__text",DateTime:"__text",LanguageCode:"_codeListValue",linkage:["URL","__text"],MD_ScopeCode:"_codeListValue",_codeListValue:"#text"},n=[];return e.forEach(t,function(e,t){this.push(t)},n),function(e){var o=null;return e&&n.some(function(n){var r=e[n];if(r){var a=t[n];Array.isArray(a)||(a=[a]);var i=r;return a.forEach(function(e){"#text"!==e&&(i=i[e])}),o=i,!0}return!1}),o}}]).filter("metaviewNodeName",[function(){return function(e){if(parseInt(e)+""==""+e)return console.log("Its a num"),"";if(e.toUpperCase()===e)return e;var t=e.split("_"),n=t[t.length-1];return n.replace(/./,function(e){return e.toUpperCase()}).replace(/([A-Z])/g," $1").trim()}}]).filter("metaviewTransform",[function(){return function(e,t){return e.CharacterString?e.CharacterString.__text:e}}]).provider("metaviewService",function(){var e="xml2js/";this.proxy=function(t){e=t},this.$get=["$http",function(n){return new t(e,n)}]});var t=function(){function e(t,n){_classCallCheck(this,e),this.proxy=t,this.http=n}return _createClass(e,[{key:"get",value:function(e){return this.http.get(this.proxy+e).then(function(e){return e.data})}}]),e}()}(angular),function(e){function t(e){var t=this;e.data().then(function(e){t.data=e})}function n(){return{add:function(e){},remove:function(e){}}}e.module("common.panes",[]).directive("icsmPanes",["$rootScope","$timeout","mapService",function(e,t,n){return{templateUrl:"common/panes/panes.html",transclude:!0,replace:!0,scope:{defaultItem:"@",data:"="},controller:["$scope",function(o){var r=!1;o.view=o.defaultItem,o.setView=function(t){var a=o.view;o.view==t?(t&&(r=!0),o.view=""):(t||(r=!0),o.view=t),e.$broadcast("view.changed",o.view,a),r&&n.getMap().then(function(e){e._onResize()})},t(function(){e.$broadcast("view.changed",o.view,null)},50)}]}}]).directive("icsmTabs",[function(){return{templateUrl:"common/panes/tabs.html",require:"^icsmPanes"}}]).controller("PaneCtrl",t).factory("paneService",n),t.$inject=["paneService"],n.$inject=[]}(angular),function(e){e.module("common.altthemes",[]).directive("altThemes",["altthemesService",function(e){return{restrict:"AE",templateUrl:"common/navigation/altthemes.html",scope:{current:"="},link:function(t){e.getThemes().then(function(e){t.themes=e}),e.getCurrentTheme().then(function(e){t.theme=e}),t.changeTheme=function(n){t.theme=n,e.setTheme(n.key)}}}}]).controller("altthemesCtrl",["altthemesService",function(e){this.service=e}]).filter("altthemesFilter",function(){return function(e,t){var n=[];return t?(e&&e.forEach(function(e){e.themes&&e.themes.some(function(e){return e===t.key})&&n.push(e)}),n):e}}).factory("altthemesService",["$q","$http","storageService",function(t,n,o){var r="positioning.current.theme",a="positioning/resources/config/themes.json",i="All",c=[],s=this;return this.themes=[],this.theme=null,o.getItem(r).then(function(t){t||(t=i),n.get(a,{cache:!0}).then(function(n){var o=n.data.themes;s.themes=o,s.theme=o[t],e.forEach(o,function(e,t){e.key=t}),c.forEach(function(e){e.resolve(s.theme)})})}),this.getCurrentTheme=function(){if(this.theme)return t.when(s.theme);var e=t.defer();return c.push(e),e.promise},this.getThemes=function(){return n.get(a,{cache:!0}).then(function(e){return e.data.themes})},this.setTheme=function(e){this.theme=this.themes[e],o.setItem(r,e)},this}]).filter("altthemesEnabled",function(){return function(e){return e?e.filter(function(e){return!!e.enabled}):e}}).filter("altthemesMatchCurrent",function(){return function(e,t){return e?e.filter(function(e){return!!e.keys.find(function(e){return e===t})}):e}})}(angular),function(e){e.module("common.navigation",[]).directive("commonNavigation",[function(){return{restrict:"AE",template:"<alt-themes current='current'></alt-themes>",scope:{current:"=?"},link:function(e){e.username="Anonymous",e.current||(e.current="none")}}}]).factory("navigationService",[function(){return{}}])}(angular),angular.module("common.proxy",[]).provider("proxy",function(){this.$get=["$http","$q",function(e,t){var n="proxy/";return this.setProxyBase=function(e){n=e},{get:function(e,t){return this._method("get",e,t)},post:function(e,t){return this._method("post",e,t)},put:function(e,t){return this._method("put",e,t)},_method:function(t,o,r){return e[t](n+o,r).then(function(e){return e.data})}}}]}),function(e){e.module("common.recursionhelper",[]).factory("RecursionHelper",["$compile",function(t){return{compile:function(n,o){e.isFunction(o)&&(o={post:o});var r,a=n.contents().remove();return{pre:o&&o.pre?o.pre:null,post:function(e,n){r||(r=t(a)),r(e,function(e){n.append(e)}),o&&o.post&&o.post.apply(null,arguments)}}}}}])}(angular),function(e){e.module("common.scroll",[]).directive("commonScroller",["$timeout",function(e){return{scope:{more:"&",buffer:"=?"},link:function(t,n,o){var r;t.buffer||(t.buffer=100),n.on("scroll",function(n){function o(){t.more&&a.scrollHeight-a.scrollTop<=a.clientHeight+t.buffer&&t.more()}var a=n.currentTarget;e.cancel(r),r=e(o,120)})}}}])}(angular),function(e){e.module("common.storage",["explorer.projects"]).factory("storageService",["$log","$q","projectsService",function(e,t,n){return{setGlobalItem:function(e,t){this._setItem("_system",e,t)},setItem:function(e,t){n.getCurrentProject().then(function(n){this._setItem(n,e,t)}.bind(this))},_setItem:function(t,n,o){e.debug("Fetching state for key locally"+n),localStorage.setItem("mars.anon."+t+"."+n,JSON.stringify(o))},getGlobalItem:function(e){return this._getItem("_system",e)},getItem:function(e){var o=t.defer();return n.getCurrentProject().then(function(t){this._getItem(t,e).then(function(e){o.resolve(e)})}.bind(this)),o.promise},_getItem:function(n,o){e.debug("Fetching state locally for key "+o);var r=localStorage.getItem("mars.anon."+n+"."+o);if(r)try{r=JSON.parse(r)}catch(a){}return t.when(r)}}}])}(angular),function(e){e.module("common.toolbar",[]).directive("icsmToolbar",[function(){return{controller:"toolbarLinksCtrl"}}]).directive("icsmToolbarRow",[function(){var e="Satellite to Topography bias on base map.";return{scope:{map:"=",overlaytitle:"=?"},restrict:"AE",templateUrl:"common/toolbar/toolbar.html",link:function(t){t.overlaytitle=t.overlaytitle?t.overlaytitle:e}}}]).controller("toolbarLinksCtrl",["$scope","configService",function(e,t){var n=this;t.getConfig().then(function(e){n.links=e.toolbarLinks}),e.item="",e.toggleItem=function(t){e.item=e.item==t?"":t}}])}(angular),angular.module("common.templates",[]).run(["$templateCache",function(e){e.put("common/cc/cc.html",'<button type="button" class="undecorated" title="View CCBy {{details.version}} licence details"\r\n      popover-trigger="outsideClick"\r\n      uib-popover-template="template" popover-placement="bottom" popover-append-to-body="true">\r\n\t<i ng-class="{active:data.isWmsShowing}" class="fa fa-lg fa-gavel"></i>\r\n</button>'),e.put("common/cc/cctemplate.html",'<div>\r\n   <div class="row">\r\n      <div class="col-md-12">\r\n         <a target="_blank" ng-href="{{details.link}}">Creative Commons Attribution {{details.version}} </a>\r\n      </div>\r\n   </div>\r\n   <div class="row">\r\n      <div class="col-md-2">\r\n         <span class="fa-stack" aria-hidden="true">\r\n         <i class="fa fa-check-circle-o fa-stack-2x" aria-hidden="true"></i>\r\n      </span>\r\n      </div>\r\n      <div class="col-md-10">\r\n         You may use this work for commercial purposes.\r\n      </div>\r\n   </div>\r\n   <div class="row">\r\n      <div class="col-md-2">\r\n         <span class="fa-stack" aria-hidden="true">\r\n         <i class="fa fa-circle-o fa-stack-2x"></i>\r\n         <i class="fa fa-female fa-stack-1x"></i>\r\n      </span>\r\n      </div>\r\n      <div class="col-md-10">\r\n         You must attribute the creator in your own works.\r\n      </div>\r\n   </div>\r\n</div>'),e.put("common/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>'),e.put("common/accordion/accordionGroup.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\r\n  <h4 class="panel-title">\r\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}"\r\n            aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()"\r\n            common-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle>\r\n      <span common-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span>\r\n   </a>\r\n  </h4>\r\n</div>\r\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel"\r\n            class="panel-collapse collapse" uib-collapse="!isOpen">\r\n  <div class="panel-body" ng-transclude></div>\r\n</div>'),e.put("common/header/header.html",'<div class="container-full common-header" style="padding-right:10px; padding-left:10px">\r\n    <div class="navbar-header">\r\n\r\n        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".ga-header-collapse">\r\n            <span class="sr-only">Toggle navigation</span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n        </button>\r\n\r\n        <a href="/" class="appTitle visible-xs">\r\n            <h1 style="font-size:120%">{{heading}}</h1>\r\n        </a>\r\n    </div>\r\n    <div class="navbar-collapse collapse ga-header-collapse">\r\n        <ul class="nav navbar-nav">\r\n            <li class="hidden-xs"><a href="/"><h1 class="applicationTitle">{{heading}}</h1></a></li>\r\n        </ul>\r\n        <ul class="nav navbar-nav navbar-right nav-icons">\r\n        \t<li common-navigation role="menuitem" current="current" style="padding-right:10px"></li>\r\n\t\t\t<li mars-version-display role="menuitem"></li>\r\n\t\t\t<li style="width:10px"></li>\r\n        </ul>\r\n    </div><!--/.nav-collapse -->\r\n</div>\r\n\r\n<!-- Strap -->\r\n<div class="row">\r\n    <div class="col-md-12">\r\n        <div class="strap-blue">\r\n        </div>\r\n        <div class="strap-white">\r\n        </div>\r\n        <div class="strap-red">\r\n        </div>\r\n    </div>\r\n</div>'),e.put("common/iso19115/contact.html",'<ul ng-show="node.hierarchyLevel">\r\n   <li>\r\n      <span class="iso19115-head">Contact</span>\r\n      <iso19115-node name="MD_ScopeCode" node="node.hierarchyLevel.MD_ScopeCode" type="_codeListValue"></iso19115-node>\r\n    </li>\r\n</ul>'),e.put("common/iso19115/double.html",'\r\n<ul ng-show="node">\r\n   <li>\r\n      <span class="iso19115-head">{{name | iso19115NodeName}}</span>\r\n      <iso19115-node name="name" node="node[name]" type="type"></iso19115-node>\r\n   </li>\r\n</ul>\r\n'),e.put("common/iso19115/metadata.html",'<div class="iso19115">\r\n   <ul>\r\n      <li>\r\n         <span class="iso19115-head">Metadata</span>\r\n         <iso19115-node name="fileIdentifier" node="node.fileIdentifier" type="CharacterString"></iso19115-node>\r\n         <iso19115-node name="language" node="node.language" type="LanguageCode"></iso19115-node>\r\n         <ul ng-show="node.characterSet">\r\n            <li>\r\n               <span class="iso19115-head">Character Set</span>\r\n               <iso19115-node name="CharacterSetCode" node="node.characterSet.MD_CharacterSetCode" type="_codeListValue"></iso19115-node>\r\n            </li>\r\n         </ul>\r\n\r\n         <ul ng-show="node.hierarchyLevel">\r\n            <li>\r\n               <span class="iso19115-head">Hierarchy Level</span>\r\n               <iso19115-node name="MD_ScopeCode" node="node.hierarchyLevel.MD_ScopeCode" type="_codeListValue"></iso19115-node>\r\n            </li>\r\n         </ul>\r\n         <iso19115-node name="hierarchyLevelName" node="node.hierarchyLevelName" type="CharacterString"></iso19115-node>\r\n         <iso19115-contact ng-if="node.contact" node="node.contact" key="\'contact\'"></iso19115-contact>\r\n      </li>\r\n   </ul>\r\n</div>'),e.put("common/metaview/dublincore.html","Dublin core"),e.put("common/metaview/iso19115.html",'<iso19115-metadata node="data.metadata.GetRecordByIdResponse.MD_Metadata" key="\'MD_Metadata\'"></iso19115-metadata>\r\n'),e.put("common/metaview/iso19115node.html",'<ul>\r\n   <li>\r\n      <span class="metaview-head">{{key | metaviewNodeName}}</span>\r\n      <span>{{node | metaviewText}}</span>\r\n      <ng-repeat ng-if="isArray()" ng-repeat="next in node" node="next]">\r\n         <metaview-iso19115-array ng-repeat="nextKey in getKeys() track by $index" node="node[nextKey]" key="nextKey"></metaview-iso19115-array>\r\n      </ng-repeat>\r\n      <metaview-iso19115-node ng-if="!isArray()" ng-repeat="nextKey in getKeys() track by $index" node="node[nextKey]" key="nextKey"></metaview-iso19115-node>\r\n   </li>\r\n</ul>'),e.put("common/metaview/item.html",'<div>\r\n\t<button class="btn btn-sm btn-outline-primary" ng-click="container.selected = null"><i class="fa fa-angle-double-left"></i> Back</button>\r\n      <span style="font-weight: bold;padding-left:10px; font-size:130%">{{container.selected.title}}</span>\r\n      <metaview-iso19115 data="container.selected"></metaview-iso19115>\r\n</div>'),e.put("common/metaview/metaview.html",'<button type="button" class="undecorated" title="View metadata" ng-click="select()">\r\n\t<i class="fa fa-lg fa-info metaview-info"></i>\r\n</button>'),e.put("common/panes/panes.html",'<div class="container contentContainer">\r\n\t<div class="row icsmPanesRow" >\r\n\t\t<div class="icsmPanesCol" ng-class="{\'col-md-12\':!view, \'col-md-7\':view}" style="padding-right:0">\r\n\t\t\t<div class="expToolbar row noPrint" icsm-toolbar-row map="root.map" overlaytitle="\'Change overlay opacity\'"></div>\r\n\t\t\t<div class="panesMapContainer" geo-map configuration="data.map">\r\n\t\t\t    <geo-extent></geo-extent>\r\n\t\t\t</div>\r\n    \t\t<div geo-draw data="data.map.drawOptions" line-event="elevation.plot.data" rectangle-event="bounds.drawn"></div>\r\n    \t\t<div class="common-legend" common-legend map="data.map"></div>\r\n    \t\t<div icsm-tabs class="icsmTabs"  ng-class="{\'icsmTabsClosed\':!view, \'icsmTabsOpen\':view}"></div>\r\n\t\t</div>\r\n\t\t<div class="icsmPanesColRight" ng-class="{\'hidden\':!view, \'col-md-5\':view}" style="padding-left:0; padding-right:0">\r\n\t\t\t<div class="panesTabContentItem" ng-show="view == \'download\'" icsm-view></div>\r\n\t\t\t<div class="panesTabContentItem" ng-show="view == \'maps\'" icsm-maps></div>\r\n\t\t\t<div class="panesTabContentItem" ng-show="view == \'glossary\'" icsm-glossary></div>\r\n\t\t\t<div class="panesTabContentItem" ng-show="view == \'help\'" icsm-help></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'),e.put("common/panes/tabs.html",'<!-- tabs go here -->\r\n<div id="panesTabsContainer" class="paneRotateTabs" style="opacity:0.9" ng-style="{\'right\' : contentLeft +\'px\'}">\r\n\r\n\t<div class="paneTabItem" ng-class="{\'bold\': view == \'download\'}" ng-click="setView(\'download\')">\r\n\t\t<button class="undecorated">Download</button>\r\n\t</div>\r\n\t<!-- \r\n\t<div class="paneTabItem" ng-class="{\'bold\': view == \'search\'}" ng-click="setView(\'search\')">\r\n\t\t<button class="undecorated">Search</button>\r\n\t</div>\r\n\t<div class="paneTabItem" ng-class="{\'bold\': view == \'maps\'}" ng-click="setView(\'maps\')">\r\n\t\t<button class="undecorated">Layers</button>\r\n\t</div>\r\n\t-->\r\n\t<div class="paneTabItem" ng-class="{\'bold\': view == \'glossary\'}" ng-click="setView(\'glossary\')">\r\n\t\t<button class="undecorated">Glossary</button>\r\n\t</div>\r\n\t<div class="paneTabItem" ng-class="{\'bold\': view == \'help\'}" ng-click="setView(\'help\')">\r\n\t\t<button class="undecorated">Help</button>\r\n\t</div>\r\n</div>\r\n'),e.put("common/navigation/altthemes.html",'<span class="altthemes-container">\r\n\t<span ng-repeat="item in themes | altthemesMatchCurrent : current">\r\n       <a title="{{item.label}}" ng-href="{{item.url}}" class="altthemesItemCompact" target="_blank">\r\n         <span class="altthemes-icon" ng-class="item.className"></span>\r\n       </a>\r\n    </li>\r\n</span>'),e.put("common/toolbar/toolbar.html",'<div icsm-toolbar>\r\n\t<div class="row toolBarGroup">\r\n\t\t<div class="btn-group searchBar" ng-show="root.whichSearch != \'region\'">\r\n\t\t\t<div class="input-group" geo-search>\r\n\t\t\t\t<input type="text" ng-autocomplete ng-model="values.from.description" options=\'{country:"au"}\'\r\n\t\t\t\t\t\t\tsize="32" title="Select a locality to pan the map to." class="form-control" aria-label="...">\r\n\t\t\t\t<div class="input-group-btn">\r\n    \t\t\t\t<button ng-click="zoom(false)" exp-ga="[\'send\', \'event\', \'icsm\', \'click\', \'zoom to location\']"\r\n\t\t\t\t\t\tclass="btn btn-default"\r\n\t\t\t\t\t\ttitle="Pan and potentially zoom to location."><i class="fa fa-search"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="pull-right">\r\n\t\t\t<div class="btn-toolbar radCore" role="toolbar"  icsm-toolbar>\r\n\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t<!-- < icsm-state-toggle></icsm-state-toggle> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="btn-toolbar" style="margin:right:10px;display:inline-block">\r\n\t\t\t\t<div class="btn-group" title="{{overlaytitle}}">\r\n\t\t\t\t\t<span class="btn btn-default" common-baselayer-control max-zoom="16"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>')}]);