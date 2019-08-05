"use strict"
define("ember-test/app",["exports","ember-test/resolver","ember-load-initializers","ember-test/config/environment"],function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,r.default)(a,i.default.modulePrefix)
var n=a
e.default=n}),define("ember-test/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{showPerson:function(e){alert(e)}}})
e.default=t}),define("ember-test/helpers/app-version",["exports","ember-test/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,n=i.versionOnly||i.hideSha,o=i.shaOnly||i.hideVersion,l=null
return n&&(i.showExtended&&(l=a.match(r.versionExtendedRegExp)),l||(l=a.match(r.versionRegExp))),o&&(l=a.match(r.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
var a=Ember.Helper.helper(i)
e.default=a}),define("ember-test/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-test/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-test/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-test/config/environment"],function(e,t,r){var i,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(i=r.default.APP.name,a=r.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(i,a)}
e.default=n}),define("ember-test/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("ember-test/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("ember-test/initializers/export-application-global",["exports","ember-test/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var i,a=t.default.exportApplicationGlobal
i="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),r[i]||(r[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var i={name:"export-application-global",initialize:r}
e.default=i}),define("ember-test/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-test/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-test/router",["exports","ember-test/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("scientists")})
var i=r
e.default=i}),define("ember-test/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})
e.default=t}),define("ember-test/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-test/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"NFbAxK1p",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"PeopleTracker"],[9],[0,"\\n\\n"],[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-test/templates/application.hbs"}})
e.default=t}),define("ember-test/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"uzPUassu",block:'{"symbols":["person","@title","@people","&default"],"statements":[[7,"h2",true],[8],[1,[23,2,[]],false],[9],[0,"\\n\\n"],[7,"ul",true],[8],[0,"\\n"],[4,"each",[[23,3,[]]],null,{"statements":[[0,"        "],[7,"li",true],[8],[7,"button",false],[3,"action",[[23,0,[]],"showPerson",[23,1,[]]]],[8],[1,[23,1,[]],false],[9],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n\\n"],[14,4]],"hasEval":false}',meta:{moduleName:"ember-test/templates/components/people-list.hbs"}})
e.default=t}),define("ember-test/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"bORBtrrb",block:'{"symbols":[],"statements":[[5,"people-list",[],[["@title","@people"],["List of Scientists",[23,0,["model"]]]]],[0,"\\n\\n"],[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-test/templates/scientists.hbs"}})
e.default=t}),define("ember-test/config/environment",[],function(){try{var e="ember-test/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-test/app").default.create({name:"ember-test",version:"0.0.0+824899b2"})
