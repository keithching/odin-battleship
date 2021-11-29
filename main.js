/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.gameMode {\n    visibility: visible;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.3s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.gameMode {\n    visibility: visible;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.3s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory),
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory),
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const shipFactory = (length) => {

    // name the positions as 'compartments'. As an array of length of the ship
    // default the get hit as false
    const compartmentGetHit = [];
    for (let i = 0; i < length; i++) {
        compartmentGetHit[i] = false;
    }

    // this is not a pure function... OK?
    const hit = (compartment) => {
        if (compartment > length - 1) {
            throw new Error('compartment does not exist in this ship');
        }
        // once get hit, turns it to true
        compartmentGetHit[compartment] = true;
    };

    const isSunk = () => {
        if (compartmentGetHit.every(compartmentStatus => compartmentStatus === true)) {
            return true;
        } else {
            return false;
        }
    };


    return {
        length,
        compartmentGetHit,
        hit,
        isSunk
    };
};

const gameboardFactory = () => {
  
    // generate grid objects
    const grids = {};

    const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const grid_V = ['A','B','C','D','E','F','G','H','I','J'];

    for (let i = 0; i < grid_H.length; i++) {
        for (let j = 0; j < grid_V.length; j++) {
            grids[`grid-${grid_H[i]}${grid_V[j]}`] = {
                coordinates: [`${grid_H[i]}`, `${grid_V[j]}`],
                containShip: false,
            };
        }
    }

    // store the ships that are placed on board
    let shipsOnBoard = [];

    const getShipsOnBoard = () => shipsOnBoard;

    const resetShipsOnBoard = () => shipsOnBoard = [];

    const placeShip = (coordinates) => {
        if (coordinates.some(coordinate => grids[`grid-${coordinate}`].containShip)) {
            throw new Error('overlapping of ship is not allowed');
        }
        
        if (coordinates.every(coordinate => coordinate.length !== 3) && coordinates.some(coordinate => coordinate.length === 3)) { // mix of 2 and 3-characters
            const lastCharacter = coordinates.map(coordinate => coordinate.slice(coordinate.length - 1, coordinate.length));
            if (lastCharacter.some(coordinate => coordinate !== lastCharacter[0])) {
                throw new Error('diagonal placement of ship is not allowed');
            }
        } else { // 2-character coordinates
            const firstCharacter = coordinates.map(coordinate => coordinate.slice(0, 1));
            const lastCharacter = coordinates.map(coordinate => coordinate.slice(1, 2));
            if (firstCharacter.some(coordinate => coordinate !== firstCharacter[0]) && lastCharacter.some(coordinate => coordinate !== lastCharacter[0])) {
                throw new Error('diagonal placement of ship is not allowed');
            }
        }


        // create ship with ship factory
        const shipAlpha = shipFactory(coordinates.length);
        shipsOnBoard.push(shipAlpha);

        for (let i = 0; i < coordinates.length; i++) {
            grids[`grid-${coordinates[i]}`].containShip = true;
            grids[`grid-${coordinates[i]}`].ship = shipAlpha;
            grids[`grid-${coordinates[i]}`].shipName = 'shipAlpha';
            grids[`grid-${coordinates[i]}`].shipLength = shipAlpha.length;
            grids[`grid-${coordinates[i]}`].shipCompartment = i;
        }
    };


    // log the attacked coordinates
    let attackLog = [];

    const getAttackLog = () => attackLog;

    const resetAttackLog = () => attackLog = [];

    const receiveAttack = (coordinate) => {
        if (grids[`grid-${coordinate}`].containShip) {
            grids[`grid-${coordinate}`].ship.hit(grids[`grid-${coordinate}`].shipCompartment);
        } else {
            grids[`grid-${coordinate}`].missedAttack = true;
        }
        attackLog.push(coordinate);
    };

    const allSunk = () => {
        if (getShipsOnBoard().every(ship => ship.isSunk() === true)) {
            return true;
        } else {
            return false;
        }
    };


    return {
        grids,
        placeShip,
        receiveAttack,
        allSunk,
        getAttackLog,
        resetAttackLog,
        resetShipsOnBoard,
    };

};


const player = (() => {

    const player1 = { 
        name: 'player',
        gameboard: gameboardFactory(),
        attack: (coordinate) => player2.gameboard.receiveAttack(coordinate)
    };
    const player2 = {
        name: 'computer',
        gameboard: gameboardFactory(),
        attack: () => player1.gameboard.receiveAttack(getRandomCoordinate())
    };

    const setName = (name) => {
        player1.name = name;
    } 

    const getName = (player) => player.name;

    const poolOfAttack = (() => {
        const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const grid_V = ['A','B','C','D','E','F','G','H','I','J'];
        const grids = [];
    
        for (let i = 0; i < grid_H.length; i++) {
            for (let j = 0; j < grid_V.length; j++) {
                grids.push(grid_H[i] + grid_V[j]);
            }
        }   
        return {
            grids
        };
    })();

    const resetPool = () => {
        poolOfAttack.grids = [];
        const grid_H = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const grid_V = ['A','B','C','D','E','F','G','H','I','J'];
        for (let i = 0; i < grid_H.length; i++) {
            for (let j = 0; j < grid_V.length; j++) {
                poolOfAttack.grids.push(grid_H[i] + grid_V[j]);
            }
        }    
    };


    const getRandomCoordinate = () => {

        // Returns a random integer from 0 to 99
        let randomNumber = Math.floor(Math.random() * poolOfAttack.grids.length);
        let randomCoordinate = poolOfAttack.grids[randomNumber];

        // each time it attacks, the grids array length reduces by 1
        poolOfAttack.grids.splice(poolOfAttack.grids.indexOf(poolOfAttack.grids[randomNumber]), 1);

        return randomCoordinate;
    };


    const players = { player1, player2 };

    let turn; // TODO

    const getTurn = () => turn;

    const setTurn = (player) => turn = player;

    const switchTurn = () => {
        if (getTurn() == getName(player1)) {
            setTurn(getName(player2));
        } else if (getTurn() == getName(player2)) {
            setTurn(getName(player1));
        }
    };
    

    return {
        players,
        getName,
        setName,
        setTurn,
        getTurn,
        switchTurn,
        resetPool
    };
})();

const gameInterface = (() => {

    let gameMode;
    const setMode = (mode) => gameMode = mode;
    const getMode = () => gameMode;

    const confirmShipLayout = () => {

        let mode = getMode();

        if (mode == 'random') {
            
            prepareForGame(); // directly go to game prep

        } else if (mode == 'customize') {
            // enter drag and drop customization mode
            DOMInterface.customizationMode.gameboard.create();
        }

    };

    // lay the ships, prepare the gameboards in this step
    const prepareForGame = () => {

        let mode = getMode();

        if (mode == 'random') { 

            // place ships on both boards
            player.players.player1.gameboard.placeShip(['1A', '1B', '1C', '1D', '1E']);
            player.players.player1.gameboard.placeShip(['2A', '2B', '2C', '2D']);
            player.players.player1.gameboard.placeShip(['3A', '3B', '3C']);
            player.players.player1.gameboard.placeShip(['4A', '4B', '4C']);
            player.players.player1.gameboard.placeShip(['5A', '5B']);
                    
            player.players.player2.gameboard.placeShip(['1A', '1B', '1C', '1D', '1E']);
            player.players.player2.gameboard.placeShip(['2A', '2B', '2C', '2D']);
            player.players.player2.gameboard.placeShip(['3A', '3B', '3C']);
            player.players.player2.gameboard.placeShip(['4A', '4B', '4C']);
            player.players.player2.gameboard.placeShip(['5A', '5B']);

        } else if (mode == 'customize') {
            let garage = DOMInterface.customizationMode.shipHarbour.getGarage();

            garage.forEach(shipCoordinates => {
                player.players.player1.gameboard.placeShip(shipCoordinates);
                player.players.player2.gameboard.placeShip(shipCoordinates);
            });

        }
        
        player.setTurn(player.getName(player.players.player1)); // set the current turn

        startGame();

    };

    const startGame = () => {

        let mode = getMode();

        if (mode == 'customize') {

            // clear the customization mode DOM elements
            const player1 = document.querySelector('.player1');
            const functionButtons = document.querySelector('.functionButtons');
            const infoPanel = document.querySelector('.infoPanel');

            let child = player1.firstElementChild;

            while (child) {
                player1.removeChild(player1.firstElementChild);
                child = player1.firstElementChild;
            }

            functionButtons.remove();
            infoPanel.remove();
                
        }

        // enter game
        DOMInterface.gameMode.gameboard.create();
        DOMInterface.gameMode.gameboard.render();
        DOMInterface.gameMode.gameboard.displayCurrentTurn();

    };


    const isEndGame = () => {
        const msg = document.querySelector('.msg');
        if (player.players.player1.gameboard.allSunk()) {
            msg.textContent = 'Game ended. Computer wins!';
            return true;
        } else if (player.players.player2.gameboard.allSunk()) {
            msg.textContent = 'Game ended. You win!';
            return true;
        }
        return false;
    };

    const resetGame = () => {
    
        // clear ships on the board
        player.players.player1.gameboard.resetShipsOnBoard();
        // reset attack log
        player.players.player1.gameboard.resetAttackLog();


    };


    return {
        getMode,
        setMode,
        confirmShipLayout,
        prepareForGame,
        startGame,
        isEndGame,
        resetGame
    };

})();

