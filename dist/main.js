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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.3s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.3s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n"],"sourceRoot":""}]);
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
        
        // in case of 3-character coordinates
        if (coordinates.some(coordinate => coordinate.length == 3)) {
            const firstTwoCharacters = coordinates.map(coordinate => coordinate.slice(0, 2));
            if (firstTwoCharacters.some(coordinate => coordinate !== firstTwoCharacters[0])) {
                throw new Error('diagonal placement of ship is not allowed');
            }
        // 2-character coordinates
        } else {
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

    const layoutTheShips = (mode) => {

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

            // set the current turn
            player.setTurn(player.getName(player.players.player1));
        } else if (mode == 'customize') {
            // enter drag and drop mode

            // create an empty board (only one board at the moment)
            DOMInterface.customizationMode.gameboard.create();


            // populate to DOM


            


        }

    };


    const createNewGame = (mode) => {
        gameInterface.layoutTheShips(mode);


        // fire these when a trigger is activated
        // TODO

        // DOMInterface.createGameboard();
        // DOMInterface.renderGameboard(); // generate the gameboards to DOM
        // DOMInterface.displayCurrentTurn(); // display current turn info to DOM


        // REFACTORED VERSION:
        // DOMInterface.gameMode.gameboard.create();
        // DOMInterface.gameMode.gameboard.render();
        // DOMInterface.gameMode.gameboard.displayCurrentTurn();

    }



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
        layoutTheShips,
        createNewGame,
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
    
                // proceed to game details
                gameInterface.createNewGame(mode); // put ships depending on the ship mode
    
    
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

                functionButtons.appendChild(confirmButton);
        
                content.appendChild(functionButtons);
        
                shipPlacementPanel.show();
        
                dragAndDrop();  // enables drap and drop
            };

            const reset = () => { // reset gameboard to empty 

                clearAllShips(); // clear ships from gameboard in DOM
                resetStatus(); // reset gameboard status
                document.getElementById('confirmButton').disabled = true; // disable the confirm button
                shipHarbour.reset(); // reset ship harbour
                shipPlacementPanel.refresh(); // reset ship placement panel in DOM
                dragAndDrop(); // enables drap and drop

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
        const dragAndDrop = () => {
            const grids = document.querySelectorAll('.grid');
            const axes = document.querySelectorAll('.axis');
            let isMousedown = false;

            let gameboardStatus = gameboard.getStatus();

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
            gameboard
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudCAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5jb250ZW50IC5nYW1lYm9hcmQgLmdhbWVib2FyZF9pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLnBsYXllcjFfaWQsIC5wbGF5ZXIyX2lkIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBsYXllcjEsIC5wbGF5ZXIyIHtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLm1zZyB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYXhpcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAtMC41cHg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IC0wLjVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ucGxheWVyMiAuZ3JpZCxcXG4uZ3JpZC5jdXN0b21pemUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlkX2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG5cXG4uZ3JpZF9jbGljayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXG59XFxuXFxuLmludmFsaWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udmFsaWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjZWl2ZWRBdHRhY2sgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkQXR0YWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNuZXdnYW1lIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI25ld2dhbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXNlcmZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxufVxcblxcbi51c2VyZm9ybSBmb3JtIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyTmFtZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNwbGF5ZXJOYW1lOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcGxheWVyTmFtZS5pbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbiNzaGlwTW9kZSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbiNzaGlwTW9kZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI3N1Ym1pdGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDIwNywgMjM1LCAwLjUpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbiNzdWJtaXRidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjIpO1xcbn1cXG5cXG4uZnVuY3Rpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZ1bmN0aW9uQnV0dG9ucyBidXR0b24ge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xlYXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbmZpcm1CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcblxcbi5pbmZvUGFuZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jb250ZW50IC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmdhbWVib2FyZCAuZ2FtZWJvYXJkX2l0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyMV9pZCwgLnBsYXllcjJfaWQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheWVyMSwgLnBsYXllcjIge1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4ubXNnIHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5zaG93IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5heGlzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IC0wLjVweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogLTAuNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wbGF5ZXIyIC5ncmlkLFxcbi5ncmlkLmN1c3RvbWl6ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5ncmlkX2NsaWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbn1cXG5cXG4uaW52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWNlaXZlZEF0dGFjayB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWRBdHRhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI25ld2dhbWUge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jbmV3Z2FtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VyZm9ybSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG59XFxuXFxuLnVzZXJmb3JtIGZvcm0ge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJOYW1lIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI3BsYXllck5hbWU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbiNwbGF5ZXJOYW1lLmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3NoaXBNb2RlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuI3NoaXBNb2RlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jc3VibWl0YnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMjA3LCAyMzUsIDAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI3N1Ym1pdGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMik7XFxufVxcblxcbi5mdW5jdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb25CdXR0b25zIGJ1dHRvbiB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbGVhckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29uZmlybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuXFxuLmluZm9QYW5lbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICAvLyBuYW1lIHRoZSBwb3NpdGlvbnMgYXMgJ2NvbXBhcnRtZW50cycuIEFzIGFuIGFycmF5IG9mIGxlbmd0aCBvZiB0aGUgc2hpcFxuICAgIC8vIGRlZmF1bHQgdGhlIGdldCBoaXQgYXMgZmFsc2VcbiAgICBjb25zdCBjb21wYXJ0bWVudEdldEhpdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29tcGFydG1lbnRHZXRIaXRbaV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIG5vdCBhIHB1cmUgZnVuY3Rpb24uLi4gT0s/XG4gICAgY29uc3QgaGl0ID0gKGNvbXBhcnRtZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wYXJ0bWVudCA+IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29tcGFydG1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhpcyBzaGlwJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb25jZSBnZXQgaGl0LCB0dXJucyBpdCB0byB0cnVlXG4gICAgICAgIGNvbXBhcnRtZW50R2V0SGl0W2NvbXBhcnRtZW50XSA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBhcnRtZW50R2V0SGl0LmV2ZXJ5KGNvbXBhcnRtZW50U3RhdHVzID0+IGNvbXBhcnRtZW50U3RhdHVzID09PSB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGNvbXBhcnRtZW50R2V0SGl0LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG59O1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBcbiAgICAvLyBnZW5lcmF0ZSBncmlkIG9iamVjdHNcbiAgICBjb25zdCBncmlkcyA9IHt9O1xuXG4gICAgY29uc3QgZ3JpZF9IID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuICAgIGNvbnN0IGdyaWRfViA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkX0gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX1YubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Z3JpZF9IW2ldfSR7Z3JpZF9WW2pdfWBdID0ge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbYCR7Z3JpZF9IW2ldfWAsIGAke2dyaWRfVltqXX1gXSxcbiAgICAgICAgICAgICAgICBjb250YWluU2hpcDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgdGhlIHNoaXBzIHRoYXQgYXJlIHBsYWNlZCBvbiBib2FyZFxuICAgIGxldCBzaGlwc09uQm9hcmQgPSBbXTtcblxuICAgIGNvbnN0IGdldFNoaXBzT25Cb2FyZCA9ICgpID0+IHNoaXBzT25Cb2FyZDtcblxuICAgIGNvbnN0IHJlc2V0U2hpcHNPbkJvYXJkID0gKCkgPT4gc2hpcHNPbkJvYXJkID0gW107XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzLnNvbWUoY29vcmRpbmF0ZSA9PiBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uY29udGFpblNoaXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ292ZXJsYXBwaW5nIG9mIHNoaXAgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gaW4gY2FzZSBvZiAzLWNoYXJhY3RlciBjb29yZGluYXRlc1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXMuc29tZShjb29yZGluYXRlID0+IGNvb3JkaW5hdGUubGVuZ3RoID09IDMpKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFR3b0NoYXJhY3RlcnMgPSBjb29yZGluYXRlcy5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIGlmIChmaXJzdFR3b0NoYXJhY3RlcnMuc29tZShjb29yZGluYXRlID0+IGNvb3JkaW5hdGUgIT09IGZpcnN0VHdvQ2hhcmFjdGVyc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpYWdvbmFsIHBsYWNlbWVudCBvZiBzaGlwIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIDItY2hhcmFjdGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IGNvb3JkaW5hdGVzLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoMCwgMSkpO1xuICAgICAgICAgICAgY29uc3QgbGFzdENoYXJhY3RlciA9IGNvb3JkaW5hdGVzLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoMSwgMikpO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLnNvbWUoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlICE9PSBmaXJzdENoYXJhY3RlclswXSkgJiYgbGFzdENoYXJhY3Rlci5zb21lKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZSAhPT0gbGFzdENoYXJhY3RlclswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpYWdvbmFsIHBsYWNlbWVudCBvZiBzaGlwIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGNyZWF0ZSBzaGlwIHdpdGggc2hpcCBmYWN0b3J5XG4gICAgICAgIGNvbnN0IHNoaXBBbHBoYSA9IHNoaXBGYWN0b3J5KGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHNoaXBBbHBoYSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlc1tpXX1gXS5jb250YWluU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXAgPSBzaGlwQWxwaGE7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXBOYW1lID0gJ3NoaXBBbHBoYSc7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXBMZW5ndGggPSBzaGlwQWxwaGEubGVuZ3RoO1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlc1tpXX1gXS5zaGlwQ29tcGFydG1lbnQgPSBpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLy8gbG9nIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlc1xuICAgIGxldCBhdHRhY2tMb2cgPSBbXTtcblxuICAgIGNvbnN0IGdldEF0dGFja0xvZyA9ICgpID0+IGF0dGFja0xvZztcblxuICAgIGNvbnN0IHJlc2V0QXR0YWNrTG9nID0gKCkgPT4gYXR0YWNrTG9nID0gW107XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5jb250YWluU2hpcCkge1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLnNoaXAuaGl0KGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5zaGlwQ29tcGFydG1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLm1pc3NlZEF0dGFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrTG9nLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRTaGlwc09uQm9hcmQoKS5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkgPT09IHRydWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdyaWRzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIGdldEF0dGFja0xvZyxcbiAgICAgICAgcmVzZXRBdHRhY2tMb2csXG4gICAgICAgIHJlc2V0U2hpcHNPbkJvYXJkLFxuICAgIH07XG5cbn07XG5cblxuY29uc3QgcGxheWVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHBsYXllcjEgPSB7IFxuICAgICAgICBuYW1lOiAncGxheWVyJyxcbiAgICAgICAgZ2FtZWJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgICAgIGF0dGFjazogKGNvb3JkaW5hdGUpID0+IHBsYXllcjIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSlcbiAgICB9O1xuICAgIGNvbnN0IHBsYXllcjIgPSB7XG4gICAgICAgIG5hbWU6ICdjb21wdXRlcicsXG4gICAgICAgIGdhbWVib2FyZDogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgICAgICBhdHRhY2s6ICgpID0+IHBsYXllcjEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpKVxuICAgIH07XG5cbiAgICBjb25zdCBzZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgcGxheWVyMS5uYW1lID0gbmFtZTtcbiAgICB9IFxuXG4gICAgY29uc3QgZ2V0TmFtZSA9IChwbGF5ZXIpID0+IHBsYXllci5uYW1lO1xuXG4gICAgY29uc3QgcG9vbE9mQXR0YWNrID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZF9IID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuICAgICAgICBjb25zdCBncmlkX1YgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcbiAgICAgICAgY29uc3QgZ3JpZHMgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkX0gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZF9WLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZHMucHVzaChncmlkX0hbaV0gKyBncmlkX1Zbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncmlkc1xuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCByZXNldFBvb2wgPSAoKSA9PiB7XG4gICAgICAgIHBvb2xPZkF0dGFjay5ncmlkcyA9IFtdO1xuICAgICAgICBjb25zdCBncmlkX0ggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgIGNvbnN0IGdyaWRfViA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRfSC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX1YubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwb29sT2ZBdHRhY2suZ3JpZHMucHVzaChncmlkX0hbaV0gKyBncmlkX1Zbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH07XG5cblxuICAgIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byA5OVxuICAgICAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbE9mQXR0YWNrLmdyaWRzLmxlbmd0aCk7XG4gICAgICAgIGxldCByYW5kb21Db29yZGluYXRlID0gcG9vbE9mQXR0YWNrLmdyaWRzW3JhbmRvbU51bWJlcl07XG5cbiAgICAgICAgLy8gZWFjaCB0aW1lIGl0IGF0dGFja3MsIHRoZSBncmlkcyBhcnJheSBsZW5ndGggcmVkdWNlcyBieSAxXG4gICAgICAgIHBvb2xPZkF0dGFjay5ncmlkcy5zcGxpY2UocG9vbE9mQXR0YWNrLmdyaWRzLmluZGV4T2YocG9vbE9mQXR0YWNrLmdyaWRzW3JhbmRvbU51bWJlcl0pLCAxKTtcblxuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBwbGF5ZXJzID0geyBwbGF5ZXIxLCBwbGF5ZXIyIH07XG5cbiAgICBsZXQgdHVybjsgLy8gVE9ET1xuXG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG5cbiAgICBjb25zdCBzZXRUdXJuID0gKHBsYXllcikgPT4gdHVybiA9IHBsYXllcjtcblxuICAgIGNvbnN0IHN3aXRjaFR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChnZXRUdXJuKCkgPT0gZ2V0TmFtZShwbGF5ZXIxKSkge1xuICAgICAgICAgICAgc2V0VHVybihnZXROYW1lKHBsYXllcjIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRUdXJuKCkgPT0gZ2V0TmFtZShwbGF5ZXIyKSkge1xuICAgICAgICAgICAgc2V0VHVybihnZXROYW1lKHBsYXllcjEpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJzLFxuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBzZXRUdXJuLFxuICAgICAgICBnZXRUdXJuLFxuICAgICAgICBzd2l0Y2hUdXJuLFxuICAgICAgICByZXNldFBvb2xcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZ2FtZUludGVyZmFjZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBsYXlvdXRUaGVTaGlwcyA9IChtb2RlKSA9PiB7XG5cbiAgICAgICAgaWYgKG1vZGUgPT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIC8vIHBsYWNlIHNoaXBzIG9uIGJvdGggYm9hcmRzXG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoWycxQScsICcxQicsICcxQycsICcxRCcsICcxRSddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzJBJywgJzJCJywgJzJDJywgJzJEJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKFsnM0EnLCAnM0InLCAnM0MnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoWyc0QScsICc0QicsICc0QyddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzVBJywgJzVCJ10pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzFBJywgJzFCJywgJzFDJywgJzFEJywgJzFFJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKFsnMkEnLCAnMkInLCAnMkMnLCAnMkQnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoWyczQScsICczQicsICczQyddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzRBJywgJzRCJywgJzRDJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKFsnNUEnLCAnNUInXSk7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgY3VycmVudCB0dXJuXG4gICAgICAgICAgICBwbGF5ZXIuc2V0VHVybihwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIxKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSAnY3VzdG9taXplJykge1xuICAgICAgICAgICAgLy8gZW50ZXIgZHJhZyBhbmQgZHJvcCBtb2RlXG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBib2FyZCAob25seSBvbmUgYm9hcmQgYXQgdGhlIG1vbWVudClcbiAgICAgICAgICAgIERPTUludGVyZmFjZS5jdXN0b21pemF0aW9uTW9kZS5nYW1lYm9hcmQuY3JlYXRlKCk7XG5cblxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgdG8gRE9NXG5cblxuICAgICAgICAgICAgXG5cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICBjb25zdCBjcmVhdGVOZXdHYW1lID0gKG1vZGUpID0+IHtcbiAgICAgICAgZ2FtZUludGVyZmFjZS5sYXlvdXRUaGVTaGlwcyhtb2RlKTtcblxuXG4gICAgICAgIC8vIGZpcmUgdGhlc2Ugd2hlbiBhIHRyaWdnZXIgaXMgYWN0aXZhdGVkXG4gICAgICAgIC8vIFRPRE9cblxuICAgICAgICAvLyBET01JbnRlcmZhY2UuY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgICAgIC8vIERPTUludGVyZmFjZS5yZW5kZXJHYW1lYm9hcmQoKTsgLy8gZ2VuZXJhdGUgdGhlIGdhbWVib2FyZHMgdG8gRE9NXG4gICAgICAgIC8vIERPTUludGVyZmFjZS5kaXNwbGF5Q3VycmVudFR1cm4oKTsgLy8gZGlzcGxheSBjdXJyZW50IHR1cm4gaW5mbyB0byBET01cblxuXG4gICAgICAgIC8vIFJFRkFDVE9SRUQgVkVSU0lPTjpcbiAgICAgICAgLy8gRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5jcmVhdGUoKTtcbiAgICAgICAgLy8gRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5yZW5kZXIoKTtcbiAgICAgICAgLy8gRE9NSW50ZXJmYWNlLmdhbWVNb2RlLmdhbWVib2FyZC5kaXNwbGF5Q3VycmVudFR1cm4oKTtcblxuICAgIH1cblxuXG5cbiAgICBjb25zdCBpc0VuZEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2cnKTtcbiAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gJ0dhbWUgZW5kZWQuIENvbXB1dGVyIHdpbnMhJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gJ0dhbWUgZW5kZWQuIFlvdSB3aW4hJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIFxuICAgICAgICAvLyBjbGVhciBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucmVzZXRTaGlwc09uQm9hcmQoKTtcbiAgICAgICAgLy8gcmVzZXQgYXR0YWNrIGxvZ1xuICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5yZXNldEF0dGFja0xvZygpO1xuXG5cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXRUaGVTaGlwcyxcbiAgICAgICAgY3JlYXRlTmV3R2FtZSxcbiAgICAgICAgaXNFbmRHYW1lLFxuICAgICAgICByZXNldEdhbWVcbiAgICB9O1xuXG59KSgpO1xuXG5cbmNvbnN0IERPTUludGVyZmFjZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2dhbWUnKTtcbiAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXNlckZvcm0uc2hvdygpLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICBjb25zdCB1c2VyRm9ybSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgdXNlcmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcmZvcm0nKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtUm93MS5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpbnB1dExhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXJOYW1lJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS50ZXh0Q29udGVudCA9ICdwbGF5ZXIgbmFtZSc7XG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQxLmlkID0gJ3BsYXllck5hbWUnO1xuICAgICAgICAgICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICAgICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbDEpO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1Sb3cyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBtb2RlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2hpcE1vZGUnKTtcbiAgICAgICAgICAgIG1vZGVMYWJlbC50ZXh0Q29udGVudCA9ICdzaGlwIG1vZGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBtb2RlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmlkID0gJ3NoaXBNb2RlJztcbiAgICAgICAgICAgIG1vZGVTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ1NoaXAgTW9kZScpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24xLnZhbHVlID0gJ3JhbmRvbSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMS50ZXh0Q29udGVudCA9ICdyYW5kb20nO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24yLnZhbHVlID0gJ2N1c3RvbWl6ZSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMi50ZXh0Q29udGVudCA9ICdjdXN0b21pemUnO1xuICAgIFxuICAgICAgICAgICAgbW9kZVNlbGVjdC5hcHBlbmRDaGlsZChtb2RlT3B0aW9uMSk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmFwcGVuZENoaWxkKG1vZGVPcHRpb24yKTtcbiAgICBcbiAgICAgICAgICAgIGZvcm1Sb3cyLmFwcGVuZENoaWxkKG1vZGVMYWJlbCk7XG4gICAgICAgICAgICBmb3JtUm93Mi5hcHBlbmRDaGlsZChtb2RlU2VsZWN0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgICAgICAgICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTsgLy8gZGVhY3RpdmF0ZSB0aGUgSFRNTCBkZWZhdWx0IHZhbGlkYXRpb25zXG4gICAgXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgYSBkcm9wZG93biBtZW51IHVzaW5nIHByZXZpb3VzIHByYWN0aWNlIG1vZHVsZVxuICAgICAgICAgICAgLy8gYnV0IGZpcnN0LCBicmFuY2ggdGhhdCBtb2R1bGUgdG8gYWxsb3cgZm9yIGlucHV0IHBhcmFtZXRlcnMgZmlyc3RcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdGJ1dHRvbic7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQhJztcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIFxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gc2V0IHBsYXllcjEncyBuYW1lXG4gICAgICAgICAgICAgICAgcGxheWVyLnNldE5hbWUoaW5wdXQxLnZhbHVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWxsb3cgdGhlIGZvcm0gdG8gc3VibWl0IGlmIHRoZSBwbGF5ZXIncyBuYW1lIGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgLy8gZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dDEudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAvLyBlbnRlciBpbnRvIHRoZSBzZWxlY3RlZCBzaGlwIG1vZGVcbiAgICAgICAgICAgICAgICAvLyBnbyBpbnRvIGEgdHJhbnNpdGlvbiBwYWdlIHdoZXJlIHRoZSB1c2VyIGVpdGhlciBzZWUgYSByYW5kb21pemVkIHNoaXAgYm9hcmQgb3IgYSBib2FyZCBhbGxvd2luZyBmb3IgZHJhZyBhbmQgZHJvcCBzaGlwc1xuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZVNlbGVjdC52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBwcm9jZWVkIHRvIGdhbWUgZGV0YWlsc1xuICAgICAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuY3JlYXRlTmV3R2FtZShtb2RlKTsgLy8gcHV0IHNoaXBzIGRlcGVuZGluZyBvbiB0aGUgc2hpcCBtb2RlXG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIERPTVxuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dcbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cbiAgICAvLyBncm91cCBhbGwgZ2FtZWJvYXJkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdG9nZXRoZXJcbiAgICBjb25zdCBnYW1lTW9kZSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gKCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjFET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjJET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckRPTXMgPSBbcGxheWVyMURPTSwgcGxheWVyMkRPTV07XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9IID0gWycnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX1YgPSBbJycsICdBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJET01zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZF9ILmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdyaWRfVi5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZF9IW2pdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gZ3JpZF9WW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdyaWRfVltrXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9IGdyaWRfSFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdheGlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJywgYCR7Z3JpZF9IW2pdfSR7Z3JpZF9WW2tdfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluU2hpcCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJET01zW2ldLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjFfaWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMl9pZCcpO1xuICAgIFxuICAgICAgICAgICAgICAgIHBsYXllcjFpZC50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIHBsYXllcjJpZC50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgc2hpcHNcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIgMSBcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyMSAuZ3JpZCcpO1xuICAgICAgICAgICAgICAgIGdyaWRzMS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5ncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uY29udGFpblNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSAnU2hpcCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluU2hpcCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIgMlxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIyIC5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMyLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0gZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLmdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5jb250YWluU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gJ1NoaXAnO1xuICAgICAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluU2hpcCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2V0VHVybigpID09PSBwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZUludGVyZmFjZS5pc0VuZEdhbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tDb21wdXRlcihncmlkLCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lSW50ZXJmYWNlLmlzRW5kR2FtZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXR0YWNrUGxheWVyKCksIDUwMCk7IC8vIHRyaWdnZXIgdGhlIGNvbXB1dGVyIGF0dGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gYXR0YWNrQ29tcHV0ZXIoZ3JpZCwgY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5nZXRBdHRhY2tMb2coKS5maW5kKGF0dGFja2VkQ29vcmRpbmF0ZSA9PiBjb29yZGluYXRlID09PSBhdHRhY2tlZENvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwZWF0ZWQuIHBscyByZS1hdHRhY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5hdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3JlY2VpdmVkQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtaXNzZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q3VycmVudFR1cm4oKTtcbiAgICAgICAgICAgICAgICBnYW1lSW50ZXJmYWNlLmlzRW5kR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF0dGFja1BsYXllcigpIHsgIFxuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuYXR0YWNrKCk7ICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrTG9nID0gcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0QXR0YWNrTG9nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGF0dGFja0xvZ1thdHRhY2tMb2cubGVuZ3RoIC0gMV07IC8vIHJldHJpZXZlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXR0YWNrIGxvZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIxIC5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMxLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycpID09PSBjb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFpblNoaXAnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdyZWNlaXZlZEF0dGFjaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ21pc3NlZEF0dGFjaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3dpdGNoVHVybigpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50VHVybigpO1xuICAgICAgICAgICAgICAgIGdhbWVJbnRlcmZhY2UuaXNFbmRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5Q3VycmVudFR1cm4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBjdXJyZW50IHR1cm5cbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnJyk7XG4gICAgICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gYGN1cnJlbnQgdHVybjogJHtwbGF5ZXIuZ2V0VHVybigpfWA7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjcmVhdGUsXG4gICAgICAgICAgICAgICAgcmVuZGVyLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50VHVyblxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFxuICAgICAgICB9O1xuXG4gICAgfSkoKTtcblxuXG4gICAgY29uc3QgY3VzdG9taXphdGlvbk1vZGUgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7IC8vIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgcmVsYXRlZCB0byB0aGUgZ2FtZWJvYXJkIERPTVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7IC8vIGNyZWF0ZSBhbiBlbXB0eSBib2FyZFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRfSCA9IFsnJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9WID0gWycnLCAnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX0gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ3JpZF9WLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkX0hbal0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSBncmlkX1Zba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JpZF9WW2tdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gZ3JpZF9IW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdjdXN0b21pemUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLCBgJHtncmlkX0hbal19JHtncmlkX1Zba119YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjFET00uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIxaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMV9pZCcpO1xuICAgICAgICAgICAgICAgIHBsYXllcjFpZC50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjEpOyAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnVuY3Rpb25CdXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24uaWQgPSAnY2xlYXJCdXR0b24nO1xuICAgICAgICAgICAgICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gJ2NsZWFyJztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7IC8vIHJlc2V0IGdhbWVib2FyZCwgc2hpcCBoYXJib3VyLCBhbmQgaW5mbyBwYW5lbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5pZCA9ICdjb25maXJtQnV0dG9uJztcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ2NvbmZpcm0nO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZ1bmN0aW9uQnV0dG9ucyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRQYW5lbC5zaG93KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRyYWdBbmREcm9wKCk7ICAvLyBlbmFibGVzIGRyYXAgYW5kIGRyb3BcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4geyAvLyByZXNldCBnYW1lYm9hcmQgdG8gZW1wdHkgXG5cbiAgICAgICAgICAgICAgICBjbGVhckFsbFNoaXBzKCk7IC8vIGNsZWFyIHNoaXBzIGZyb20gZ2FtZWJvYXJkIGluIERPTVxuICAgICAgICAgICAgICAgIHJlc2V0U3RhdHVzKCk7IC8vIHJlc2V0IGdhbWVib2FyZCBzdGF0dXNcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTsgLy8gZGlzYWJsZSB0aGUgY29uZmlybSBidXR0b25cbiAgICAgICAgICAgICAgICBzaGlwSGFyYm91ci5yZXNldCgpOyAvLyByZXNldCBzaGlwIGhhcmJvdXJcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50UGFuZWwucmVmcmVzaCgpOyAvLyByZXNldCBzaGlwIHBsYWNlbWVudCBwYW5lbCBpbiBET01cbiAgICAgICAgICAgICAgICBkcmFnQW5kRHJvcCgpOyAvLyBlbmFibGVzIGRyYXAgYW5kIGRyb3BcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2xlYXJJbnZhbGlkU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb29yZGluYXRlcz0nICsgXCInXCIgKyBjb29yZGluYXRlICsgXCInXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkU2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRfY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZFNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xlYXJBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkX2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZF9jbGljaycpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkU2hpcCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gaXNDb21wbGV0ZTtcblxuICAgICAgICAgICAgY29uc3Qgc2V0U3RhdHVzVG9Db21wbGV0ZSA9ICgpID0+IGlzQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCByZXNldFN0YXR1cyA9ICgpID0+IGlzQ29tcGxldGUgPSBmYWxzZTtcblxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZSxcbiAgICAgICAgICAgICAgICBjbGVhckludmFsaWRTaGlwLFxuICAgICAgICAgICAgICAgIGNsZWFyQWxsU2hpcHMsXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzVG9Db21wbGV0ZSxcbiAgICAgICAgICAgICAgICBnZXRTdGF0dXNcbiAgICAgICAgICAgIH07ICBcbiAgICAgICAgfSkoKTtcblxuXG4gICAgICAgIC8vIGRyYWcgYW5kIGRyb3AgaW1wbGVtZW50YXRpb25cbiAgICAgICAgY29uc3QgZHJhZ0FuZERyb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJyk7XG4gICAgICAgICAgICBjb25zdCBheGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF4aXMnKTtcbiAgICAgICAgICAgIGxldCBpc01vdXNlZG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkU3RhdHVzID0gZ2FtZWJvYXJkLmdldFN0YXR1cygpO1xuXG4gICAgICAgICAgICBncmlkcy5mb3JFYWNoKGdyaWQgPT4ge1xuXG4gICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZWJvYXJkU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRfaG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01vdXNlZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZF9jbGljaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQcm9jZXNzb3IucHVzaEluKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJykpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lYm9hcmRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZF9ob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZWJvYXJkU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUV2ZW50KGUpOyAvLyBvdGhlciB0ZXh0cyB3b24ndCBnZXQgc2VsZWN0ZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdXNlZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRfY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQcm9jZXNzb3IucHVzaEluKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJykpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVib2FyZFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcENvb3JkaW5hdGVzID0gc2hpcFByb2Nlc3Nvci5nZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZCA9IHNoaXBQcm9jZXNzb3IuY2hlY2tWYWxpZGl0eShjdXJyZW50U2hpcENvb3JkaW5hdGVzKTsgLy8gaW52b2tlIG9uY2Ugb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHV0IGluIHRoZSBhcnJheSBvZiB0aGUgY3VycmVudCBzaGlwIGFzIGlucHV0IHRvIGNoZWNrIGZvciB2YWxpZGl0eSAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBIYXJib3VyLmlzUGFya0Z1bGwoKSkgeyAvLyBmaXJzdCBjaGVjayB3aGV0aGVyIHRoZSBwYXJrIGlzIGFscmVhZHkgZnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoJ3Vuc3VjY2Vzc2Z1bFBhcmtpbmcnLCAnUGFyayBpcyBmdWxsIScpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmNsZWFySW52YWxpZFNoaXAoY3VycmVudFNoaXBDb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHBhcmsgaXMgbm90IHlldCBmdWxsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQudmFsaWRpdHkpIHsgLy8gaW52YWxpZCBzaGlwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludmFsaWRNZXNzYWdlID0gaXNWYWxpZC5pbnZhbGlkVGVzdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoJ2ludmFsaWRTaGlwJywgaW52YWxpZE1lc3NhZ2UpOyAvLyBUT0RPLiBJbXBsZW1lbnQgdGhlIGRpZmZlcmVudCBraW5kIG9mIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5jbGVhckludmFsaWRTaGlwKGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gdmFsaWQgc2hpcC4gcHJvY2VlZCB0byBwYXJraW5nIGF0dGVtcHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJrQXR0ZW1wdCA9IHNoaXBIYXJib3VyLnBhcmtTaGlwKGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMpOyAvLyBpbnZva2Ugb25jZSBvbmx5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtBdHRlbXB0LnBhcmtTdGF0dXMpIHsgLy8gcGFya2luZyBzdWNjZXNzZnVsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29vcmRpbmF0ZXM9JyArIFwiJ1wiICsgY29vcmRpbmF0ZSArIFwiJ11cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd2YWxpZFNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcEhhcmJvdXIuaXNQYXJrRnVsbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CdXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlOyAvLyBhY3RpdmF0ZXMgY29uZmlybUJ1dHRvbiBvbmx5IHdoZW4gdGhlIFNoaXAgUGFyayBpcyBmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhY3RpdmF0ZSBmdXJ0aGVyIGdhbWVib2FyZCBlZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnNldFN0YXR1c1RvQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRTdGF0dXMgPSBnYW1lYm9hcmQuZ2V0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcGFya2luZyB1bnN1Y2Nlc3NmdWxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZSgndW5zdWNjZXNzZnVsUGFya2luZycsIHBhcmtBdHRlbXB0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmNsZWFySW52YWxpZFNoaXAoY3VycmVudFNoaXBDb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50UGFuZWwucmVmcmVzaCgpOyAvLyByZWZyZXNoIGNvdW50ZXIgYXQgRE9NXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFByb2Nlc3Nvci5yZXNldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMoKTsgLy8gd2lwZSBvdXQgdGhlIGFycmF5IGF0IHRoZSBlbmQgb2YgZWFjaCBjaGVja1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgIFxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93RXJyb3JNZXNzYWdlKHR5cGUsIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZycpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAndW5zdWNjZXNzZnVsUGFya2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaW52YWxpZFNoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9IGAke21lc3NhZ2VzfSB0ZXN0KHMpIG5vdCBwYXNzZWRgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3cnKS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgbXNnLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhdXNlRXZlbnQoZSl7XG4gICAgICAgICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wIHByb3BhZ2F0aW5nIHRoZSBldmVudHMgaW4gY2FwdHVyaW5nIGFuZCBidWJibGluZyBwaGFzZXNcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgXG5cbiAgICAgICAgLy8gaGVscGVyIGZvciB0aGUgc2hpcCBwbGFjZW1lbnQgcGFuZWxcbiAgICAgICAgY29uc3Qgc2hpcEhhcmJvdXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZ2FyYWdlID0gW107IC8vIHNhdmUgdGhlIHZhbGlkIGNyZWF0ZWQgc2hpcHMgaGVyZVxuXG4gICAgICAgICAgICBsZXQgcGFya2luZ1NwYWNlID0ge1xuICAgICAgICAgICAgICAgIGZpdmU6IDEsXG4gICAgICAgICAgICAgICAgZm91cjogMSxcbiAgICAgICAgICAgICAgICB0aHJlZTogMixcbiAgICAgICAgICAgICAgICB0d286IDEsXG4gICAgICAgICAgICAgICAgZnVsbDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGdldFBhcmtpbmdTcGFjZSA9IChzaXplKSA9PiBwYXJraW5nU3BhY2Vbc2l6ZV07XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwYXJrU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJraW5nU3BhY2UuZnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIHNoaXAgc2l6ZSBpbiB0aGUgcGFya2luZyBzcGFjZSBhbmQgdGhlbiByZWR1Y2UgaXQgYnkgb25lXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJraW5nU3BhY2UuZml2ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZS5maXZlID0gcGFya2luZ1NwYWNlLmZpdmUgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcmFnZS5wdXNoKGNvb3JkaW5hdGVzKTsgLy8gcHVzaCBpbnRvIHRoZSBnYXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnc2l6ZS01IGZ1bGx5IHBhcmtlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtpbmdTcGFjZS5mb3VyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLmZvdXIgPSBwYXJraW5nU3BhY2UuZm91ciAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FyYWdlLnB1c2goY29vcmRpbmF0ZXMpOyAvLyBwdXNoIGludG8gdGhlIGdhcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdzaXplLTQgZnVsbHkgcGFya2VkISc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFya2luZ1NwYWNlLnRocmVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLnRocmVlID0gcGFya2luZ1NwYWNlLnRocmVlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJhZ2UucHVzaChjb29yZGluYXRlcyk7IC8vIHB1c2ggaW50byB0aGUgZ2FyYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ3NpemUtMyBmdWxseSBwYXJrZWQhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJraW5nU3BhY2UudHdvICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLnR3byA9IHBhcmtpbmdTcGFjZS50d28gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcmFnZS5wdXNoKGNvb3JkaW5hdGVzKTsgLy8gcHVzaCBpbnRvIHRoZSBnYXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnc2l6ZS0yIGZ1bGx5IHBhcmtlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtpbmdTcGFjZS5maXZlID09IDAgJiYgcGFya2luZ1NwYWNlLmZvdXIgPT0gMCAmJiBwYXJraW5nU3BhY2UudGhyZWUgPT0gMCAmJiBwYXJraW5nU3BhY2UudHdvID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZS5mdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnUGFyayBpcyBmdWxsISc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFya1N0YXR1cywgbWVzc2FnZSB9O1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBpc1BhcmtGdWxsID0gKCkgPT4gcGFya2luZ1NwYWNlLmZ1bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGdldEdhcmFnZSA9ICgpID0+IGdhcmFnZTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgZ2FyYWdlXG4gICAgICAgICAgICAgICAgZ2FyYWdlID0gW107XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgcGFya2luZyBzcGFjZSBhbGxvd2FuY2VcbiAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpdmU6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZvdXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIHRocmVlOiAyLFxuICAgICAgICAgICAgICAgICAgICB0d286IDEsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc1BhcmtGdWxsLFxuICAgICAgICAgICAgICAgIGdldEdhcmFnZSxcbiAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UsXG4gICAgICAgICAgICAgICAgZ2V0UGFya2luZ1NwYWNlLFxuICAgICAgICAgICAgICAgIHBhcmtTaGlwLFxuICAgICAgICAgICAgICAgIHJlc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICAvLyBoZWxwZXIgYmVmb3JlIHB1c2hpbmcgYSBzaGlwIG9udG8gdGhlIGN1c3RvbWl6YXRpb24gbW9kZSBnYW1lYm9hcmRcbiAgICAgICAgY29uc3Qgc2hpcFByb2Nlc3NvciA9ICgoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcENvb3JkaW5hdGVzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMgPSAoKSA9PiBjdXJyZW50U2hpcENvb3JkaW5hdGVzO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHVzaEluID0gKGNvb3JkaW5hdGUpID0+IGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzID0gKCkgPT4gY3VycmVudFNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tWYWxpZGl0eSA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbmRpdGlvbiBjaGVja3NcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoT0sgPSBsZW5ndGhUZXN0KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmxhcE9LID0gb3ZlcmxhcFRlc3QoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIGxldCBzaGFwZU9LID0gc2hhcGVUZXN0KGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgICAgIGxldCBpbnZhbGlkVGVzdHMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRpdHk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxlbmd0aE9LKSB7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRUZXN0cy5wdXNoKCdsZW5ndGgnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW92ZXJsYXBPSykge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkVGVzdHMucHVzaCgnb3ZlcmxhcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghc2hhcGVPSykge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkVGVzdHMucHVzaCgnc2hhcGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoT0sgJiYgb3ZlcmxhcE9LICYmIHNoYXBlT0spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWRpdHksIGludmFsaWRUZXN0cyB9OyAvLyByZXR1cm4gdmFsdWVzIGZvciB0aGlzIGZ1bmN0aW9uXG5cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxlbmd0aFRlc3QgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlbmd0aCB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPCAyIHx8IGNvb3JkaW5hdGVzLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvdmVybGFwVGVzdCAoY29vcmluZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBjb29yZGluYXRlcyBjb25mbGljdHMgd2l0aCB0aGUgY29vcmRpbmF0ZXMgdGhhdCBhcmUgaW4gdGhlIGdhcmFnZVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNPdmVybGFwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEhhcmJvdXIuZ2V0R2FyYWdlKCkuZm9yRWFjaChzaGlwQ29vcmRpbmF0ZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZXMuc29tZShzaGlwQ29vcmRpbmF0ZSA9PiBzaGlwQ29vcmRpbmF0ZSA9PSBjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaGFwZVRlc3QgKGNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaGFwZSB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDMpKSB7IC8vIGZvciAzLWNoYXJhY3RlciBjb29yZGluYXRlcyAoaS5lLiAxMEEgfiAxMEopXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtWzBdICsgaXRlbVsxXSA9PSBjb29yZGluYXRlc1swXVswXSArIGNvb3JkaW5hdGVzWzBdWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLnNvbWUoaXRlbSA9PiBpdGVtLmxlbmd0aCA9PSAzKSkgeyAvLyBjYXNlcyB3aXRoIG1peGVkIDItY2hhcmFjdGVyIGFuZCAzLWNoYXJhY3RlcnMgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbVtpdGVtLmxlbmd0aCAtIDFdID09IGNvb3JkaW5hdGVzWzBdW2Nvb3JkaW5hdGVzWzBdLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5sZW5ndGggPT0gMikpIHsgLy8gcHVyZWx5IDItY2hhcmFjdGVyIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtWzBdID09IGNvb3JkaW5hdGVzWzBdWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW1bMV0gPT0gY29vcmRpbmF0ZXNbMF1bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHsgLy8gaS5lLiBvbmUtY2hhcmFjdGVyIGNvb3JkaW5hdGUsIHNoYXBlcyB0aGF0IGFyZSBub3QgcmVjdGFuZ3VsYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICBwdXNoSW4sXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFNoaXBDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICByZXNldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuXG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRQYW5lbCA9ICgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBhIHBhbmVsXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgLmdhbWVib2FyZCcpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5jbGFzc0xpc3QuYWRkKCdpbmZvUGFuZWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cxLmNsYXNzTGlzdC5hZGQoJ3NpemUtNScpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cxLnRleHRDb250ZW50ID0gYHNpemUtNTogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ2ZpdmUnKX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzIuY2xhc3NMaXN0LmFkZCgnc2l6ZS00Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzIudGV4dENvbnRlbnQgPSBgc2l6ZS00OiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgnZm91cicpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93My5jbGFzc0xpc3QuYWRkKCdzaXplLTMnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93My50ZXh0Q29udGVudCA9IGBzaXplLTM6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCd0aHJlZScpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93NC5jbGFzc0xpc3QuYWRkKCdzaXplLTInKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93NC50ZXh0Q29udGVudCA9IGBzaXplLTI6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCd0d28nKX1gO1xuICAgIFxuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5hcHBlbmRDaGlsZChpbmZvUm93MSk7XG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmFwcGVuZENoaWxkKGluZm9Sb3cyKTtcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuYXBwZW5kQ2hpbGQoaW5mb1JvdzMpO1xuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5hcHBlbmRDaGlsZChpbmZvUm93NCk7XG4gICAgXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKGluZm9QYW5lbCk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLTUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLTQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLTMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplLTInKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93MS50ZXh0Q29udGVudCA9IGBzaXplLTU6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCdmaXZlJyl9YDtcbiAgICAgICAgICAgICAgICBpbmZvUm93Mi50ZXh0Q29udGVudCA9IGBzaXplLTQ6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCdmb3VyJyl9YDtcbiAgICAgICAgICAgICAgICBpbmZvUm93My50ZXh0Q29udGVudCA9IGBzaXplLTM6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCd0aHJlZScpfWA7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzQudGV4dENvbnRlbnQgPSBgc2l6ZS0yOiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgndHdvJyl9YDtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgICAgcmVmcmVzaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnYW1lYm9hcmRcbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdhbWVNb2RlLFxuICAgICAgICBjdXN0b21pemF0aW9uTW9kZVxuICAgIH07XG5cbn0pKCk7XG5cblxuXG5cbmV4cG9ydCB7XG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZWJvYXJkRmFjdG9yeSxcbiAgICBwbGF5ZXJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9