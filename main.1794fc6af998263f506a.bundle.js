(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{349:function(module,exports,__webpack_require__){__webpack_require__(350),__webpack_require__(496),module.exports=__webpack_require__(497)},414:function(module,exports){},497:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(327);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(687)],module)}.call(this,__webpack_require__(498)(module))},687:function(module,exports,__webpack_require__){var map={"./AutocompleteCommune/AutocompleteCommune.stories.js":710};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=687},710:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"With10ResultsQuery",(function(){return With10ResultsQuery})),__webpack_require__.d(__webpack_exports__,"WithOnly1Result",(function(){return WithOnly1Result})),__webpack_require__.d(__webpack_exports__,"WithNoResultsFromApi",(function(){return WithNoResultsFromApi})),__webpack_require__.d(__webpack_exports__,"WithErrorFromApi",(function(){return WithErrorFromApi}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(58),regenerator=(__webpack_require__(28),__webpack_require__(69),__webpack_require__(700),__webpack_require__(701),__webpack_require__(213)),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=(__webpack_require__(95),__webpack_require__(328)),slicedToArray=__webpack_require__(217),Autocomplete=__webpack_require__(752),makeRequest=(__webpack_require__(29),__webpack_require__(110),function(url){var method=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"GET",payload=2<arguments.length?arguments[2]:void 0,request=new window.Request(url,{method:method,headers:new window.Headers({Accept:"application/json","Content-Type":"application/json"}),body:payload?JSON.stringify(payload):null});return window.fetch(request).then((function(response){return checkStatus(response)})).catch((function(error){return window.Promise.reject(error)}))}),checkStatus=function(response){var mode=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"json";if(200>response.status||300<=response.status)throw console.error("status not ok = ".concat(response.status," ").concat(response.statusText),response),new Error("status not ok = ".concat(response.status," ").concat(response.statusText));return mode?response[mode]():response},objectSpread2=(__webpack_require__(56),__webpack_require__(218)),TextField=__webpack_require__(751),CircularProgress=__webpack_require__(745),InputAdornment=__webpack_require__(753),Search=__webpack_require__(330),Search_default=__webpack_require__.n(Search),AutocompleteTextField_ref2=react_default.a.createElement(CircularProgress.a,{color:"inherit",size:20}),_ref3=react_default.a.createElement(InputAdornment.a,{position:"start"},react_default.a.createElement(Search_default.a,null)),AutocompleteTextField=function(_ref){var params=_ref.params,loading=_ref.loading;return react_default.a.createElement(TextField.a,Object.assign({},params,{placeholder:"Commune...",fullWidth:!0,variant:"outlined",InputProps:Object(objectSpread2.a)(Object(objectSpread2.a)({},params.InputProps),{},{endAdornment:react_default.a.createElement(react_default.a.Fragment,null,loading?AutocompleteTextField_ref2:null,params.InputProps.endAdornment),startAdornment:_ref3})}))};function AutocompleteCommune(_ref){var setError=_ref.setError,onChange=_ref.onChange,apiUrl=_ref.apiUrl,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),open=_useState2[0],setOpen=_useState2[1],_useState3=Object(react.useState)([]),_useState4=Object(slicedToArray.a)(_useState3,2),options=_useState4[0],setOptions=_useState4[1],loading=open&&0===options.length;function computeUrl(search){var url="".concat(apiUrl,"/observatoire/communes/light?name=").concat(search,"&zipcode=").concat(search),searches=search.split("-");if(1<searches.length){var nom=searches[0].trim(),codePostal=searches[1].trim();url="".concat(apiUrl,"/observatoire/communes/light?name=").concat(nom,"&zipcode=").concat(codePostal)}return url}var loadCities=function(){var _ref2=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(search){var url,_yield$makeRequest,cities;return regenerator_default.a.wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return url=computeUrl(search),_context.prev=1,_context.next=4,makeRequest(url);case 4:_yield$makeRequest=_context.sent,(cities=_yield$makeRequest.data)&&0<cities.length?setOptions(cities):(setError("Aucun résultat pour la recherche ".concat(search)),setOpen(!1)),_context.next=14;break;case 9:_context.prev=9,_context.t0=_context.catch(1),setOptions([]),setOpen(!1),setError("Erreur lors du chargement des communes par l'api: ".concat(url,". ").concat(_context.t0.message));case 14:case"end":return _context.stop()}}),_callee,null,[[1,9]])})));return function(){return _ref2.apply(this,arguments)}}();return Object(react.useEffect)((function(){loading&&loadCities("")}),[loading]),react_default.a.createElement(Autocomplete.a,{id:"autocomplete-cities",style:{width:300},open:open,onOpen:function onOpen(){setOpen(!0)},onClose:function onClose(){setOpen(!1)},onChange:onChange,getOptionSelected:function getOptionSelected(city,value){return city.id===value.id},getOptionLabel:function getOptionLabel(city){return"".concat(city.nom," - ").concat(city.codePostal)},options:options,loading:loading,onInputChange:function onInputChange(e,values){return loadCities(values)},renderInput:function renderInput(params){return AutocompleteTextField({params:params,loading:loading})}})}AutocompleteTextField.displayName="AutocompleteTextField",AutocompleteTextField.__docgenInfo={description:"",methods:[],displayName:"AutocompleteTextField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteTextField.js"]={name:"AutocompleteTextField",docgenInfo:AutocompleteTextField.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteTextField.js"}),AutocompleteCommune.displayName="AutocompleteCommune",AutocompleteCommune.__docgenInfo={description:"",methods:[],displayName:"AutocompleteCommune"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteCommune.js"]={name:"AutocompleteCommune",docgenInfo:AutocompleteCommune.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteCommune.js"});var mirage_esm=__webpack_require__(94),With10ResultsQuery=(__webpack_exports__.default={title:"AutocompleteCommune",component:AutocompleteCommune},function(){return new mirage_esm.b({routes:function routes(){this.namespace="api",this.get("with-10-results/observatoire/communes/light",(function(){return{data:[{id:34373,insee:"51036",nom:"BARBONNE FAYEL",codePostal:"51120",datas:[]},{id:35028,insee:"80801",nom:"VILLERS CARBONNEL",codePostal:"80200",datas:[]},{id:32814,insee:"77006",nom:"ARBONNE LA FORET",codePostal:"77630",datas:[]},{id:12061,insee:"64249",nom:"GUETHARY",codePostal:"64210",datas:[]},{id:21048,insee:"64125",nom:"BIDART",codePostal:"64210",datas:[]},{id:25212,insee:"64035",nom:"ARBONNE",codePostal:"64210",datas:[]},{id:30378,insee:"64009",nom:"AHETZE",codePostal:"64210",datas:[]},{id:18716,insee:"11262",nom:"NARBONNE",codePostal:"11100",datas:[]},{id:7049,insee:"31107",nom:"CARBONNE",codePostal:"31390",datas:[]},{id:33327,insee:"72212",nom:"MOULINS LE CARBONNEL",codePostal:"72130",datas:[]}],page:1,pageSize:10,total:10}}))}}),react_default.a.createElement(AutocompleteCommune,{onChange:Object(dist.action)("onChange"),setError:Object(dist.action)("setError"),apiUrl:"/api/with-10-results"})});With10ResultsQuery.displayName="With10ResultsQuery";var WithOnly1Result=function(){return new mirage_esm.b({routes:function routes(){this.namespace="api",this.get("only-1-result/observatoire/communes/light",(function(){return{data:[{id:34373,insee:"51036",nom:"BARBONNE FAYEL",codePostal:"51120",datas:[]}],page:1,pageSize:10,total:1}}))}}),react_default.a.createElement(AutocompleteCommune,{onChange:Object(dist.action)("onChange"),setError:Object(dist.action)("setError"),apiUrl:"/api/only-1-result"})};WithOnly1Result.displayName="WithOnly1Result";var WithNoResultsFromApi=function(){return new mirage_esm.b({routes:function routes(){this.namespace="api",this.get("no-result/observatoire/communes/light",(function(){return{data:[],page:1,pageSize:10,total:0}}))}}),react_default.a.createElement(AutocompleteCommune,{onChange:Object(dist.action)("onChange"),setError:Object(dist.action)("setError"),apiUrl:"/api/no-result"})};WithNoResultsFromApi.displayName="WithNoResultsFromApi";var WithErrorFromApi=function(){return new mirage_esm.b({routes:function routes(){this.namespace="api",this.get("error/observatoire/communes/light",(function(){return new mirage_esm.a(500,{},{errors:["Server did not respond"]})}))}}),react_default.a.createElement(AutocompleteCommune,{onChange:Object(dist.action)("onChange"),setError:Object(dist.action)("setError"),apiUrl:"/api/error"})};WithErrorFromApi.displayName="WithErrorFromApi",With10ResultsQuery.__docgenInfo={description:"",methods:[],displayName:"With10ResultsQuery"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteCommune.stories.js"]={name:"With10ResultsQuery",docgenInfo:With10ResultsQuery.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteCommune.stories.js"}),WithOnly1Result.__docgenInfo={description:"",methods:[],displayName:"WithOnly1Result"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteCommune.stories.js"]={name:"WithOnly1Result",docgenInfo:WithOnly1Result.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteCommune.stories.js"}),WithNoResultsFromApi.__docgenInfo={description:"",methods:[],displayName:"WithNoResultsFromApi"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteCommune.stories.js"]={name:"WithNoResultsFromApi",docgenInfo:WithNoResultsFromApi.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteCommune.stories.js"}),WithErrorFromApi.__docgenInfo={description:"",methods:[],displayName:"WithErrorFromApi"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/AutocompleteCommune/AutocompleteCommune.stories.js"]={name:"WithErrorFromApi",docgenInfo:WithErrorFromApi.__docgenInfo,path:"src/AutocompleteCommune/AutocompleteCommune.stories.js"})}},[[349,1,2]]]);
//# sourceMappingURL=main.1794fc6af998263f506a.bundle.js.map