const DOMInterface = (() => {

    const newGameButton = document.getElementById('newgame');
    newGameButton.addEventListener('click', () => userForm.show(), { once: true });

    const userForm = (() => {

        const show = () => {
            const content = document.querySelector('.content');
            const userform = document.querySelector('.userform');
            userform.classList.add('visible');
    
            const form = document.createElement('form');
            
            const formRow1 = document.createElement('div');
            formRow1.classList.add('formRow');
    
            const inputLabel1 = document.createElement('label');
            inputLabel1.setAttribute('for', 'playerName');
            inputLabel1.textContent = 'player name';
            const input1 = document.createElement('input');
            input1.id = 'playerName';
            input1.setAttribute('autocomplete', 'off');
            input1.required = true;
            input1.type = 'text';
            formRow1.appendChild(inputLabel1);
            formRow1.appendChild(input1);
            form.appendChild(formRow1);
    
            const formRow2 = document.createElement('div');
            formRow2.classList.add('formRow');
    
            const modeLabel = document.createElement('label');
            modeLabel.setAttribute('for', 'shipMode');
            modeLabel.textContent = 'ship mode';
            
            const mode = document.createElement('div');
            const modeSelect = document.createElement('select');
            modeSelect.id = 'shipMode';
            modeSelect.setAttribute('name', 'Ship Mode');
    
            const modeOption1 = document.createElement('option');
            modeOption1.value = 'random';
            modeOption1.textContent = 'random';
    
            const modeOption2 = document.createElement('option');
            modeOption2.value = 'customize';
            modeOption2.textContent = 'customize';
    
            modeSelect.appendChild(modeOption1);
            modeSelect.appendChild(modeOption2);
    
            formRow2.appendChild(modeLabel);
            formRow2.appendChild(modeSelect);
            form.appendChild(formRow2);
            form.noValidate = true; // deactivate the HTML default validations
    
            // implement a dropdown menu using previous practice module
            // but first, branch that module to allow for input parameters first
    
            const submitButton = document.createElement('button');
            submitButton.id = 'submitbutton';
            submitButton.textContent = 'Start!';
            form.appendChild(submitButton);
            userform.appendChild(form);
    
            form.addEventListener('submit', () => {
            
                // prevent the form from being sent
                event.preventDefault();
    
                // set player1's name
                player.setName(input1.value);
    
                // do not allow the form to submit if the player's name is empty
                // form validation
                if (!input1.validity.valid) {
                    input1.classList.add('invalid');
                    return;
                }
    
                // enter into the selected ship mode
                // go into a transition page where the user either see a randomized ship board or a board allowing for drag and drop ships
                // TODO
                const mode = modeSelect.value;

                gameInterface.setMode(mode); // set the gameMode
    
                // proceed to game details
                gameInterface.confirmShipLayout();    
    
                // remove the form from the DOM
                form.remove();
            }); 
        };

        return {
            show
        };

    })();

    // group all gameboard properties and methods together
    const gameMode = (() => {

        const gameboard = (() => {

            const create = () => {
                const player1DOM = document.querySelector('.player1');
                const player2DOM = document.querySelector('.player2');
                const playerDOMs = [player1DOM, player2DOM];
    
                const grid_H = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                const grid_V = ['', 'A','B','C','D','E','F','G','H','I','J'];
    
                for (let i = 0; i < playerDOMs.length; i++) {
                    for (let j = 0; j < grid_H.length; j++) {
                        const row = document.createElement('div'); 
                        row.classList.add('row');
                        for (let k = 0; k < grid_V.length; k++) {
                            const grid = document.createElement('div');
                            if (grid_H[j] === '') {
                                grid.textContent = grid_V[k];
                                grid.classList.add('axis');
                            } else if (grid_V[k] === '') {
                                grid.textContent = grid_H[j];
                                grid.classList.add('axis');
                            } else {
                                grid.classList.add('grid');
                                grid.setAttribute('data-coordinates', `${grid_H[j]}${grid_V[k]}`);
                                grid.setAttribute('data-containShip', 'false');
                            }
                            row.appendChild(grid);
                        }
                        playerDOMs[i].appendChild(row);
                    }
                }
    
                const player1id = document.querySelector('.player1_id');
                const player2id = document.querySelector('.player2_id');
    
                player1id.textContent = player.getName(player.players.player1);
                player2id.textContent = player.getName(player.players.player2);
                
            };
    
            // render the ships
            const render = () => {
                // player 1 
                const grids1 = document.querySelectorAll('.player1 .grid');
                grids1.forEach(grid => {
                    let coordinate = grid.getAttribute('data-coordinates');
                    if (player.players.player1.gameboard.grids[`grid-${coordinate}`].containShip) {
                        grid.textContent = 'Ship';
                        grid.setAttribute('data-containShip', 'true');
                    }
                });
                // player 2
                const grids2 = document.querySelectorAll('.player2 .grid');
                grids2.forEach(grid => {
                    let coordinate = grid.getAttribute('data-coordinates');
                    if (player.players.player2.gameboard.grids[`grid-${coordinate}`].containShip) {
                    grid.textContent = 'Ship';
                    grid.setAttribute('data-containShip', 'true');
                    }
                    grid.addEventListener('click', () => {
                        if (player.getTurn() === player.getName(player.players.player1)) {
                            if (!gameInterface.isEndGame()) {
                                attackComputer(grid, coordinate);
                            }
                            if (!gameInterface.isEndGame()) {
                                setTimeout(() => attackPlayer(), 500); // trigger the computer attack
                            }
                        }
                    });
                });
            };
    
            function attackComputer(grid, coordinate) {
                if (player.players.player2.gameboard.getAttackLog().find(attackedCoordinate => coordinate === attackedCoordinate)) {
                    throw new Error('repeated. pls re-attack');
                }
                
                player.players.player1.attack(coordinate);
                if (grid.getAttribute('data-containShip') === 'true') {
                    grid.classList.add('receivedAttack');
                } else {
                    grid.classList.add('missedAttack');
                }
                player.switchTurn();
                displayCurrentTurn();
                gameInterface.isEndGame();
            }
        
            function attackPlayer() {  
                player.players.player2.attack();   
                const attackLog = player.players.player1.gameboard.getAttackLog();
                const coordinate = attackLog[attackLog.length - 1]; // retrieve last element of the attack log
                const grids1 = document.querySelectorAll('.player1 .grid');
                grids1.forEach(grid => {
                    if (grid.getAttribute('data-coordinates') === coordinate) {
                        if (grid.getAttribute('data-containShip') === 'true') {
                            grid.classList.add('receivedAttack');
                        } else {
                            grid.classList.add('missedAttack');
                        }
                    }
                })
                player.switchTurn();
                displayCurrentTurn();
                gameInterface.isEndGame();
            }
    
            const displayCurrentTurn = () => {
                // display current turn
                const msg = document.querySelector('.msg');
                msg.classList.add('gameMode');
                msg.textContent = `current turn: ${player.getTurn()}`;
            };
    
    
            return {
                create,
                render,
                displayCurrentTurn
            }
    
        })();


        return {
            gameboard
        };

    })();


    const customizationMode = (() => {

        const gameboard = (() => { // properties and methods related to the gameboard DOM

            const create = () => { // create an empty board

                const player1DOM = document.querySelector('.player1');
        
                const grid_H = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                const grid_V = ['', 'A','B','C','D','E','F','G','H','I','J'];
        
                    for (let j = 0; j < grid_H.length; j++) {
                        const row = document.createElement('div'); 
                        row.classList.add('row');
                        for (let k = 0; k < grid_V.length; k++) {
                            const grid = document.createElement('div');
                            if (grid_H[j] === '') {
                                grid.textContent = grid_V[k];
                                grid.classList.add('axis');
                            } else if (grid_V[k] === '') {
                                grid.textContent = grid_H[j];
                                grid.classList.add('axis');
                            } else {
                                grid.classList.add('grid');
                                grid.classList.add('customize');
                                grid.setAttribute('data-coordinates', `${grid_H[j]}${grid_V[k]}`);
                            }
                            row.appendChild(grid);
                        }
                        player1DOM.appendChild(row);
                    }
        
                const player1id = document.querySelector('.player1_id');
                player1id.textContent = player.getName(player.players.player1);   
        
                const content = document.querySelector('.content');
                
                const functionButtons = document.createElement('div');
                functionButtons.classList.add('functionButtons');
        
                const clearButton = document.createElement('button');
                clearButton.id = 'clearButton';
                clearButton.textContent = 'clear';
                functionButtons.appendChild(clearButton);

                clearButton.addEventListener('click', () => {
                    reset(); // reset gameboard, ship harbour, and info panel
                });
        
                const confirmButton = document.createElement('button');
                confirmButton.id = 'confirmButton';
                confirmButton.textContent = 'confirm';
                confirmButton.disabled = true;

                confirmButton.addEventListener('click', () => {
                    // place ships to gameboard object with the garage ships
                    gameInterface.prepareForGame();

                });

                functionButtons.appendChild(confirmButton);
        
                content.appendChild(functionButtons);
        
                shipPlacementPanel.show();
        
                dragAndDrop.invoke();  // enables drag and drop
            };

            const reset = () => { // reset gameboard to empty 

                clearAllShips(); // clear ships from gameboard in DOM
                resetStatus(); // reset gameboard status
                document.getElementById('confirmButton').disabled = true; // disable the confirm button
                shipHarbour.reset(); // reset ship harbour
                shipPlacementPanel.refresh(); // reset ship placement panel in DOM

                // TODO: implement reset drag and drop gameboard status
                dragAndDrop.reset();
            };

            const clearInvalidShip = (coordinates) => {
                coordinates.forEach(coordinate => {
                    const grid = document.querySelector('[data-coordinates=' + "'" + coordinate + "']");
                    grid.classList.add('invalidShip');
                    grid.addEventListener('transitionend', () => {
                        grid.classList.remove('grid_click');
                        grid.classList.remove('invalidShip');
                    })
                });
            };
        
            const clearAllShips = () => {
                const grids = document.querySelectorAll('.grid');
                grids.forEach(grid => {
                    grid.classList.remove('grid_hover');
                    grid.classList.remove('grid_click');
                    grid.classList.remove('validShip');
                });
            };

            let isComplete = false;

            const getStatus = () => isComplete;

            const setStatusToComplete = () => isComplete = true;

            const resetStatus = () => isComplete = false;


            return {
                create,
                clearInvalidShip,
                clearAllShips,
                setStatusToComplete,
                getStatus
            };  
        })();


        // drag and drop implementation
        const dragAndDrop = (() => {

            let gameboardStatus = gameboard.getStatus();

            const invoke = () => {
                const grids = document.querySelectorAll('.grid');
                const axes = document.querySelectorAll('.axis');
                let isMousedown = false;
    
                grids.forEach(grid => {
    
                    grid.addEventListener('mouseover', () => {
                        if (!gameboardStatus) {
                            grid.classList.add('grid_hover');
                            if (isMousedown) {
                                grid.classList.add('grid_click');
                                shipProcessor.pushIn(grid.getAttribute('data-coordinates')); 
                            }
                        }
                    });
    
                    grid.addEventListener('mouseout', () => {
                        if (!gameboardStatus) {
                            grid.classList.remove('grid_hover');
                        }
                    });
    
                    grid.addEventListener('mousedown', (e) => {
                        if (!gameboardStatus) {
                            pauseEvent(e); // other texts won't get selected during the drag and drop
                            isMousedown = true;
                            grid.classList.add('grid_click');
                            shipProcessor.pushIn(grid.getAttribute('data-coordinates')); 
                        }
                    });
    
                    grid.addEventListener('mouseup', () => {
                        if (!gameboardStatus) {
    
                            isMousedown = false;
                            let currentShipCoordinates = shipProcessor.getCurrentShipCoordinates();
                            let isValid = shipProcessor.checkValidity(currentShipCoordinates); // invoke once only
                            // put in the array of the current ship as input to check for validity                
    
                            if (shipHarbour.isParkFull()) { // first check whether the park is already full
                                
                                showErrorMessage('unsuccessfulParking', 'Park is full!'); // TODO
                                gameboard.clearInvalidShip(currentShipCoordinates);
    
                            } else { // park is not yet full
    
                                if (!isValid.validity) { // invalid ship
    
                                    let invalidMessage = isValid.invalidTests;
                                    showErrorMessage('invalidShip', invalidMessage); // TODO. Implement the different kind of errors here
                                    gameboard.clearInvalidShip(currentShipCoordinates);
    
                                } else { // valid ship. proceed to parking attempt
    
                                    const parkAttempt = shipHarbour.parkShip(currentShipCoordinates); // invoke once only
    
                                    if (parkAttempt.parkStatus) { // parking successful
    
                                        currentShipCoordinates.forEach(coordinate => {
                                            const grid = document.querySelector('[data-coordinates=' + "'" + coordinate + "']");
                                            grid.classList.add('validShip');
                                        });
    
                                        if (shipHarbour.isParkFull()) {
                                            document.getElementById('confirmButton').disabled = false; // activates confirmButton only when the Ship Park is full
                                            // deactivate further gameboard editing
                                            gameboard.setStatusToComplete();
                                            gameboardStatus = gameboard.getStatus();
                                        }
    
                                    } else { // parking unsuccessful
    
                                        showErrorMessage('unsuccessfulParking', parkAttempt.message);
                                        gameboard.clearInvalidShip(currentShipCoordinates);
    
                                    }
                                    shipPlacementPanel.refresh(); // refresh counter at DOM
    
                                }
    
                            }
    
                            shipProcessor.resetCurrentShipCoordinates(); // wipe out the array at the end of each check
                        }
                    });
                });  
    
                function showErrorMessage(type, messages) {
                    const msg = document.querySelector('.msg');
                    if (type === 'unsuccessfulParking') {
                        msg.textContent = messages;
                    } else if (type === 'invalidShip') {
                        msg.textContent = `${messages} test(s) not passed`;
                    }
                    msg.classList.add('error');
                    msg.classList.add('show');
    
                    document.querySelector('.show').addEventListener('transitionend', () => {
                        msg.classList.remove('show');
                        msg.classList.remove('error');
                        msg.textContent = '';
                    });
                }
    
                function pauseEvent(e){
                    if (e.stopPropagation) e.stopPropagation(); // stop propagating the events in capturing and bubbling phases
                    if (e.preventDefault) e.preventDefault();
                }
    
            };


            const reset = () => {
                gameboardStatus = gameboard.getStatus();
            };


            return { invoke, reset };

        })();
    

        // helper for the ship placement panel
        const shipHarbour = (() => {
            
            let garage = []; // save the valid created ships here

            let parkingSpace = {
                five: 1,
                four: 1,
                three: 2,
                two: 1,
                full: false
            };

            const getParkingSpace = (size) => parkingSpace[size];
    
            const parkShip = (coordinates) => {

                let parkStatus = false;
                let message = '';

                if (!parkingSpace.full) {

                    // find the ship size in the parking space and then reduce it by one
                    if (coordinates.length === 5) {
                        if (parkingSpace.five !== 0) {
                            parkingSpace.five = parkingSpace.five - 1;
                            parkStatus = true;
                            garage.push(coordinates); // push into the garage
                        } else {
                            parkStatus = false;
                            message = 'size-5 fully parked!';
                        }
                    } else if (coordinates.length === 4) {
                        if (parkingSpace.four !== 0) {
                            parkingSpace.four = parkingSpace.four - 1;
                            parkStatus = true;
                            garage.push(coordinates); // push into the garage
                        } else {
                            parkStatus = false;
                            message = 'size-4 fully parked!';
                        }
                    } else if (coordinates.length === 3) {
                        if (parkingSpace.three !== 0) {
                            parkingSpace.three = parkingSpace.three - 1;
                            parkStatus = true;
                            garage.push(coordinates); // push into the garage
                        } else {
                            parkStatus = false;
                            message = 'size-3 fully parked!';
                        }
                    } else if (coordinates.length === 2) {
                        if (parkingSpace.two !== 0) {
                            parkingSpace.two = parkingSpace.two - 1;
                            parkStatus = true;
                            garage.push(coordinates); // push into the garage
                        } else {
                            parkStatus = false;
                            message = 'size-2 fully parked!';
                        }
                    }

                    if (parkingSpace.five == 0 && parkingSpace.four == 0 && parkingSpace.three == 0 && parkingSpace.two == 0) {
                        parkingSpace.full = true;
                    }

                } else {

                    parkStatus = false;
                    message = 'Park is full!';
                
                }

                return { parkStatus, message };

            };

            const isParkFull = () => parkingSpace.full;

            const getGarage = () => garage;

            const reset = () => {
                // clear garage
                garage = [];
                // reset parking space allowance
                parkingSpace = {
                    five: 1,
                    four: 1,
                    three: 2,
                    two: 1,
                    full: false
                };
            };


            return {
                isParkFull,
                getGarage,
                parkingSpace,
                getParkingSpace,
                parkShip,
                reset
            }
        })();


        // helper before pushing a ship onto the customization mode gameboard
        const shipProcessor = (() => {

            let currentShipCoordinates = [];

            const getCurrentShipCoordinates = () => currentShipCoordinates;
    
            const pushIn = (coordinate) => currentShipCoordinates.push(coordinate);

            const resetCurrentShipCoordinates = () => currentShipCoordinates = [];
    
            const checkValidity = (coordinates) => {
                
                // condition checks
                let lengthOK = lengthTest(coordinates);
                let overlapOK = overlapTest(coordinates);
                let shapeOK = shapeTest(coordinates);

                let invalidTests = [];
                let validity;

                if (!lengthOK) {
                    invalidTests.push('length');
                }

                if (!overlapOK) {
                    invalidTests.push('overlap');
                }

                if (!shapeOK) {
                    invalidTests.push('shape');
                }

                if (lengthOK && overlapOK && shapeOK) {
                    validity = true;
                } else {
                    validity = false;
                }

                return { validity, invalidTests }; // return values for this function


                function lengthTest (coordinates) {
                    // length test
                    if (coordinates.length < 2 || coordinates.length > 5) {
                        return false;
                    }
                    return true;
                }

                function overlapTest (coorindates) {
                    // check whether the current coordinates conflicts with the coordinates that are in the garage
                    let isOverlap = false;
                    
                    coordinates.forEach(coordinate => {
                        shipHarbour.getGarage().forEach(shipCoordinates => {
                            if (shipCoordinates.some(shipCoordinate => shipCoordinate == coordinate)) {
                                isOverlap = true;
                            }
                        });
                    });
                    if (isOverlap) {
                        return false;
                    } else {
                        return true;
                    }
                }

                function shapeTest (coordinates) {

                    let isValid = false;

                    // shape test
                    if (coordinates.every(item => item.length == 3)) { // for 3-character coordinates (i.e. 10A ~ 10J)
                        // horizontal
                        if (coordinates.every(item => item[0] + item[1] == coordinates[0][0] + coordinates[0][1])) {
                            isValid = true;
                            return true;
                        }
                    } else if (coordinates.some(item => item.length == 3)) { // cases with mixed 2-character and 3-characters 
                        // vertical
                        if (coordinates.every(item => item[item.length - 1] == coordinates[0][coordinates[0].length - 1])) {
                            isValid = true;
                            return true;
                        }
                    } else if (coordinates.every(item => item.length == 2)) { // purely 2-character coordinates
                        // horizontal
                        if (coordinates.every(item => item[0] == coordinates[0][0])) {
                            isValid = true;
                            return true;
                        }
                        // vertical
                        if (coordinates.every(item => item[1] == coordinates[0][1])) {
                            isValid = true;
                            return true;
                        }
                    }            

                    if (!isValid) { // i.e. one-character coordinate, shapes that are not rectangular
                        return false;
                    }
                }

            }        

            return {
                currentShipCoordinates,
                pushIn,
                getCurrentShipCoordinates,
                resetCurrentShipCoordinates,
                checkValidity
            };
        })();


        const shipPlacementPanel = (() => {

            const show = () => {
                // make a panel
                const gameboard = document.querySelector('.content .gameboard');
    
                const infoPanel = document.createElement('div');
                infoPanel.classList.add('infoPanel');
                const infoRow1 = document.createElement('div');
                infoRow1.classList.add('size-5');
                infoRow1.textContent = `size-5: ${shipHarbour.getParkingSpace('five')}`;
                const infoRow2 = document.createElement('div');
                infoRow2.classList.add('size-4');
                infoRow2.textContent = `size-4: ${shipHarbour.getParkingSpace('four')}`;
                const infoRow3 = document.createElement('div');
                infoRow3.classList.add('size-3');
                infoRow3.textContent = `size-3: ${shipHarbour.getParkingSpace('three')}`;
                const infoRow4 = document.createElement('div');
                infoRow4.classList.add('size-2');
                infoRow4.textContent = `size-2: ${shipHarbour.getParkingSpace('two')}`;
    
                infoPanel.appendChild(infoRow1);
                infoPanel.appendChild(infoRow2);
                infoPanel.appendChild(infoRow3);
                infoPanel.appendChild(infoRow4);
    
                gameboard.appendChild(infoPanel);
            };
    
            const refresh = () => {
                const infoRow1 = document.querySelector('.size-5');
                const infoRow2 = document.querySelector('.size-4');
                const infoRow3 = document.querySelector('.size-3');
                const infoRow4 = document.querySelector('.size-2');
                infoRow1.textContent = `size-5: ${shipHarbour.getParkingSpace('five')}`;
                infoRow2.textContent = `size-4: ${shipHarbour.getParkingSpace('four')}`;
                infoRow3.textContent = `size-3: ${shipHarbour.getParkingSpace('three')}`;
                infoRow4.textContent = `size-2: ${shipHarbour.getParkingSpace('two')}`;
            };
    
            return {
                show,
                refresh
            };
        })();


        return {
            gameboard,
            shipHarbour
        };

    })();


    return {
        gameMode,
        customizationMode
    };

})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixpQkFBaUIsb0JBQW9CLDZCQUE2Qix3QkFBd0IsNENBQTRDLEdBQUcsYUFBYSxvQkFBb0IsMEJBQTBCLHFDQUFxQyxvQkFBb0IsNkJBQTZCLG1CQUFtQix3QkFBd0IsR0FBRyxjQUFjLG9CQUFvQixjQUFjLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixnQkFBZ0IsR0FBRyx5QkFBeUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsaUJBQWlCLEdBQUcsMENBQTBDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLDhCQUE4QixzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLGlCQUFpQixHQUFHLFVBQVUsc0JBQXNCLGdCQUFnQixtQkFBbUIsMEJBQTBCLGdDQUFnQyx3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLEdBQUcsWUFBWSwwQkFBMEIsd0JBQXdCLDZDQUE2QyxxQkFBcUIsR0FBRyxlQUFlLDBCQUEwQixHQUFHLFdBQVcseUJBQXlCLDBCQUEwQixHQUFHLGFBQWEseUJBQXlCLG1CQUFtQiwwQkFBMEIsR0FBRyxlQUFlLDRCQUE0QixrQkFBa0IsR0FBRyxXQUFXLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDBCQUEwQix3QkFBd0IsZ0NBQWdDLHlCQUF5Qix3QkFBd0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyxXQUFXLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDBCQUEwQix3QkFBd0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsb0NBQW9DLDJCQUEyQixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyxpQkFBaUIsd0NBQXdDLEdBQUcsaUJBQWlCLHdDQUF3QyxHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxnQkFBZ0IsbUNBQW1DLEdBQUcsVUFBVSxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsY0FBYyxtQkFBbUIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsK0NBQStDLHNCQUFzQiw4QkFBOEIsMkJBQTJCLEdBQUcsb0JBQW9CLDhCQUE4QixtQkFBbUIsR0FBRyxlQUFlLHlCQUF5QixLQUFLLG9CQUFvQixtQkFBbUIsb0JBQW9CLCtDQUErQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsaUJBQWlCLG1CQUFtQixxQkFBcUIsNENBQTRDLDhCQUE4Qix5QkFBeUIsbUJBQW1CLDJCQUEyQixHQUFHLHVCQUF1QixvQkFBb0IseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLGVBQWUsbUJBQW1CLHFCQUFxQixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxjQUFjLDBCQUEwQixHQUFHLG1CQUFtQix1QkFBdUIsK0NBQStDLHlCQUF5QixpREFBaUQseUJBQXlCLHNCQUFzQiwyQkFBMkIsR0FBRyx5QkFBeUIsK0NBQStDLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixHQUFHLDZCQUE2QiwrQ0FBK0MseUJBQXlCLHlCQUF5QixzQkFBc0IsR0FBRyxrQkFBa0Isa0NBQWtDLG1CQUFtQixHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRyxrQkFBa0IsbUJBQW1CLG9CQUFvQiwrQ0FBK0Msb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxXQUFXLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLCtCQUErQixnQkFBZ0IsaUJBQWlCLG9CQUFv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QkFBOEI7O0FBRTlCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEU7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLHFFQUFxRSxZQUFZOztBQUVqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsb0NBQW9DO0FBQ3RGO0FBQ0E7QUFDQSxrREFBa0Qsb0NBQW9DO0FBQ3RGO0FBQ0E7QUFDQSxrREFBa0QscUNBQXFDO0FBQ3ZGO0FBQ0E7QUFDQSxrREFBa0QsbUNBQW1DO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsb0NBQW9DO0FBQ3RGLGtEQUFrRCxvQ0FBb0M7QUFDdEYsa0RBQWtELHFDQUFxQztBQUN2RixrREFBa0QsbUNBQW1DO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jb250ZW50IC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmdhbWVib2FyZCAuZ2FtZWJvYXJkX2l0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyMV9pZCwgLnBsYXllcjJfaWQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheWVyMSwgLnBsYXllcjIge1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4ubXNnIHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5nYW1lTW9kZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5heGlzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IC0wLjVweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogLTAuNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wbGF5ZXIyIC5ncmlkLFxcbi5ncmlkLmN1c3RvbWl6ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5ncmlkX2NsaWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbn1cXG5cXG4uaW52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWNlaXZlZEF0dGFjayB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWRBdHRhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI25ld2dhbWUge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jbmV3Z2FtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VyZm9ybSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG59XFxuXFxuLnVzZXJmb3JtIGZvcm0ge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJOYW1lIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI3BsYXllck5hbWU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbiNwbGF5ZXJOYW1lLmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3NoaXBNb2RlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuI3NoaXBNb2RlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jc3VibWl0YnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMjA3LCAyMzUsIDAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI3N1Ym1pdGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMik7XFxufVxcblxcbi5mdW5jdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb25CdXR0b25zIGJ1dHRvbiB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbGVhckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29uZmlybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuXFxuLmluZm9QYW5lbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZC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SUFDeEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uY29udGVudCAuZ2FtZWJvYXJkIC5nYW1lYm9hcmRfaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5wbGF5ZXIxX2lkLCAucGxheWVyMl9pZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wbGF5ZXIxLCAucGxheWVyMiB7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5tc2cge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuLmdhbWVNb2RlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNob3cge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmF4aXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogLTAuNXB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAtMC41cHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsYXllcjIgLmdyaWQsXFxuLmdyaWQuY3VzdG9taXplIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZF9ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuXFxuLmdyaWRfY2xpY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxufVxcblxcbi5pbnZhbGlkU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnZhbGlkU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY2VpdmVkQXR0YWNrIHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZEF0dGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jbmV3Z2FtZSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbiNuZXdnYW1lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnVzZXJmb3JtIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbn1cXG5cXG4udXNlcmZvcm0gZm9ybSB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3BsYXllck5hbWUge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jcGxheWVyTmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI3BsYXllck5hbWUuaW52YWxpZCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc2hpcE1vZGUge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4jc2hpcE1vZGU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiNzdWJtaXRidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM1LCAyMDcsIDIzNSwgMC41KTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jc3VibWl0YnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4yKTtcXG59XFxuXFxuLmZ1bmN0aW9uQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mdW5jdGlvbkJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NsZWFyQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb25maXJtQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG5cXG4uaW5mb1BhbmVsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgLy8gbmFtZSB0aGUgcG9zaXRpb25zIGFzICdjb21wYXJ0bWVudHMnLiBBcyBhbiBhcnJheSBvZiBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICAvLyBkZWZhdWx0IHRoZSBnZXQgaGl0IGFzIGZhbHNlXG4gICAgY29uc3QgY29tcGFydG1lbnRHZXRIaXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXBhcnRtZW50R2V0SGl0W2ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBub3QgYSBwdXJlIGZ1bmN0aW9uLi4uIE9LP1xuICAgIGNvbnN0IGhpdCA9IChjb21wYXJ0bWVudCkgPT4ge1xuICAgICAgICBpZiAoY29tcGFydG1lbnQgPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBhcnRtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoaXMgc2hpcCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9uY2UgZ2V0IGhpdCwgdHVybnMgaXQgdG8gdHJ1ZVxuICAgICAgICBjb21wYXJ0bWVudEdldEhpdFtjb21wYXJ0bWVudF0gPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wYXJ0bWVudEdldEhpdC5ldmVyeShjb21wYXJ0bWVudFN0YXR1cyA9PiBjb21wYXJ0bWVudFN0YXR1cyA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBjb21wYXJ0bWVudEdldEhpdCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtcbiAgICB9O1xufTtcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgXG4gICAgLy8gZ2VuZXJhdGUgZ3JpZCBvYmplY3RzXG4gICAgY29uc3QgZ3JpZHMgPSB7fTtcblxuICAgIGNvbnN0IGdyaWRfSCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgICBjb25zdCBncmlkX1YgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZF9ILmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZF9WLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2dyaWRfSFtpXX0ke2dyaWRfVltqXX1gXSA9IHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW2Ake2dyaWRfSFtpXX1gLCBgJHtncmlkX1Zbal19YF0sXG4gICAgICAgICAgICAgICAgY29udGFpblNoaXA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0b3JlIHRoZSBzaGlwcyB0aGF0IGFyZSBwbGFjZWQgb24gYm9hcmRcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gW107XG5cbiAgICBjb25zdCBnZXRTaGlwc09uQm9hcmQgPSAoKSA9PiBzaGlwc09uQm9hcmQ7XG5cbiAgICBjb25zdCByZXNldFNoaXBzT25Cb2FyZCA9ICgpID0+IHNoaXBzT25Cb2FyZCA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcy5zb21lKGNvb3JkaW5hdGUgPT4gZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLmNvbnRhaW5TaGlwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvdmVybGFwcGluZyBvZiBzaGlwIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShjb29yZGluYXRlID0+IGNvb3JkaW5hdGUubGVuZ3RoICE9PSAzKSAmJiBjb29yZGluYXRlcy5zb21lKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5sZW5ndGggPT09IDMpKSB7IC8vIG1peCBvZiAyIGFuZCAzLWNoYXJhY3RlcnNcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGFyYWN0ZXIgPSBjb29yZGluYXRlcy5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKGNvb3JkaW5hdGUubGVuZ3RoIC0gMSwgY29vcmRpbmF0ZS5sZW5ndGgpKTtcbiAgICAgICAgICAgIGlmIChsYXN0Q2hhcmFjdGVyLnNvbWUoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlICE9PSBsYXN0Q2hhcmFjdGVyWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlhZ29uYWwgcGxhY2VtZW50IG9mIHNoaXAgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gMi1jaGFyYWN0ZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gY29vcmRpbmF0ZXMubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q2hhcmFjdGVyID0gY29vcmRpbmF0ZXMubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgxLCAyKSk7XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIuc29tZShjb29yZGluYXRlID0+IGNvb3JkaW5hdGUgIT09IGZpcnN0Q2hhcmFjdGVyWzBdKSAmJiBsYXN0Q2hhcmFjdGVyLnNvbWUoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlICE9PSBsYXN0Q2hhcmFjdGVyWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlhZ29uYWwgcGxhY2VtZW50IG9mIHNoaXAgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gY3JlYXRlIHNoaXAgd2l0aCBzaGlwIGZhY3RvcnlcbiAgICAgICAgY29uc3Qgc2hpcEFscGhhID0gc2hpcEZhY3RvcnkoY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgc2hpcHNPbkJvYXJkLnB1c2goc2hpcEFscGhhKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLmNvbnRhaW5TaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZXNbaV19YF0uc2hpcCA9IHNoaXBBbHBoYTtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZXNbaV19YF0uc2hpcE5hbWUgPSAnc2hpcEFscGhhJztcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZXNbaV19YF0uc2hpcExlbmd0aCA9IHNoaXBBbHBoYS5sZW5ndGg7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXBDb21wYXJ0bWVudCA9IGk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLyBsb2cgdGhlIGF0dGFja2VkIGNvb3JkaW5hdGVzXG4gICAgbGV0IGF0dGFja0xvZyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0QXR0YWNrTG9nID0gKCkgPT4gYXR0YWNrTG9nO1xuXG4gICAgY29uc3QgcmVzZXRBdHRhY2tMb2cgPSAoKSA9PiBhdHRhY2tMb2cgPSBbXTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBpZiAoZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLmNvbnRhaW5TaGlwKSB7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uc2hpcC5oaXQoZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLnNoaXBDb21wYXJ0bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0ubWlzc2VkQXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tMb2cucHVzaChjb29yZGluYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFNoaXBzT25Cb2FyZCgpLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3JpZHMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgZ2V0QXR0YWNrTG9nLFxuICAgICAgICByZXNldEF0dGFja0xvZyxcbiAgICAgICAgcmVzZXRTaGlwc09uQm9hcmQsXG4gICAgfTtcblxufTtcblxuXG5jb25zdCBwbGF5ZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IHsgXG4gICAgICAgIG5hbWU6ICdwbGF5ZXInLFxuICAgICAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICAgICAgYXR0YWNrOiAoY29vcmRpbmF0ZSkgPT4gcGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxuICAgIH07XG4gICAgY29uc3QgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogJ2NvbXB1dGVyJyxcbiAgICAgICAgZ2FtZWJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgICAgIGF0dGFjazogKCkgPT4gcGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhnZXRSYW5kb21Db29yZGluYXRlKCkpXG4gICAgfTtcblxuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBwbGF5ZXIxLm5hbWUgPSBuYW1lO1xuICAgIH0gXG5cbiAgICBjb25zdCBnZXROYW1lID0gKHBsYXllcikgPT4gcGxheWVyLm5hbWU7XG5cbiAgICBjb25zdCBwb29sT2ZBdHRhY2sgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkX0ggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgIGNvbnN0IGdyaWRfViA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgICAgICBjb25zdCBncmlkcyA9IFtdO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRfSC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX1YubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkcy5wdXNoKGdyaWRfSFtpXSArIGdyaWRfVltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyaWRzXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHJlc2V0UG9vbCA9ICgpID0+IHtcbiAgICAgICAgcG9vbE9mQXR0YWNrLmdyaWRzID0gW107XG4gICAgICAgIGNvbnN0IGdyaWRfSCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgICAgICAgY29uc3QgZ3JpZF9WID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZF9ILmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRfVi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHBvb2xPZkF0dGFjay5ncmlkcy5wdXNoKGdyaWRfSFtpXSArIGdyaWRfVltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgfTtcblxuXG4gICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZSA9ICgpID0+IHtcblxuICAgICAgICAvLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgZnJvbSAwIHRvIDk5XG4gICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sT2ZBdHRhY2suZ3JpZHMubGVuZ3RoKTtcbiAgICAgICAgbGV0IHJhbmRvbUNvb3JkaW5hdGUgPSBwb29sT2ZBdHRhY2suZ3JpZHNbcmFuZG9tTnVtYmVyXTtcblxuICAgICAgICAvLyBlYWNoIHRpbWUgaXQgYXR0YWNrcywgdGhlIGdyaWRzIGFycmF5IGxlbmd0aCByZWR1Y2VzIGJ5IDFcbiAgICAgICAgcG9vbE9mQXR0YWNrLmdyaWRzLnNwbGljZShwb29sT2ZBdHRhY2suZ3JpZHMuaW5kZXhPZihwb29sT2ZBdHRhY2suZ3JpZHNbcmFuZG9tTnVtYmVyXSksIDEpO1xuXG4gICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICAgIH07XG5cblxuICAgIGNvbnN0IHBsYXllcnMgPSB7IHBsYXllcjEsIHBsYXllcjIgfTtcblxuICAgIGxldCB0dXJuOyAvLyBUT0RPXG5cbiAgICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcblxuICAgIGNvbnN0IHNldFR1cm4gPSAocGxheWVyKSA9PiB0dXJuID0gcGxheWVyO1xuXG4gICAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFR1cm4oKSA9PSBnZXROYW1lKHBsYXllcjEpKSB7XG4gICAgICAgICAgICBzZXRUdXJuKGdldE5hbWUocGxheWVyMikpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldFR1cm4oKSA9PSBnZXROYW1lKHBsYXllcjIpKSB7XG4gICAgICAgICAgICBzZXRUdXJuKGdldE5hbWUocGxheWVyMSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcnMsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIHNldFR1cm4sXG4gICAgICAgIGdldFR1cm4sXG4gICAgICAgIHN3aXRjaFR1cm4sXG4gICAgICAgIHJlc2V0UG9vbFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBnYW1lSW50ZXJmYWNlID0gKCgpID0+IHtcblxuICAgIGxldCBnYW1lTW9kZTtcbiAgICBjb25zdCBzZXRNb2RlID0gKG1vZGUpID0+IGdhbWVNb2RlID0gbW9kZTtcbiAgICBjb25zdCBnZXRNb2RlID0gKCkgPT4gZ2FtZU1vZGU7XG5cbiAgICBjb25zdCBjb25maXJtU2hpcExheW91dCA9ICgpID0+IHtcblxuICAgICAgICBsZXQgbW9kZSA9IGdldE1vZGUoKTtcblxuICAgICAgICBpZiAobW9kZSA9PSAncmFuZG9tJykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmVwYXJlRm9yR2FtZSgpOyAvLyBkaXJlY3RseSBnbyB0byBnYW1lIHByZXBcblxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT0gJ2N1c3RvbWl6ZScpIHtcbiAgICAgICAgICAgIC8vIGVudGVyIGRyYWcgYW5kIGRyb3AgY3VzdG9taXphdGlvbiBtb2RlXG4gICAgICAgICAgICBET01JbnRlcmZhY2UuY3VzdG9taXphdGlvbk1vZGUuZ2FtZWJvYXJkLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gbGF5IHRoZSBzaGlwcywgcHJlcGFyZSB0aGUgZ2FtZWJvYXJkcyBpbiB0aGlzIHN0ZXBcbiAgICBjb25zdCBwcmVwYXJlRm9yR2FtZSA9ICgpID0+IHtcblxuICAgICAgICBsZXQgbW9kZSA9IGdldE1vZGUoKTtcblxuICAgICAgICBpZiAobW9kZSA9PSAncmFuZG9tJykgeyBcblxuICAgICAgICAgICAgLy8gcGxhY2Ugc2hpcHMgb24gYm90aCBib2FyZHNcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzFBJywgJzFCJywgJzFDJywgJzFEJywgJzFFJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKFsnMkEnLCAnMkInLCAnMkMnLCAnMkQnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoWyczQScsICczQicsICczQyddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzRBJywgJzRCJywgJzRDJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKFsnNUEnLCAnNUInXSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKFsnMUEnLCAnMUInLCAnMUMnLCAnMUQnLCAnMUUnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoWycyQScsICcyQicsICcyQycsICcyRCddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzNBJywgJzNCJywgJzNDJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKFsnNEEnLCAnNEInLCAnNEMnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoWyc1QScsICc1QiddKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT0gJ2N1c3RvbWl6ZScpIHtcbiAgICAgICAgICAgIGxldCBnYXJhZ2UgPSBET01JbnRlcmZhY2UuY3VzdG9taXphdGlvbk1vZGUuc2hpcEhhcmJvdXIuZ2V0R2FyYWdlKCk7XG5cbiAgICAgICAgICAgIGdhcmFnZS5mb3JFYWNoKHNoaXBDb29yZGluYXRlcyA9PiB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIuc2V0VHVybihwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIxKSk7IC8vIHNldCB0aGUgY3VycmVudCB0dXJuXG5cbiAgICAgICAgc3RhcnRHYW1lKCk7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBtb2RlID0gZ2V0TW9kZSgpO1xuXG4gICAgICAgIGlmIChtb2RlID09ICdjdXN0b21pemUnKSB7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBjdXN0b21pemF0aW9uIG1vZGUgRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbkJ1dHRvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGluZm9QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWwnKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkID0gcGxheWVyMS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5yZW1vdmVDaGlsZChwbGF5ZXIxLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IHBsYXllcjEuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uQnV0dG9ucy5yZW1vdmUoKTtcbiAgICAgICAgICAgIGluZm9QYW5lbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVudGVyIGdhbWVcbiAgICAgICAgRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5jcmVhdGUoKTtcbiAgICAgICAgRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5yZW5kZXIoKTtcbiAgICAgICAgRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5kaXNwbGF5Q3VycmVudFR1cm4oKTtcblxuICAgIH07XG5cblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZycpO1xuICAgICAgICBpZiAocGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSAnR2FtZSBlbmRlZC4gQ29tcHV0ZXIgd2lucyEnO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSAnR2FtZSBlbmRlZC4gWW91IHdpbiEnO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgICAgIC8vIGNsZWFyIHNoaXBzIG9uIHRoZSBib2FyZFxuICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5yZXNldFNoaXBzT25Cb2FyZCgpO1xuICAgICAgICAvLyByZXNldCBhdHRhY2sgbG9nXG4gICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0QXR0YWNrTG9nKCk7XG5cblxuICAgIH07XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE1vZGUsXG4gICAgICAgIHNldE1vZGUsXG4gICAgICAgIGNvbmZpcm1TaGlwTGF5b3V0LFxuICAgICAgICBwcmVwYXJlRm9yR2FtZSxcbiAgICAgICAgc3RhcnRHYW1lLFxuICAgICAgICBpc0VuZEdhbWUsXG4gICAgICAgIHJlc2V0R2FtZVxuICAgIH07XG5cbn0pKCk7XG5cbmNvbnN0IERPTUludGVyZmFjZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2dhbWUnKTtcbiAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXNlckZvcm0uc2hvdygpLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICBjb25zdCB1c2VyRm9ybSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgdXNlcmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcmZvcm0nKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtUm93MS5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpbnB1dExhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXJOYW1lJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS50ZXh0Q29udGVudCA9ICdwbGF5ZXIgbmFtZSc7XG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQxLmlkID0gJ3BsYXllck5hbWUnO1xuICAgICAgICAgICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICAgICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbDEpO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1Sb3cyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBtb2RlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2hpcE1vZGUnKTtcbiAgICAgICAgICAgIG1vZGVMYWJlbC50ZXh0Q29udGVudCA9ICdzaGlwIG1vZGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBtb2RlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmlkID0gJ3NoaXBNb2RlJztcbiAgICAgICAgICAgIG1vZGVTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ1NoaXAgTW9kZScpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24xLnZhbHVlID0gJ3JhbmRvbSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMS50ZXh0Q29udGVudCA9ICdyYW5kb20nO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24yLnZhbHVlID0gJ2N1c3RvbWl6ZSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMi50ZXh0Q29udGVudCA9ICdjdXN0b21pemUnO1xuICAgIFxuICAgICAgICAgICAgbW9kZVNlbGVjdC5hcHBlbmRDaGlsZChtb2RlT3B0aW9uMSk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmFwcGVuZENoaWxkKG1vZGVPcHRpb24yKTtcbiAgICBcbiAgICAgICAgICAgIGZvcm1Sb3cyLmFwcGVuZENoaWxkKG1vZGVMYWJlbCk7XG4gICAgICAgICAgICBmb3JtUm93Mi5hcHBlbmRDaGlsZChtb2RlU2VsZWN0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgICAgICAgICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTsgLy8gZGVhY3RpdmF0ZSB0aGUgSFRNTCBkZWZhdWx0IHZhbGlkYXRpb25zXG4gICAgXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgYSBkcm9wZG93biBtZW51IHVzaW5nIHByZXZpb3VzIHByYWN0aWNlIG1vZHVsZVxuICAgICAgICAgICAgLy8gYnV0IGZpcnN0LCBicmFuY2ggdGhhdCBtb2R1bGUgdG8gYWxsb3cgZm9yIGlucHV0IHBhcmFtZXRlcnMgZmlyc3RcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdGJ1dHRvbic7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQhJztcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIFxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gc2V0IHBsYXllcjEncyBuYW1lXG4gICAgICAgICAgICAgICAgcGxheWVyLnNldE5hbWUoaW5wdXQxLnZhbHVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWxsb3cgdGhlIGZvcm0gdG8gc3VibWl0IGlmIHRoZSBwbGF5ZXIncyBuYW1lIGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgLy8gZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dDEudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAvLyBlbnRlciBpbnRvIHRoZSBzZWxlY3RlZCBzaGlwIG1vZGVcbiAgICAgICAgICAgICAgICAvLyBnbyBpbnRvIGEgdHJhbnNpdGlvbiBwYWdlIHdoZXJlIHRoZSB1c2VyIGVpdGhlciBzZWUgYSByYW5kb21pemVkIHNoaXAgYm9hcmQgb3IgYSBib2FyZCBhbGxvd2luZyBmb3IgZHJhZyBhbmQgZHJvcCBzaGlwc1xuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZVNlbGVjdC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGdhbWVJbnRlcmZhY2Uuc2V0TW9kZShtb2RlKTsgLy8gc2V0IHRoZSBnYW1lTW9kZVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIHByb2NlZWQgdG8gZ2FtZSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5jb25maXJtU2hpcExheW91dCgpOyAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1xuICAgICAgICB9O1xuXG4gICAgfSkoKTtcblxuICAgIC8vIGdyb3VwIGFsbCBnYW1lYm9hcmQgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0b2dldGhlclxuICAgIGNvbnN0IGdhbWVNb2RlID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSAoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMkRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyRE9NcyA9IFtwbGF5ZXIxRE9NLCBwbGF5ZXIyRE9NXTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX0ggPSBbJycsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRfViA9IFsnJywgJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckRPTXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX0gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ3JpZF9WLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkX0hbal0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSBncmlkX1Zba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JpZF9WW2tdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gZ3JpZF9IW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLCBgJHtncmlkX0hbal19JHtncmlkX1Zba119YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckRPTXNbaV0uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIxaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMV9pZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjJpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyX2lkJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgcGxheWVyMWlkLnRleHRDb250ZW50ID0gcGxheWVyLmdldE5hbWUocGxheWVyLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMmlkLnRleHRDb250ZW50ID0gcGxheWVyLmdldE5hbWUocGxheWVyLnBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBzaGlwc1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHBsYXllciAxIFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIxIC5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMxLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0gZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5jb250YWluU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9ICdTaGlwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHBsYXllciAyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjIgLmdyaWQnKTtcbiAgICAgICAgICAgICAgICBncmlkczIuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLmNvbnRhaW5TaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSAnU2hpcCc7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5nZXRUdXJuKCkgPT09IHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lSW50ZXJmYWNlLmlzRW5kR2FtZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja0NvbXB1dGVyKGdyaWQsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVJbnRlcmZhY2UuaXNFbmRHYW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdHRhY2tQbGF5ZXIoKSwgNTAwKTsgLy8gdHJpZ2dlciB0aGUgY29tcHV0ZXIgYXR0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRhY2tDb21wdXRlcihncmlkLCBjb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdldEF0dGFja0xvZygpLmZpbmQoYXR0YWNrZWRDb29yZGluYXRlID0+IGNvb3JkaW5hdGUgPT09IGF0dGFja2VkQ29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBlYXRlZC4gcGxzIHJlLWF0dGFjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFpblNoaXAnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgncmVjZWl2ZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ21pc3NlZEF0dGFjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50VHVybigpO1xuICAgICAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuaXNFbmRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0YWNrUGxheWVyKCkgeyAgXG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5hdHRhY2soKTsgICBcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tMb2cgPSBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRBdHRhY2tMb2coKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYXR0YWNrTG9nW2F0dGFja0xvZy5sZW5ndGggLSAxXTsgLy8gcmV0cmlldmUgbGFzdCBlbGVtZW50IG9mIHRoZSBhdHRhY2sgbG9nXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjEgLmdyaWQnKTtcbiAgICAgICAgICAgICAgICBncmlkczEuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJykgPT09IGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluU2hpcCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3JlY2VpdmVkQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWlzc2VkQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHBsYXllci5zd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUN1cnJlbnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5pc0VuZEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlDdXJyZW50VHVybiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGN1cnJlbnQgdHVyblxuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2cnKTtcbiAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnZ2FtZU1vZGUnKTtcbiAgICAgICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSBgY3VycmVudCB0dXJuOiAke3BsYXllci5nZXRUdXJuKCl9YDtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZSxcbiAgICAgICAgICAgICAgICByZW5kZXIsXG4gICAgICAgICAgICAgICAgZGlzcGxheUN1cnJlbnRUdXJuXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2FtZWJvYXJkXG4gICAgICAgIH07XG5cbiAgICB9KSgpO1xuXG5cbiAgICBjb25zdCBjdXN0b21pemF0aW9uTW9kZSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gKCgpID0+IHsgLy8gcHJvcGVydGllcyBhbmQgbWV0aG9kcyByZWxhdGVkIHRvIHRoZSBnYW1lYm9hcmQgRE9NXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHsgLy8gY3JlYXRlIGFuIGVtcHR5IGJvYXJkXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIxRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9IID0gWycnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX1YgPSBbJycsICdBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRfSC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBncmlkX1YubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRfSFtqXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9IGdyaWRfVltrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdheGlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChncmlkX1Zba10gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSBncmlkX0hbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWl6ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycsIGAke2dyaWRfSFtqXX0ke2dyaWRfVltrXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMURPTS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjFpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxX2lkJyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMWlkLnRleHRDb250ZW50ID0gcGxheWVyLmdldE5hbWUocGxheWVyLnBsYXllcnMucGxheWVyMSk7ICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmdW5jdGlvbkJ1dHRvbnMnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBjbGVhckJ1dHRvbi5pZCA9ICdjbGVhckJ1dHRvbic7XG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSAnY2xlYXInO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoKTsgLy8gcmVzZXQgZ2FtZWJvYXJkLCBzaGlwIGhhcmJvdXIsIGFuZCBpbmZvIHBhbmVsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLmlkID0gJ2NvbmZpcm1CdXR0b24nO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnY29uZmlybSc7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBwbGFjZSBzaGlwcyB0byBnYW1lYm9hcmQgb2JqZWN0IHdpdGggdGhlIGdhcmFnZSBzaGlwc1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJmYWNlLnByZXBhcmVGb3JHYW1lKCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmdW5jdGlvbkJ1dHRvbnMpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50UGFuZWwuc2hvdygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBkcmFnQW5kRHJvcC5pbnZva2UoKTsgIC8vIGVuYWJsZXMgZHJhZyBhbmQgZHJvcFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7IC8vIHJlc2V0IGdhbWVib2FyZCB0byBlbXB0eSBcblxuICAgICAgICAgICAgICAgIGNsZWFyQWxsU2hpcHMoKTsgLy8gY2xlYXIgc2hpcHMgZnJvbSBnYW1lYm9hcmQgaW4gRE9NXG4gICAgICAgICAgICAgICAgcmVzZXRTdGF0dXMoKTsgLy8gcmVzZXQgZ2FtZWJvYXJkIHN0YXR1c1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlOyAvLyBkaXNhYmxlIHRoZSBjb25maXJtIGJ1dHRvblxuICAgICAgICAgICAgICAgIHNoaXBIYXJib3VyLnJlc2V0KCk7IC8vIHJlc2V0IHNoaXAgaGFyYm91clxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRQYW5lbC5yZWZyZXNoKCk7IC8vIHJlc2V0IHNoaXAgcGxhY2VtZW50IHBhbmVsIGluIERPTVxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IHJlc2V0IGRyYWcgYW5kIGRyb3AgZ2FtZWJvYXJkIHN0YXR1c1xuICAgICAgICAgICAgICAgIGRyYWdBbmREcm9wLnJlc2V0KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhckludmFsaWRTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvb3JkaW5hdGVzPScgKyBcIidcIiArIGNvb3JkaW5hdGUgKyBcIiddXCIpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRTaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZF9jbGljaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkU2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjbGVhckFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICAgICAgICAgICAgICBncmlkcy5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRfaG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkX2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWRTaGlwJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBpc0NvbXBsZXRlO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRTdGF0dXNUb0NvbXBsZXRlID0gKCkgPT4gaXNDb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U3RhdHVzID0gKCkgPT4gaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLFxuICAgICAgICAgICAgICAgIGNsZWFySW52YWxpZFNoaXAsXG4gICAgICAgICAgICAgICAgY2xlYXJBbGxTaGlwcyxcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXNUb0NvbXBsZXRlLFxuICAgICAgICAgICAgICAgIGdldFN0YXR1c1xuICAgICAgICAgICAgfTsgIFxuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgLy8gZHJhZyBhbmQgZHJvcCBpbXBsZW1lbnRhdGlvblxuICAgICAgICBjb25zdCBkcmFnQW5kRHJvcCA9ICgoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmRTdGF0dXMgPSBnYW1lYm9hcmQuZ2V0U3RhdHVzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludm9rZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5heGlzJyk7XG4gICAgICAgICAgICAgICAgbGV0IGlzTW91c2Vkb3duID0gZmFsc2U7XG4gICAgXG4gICAgICAgICAgICAgICAgZ3JpZHMuZm9yRWFjaChncmlkID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVib2FyZFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZF9ob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01vdXNlZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRfY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFByb2Nlc3Nvci5wdXNoSW4oZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnKSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVib2FyZFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZF9ob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lYm9hcmRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUV2ZW50KGUpOyAvLyBvdGhlciB0ZXh0cyB3b24ndCBnZXQgc2VsZWN0ZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZF9jbGljaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQcm9jZXNzb3IucHVzaEluKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJykpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZWJvYXJkU3RhdHVzKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXBDb29yZGluYXRlcyA9IHNoaXBQcm9jZXNzb3IuZ2V0Q3VycmVudFNoaXBDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gc2hpcFByb2Nlc3Nvci5jaGVja1ZhbGlkaXR5KGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMpOyAvLyBpbnZva2Ugb25jZSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHV0IGluIHRoZSBhcnJheSBvZiB0aGUgY3VycmVudCBzaGlwIGFzIGlucHV0IHRvIGNoZWNrIGZvciB2YWxpZGl0eSAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcEhhcmJvdXIuaXNQYXJrRnVsbCgpKSB7IC8vIGZpcnN0IGNoZWNrIHdoZXRoZXIgdGhlIHBhcmsgaXMgYWxyZWFkeSBmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlKCd1bnN1Y2Nlc3NmdWxQYXJraW5nJywgJ1BhcmsgaXMgZnVsbCEnKTsgLy8gVE9ET1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQuY2xlYXJJbnZhbGlkU2hpcChjdXJyZW50U2hpcENvb3JkaW5hdGVzKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwYXJrIGlzIG5vdCB5ZXQgZnVsbFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQudmFsaWRpdHkpIHsgLy8gaW52YWxpZCBzaGlwXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW52YWxpZE1lc3NhZ2UgPSBpc1ZhbGlkLmludmFsaWRUZXN0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoJ2ludmFsaWRTaGlwJywgaW52YWxpZE1lc3NhZ2UpOyAvLyBUT0RPLiBJbXBsZW1lbnQgdGhlIGRpZmZlcmVudCBraW5kIG9mIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQuY2xlYXJJbnZhbGlkU2hpcChjdXJyZW50U2hpcENvb3JkaW5hdGVzKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gdmFsaWQgc2hpcC4gcHJvY2VlZCB0byBwYXJraW5nIGF0dGVtcHRcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmtBdHRlbXB0ID0gc2hpcEhhcmJvdXIucGFya1NoaXAoY3VycmVudFNoaXBDb29yZGluYXRlcyk7IC8vIGludm9rZSBvbmNlIG9ubHlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJrQXR0ZW1wdC5wYXJrU3RhdHVzKSB7IC8vIHBhcmtpbmcgc3VjY2Vzc2Z1bFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvb3JkaW5hdGVzPScgKyBcIidcIiArIGNvb3JkaW5hdGUgKyBcIiddXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkU2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwSGFyYm91ci5pc1BhcmtGdWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CdXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlOyAvLyBhY3RpdmF0ZXMgY29uZmlybUJ1dHRvbiBvbmx5IHdoZW4gdGhlIFNoaXAgUGFyayBpcyBmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYWN0aXZhdGUgZnVydGhlciBnYW1lYm9hcmQgZWRpdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQuc2V0U3RhdHVzVG9Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRTdGF0dXMgPSBnYW1lYm9hcmQuZ2V0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcGFya2luZyB1bnN1Y2Nlc3NmdWxcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlKCd1bnN1Y2Nlc3NmdWxQYXJraW5nJywgcGFya0F0dGVtcHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmNsZWFySW52YWxpZFNoaXAoY3VycmVudFNoaXBDb29yZGluYXRlcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50UGFuZWwucmVmcmVzaCgpOyAvLyByZWZyZXNoIGNvdW50ZXIgYXQgRE9NXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFByb2Nlc3Nvci5yZXNldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMoKTsgLy8gd2lwZSBvdXQgdGhlIGFycmF5IGF0IHRoZSBlbmQgb2YgZWFjaCBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgIFxuICAgIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dFcnJvck1lc3NhZ2UodHlwZSwgbWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3Vuc3VjY2Vzc2Z1bFBhcmtpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaW52YWxpZFNoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSBgJHttZXNzYWdlc30gdGVzdChzKSBub3QgcGFzc2VkYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgbXNnLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3cnKS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwYXVzZUV2ZW50KGUpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3AgcHJvcGFnYXRpbmcgdGhlIGV2ZW50cyBpbiBjYXB0dXJpbmcgYW5kIGJ1YmJsaW5nIHBoYXNlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkU3RhdHVzID0gZ2FtZWJvYXJkLmdldFN0YXR1cygpO1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICByZXR1cm4geyBpbnZva2UsIHJlc2V0IH07XG5cbiAgICAgICAgfSkoKTtcbiAgICBcblxuICAgICAgICAvLyBoZWxwZXIgZm9yIHRoZSBzaGlwIHBsYWNlbWVudCBwYW5lbFxuICAgICAgICBjb25zdCBzaGlwSGFyYm91ciA9ICgoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBnYXJhZ2UgPSBbXTsgLy8gc2F2ZSB0aGUgdmFsaWQgY3JlYXRlZCBzaGlwcyBoZXJlXG5cbiAgICAgICAgICAgIGxldCBwYXJraW5nU3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgZml2ZTogMSxcbiAgICAgICAgICAgICAgICBmb3VyOiAxLFxuICAgICAgICAgICAgICAgIHRocmVlOiAyLFxuICAgICAgICAgICAgICAgIHR3bzogMSxcbiAgICAgICAgICAgICAgICBmdWxsOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZ2V0UGFya2luZ1NwYWNlID0gKHNpemUpID0+IHBhcmtpbmdTcGFjZVtzaXplXTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhcmtTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhcmtpbmdTcGFjZS5mdWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgc2hpcCBzaXplIGluIHRoZSBwYXJraW5nIHNwYWNlIGFuZCB0aGVuIHJlZHVjZSBpdCBieSBvbmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtpbmdTcGFjZS5maXZlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLmZpdmUgPSBwYXJraW5nU3BhY2UuZml2ZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FyYWdlLnB1c2goY29vcmRpbmF0ZXMpOyAvLyBwdXNoIGludG8gdGhlIGdhcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdzaXplLTUgZnVsbHkgcGFya2VkISc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFya2luZ1NwYWNlLmZvdXIgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UuZm91ciA9IHBhcmtpbmdTcGFjZS5mb3VyIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJhZ2UucHVzaChjb29yZGluYXRlcyk7IC8vIHB1c2ggaW50byB0aGUgZ2FyYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ3NpemUtNCBmdWxseSBwYXJrZWQhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJraW5nU3BhY2UudGhyZWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UudGhyZWUgPSBwYXJraW5nU3BhY2UudGhyZWUgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcmFnZS5wdXNoKGNvb3JkaW5hdGVzKTsgLy8gcHVzaCBpbnRvIHRoZSBnYXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnc2l6ZS0zIGZ1bGx5IHBhcmtlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtpbmdTcGFjZS50d28gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UudHdvID0gcGFya2luZ1NwYWNlLnR3byAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FyYWdlLnB1c2goY29vcmRpbmF0ZXMpOyAvLyBwdXNoIGludG8gdGhlIGdhcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdzaXplLTIgZnVsbHkgcGFya2VkISc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFya2luZ1NwYWNlLmZpdmUgPT0gMCAmJiBwYXJraW5nU3BhY2UuZm91ciA9PSAwICYmIHBhcmtpbmdTcGFjZS50aHJlZSA9PSAwICYmIHBhcmtpbmdTcGFjZS50d28gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLmZ1bGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdQYXJrIGlzIGZ1bGwhJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJrU3RhdHVzLCBtZXNzYWdlIH07XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGlzUGFya0Z1bGwgPSAoKSA9PiBwYXJraW5nU3BhY2UuZnVsbDtcblxuICAgICAgICAgICAgY29uc3QgZ2V0R2FyYWdlID0gKCkgPT4gZ2FyYWdlO1xuXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBnYXJhZ2VcbiAgICAgICAgICAgICAgICBnYXJhZ2UgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyByZXNldCBwYXJraW5nIHNwYWNlIGFsbG93YW5jZVxuICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZml2ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgZm91cjogMSxcbiAgICAgICAgICAgICAgICAgICAgdGhyZWU6IDIsXG4gICAgICAgICAgICAgICAgICAgIHR3bzogMSxcbiAgICAgICAgICAgICAgICAgICAgZnVsbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzUGFya0Z1bGwsXG4gICAgICAgICAgICAgICAgZ2V0R2FyYWdlLFxuICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZSxcbiAgICAgICAgICAgICAgICBnZXRQYXJraW5nU3BhY2UsXG4gICAgICAgICAgICAgICAgcGFya1NoaXAsXG4gICAgICAgICAgICAgICAgcmVzZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuXG4gICAgICAgIC8vIGhlbHBlciBiZWZvcmUgcHVzaGluZyBhIHNoaXAgb250byB0aGUgY3VzdG9taXphdGlvbiBtb2RlIGdhbWVib2FyZFxuICAgICAgICBjb25zdCBzaGlwUHJvY2Vzc29yID0gKCgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgZ2V0Q3VycmVudFNoaXBDb29yZGluYXRlcyA9ICgpID0+IGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXM7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwdXNoSW4gPSAoY29vcmRpbmF0ZSkgPT4gY3VycmVudFNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMgPSAoKSA9PiBjdXJyZW50U2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1ZhbGlkaXR5ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uZGl0aW9uIGNoZWNrc1xuICAgICAgICAgICAgICAgIGxldCBsZW5ndGhPSyA9IGxlbmd0aFRlc3QoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIGxldCBvdmVybGFwT0sgPSBvdmVybGFwVGVzdChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgbGV0IHNoYXBlT0sgPSBzaGFwZVRlc3QoY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGludmFsaWRUZXN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCB2YWxpZGl0eTtcblxuICAgICAgICAgICAgICAgIGlmICghbGVuZ3RoT0spIHtcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZFRlc3RzLnB1c2goJ2xlbmd0aCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghb3ZlcmxhcE9LKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRUZXN0cy5wdXNoKCdvdmVybGFwJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzaGFwZU9LKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRUZXN0cy5wdXNoKCdzaGFwZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhPSyAmJiBvdmVybGFwT0sgJiYgc2hhcGVPSykge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZGl0eSwgaW52YWxpZFRlc3RzIH07IC8vIHJldHVybiB2YWx1ZXMgZm9yIHRoaXMgZnVuY3Rpb25cblxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbGVuZ3RoVGVzdCAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVuZ3RoIHRlc3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA8IDIgfHwgY29vcmRpbmF0ZXMubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG92ZXJsYXBUZXN0IChjb29yaW5kYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIGNvbmZsaWN0cyB3aXRoIHRoZSBjb29yZGluYXRlcyB0aGF0IGFyZSBpbiB0aGUgZ2FyYWdlXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc092ZXJsYXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGFyYm91ci5nZXRHYXJhZ2UoKS5mb3JFYWNoKHNoaXBDb29yZGluYXRlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy5zb21lKHNoaXBDb29yZGluYXRlID0+IHNoaXBDb29yZGluYXRlID09IGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3ZlcmxhcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNoYXBlVGVzdCAoY29vcmRpbmF0ZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNoYXBlIHRlc3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5sZW5ndGggPT0gMykpIHsgLy8gZm9yIDMtY2hhcmFjdGVyIGNvb3JkaW5hdGVzIChpLmUuIDEwQSB+IDEwSilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW1bMF0gKyBpdGVtWzFdID09IGNvb3JkaW5hdGVzWzBdWzBdICsgY29vcmRpbmF0ZXNbMF1bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXMuc29tZShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDMpKSB7IC8vIGNhc2VzIHdpdGggbWl4ZWQgMi1jaGFyYWN0ZXIgYW5kIDMtY2hhcmFjdGVycyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtW2l0ZW0ubGVuZ3RoIC0gMV0gPT0gY29vcmRpbmF0ZXNbMF1bY29vcmRpbmF0ZXNbMF0ubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtLmxlbmd0aCA9PSAyKSkgeyAvLyBwdXJlbHkgMi1jaGFyYWN0ZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW1bMF0gPT0gY29vcmRpbmF0ZXNbMF1bMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbVsxXSA9PSBjb29yZGluYXRlc1swXVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkgeyAvLyBpLmUuIG9uZS1jaGFyYWN0ZXIgY29vcmRpbmF0ZSwgc2hhcGVzIHRoYXQgYXJlIG5vdCByZWN0YW5ndWxhclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIHB1c2hJbixcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIHJlc2V0Q3VycmVudFNoaXBDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICBjaGVja1ZhbGlkaXR5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgY29uc3Qgc2hpcFBsYWNlbWVudFBhbmVsID0gKCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIGEgcGFuZWxcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCAuZ2FtZWJvYXJkJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1BhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2luZm9QYW5lbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzEuY2xhc3NMaXN0LmFkZCgnc2l6ZS01Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzEudGV4dENvbnRlbnQgPSBgc2l6ZS01OiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgnZml2ZScpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93Mi5jbGFzc0xpc3QuYWRkKCdzaXplLTQnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93Mi50ZXh0Q29udGVudCA9IGBzaXplLTQ6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCdmb3VyJyl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3czLmNsYXNzTGlzdC5hZGQoJ3NpemUtMycpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3czLnRleHRDb250ZW50ID0gYHNpemUtMzogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ3RocmVlJyl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3c0LmNsYXNzTGlzdC5hZGQoJ3NpemUtMicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3c0LnRleHRDb250ZW50ID0gYHNpemUtMjogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ3R3bycpfWA7XG4gICAgXG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmFwcGVuZENoaWxkKGluZm9Sb3cxKTtcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuYXBwZW5kQ2hpbGQoaW5mb1JvdzIpO1xuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5hcHBlbmRDaGlsZChpbmZvUm93Myk7XG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmFwcGVuZENoaWxkKGluZm9Sb3c0KTtcbiAgICBcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoaW5mb1BhbmVsKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3cxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtNScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3cyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtNCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3czID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtMycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3c0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUtMicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cxLnRleHRDb250ZW50ID0gYHNpemUtNTogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ2ZpdmUnKX1gO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cyLnRleHRDb250ZW50ID0gYHNpemUtNDogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ2ZvdXInKX1gO1xuICAgICAgICAgICAgICAgIGluZm9Sb3czLnRleHRDb250ZW50ID0gYHNpemUtMzogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ3RocmVlJyl9YDtcbiAgICAgICAgICAgICAgICBpbmZvUm93NC50ZXh0Q29udGVudCA9IGBzaXplLTI6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCd0d28nKX1gO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgICByZWZyZXNoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgICAgIHNoaXBIYXJib3VyXG4gICAgICAgIH07XG5cbiAgICB9KSgpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lTW9kZSxcbiAgICAgICAgY3VzdG9taXphdGlvbk1vZGVcbiAgICB9O1xuXG59KSgpO1xuXG5cbmV4cG9ydCB7XG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZWJvYXJkRmFjdG9yeSxcbiAgICBwbGF5ZXJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9