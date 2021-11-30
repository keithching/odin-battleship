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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.header a {\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n}\n\n\n\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.gameMode {\n    visibility: visible;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.2s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.welcomeText {\n    font-size: 80px;\n}\n\n.welcomeText .battle {\n    color: lightgrey;\n}\n\n.welcomeText .ship {\n    color: grey;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 20px;\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\n\n.header a {\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n}\n\n\n\n\n.content {\n    padding: 30px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\n.content .gameboard {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 100px;\n}\n\n.content .gameboard .gameboard_items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.player1_id, .player2_id {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.player1, .player2 {\n    flex: auto;\n}\n\n.msg {\n    padding: 0 10px;\n    margin: 0;\n    height: 50px;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n.error {\n    border-style: solid;\n    border-color: red;\n    background-color: rgba(255, 0, 0, 0.2);\n    color: darkred;\n}\n\n.gameMode {\n    visibility: visible;\n}\n\n.show {\n    transition: all 1s;\n    visibility: visible;\n}\n\n.footer {\n    text-align: center;\n    color: black;\n    margin-bottom: 10px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: grey;\n}\n\n.axis {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    border-color: transparent;\n    font-style: italic;\n    font-weight: bold;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n}\n\n.grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-style: solid;\n    border-width: 1px;\n    width: 50px;\n    height: 50px;\n    margin: -0.5px;\n    border-color: rgba(0,0,0,0.2);\n    transition: all 0.2s;\n}\n\n.player2 .grid,\n.grid.customize {\n    cursor: pointer;\n}\n\n.grid_hover {\n    background-color: rgba(0,0,0,0.1);\n}\n\n.grid_click {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.invalidShip {\n    background-color: red;\n}\n\n.validShip {\n    background-color: lightgreen;\n}\n\n.row {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.receivedAttack { \n    background-color: red;\n}\n\n.missedAttack {\n    background-color: green;\n}\n\n#newgame {\n    width: 100px;\n    border-radius: 10px;\n    padding: 5px 10px;\n    border-style: none;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    cursor: pointer;\n    background-color: white;\n    transition: all 0.3s;\n}\n\n#newgame:hover {\n    background-color: black;\n    color: white;\n}\n\n.userform {\n    visibility: hidden;\n\n}\n\n.userform form {\n    width: 800px;\n    height: 500px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n#playerName {\n    height: 20px;\n    margin: 0 10px;\n    font-family: 'Montserrat', sans-serif;\n    border-width: 0 0 1px 0;\n    border-color: grey;\n    padding: 5px;\n    transition: all 0.2s;\n}\n\n#playerName:focus {\n    outline: none;\n    border-color: blue;\n}\n\n#playerName.invalid {\n    border-color: red;\n}\n\n#shipMode {\n    padding: 5px;\n    margin: 0 10px;\n}\n\n#shipMode:focus {\n    outline: none;\n}\n\n.visible {\n    visibility: visible;\n}\n\n#submitbutton {\n    margin-top: 30px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    padding: 10px 15px;\n    background-color: rgba(135, 207, 235, 0.5);\n    border-style: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n#submitbutton:hover {\n    background-color: rgba(255, 255, 0, 0.2);\n}\n\n.functionButtons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.functionButtons button {\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    padding: 10px 15px;\n    border-style: none;\n    cursor: pointer;\n}\n\n#clearButton {\n    background-color: slategrey;\n    color: white;\n}\n\n#confirmButton {\n    background-color: yellow;\n}\n\n\n.infoPanel {\n    width: 100px;\n    padding: 20px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.welcomeText {\n    font-size: 80px;\n}\n\n.welcomeText .battle {\n    color: lightgrey;\n}\n\n.welcomeText .ship {\n    color: grey;\n}"],"sourceRoot":""}]);
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

    const reset = () => {
        for (let i = 0; i < compartmentGetHit.length; i++) {
            compartmentGetHit[i] = false;
        }       
    };

    return {
        length,
        compartmentGetHit,
        hit,
        isSunk,
        reset
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
        } else if (coordinates.every(coordinate => coordinate.length === 2)) { // 2-character coordinates
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

    const resetShipHitStatus = () => {

        for (let i = 0; i < shipsOnBoard.length; i++) {
            shipsOnBoard[i].reset();
        }

    };

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
        resetShipHitStatus
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
        attack: () => player1.gameboard.receiveAttack(computerAttack.getCoordinate())
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

    const computerAttack = (() => {

        let priorityLane = []; // compute the adjacent coordinates, and save them into the priority lane

        const resetPriorityLane = () => priorityLane = [];

        const getPriorityLane = () => priorityLane;

        const getCoordinate = () => {

            const playerAttackLog = player.players.player1.gameboard.getAttackLog();
            const coordinate = playerAttackLog[playerAttackLog.length - 1];
            const grid = document.querySelector(".player1 .grid[data-coordinates=" + "'" + coordinate + "']");

            if (playerAttackLog == '') { // first time attacking
                
                return getRandomCoordinate();

            } else { // not first time attacking

                if (grid.getAttribute('data-containShip') == 'true') { // last attack contains a ship
                    
                    let coordinates = generateAdjacentCoordinates(coordinate); // generate the adjacent coordinates that potentially contain a ship as well

                    for (let i = 0; i < coordinates.length; i++) {
                        if (!player.players.player1.gameboard.getAttackLog().find(coordinate => coordinate == coordinates[i])) { // add to priority lane only if the potential coordinates have not been attacked
                            priorityLane.splice(0, 0, coordinates[i]); // push into the priority lane (push into the front)
                        }
                    } 

                    if (priorityLane.length == 0) { // attacks randomly if priority lane is empty

                        return getRandomCoordinate();
                    }

                    let firstPriority = priorityLane[0];

                    priorityLane.splice(0, 1); // pop the first element

                    poolOfAttack.grids.splice(poolOfAttack.grids.indexOf(firstPriority), 1); // each time it attacks, the grids array length reduces by 1

                    return firstPriority;

                } else { // last attack does not contain a ship

                    if (priorityLane.length == 0) { // attacks randomly if priority lane is empty

                        return getRandomCoordinate();

                    } else { // prioritize attacks in the priority lane

                        let firstPriority = priorityLane[0];
                        priorityLane.splice(0, 1); // pop the first element

                        if (!player.players.player1.gameboard.getAttackLog().find(coordinate => coordinate == firstPriority)) {

                            poolOfAttack.grids.splice(poolOfAttack.grids.indexOf(firstPriority), 1); // each time it attacks, the grids array length reduces by 1

                            return firstPriority;
                        } else {

                            return getRandomCoordinate();

                        }
                    }

                }
            } 

            function generateAdjacentCoordinates (coordinate) {

                let numberGrid;
                let alphabetGrid;

                if (coordinate.length == 3) {
                    numberGrid = coordinate.slice(0, 2);
                    alphabetGrid = coordinate.slice(2, 3);
                } else {
                    numberGrid = coordinate.slice(0, 1);
                    alphabetGrid = coordinate.slice(1, 2);
                }

                let outputCoordinates = [];

                let numberGridNew;
                let alphabetGridNew;
                let newCoordinate;

                // south grid
                numberGridNew = Number(numberGrid) + 1;
                alphabetGridNew = alphabetGrid; 
                newCoordinate = numberGridNew + alphabetGridNew;

                if (numberGridNew > 0 && numberGridNew < 11) {
                    outputCoordinates.push(newCoordinate);
                }
                
                // east grid
                numberGridNew = numberGrid;
                alphabetGridNew = String.fromCharCode(alphabetGrid.charCodeAt(0) + 1); // convert to Unicode (ASCII), update Unicode value, convert to Character
                newCoordinate = numberGridNew + alphabetGridNew;

                if (alphabetGridNew.charCodeAt(0) >= 65 && alphabetGridNew.charCodeAt(0) <= 74) {
                    outputCoordinates.push(newCoordinate);
                }
                
                // north grid
                numberGridNew = Number(numberGrid) - 1;
                alphabetGridNew = alphabetGrid; 
                newCoordinate = numberGridNew + alphabetGridNew;

                if (numberGridNew > 0 && numberGridNew < 11) {
                    outputCoordinates.push(newCoordinate);
                }

                // west grid
                numberGridNew = Number(numberGrid);
                alphabetGridNew = String.fromCharCode(alphabetGrid.charCodeAt(0) - 1); // convert to Unicode (ASCII), update Unicode value, convert to Character
                newCoordinate = numberGridNew + alphabetGridNew;

                if (alphabetGridNew.charCodeAt(0) >= 65 && alphabetGridNew.charCodeAt(0) <= 74) {
                    outputCoordinates.push(newCoordinate);
                }

                return outputCoordinates; // array
            }

            function getRandomCoordinate () {

                // Returns a random integer from 0 to 99
                let randomNumber = Math.floor(Math.random() * poolOfAttack.grids.length);
                let randomCoordinate = poolOfAttack.grids[randomNumber];
        
                // each time it attacks, the grids array length reduces by 1
                poolOfAttack.grids.splice(poolOfAttack.grids.indexOf(poolOfAttack.grids[randomNumber]), 1);
        
                return randomCoordinate;
            }

        };

        return { priorityLane, getCoordinate, resetPriorityLane };
    })();


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
        resetPool,
        computerAttack
    };
})();

const gameInterface = (() => {

    let gameMode;
    const setMode = (mode) => gameMode = mode;
    const getMode = () => gameMode;

    const confirmShipLayout = () => {

        let mode = getMode();

        if (mode == 'random') {
            
            DOMInterface.shipRandomizer();

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


            // reset game button
            const newGameButton = document.getElementById('newgame');
            newGameButton.textContent = 'Reset Game'; // change new game button to reset game
            newGameButton.addEventListener('click', () => gameInterface.resetGame());

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

    const resetGame = () => { // the extent of reseting a game
    
        // reset attack log
        player.players.player1.gameboard.resetAttackLog();
        player.players.player2.gameboard.resetAttackLog();

        player.players.player1.gameboard.resetShipHitStatus();
        player.players.player2.gameboard.resetShipHitStatus();

        DOMInterface.gameMode.gameboard.clearAttackMoves(); // clear the attack moves on DOM

        // reset the priority lane in computer attacks
        player.computerAttack.resetPriorityLane();

        // set turn to player
        player.setTurn(player.getName(player.players.player1));
        DOMInterface.gameMode.gameboard.displayCurrentTurn();

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

    const landingPage = (() => {
        // simple effects for the welcome text
        const welcomeText = document.querySelector('.welcomeText');

        const welcomeText_battle = document.querySelector('.welcomeText .battle');
        const welcomeText_ship = document.querySelector('.welcomeText .ship');

        let currentPattern = 1;

        let alternatingPatterns = setInterval(() => {

            if (currentPattern == 1) {
                showPattern1();
                currentPattern = 2;
            } else if (currentPattern == 2) {
                showPattern2();
                currentPattern = 1;
            }

        }, 1000);


        function showPattern1 () {
                welcomeText_battle.classList.add('ship');
                welcomeText_battle.classList.remove('battle');
                welcomeText_ship.classList.add('battle');
                welcomeText_ship.classList.remove('ship');
        }

        function showPattern2 () {
                welcomeText_battle.classList.remove('ship');
                welcomeText_battle.classList.add('battle');
                welcomeText_ship.classList.remove('battle');
                welcomeText_ship.classList.add('ship');
        }


        const newGameButton = document.getElementById('newgame');
        newGameButton.addEventListener('click', () => {
        
            clearInterval(alternatingPatterns);

            welcomeText.remove();
            
            userForm.show();

        }, { once: true });
        
    })();


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
                const mode = modeSelect.value;

                gameInterface.setMode(mode); // set the gameMode
    
                gameInterface.confirmShipLayout(); // proceed to game details
                
                form.remove(); // remove the form from the DOM

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
    
            
            const clearAttackMoves = () => {

                const grids1 = document.querySelectorAll('.player1 .grid');
                grids1.forEach(grid => {
                    grid.classList.remove('receivedAttack');
                    grid.classList.remove('missedAttack');
                });

                const grids2 = document.querySelectorAll('.player2 .grid');
                grids2.forEach(grid => {
                    grid.classList.remove('receivedAttack');
                    grid.classList.remove('missedAttack');
                });


            };


            return {
                create,
                render,
                displayCurrentTurn,
                clearAttackMoves
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

                    const newGameButton = document.getElementById('newgame');
                    newGameButton.textContent = 'Reset Game'; // change new game button to reset game
                    newGameButton.addEventListener('click', () => gameInterface.resetGame());
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

    // TODO
    const shipRandomizer = () => {

        // get the available ship sizes from the ship harbour parking space
        let parkingSpace = customizationMode.shipHarbour.parkingSpace;

        // console.log(Object.keys(parkingSpace));







    };


    return {
        gameMode,
        customizationMode,
        shipRandomizer
    };

})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSwrQkFBK0IsZ0JBQWdCLGlCQUFpQixvQkFBb0IsNkJBQTZCLHdCQUF3Qiw0Q0FBNEMsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIscUNBQXFDLG9CQUFvQiw2QkFBNkIsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUsNEJBQTRCLG1CQUFtQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGdCQUFnQixHQUFHLHlCQUF5QixvQkFBb0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsR0FBRywwQ0FBMEMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsOEJBQThCLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0IsaUJBQWlCLEdBQUcsVUFBVSxzQkFBc0IsZ0JBQWdCLG1CQUFtQiwwQkFBMEIsZ0NBQWdDLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsR0FBRyxZQUFZLDBCQUEwQix3QkFBd0IsNkNBQTZDLHFCQUFxQixHQUFHLGVBQWUsMEJBQTBCLEdBQUcsV0FBVyx5QkFBeUIsMEJBQTBCLEdBQUcsYUFBYSx5QkFBeUIsbUJBQW1CLDBCQUEwQixHQUFHLGVBQWUsNEJBQTRCLGtCQUFrQixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMEJBQTBCLHdCQUF3QixnQ0FBZ0MseUJBQXlCLHdCQUF3QixrQkFBa0IsbUJBQW1CLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMEJBQTBCLHdCQUF3QixrQkFBa0IsbUJBQW1CLHFCQUFxQixvQ0FBb0MsMkJBQTJCLEdBQUcsc0NBQXNDLHNCQUFzQixHQUFHLGlCQUFpQix3Q0FBd0MsR0FBRyxpQkFBaUIsd0NBQXdDLEdBQUcsa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQixtQ0FBbUMsR0FBRyxVQUFVLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsc0JBQXNCLDRCQUE0QixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxjQUFjLG1CQUFtQiwwQkFBMEIsd0JBQXdCLHlCQUF5QiwrQ0FBK0Msc0JBQXNCLDhCQUE4QiwyQkFBMkIsR0FBRyxvQkFBb0IsOEJBQThCLG1CQUFtQixHQUFHLGVBQWUseUJBQXlCLEtBQUssb0JBQW9CLG1CQUFtQixvQkFBb0IsK0NBQStDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsbUJBQW1CLHFCQUFxQiw0Q0FBNEMsOEJBQThCLHlCQUF5QixtQkFBbUIsMkJBQTJCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsZUFBZSxtQkFBbUIscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsMEJBQTBCLEdBQUcsbUJBQW1CLHVCQUF1QiwrQ0FBK0MseUJBQXlCLGlEQUFpRCx5QkFBeUIsc0JBQXNCLDJCQUEyQixHQUFHLHlCQUF5QiwrQ0FBK0MsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsNkJBQTZCLCtDQUErQyx5QkFBeUIseUJBQXlCLHNCQUFzQixHQUFHLGtCQUFrQixrQ0FBa0MsbUJBQW1CLEdBQUcsb0JBQW9CLCtCQUErQixHQUFHLGtCQUFrQixtQkFBbUIsb0JBQW9CLCtDQUErQyxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRywwQkFBMEIsdUJBQXVCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLG1CQUFtQjtBQUN0blg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCOzs7QUFHckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkMsd0JBQXdCLG1CQUFtQjtBQUMzQywwQkFBMEIsVUFBVSxFQUFFLFVBQVU7QUFDaEQsaUNBQWlDLFVBQVUsTUFBTSxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQsV0FBVztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUk7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFxRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hELDBCQUEwQixlQUFlO0FBQ3pDLDBCQUEwQixlQUFlO0FBQ3pDLDBCQUEwQixlQUFlO0FBQ3pDLDBCQUEwQixlQUFlO0FBQ3pDLDBCQUEwQixlQUFlO0FBQ3pDO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckMsMEJBQTBCLFdBQVcsMEJBQTBCLFdBQVc7QUFDMUUsVUFBVTtBQUNWLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0I7O0FBRS9COztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLE9BQU87O0FBRXJCLHVFQUF1RTtBQUN2RTtBQUNBLCtFQUErRTs7QUFFL0Usb0NBQW9DLHdCQUF3QjtBQUM1RCxpSUFBaUk7QUFDakksdUVBQXVFO0FBQ3ZFO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBOztBQUVBOztBQUVBLCtDQUErQzs7QUFFL0MsNkZBQTZGOztBQUU3Rjs7QUFFQSxrQkFBa0IsT0FBTzs7QUFFekIsb0RBQW9EOztBQUVwRDs7QUFFQSxzQkFBc0IsT0FBTzs7QUFFN0I7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBLHFHQUFxRzs7QUFFckc7QUFDQSwwQkFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQjtBQUNqQixLQUFLOzs7QUFHTCxzQkFBc0I7O0FBRXRCLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUIsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFD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RCxxQ0FBcUM7QUFDdkYsa0RBQWtELG1DQUFtQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuXFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudCAuZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5jb250ZW50IC5nYW1lYm9hcmQgLmdhbWVib2FyZF9pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLnBsYXllcjFfaWQsIC5wbGF5ZXIyX2lkIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBsYXllcjEsIC5wbGF5ZXIyIHtcXG4gICAgZmxleDogYXV0bztcXG59XFxuXFxuLm1zZyB7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uZ2FtZU1vZGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYXhpcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAtMC41cHg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IC0wLjVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ucGxheWVyMiAuZ3JpZCxcXG4uZ3JpZC5jdXN0b21pemUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlkX2hvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG5cXG4uZ3JpZF9jbGljayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXG59XFxuXFxuLmludmFsaWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udmFsaWRTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjZWl2ZWRBdHRhY2sgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkQXR0YWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNuZXdnYW1lIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI25ld2dhbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udXNlcmZvcm0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxufVxcblxcbi51c2VyZm9ybSBmb3JtIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyTmFtZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbiNwbGF5ZXJOYW1lOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcGxheWVyTmFtZS5pbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbiNzaGlwTW9kZSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbiNzaGlwTW9kZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI3N1Ym1pdGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDIwNywgMjM1LCAwLjUpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbiNzdWJtaXRidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjIpO1xcbn1cXG5cXG4uZnVuY3Rpb25CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZ1bmN0aW9uQnV0dG9ucyBidXR0b24ge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xlYXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbmZpcm1CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcblxcbi5pbmZvUGFuZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLndlbGNvbWVUZXh0IHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG4ud2VsY29tZVRleHQgLmJhdHRsZSB7XFxuICAgIGNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi53ZWxjb21lVGV4dCAuc2hpcCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jb250ZW50IC5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmdhbWVib2FyZCAuZ2FtZWJvYXJkX2l0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyMV9pZCwgLnBsYXllcjJfaWQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheWVyMSwgLnBsYXllcjIge1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4ubXNnIHtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5nYW1lTW9kZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5heGlzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IC0wLjVweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogLTAuNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5wbGF5ZXIyIC5ncmlkLFxcbi5ncmlkLmN1c3RvbWl6ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5ncmlkX2NsaWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbn1cXG5cXG4uaW52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi52YWxpZFNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWNlaXZlZEF0dGFjayB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWRBdHRhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI25ld2dhbWUge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4jbmV3Z2FtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VyZm9ybSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG59XFxuXFxuLnVzZXJmb3JtIGZvcm0ge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXJOYW1lIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI3BsYXllck5hbWU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbiNwbGF5ZXJOYW1lLmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3NoaXBNb2RlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuI3NoaXBNb2RlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jc3VibWl0YnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMjA3LCAyMzUsIDAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuI3N1Ym1pdGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMik7XFxufVxcblxcbi5mdW5jdGlvbkJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb25CdXR0b25zIGJ1dHRvbiB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbGVhckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29uZmlybUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuXFxuLmluZm9QYW5lbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ud2VsY29tZVRleHQge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcbi53ZWxjb21lVGV4dCAuYmF0dGxlIHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLndlbGNvbWVUZXh0IC5zaGlwIHtcXG4gICAgY29sb3I6IGdyZXk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgLy8gbmFtZSB0aGUgcG9zaXRpb25zIGFzICdjb21wYXJ0bWVudHMnLiBBcyBhbiBhcnJheSBvZiBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICAvLyBkZWZhdWx0IHRoZSBnZXQgaGl0IGFzIGZhbHNlXG4gICAgY29uc3QgY29tcGFydG1lbnRHZXRIaXQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29tcGFydG1lbnRHZXRIaXRbaV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIG5vdCBhIHB1cmUgZnVuY3Rpb24uLi4gT0s/XG4gICAgY29uc3QgaGl0ID0gKGNvbXBhcnRtZW50KSA9PiB7XG4gICAgICAgIGlmIChjb21wYXJ0bWVudCA+IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29tcGFydG1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhpcyBzaGlwJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb25jZSBnZXQgaGl0LCB0dXJucyBpdCB0byB0cnVlXG4gICAgICAgIGNvbXBhcnRtZW50R2V0SGl0W2NvbXBhcnRtZW50XSA9IHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbXBhcnRtZW50R2V0SGl0LmV2ZXJ5KGNvbXBhcnRtZW50U3RhdHVzID0+IGNvbXBhcnRtZW50U3RhdHVzID09PSB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFydG1lbnRHZXRIaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBhcnRtZW50R2V0SGl0W2ldID0gZmFsc2U7XG4gICAgICAgIH0gICAgICAgXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgY29tcGFydG1lbnRHZXRIaXQsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICByZXNldFxuICAgIH07XG59O1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBcbiAgICAvLyBnZW5lcmF0ZSBncmlkIG9iamVjdHNcbiAgICBjb25zdCBncmlkcyA9IHt9O1xuXG4gICAgY29uc3QgZ3JpZF9IID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuICAgIGNvbnN0IGdyaWRfViA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkX0gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX1YubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Z3JpZF9IW2ldfSR7Z3JpZF9WW2pdfWBdID0ge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbYCR7Z3JpZF9IW2ldfWAsIGAke2dyaWRfVltqXX1gXSxcbiAgICAgICAgICAgICAgICBjb250YWluU2hpcDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgdGhlIHNoaXBzIHRoYXQgYXJlIHBsYWNlZCBvbiBib2FyZFxuICAgIGxldCBzaGlwc09uQm9hcmQgPSBbXTtcblxuICAgIGNvbnN0IGdldFNoaXBzT25Cb2FyZCA9ICgpID0+IHNoaXBzT25Cb2FyZDtcblxuICAgIGNvbnN0IHJlc2V0U2hpcHNPbkJvYXJkID0gKCkgPT4gc2hpcHNPbkJvYXJkID0gW107XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzLnNvbWUoY29vcmRpbmF0ZSA9PiBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uY29udGFpblNoaXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ292ZXJsYXBwaW5nIG9mIHNoaXAgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5sZW5ndGggIT09IDMpICYmIGNvb3JkaW5hdGVzLnNvbWUoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLmxlbmd0aCA9PT0gMykpIHsgLy8gbWl4IG9mIDIgYW5kIDMtY2hhcmFjdGVyc1xuICAgICAgICAgICAgY29uc3QgbGFzdENoYXJhY3RlciA9IGNvb3JkaW5hdGVzLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoY29vcmRpbmF0ZS5sZW5ndGggLSAxLCBjb29yZGluYXRlLmxlbmd0aCkpO1xuICAgICAgICAgICAgaWYgKGxhc3RDaGFyYWN0ZXIuc29tZShjb29yZGluYXRlID0+IGNvb3JkaW5hdGUgIT09IGxhc3RDaGFyYWN0ZXJbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaWFnb25hbCBwbGFjZW1lbnQgb2Ygc2hpcCBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5sZW5ndGggPT09IDIpKSB7IC8vIDItY2hhcmFjdGVyIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IGNvb3JkaW5hdGVzLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoMCwgMSkpO1xuICAgICAgICAgICAgY29uc3QgbGFzdENoYXJhY3RlciA9IGNvb3JkaW5hdGVzLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoMSwgMikpO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLnNvbWUoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlICE9PSBmaXJzdENoYXJhY3RlclswXSkgJiYgbGFzdENoYXJhY3Rlci5zb21lKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZSAhPT0gbGFzdENoYXJhY3RlclswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpYWdvbmFsIHBsYWNlbWVudCBvZiBzaGlwIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGNyZWF0ZSBzaGlwIHdpdGggc2hpcCBmYWN0b3J5XG4gICAgICAgIGNvbnN0IHNoaXBBbHBoYSA9IHNoaXBGYWN0b3J5KGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHNoaXBBbHBoYSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlc1tpXX1gXS5jb250YWluU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXAgPSBzaGlwQWxwaGE7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXBOYW1lID0gJ3NoaXBBbHBoYSc7XG4gICAgICAgICAgICBncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGVzW2ldfWBdLnNoaXBMZW5ndGggPSBzaGlwQWxwaGEubGVuZ3RoO1xuICAgICAgICAgICAgZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlc1tpXX1gXS5zaGlwQ29tcGFydG1lbnQgPSBpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLy8gbG9nIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlc1xuICAgIGxldCBhdHRhY2tMb2cgPSBbXTtcblxuICAgIGNvbnN0IGdldEF0dGFja0xvZyA9ICgpID0+IGF0dGFja0xvZztcblxuICAgIGNvbnN0IHJlc2V0QXR0YWNrTG9nID0gKCkgPT4gYXR0YWNrTG9nID0gW107XG5cbiAgICBjb25zdCByZXNldFNoaXBIaXRTdGF0dXMgPSAoKSA9PiB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc09uQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXBzT25Cb2FyZFtpXS5yZXNldCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmIChncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uY29udGFpblNoaXApIHtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5zaGlwLmhpdChncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uc2hpcENvbXBhcnRtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyaWRzW2BncmlkLSR7Y29vcmRpbmF0ZX1gXS5taXNzZWRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGF0dGFja0xvZy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0U2hpcHNPbkJvYXJkKCkuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpID09PSB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBncmlkcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTdW5rLFxuICAgICAgICBnZXRBdHRhY2tMb2csXG4gICAgICAgIHJlc2V0QXR0YWNrTG9nLFxuICAgICAgICByZXNldFNoaXBzT25Cb2FyZCxcbiAgICAgICAgcmVzZXRTaGlwSGl0U3RhdHVzXG4gICAgfTtcblxufTtcblxuXG5jb25zdCBwbGF5ZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IHsgXG4gICAgICAgIG5hbWU6ICdwbGF5ZXInLFxuICAgICAgICBnYW1lYm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICAgICAgYXR0YWNrOiAoY29vcmRpbmF0ZSkgPT4gcGxheWVyMi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxuICAgIH07XG4gICAgY29uc3QgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogJ2NvbXB1dGVyJyxcbiAgICAgICAgZ2FtZWJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgICAgIGF0dGFjazogKCkgPT4gcGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb21wdXRlckF0dGFjay5nZXRDb29yZGluYXRlKCkpXG4gICAgfTtcblxuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBwbGF5ZXIxLm5hbWUgPSBuYW1lO1xuICAgIH0gXG5cbiAgICBjb25zdCBnZXROYW1lID0gKHBsYXllcikgPT4gcGxheWVyLm5hbWU7XG5cbiAgICBjb25zdCBwb29sT2ZBdHRhY2sgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkX0ggPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgIGNvbnN0IGdyaWRfViA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgICAgICBjb25zdCBncmlkcyA9IFtdO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRfSC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX1YubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkcy5wdXNoKGdyaWRfSFtpXSArIGdyaWRfVltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyaWRzXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHJlc2V0UG9vbCA9ICgpID0+IHtcbiAgICAgICAgcG9vbE9mQXR0YWNrLmdyaWRzID0gW107XG4gICAgICAgIGNvbnN0IGdyaWRfSCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgICAgICAgY29uc3QgZ3JpZF9WID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZF9ILmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRfVi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHBvb2xPZkF0dGFjay5ncmlkcy5wdXNoKGdyaWRfSFtpXSArIGdyaWRfVltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCgpID0+IHtcblxuICAgICAgICBsZXQgcHJpb3JpdHlMYW5lID0gW107IC8vIGNvbXB1dGUgdGhlIGFkamFjZW50IGNvb3JkaW5hdGVzLCBhbmQgc2F2ZSB0aGVtIGludG8gdGhlIHByaW9yaXR5IGxhbmVcblxuICAgICAgICBjb25zdCByZXNldFByaW9yaXR5TGFuZSA9ICgpID0+IHByaW9yaXR5TGFuZSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdldFByaW9yaXR5TGFuZSA9ICgpID0+IHByaW9yaXR5TGFuZTtcblxuICAgICAgICBjb25zdCBnZXRDb29yZGluYXRlID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2tMb2cgPSBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRBdHRhY2tMb2coKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBwbGF5ZXJBdHRhY2tMb2dbcGxheWVyQXR0YWNrTG9nLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMSAuZ3JpZFtkYXRhLWNvb3JkaW5hdGVzPVwiICsgXCInXCIgKyBjb29yZGluYXRlICsgXCInXVwiKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllckF0dGFja0xvZyA9PSAnJykgeyAvLyBmaXJzdCB0aW1lIGF0dGFja2luZ1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21Db29yZGluYXRlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIG5vdCBmaXJzdCB0aW1lIGF0dGFja2luZ1xuXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJykgPT0gJ3RydWUnKSB7IC8vIGxhc3QgYXR0YWNrIGNvbnRhaW5zIGEgc2hpcFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZ2VuZXJhdGVBZGphY2VudENvb3JkaW5hdGVzKGNvb3JkaW5hdGUpOyAvLyBnZW5lcmF0ZSB0aGUgYWRqYWNlbnQgY29vcmRpbmF0ZXMgdGhhdCBwb3RlbnRpYWxseSBjb250YWluIGEgc2hpcCBhcyB3ZWxsXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRBdHRhY2tMb2coKS5maW5kKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZSA9PSBjb29yZGluYXRlc1tpXSkpIHsgLy8gYWRkIHRvIHByaW9yaXR5IGxhbmUgb25seSBpZiB0aGUgcG90ZW50aWFsIGNvb3JkaW5hdGVzIGhhdmUgbm90IGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhbmUuc3BsaWNlKDAsIDAsIGNvb3JkaW5hdGVzW2ldKTsgLy8gcHVzaCBpbnRvIHRoZSBwcmlvcml0eSBsYW5lIChwdXNoIGludG8gdGhlIGZyb250KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eUxhbmUubGVuZ3RoID09IDApIHsgLy8gYXR0YWNrcyByYW5kb21seSBpZiBwcmlvcml0eSBsYW5lIGlzIGVtcHR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RQcmlvcml0eSA9IHByaW9yaXR5TGFuZVswXTtcblxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhbmUuc3BsaWNlKDAsIDEpOyAvLyBwb3AgdGhlIGZpcnN0IGVsZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICBwb29sT2ZBdHRhY2suZ3JpZHMuc3BsaWNlKHBvb2xPZkF0dGFjay5ncmlkcy5pbmRleE9mKGZpcnN0UHJpb3JpdHkpLCAxKTsgLy8gZWFjaCB0aW1lIGl0IGF0dGFja3MsIHRoZSBncmlkcyBhcnJheSBsZW5ndGggcmVkdWNlcyBieSAxXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0UHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBsYXN0IGF0dGFjayBkb2VzIG5vdCBjb250YWluIGEgc2hpcFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eUxhbmUubGVuZ3RoID09IDApIHsgLy8gYXR0YWNrcyByYW5kb21seSBpZiBwcmlvcml0eSBsYW5lIGlzIGVtcHR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21Db29yZGluYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcHJpb3JpdGl6ZSBhdHRhY2tzIGluIHRoZSBwcmlvcml0eSBsYW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdFByaW9yaXR5ID0gcHJpb3JpdHlMYW5lWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYW5lLnNwbGljZSgwLCAxKTsgLy8gcG9wIHRoZSBmaXJzdCBlbGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ2V0QXR0YWNrTG9nKCkuZmluZChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUgPT0gZmlyc3RQcmlvcml0eSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvb2xPZkF0dGFjay5ncmlkcy5zcGxpY2UocG9vbE9mQXR0YWNrLmdyaWRzLmluZGV4T2YoZmlyc3RQcmlvcml0eSksIDEpOyAvLyBlYWNoIHRpbWUgaXQgYXR0YWNrcywgdGhlIGdyaWRzIGFycmF5IGxlbmd0aCByZWR1Y2VzIGJ5IDFcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdFByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21Db29yZGluYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVBZGphY2VudENvb3JkaW5hdGVzIChjb29yZGluYXRlKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyR3JpZDtcbiAgICAgICAgICAgICAgICBsZXQgYWxwaGFiZXRHcmlkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyR3JpZCA9IGNvb3JkaW5hdGUuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgIGFscGhhYmV0R3JpZCA9IGNvb3JkaW5hdGUuc2xpY2UoMiwgMyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyR3JpZCA9IGNvb3JkaW5hdGUuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGFscGhhYmV0R3JpZCA9IGNvb3JkaW5hdGUuc2xpY2UoMSwgMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dENvb3JkaW5hdGVzID0gW107XG5cbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyR3JpZE5ldztcbiAgICAgICAgICAgICAgICBsZXQgYWxwaGFiZXRHcmlkTmV3O1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gc291dGggZ3JpZFxuICAgICAgICAgICAgICAgIG51bWJlckdyaWROZXcgPSBOdW1iZXIobnVtYmVyR3JpZCkgKyAxO1xuICAgICAgICAgICAgICAgIGFscGhhYmV0R3JpZE5ldyA9IGFscGhhYmV0R3JpZDsgXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IG51bWJlckdyaWROZXcgKyBhbHBoYWJldEdyaWROZXc7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyR3JpZE5ldyA+IDAgJiYgbnVtYmVyR3JpZE5ldyA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dENvb3JkaW5hdGVzLnB1c2gobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGVhc3QgZ3JpZFxuICAgICAgICAgICAgICAgIG51bWJlckdyaWROZXcgPSBudW1iZXJHcmlkO1xuICAgICAgICAgICAgICAgIGFscGhhYmV0R3JpZE5ldyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWxwaGFiZXRHcmlkLmNoYXJDb2RlQXQoMCkgKyAxKTsgLy8gY29udmVydCB0byBVbmljb2RlIChBU0NJSSksIHVwZGF0ZSBVbmljb2RlIHZhbHVlLCBjb252ZXJ0IHRvIENoYXJhY3RlclxuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBudW1iZXJHcmlkTmV3ICsgYWxwaGFiZXRHcmlkTmV3O1xuXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhYmV0R3JpZE5ldy5jaGFyQ29kZUF0KDApID49IDY1ICYmIGFscGhhYmV0R3JpZE5ldy5jaGFyQ29kZUF0KDApIDw9IDc0KSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dENvb3JkaW5hdGVzLnB1c2gobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5vcnRoIGdyaWRcbiAgICAgICAgICAgICAgICBudW1iZXJHcmlkTmV3ID0gTnVtYmVyKG51bWJlckdyaWQpIC0gMTtcbiAgICAgICAgICAgICAgICBhbHBoYWJldEdyaWROZXcgPSBhbHBoYWJldEdyaWQ7IFxuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBudW1iZXJHcmlkTmV3ICsgYWxwaGFiZXRHcmlkTmV3O1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlckdyaWROZXcgPiAwICYmIG51bWJlckdyaWROZXcgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRDb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlc3QgZ3JpZFxuICAgICAgICAgICAgICAgIG51bWJlckdyaWROZXcgPSBOdW1iZXIobnVtYmVyR3JpZCk7XG4gICAgICAgICAgICAgICAgYWxwaGFiZXRHcmlkTmV3ID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldEdyaWQuY2hhckNvZGVBdCgwKSAtIDEpOyAvLyBjb252ZXJ0IHRvIFVuaWNvZGUgKEFTQ0lJKSwgdXBkYXRlIFVuaWNvZGUgdmFsdWUsIGNvbnZlcnQgdG8gQ2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IG51bWJlckdyaWROZXcgKyBhbHBoYWJldEdyaWROZXc7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxwaGFiZXRHcmlkTmV3LmNoYXJDb2RlQXQoMCkgPj0gNjUgJiYgYWxwaGFiZXRHcmlkTmV3LmNoYXJDb2RlQXQoMCkgPD0gNzQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0Q29vcmRpbmF0ZXMucHVzaChuZXdDb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0Q29vcmRpbmF0ZXM7IC8vIGFycmF5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUgKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byA5OVxuICAgICAgICAgICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sT2ZBdHRhY2suZ3JpZHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9IHBvb2xPZkF0dGFjay5ncmlkc1tyYW5kb21OdW1iZXJdO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBlYWNoIHRpbWUgaXQgYXR0YWNrcywgdGhlIGdyaWRzIGFycmF5IGxlbmd0aCByZWR1Y2VzIGJ5IDFcbiAgICAgICAgICAgICAgICBwb29sT2ZBdHRhY2suZ3JpZHMuc3BsaWNlKHBvb2xPZkF0dGFjay5ncmlkcy5pbmRleE9mKHBvb2xPZkF0dGFjay5ncmlkc1tyYW5kb21OdW1iZXJdKSwgMSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgcHJpb3JpdHlMYW5lLCBnZXRDb29yZGluYXRlLCByZXNldFByaW9yaXR5TGFuZSB9O1xuICAgIH0pKCk7XG5cblxuICAgIGNvbnN0IHBsYXllcnMgPSB7IHBsYXllcjEsIHBsYXllcjIgfTtcblxuICAgIGxldCB0dXJuOyAvLyBUT0RPXG5cbiAgICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcblxuICAgIGNvbnN0IHNldFR1cm4gPSAocGxheWVyKSA9PiB0dXJuID0gcGxheWVyO1xuXG4gICAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdldFR1cm4oKSA9PSBnZXROYW1lKHBsYXllcjEpKSB7XG4gICAgICAgICAgICBzZXRUdXJuKGdldE5hbWUocGxheWVyMikpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldFR1cm4oKSA9PSBnZXROYW1lKHBsYXllcjIpKSB7XG4gICAgICAgICAgICBzZXRUdXJuKGdldE5hbWUocGxheWVyMSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcnMsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIHNldFR1cm4sXG4gICAgICAgIGdldFR1cm4sXG4gICAgICAgIHN3aXRjaFR1cm4sXG4gICAgICAgIHJlc2V0UG9vbCxcbiAgICAgICAgY29tcHV0ZXJBdHRhY2tcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZ2FtZUludGVyZmFjZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgZ2FtZU1vZGU7XG4gICAgY29uc3Qgc2V0TW9kZSA9IChtb2RlKSA9PiBnYW1lTW9kZSA9IG1vZGU7XG4gICAgY29uc3QgZ2V0TW9kZSA9ICgpID0+IGdhbWVNb2RlO1xuXG4gICAgY29uc3QgY29uZmlybVNoaXBMYXlvdXQgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IG1vZGUgPSBnZXRNb2RlKCk7XG5cbiAgICAgICAgaWYgKG1vZGUgPT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRE9NSW50ZXJmYWNlLnNoaXBSYW5kb21pemVyKCk7XG5cbiAgICAgICAgICAgIHByZXBhcmVGb3JHYW1lKCk7IC8vIGRpcmVjdGx5IGdvIHRvIGdhbWUgcHJlcFxuXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSAnY3VzdG9taXplJykge1xuICAgICAgICAgICAgLy8gZW50ZXIgZHJhZyBhbmQgZHJvcCBjdXN0b21pemF0aW9uIG1vZGVcbiAgICAgICAgICAgIERPTUludGVyZmFjZS5jdXN0b21pemF0aW9uTW9kZS5nYW1lYm9hcmQuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBsYXkgdGhlIHNoaXBzLCBwcmVwYXJlIHRoZSBnYW1lYm9hcmRzIGluIHRoaXMgc3RlcFxuICAgIGNvbnN0IHByZXBhcmVGb3JHYW1lID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBtb2RlID0gZ2V0TW9kZSgpO1xuXG4gICAgICAgIGlmIChtb2RlID09ICdyYW5kb20nKSB7IFxuXG4gICAgICAgICAgICAvLyBwbGFjZSBzaGlwcyBvbiBib3RoIGJvYXJkc1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKFsnMUEnLCAnMUInLCAnMUMnLCAnMUQnLCAnMUUnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoWycyQScsICcyQicsICcyQycsICcyRCddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzNBJywgJzNCJywgJzNDJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKFsnNEEnLCAnNEInLCAnNEMnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoWyc1QScsICc1QiddKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoWycxQScsICcxQicsICcxQycsICcxRCcsICcxRSddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzJBJywgJzJCJywgJzJDJywgJzJEJ10pO1xuICAgICAgICAgICAgcGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKFsnM0EnLCAnM0InLCAnM0MnXSk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoWyc0QScsICc0QicsICc0QyddKTtcbiAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChbJzVBJywgJzVCJ10pO1xuXG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGdhbWUgYnV0dG9uXG4gICAgICAgICAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld2dhbWUnKTtcbiAgICAgICAgICAgIG5ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXQgR2FtZSc7IC8vIGNoYW5nZSBuZXcgZ2FtZSBidXR0b24gdG8gcmVzZXQgZ2FtZVxuICAgICAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWVJbnRlcmZhY2UucmVzZXRHYW1lKCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSAnY3VzdG9taXplJykge1xuICAgICAgICAgICAgbGV0IGdhcmFnZSA9IERPTUludGVyZmFjZS5jdXN0b21pemF0aW9uTW9kZS5zaGlwSGFyYm91ci5nZXRHYXJhZ2UoKTtcblxuICAgICAgICAgICAgZ2FyYWdlLmZvckVhY2goc2hpcENvb3JkaW5hdGVzID0+IHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHBsYXllci5zZXRUdXJuKHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjEpKTsgLy8gc2V0IHRoZSBjdXJyZW50IHR1cm5cblxuICAgICAgICBzdGFydEdhbWUoKTtcblxuICAgIH07XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IG1vZGUgPSBnZXRNb2RlKCk7XG5cbiAgICAgICAgaWYgKG1vZGUgPT0gJ2N1c3RvbWl6ZScpIHtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIGN1c3RvbWl6YXRpb24gbW9kZSBET00gZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpO1xuICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uQnV0dG9ucycpO1xuICAgICAgICAgICAgY29uc3QgaW5mb1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9QYW5lbCcpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBwbGF5ZXIxLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLnJlbW92ZUNoaWxkKHBsYXllcjEuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGNoaWxkID0gcGxheWVyMS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb25CdXR0b25zLnJlbW92ZSgpO1xuICAgICAgICAgICAgaW5mb1BhbmVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW50ZXIgZ2FtZVxuICAgICAgICBET01JbnRlcmZhY2UuZ2FtZU1vZGUuZ2FtZWJvYXJkLmNyZWF0ZSgpO1xuICAgICAgICBET01JbnRlcmZhY2UuZ2FtZU1vZGUuZ2FtZWJvYXJkLnJlbmRlcigpO1xuICAgICAgICBET01JbnRlcmZhY2UuZ2FtZU1vZGUuZ2FtZWJvYXJkLmRpc3BsYXlDdXJyZW50VHVybigpO1xuXG4gICAgfTtcblxuXG4gICAgY29uc3QgaXNFbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnJyk7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9ICdHYW1lIGVuZGVkLiBDb21wdXRlciB3aW5zISc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9ICdHYW1lIGVuZGVkLiBZb3Ugd2luISc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHsgLy8gdGhlIGV4dGVudCBvZiByZXNldGluZyBhIGdhbWVcbiAgICBcbiAgICAgICAgLy8gcmVzZXQgYXR0YWNrIGxvZ1xuICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIxLmdhbWVib2FyZC5yZXNldEF0dGFja0xvZygpO1xuICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldEF0dGFja0xvZygpO1xuXG4gICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLnJlc2V0U2hpcEhpdFN0YXR1cygpO1xuICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5yZXNldFNoaXBIaXRTdGF0dXMoKTtcblxuICAgICAgICBET01JbnRlcmZhY2UuZ2FtZU1vZGUuZ2FtZWJvYXJkLmNsZWFyQXR0YWNrTW92ZXMoKTsgLy8gY2xlYXIgdGhlIGF0dGFjayBtb3ZlcyBvbiBET01cblxuICAgICAgICAvLyByZXNldCB0aGUgcHJpb3JpdHkgbGFuZSBpbiBjb21wdXRlciBhdHRhY2tzXG4gICAgICAgIHBsYXllci5jb21wdXRlckF0dGFjay5yZXNldFByaW9yaXR5TGFuZSgpO1xuXG4gICAgICAgIC8vIHNldCB0dXJuIHRvIHBsYXllclxuICAgICAgICBwbGF5ZXIuc2V0VHVybihwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIxKSk7XG4gICAgICAgIERPTUludGVyZmFjZS5nYW1lTW9kZS5nYW1lYm9hcmQuZGlzcGxheUN1cnJlbnRUdXJuKCk7XG5cbiAgICB9O1xuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TW9kZSxcbiAgICAgICAgc2V0TW9kZSxcbiAgICAgICAgY29uZmlybVNoaXBMYXlvdXQsXG4gICAgICAgIHByZXBhcmVGb3JHYW1lLFxuICAgICAgICBzdGFydEdhbWUsXG4gICAgICAgIGlzRW5kR2FtZSxcbiAgICAgICAgcmVzZXRHYW1lXG4gICAgfTtcblxufSkoKTtcblxuY29uc3QgRE9NSW50ZXJmYWNlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGxhbmRpbmdQYWdlID0gKCgpID0+IHtcbiAgICAgICAgLy8gc2ltcGxlIGVmZmVjdHMgZm9yIHRoZSB3ZWxjb21lIHRleHRcbiAgICAgICAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZVRleHQnKTtcblxuICAgICAgICBjb25zdCB3ZWxjb21lVGV4dF9iYXR0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZVRleHQgLmJhdHRsZScpO1xuICAgICAgICBjb25zdCB3ZWxjb21lVGV4dF9zaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWVUZXh0IC5zaGlwJyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQYXR0ZXJuID0gMTtcblxuICAgICAgICBsZXQgYWx0ZXJuYXRpbmdQYXR0ZXJucyA9IHNldEludGVydmFsKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXR0ZXJuID09IDEpIHtcbiAgICAgICAgICAgICAgICBzaG93UGF0dGVybjEoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0dGVybiA9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYXR0ZXJuID09IDIpIHtcbiAgICAgICAgICAgICAgICBzaG93UGF0dGVybjIoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0dGVybiA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgMTAwMCk7XG5cblxuICAgICAgICBmdW5jdGlvbiBzaG93UGF0dGVybjEgKCkge1xuICAgICAgICAgICAgICAgIHdlbGNvbWVUZXh0X2JhdHRsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgd2VsY29tZVRleHRfYmF0dGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2JhdHRsZScpO1xuICAgICAgICAgICAgICAgIHdlbGNvbWVUZXh0X3NoaXAuY2xhc3NMaXN0LmFkZCgnYmF0dGxlJyk7XG4gICAgICAgICAgICAgICAgd2VsY29tZVRleHRfc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93UGF0dGVybjIgKCkge1xuICAgICAgICAgICAgICAgIHdlbGNvbWVUZXh0X2JhdHRsZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgd2VsY29tZVRleHRfYmF0dGxlLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZScpO1xuICAgICAgICAgICAgICAgIHdlbGNvbWVUZXh0X3NoaXAuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlJyk7XG4gICAgICAgICAgICAgICAgd2VsY29tZVRleHRfc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Z2FtZScpO1xuICAgICAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYWx0ZXJuYXRpbmdQYXR0ZXJucyk7XG5cbiAgICAgICAgICAgIHdlbGNvbWVUZXh0LnJlbW92ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1c2VyRm9ybS5zaG93KCk7XG5cbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBcbiAgICB9KSgpO1xuXG5cbiAgICBjb25zdCB1c2VyRm9ybSA9ICgoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgY29uc3QgdXNlcmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcmZvcm0nKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtUm93MS5jbGFzc0xpc3QuYWRkKCdmb3JtUm93Jyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpbnB1dExhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwbGF5ZXJOYW1lJyk7XG4gICAgICAgICAgICBpbnB1dExhYmVsMS50ZXh0Q29udGVudCA9ICdwbGF5ZXIgbmFtZSc7XG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQxLmlkID0gJ3BsYXllck5hbWUnO1xuICAgICAgICAgICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgICAgICAgICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbDEpO1xuICAgICAgICAgICAgZm9ybVJvdzEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1Sb3cyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Sb3cnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBtb2RlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2hpcE1vZGUnKTtcbiAgICAgICAgICAgIG1vZGVMYWJlbC50ZXh0Q29udGVudCA9ICdzaGlwIG1vZGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBtb2RlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmlkID0gJ3NoaXBNb2RlJztcbiAgICAgICAgICAgIG1vZGVTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ1NoaXAgTW9kZScpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24xLnZhbHVlID0gJ3JhbmRvbSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMS50ZXh0Q29udGVudCA9ICdyYW5kb20nO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kZU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1vZGVPcHRpb24yLnZhbHVlID0gJ2N1c3RvbWl6ZSc7XG4gICAgICAgICAgICBtb2RlT3B0aW9uMi50ZXh0Q29udGVudCA9ICdjdXN0b21pemUnO1xuICAgIFxuICAgICAgICAgICAgbW9kZVNlbGVjdC5hcHBlbmRDaGlsZChtb2RlT3B0aW9uMSk7XG4gICAgICAgICAgICBtb2RlU2VsZWN0LmFwcGVuZENoaWxkKG1vZGVPcHRpb24yKTtcbiAgICBcbiAgICAgICAgICAgIGZvcm1Sb3cyLmFwcGVuZENoaWxkKG1vZGVMYWJlbCk7XG4gICAgICAgICAgICBmb3JtUm93Mi5hcHBlbmRDaGlsZChtb2RlU2VsZWN0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgICAgICAgICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTsgLy8gZGVhY3RpdmF0ZSB0aGUgSFRNTCBkZWZhdWx0IHZhbGlkYXRpb25zXG4gICAgXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgYSBkcm9wZG93biBtZW51IHVzaW5nIHByZXZpb3VzIHByYWN0aWNlIG1vZHVsZVxuICAgICAgICAgICAgLy8gYnV0IGZpcnN0LCBicmFuY2ggdGhhdCBtb2R1bGUgdG8gYWxsb3cgZm9yIGlucHV0IHBhcmFtZXRlcnMgZmlyc3RcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdGJ1dHRvbic7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQhJztcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIHVzZXJmb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIFxuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc2VudFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gc2V0IHBsYXllcjEncyBuYW1lXG4gICAgICAgICAgICAgICAgcGxheWVyLnNldE5hbWUoaW5wdXQxLnZhbHVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWxsb3cgdGhlIGZvcm0gdG8gc3VibWl0IGlmIHRoZSBwbGF5ZXIncyBuYW1lIGlzIGVtcHR5XG4gICAgICAgICAgICAgICAgLy8gZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dDEudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAvLyBlbnRlciBpbnRvIHRoZSBzZWxlY3RlZCBzaGlwIG1vZGVcbiAgICAgICAgICAgICAgICAvLyBnbyBpbnRvIGEgdHJhbnNpdGlvbiBwYWdlIHdoZXJlIHRoZSB1c2VyIGVpdGhlciBzZWUgYSByYW5kb21pemVkIHNoaXAgYm9hcmQgb3IgYSBib2FyZCBhbGxvd2luZyBmb3IgZHJhZyBhbmQgZHJvcCBzaGlwc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlU2VsZWN0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5zZXRNb2RlKG1vZGUpOyAvLyBzZXQgdGhlIGdhbWVNb2RlXG4gICAgXG4gICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5jb25maXJtU2hpcExheW91dCgpOyAvLyBwcm9jZWVkIHRvIGdhbWUgZGV0YWlsc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7IC8vIHJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBET01cblxuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93XG4gICAgICAgIH07XG5cbiAgICB9KSgpO1xuXG4gICAgLy8gZ3JvdXAgYWxsIGdhbWVib2FyZCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRvZ2V0aGVyXG4gICAgY29uc3QgZ2FtZU1vZGUgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIxRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIyRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJET01zID0gW3BsYXllcjFET00sIHBsYXllcjJET01dO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRfSCA9IFsnJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9WID0gWycnLCAnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyRE9Ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRfSC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBncmlkX1YubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRfSFtqXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9IGdyaWRfVltrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdheGlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChncmlkX1Zba10gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSBncmlkX0hbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycsIGAke2dyaWRfSFtqXX0ke2dyaWRfVltrXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFpblNoaXAnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyRE9Nc1tpXS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcjFpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxX2lkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjJfaWQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBwbGF5ZXIxaWQudGV4dENvbnRlbnQgPSBwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyaWQudGV4dENvbnRlbnQgPSBwbGF5ZXIuZ2V0TmFtZShwbGF5ZXIucGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIHNoaXBzXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcGxheWVyIDEgXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjEgLmdyaWQnKTtcbiAgICAgICAgICAgICAgICBncmlkczEuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllcnMucGxheWVyMS5nYW1lYm9hcmQuZ3JpZHNbYGdyaWQtJHtjb29yZGluYXRlfWBdLmNvbnRhaW5TaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gJ1NoaXAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFpblNoaXAnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gcGxheWVyIDJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyMiAuZ3JpZCcpO1xuICAgICAgICAgICAgICAgIGdyaWRzMi5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmdhbWVib2FyZC5ncmlkc1tgZ3JpZC0ke2Nvb3JkaW5hdGV9YF0uY29udGFpblNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9ICdTaGlwJztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFpblNoaXAnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdldFR1cm4oKSA9PT0gcGxheWVyLmdldE5hbWUocGxheWVyLnBsYXllcnMucGxheWVyMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVJbnRlcmZhY2UuaXNFbmRHYW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrQ29tcHV0ZXIoZ3JpZCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZUludGVyZmFjZS5pc0VuZEdhbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF0dGFja1BsYXllcigpLCA1MDApOyAvLyB0cmlnZ2VyIHRoZSBjb21wdXRlciBhdHRhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF0dGFja0NvbXB1dGVyKGdyaWQsIGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBsYXllcnMucGxheWVyMi5nYW1lYm9hcmQuZ2V0QXR0YWNrTG9nKCkuZmluZChhdHRhY2tlZENvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZSA9PT0gYXR0YWNrZWRDb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGVhdGVkLiBwbHMgcmUtYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5ZXJzLnBsYXllcjEuYXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIGlmIChncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWluU2hpcCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdyZWNlaXZlZEF0dGFjaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWlzc2VkQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBsYXllci5zd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUN1cnJlbnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5pc0VuZEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBhdHRhY2tQbGF5ZXIoKSB7ICBcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWVycy5wbGF5ZXIyLmF0dGFjaygpOyAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFja0xvZyA9IHBsYXllci5wbGF5ZXJzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEF0dGFja0xvZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBhdHRhY2tMb2dbYXR0YWNrTG9nLmxlbmd0aCAtIDFdOyAvLyByZXRyaWV2ZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGF0dGFjayBsb2dcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyMSAuZ3JpZCcpO1xuICAgICAgICAgICAgICAgIGdyaWRzMS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnKSA9PT0gY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhaW5TaGlwJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgncmVjZWl2ZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtaXNzZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcGxheWVyLnN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q3VycmVudFR1cm4oKTtcbiAgICAgICAgICAgICAgICBnYW1lSW50ZXJmYWNlLmlzRW5kR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgZGlzcGxheUN1cnJlbnRUdXJuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgY3VycmVudCB0dXJuXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZycpO1xuICAgICAgICAgICAgICAgIG1zZy5jbGFzc0xpc3QuYWRkKCdnYW1lTW9kZScpO1xuICAgICAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9IGBjdXJyZW50IHR1cm46ICR7cGxheWVyLmdldFR1cm4oKX1gO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xlYXJBdHRhY2tNb3ZlcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIxIC5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMxLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgncmVjZWl2ZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIyIC5ncmlkJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHMyLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgncmVjZWl2ZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzZWRBdHRhY2snKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlLFxuICAgICAgICAgICAgICAgIHJlbmRlcixcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q3VycmVudFR1cm4sXG4gICAgICAgICAgICAgICAgY2xlYXJBdHRhY2tNb3Zlc1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdhbWVib2FyZFxuICAgICAgICB9O1xuXG4gICAgfSkoKTtcblxuXG4gICAgY29uc3QgY3VzdG9taXphdGlvbk1vZGUgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9ICgoKSA9PiB7IC8vIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgcmVsYXRlZCB0byB0aGUgZ2FtZWJvYXJkIERPTVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7IC8vIGNyZWF0ZSBhbiBlbXB0eSBib2FyZFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyMURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRfSCA9IFsnJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9WID0gWycnLCAnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkX0gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ3JpZF9WLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkX0hbal0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudGV4dENvbnRlbnQgPSBncmlkX1Zba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXhpcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JpZF9WW2tdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnRleHRDb250ZW50ID0gZ3JpZF9IW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F4aXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdjdXN0b21pemUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnLCBgJHtncmlkX0hbal19JHtncmlkX1Zba119YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjFET00uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIxaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMV9pZCcpO1xuICAgICAgICAgICAgICAgIHBsYXllcjFpZC50ZXh0Q29udGVudCA9IHBsYXllci5nZXROYW1lKHBsYXllci5wbGF5ZXJzLnBsYXllcjEpOyAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZnVuY3Rpb25CdXR0b25zJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24uaWQgPSAnY2xlYXJCdXR0b24nO1xuICAgICAgICAgICAgICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gJ2NsZWFyJztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0KCk7IC8vIHJlc2V0IGdhbWVib2FyZCwgc2hpcCBoYXJib3VyLCBhbmQgaW5mbyBwYW5lbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5pZCA9ICdjb25maXJtQnV0dG9uJztcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ2NvbmZpcm0nO1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxhY2Ugc2hpcHMgdG8gZ2FtZWJvYXJkIG9iamVjdCB3aXRoIHRoZSBnYXJhZ2Ugc2hpcHNcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZmFjZS5wcmVwYXJlRm9yR2FtZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Z2FtZScpO1xuICAgICAgICAgICAgICAgICAgICBuZXdHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2V0IEdhbWUnOyAvLyBjaGFuZ2UgbmV3IGdhbWUgYnV0dG9uIHRvIHJlc2V0IGdhbWVcbiAgICAgICAgICAgICAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWVJbnRlcmZhY2UucmVzZXRHYW1lKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25CdXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZ1bmN0aW9uQnV0dG9ucyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRQYW5lbC5zaG93KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRyYWdBbmREcm9wLmludm9rZSgpOyAgLy8gZW5hYmxlcyBkcmFnIGFuZCBkcm9wXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IHsgLy8gcmVzZXQgZ2FtZWJvYXJkIHRvIGVtcHR5IFxuXG4gICAgICAgICAgICAgICAgY2xlYXJBbGxTaGlwcygpOyAvLyBjbGVhciBzaGlwcyBmcm9tIGdhbWVib2FyZCBpbiBET01cbiAgICAgICAgICAgICAgICByZXNldFN0YXR1cygpOyAvLyByZXNldCBnYW1lYm9hcmQgc3RhdHVzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1CdXR0b24nKS5kaXNhYmxlZCA9IHRydWU7IC8vIGRpc2FibGUgdGhlIGNvbmZpcm0gYnV0dG9uXG4gICAgICAgICAgICAgICAgc2hpcEhhcmJvdXIucmVzZXQoKTsgLy8gcmVzZXQgc2hpcCBoYXJib3VyXG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudFBhbmVsLnJlZnJlc2goKTsgLy8gcmVzZXQgc2hpcCBwbGFjZW1lbnQgcGFuZWwgaW4gRE9NXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgcmVzZXQgZHJhZyBhbmQgZHJvcCBnYW1lYm9hcmQgc3RhdHVzXG4gICAgICAgICAgICAgICAgZHJhZ0FuZERyb3AucmVzZXQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNsZWFySW52YWxpZFNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29vcmRpbmF0ZXM9JyArIFwiJ1wiICsgY29vcmRpbmF0ZSArIFwiJ11cIik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZFNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkX2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWRTaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNsZWFyQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpO1xuICAgICAgICAgICAgICAgIGdyaWRzLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZF9ob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRfY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZFNoaXAnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IGlzQ29tcGxldGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldFN0YXR1c1RvQ29tcGxldGUgPSAoKSA9PiBpc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXRTdGF0dXMgPSAoKSA9PiBpc0NvbXBsZXRlID0gZmFsc2U7XG5cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjcmVhdGUsXG4gICAgICAgICAgICAgICAgY2xlYXJJbnZhbGlkU2hpcCxcbiAgICAgICAgICAgICAgICBjbGVhckFsbFNoaXBzLFxuICAgICAgICAgICAgICAgIHNldFN0YXR1c1RvQ29tcGxldGUsXG4gICAgICAgICAgICAgICAgZ2V0U3RhdHVzXG4gICAgICAgICAgICB9OyAgXG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICAvLyBkcmFnIGFuZCBkcm9wIGltcGxlbWVudGF0aW9uXG4gICAgICAgIGNvbnN0IGRyYWdBbmREcm9wID0gKCgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZFN0YXR1cyA9IGdhbWVib2FyZC5nZXRTdGF0dXMoKTtcblxuICAgICAgICAgICAgY29uc3QgaW52b2tlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBheGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF4aXMnKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNNb3VzZWRvd24gPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBncmlkcy5mb3JFYWNoKGdyaWQgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZWJvYXJkU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkX2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTW91c2Vkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZF9jbGljaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUHJvY2Vzc29yLnB1c2hJbihncmlkLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycpKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZWJvYXJkU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdncmlkX2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVib2FyZFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlRXZlbnQoZSk7IC8vIG90aGVyIHRleHRzIHdvbid0IGdldCBzZWxlY3RlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdXNlZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkX2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFByb2Nlc3Nvci5wdXNoSW4oZ3JpZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZXMnKSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lYm9hcmRTdGF0dXMpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcENvb3JkaW5hdGVzID0gc2hpcFByb2Nlc3Nvci5nZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBzaGlwUHJvY2Vzc29yLmNoZWNrVmFsaWRpdHkoY3VycmVudFNoaXBDb29yZGluYXRlcyk7IC8vIGludm9rZSBvbmNlIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwdXQgaW4gdGhlIGFycmF5IG9mIHRoZSBjdXJyZW50IHNoaXAgYXMgaW5wdXQgdG8gY2hlY2sgZm9yIHZhbGlkaXR5ICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwSGFyYm91ci5pc1BhcmtGdWxsKCkpIHsgLy8gZmlyc3QgY2hlY2sgd2hldGhlciB0aGUgcGFyayBpcyBhbHJlYWR5IGZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoJ3Vuc3VjY2Vzc2Z1bFBhcmtpbmcnLCAnUGFyayBpcyBmdWxsIScpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5jbGVhckludmFsaWRTaGlwKGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIHBhcmsgaXMgbm90IHlldCBmdWxsXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZC52YWxpZGl0eSkgeyAvLyBpbnZhbGlkIHNoaXBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnZhbGlkTWVzc2FnZSA9IGlzVmFsaWQuaW52YWxpZFRlc3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZSgnaW52YWxpZFNoaXAnLCBpbnZhbGlkTWVzc2FnZSk7IC8vIFRPRE8uIEltcGxlbWVudCB0aGUgZGlmZmVyZW50IGtpbmQgb2YgZXJyb3JzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5jbGVhckludmFsaWRTaGlwKGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyB2YWxpZCBzaGlwLiBwcm9jZWVkIHRvIHBhcmtpbmcgYXR0ZW1wdFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFya0F0dGVtcHQgPSBzaGlwSGFyYm91ci5wYXJrU2hpcChjdXJyZW50U2hpcENvb3JkaW5hdGVzKTsgLy8gaW52b2tlIG9uY2Ugb25seVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtBdHRlbXB0LnBhcmtTdGF0dXMpIHsgLy8gcGFya2luZyBzdWNjZXNzZnVsXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXBDb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29vcmRpbmF0ZXM9JyArIFwiJ1wiICsgY29vcmRpbmF0ZSArIFwiJ11cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndmFsaWRTaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBIYXJib3VyLmlzUGFya0Z1bGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7IC8vIGFjdGl2YXRlcyBjb25maXJtQnV0dG9uIG9ubHkgd2hlbiB0aGUgU2hpcCBQYXJrIGlzIGZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhY3RpdmF0ZSBmdXJ0aGVyIGdhbWVib2FyZCBlZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5zZXRTdGF0dXNUb0NvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZFN0YXR1cyA9IGdhbWVib2FyZC5nZXRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwYXJraW5nIHVuc3VjY2Vzc2Z1bFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoJ3Vuc3VjY2Vzc2Z1bFBhcmtpbmcnLCBwYXJrQXR0ZW1wdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQuY2xlYXJJbnZhbGlkU2hpcChjdXJyZW50U2hpcENvb3JkaW5hdGVzKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRQYW5lbC5yZWZyZXNoKCk7IC8vIHJlZnJlc2ggY291bnRlciBhdCBET01cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUHJvY2Vzc29yLnJlc2V0Q3VycmVudFNoaXBDb29yZGluYXRlcygpOyAvLyB3aXBlIG91dCB0aGUgYXJyYXkgYXQgdGhlIGVuZCBvZiBlYWNoIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pOyAgXG4gICAgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yTWVzc2FnZSh0eXBlLCBtZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAndW5zdWNjZXNzZnVsUGFya2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbnZhbGlkU2hpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9IGAke21lc3NhZ2VzfSB0ZXN0KHMpIG5vdCBwYXNzZWRgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1zZy5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHBhdXNlRXZlbnQoZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcCBwcm9wYWdhdGluZyB0aGUgZXZlbnRzIGluIGNhcHR1cmluZyBhbmQgYnViYmxpbmcgcGhhc2VzXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRTdGF0dXMgPSBnYW1lYm9hcmQuZ2V0U3RhdHVzKCk7XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHJldHVybiB7IGludm9rZSwgcmVzZXQgfTtcblxuICAgICAgICB9KSgpO1xuICAgIFxuXG4gICAgICAgIC8vIGhlbHBlciBmb3IgdGhlIHNoaXAgcGxhY2VtZW50IHBhbmVsXG4gICAgICAgIGNvbnN0IHNoaXBIYXJib3VyID0gKCgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGdhcmFnZSA9IFtdOyAvLyBzYXZlIHRoZSB2YWxpZCBjcmVhdGVkIHNoaXBzIGhlcmVcblxuICAgICAgICAgICAgbGV0IHBhcmtpbmdTcGFjZSA9IHtcbiAgICAgICAgICAgICAgICBmaXZlOiAxLFxuICAgICAgICAgICAgICAgIGZvdXI6IDEsXG4gICAgICAgICAgICAgICAgdGhyZWU6IDIsXG4gICAgICAgICAgICAgICAgdHdvOiAxLFxuICAgICAgICAgICAgICAgIGZ1bGw6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBnZXRQYXJraW5nU3BhY2UgPSAoc2l6ZSkgPT4gcGFya2luZ1NwYWNlW3NpemVdO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcGFya1NoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmICghcGFya2luZ1NwYWNlLmZ1bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBzaGlwIHNpemUgaW4gdGhlIHBhcmtpbmcgc3BhY2UgYW5kIHRoZW4gcmVkdWNlIGl0IGJ5IG9uZVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFya2luZ1NwYWNlLmZpdmUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UuZml2ZSA9IHBhcmtpbmdTcGFjZS5maXZlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJhZ2UucHVzaChjb29yZGluYXRlcyk7IC8vIHB1c2ggaW50byB0aGUgZ2FyYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ3NpemUtNSBmdWxseSBwYXJrZWQhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJraW5nU3BhY2UuZm91ciAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZS5mb3VyID0gcGFya2luZ1NwYWNlLmZvdXIgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcmFnZS5wdXNoKGNvb3JkaW5hdGVzKTsgLy8gcHVzaCBpbnRvIHRoZSBnYXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnc2l6ZS00IGZ1bGx5IHBhcmtlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmtpbmdTcGFjZS50aHJlZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZS50aHJlZSA9IHBhcmtpbmdTcGFjZS50aHJlZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FyYWdlLnB1c2goY29vcmRpbmF0ZXMpOyAvLyBwdXNoIGludG8gdGhlIGdhcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdzaXplLTMgZnVsbHkgcGFya2VkISc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFya2luZ1NwYWNlLnR3byAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtpbmdTcGFjZS50d28gPSBwYXJraW5nU3BhY2UudHdvIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJrU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJhZ2UucHVzaChjb29yZGluYXRlcyk7IC8vIHB1c2ggaW50byB0aGUgZ2FyYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmtTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ3NpemUtMiBmdWxseSBwYXJrZWQhJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJraW5nU3BhY2UuZml2ZSA9PSAwICYmIHBhcmtpbmdTcGFjZS5mb3VyID09IDAgJiYgcGFya2luZ1NwYWNlLnRocmVlID09IDAgJiYgcGFya2luZ1NwYWNlLnR3byA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJraW5nU3BhY2UuZnVsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFya1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1BhcmsgaXMgZnVsbCEnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHBhcmtTdGF0dXMsIG1lc3NhZ2UgfTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaXNQYXJrRnVsbCA9ICgpID0+IHBhcmtpbmdTcGFjZS5mdWxsO1xuXG4gICAgICAgICAgICBjb25zdCBnZXRHYXJhZ2UgPSAoKSA9PiBnYXJhZ2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGdhcmFnZVxuICAgICAgICAgICAgICAgIGdhcmFnZSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHBhcmtpbmcgc3BhY2UgYWxsb3dhbmNlXG4gICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBmaXZlOiAxLFxuICAgICAgICAgICAgICAgICAgICBmb3VyOiAxLFxuICAgICAgICAgICAgICAgICAgICB0aHJlZTogMixcbiAgICAgICAgICAgICAgICAgICAgdHdvOiAxLFxuICAgICAgICAgICAgICAgICAgICBmdWxsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNQYXJrRnVsbCxcbiAgICAgICAgICAgICAgICBnZXRHYXJhZ2UsXG4gICAgICAgICAgICAgICAgcGFya2luZ1NwYWNlLFxuICAgICAgICAgICAgICAgIGdldFBhcmtpbmdTcGFjZSxcbiAgICAgICAgICAgICAgICBwYXJrU2hpcCxcbiAgICAgICAgICAgICAgICByZXNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG5cbiAgICAgICAgLy8gaGVscGVyIGJlZm9yZSBwdXNoaW5nIGEgc2hpcCBvbnRvIHRoZSBjdXN0b21pemF0aW9uIG1vZGUgZ2FtZWJvYXJkXG4gICAgICAgIGNvbnN0IHNoaXBQcm9jZXNzb3IgPSAoKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudFNoaXBDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBnZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzID0gKCkgPT4gY3VycmVudFNoaXBDb29yZGluYXRlcztcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHB1c2hJbiA9IChjb29yZGluYXRlKSA9PiBjdXJyZW50U2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2V0Q3VycmVudFNoaXBDb29yZGluYXRlcyA9ICgpID0+IGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25kaXRpb24gY2hlY2tzXG4gICAgICAgICAgICAgICAgbGV0IGxlbmd0aE9LID0gbGVuZ3RoVGVzdChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsYXBPSyA9IG92ZXJsYXBUZXN0KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgc2hhcGVPSyA9IHNoYXBlVGVzdChjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW52YWxpZFRlc3RzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkaXR5O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsZW5ndGhPSykge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkVGVzdHMucHVzaCgnbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFvdmVybGFwT0spIHtcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZFRlc3RzLnB1c2goJ292ZXJsYXAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNoYXBlT0spIHtcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZFRlc3RzLnB1c2goJ3NoYXBlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aE9LICYmIG92ZXJsYXBPSyAmJiBzaGFwZU9LKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkaXR5LCBpbnZhbGlkVGVzdHMgfTsgLy8gcmV0dXJuIHZhbHVlcyBmb3IgdGhpcyBmdW5jdGlvblxuXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsZW5ndGhUZXN0IChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZW5ndGggdGVzdFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgMiB8fCBjb29yZGluYXRlcy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb3ZlcmxhcFRlc3QgKGNvb3JpbmRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgY29vcmRpbmF0ZXMgY29uZmxpY3RzIHdpdGggdGhlIGNvb3JkaW5hdGVzIHRoYXQgYXJlIGluIHRoZSBnYXJhZ2VcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzT3ZlcmxhcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIYXJib3VyLmdldEdhcmFnZSgpLmZvckVhY2goc2hpcENvb3JkaW5hdGVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLnNvbWUoc2hpcENvb3JkaW5hdGUgPT4gc2hpcENvb3JkaW5hdGUgPT0gY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc092ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hhcGVUZXN0IChjb29yZGluYXRlcykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hhcGUgdGVzdFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtLmxlbmd0aCA9PSAzKSkgeyAvLyBmb3IgMy1jaGFyYWN0ZXIgY29vcmRpbmF0ZXMgKGkuZS4gMTBBIH4gMTBKKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbVswXSArIGl0ZW1bMV0gPT0gY29vcmRpbmF0ZXNbMF1bMF0gKyBjb29yZGluYXRlc1swXVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlcy5zb21lKGl0ZW0gPT4gaXRlbS5sZW5ndGggPT0gMykpIHsgLy8gY2FzZXMgd2l0aCBtaXhlZCAyLWNoYXJhY3RlciBhbmQgMy1jaGFyYWN0ZXJzIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW1baXRlbS5sZW5ndGggLSAxXSA9PSBjb29yZGluYXRlc1swXVtjb29yZGluYXRlc1swXS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlcy5ldmVyeShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDIpKSB7IC8vIHB1cmVseSAyLWNoYXJhY3RlciBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmV2ZXJ5KGl0ZW0gPT4gaXRlbVswXSA9PSBjb29yZGluYXRlc1swXVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuZXZlcnkoaXRlbSA9PiBpdGVtWzFdID09IGNvb3JkaW5hdGVzWzBdWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7IC8vIGkuZS4gb25lLWNoYXJhY3RlciBjb29yZGluYXRlLCBzaGFwZXMgdGhhdCBhcmUgbm90IHJlY3Rhbmd1bGFyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgcHVzaEluLFxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRTaGlwQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgcmVzZXRDdXJyZW50U2hpcENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIGNoZWNrVmFsaWRpdHlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50UGFuZWwgPSAoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIG1ha2UgYSBwYW5lbFxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50IC5nYW1lYm9hcmQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5mb1BhbmVsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93MS5jbGFzc0xpc3QuYWRkKCdzaXplLTUnKTtcbiAgICAgICAgICAgICAgICBpbmZvUm93MS50ZXh0Q29udGVudCA9IGBzaXplLTU6ICR7c2hpcEhhcmJvdXIuZ2V0UGFya2luZ1NwYWNlKCdmaXZlJyl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cyLmNsYXNzTGlzdC5hZGQoJ3NpemUtNCcpO1xuICAgICAgICAgICAgICAgIGluZm9Sb3cyLnRleHRDb250ZW50ID0gYHNpemUtNDogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ2ZvdXInKX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzMuY2xhc3NMaXN0LmFkZCgnc2l6ZS0zJyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzMudGV4dENvbnRlbnQgPSBgc2l6ZS0zOiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgndGhyZWUnKX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Sb3c0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzQuY2xhc3NMaXN0LmFkZCgnc2l6ZS0yJyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzQudGV4dENvbnRlbnQgPSBgc2l6ZS0yOiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgndHdvJyl9YDtcbiAgICBcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuYXBwZW5kQ2hpbGQoaW5mb1JvdzEpO1xuICAgICAgICAgICAgICAgIGluZm9QYW5lbC5hcHBlbmRDaGlsZChpbmZvUm93Mik7XG4gICAgICAgICAgICAgICAgaW5mb1BhbmVsLmFwcGVuZENoaWxkKGluZm9Sb3czKTtcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWwuYXBwZW5kQ2hpbGQoaW5mb1JvdzQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChpbmZvUGFuZWwpO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS01Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS00Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS0zJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb1JvdzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZS0yJyk7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzEudGV4dENvbnRlbnQgPSBgc2l6ZS01OiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgnZml2ZScpfWA7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzIudGV4dENvbnRlbnQgPSBgc2l6ZS00OiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgnZm91cicpfWA7XG4gICAgICAgICAgICAgICAgaW5mb1JvdzMudGV4dENvbnRlbnQgPSBgc2l6ZS0zOiAke3NoaXBIYXJib3VyLmdldFBhcmtpbmdTcGFjZSgndGhyZWUnKX1gO1xuICAgICAgICAgICAgICAgIGluZm9Sb3c0LnRleHRDb250ZW50ID0gYHNpemUtMjogJHtzaGlwSGFyYm91ci5nZXRQYXJraW5nU3BhY2UoJ3R3bycpfWA7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICAgIHJlZnJlc2hcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICAgICAgc2hpcEhhcmJvdXJcbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cbiAgICAvLyBUT0RPXG4gICAgY29uc3Qgc2hpcFJhbmRvbWl6ZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBhdmFpbGFibGUgc2hpcCBzaXplcyBmcm9tIHRoZSBzaGlwIGhhcmJvdXIgcGFya2luZyBzcGFjZVxuICAgICAgICBsZXQgcGFya2luZ1NwYWNlID0gY3VzdG9taXphdGlvbk1vZGUuc2hpcEhhcmJvdXIucGFya2luZ1NwYWNlO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHBhcmtpbmdTcGFjZSkpO1xuXG5cblxuXG5cblxuXG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2FtZU1vZGUsXG4gICAgICAgIGN1c3RvbWl6YXRpb25Nb2RlLFxuICAgICAgICBzaGlwUmFuZG9taXplclxuICAgIH07XG5cbn0pKCk7XG5cblxuZXhwb3J0IHtcbiAgICBzaGlwRmFjdG9yeSxcbiAgICBnYW1lYm9hcmRGYWN0b3J5LFxuICAgIHBsYXllclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=