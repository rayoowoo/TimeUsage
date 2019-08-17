/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/data/employedByGenderDataShaped.js":
/*!*******************************************************!*\
  !*** ./src/assets/data/employedByGenderDataShaped.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var employedByGender = exports.employedByGender = {
    "Personal care activities": {
        "activity": "Personal care activities",
        "category": "Y",
        "Men": {
            "2013": 8.88,
            "2014": 8.93,
            "2015": 8.99,
            "2016": 8.85,
            "2017": 8.96,
            "2018": 8.92
        },
        "Total (men and women)": {
            "2013": 9.1,
            "2014": 9.17,
            "2015": 9.2,
            "2016": 9.12,
            "2017": 9.21,
            "2018": 9.11
        },
        "Women": {
            "2013": 9.36,
            "2014": 9.42,
            "2015": 9.43,
            "2016": 9.41,
            "2017": 9.48,
            "2018": 9.31
        }
    },
    "Eating and drinking": {
        "activity": "Eating and drinking",
        "category": "Y",
        "Men": {
            "2013": 1.23,
            "2014": 1.19,
            "2015": 1.19,
            "2016": 1.17,
            "2017": 1.18,
            "2018": 1.24
        },
        "Total (men and women)": {
            "2013": 1.17,
            "2014": 1.14,
            "2015": 1.12,
            "2016": 1.12,
            "2017": 1.12,
            "2018": 1.15
        },
        "Women": {
            "2013": 1.11,
            "2014": 1.09,
            "2015": 1.04,
            "2016": 1.06,
            "2017": 1.05,
            "2018": 1.06
        }
    },
    "Household activities": {
        "activity": "Household activities",
        "category": "Y",
        "Men": {
            "2013": 1.21,
            "2014": 1.24,
            "2015": 1.22,
            "2016": 1.29,
            "2017": 1.23,
            "2018": 1.22
        },
        "Total (men and women)": {
            "2013": 1.56,
            "2014": 1.53,
            "2015": 1.54,
            "2016": 1.63,
            "2017": 1.55,
            "2018": 1.61
        },
        "Women": {
            "2013": 1.96,
            "2014": 1.85,
            "2015": 1.89,
            "2016": 2,
            "2017": 1.9,
            "2018": 2.02
        }
    },
    "Purchasing goods and services": {
        "activity": "Purchasing goods and services",
        "category": "Y",
        "Men": {
            "2013": 0.62,
            "2014": 0.52,
            "2015": 0.55,
            "2016": 0.61,
            "2017": 0.6,
            "2018": 0.56
        },
        "Total (men and women)": {
            "2013": 0.72,
            "2014": 0.65,
            "2015": 0.68,
            "2016": 0.67,
            "2017": 0.69,
            "2018": 0.67
        },
        "Women": {
            "2013": 0.83,
            "2014": 0.79,
            "2015": 0.82,
            "2016": 0.74,
            "2017": 0.79,
            "2018": 0.78
        }
    },
    "Caring for and helping household members": {
        "activity": "Caring for and helping household members",
        "category": "Y",
        "Men": {
            "2013": 0.95,
            "2014": 0.93,
            "2015": 0.89,
            "2016": 1.03,
            "2017": 0.93,
            "2018": 0.88
        },
        "Total (men and women)": {
            "2013": 1.19,
            "2014": 1.2,
            "2015": 1.17,
            "2016": 1.27,
            "2017": 1.21,
            "2018": 1.22
        },
        "Women": {
            "2013": 1.46,
            "2014": 1.48,
            "2015": 1.47,
            "2016": 1.52,
            "2017": 1.52,
            "2018": 1.58
        }
    },
    "Caring for and helping nonhousehold members": {
        "activity": "Caring for and helping nonhousehold members",
        "category": "Y",
        "Men": {
            "2013": 0.08,
            "2014": 0.09,
            "2015": 0.07,
            "2016": 0.1,
            "2017": 0.1,
            "2018": 0.1
        },
        "Total (men and women)": {
            "2013": 0.09,
            "2014": 0.1,
            "2015": 0.09,
            "2016": 0.1,
            "2017": 0.09,
            "2018": 0.11
        },
        "Women": {
            "2013": 0.1,
            "2014": 0.11,
            "2015": 0.12,
            "2016": 0.1,
            "2017": 0.09,
            "2018": 0.11
        }
    },
    "Working and work-related activities": {
        "activity": "Working and work-related activities",
        "category": "Y",
        "Men": {
            "2013": 6.43,
            "2014": 6.55,
            "2015": 6.57,
            "2016": 6.49,
            "2017": 6.35,
            "2018": 6.47
        },
        "Total (men and women)": {
            "2013": 5.64,
            "2014": 5.79,
            "2015": 5.85,
            "2016": 5.77,
            "2017": 5.71,
            "2018": 5.74
        },
        "Women": {
            "2013": 4.76,
            "2014": 4.96,
            "2015": 5.06,
            "2016": 5,
            "2017": 5.01,
            "2018": 4.97
        }
    },
    "Educational activities": {
        "activity": "Educational activities",
        "category": "Y",
        "Men": {
            "2013": 0.08,
            "2014": 0.11,
            "2015": 0.16,
            "2016": 0.1,
            "2017": 0.19,
            "2018": 0.11
        },
        "Total (men and women)": {
            "2013": 0.14,
            "2014": 0.17,
            "2015": 0.19,
            "2016": 0.15,
            "2017": 0.19,
            "2018": 0.16
        },
        "Women": {
            "2013": 0.2,
            "2014": 0.23,
            "2015": 0.21,
            "2016": 0.21,
            "2017": 0.18,
            "2018": 0.2
        }
    },
    "Organizational, civic, and religious activities": {
        "activity": "Organizational, civic, and religious activities",
        "category": "Y",
        "Men": {
            "2013": 0.27,
            "2014": 0.3,
            "2015": 0.28,
            "2016": 0.28,
            "2017": 0.25,
            "2018": 0.26
        },
        "Total (men and women)": {
            "2013": 0.28,
            "2014": 0.3,
            "2015": 0.29,
            "2016": 0.27,
            "2017": 0.27,
            "2018": 0.24
        },
        "Women": {
            "2013": 0.3,
            "2014": 0.29,
            "2015": 0.3,
            "2016": 0.27,
            "2017": 0.29,
            "2018": 0.22
        }
    },
    "Leisure and sports": {
        "activity": "Leisure and sports",
        "category": "Y",
        "Men": {
            "2013": 3.97,
            "2014": 3.91,
            "2015": 3.84,
            "2016": 3.85,
            "2017": 4.02,
            "2018": 3.92
        },
        "Total (men and women)": {
            "2013": 3.73,
            "2014": 3.68,
            "2015": 3.62,
            "2016": 3.62,
            "2017": 3.72,
            "2018": 3.65
        },
        "Women": {
            "2013": 3.46,
            "2014": 3.43,
            "2015": 3.38,
            "2016": 3.39,
            "2017": 3.39,
            "2018": 3.36
        }
    },
    "Telephone calls, mail, and email": {
        "activity": "Telephone calls, mail, and email",
        "category": "Y",
        "Men": {
            "2013": 0.06,
            "2014": 0.04,
            "2015": 0.07,
            "2016": 0.08,
            "2017": 0.05,
            "2018": 0.05
        },
        "Total (men and women)": {
            "2013": 0.09,
            "2014": 0.07,
            "2015": 0.09,
            "2016": 0.08,
            "2017": 0.07,
            "2018": 0.08
        },
        "Women": {
            "2013": 0.14,
            "2014": 0.11,
            "2015": 0.12,
            "2016": 0.08,
            "2017": 0.09,
            "2018": 0.1
        }
    },
    "Other activities": {
        "activity": "Other activities",
        "category": "Y",
        "Men": {
            "2013": 0.23,
            "2014": 0.19,
            "2015": 0.17,
            "2016": 0.16,
            "2017": 0.16,
            "2018": 0.26
        },
        "Total (men and women)": {
            "2013": 0.28,
            "2014": 0.21,
            "2015": 0.17,
            "2016": 0.19,
            "2017": 0.18,
            "2018": 0.28
        },
        "Women": {
            "2013": 0.33,
            "2014": 0.24,
            "2015": 0.17,
            "2016": 0.22,
            "2017": 0.2,
            "2018": 0.3
        }
    }
};

/***/ }),

/***/ "./src/assets/data/everyoneByDayShaped.js":
/*!************************************************!*\
  !*** ./src/assets/data/everyoneByDayShaped.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var everyoneByDay = exports.everyoneByDay = {
    "Personal care activities": {
        "activity": "Personal care activities",
        "Nonholiday weekdays": {
            "2008": 9.1,
            "2009": 9.2,
            "2010": 9.2,
            "2011": 9.24,
            "2012": 9.21,
            "2013": 9.3,
            "2014": 9.33,
            "2015": 9.42,
            "2016": 9.31,
            "2017": 9.33,
            "2018": 9.32
        },
        "Weekend days and holidays": {
            "2008": 10.07,
            "2009": 10.04,
            "2010": 10.11,
            "2011": 10.08,
            "2012": 10.13,
            "2013": 10.11,
            "2014": 10.16,
            "2015": 10.17,
            "2016": 10.21,
            "2017": 10.2,
            "2018": 10.18
        },
        "All days": {
            "2008": 9.585,
            "2009": 9.62,
            "2010": 9.655,
            "2011": 9.66,
            "2012": 9.67,
            "2013": 9.705,
            "2014": 9.745,
            "2015": 9.795,
            "2016": 9.76,
            "2017": 9.765,
            "2018": 9.75
        }
    },
    "Eating and drinking": {
        "activity": "Eating and drinking",
        "Nonholiday weekdays": {
            "2008": 1.18,
            "2009": 1.18,
            "2010": 1.2,
            "2011": 1.19,
            "2012": 1.19,
            "2013": 1.17,
            "2014": 1.13,
            "2015": 1.12,
            "2016": 1.12,
            "2017": 1.11,
            "2018": 1.12
        },
        "Weekend days and holidays": {
            "2008": 1.35,
            "2009": 1.33,
            "2010": 1.36,
            "2011": 1.37,
            "2012": 1.39,
            "2013": 1.37,
            "2014": 1.29,
            "2015": 1.33,
            "2016": 1.29,
            "2017": 1.34,
            "2018": 1.35
        },
        "All days": {
            "2008": 1.265,
            "2009": 1.255,
            "2010": 1.28,
            "2011": 1.28,
            "2012": 1.29,
            "2013": 1.27,
            "2014": 1.21,
            "2015": 1.225,
            "2016": 1.205,
            "2017": 1.225,
            "2018": 1.235
        }
    },
    "Household activities": {
        "activity": "Household activities",
        "Nonholiday weekdays": {
            "2008": 1.57,
            "2009": 1.7,
            "2010": 1.68,
            "2011": 1.63,
            "2012": 1.59,
            "2013": 1.65,
            "2014": 1.63,
            "2015": 1.71,
            "2016": 1.69,
            "2017": 1.65,
            "2018": 1.63
        },
        "Weekend days and holidays": {
            "2008": 2.08,
            "2009": 2.04,
            "2010": 2.06,
            "2011": 2.12,
            "2012": 2.08,
            "2013": 2.09,
            "2014": 2.11,
            "2015": 2.16,
            "2016": 2.14,
            "2017": 2.2,
            "2018": 2.13
        },
        "All days": {
            "2008": 1.825,
            "2009": 1.87,
            "2010": 1.87,
            "2011": 1.875,
            "2012": 1.835,
            "2013": 1.87,
            "2014": 1.87,
            "2015": 1.935,
            "2016": 1.915,
            "2017": 1.925,
            "2018": 1.88
        }
    },
    "Purchasing goods and services": {
        "activity": "Purchasing goods and services",
        "Nonholiday weekdays": {
            "2008": 0.71,
            "2009": 0.72,
            "2010": 0.71,
            "2011": 0.69,
            "2012": 0.68,
            "2013": 0.7,
            "2014": 0.69,
            "2015": 0.7,
            "2016": 0.71,
            "2017": 0.69,
            "2018": 0.67
        },
        "Weekend days and holidays": {
            "2008": 0.91,
            "2009": 0.87,
            "2010": 0.82,
            "2011": 0.81,
            "2012": 0.81,
            "2013": 0.84,
            "2014": 0.84,
            "2015": 0.85,
            "2016": 0.87,
            "2017": 0.79,
            "2018": 0.84
        },
        "All days": {
            "2008": 0.81,
            "2009": 0.795,
            "2010": 0.765,
            "2011": 0.75,
            "2012": 0.745,
            "2013": 0.77,
            "2014": 0.765,
            "2015": 0.775,
            "2016": 0.79,
            "2017": 0.74,
            "2018": 0.755
        }
    },
    "Caring for and helping household members": {
        "activity": "Caring for and helping household members",
        "Nonholiday weekdays": {
            "2008": 0.57,
            "2009": 0.57,
            "2010": 0.54,
            "2011": 0.54,
            "2012": 0.54,
            "2013": 0.56,
            "2014": 0.56,
            "2015": 0.54,
            "2016": 0.54,
            "2017": 0.55,
            "2018": 0.53
        },
        "Weekend days and holidays": {
            "2008": 0.44,
            "2009": 0.46,
            "2010": 0.43,
            "2011": 0.42,
            "2012": 0.44,
            "2013": 0.46,
            "2014": 0.49,
            "2015": 0.45,
            "2016": 0.47,
            "2017": 0.46,
            "2018": 0.47
        },
        "All days": {
            "2008": 0.505,
            "2009": 0.515,
            "2010": 0.485,
            "2011": 0.48,
            "2012": 0.49,
            "2013": 0.51,
            "2014": 0.525,
            "2015": 0.495,
            "2016": 0.505,
            "2017": 0.505,
            "2018": 0.5
        }
    },
    "Caring for and helping nonhousehold members": {
        "activity": "Caring for and helping nonhousehold members",
        "Nonholiday weekdays": {
            "2008": 0.22,
            "2009": 0.19,
            "2010": 0.2,
            "2011": 0.2,
            "2012": 0.17,
            "2013": 0.18,
            "2014": 0.17,
            "2015": 0.17,
            "2016": 0.21,
            "2017": 0.17,
            "2018": 0.2
        },
        "Weekend days and holidays": {
            "2008": 0.24,
            "2009": 0.26,
            "2010": 0.23,
            "2011": 0.23,
            "2012": 0.21,
            "2013": 0.22,
            "2014": 0.21,
            "2015": 0.23,
            "2016": 0.21,
            "2017": 0.22,
            "2018": 0.24
        },
        "All days": {
            "2008": 0.23,
            "2009": 0.225,
            "2010": 0.215,
            "2011": 0.215,
            "2012": 0.19,
            "2013": 0.20,
            "2014": 0.19,
            "2015": 0.20,
            "2016": 0.21,
            "2017": 0.195,
            "2018": 0.22
        }
    },
    "Working and work-related activities": {
        "activity": "Working and work-related activities",
        "Nonholiday weekdays": {
            "2008": 4.74,
            "2009": 4.5,
            "2010": 4.4,
            "2011": 4.49,
            "2012": 4.49,
            "2013": 4.41,
            "2014": 4.54,
            "2015": 4.47,
            "2016": 4.6,
            "2017": 4.58,
            "2018": 4.61
        },
        "Weekend days and holidays": {
            "2008": 1.38,
            "2009": 1.24,
            "2010": 1.33,
            "2011": 1.38,
            "2012": 1.29,
            "2013": 1.27,
            "2014": 1.38,
            "2015": 1.28,
            "2016": 1.26,
            "2017": 1.27,
            "2018": 1.14
        },
        "All days": {
            "2008": 3.06,
            "2009": 2.87,
            "2010": 2.865,
            "2011": 2.935,
            "2012": 2.89,
            "2013": 2.84,
            "2014": 2.96,
            "2015": 2.875,
            "2016": 2.93,
            "2017": 2.925,
            "2018": 2.875
        }
    },
    "Educational activities": {
        "activity": "Educational activities",
        "Nonholiday weekdays": {
            "2008": 0.61,
            "2009": 0.58,
            "2010": 0.6,
            "2011": 0.6,
            "2012": 0.63,
            "2013": 0.6,
            "2014": 0.53,
            "2015": 0.58,
            "2016": 0.6,
            "2017": 0.61,
            "2018": 0.58
        },
        "Weekend days and holidays": {
            "2008": 0.14,
            "2009": 0.21,
            "2010": 0.18,
            "2011": 0.18,
            "2012": 0.2,
            "2013": 0.18,
            "2014": 0.16,
            "2015": 0.19,
            "2016": 0.23,
            "2017": 0.2,
            "2018": 0.17
        },
        "All days": {
            "2008": 0.375,
            "2009": 0.395,
            "2010": 0.39,
            "2011": 0.39,
            "2012": 0.415,
            "2013": 0.39,
            "2014": 0.345,
            "2015": 0.385,
            "2016": 0.415,
            "2017": 0.405,
            "2018": 0.375
        }
    },
    "Organizational, civic, and religious activities": {
        "activity": "Organizational, civic, and religious activities",
        "Nonholiday weekdays": {
            "2008": 0.25,
            "2009": 0.23,
            "2010": 0.26,
            "2011": 0.25,
            "2012": 0.22,
            "2013": 0.22,
            "2014": 0.24,
            "2015": 0.24,
            "2016": 0.24,
            "2017": 0.24,
            "2018": 0.23
        },
        "Weekend days and holidays": {
            "2008": 0.53,
            "2009": 0.58,
            "2010": 0.56,
            "2011": 0.61,
            "2012": 0.55,
            "2013": 0.56,
            "2014": 0.52,
            "2015": 0.55,
            "2016": 0.52,
            "2017": 0.53,
            "2018": 0.49
        },
        "All days": {
            "2008": 0.39,
            "2009": 0.405,
            "2010": 0.41,
            "2011": 0.43,
            "2012": 0.385,
            "2013": 0.39,
            "2014": 0.38,
            "2015": 0.395,
            "2016": 0.38,
            "2017": 0.385,
            "2018": 0.36
        }
    },
    "Leisure and sports": {
        "activity": "Leisure and sports",
        "Nonholiday weekdays": {
            "2008": 4.62,
            "2009": 4.71,
            "2010": 4.67,
            "2011": 4.73,
            "2012": 4.85,
            "2013": 4.74,
            "2014": 4.79,
            "2015": 4.69,
            "2016": 4.58,
            "2017": 4.72,
            "2018": 4.72
        },
        "Weekend days and holidays": {
            "2008": 6.48,
            "2009": 6.53,
            "2010": 6.4,
            "2011": 6.34,
            "2012": 6.57,
            "2013": 6.46,
            "2014": 6.5,
            "2015": 6.43,
            "2016": 6.43,
            "2017": 6.46,
            "2018": 6.56
        },
        "All days": {
            "2008": 5.55,
            "2009": 5.62,
            "2010": 5.535,
            "2011": 5.535,
            "2012": 5.71,
            "2013": 5.6,
            "2014": 5.645,
            "2015": 5.56,
            "2016": 5.505,
            "2017": 5.59,
            "2018": 5.64
        }
    },
    "Telephone calls, mail, and email": {
        "activity": "Telephone calls, mail, and email",
        "Nonholiday weekdays": {
            "2008": 0.23,
            "2009": 0.2,
            "2010": 0.18,
            "2011": 0.16,
            "2012": 0.16,
            "2013": 0.16,
            "2014": 0.15,
            "2015": 0.16,
            "2016": 0.17,
            "2017": 0.16,
            "2018": 0.15
        },
        "Weekend days and holidays": {
            "2008": 0.18,
            "2009": 0.19,
            "2010": 0.16,
            "2011": 0.15,
            "2012": 0.13,
            "2013": 0.13,
            "2014": 0.14,
            "2015": 0.16,
            "2016": 0.14,
            "2017": 0.12,
            "2018": 0.13
        },
        "All days": {
            "2008": 0.205,
            "2009": 0.195,
            "2010": 0.17,
            "2011": 0.155,
            "2012": 0.145,
            "2013": 0.145,
            "2014": 0.145,
            "2015": 0.16,
            "2016": 0.155,
            "2017": 0.14,
            "2018": 0.14
        }
    },
    "Other activities": {
        "activity": "Other activities",
        "Nonholiday weekdays": {
            "2008": 0.2,
            "2009": 0.23,
            "2010": 0.35,
            "2011": 0.3,
            "2012": 0.25,
            "2013": 0.31,
            "2014": 0.24,
            "2015": 0.2,
            "2016": 0.22,
            "2017": 0.2,
            "2018": 0.25
        },
        "Weekend days and holidays": {
            "2008": 0.21,
            "2009": 0.27,
            "2010": 0.34,
            "2011": 0.29,
            "2012": 0.21,
            "2013": 0.32,
            "2014": 0.21,
            "2015": 0.19,
            "2016": 0.24,
            "2017": 0.21,
            "2018": 0.3
        },
        "All days": {
            "2008": 0.205,
            "2009": 0.25,
            "2010": 0.345,
            "2011": 0.295,
            "2012": 0.23,
            "2013": 0.315,
            "2014": 0.225,
            "2015": 0.195,
            "2016": 0.23,
            "2017": 0.205,
            "2018": 0.275
        }
    }
};

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(/*! ./js/App */ "./src/js/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default();
app.render();

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _instruction = __webpack_require__(/*! ./instruction */ "./src/js/instruction.js");

var _instruction2 = _interopRequireDefault(_instruction);

var _watch = __webpack_require__(/*! ./watch */ "./src/js/watch.js");

var _watch2 = _interopRequireDefault(_watch);

var _category_selector = __webpack_require__(/*! ./category_selector */ "./src/js/category_selector.js");

var _category_selector2 = _interopRequireDefault(_category_selector);

var _employed_selectors = __webpack_require__(/*! ./employed_selectors */ "./src/js/employed_selectors.js");

var _employed_selectors2 = _interopRequireDefault(_employed_selectors);

var _everyone_selectors = __webpack_require__(/*! ./everyone_selectors */ "./src/js/everyone_selectors.js");

var _everyone_selectors2 = _interopRequireDefault(_everyone_selectors);

var _data_display = __webpack_require__(/*! ./data_display */ "./src/js/data_display.js");

var _data_display2 = _interopRequireDefault(_data_display);

var _app_academy_selector = __webpack_require__(/*! ./app_academy_selector */ "./src/js/app_academy_selector.js");

var _app_academy_selector2 = _interopRequireDefault(_app_academy_selector);

var _resident_selector = __webpack_require__(/*! ./resident_selector */ "./src/js/resident_selector.js");

var _resident_selector2 = _interopRequireDefault(_resident_selector);

var _gender_comp = __webpack_require__(/*! ./gender_comp */ "./src/js/gender_comp.js");

var _gender_comp2 = _interopRequireDefault(_gender_comp);

var _day_comp = __webpack_require__(/*! ./day_comp */ "./src/js/day_comp.js");

var _day_comp2 = _interopRequireDefault(_day_comp);

var _employedByGenderDataShaped = __webpack_require__(/*! ../assets/data/employedByGenderDataShaped */ "./src/assets/data/employedByGenderDataShaped.js");

var _everyoneByDayShaped = __webpack_require__(/*! ../assets/data/everyoneByDayShaped */ "./src/assets/data/everyoneByDayShaped.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _create = __webpack_require__(/*! ./create */ "./src/js/create.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.draw = this.draw.bind(this);
    }

    _createClass(App, [{
        key: 'draw',
        value: function draw(data, params) {
            var svg = document.querySelector("svg");
            var display = document.querySelector("#data-display ul");
            if (svg) {
                svg.parentNode.removeChild(svg);
            }
            if (display) {
                display.parentNode.removeChild(display);
            }
            (0, _watch2.default)(data);
            (0, _data_display2.default)(data, params);
            (0, _create.drawHands)();
            (0, _create.darkModeBtn)(this.draw, data, params);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var utils = new _utils2.default();

            (0, _instruction2.default)();

            var categorySelector = (0, _category_selector2.default)();

            var employedSelectors = new _employed_selectors2.default();
            employedSelectors.addSelectors();
            var genderComp = new _gender_comp2.default();
            genderComp.addComp();
            var everyoneSelectors = new _everyone_selectors2.default();
            everyoneSelectors.addSelectors();
            var dayComp = new _day_comp2.default();
            dayComp.addComp();
            var appAcademySelector = new _app_academy_selector2.default();
            appAcademySelector.addSelector();
            var residentSelector = new _resident_selector2.default();
            residentSelector.addSelector();

            // selecting the Employed dataset
            var employed = document.querySelector(".employed-btn");
            var employedData = utils.employedDataFilter(employedSelectors.result.activities, employedSelectors.result.gender, employedSelectors.result.years, _employedByGenderDataShaped.employedByGender);
            var employedParams = employedSelectors.result;
            delete employedParams["activities"];
            this.draw(employedData, employedParams);

            employed.addEventListener("click", function (e) {
                e.stopPropagation();
                var employedData = utils.employedDataFilter(employedSelectors.result.activities, employedSelectors.result.gender, employedSelectors.result.years, _employedByGenderDataShaped.employedByGender);

                var params = employedSelectors.result;
                delete params["activities"];
                _this.draw(employedData, params);
            });

            // selecting the gender comparison
            var gender = document.querySelector(".gender-btn");
            gender.addEventListener("click", function (e) {
                e.stopPropagation();
                var genderData = utils.genderCompFilter(genderComp.result.activity, genderComp.result.years, _employedByGenderDataShaped.employedByGender);

                _this.draw(genderData, genderComp.result);
            });

            // selecting the Everyone dataset
            var everyone = document.querySelector(".everyone-btn");
            everyone.addEventListener("click", function (e) {
                e.stopPropagation();
                var everyoneData = utils.everyoneDataFilter(everyoneSelectors.result.activities, everyoneSelectors.result.type, everyoneSelectors.result.years, _everyoneByDayShaped.everyoneByDay);

                var params = everyoneSelectors.result;
                delete params["activities"];
                _this.draw(everyoneData, params);
            });

            // selecting the day comparison
            var day = document.querySelector(".day-btn");
            day.addEventListener("click", function (e) {
                e.stopPropagation();
                var dayData = utils.dayCompFilter(dayComp.result.activity, dayComp.result.years, _everyoneByDayShaped.everyoneByDay);

                _this.draw(dayData, dayComp.result);
            });

            // selecting the App Academy Student
            var appacademy = document.querySelector(".app-academy-btn");
            appacademy.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.draw(appAcademySelector.data, { person: "App Academy Student", year: "2019" });
            });

            // selecting the first year resident after medical school
            var resident = document.querySelector(".resident-btn");
            resident.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.draw(residentSelector.data, { person: "First Year Medical Resident" });
            });
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),

/***/ "./src/js/app_academy_selector.js":
/*!****************************************!*\
  !*** ./src/js/app_academy_selector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppAcademySelector = function () {
    function AppAcademySelector() {
        _classCallCheck(this, AppAcademySelector);

        this.data = {};
    }

    _createClass(AppAcademySelector, [{
        key: "addSelector",
        value: function addSelector() {
            var _this = this;

            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-app");

            var selectionButton = document.createElement("button");
            filter.appendChild(selectionButton);
            selectionButton.classList.add("app-academy-btn", "selector-btn");
            selectionButton.innerText = "Submit Selection";
            selectionButton.addEventListener("click", function (e) {
                e.preventDefault();
                _this.data = {
                    "Working and work-related activities": 14.8,
                    "Personal care activities": 6,
                    "Household activities": 1.5,
                    "Eating and drinking": 1,
                    "Caring for and helping nonhousehold members": 0.4,
                    "Purchasing goods and services": 0.2,
                    "Caring for and helping household members": 0.1,
                    "Telephone calls, mail, and email": 0.1,
                    "Leisure and sports": 0.1,
                    "Other activities": 0.1,
                    "Educational activities": 0,
                    "Organizational, civic, and religious activities": 0
                };
            });

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "The typical App Academy student. Not from ATUS.";
        }
    }]);

    return AppAcademySelector;
}();

exports.default = AppAcademySelector;

/***/ }),

/***/ "./src/js/category_selector.js":
/*!*************************************!*\
  !*** ./src/js/category_selector.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var attach = document.querySelector("#selector");

    var categorySelector = document.createElement("select");
    categorySelector.classList.add("category-filter");
    attach.appendChild(categorySelector);

    var categories = ["Employed by Gender", "Gender Comparison (employed)", "Everyone by Day", "Day Comparison (everyone)", "App Academy Student", "First Year Medical Resident"];

    categories.forEach(function (option) {
        var categoryOption = document.createElement("option");
        categoryOption.classList.add("option");
        categoryOption.value = option;
        categoryOption.innerText = option;
        categorySelector.appendChild(categoryOption);
    });

    categorySelector.addEventListener("change", function (e) {
        e.preventDefault();
        var selectors = document.querySelectorAll('[class*="js-"]');
        selectors.forEach(function (selector) {
            return selector.classList.remove("display");
        });
        switch (e.target.value) {
            case "Employed by Gender":
                var employed = document.querySelector(".js-employed");
                employed.classList.add("display");
                break;
            case "Gender Comparison (employed)":
                var gender = document.querySelector(".js-gender");
                gender.classList.add("display");
                break;
            case "Everyone by Day":
                var everyone = document.querySelector(".js-everyone");
                everyone.classList.add("display");
                break;
            case "Day Comparison (everyone)":
                var day = document.querySelector(".js-day");
                day.classList.add("display");
                break;
            case "App Academy Student":
                var app = document.querySelector(".js-app");
                app.classList.add("display");
                break;
            case "First Year Medical Resident":
                var resident = document.querySelector(".js-resident");
                resident.classList.add("display");
                break;
            default:
                break;
        }
    });
};

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ACTIVITIES = exports.ACTIVITIES = ["Personal care activities", "Eating and drinking", "Household activities", "Purchasing goods and services", "Caring for and helping household members", "Caring for and helping nonhousehold members", "Working and work-related activities", "Educational activities", "Organizational, civic, and religious activities", "Leisure and sports", "Telephone calls, mail, and email", "Other activities"];

var COLORS = exports.COLORS = {
    "Personal care activities": "red",
    "Eating and drinking": "orange",
    "Household activities": "yellow",
    "Purchasing goods and services": "green",
    "Caring for and helping household members": "blue",
    "Caring for and helping nonhousehold members": "indigo",
    "Working and work-related activities": "violet",
    "Educational activities": "gray",
    "Organizational, civic, and religious activities": "black",
    "Leisure and sports": "cyan",
    "Telephone calls, mail, and email": "chartreuse",
    "Other activities": "magenta",
    "Men": "blue",
    "Women": "red",
    "Nonholiday weekdays": "green",
    "Weekend days and holidays": "pink"
};

/***/ }),

/***/ "./src/js/create.js":
/*!**************************!*\
  !*** ./src/js/create.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.darkModeBtn = exports.drawHands = exports.activitySelect = exports.submitButton = exports.yearSelector = exports.activitySelector = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var activitySelector = exports.activitySelector = function activitySelector(updateActivity, filter, prefix) {
    var activitySelector = document.createElement("div");
    filter.appendChild(activitySelector);
    activitySelector.classList.add("selectors");
    var activityLabel = document.createElement("label");
    activityLabel.innerText = "Activities";
    activitySelector.appendChild(activityLabel);

    var activitySelections = ["All Activities"].concat(_constants.ACTIVITIES);
    activitySelections.forEach(function (select, i) {
        var div = document.createElement("div");
        if (i === 0) {
            div.classList.add("selected");
        }
        activitySelector.appendChild(div);
        var span = document.createElement("span");
        span.innerText = select;
        var activityOption = document.createElement("input");
        activityOption.value = select;
        activityOption.setAttribute("type", "checkbox");
        if (select === "All Activities") {
            activityOption.checked = true;
            activityOption.setAttribute("id", prefix + "_activityOptionAll");
        } else {
            activityOption.setAttribute("id", prefix + "_activityOption");
        }
        div.appendChild(activityOption);
        div.appendChild(span);
    });
    activitySelector.addEventListener("change", updateActivity);
};

var yearSelector = exports.yearSelector = function yearSelector(updateYears, filter, prefix, years) {
    var yearSelector = document.createElement("div");
    filter.appendChild(yearSelector);
    yearSelector.classList.add("selectors", "year-selector");
    var yearsLabel = document.createElement("label");
    yearsLabel.innerText = "Years";
    yearSelector.appendChild(yearsLabel);

    var yearSelections = years;
    yearSelections.forEach(function (select, i) {
        var div = document.createElement("div");
        if (i === 0) {
            div.classList.add("selected");
        }
        yearSelector.appendChild(div);
        var span = document.createElement("span");
        span.innerText = select;
        var yearOption = document.createElement("input");
        yearOption.value = select;
        yearOption.setAttribute("type", "checkbox");
        if (select === "All years") {
            yearOption.checked = true;
            yearOption.setAttribute("id", prefix + "_yearOptionAll");
        } else {
            yearOption.setAttribute("id", prefix + "_yearOption");
        }
        div.appendChild(yearOption);
        div.appendChild(span);
    });
    yearSelector.addEventListener("change", updateYears);
};

var submitButton = exports.submitButton = function submitButton(handleSubmit, filter, prefix) {
    var selectionButton = document.createElement("button");
    filter.appendChild(selectionButton);
    selectionButton.classList.add(prefix + "-btn", "selector-btn");
    selectionButton.innerText = "Submit Selection";
    selectionButton.addEventListener("click", handleSubmit);
};

var activitySelect = exports.activitySelect = function activitySelect(updateActivity, filter) {
    var activitySelector = document.createElement("select");
    filter.appendChild(activitySelector);
    activitySelector.classList.add("selectors");

    var selections = _constants.ACTIVITIES;
    selections.forEach(function (select) {
        var activityOption = document.createElement("option");
        activityOption.value = select;
        activityOption.innerText = select;
        activitySelector.appendChild(activityOption);
    });
    activitySelector.addEventListener("change", updateActivity);
};

var drawHands = exports.drawHands = function drawHands() {
    var old = document.querySelectorAll('[class*="clock-hands"]');
    old.forEach(function (el) {
        el.parentNode.removeChild(el);
    });

    var hands = document.querySelector("#hands");
    var minutes = document.createElement("div");
    minutes.classList.add("clock-hands");
    hands.appendChild(minutes);

    var hours = document.createElement("div");
    hours.classList.add("clock-hands-hour");
    hands.appendChild(hours);
};

var darkModeBtn = exports.darkModeBtn = function darkModeBtn(draw, data, params) {
    var old = document.querySelector(".dark-btn");
    if (old) {
        old.parentNode.removeChild(old);
    }
    var text = "Dark Mode";
    var page = document.querySelector("html");
    if (page.classList.contains("theme-dark")) {
        text = "Light Mode";
    }

    var btn = document.createElement("div");
    btn.classList.add("dark-btn");
    btn.innerText = text;
    var footer = document.querySelector(".footer");
    footer.appendChild(btn);

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var html = document.querySelector("html");
        html.classList.toggle("theme-dark");
        html.classList.toggle("theme-light");
        draw(data, params);
    });
};

/***/ }),

/***/ "./src/js/data_display.js":
/*!********************************!*\
  !*** ./src/js/data_display.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (data, params) {
    var display = document.querySelector("#data-display");
    var list = document.createElement("ul");
    list.classList.add("display-data");
    display.appendChild(list);

    var paramDisplay = document.createElement("li");
    paramDisplay.classList.add("params");
    list.appendChild(paramDisplay);
    Object.keys(params).sort().forEach(function (el) {
        var p = document.createElement("p");
        paramDisplay.appendChild(p);
        var category = document.createElement("div");
        category.innerText = el.toUpperCase() + ":";
        var param = document.createElement("div");
        param.innerText = _typeof(params[el]) === "object" ? params[el].join(", ") : params[el];
        p.appendChild(category);
        p.appendChild(param);
    });

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

    Object.keys(data).forEach(function (datum, i) {
        var li = document.createElement("li");
        list.appendChild(li);
        var p = document.createElement("p");
        p.innerText = datum;
        li.setAttribute("id", alpha[i]);
        li.appendChild(p);
        var span = document.createElement("span");
        span.innerText = data[datum].toFixed(2);
        li.appendChild(span);
    });
};

/***/ }),

/***/ "./src/js/day_comp.js":
/*!****************************!*\
  !*** ./src/js/day_comp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var _create = __webpack_require__(/*! ./create */ "./src/js/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayComp = function () {
    function DayComp() {
        _classCallCheck(this, DayComp);

        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        };
    }

    _createClass(DayComp, [{
        key: 'updateActivity',
        value: function updateActivity(e) {
            this.selection.activity = e.target.value;
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All years") {
                    document.querySelectorAll("#d_yearOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["years"] = ["All years"];
                } else {
                    var all = document.querySelector("#d_yearOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["years"].filter(function (year) {
                        return year !== "All years";
                    });
                    newArr.push(e.target.value);
                    this.selection["years"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection["years"] = this.selection["years"].filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var years = void 0;
            if (selections.years[0] === "All years") {
                years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }

            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Day Comparison (everyone)"
            };
        }
    }, {
        key: 'addComp',
        value: function addComp() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-day");

            Create.activitySelect(this.updateActivity, filter);

            Create.yearSelector(this.updateYears, filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

            Create.submitButton(this.handleSubmit, filter, "day");

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "Comparison of nonholiday weekdays against weekend days and holidays";
        }
    }]);

    return DayComp;
}();

exports.default = DayComp;

/***/ }),

/***/ "./src/js/employed_selectors.js":
/*!**************************************!*\
  !*** ./src/js/employed_selectors.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var _create = __webpack_require__(/*! ./create */ "./src/js/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmployedSelectors = function () {
    function EmployedSelectors() {
        _classCallCheck(this, EmployedSelectors);

        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "gender": "Total (men and women)"
        };
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.result = {
            activities: _constants.ACTIVITIES,
            gender: "Total (men and women)",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"],
            filter: "Employed by Gender"
        };
    }

    _createClass(EmployedSelectors, [{
        key: 'updateActivity',
        value: function updateActivity(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All Activities") {
                    document.querySelectorAll("#e_activityOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["activities"] = ["All Activities"];
                } else {
                    var all = document.querySelector("#e_activityOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["activities"].filter(function (activity) {
                        return activity !== "All Activities";
                    });
                    newArr.push(e.target.value);
                    this.selection["activities"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection.activities = this.selection.activities.filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All years") {
                    document.querySelectorAll("#e_yearOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["years"] = ["All years"];
                } else {
                    var all = document.querySelector("#e_yearOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["years"].filter(function (year) {
                        return year !== "All years";
                    });
                    newArr.push(e.target.value);
                    this.selection["years"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection["years"] = this.selection["years"].filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateGender',
        value: function updateGender(e) {
            e.preventDefault();
            this.selection["gender"] = e.target.value;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var activities = void 0,
                years = void 0;

            if (selections["activities"][0] === "All Activities") {
                activities = _constants.ACTIVITIES;
            } else {
                activities = selections['activities'];
            }

            if (selections.years[0] === "All years") {
                years = ["2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }
            this.result = {
                activities: activities,
                years: years,
                gender: selections.gender,
                filter: "Employed by Gender"
            };
        }
    }, {
        key: 'addSelectors',
        value: function addSelectors() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "display", "js-employed");

            Create.activitySelector(this.updateActivity, filter, "e");

            Create.yearSelector(this.updateYears, filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);

            var genderSelector = document.createElement("select");
            filter.appendChild(genderSelector);
            genderSelector.classList.add("selectors");
            genderSelector.appendChild(document.createTextNode("Select gender"));
            var genders = ["Total (men and women)", "Women", "Men"];
            genders.forEach(function (select) {
                var genderOption = document.createElement("option");
                genderOption.value = select;
                genderOption.innerText = select;
                genderSelector.appendChild(genderOption);
            });
            genderSelector.addEventListener("change", this.updateGender);

            Create.submitButton(this.handleSubmit, filter, "employed");

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "Employed men and women on an average day";
        }
    }]);

    return EmployedSelectors;
}();

exports.default = EmployedSelectors;

/***/ }),

/***/ "./src/js/everyone_selectors.js":
/*!**************************************!*\
  !*** ./src/js/everyone_selectors.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var _create = __webpack_require__(/*! ./create */ "./src/js/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var everyoneSelectors = function () {
    function everyoneSelectors() {
        _classCallCheck(this, everyoneSelectors);

        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "type": "All days"
        };
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateType = this.updateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _createClass(everyoneSelectors, [{
        key: 'updateActivity',
        value: function updateActivity(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All Activities") {
                    document.querySelectorAll("#ev_activityOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["activities"] = ["All Activities"];
                } else {
                    var all = document.querySelector("#ev_activityOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["activities"].filter(function (activity) {
                        return activity !== "All Activities";
                    });
                    newArr.push(e.target.value);
                    this.selection["activities"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection.activities = this.selection.activities.filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All years") {
                    document.querySelectorAll("#ev_yearOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["years"] = ["All years"];
                } else {
                    var all = document.querySelector("#ev_yearOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["years"].filter(function (year) {
                        return year !== "All years";
                    });
                    newArr.push(e.target.value);
                    this.selection["years"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection['years'] = this.selection['years'].filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateType',
        value: function updateType(e) {
            e.preventDefault();
            this.selection["type"] = e.target.value;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var activities = void 0,
                years = void 0;

            if (selections["activities"][0] === "All Activities") {
                activities = _constants.ACTIVITIES;
            } else {
                activities = selections['activities'];
            }

            if (selections.years[0] === "All years") {
                years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }
            this.result = {
                activities: activities,
                years: years,
                type: selections.type,
                filter: "Everyone by day"
            };
        }
    }, {
        key: 'addSelectors',
        value: function addSelectors() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-everyone");

            Create.activitySelector(this.updateActivity, filter, "ev");

            Create.yearSelector(this.updateYears, filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

            var typeSelector = document.createElement("select");
            filter.appendChild(typeSelector);
            typeSelector.classList.add("selectors");
            typeSelector.appendChild(document.createTextNode("Select type"));
            var types = ["All days", "Nonholiday weekdays", "Weekend days and holidays"];
            types.forEach(function (select) {
                var typeOption = document.createElement("option");
                typeOption.value = select;
                typeOption.innerText = select;
                typeSelector.appendChild(typeOption);
            });
            typeSelector.addEventListener("change", this.updateType);

            Create.submitButton(this.handleSubmit, filter, "everyone");

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "All persons on nonholiday weekdays or weekend days and holidays";
        }
    }]);

    return everyoneSelectors;
}();

exports.default = everyoneSelectors;

/***/ }),

/***/ "./src/js/gender_comp.js":
/*!*******************************!*\
  !*** ./src/js/gender_comp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var _create = __webpack_require__(/*! ./create */ "./src/js/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenderComp = function () {
    function GenderComp() {
        _classCallCheck(this, GenderComp);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        };
    }

    _createClass(GenderComp, [{
        key: 'updateActivity',
        value: function updateActivity(e) {
            this.selection.activity = e.target.value;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var years = void 0;
            if (selections.years[0] === "All years") {
                years = ["2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }
            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Gender Comparison (employed)"
            };
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
                e.target.parentNode.classList.add("selected");
                if (e.target.value === "All years") {
                    document.querySelectorAll("#g_yearOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["years"] = ["All years"];
                } else {
                    var all = document.querySelector("#g_yearOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["years"].filter(function (year) {
                        return year !== "All years";
                    });
                    newArr.push(e.target.value);
                    this.selection["years"] = newArr;
                }
            } else if (e.target.checked === false) {
                e.target.parentNode.classList.remove("selected");
                this.selection["years"] = this.selection["years"].filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'addComp',
        value: function addComp() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-gender");

            Create.activitySelect(this.updateActivity, filter);

            Create.yearSelector(this.updateYears, filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);

            Create.submitButton(this.handleSubmit, filter, "gender");

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "Comparison of employed men and women";
        }
    }]);

    return GenderComp;
}();

exports.default = GenderComp;

// goal: {"Women": 0.5, "Men": 4.3}

/***/ }),

/***/ "./src/js/instruction.js":
/*!*******************************!*\
  !*** ./src/js/instruction.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // Creating the modal
    var blur = document.createElement("div");
    blur.classList.add("blur", "modal-display");
    document.body.appendChild(blur);

    var modal = document.createElement("div");
    blur.appendChild(modal);
    modal.classList.add("modal", "modal-display");
    // modal.classList.add("modal");

    // Title
    var title = document.createElement("h1");
    title.innerText = "Time Usage";
    title.classList.add("modal-title");
    modal.appendChild(title);

    // Description
    var description = document.createElement("p");
    description.innerText = "Welcome to Time Usage, a data visualization of how Americans use their time on a given day. The data is gathered by the Bureau of Labor Statistics once a year.";
    modal.appendChild(description);
    description.classList.add("modal-description");

    // Question
    var question = document.createElement("p");
    question.innerText = "Would you like a brief walkthrough?";
    modal.appendChild(question);
    question.classList.add("modal-question");

    // Buttons
    var buttons = document.createElement("section");
    buttons.classList.add("modal-buttons");
    modal.appendChild(buttons);

    var nextStep = function nextStep(option, className, next, nextClass) {
        return function (e) {
            e.preventDefault();
            var closeModal = document.querySelector("." + option);
            closeModal.classList.remove(className);
            if (next) {
                var nextItem = document.querySelector("." + next);
                nextItem.classList.add(nextClass);
            }
        };
    };

    // I've already used this before button. Takes them directly into the app.
    var alreadybtn = document.createElement("div");
    buttons.appendChild(alreadybtn);
    alreadybtn.innerText = "I've already used this before.";
    alreadybtn.addEventListener("click", nextStep("blur", "modal-display"));

    // Walkthrough button. It should take them through the walkthrough. 
    var yesBtn = document.createElement("div");
    buttons.appendChild(yesBtn);
    yesBtn.innerText = "Yes, please.";
    yesBtn.addEventListener("click", nextStep("modal", "modal-display", "walkthrough-step-first", "walkthrough-display"));

    // Walkthrough
    // FIRST
    var firstStep = document.createElement("section");
    blur.appendChild(firstStep);
    firstStep.classList.add("walkthrough-step", "walkthrough-step-first");
    firstStep.innerText = "Start by how you want to filter the data. Select a general category. Note that App Academy Student and First Year Medical Resident are not from the American Time Usage Survey.";

    var firstButton = document.createElement("div");
    firstStep.appendChild(firstButton);
    firstButton.classList.add("walkthrough-step-button");
    firstButton.innerText = "Got it";
    firstButton.addEventListener("click", nextStep("walkthrough-step-first", "walkthrough-display", "walkthrough-step-second", "walkthrough-display"));

    var firstTriangle = document.createElement("div");
    firstTriangle.classList.add("left-triangle", "walkthrough-first-triangle");
    firstStep.appendChild(firstTriangle);

    // SECOND
    var secondStep = document.createElement("section");
    blur.appendChild(secondStep);
    secondStep.classList.add("walkthrough-step", "walkthrough-step-second");
    secondStep.innerText = 'Select your parameters. App Academy Student and First Year Medical Resident have no parameters. Then click "Submit Selection."';

    var secondButton = document.createElement("div");
    secondStep.appendChild(secondButton);
    secondButton.classList.add("walkthrough-step-button");
    secondButton.innerText = "Great";
    secondButton.addEventListener("click", nextStep("walkthrough-step-second", "walkthrough-display", "walkthrough-step-third", "walkthrough-display"));

    var secondTriangle = document.createElement("div");
    secondTriangle.classList.add("left-triangle", "walkthrough-second-triangle");
    secondStep.appendChild(secondTriangle);

    // THIRD
    var thirdStep = document.createElement("section");
    blur.appendChild(thirdStep);
    thirdStep.classList.add("walkthrough-step", "walkthrough-step-third");
    thirdStep.innerText = 'As you hover over the slices of the graph, the corresponding data will light up. Note that these slices are technically proportions, and not strictly out of 24 hours. It depends on the parameters.';

    var thirdButton = document.createElement("div");
    thirdStep.appendChild(thirdButton);
    thirdButton.classList.add("walkthrough-step-button");
    thirdButton.innerText = "Awesome";
    thirdButton.addEventListener("click", nextStep("walkthrough-step-third", "walkthrough-display", "walkthrough-step-fourth", "walkthrough-display"));

    var thirdTriangleA = document.createElement("div");
    thirdTriangleA.classList.add("right-triangle", "walkthrough-third-triangle-a");
    thirdStep.appendChild(thirdTriangleA);

    var thirdTriangleB = document.createElement("div");
    thirdTriangleB.classList.add("up-triangle", "walkthrough-third-triangle-b");
    thirdStep.appendChild(thirdTriangleB);

    // FOURTH
    var fourthStep = document.createElement("section");
    blur.appendChild(fourthStep);
    fourthStep.classList.add("walkthrough-step", "walkthrough-step-fourth");
    fourthStep.innerText = "There's a dark mode if needed.";

    var fourthButton = document.createElement("div");
    fourthStep.appendChild(fourthButton);
    fourthButton.classList.add("walkthrough-step-button");
    fourthButton.innerText = "I'm ready";
    fourthButton.addEventListener("click", nextStep("blur", "modal-display"));

    var fourthTriangle = document.createElement("div");
    fourthTriangle.classList.add("down-triangle", "walkthrough-fourth-triangle");
    fourthStep.appendChild(fourthTriangle);
};

/***/ }),

/***/ "./src/js/resident_selector.js":
/*!*************************************!*\
  !*** ./src/js/resident_selector.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResidentSelector = function () {
    function ResidentSelector() {
        _classCallCheck(this, ResidentSelector);

        this.data = {};
    }

    _createClass(ResidentSelector, [{
        key: "addSelector",
        value: function addSelector() {
            var _this = this;

            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-resident");

            var selectionButton = document.createElement("button");
            filter.appendChild(selectionButton);
            selectionButton.classList.add("resident-btn", "selector-btn");
            selectionButton.innerText = "Submit Selection";
            selectionButton.addEventListener("click", function (e) {
                e.preventDefault();
                _this.data = {
                    "Working and work-related activities": 13,
                    "Personal care activities": 6,
                    "Household activities": 1.5,
                    "Eating and drinking": 1.0,
                    "Caring for and helping household members": 1.0,
                    "Telephone calls, mail, and email": 0.5,
                    "Caring for and helping nonhousehold members": 0.4,
                    "Leisure and sports": 0.3,
                    "Purchasing goods and services": 0.2,
                    "Other activities": 0.1,
                    "Organizational, civic, and religious activities": 0,
                    "Educational activities": 0
                };
            });

            var description = document.createElement("p");
            filter.appendChild(description);
            description.classList.add("description");
            description.innerText = "A first-year medical resident at UCSF. Not from ATUS.";

            var citation = document.createElement("p");
            filter.appendChild(citation);
            citation.classList.add("citation");
            citation.innerText = "Data approximated from ";
            var a = document.createElement("a");
            a.setAttribute("href", "https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html");
            a.innerText = "https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html";
            a.setAttribute("target", "_blank");
            citation.appendChild(a);
        }
    }]);

    return ResidentSelector;
}();

exports.default = ResidentSelector;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);

        this.arraySum = this.arraySum.bind(this);
        this.arrayAverage = this.arrayAverage.bind(this);
        this.arrayMerge = this.arrayMerge.bind(this);
        this.employedDataFilter = this.employedDataFilter.bind(this);
        this.everyoneDataFilter = this.everyoneDataFilter.bind(this);
    }

    _createClass(Utils, [{
        key: "arraySum",
        value: function arraySum(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }, {
        key: "arrayAverage",
        value: function arrayAverage(arr) {
            return this.arraySum(arr) / arr.length;
        }
    }, {
        key: "arrayMerge",
        value: function arrayMerge() {
            for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
                arrays[_key] = arguments[_key];
            }

            var final = [];
            if (arrays.every(function (arr) {
                return arr.length === arrays[0].length;
            }) === false) {
                console.log("The arrays are not the same length");
                return;
            }

            var _loop = function _loop(i) {
                var subArr = [];
                arrays.forEach(function (arr) {
                    subArr.push(arr[i]);
                });
                final.push(subArr);
            };

            for (var i = 0; i < arrays[0].length; i++) {
                _loop(i);
            }
            return final;
        }
    }, {
        key: "employedDataFilter",
        value: function employedDataFilter(activities, gender, years, data) {
            var _this = this;

            var activityFilter = [];
            activities.forEach(function (activity) {
                activityFilter.push(data[activity]);
            });
            var genderFilter = activityFilter.map(function (datum) {
                return _defineProperty({}, datum.activity, datum[gender]);
            });

            var finalData = genderFilter.map(function (datum) {
                var yearlyFilter = [];
                years.forEach(function (year) {
                    var allYears = Object.values(datum)[0];
                    yearlyFilter.push(allYears[year]);
                });
                return _defineProperty({}, Object.keys(datum)[0], _this.arrayAverage(yearlyFilter));
            });

            var sorted = finalData.sort(function (a, b) {
                switch (Object.values(a)[0] > Object.values(b)[0]) {
                    case true:
                        return -1;
                    default:
                        return 1;
                }
            });

            var result = {};
            sorted.forEach(function (datum) {
                result[Object.keys(datum)[0]] = Object.values(datum)[0];
            });

            return result;
        }
    }, {
        key: "everyoneDataFilter",
        value: function everyoneDataFilter(activities, type, years, data) {
            var _this2 = this;

            var activityFilter = [];
            activities.forEach(function (activity) {
                activityFilter.push(data[activity]);
            });
            var typeFilter = activityFilter.map(function (datum) {
                return _defineProperty({}, datum.activity, datum[type]);
            });

            var finalData = typeFilter.map(function (datum) {
                var yearlyFilter = [];
                years.forEach(function (year) {
                    var allYears = Object.values(datum)[0];
                    yearlyFilter.push(allYears[year]);
                });
                return _defineProperty({}, Object.keys(datum)[0], _this2.arrayAverage(yearlyFilter));
            });

            var sorted = finalData.sort(function (a, b) {
                switch (Object.values(a)[0] > Object.values(b)[0]) {
                    case true:
                        return -1;
                    default:
                        return 1;
                }
            });

            var result = {};
            sorted.forEach(function (datum) {
                result[Object.keys(datum)[0]] = Object.values(datum)[0];
            });

            return result;
        }
    }, {
        key: "genderCompFilter",
        value: function genderCompFilter(activity, years, data) {
            var activityFilter = data[activity];

            var menFilter = { "Men": activityFilter["Men"] };
            var womenFilter = { "Women": activityFilter["Women"] };

            var menYearlyFilter = [];
            var allMenYears = Object.values(menFilter)[0];
            years.forEach(function (year) {
                menYearlyFilter.push(allMenYears[year]);
            });
            var menData = this.arrayAverage(menYearlyFilter);

            var womenYearlyFilter = [];
            var allWomenYears = Object.values(womenFilter)[0];
            years.forEach(function (year) {
                womenYearlyFilter.push(allWomenYears[year]);
            });
            var womenData = this.arrayAverage(womenYearlyFilter);

            if (womenData > menData) {
                return {
                    "Women": womenData,
                    "Men": menData
                };
            } else {
                return {
                    "Men": menData,
                    "Women": womenData
                };
            };
        }
    }, {
        key: "dayCompFilter",
        value: function dayCompFilter(activity, years, data) {
            var activityFilter = data[activity];

            var nonFilter = { "Nonholiday weekdays": activityFilter["Nonholiday weekdays"] };
            var holiFilter = { "Weekend days and holidays": activityFilter["Weekend days and holidays"] };

            var nonYearlyFilter = [];
            var allNonYears = Object.values(nonFilter)[0];
            years.forEach(function (year) {
                nonYearlyFilter.push(allNonYears[year]);
            });
            var nonData = this.arrayAverage(nonYearlyFilter);

            var holiYearlyFilter = [];
            var allHoliYears = Object.values(holiFilter)[0];
            years.forEach(function (year) {
                holiYearlyFilter.push(allHoliYears[year]);
            });
            var holiData = this.arrayAverage(holiYearlyFilter);

            if (holiData > nonData) {
                return {
                    "Weekend days and holidays": holiData,
                    "Nonholiday weekdays": nonData
                };
            } else {
                return {
                    "Nonholiday weekdays": nonData,
                    "Weekend days and holidays": holiData
                };
            };
        }
    }]);

    return Utils;
}();

exports.default = Utils;

// dataFilter(["Other activities, not elsewhere classified (includes misc. travel and data codes)", "Telephone calls, mail, and e-mail (includes travel)"],
// ...             "Total (men and women)",
// ...["2013", "2014"],
// ...employedByGender)

/***/ }),

/***/ "./src/js/watch.js":
/*!*************************!*\
  !*** ./src/js/watch.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var margin = 15;

    var width = void 0,
        height = void 0;
    var utils = new _utils2.default();

    var svg = d3.select("#watch").classed("svg-container", true).append("svg").attr("width", function (d) {
        width = this.parentNode.clientWidth;return width;
    }).attr("height", function (d) {
        height = this.parentNode.clientHeight;return height;
    }).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var radius = Math.min(width, height) / 2 - margin;

    var pie = d3.pie().value(function (d) {
        return d.value;
    });

    var processed_data = d3.entries(data);

    var total = utils.arraySum(processed_data.map(function (d) {
        return d.value;
    }));

    processed_data.forEach(function (d) {
        d.percentage = d.value / total;
    });

    var final_data = pie(processed_data);

    var arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

    var paths = svg.selectAll().data(final_data).enter().append('path');

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

    paths.each(function (d, i) {
        d3.select(this).classed('arcs', true).on("mouseover", function (d) {
            var el = document.querySelector('#' + alpha[i]);
            el.classList.add("focused");
        }).on("mouseout", function (d) {
            var el = document.querySelector('#' + alpha[i]);
            el.classList.remove("focused");
        }).transition().duration(function (d) {
            return d.data.percentage * 3000;
        }).delay(function (d) {
            return utils.arraySum(paths.nodes().slice(0, i).map(function (el) {
                return d3.select(el).data()[0].data.percentage;
            })) * 3000 + 200;
        }).attrTween('d', function (d) {
            var i = d3.interpolate(d.startAngle, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            };
        });
    });
};

// window.onresize = document.location.reload();

// https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
// for responsive SVG design
// https://stackoverflow.com/questions/27762982/how-to-display-percentage-to-the-d3-js-piechart
// for percentages
// https://bl.ocks.org/farazshuja/e2cb52828c080ba85da5458e2304a61f
// for labeling slices with percentages
// http://bl.ocks.org/nadinesk/99393098950665c471e035ac517c2224
// for transitions
// https://bl.ocks.org/mbostock/1125997
// for chained transitions

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHBfYWNhZGVteV9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbXBsb3llZF9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZXJ5b25lX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZXNpZGVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dhdGNoLmpzIl0sIm5hbWVzIjpbImVtcGxveWVkQnlHZW5kZXIiLCJldmVyeW9uZUJ5RGF5IiwiYXBwIiwiQXBwIiwicmVuZGVyIiwiZHJhdyIsImJpbmQiLCJkYXRhIiwicGFyYW1zIiwic3ZnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInV0aWxzIiwiVXRpbHMiLCJjYXRlZ29yeVNlbGVjdG9yIiwiZW1wbG95ZWRTZWxlY3RvcnMiLCJFbXBsb3llZFNlbGVjdG9ycyIsImFkZFNlbGVjdG9ycyIsImdlbmRlckNvbXAiLCJHZW5kZXJDb21wIiwiYWRkQ29tcCIsImV2ZXJ5b25lU2VsZWN0b3JzIiwiRXZlcnlvbmVTZWxlY3RvcnMiLCJkYXlDb21wIiwiRGF5Q29tcCIsImFwcEFjYWRlbXlTZWxlY3RvciIsIkFwcEFjYWRlbXlTZWxlY3RvciIsImFkZFNlbGVjdG9yIiwicmVzaWRlbnRTZWxlY3RvciIsIlJlc2lkZW50U2VsZWN0b3IiLCJlbXBsb3llZCIsImVtcGxveWVkRGF0YSIsImVtcGxveWVkRGF0YUZpbHRlciIsInJlc3VsdCIsImFjdGl2aXRpZXMiLCJnZW5kZXIiLCJ5ZWFycyIsImVtcGxveWVkUGFyYW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5kZXJEYXRhIiwiZ2VuZGVyQ29tcEZpbHRlciIsImFjdGl2aXR5IiwiZXZlcnlvbmUiLCJldmVyeW9uZURhdGEiLCJldmVyeW9uZURhdGFGaWx0ZXIiLCJ0eXBlIiwiZGF5IiwiZGF5RGF0YSIsImRheUNvbXBGaWx0ZXIiLCJhcHBhY2FkZW15IiwicGVyc29uIiwieWVhciIsInJlc2lkZW50IiwiYXR0YWNoIiwiZmlsdGVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VsZWN0aW9uQnV0dG9uIiwiaW5uZXJUZXh0IiwicHJldmVudERlZmF1bHQiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsIkFDVElWSVRJRVMiLCJDT0xPUlMiLCJhY3Rpdml0eVNlbGVjdG9yIiwidXBkYXRlQWN0aXZpdHkiLCJwcmVmaXgiLCJhY3Rpdml0eUxhYmVsIiwiYWN0aXZpdHlTZWxlY3Rpb25zIiwiY29uY2F0Iiwic2VsZWN0IiwiaSIsImRpdiIsInNwYW4iLCJhY3Rpdml0eU9wdGlvbiIsInNldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJ5ZWFyU2VsZWN0b3IiLCJ1cGRhdGVZZWFycyIsInllYXJzTGFiZWwiLCJ5ZWFyU2VsZWN0aW9ucyIsInllYXJPcHRpb24iLCJzdWJtaXRCdXR0b24iLCJoYW5kbGVTdWJtaXQiLCJhY3Rpdml0eVNlbGVjdCIsInNlbGVjdGlvbnMiLCJkcmF3SGFuZHMiLCJvbGQiLCJlbCIsImhhbmRzIiwibWludXRlcyIsImhvdXJzIiwiZGFya01vZGVCdG4iLCJ0ZXh0IiwicGFnZSIsImNvbnRhaW5zIiwiYnRuIiwiZm9vdGVyIiwiaHRtbCIsInRvZ2dsZSIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsInRvVXBwZXJDYXNlIiwicGFyYW0iLCJqb2luIiwiYWxwaGEiLCJkYXR1bSIsImxpIiwidG9GaXhlZCIsIkNyZWF0ZSIsInNlbGVjdGlvbiIsImFsbCIsIm5ld0FyciIsInB1c2giLCJ1cGRhdGVHZW5kZXIiLCJnZW5kZXJTZWxlY3RvciIsImNyZWF0ZVRleHROb2RlIiwiZ2VuZGVycyIsImdlbmRlck9wdGlvbiIsInVwZGF0ZVR5cGUiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlcyIsInR5cGVPcHRpb24iLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJuZXh0U3RlcCIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJjbG9zZU1vZGFsIiwibmV4dEl0ZW0iLCJhbHJlYWR5YnRuIiwieWVzQnRuIiwiZmlyc3RTdGVwIiwiZmlyc3RCdXR0b24iLCJmaXJzdFRyaWFuZ2xlIiwic2Vjb25kU3RlcCIsInNlY29uZEJ1dHRvbiIsInNlY29uZFRyaWFuZ2xlIiwidGhpcmRTdGVwIiwidGhpcmRCdXR0b24iLCJ0aGlyZFRyaWFuZ2xlQSIsInRoaXJkVHJpYW5nbGVCIiwiZm91cnRoU3RlcCIsImZvdXJ0aEJ1dHRvbiIsImZvdXJ0aFRyaWFuZ2xlIiwiY2l0YXRpb24iLCJhIiwiYXJyYXlTdW0iLCJhcnJheUF2ZXJhZ2UiLCJhcnJheU1lcmdlIiwiYXJyIiwic3VtIiwibGVuZ3RoIiwiYXJyYXlzIiwiZmluYWwiLCJldmVyeSIsImNvbnNvbGUiLCJsb2ciLCJzdWJBcnIiLCJhY3Rpdml0eUZpbHRlciIsImdlbmRlckZpbHRlciIsIm1hcCIsImZpbmFsRGF0YSIsInllYXJseUZpbHRlciIsImFsbFllYXJzIiwidmFsdWVzIiwic29ydGVkIiwiYiIsInR5cGVGaWx0ZXIiLCJtZW5GaWx0ZXIiLCJ3b21lbkZpbHRlciIsIm1lblllYXJseUZpbHRlciIsImFsbE1lblllYXJzIiwibWVuRGF0YSIsIndvbWVuWWVhcmx5RmlsdGVyIiwiYWxsV29tZW5ZZWFycyIsIndvbWVuRGF0YSIsIm5vbkZpbHRlciIsImhvbGlGaWx0ZXIiLCJub25ZZWFybHlGaWx0ZXIiLCJhbGxOb25ZZWFycyIsIm5vbkRhdGEiLCJob2xpWWVhcmx5RmlsdGVyIiwiYWxsSG9saVllYXJzIiwiaG9saURhdGEiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImQzIiwiY2xhc3NlZCIsImFwcGVuZCIsImF0dHIiLCJkIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwicGllIiwicHJvY2Vzc2VkX2RhdGEiLCJlbnRyaWVzIiwidG90YWwiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsIm9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJub2RlcyIsInNsaWNlIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sSUFBTUEsOENBQW1CO0FBQzVCLGdDQUE0QjtBQUN4QixvQkFBWSwwQkFEWTtBQUV4QixvQkFBWSxHQUZZO0FBR3hCLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIaUI7QUFXeEIsaUNBQXlCO0FBQ3JCLG9CQUFRLEdBRGE7QUFFckIsb0JBQVEsSUFGYTtBQUdyQixvQkFBUSxHQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWEQ7QUFtQnhCLGlCQUFTO0FBQ0wsb0JBQVEsSUFESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJlLEtBREE7QUE2QjVCLDJCQUF1QjtBQUNuQixvQkFBWSxxQkFETztBQUVuQixvQkFBWSxHQUZPO0FBR25CLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIWTtBQVduQixpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYTjtBQW1CbkIsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQlUsS0E3Qks7QUF5RDVCLDRCQUF3QjtBQUNwQixvQkFBWSxzQkFEUTtBQUVwQixvQkFBWSxHQUZRO0FBR3BCLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIYTtBQVdwQixpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYTDtBQW1CcEIsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxDQUpIO0FBS0wsb0JBQVEsR0FMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQlcsS0F6REk7QUFxRjVCLHFDQUFpQztBQUM3QixvQkFBWSwrQkFEaUI7QUFFN0Isb0JBQVksR0FGaUI7QUFHN0IsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxHQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhzQjtBQVc3QixpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYSTtBQW1CN0IsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQm9CLEtBckZMO0FBaUg1QixnREFBNEM7QUFDeEMsb0JBQVksMENBRDRCO0FBRXhDLG9CQUFZLEdBRjRCO0FBR3hDLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIaUM7QUFXeEMsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsR0FGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWGU7QUFtQnhDLGlCQUFTO0FBQ0wsb0JBQVEsSUFESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkIrQixLQWpIaEI7QUE2STVCLG1EQUErQztBQUMzQyxvQkFBWSw2Q0FEK0I7QUFFM0Msb0JBQVksR0FGK0I7QUFHM0MsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLEdBSkw7QUFLSCxvQkFBUSxHQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhvQztBQVczQyxpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxHQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsR0FKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYa0I7QUFtQjNDLGlCQUFTO0FBQ0wsb0JBQVEsR0FESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsR0FKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJrQyxLQTdJbkI7QUF5SzVCLDJDQUF1QztBQUNuQyxvQkFBWSxxQ0FEdUI7QUFFbkMsb0JBQVksR0FGdUI7QUFHbkMsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUg0QjtBQVduQyxpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYVTtBQW1CbkMsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxDQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQjBCLEtBektYO0FBcU01Qiw4QkFBMEI7QUFDdEIsb0JBQVksd0JBRFU7QUFFdEIsb0JBQVksR0FGVTtBQUd0QixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsR0FKTDtBQUtILG9CQUFRLElBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSGU7QUFXdEIsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsSUFGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWEg7QUFtQnRCLGlCQUFTO0FBQ0wsb0JBQVEsR0FESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJhLEtBck1FO0FBaU81Qix1REFBbUQ7QUFDL0Msb0JBQVksaURBRG1DO0FBRS9DLG9CQUFZLEdBRm1DO0FBRy9DLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsR0FGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FId0M7QUFXL0MsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsR0FGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWHNCO0FBbUIvQyxpQkFBUztBQUNMLG9CQUFRLEdBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsR0FISDtBQUlMLG9CQUFRLElBSkg7QUFLTCxvQkFBUSxJQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5Cc0MsS0FqT3ZCO0FBNlA1QiwwQkFBc0I7QUFDbEIsb0JBQVksb0JBRE07QUFFbEIsb0JBQVksR0FGTTtBQUdsQixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsSUFKTDtBQUtILG9CQUFRLElBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSFc7QUFXbEIsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsSUFGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWFA7QUFtQmxCLGlCQUFTO0FBQ0wsb0JBQVEsSUFESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJTLEtBN1BNO0FBeVI1Qix3Q0FBb0M7QUFDaEMsb0JBQVksa0NBRG9CO0FBRWhDLG9CQUFZLEdBRm9CO0FBR2hDLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIeUI7QUFXaEMsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsSUFGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWE87QUFtQmhDLGlCQUFTO0FBQ0wsb0JBQVEsSUFESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJ1QixLQXpSUjtBQXFUNUIsd0JBQW9CO0FBQ2hCLG9CQUFZLGtCQURJO0FBRWhCLG9CQUFZLEdBRkk7QUFHaEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhTO0FBV2hCLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLElBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxJQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhUO0FBbUJoQixpQkFBUztBQUNMLG9CQUFRLElBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsSUFISDtBQUlMLG9CQUFRLElBSkg7QUFLTCxvQkFBUSxHQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5CTztBQXJUUSxDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLHdDQUFnQjtBQUN6QixnQ0FBNEI7QUFDeEIsb0JBQVksMEJBRFk7QUFFeEIsK0JBQXVCO0FBQ25CLG9CQUFRLEdBRFc7QUFFbkIsb0JBQVEsR0FGVztBQUduQixvQkFBUSxHQUhXO0FBSW5CLG9CQUFRLElBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxHQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsSUFSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZDO0FBZXhCLHFDQUE2QjtBQUN6QixvQkFBUSxLQURpQjtBQUV6QixvQkFBUSxLQUZpQjtBQUd6QixvQkFBUSxLQUhpQjtBQUl6QixvQkFBUSxLQUppQjtBQUt6QixvQkFBUSxLQUxpQjtBQU16QixvQkFBUSxLQU5pQjtBQU96QixvQkFBUSxLQVBpQjtBQVF6QixvQkFBUSxLQVJpQjtBQVN6QixvQkFBUSxLQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZMO0FBNEJ4QixvQkFBWTtBQUNSLG9CQUFRLEtBREE7QUFFUixvQkFBUSxJQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLElBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsS0FOQTtBQU9SLG9CQUFRLEtBUEE7QUFRUixvQkFBUSxLQVJBO0FBU1Isb0JBQVEsSUFUQTtBQVVSLG9CQUFRLEtBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUJZLEtBREg7QUEyQ3pCLDJCQUF1QjtBQUNuQixvQkFBWSxxQkFETztBQUVuQiwrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLEdBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRko7QUFlbkIscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZlY7QUE0Qm5CLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxJQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLElBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsSUFQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxLQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1Qk8sS0EzQ0U7QUFxRnpCLDRCQUF3QjtBQUNwQixvQkFBWSxzQkFEUTtBQUVwQiwrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxHQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRkg7QUFlcEIscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLEdBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZlQ7QUE0QnBCLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLElBRkE7QUFHUixvQkFBUSxJQUhBO0FBSVIsb0JBQVEsS0FKQTtBQUtSLG9CQUFRLEtBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsSUFQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxLQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1QlEsS0FyRkM7QUErSHpCLHFDQUFpQztBQUM3QixvQkFBWSwrQkFEaUI7QUFFN0IsK0JBQXVCO0FBQ25CLG9CQUFRLElBRFc7QUFFbkIsb0JBQVEsSUFGVztBQUduQixvQkFBUSxJQUhXO0FBSW5CLG9CQUFRLElBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxHQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsR0FSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZNO0FBZTdCLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZBO0FBNEI3QixvQkFBWTtBQUNSLG9CQUFRLElBREE7QUFFUixvQkFBUSxLQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLElBSkE7QUFLUixvQkFBUSxLQUxBO0FBTVIsb0JBQVEsSUFOQTtBQU9SLG9CQUFRLEtBUEE7QUFRUixvQkFBUSxLQVJBO0FBU1Isb0JBQVEsSUFUQTtBQVVSLG9CQUFRLElBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUJpQixLQS9IUjtBQXlLekIsZ0RBQTRDO0FBQ3hDLG9CQUFZLDBDQUQ0QjtBQUV4QywrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRmlCO0FBZXhDLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZXO0FBNEJ4QyxvQkFBWTtBQUNSLG9CQUFRLEtBREE7QUFFUixvQkFBUSxLQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLElBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsSUFOQTtBQU9SLG9CQUFRLEtBUEE7QUFRUixvQkFBUSxLQVJBO0FBU1Isb0JBQVEsS0FUQTtBQVVSLG9CQUFRLEtBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUI0QixLQXpLbkI7QUFtTnpCLG1EQUErQztBQUMzQyxvQkFBWSw2Q0FEK0I7QUFFM0MsK0JBQXVCO0FBQ25CLG9CQUFRLElBRFc7QUFFbkIsb0JBQVEsSUFGVztBQUduQixvQkFBUSxHQUhXO0FBSW5CLG9CQUFRLEdBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxJQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsSUFSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZvQjtBQWUzQyxxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmYztBQTRCM0Msb0JBQVk7QUFDUixvQkFBUSxJQURBO0FBRVIsb0JBQVEsS0FGQTtBQUdSLG9CQUFRLEtBSEE7QUFJUixvQkFBUSxLQUpBO0FBS1Isb0JBQVEsSUFMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxJQVBBO0FBUVIsb0JBQVEsSUFSQTtBQVNSLG9CQUFRLElBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCK0IsS0FuTnRCO0FBNlB6QiwyQ0FBdUM7QUFDbkMsb0JBQVkscUNBRHVCO0FBRW5DLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLEdBRlc7QUFHbkIsb0JBQVEsR0FIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsR0FUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGWTtBQWVuQyxxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmTTtBQTRCbkMsb0JBQVk7QUFDUixvQkFBUSxJQURBO0FBRVIsb0JBQVEsSUFGQTtBQUdSLG9CQUFRLEtBSEE7QUFJUixvQkFBUSxLQUpBO0FBS1Isb0JBQVEsSUFMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxJQVBBO0FBUVIsb0JBQVEsS0FSQTtBQVNSLG9CQUFRLElBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCdUIsS0E3UGQ7QUF1U3pCLDhCQUEwQjtBQUN0QixvQkFBWSx3QkFEVTtBQUV0QiwrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLEdBSFc7QUFJbkIsb0JBQVEsR0FKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLEdBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLEdBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRkQ7QUFldEIscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLEdBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLEdBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZlA7QUE0QnRCLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxJQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLEtBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxLQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1QlUsS0F2U0Q7QUFpVnpCLHVEQUFtRDtBQUMvQyxvQkFBWSxpREFEbUM7QUFFL0MsK0JBQXVCO0FBQ25CLG9CQUFRLElBRFc7QUFFbkIsb0JBQVEsSUFGVztBQUduQixvQkFBUSxJQUhXO0FBSW5CLG9CQUFRLElBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxJQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsSUFSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZ3QjtBQWUvQyxxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0Fma0I7QUE0Qi9DLG9CQUFZO0FBQ1Isb0JBQVEsSUFEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxJQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLEtBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsSUFQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxJQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1Qm1DLEtBalYxQjtBQTJYekIsMEJBQXNCO0FBQ2xCLG9CQUFZLG9CQURNO0FBRWxCLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLElBRlc7QUFHbkIsb0JBQVEsSUFIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsSUFUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGTDtBQWVsQixxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsR0FIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsR0FQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmWDtBQTRCbEIsb0JBQVk7QUFDUixvQkFBUSxJQURBO0FBRVIsb0JBQVEsSUFGQTtBQUdSLG9CQUFRLEtBSEE7QUFJUixvQkFBUSxLQUpBO0FBS1Isb0JBQVEsSUFMQTtBQU1SLG9CQUFRLEdBTkE7QUFPUixvQkFBUSxLQVBBO0FBUVIsb0JBQVEsSUFSQTtBQVNSLG9CQUFRLEtBVEE7QUFVUixvQkFBUSxJQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCTSxLQTNYRztBQXFhekIsd0NBQW9DO0FBQ2hDLG9CQUFZLGtDQURvQjtBQUVoQywrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxHQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRlM7QUFlaEMscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZkc7QUE0QmhDLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxJQUhBO0FBSVIsb0JBQVEsS0FKQTtBQUtSLG9CQUFRLEtBTEE7QUFNUixvQkFBUSxLQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLElBUkE7QUFTUixvQkFBUSxLQVRBO0FBVVIsb0JBQVEsSUFWQTtBQVdSLG9CQUFRO0FBWEE7QUE1Qm9CLEtBcmFYO0FBK2N6Qix3QkFBb0I7QUFDaEIsb0JBQVksa0JBREk7QUFFaEIsK0JBQXVCO0FBQ25CLG9CQUFRLEdBRFc7QUFFbkIsb0JBQVEsSUFGVztBQUduQixvQkFBUSxJQUhXO0FBSW5CLG9CQUFRLEdBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxJQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsR0FSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLEdBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZQO0FBZWhCLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZiO0FBNEJoQixvQkFBWTtBQUNSLG9CQUFRLEtBREE7QUFFUixvQkFBUSxJQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLEtBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsS0FOQTtBQU9SLG9CQUFRLEtBUEE7QUFRUixvQkFBUSxLQVJBO0FBU1Isb0JBQVEsSUFUQTtBQVVSLG9CQUFRLEtBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUJJO0FBL2NLLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7OztBQUVBLElBQU1DLE1BQU0sSUFBSUMsYUFBSixFQUFaO0FBQ0FELElBQUlFLE1BQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdNRCxHO0FBQ0YsbUJBQWM7QUFBQTs7QUFDVixhQUFLRSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0g7Ozs7NkJBRUlDLEksRUFBTUMsTSxFQUFRO0FBQ2YsZ0JBQU1DLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLGdCQUFNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFoQjtBQUNBLGdCQUFJRixHQUFKLEVBQVM7QUFBRUEsb0JBQUlJLFVBQUosQ0FBZUMsV0FBZixDQUEyQkwsR0FBM0I7QUFBa0M7QUFDN0MsZ0JBQUlHLE9BQUosRUFBYTtBQUFFQSx3QkFBUUMsVUFBUixDQUFtQkMsV0FBbkIsQ0FBK0JGLE9BQS9CO0FBQTBDO0FBQ3pELGlDQUFNTCxJQUFOO0FBQ0Esd0NBQVlBLElBQVosRUFBa0JDLE1BQWxCO0FBQ0E7QUFDQSxxQ0FBWSxLQUFLSCxJQUFqQixFQUF1QkUsSUFBdkIsRUFBNkJDLE1BQTdCO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFNTyxRQUFRLElBQUlDLGVBQUosRUFBZDs7QUFFQTs7QUFFQSxnQkFBTUMsbUJBQW1CLGtDQUF6Qjs7QUFFQSxnQkFBTUMsb0JBQW9CLElBQUlDLDRCQUFKLEVBQTFCO0FBQ0FELDhCQUFrQkUsWUFBbEI7QUFDQSxnQkFBTUMsYUFBYSxJQUFJQyxxQkFBSixFQUFuQjtBQUNBRCx1QkFBV0UsT0FBWDtBQUNBLGdCQUFNQyxvQkFBb0IsSUFBSUMsNEJBQUosRUFBMUI7QUFDQUQsOEJBQWtCSixZQUFsQjtBQUNBLGdCQUFNTSxVQUFVLElBQUlDLGtCQUFKLEVBQWhCO0FBQ0FELG9CQUFRSCxPQUFSO0FBQ0EsZ0JBQU1LLHFCQUFxQixJQUFJQyw4QkFBSixFQUEzQjtBQUNBRCwrQkFBbUJFLFdBQW5CO0FBQ0EsZ0JBQU1DLG1CQUFtQixJQUFJQywyQkFBSixFQUF6QjtBQUNBRCw2QkFBaUJELFdBQWpCOztBQUVBO0FBQ0EsZ0JBQU1HLFdBQVd2QixTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsZ0JBQU11QixlQUFlbkIsTUFBTW9CLGtCQUFOLENBQXlCakIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJDLFVBQWxELEVBQ2pCbkIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJFLE1BRFIsRUFFakJwQixrQkFBa0JrQixNQUFsQixDQUF5QkcsS0FGUixFQUdqQnZDLDRDQUhpQixDQUFyQjtBQUlBLGdCQUFNd0MsaUJBQWlCdEIsa0JBQWtCa0IsTUFBekM7QUFDQSxtQkFBT0ksZUFBZSxZQUFmLENBQVA7QUFDQSxpQkFBS25DLElBQUwsQ0FBVTZCLFlBQVYsRUFBd0JNLGNBQXhCOztBQUVBUCxxQkFBU1EsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsYUFBSztBQUNwQ0Msa0JBQUVDLGVBQUY7QUFDQSxvQkFBTVQsZUFBZW5CLE1BQU1vQixrQkFBTixDQUF5QmpCLGtCQUFrQmtCLE1BQWxCLENBQXlCQyxVQUFsRCxFQUNqQm5CLGtCQUFrQmtCLE1BQWxCLENBQXlCRSxNQURSLEVBRWpCcEIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJHLEtBRlIsRUFHakJ2Qyw0Q0FIaUIsQ0FBckI7O0FBS0Esb0JBQU1RLFNBQVNVLGtCQUFrQmtCLE1BQWpDO0FBQ0EsdUJBQU81QixPQUFPLFlBQVAsQ0FBUDtBQUNBLHNCQUFLSCxJQUFMLENBQVU2QixZQUFWLEVBQXdCMUIsTUFBeEI7QUFDSCxhQVZEOztBQVlBO0FBQ0EsZ0JBQU04QixTQUFTNUIsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFmO0FBQ0EyQixtQkFBT0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsYUFBSztBQUNsQ0Msa0JBQUVDLGVBQUY7QUFDQSxvQkFBTUMsYUFBYTdCLE1BQU04QixnQkFBTixDQUF1QnhCLFdBQVdlLE1BQVgsQ0FBa0JVLFFBQXpDLEVBQ2Z6QixXQUFXZSxNQUFYLENBQWtCRyxLQURILEVBRWZ2Qyw0Q0FGZSxDQUFuQjs7QUFJQSxzQkFBS0ssSUFBTCxDQUFVdUMsVUFBVixFQUFzQnZCLFdBQVdlLE1BQWpDO0FBQ0gsYUFQRDs7QUFTQTtBQUNBLGdCQUFNVyxXQUFXckMsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBb0MscUJBQVNOLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLGFBQUs7QUFDcENDLGtCQUFFQyxlQUFGO0FBQ0Esb0JBQU1LLGVBQWVqQyxNQUFNa0Msa0JBQU4sQ0FBeUJ6QixrQkFBa0JZLE1BQWxCLENBQXlCQyxVQUFsRCxFQUNqQmIsa0JBQWtCWSxNQUFsQixDQUF5QmMsSUFEUixFQUVqQjFCLGtCQUFrQlksTUFBbEIsQ0FBeUJHLEtBRlIsRUFHakJ0QyxrQ0FIaUIsQ0FBckI7O0FBS0Esb0JBQU1PLFNBQVNnQixrQkFBa0JZLE1BQWpDO0FBQ0EsdUJBQU81QixPQUFPLFlBQVAsQ0FBUDtBQUNBLHNCQUFLSCxJQUFMLENBQVUyQyxZQUFWLEVBQXdCeEMsTUFBeEI7QUFDSCxhQVZEOztBQVlBO0FBQ0EsZ0JBQU0yQyxNQUFNekMsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFaO0FBQ0F3QyxnQkFBSVYsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsYUFBSztBQUMvQkMsa0JBQUVDLGVBQUY7QUFDQSxvQkFBTVMsVUFBVXJDLE1BQU1zQyxhQUFOLENBQW9CM0IsUUFBUVUsTUFBUixDQUFlVSxRQUFuQyxFQUNacEIsUUFBUVUsTUFBUixDQUFlRyxLQURILEVBRVp0QyxrQ0FGWSxDQUFoQjs7QUFJQSxzQkFBS0ksSUFBTCxDQUFVK0MsT0FBVixFQUFtQjFCLFFBQVFVLE1BQTNCO0FBQ0gsYUFQRDs7QUFTQTtBQUNBLGdCQUFNa0IsYUFBYTVDLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQW5CO0FBQ0EyQyx1QkFBV2IsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsYUFBSztBQUN0Q0Msa0JBQUVDLGVBQUY7QUFDQSxzQkFBS3RDLElBQUwsQ0FBVXVCLG1CQUFtQnJCLElBQTdCLEVBQW1DLEVBQUNnRCxRQUFRLHFCQUFULEVBQWdDQyxNQUFNLE1BQXRDLEVBQW5DO0FBQ0gsYUFIRDs7QUFLQTtBQUNBLGdCQUFNQyxXQUFXL0MsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBOEMscUJBQVNoQixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxhQUFLO0FBQ3BDQyxrQkFBRUMsZUFBRjtBQUNBLHNCQUFLdEMsSUFBTCxDQUFVMEIsaUJBQWlCeEIsSUFBM0IsRUFBaUMsRUFBQ2dELFFBQVEsNkJBQVQsRUFBakM7QUFDSCxhQUhEO0FBSUg7Ozs7OztrQkFHVXBELEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5SFQwQixrQjtBQUNGLGtDQUFjO0FBQUE7O0FBQ1YsYUFBS3RCLElBQUwsR0FBWSxFQUFaO0FBQ0g7Ozs7c0NBRWE7QUFBQTs7QUFDVixnQkFBTW1ELFNBQVNoRCxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWY7O0FBRUEsZ0JBQU1nRCxTQUFTakQsU0FBU2tELGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBRixtQkFBT0csV0FBUCxDQUFtQkYsTUFBbkI7QUFDQUEsbUJBQU9HLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCLEVBQStCLFFBQS9COztBQUVBLGdCQUFNQyxrQkFBa0J0RCxTQUFTa0QsYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQkcsZUFBbkI7QUFDQUEsNEJBQWdCRixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsaUJBQTlCLEVBQWlELGNBQWpEO0FBQ0FDLDRCQUFnQkMsU0FBaEIsR0FBNEIsa0JBQTVCO0FBQ0FELDRCQUFnQnZCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxhQUFLO0FBQzNDQyxrQkFBRXdCLGNBQUY7QUFDQSxzQkFBSzNELElBQUwsR0FBWTtBQUNSLDJEQUF1QyxJQUQvQjtBQUVSLGdEQUE0QixDQUZwQjtBQUdSLDRDQUF3QixHQUhoQjtBQUlSLDJDQUF1QixDQUpmO0FBS1IsbUVBQStDLEdBTHZDO0FBTVIscURBQWlDLEdBTnpCO0FBT1IsZ0VBQTRDLEdBUHBDO0FBUVIsd0RBQW9DLEdBUjVCO0FBU1IsMENBQXNCLEdBVGQ7QUFVUix3Q0FBb0IsR0FWWjtBQVdSLDhDQUEwQixDQVhsQjtBQVlSLHVFQUFtRDtBQVozQyxpQkFBWjtBQWNILGFBaEJEOztBQWtCQSxnQkFBTTRELGNBQWN6RCxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQk0sV0FBbkI7QUFDQUEsd0JBQVlMLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0FBQ0FJLHdCQUFZRixTQUFaLEdBQXdCLGlEQUF4QjtBQUNIOzs7Ozs7a0JBR1VwQyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3pDQSxZQUFNO0FBQ2pCLFFBQU02QixTQUFTaEQsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLFFBQU1NLG1CQUFtQlAsU0FBU2tELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBekI7QUFDQTNDLHFCQUFpQjZDLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixpQkFBL0I7QUFDQUwsV0FBT0csV0FBUCxDQUFtQjVDLGdCQUFuQjs7QUFFQSxRQUFNbUQsYUFBYSxDQUFDLG9CQUFELEVBQ0MsOEJBREQsRUFFQyxpQkFGRCxFQUdDLDJCQUhELEVBSUMscUJBSkQsRUFLQyw2QkFMRCxDQUFuQjs7QUFPQUEsZUFBV0MsT0FBWCxDQUFvQixrQkFBVTtBQUMxQixZQUFNQyxpQkFBaUI1RCxTQUFTa0QsYUFBVCxDQUF1QixRQUF2QixDQUF2QjtBQUNBVSx1QkFBZVIsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDQU8sdUJBQWVDLEtBQWYsR0FBdUJDLE1BQXZCO0FBQ0FGLHVCQUFlTCxTQUFmLEdBQTJCTyxNQUEzQjtBQUNBdkQseUJBQWlCNEMsV0FBakIsQ0FBNkJTLGNBQTdCO0FBQ0gsS0FORDs7QUFRQXJELHFCQUFpQndCLGdCQUFqQixDQUFrQyxRQUFsQyxFQUE0QyxhQUFLO0FBQzdDQyxVQUFFd0IsY0FBRjtBQUNBLFlBQU1PLFlBQVkvRCxTQUFTZ0UsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWxCO0FBQ0FELGtCQUFVSixPQUFWLENBQWtCO0FBQUEsbUJBQVlNLFNBQVNiLFNBQVQsQ0FBbUJjLE1BQW5CLENBQTBCLFNBQTFCLENBQVo7QUFBQSxTQUFsQjtBQUNBLGdCQUFRbEMsRUFBRW1DLE1BQUYsQ0FBU04sS0FBakI7QUFDSSxpQkFBSyxvQkFBTDtBQUNJLG9CQUFNdEMsV0FBV3ZCLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQXNCLHlCQUFTNkIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsU0FBdkI7QUFDQTtBQUNKLGlCQUFLLDhCQUFMO0FBQ0ksb0JBQU16QixTQUFTNUIsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFmO0FBQ0EyQix1QkFBT3dCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFNBQXJCO0FBQ0E7QUFDSixpQkFBSyxpQkFBTDtBQUNJLG9CQUFNaEIsV0FBV3JDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQW9DLHlCQUFTZSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNBO0FBQ0osaUJBQUssMkJBQUw7QUFDSSxvQkFBTVosTUFBTXpDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBd0Msb0JBQUlXLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBO0FBQ0osaUJBQUsscUJBQUw7QUFDSSxvQkFBTTdELE1BQU1RLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBVCxvQkFBSTRELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBO0FBQ0osaUJBQUssNkJBQUw7QUFDSSxvQkFBTU4sV0FBVy9DLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQThDLHlCQUFTSyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNBO0FBQ0o7QUFDSTtBQTFCUjtBQTRCSCxLQWhDRDtBQWtDSCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hETSxJQUFNZSxrQ0FBYSxDQUN0QiwwQkFEc0IsRUFFdEIscUJBRnNCLEVBR3RCLHNCQUhzQixFQUl0QiwrQkFKc0IsRUFLdEIsMENBTHNCLEVBTXRCLDZDQU5zQixFQU90QixxQ0FQc0IsRUFRdEIsd0JBUnNCLEVBU3RCLGlEQVRzQixFQVV0QixvQkFWc0IsRUFXdEIsa0NBWHNCLEVBWXRCLGtCQVpzQixDQUFuQjs7QUFlQSxJQUFNQywwQkFBUztBQUNsQixnQ0FBNEIsS0FEVjtBQUVsQiwyQkFBdUIsUUFGTDtBQUdsQiw0QkFBd0IsUUFITjtBQUlsQixxQ0FBaUMsT0FKZjtBQUtsQixnREFBNEMsTUFMMUI7QUFNbEIsbURBQStDLFFBTjdCO0FBT2xCLDJDQUF1QyxRQVByQjtBQVFsQiw4QkFBMEIsTUFSUjtBQVNsQix1REFBbUQsT0FUakM7QUFVbEIsMEJBQXNCLE1BVko7QUFXbEIsd0NBQW9DLFlBWGxCO0FBWWxCLHdCQUFvQixTQVpGO0FBYWxCLFdBQU8sTUFiVztBQWNsQixhQUFTLEtBZFM7QUFlbEIsMkJBQXVCLE9BZkw7QUFnQmxCLGlDQUE2QjtBQWhCWCxDQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmUDs7QUFFTyxJQUFNQyw4Q0FBbUIsMEJBQUNDLGNBQUQsRUFBaUJ0QixNQUFqQixFQUF5QnVCLE1BQXpCLEVBQW9DO0FBQ2hFLFFBQU1GLG1CQUFtQnRFLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0FELFdBQU9FLFdBQVAsQ0FBbUJtQixnQkFBbkI7QUFDQUEscUJBQWlCbEIsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLFdBQS9CO0FBQ0EsUUFBTW9CLGdCQUFnQnpFLFNBQVNrRCxhQUFULENBQXVCLE9BQXZCLENBQXRCO0FBQ0F1QixrQkFBY2xCLFNBQWQsR0FBMEIsWUFBMUI7QUFDQWUscUJBQWlCbkIsV0FBakIsQ0FBNkJzQixhQUE3Qjs7QUFFQSxRQUFNQyxxQkFBcUIsQ0FBQyxnQkFBRCxFQUFtQkMsTUFBbkIsQ0FBMEJQLHFCQUExQixDQUEzQjtBQUNBTSx1QkFBbUJmLE9BQW5CLENBQTJCLFVBQUNpQixNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN0QyxZQUFNQyxNQUFNOUUsU0FBU2tELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQUkyQixNQUFNLENBQVYsRUFBYTtBQUFFQyxnQkFBSTFCLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixVQUFsQjtBQUErQjtBQUM5Q2lCLHlCQUFpQm5CLFdBQWpCLENBQTZCMkIsR0FBN0I7QUFDQSxZQUFNQyxPQUFPL0UsU0FBU2tELGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBNkIsYUFBS3hCLFNBQUwsR0FBaUJxQixNQUFqQjtBQUNBLFlBQU1JLGlCQUFpQmhGLFNBQVNrRCxhQUFULENBQXVCLE9BQXZCLENBQXZCO0FBQ0E4Qix1QkFBZW5CLEtBQWYsR0FBdUJlLE1BQXZCO0FBQ0FJLHVCQUFlQyxZQUFmLENBQTRCLE1BQTVCLEVBQW9DLFVBQXBDO0FBQ0EsWUFBSUwsV0FBVyxnQkFBZixFQUFpQztBQUM3QkksMkJBQWVFLE9BQWYsR0FBeUIsSUFBekI7QUFDQUYsMkJBQWVDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBcUNULE1BQXJDO0FBQ0gsU0FIRCxNQUdPO0FBQ0hRLDJCQUFlQyxZQUFmLENBQTRCLElBQTVCLEVBQXFDVCxNQUFyQztBQUNIO0FBQ0RNLFlBQUkzQixXQUFKLENBQWdCNkIsY0FBaEI7QUFDQUYsWUFBSTNCLFdBQUosQ0FBZ0I0QixJQUFoQjtBQUNILEtBakJEO0FBa0JBVCxxQkFBaUJ2QyxnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEN3QyxjQUE1QztBQUNILENBNUJNOztBQThCQSxJQUFNWSxzQ0FBZSxzQkFBQ0MsV0FBRCxFQUFjbkMsTUFBZCxFQUFzQnVCLE1BQXRCLEVBQThCM0MsS0FBOUIsRUFBd0M7QUFDaEUsUUFBTXNELGVBQWVuRixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CZ0MsWUFBbkI7QUFDQUEsaUJBQWEvQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixXQUEzQixFQUF3QyxlQUF4QztBQUNBLFFBQU1nQyxhQUFhckYsU0FBU2tELGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQW1DLGVBQVc5QixTQUFYLEdBQXVCLE9BQXZCO0FBQ0E0QixpQkFBYWhDLFdBQWIsQ0FBeUJrQyxVQUF6Qjs7QUFFQSxRQUFNQyxpQkFBaUJ6RCxLQUF2QjtBQUNBeUQsbUJBQWUzQixPQUFmLENBQXVCLFVBQUNpQixNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNsQyxZQUFNQyxNQUFNOUUsU0FBU2tELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQUkyQixNQUFNLENBQVYsRUFBYTtBQUFFQyxnQkFBSTFCLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixVQUFsQjtBQUErQjtBQUM5QzhCLHFCQUFhaEMsV0FBYixDQUF5QjJCLEdBQXpCO0FBQ0EsWUFBTUMsT0FBTy9FLFNBQVNrRCxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQTZCLGFBQUt4QixTQUFMLEdBQWlCcUIsTUFBakI7QUFDQSxZQUFNVyxhQUFhdkYsU0FBU2tELGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQXFDLG1CQUFXMUIsS0FBWCxHQUFtQmUsTUFBbkI7QUFDQVcsbUJBQVdOLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBaEM7QUFDQSxZQUFJTCxXQUFXLFdBQWYsRUFBNEI7QUFDeEJXLHVCQUFXTCxPQUFYLEdBQXFCLElBQXJCO0FBQ0FLLHVCQUFXTixZQUFYLENBQXdCLElBQXhCLEVBQWlDVCxNQUFqQztBQUNILFNBSEQsTUFHTztBQUNIZSx1QkFBV04sWUFBWCxDQUF3QixJQUF4QixFQUFpQ1QsTUFBakM7QUFDSDtBQUNETSxZQUFJM0IsV0FBSixDQUFnQm9DLFVBQWhCO0FBQ0FULFlBQUkzQixXQUFKLENBQWdCNEIsSUFBaEI7QUFDSCxLQWpCRDtBQWtCQUksaUJBQWFwRCxnQkFBYixDQUE4QixRQUE5QixFQUF3Q3FELFdBQXhDO0FBQ0gsQ0E1Qk07O0FBOEJBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsWUFBRCxFQUFleEMsTUFBZixFQUF1QnVCLE1BQXZCLEVBQWtDO0FBQzFELFFBQU1sQixrQkFBa0J0RCxTQUFTa0QsYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CRyxlQUFuQjtBQUNBQSxvQkFBZ0JGLFNBQWhCLENBQTBCQyxHQUExQixDQUFpQ21CLE1BQWpDLFdBQStDLGNBQS9DO0FBQ0FsQixvQkFBZ0JDLFNBQWhCLEdBQTRCLGtCQUE1QjtBQUNBRCxvQkFBZ0J2QixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMwRCxZQUExQztBQUNILENBTk07O0FBUUEsSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDbkIsY0FBRCxFQUFpQnRCLE1BQWpCLEVBQTRCO0FBQ3RELFFBQU1xQixtQkFBbUJ0RSxTQUFTa0QsYUFBVCxDQUF1QixRQUF2QixDQUF6QjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CbUIsZ0JBQW5CO0FBQ0FBLHFCQUFpQmxCLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixXQUEvQjs7QUFFQSxRQUFNc0MsYUFBYXZCLHFCQUFuQjtBQUNBdUIsZUFBV2hDLE9BQVgsQ0FBbUIsa0JBQVU7QUFDekIsWUFBTXFCLGlCQUFpQmhGLFNBQVNrRCxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0E4Qix1QkFBZW5CLEtBQWYsR0FBdUJlLE1BQXZCO0FBQ0FJLHVCQUFlekIsU0FBZixHQUEyQnFCLE1BQTNCO0FBQ0FOLHlCQUFpQm5CLFdBQWpCLENBQTZCNkIsY0FBN0I7QUFDSCxLQUxEO0FBTUFWLHFCQUFpQnZDLGdCQUFqQixDQUFrQyxRQUFsQyxFQUE0Q3dDLGNBQTVDO0FBQ0gsQ0FiTTs7QUFlQSxJQUFNcUIsZ0NBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzNCLFFBQU1DLE1BQU03RixTQUFTZ0UsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQVo7QUFDQTZCLFFBQUlsQyxPQUFKLENBQVksY0FBTTtBQUFDbUMsV0FBRzNGLFVBQUgsQ0FBY0MsV0FBZCxDQUEwQjBGLEVBQTFCO0FBQThCLEtBQWpEOztBQUVBLFFBQU1DLFFBQVEvRixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxRQUFNK0YsVUFBVWhHLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0E4QyxZQUFRNUMsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsYUFBdEI7QUFDQTBDLFVBQU01QyxXQUFOLENBQWtCNkMsT0FBbEI7O0FBRUEsUUFBTUMsUUFBUWpHLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQStDLFVBQU03QyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixrQkFBcEI7QUFDQTBDLFVBQU01QyxXQUFOLENBQWtCOEMsS0FBbEI7QUFDSCxDQVpNOztBQWNBLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ3ZHLElBQUQsRUFBT0UsSUFBUCxFQUFhQyxNQUFiLEVBQXdCO0FBQy9DLFFBQU0rRixNQUFNN0YsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFaO0FBQ0EsUUFBSTRGLEdBQUosRUFBUztBQUNMQSxZQUFJMUYsVUFBSixDQUFlQyxXQUFmLENBQTJCeUYsR0FBM0I7QUFDSDtBQUNELFFBQUlNLE9BQU8sV0FBWDtBQUNBLFFBQU1DLE9BQU9wRyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxRQUFJbUcsS0FBS2hELFNBQUwsQ0FBZWlELFFBQWYsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztBQUN2Q0YsZUFBTyxZQUFQO0FBQ0g7O0FBRUQsUUFBTUcsTUFBTXRHLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQW9ELFFBQUlsRCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsVUFBbEI7QUFDQWlELFFBQUkvQyxTQUFKLEdBQWdCNEMsSUFBaEI7QUFDQSxRQUFNSSxTQUFTdkcsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FzRyxXQUFPcEQsV0FBUCxDQUFtQm1ELEdBQW5COztBQUVBQSxRQUFJdkUsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsYUFBSztBQUMvQkMsVUFBRXdCLGNBQUY7QUFDQSxZQUFNZ0QsT0FBT3hHLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBdUcsYUFBS3BELFNBQUwsQ0FBZXFELE1BQWYsQ0FBc0IsWUFBdEI7QUFDQUQsYUFBS3BELFNBQUwsQ0FBZXFELE1BQWYsQ0FBc0IsYUFBdEI7QUFDQTlHLGFBQUtFLElBQUwsRUFBV0MsTUFBWDtBQUNILEtBTkQ7QUFPSCxDQXhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNuR1EsVUFBQ0QsSUFBRCxFQUFPQyxNQUFQLEVBQWtCO0FBQzdCLFFBQU1JLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBaEI7QUFDQSxRQUFNeUcsT0FBTzFHLFNBQVNrRCxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQXdELFNBQUt0RCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsY0FBbkI7QUFDQW5ELFlBQVFpRCxXQUFSLENBQW9CdUQsSUFBcEI7O0FBRUEsUUFBTUMsZUFBZTNHLFNBQVNrRCxhQUFULENBQXVCLElBQXZCLENBQXJCO0FBQ0F5RCxpQkFBYXZELFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0FxRCxTQUFLdkQsV0FBTCxDQUFpQndELFlBQWpCO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWS9HLE1BQVosRUFBb0JnSCxJQUFwQixHQUEyQm5ELE9BQTNCLENBQW1DLGNBQU07QUFDckMsWUFBTW9ELElBQUkvRyxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0F5RCxxQkFBYXhELFdBQWIsQ0FBeUI0RCxDQUF6QjtBQUNBLFlBQU1DLFdBQVdoSCxTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBOEQsaUJBQVN6RCxTQUFULEdBQXdCdUMsR0FBR21CLFdBQUgsRUFBeEI7QUFDQSxZQUFNQyxRQUFRbEgsU0FBU2tELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBZ0UsY0FBTTNELFNBQU4sR0FBa0IsUUFBT3pELE9BQU9nRyxFQUFQLENBQVAsTUFBc0IsUUFBdEIsR0FBaUNoRyxPQUFPZ0csRUFBUCxFQUFXcUIsSUFBWCxDQUFnQixJQUFoQixDQUFqQyxHQUF5RHJILE9BQU9nRyxFQUFQLENBQTNFO0FBQ0FpQixVQUFFNUQsV0FBRixDQUFjNkQsUUFBZDtBQUNBRCxVQUFFNUQsV0FBRixDQUFjK0QsS0FBZDtBQUNILEtBVEQ7O0FBV0EsUUFBTUUsUUFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RCxDQUFkOztBQUVBUixXQUFPQyxJQUFQLENBQVloSCxJQUFaLEVBQWtCOEQsT0FBbEIsQ0FBMkIsVUFBQzBELEtBQUQsRUFBUXhDLENBQVIsRUFBYztBQUNyQyxZQUFNeUMsS0FBS3RILFNBQVNrRCxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQXdELGFBQUt2RCxXQUFMLENBQWlCbUUsRUFBakI7QUFDQSxZQUFNUCxJQUFJL0csU0FBU2tELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBNkQsVUFBRXhELFNBQUYsR0FBYzhELEtBQWQ7QUFDQUMsV0FBR3JDLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBc0JtQyxNQUFNdkMsQ0FBTixDQUF0QjtBQUNBeUMsV0FBR25FLFdBQUgsQ0FBZTRELENBQWY7QUFDQSxZQUFNaEMsT0FBTy9FLFNBQVNrRCxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQTZCLGFBQUt4QixTQUFMLEdBQWlCMUQsS0FBS3dILEtBQUwsRUFBWUUsT0FBWixDQUFvQixDQUFwQixDQUFqQjtBQUNBRCxXQUFHbkUsV0FBSCxDQUFlNEIsSUFBZjtBQUNILEtBVkQ7QUFhSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRDs7QUFDQTs7SUFBWXlDLE07Ozs7OztJQUdOdkcsTztBQUNGLHVCQUFjO0FBQUE7O0FBQ1YsYUFBS3NELGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQjNFLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsYUFBS3dGLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnhGLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsYUFBSzZGLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQjdGLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsYUFBSzZILFNBQUwsR0FBaUI7QUFDYnJGLHNCQUFVLDBCQURHO0FBRWJQLG1CQUFPLENBQUMsV0FBRDtBQUZNLFNBQWpCO0FBSUg7Ozs7dUNBRWNHLEMsRUFBRztBQUNkLGlCQUFLeUYsU0FBTCxDQUFlckYsUUFBZixHQUEwQkosRUFBRW1DLE1BQUYsQ0FBU04sS0FBbkM7QUFDSDs7O29DQUVXN0IsQyxFQUFHO0FBQ1hBLGNBQUV3QixjQUFGO0FBQ0EsZ0JBQUl4QixFQUFFbUMsTUFBRixDQUFTZSxPQUFiLEVBQXNCO0FBQ2xCbEQsa0JBQUVtQyxNQUFGLENBQVNoRSxVQUFULENBQW9CaUQsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLFVBQWxDO0FBQ0Esb0JBQUlyQixFQUFFbUMsTUFBRixDQUFTTixLQUFULEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2hDN0QsNkJBQVNnRSxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0wsT0FBM0MsQ0FBbUQsa0JBQVU7QUFBRUcsK0JBQU9vQixPQUFQLEdBQWlCLEtBQWpCLENBQXdCcEIsT0FBTzNELFVBQVAsQ0FBa0JpRCxTQUFsQixDQUE0QmMsTUFBNUIsQ0FBbUMsVUFBbkM7QUFBZ0QscUJBQXZJO0FBQ0EseUJBQUt1RCxTQUFMLENBQWUsT0FBZixJQUEwQixDQUFDLFdBQUQsQ0FBMUI7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsd0JBQU1DLE1BQU0xSCxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFaO0FBQ0F5SCx3QkFBSXhDLE9BQUosR0FBYyxLQUFkO0FBQ0F3Qyx3QkFBSXZILFVBQUosQ0FBZWlELFNBQWYsQ0FBeUJjLE1BQXpCLENBQWdDLFVBQWhDO0FBQ0Esd0JBQU15RCxTQUFTLEtBQUtGLFNBQUwsQ0FBZSxPQUFmLEVBQXdCeEUsTUFBeEIsQ0FBK0IsZ0JBQVE7QUFBRSwrQkFBT0gsU0FBUyxXQUFoQjtBQUE2QixxQkFBdEUsQ0FBZjtBQUNBNkUsMkJBQU9DLElBQVAsQ0FBWTVGLEVBQUVtQyxNQUFGLENBQVNOLEtBQXJCO0FBQ0EseUJBQUs0RCxTQUFMLENBQWUsT0FBZixJQUEwQkUsTUFBMUI7QUFDSDtBQUNKLGFBYkQsTUFhTyxJQUFJM0YsRUFBRW1DLE1BQUYsQ0FBU2UsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUNuQ2xELGtCQUFFbUMsTUFBRixDQUFTaEUsVUFBVCxDQUFvQmlELFNBQXBCLENBQThCYyxNQUE5QixDQUFxQyxVQUFyQztBQUNBLHFCQUFLdUQsU0FBTCxDQUFlLE9BQWYsSUFBMEIsS0FBS0EsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RSxNQUF4QixDQUErQixrQkFBVTtBQUFFLDJCQUFPMkIsV0FBVzVDLEVBQUVtQyxNQUFGLENBQVNOLEtBQTNCO0FBQWtDLGlCQUE3RSxDQUExQjtBQUNIO0FBQ0o7OztxQ0FFWTdCLEMsRUFBRztBQUNaQSxjQUFFd0IsY0FBRjtBQUNBLGdCQUFNbUMsYUFBYSxLQUFLOEIsU0FBeEI7QUFDQSxnQkFBSTVGLGNBQUo7QUFDQSxnQkFBSThELFdBQVc5RCxLQUFYLENBQWlCLENBQWpCLE1BQXdCLFdBQTVCLEVBQXlDO0FBQ3JDQSx3QkFBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLENBQVI7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVE4RCxXQUFXLE9BQVgsQ0FBUjtBQUNIOztBQUVELGlCQUFLakUsTUFBTCxHQUFjO0FBQ1ZVLDBCQUFVLEtBQUtxRixTQUFMLENBQWVyRixRQURmO0FBRVZQLDRCQUZVO0FBR1ZvQix3QkFBUTtBQUhFLGFBQWQ7QUFLSDs7O2tDQUVTO0FBQ04sZ0JBQU1ELFNBQVNoRCxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWY7O0FBRUEsZ0JBQU1nRCxTQUFTakQsU0FBU2tELGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBRixtQkFBT0csV0FBUCxDQUFtQkYsTUFBbkI7QUFDQUEsbUJBQU9HLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCLEVBQStCLFFBQS9COztBQUVBbUUsbUJBQU85QixjQUFQLENBQXNCLEtBQUtuQixjQUEzQixFQUEyQ3RCLE1BQTNDOztBQUVBdUUsbUJBQU9yQyxZQUFQLENBQW9CLEtBQUtDLFdBQXpCLEVBQXNDbkMsTUFBdEMsRUFBOEMsR0FBOUMsRUFBbUQsQ0FBQyxXQUFELEVBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxNQUF0RCxFQUE4RCxNQUE5RCxFQUFzRSxNQUF0RSxFQUE4RSxNQUE5RSxFQUFzRixNQUF0RixDQUFuRDs7QUFFQXVFLG1CQUFPaEMsWUFBUCxDQUFvQixLQUFLQyxZQUF6QixFQUF1Q3hDLE1BQXZDLEVBQStDLEtBQS9DOztBQUVBLGdCQUFNUSxjQUFjekQsU0FBU2tELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJNLFdBQW5CO0FBQ0FBLHdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixhQUExQjtBQUNBSSx3QkFBWUYsU0FBWixHQUF3QixxRUFBeEI7QUFDSDs7Ozs7O2tCQUdVdEMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RWY7O0FBQ0E7O0lBQVl1RyxNOzs7Ozs7SUFFTi9HLGlCO0FBQ0YsaUNBQWM7QUFBQTs7QUFDVixhQUFLZ0gsU0FBTCxHQUFpQjtBQUNiLDBCQUFjLENBQUMsZ0JBQUQsQ0FERDtBQUViLHFCQUFTLENBQUMsV0FBRCxDQUZJO0FBR2Isc0JBQVU7QUFIRyxTQUFqQjtBQUtBLGFBQUtsRCxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0IzRSxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLGFBQUt3RixXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJ4RixJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLGFBQUs2RixZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0I3RixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUtpSSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JqSSxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUs4QixNQUFMLEdBQWM7QUFDVkMsd0JBQVl5QyxxQkFERjtBQUVWeEMsb0JBQVEsdUJBRkU7QUFHVkMsbUJBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxDQUhHO0FBSVZvQixvQkFBUTtBQUpFLFNBQWQ7QUFNSDs7Ozt1Q0FFY2pCLEMsRUFBRztBQUNkQSxjQUFFd0IsY0FBRjtBQUNBLGdCQUFJeEIsRUFBRW1DLE1BQUYsQ0FBU2UsT0FBYixFQUFzQjtBQUNsQmxELGtCQUFFbUMsTUFBRixDQUFTaEUsVUFBVCxDQUFvQmlELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxVQUFsQztBQUNBLG9CQUFJckIsRUFBRW1DLE1BQUYsQ0FBU04sS0FBVCxLQUFtQixnQkFBdkIsRUFBeUM7QUFDckM3RCw2QkFBU2dFLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0wsT0FBL0MsQ0FBd0Qsa0JBQVU7QUFBQ0csK0JBQU9vQixPQUFQLEdBQWlCLEtBQWpCLENBQXdCcEIsT0FBTzNELFVBQVAsQ0FBa0JpRCxTQUFsQixDQUE0QmMsTUFBNUIsQ0FBbUMsVUFBbkM7QUFBK0MscUJBQTFJO0FBQ0EseUJBQUt1RCxTQUFMLENBQWUsWUFBZixJQUErQixDQUFDLGdCQUFELENBQS9CO0FBQ0gsaUJBSEQsTUFHTztBQUNILHdCQUFNQyxNQUFNMUgsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBWjtBQUNBeUgsd0JBQUl4QyxPQUFKLEdBQWMsS0FBZDtBQUNBd0Msd0JBQUl2SCxVQUFKLENBQWVpRCxTQUFmLENBQXlCYyxNQUF6QixDQUFnQyxVQUFoQztBQUNBLHdCQUFNeUQsU0FBUyxLQUFLRixTQUFMLENBQWUsWUFBZixFQUE2QnhFLE1BQTdCLENBQXFDLG9CQUFZO0FBQUMsK0JBQU9iLGFBQWEsZ0JBQXBCO0FBQXFDLHFCQUF2RixDQUFmO0FBQ0F1RiwyQkFBT0MsSUFBUCxDQUFZNUYsRUFBRW1DLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRELFNBQUwsQ0FBZSxZQUFmLElBQStCRSxNQUEvQjtBQUNIO0FBQ0osYUFiRCxNQWFPLElBQUkzRixFQUFFbUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DbEQsa0JBQUVtQyxNQUFGLENBQVNoRSxVQUFULENBQW9CaUQsU0FBcEIsQ0FBOEJjLE1BQTlCLENBQXFDLFVBQXJDO0FBQ0EscUJBQUt1RCxTQUFMLENBQWU5RixVQUFmLEdBQTRCLEtBQUs4RixTQUFMLENBQWU5RixVQUFmLENBQTBCc0IsTUFBMUIsQ0FBaUMsa0JBQVU7QUFBQywyQkFBTzJCLFdBQVc1QyxFQUFFbUMsTUFBRixDQUFTTixLQUEzQjtBQUFpQyxpQkFBN0UsQ0FBNUI7QUFDSDtBQUNKOzs7b0NBRVc3QixDLEVBQUc7QUFDWEEsY0FBRXdCLGNBQUY7QUFDQSxnQkFBSXhCLEVBQUVtQyxNQUFGLENBQVNlLE9BQWIsRUFBc0I7QUFDbEJsRCxrQkFBRW1DLE1BQUYsQ0FBU2hFLFVBQVQsQ0FBb0JpRCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsVUFBbEM7QUFDQSxvQkFBSXJCLEVBQUVtQyxNQUFGLENBQVNOLEtBQVQsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEM3RCw2QkFBU2dFLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDTCxPQUEzQyxDQUFtRCxrQkFBVTtBQUFFRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakIsQ0FBd0JwQixPQUFPM0QsVUFBUCxDQUFrQmlELFNBQWxCLENBQTRCYyxNQUE1QixDQUFtQyxVQUFuQztBQUFnRCxxQkFBdkk7QUFDQSx5QkFBS3VELFNBQUwsQ0FBZSxPQUFmLElBQTBCLENBQUMsV0FBRCxDQUExQjtBQUNILGlCQUhELE1BR087QUFDSCx3QkFBTUMsTUFBTTFILFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7QUFDQXlILHdCQUFJeEMsT0FBSixHQUFjLEtBQWQ7QUFDQXdDLHdCQUFJdkgsVUFBSixDQUFlaUQsU0FBZixDQUF5QmMsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDQSx3QkFBTXlELFNBQVMsS0FBS0YsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RSxNQUF4QixDQUErQixnQkFBUTtBQUFFLCtCQUFPSCxTQUFTLFdBQWhCO0FBQTZCLHFCQUF0RSxDQUFmO0FBQ0E2RSwyQkFBT0MsSUFBUCxDQUFZNUYsRUFBRW1DLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRELFNBQUwsQ0FBZSxPQUFmLElBQTBCRSxNQUExQjtBQUNIO0FBQ0osYUFiRCxNQWFPLElBQUkzRixFQUFFbUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DbEQsa0JBQUVtQyxNQUFGLENBQVNoRSxVQUFULENBQW9CaUQsU0FBcEIsQ0FBOEJjLE1BQTlCLENBQXFDLFVBQXJDO0FBQ0EscUJBQUt1RCxTQUFMLENBQWUsT0FBZixJQUEwQixLQUFLQSxTQUFMLENBQWUsT0FBZixFQUF3QnhFLE1BQXhCLENBQStCLGtCQUFVO0FBQUUsMkJBQU8yQixXQUFXNUMsRUFBRW1DLE1BQUYsQ0FBU04sS0FBM0I7QUFBa0MsaUJBQTdFLENBQTFCO0FBQ0g7QUFDSjs7O3FDQUVZN0IsQyxFQUFHO0FBQ1pBLGNBQUV3QixjQUFGO0FBQ0EsaUJBQUtpRSxTQUFMLENBQWUsUUFBZixJQUEyQnpGLEVBQUVtQyxNQUFGLENBQVNOLEtBQXBDO0FBQ0g7OztxQ0FFWTdCLEMsRUFBRztBQUNaQSxjQUFFd0IsY0FBRjtBQUNBLGdCQUFNbUMsYUFBYSxLQUFLOEIsU0FBeEI7QUFDQSxnQkFBSTlGLG1CQUFKO0FBQUEsZ0JBQWdCRSxjQUFoQjs7QUFFQSxnQkFBSThELFdBQVcsWUFBWCxFQUF5QixDQUF6QixNQUFnQyxnQkFBcEMsRUFBc0Q7QUFDbERoRSw2QkFBYXlDLHFCQUFiO0FBQ0gsYUFGRCxNQUVPO0FBQ0h6Qyw2QkFBYWdFLFdBQVcsWUFBWCxDQUFiO0FBQ0g7O0FBRUQsZ0JBQUlBLFdBQVc5RCxLQUFYLENBQWlCLENBQWpCLE1BQXdCLFdBQTVCLEVBQXlDO0FBQ3JDQSx3QkFBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLENBQVI7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVE4RCxXQUFXLE9BQVgsQ0FBUjtBQUNIO0FBQ0QsaUJBQUtqRSxNQUFMLEdBQWM7QUFDVkMsNEJBQVlBLFVBREY7QUFFVkUsdUJBQU9BLEtBRkc7QUFHVkQsd0JBQVErRCxXQUFXL0QsTUFIVDtBQUlWcUIsd0JBQVE7QUFKRSxhQUFkO0FBTUg7Ozt1Q0FHYztBQUNYLGdCQUFNRCxTQUFTaEQsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNZ0QsU0FBU2pELFNBQVNrRCxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixTQUEvQixFQUEwQyxhQUExQzs7QUFFQW1FLG1CQUFPbEQsZ0JBQVAsQ0FBd0IsS0FBS0MsY0FBN0IsRUFBNkN0QixNQUE3QyxFQUFxRCxHQUFyRDs7QUFFQXVFLG1CQUFPckMsWUFBUCxDQUFvQixLQUFLQyxXQUF6QixFQUFzQ25DLE1BQXRDLEVBQThDLEdBQTlDLEVBQW1ELENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsTUFBOUMsRUFBc0QsTUFBdEQsQ0FBbkQ7O0FBR0EsZ0JBQU02RSxpQkFBaUI5SCxTQUFTa0QsYUFBVCxDQUF1QixRQUF2QixDQUF2QjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQjJFLGNBQW5CO0FBQ0FBLDJCQUFlMUUsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsV0FBN0I7QUFDQXlFLDJCQUFlM0UsV0FBZixDQUEyQm5ELFNBQVMrSCxjQUFULENBQXdCLGVBQXhCLENBQTNCO0FBQ0EsZ0JBQU1DLFVBQVUsQ0FBQyx1QkFBRCxFQUEwQixPQUExQixFQUFtQyxLQUFuQyxDQUFoQjtBQUNBQSxvQkFBUXJFLE9BQVIsQ0FBZ0Isa0JBQVU7QUFDdEIsb0JBQU1zRSxlQUFlakksU0FBU2tELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQStFLDZCQUFhcEUsS0FBYixHQUFxQmUsTUFBckI7QUFDQXFELDZCQUFhMUUsU0FBYixHQUF5QnFCLE1BQXpCO0FBQ0FrRCwrQkFBZTNFLFdBQWYsQ0FBMkI4RSxZQUEzQjtBQUNILGFBTEQ7QUFNQUgsMkJBQWUvRixnQkFBZixDQUFnQyxRQUFoQyxFQUEwQyxLQUFLOEYsWUFBL0M7O0FBRUFMLG1CQUFPaEMsWUFBUCxDQUFvQixLQUFLQyxZQUF6QixFQUF1Q3hDLE1BQXZDLEVBQStDLFVBQS9DOztBQUVBLGdCQUFNUSxjQUFjekQsU0FBU2tELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJNLFdBQW5CO0FBQ0FBLHdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixhQUExQjtBQUNBSSx3QkFBWUYsU0FBWixHQUF3QiwwQ0FBeEI7QUFDSDs7Ozs7O2tCQUdVOUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElmOztBQUNBOztJQUFZK0csTTs7Ozs7O0lBR04xRyxpQjtBQUNGLGlDQUFjO0FBQUE7O0FBQ1YsYUFBSzJHLFNBQUwsR0FBaUI7QUFDYiwwQkFBYyxDQUFDLGdCQUFELENBREQ7QUFFYixxQkFBUyxDQUFDLFdBQUQsQ0FGSTtBQUdiLG9CQUFRO0FBSEssU0FBakI7QUFLQSxhQUFLbEQsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CM0UsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxhQUFLd0YsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCeEYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxhQUFLc0ksVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCdEksSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxhQUFLNkYsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCN0YsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDSDs7Ozt1Q0FFY29DLEMsRUFBRztBQUNkQSxjQUFFd0IsY0FBRjtBQUNBLGdCQUFJeEIsRUFBRW1DLE1BQUYsQ0FBU2UsT0FBYixFQUFzQjtBQUNsQmxELGtCQUFFbUMsTUFBRixDQUFTaEUsVUFBVCxDQUFvQmlELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxVQUFsQztBQUNBLG9CQUFJckIsRUFBRW1DLE1BQUYsQ0FBU04sS0FBVCxLQUFtQixnQkFBdkIsRUFBeUM7QUFDckM3RCw2QkFBU2dFLGdCQUFULENBQTBCLG9CQUExQixFQUFnREwsT0FBaEQsQ0FBd0Qsa0JBQVU7QUFBRUcsK0JBQU9vQixPQUFQLEdBQWlCLEtBQWpCLENBQXdCcEIsT0FBTzNELFVBQVAsQ0FBa0JpRCxTQUFsQixDQUE0QmMsTUFBNUIsQ0FBbUMsVUFBbkM7QUFBZ0QscUJBQTVJO0FBQ0EseUJBQUt1RCxTQUFMLENBQWUsWUFBZixJQUErQixDQUFDLGdCQUFELENBQS9CO0FBQ0gsaUJBSEQsTUFHTztBQUNILHdCQUFNQyxNQUFNMUgsU0FBU0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBWjtBQUNBeUgsd0JBQUl4QyxPQUFKLEdBQWMsS0FBZDtBQUNBd0Msd0JBQUl2SCxVQUFKLENBQWVpRCxTQUFmLENBQXlCYyxNQUF6QixDQUFnQyxVQUFoQztBQUNBLHdCQUFNeUQsU0FBUyxLQUFLRixTQUFMLENBQWUsWUFBZixFQUE2QnhFLE1BQTdCLENBQW9DLG9CQUFZO0FBQUUsK0JBQU9iLGFBQWEsZ0JBQXBCO0FBQXNDLHFCQUF4RixDQUFmO0FBQ0F1RiwyQkFBT0MsSUFBUCxDQUFZNUYsRUFBRW1DLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRELFNBQUwsQ0FBZSxZQUFmLElBQStCRSxNQUEvQjtBQUNIO0FBQ0osYUFiRCxNQWFPLElBQUkzRixFQUFFbUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DbEQsa0JBQUVtQyxNQUFGLENBQVNoRSxVQUFULENBQW9CaUQsU0FBcEIsQ0FBOEJjLE1BQTlCLENBQXFDLFVBQXJDO0FBQ0EscUJBQUt1RCxTQUFMLENBQWU5RixVQUFmLEdBQTRCLEtBQUs4RixTQUFMLENBQWU5RixVQUFmLENBQTBCc0IsTUFBMUIsQ0FBaUMsa0JBQVU7QUFBRSwyQkFBTzJCLFdBQVc1QyxFQUFFbUMsTUFBRixDQUFTTixLQUEzQjtBQUFrQyxpQkFBL0UsQ0FBNUI7QUFDSDtBQUNKOzs7b0NBRVc3QixDLEVBQUc7QUFDWEEsY0FBRXdCLGNBQUY7QUFDQSxnQkFBSXhCLEVBQUVtQyxNQUFGLENBQVNlLE9BQWIsRUFBc0I7QUFDbEJsRCxrQkFBRW1DLE1BQUYsQ0FBU2hFLFVBQVQsQ0FBb0JpRCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsVUFBbEM7QUFDQSxvQkFBSXJCLEVBQUVtQyxNQUFGLENBQVNOLEtBQVQsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEM3RCw2QkFBU2dFLGdCQUFULENBQTBCLGdCQUExQixFQUE0Q0wsT0FBNUMsQ0FBb0Qsa0JBQVU7QUFBRUcsK0JBQU9vQixPQUFQLEdBQWlCLEtBQWpCLENBQXlCcEIsT0FBTzNELFVBQVAsQ0FBa0JpRCxTQUFsQixDQUE0QmMsTUFBNUIsQ0FBbUMsVUFBbkM7QUFBZ0QscUJBQXpJO0FBQ0EseUJBQUt1RCxTQUFMLENBQWUsT0FBZixJQUEwQixDQUFDLFdBQUQsQ0FBMUI7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsd0JBQU1DLE1BQU0xSCxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFaO0FBQ0F5SCx3QkFBSXhDLE9BQUosR0FBYyxLQUFkO0FBQ0F3Qyx3QkFBSXZILFVBQUosQ0FBZWlELFNBQWYsQ0FBeUJjLE1BQXpCLENBQWdDLFVBQWhDO0FBQ0Esd0JBQU15RCxTQUFTLEtBQUtGLFNBQUwsQ0FBZSxPQUFmLEVBQXdCeEUsTUFBeEIsQ0FBK0IsZ0JBQVE7QUFBRSwrQkFBT0gsU0FBUyxXQUFoQjtBQUE2QixxQkFBdEUsQ0FBZjtBQUNBNkUsMkJBQU9DLElBQVAsQ0FBWTVGLEVBQUVtQyxNQUFGLENBQVNOLEtBQXJCO0FBQ0EseUJBQUs0RCxTQUFMLENBQWUsT0FBZixJQUEwQkUsTUFBMUI7QUFDSDtBQUNKLGFBYkQsTUFhTyxJQUFJM0YsRUFBRW1DLE1BQUYsQ0FBU2UsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUNuQ2xELGtCQUFFbUMsTUFBRixDQUFTaEUsVUFBVCxDQUFvQmlELFNBQXBCLENBQThCYyxNQUE5QixDQUFxQyxVQUFyQztBQUNBLHFCQUFLdUQsU0FBTCxDQUFlLE9BQWYsSUFBMEIsS0FBS0EsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RSxNQUF4QixDQUErQixrQkFBVTtBQUFFLDJCQUFPMkIsV0FBVzVDLEVBQUVtQyxNQUFGLENBQVNOLEtBQTNCO0FBQWtDLGlCQUE3RSxDQUExQjtBQUNIO0FBQ0o7OzttQ0FFVTdCLEMsRUFBRztBQUNWQSxjQUFFd0IsY0FBRjtBQUNBLGlCQUFLaUUsU0FBTCxDQUFlLE1BQWYsSUFBeUJ6RixFQUFFbUMsTUFBRixDQUFTTixLQUFsQztBQUNIOzs7cUNBR1k3QixDLEVBQUc7QUFDWkEsY0FBRXdCLGNBQUY7QUFDQSxnQkFBTW1DLGFBQWEsS0FBSzhCLFNBQXhCO0FBQ0EsZ0JBQUk5RixtQkFBSjtBQUFBLGdCQUFnQkUsY0FBaEI7O0FBRUEsZ0JBQUk4RCxXQUFXLFlBQVgsRUFBeUIsQ0FBekIsTUFBZ0MsZ0JBQXBDLEVBQXNEO0FBQ2xEaEUsNkJBQWF5QyxxQkFBYjtBQUNILGFBRkQsTUFFTztBQUNIekMsNkJBQWFnRSxXQUFXLFlBQVgsQ0FBYjtBQUNIOztBQUVELGdCQUFJQSxXQUFXOUQsS0FBWCxDQUFpQixDQUFqQixNQUF3QixXQUE1QixFQUF5QztBQUNyQ0Esd0JBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxDQUFSO0FBQ0gsYUFGRCxNQUVPO0FBQ0hBLHdCQUFROEQsV0FBVyxPQUFYLENBQVI7QUFDSDtBQUNELGlCQUFLakUsTUFBTCxHQUFjO0FBQ1ZDLDRCQUFZQSxVQURGO0FBRVZFLHVCQUFPQSxLQUZHO0FBR1ZXLHNCQUFNbUQsV0FBV25ELElBSFA7QUFJVlMsd0JBQVE7QUFKRSxhQUFkO0FBTUg7Ozt1Q0FHYztBQUNYLGdCQUFNRCxTQUFTaEQsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNZ0QsU0FBU2pELFNBQVNrRCxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixhQUEvQjs7QUFFQW1FLG1CQUFPbEQsZ0JBQVAsQ0FBd0IsS0FBS0MsY0FBN0IsRUFBNkN0QixNQUE3QyxFQUFxRCxJQUFyRDs7QUFFQXVFLG1CQUFPckMsWUFBUCxDQUFvQixLQUFLQyxXQUF6QixFQUFzQ25DLE1BQXRDLEVBQThDLElBQTlDLEVBQW9ELENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsTUFBOUMsRUFBc0QsTUFBdEQsRUFBOEQsTUFBOUQsRUFBc0UsTUFBdEUsRUFBOEUsTUFBOUUsRUFBc0YsTUFBdEYsQ0FBcEQ7O0FBR0EsZ0JBQU1rRixlQUFlbkksU0FBU2tELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJnRixZQUFuQjtBQUNBQSx5QkFBYS9FLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFdBQTNCO0FBQ0E4RSx5QkFBYWhGLFdBQWIsQ0FBeUJuRCxTQUFTK0gsY0FBVCxDQUF3QixhQUF4QixDQUF6QjtBQUNBLGdCQUFNSyxRQUFRLENBQUMsVUFBRCxFQUFhLHFCQUFiLEVBQW9DLDJCQUFwQyxDQUFkO0FBQ0FBLGtCQUFNekUsT0FBTixDQUFjLGtCQUFVO0FBQ3BCLG9CQUFNMEUsYUFBYXJJLFNBQVNrRCxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0FtRiwyQkFBV3hFLEtBQVgsR0FBbUJlLE1BQW5CO0FBQ0F5RCwyQkFBVzlFLFNBQVgsR0FBdUJxQixNQUF2QjtBQUNBdUQsNkJBQWFoRixXQUFiLENBQXlCa0YsVUFBekI7QUFDSCxhQUxEO0FBTUFGLHlCQUFhcEcsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBS21HLFVBQTdDOztBQUdBVixtQkFBT2hDLFlBQVAsQ0FBb0IsS0FBS0MsWUFBekIsRUFBdUN4QyxNQUF2QyxFQUErQyxVQUEvQzs7QUFHQSxnQkFBTVEsY0FBY3pELFNBQVNrRCxhQUFULENBQXVCLEdBQXZCLENBQXBCO0FBQ0FELG1CQUFPRSxXQUFQLENBQW1CTSxXQUFuQjtBQUNBQSx3QkFBWUwsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsYUFBMUI7QUFDQUksd0JBQVlGLFNBQVosR0FBd0IsaUVBQXhCO0FBQ0g7Ozs7OztrQkFHVXpDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIZjs7QUFDQTs7SUFBWTBHLE07Ozs7OztJQUdONUcsVTtBQUNGLDBCQUFjO0FBQUE7O0FBQ1YsYUFBSzZFLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQjdGLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsYUFBS3dGLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnhGLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsYUFBSzJFLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQjNFLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsYUFBSzZILFNBQUwsR0FBaUI7QUFDYnJGLHNCQUFVLDBCQURHO0FBRWJQLG1CQUFPLENBQUMsV0FBRDtBQUZNLFNBQWpCO0FBSUg7Ozs7dUNBRWNHLEMsRUFBRztBQUNkLGlCQUFLeUYsU0FBTCxDQUFlckYsUUFBZixHQUEwQkosRUFBRW1DLE1BQUYsQ0FBU04sS0FBbkM7QUFDSDs7O3FDQUVZN0IsQyxFQUFHO0FBQ1pBLGNBQUV3QixjQUFGO0FBQ0EsZ0JBQU1tQyxhQUFhLEtBQUs4QixTQUF4QjtBQUNBLGdCQUFJNUYsY0FBSjtBQUNBLGdCQUFJOEQsV0FBVzlELEtBQVgsQ0FBaUIsQ0FBakIsTUFBd0IsV0FBNUIsRUFBeUM7QUFDckNBLHdCQUFRLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsTUFBekMsQ0FBUjtBQUNILGFBRkQsTUFFTztBQUNIQSx3QkFBUThELFdBQVcsT0FBWCxDQUFSO0FBQ0g7QUFDRCxpQkFBS2pFLE1BQUwsR0FBYztBQUNWVSwwQkFBVSxLQUFLcUYsU0FBTCxDQUFlckYsUUFEZjtBQUVWUCw0QkFGVTtBQUdWb0Isd0JBQVE7QUFIRSxhQUFkO0FBS0g7OztvQ0FFV2pCLEMsRUFBRztBQUNYQSxjQUFFd0IsY0FBRjtBQUNBLGdCQUFJeEIsRUFBRW1DLE1BQUYsQ0FBU2UsT0FBYixFQUFzQjtBQUNsQmxELGtCQUFFbUMsTUFBRixDQUFTaEUsVUFBVCxDQUFvQmlELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxVQUFsQztBQUNBLG9CQUFJckIsRUFBRW1DLE1BQUYsQ0FBU04sS0FBVCxLQUFtQixXQUF2QixFQUFvQztBQUNoQzdELDZCQUFTZ0UsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNMLE9BQTNDLENBQW1ELGtCQUFVO0FBQUVHLCtCQUFPb0IsT0FBUCxHQUFpQixLQUFqQixDQUF3QnBCLE9BQU8zRCxVQUFQLENBQWtCaUQsU0FBbEIsQ0FBNEJjLE1BQTVCLENBQW1DLFVBQW5DO0FBQWdELHFCQUF2STtBQUNBLHlCQUFLdUQsU0FBTCxDQUFlLE9BQWYsSUFBMEIsQ0FBQyxXQUFELENBQTFCO0FBQ0gsaUJBSEQsTUFHTztBQUNILHdCQUFNQyxNQUFNMUgsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBWjtBQUNBeUgsd0JBQUl4QyxPQUFKLEdBQWMsS0FBZDtBQUNBd0Msd0JBQUl2SCxVQUFKLENBQWVpRCxTQUFmLENBQXlCYyxNQUF6QixDQUFnQyxVQUFoQztBQUNBLHdCQUFNeUQsU0FBUyxLQUFLRixTQUFMLENBQWUsT0FBZixFQUF3QnhFLE1BQXhCLENBQStCLGdCQUFRO0FBQUUsK0JBQU9ILFNBQVMsV0FBaEI7QUFBNkIscUJBQXRFLENBQWY7QUFDQTZFLDJCQUFPQyxJQUFQLENBQVk1RixFQUFFbUMsTUFBRixDQUFTTixLQUFyQjtBQUNBLHlCQUFLNEQsU0FBTCxDQUFlLE9BQWYsSUFBMEJFLE1BQTFCO0FBQ0g7QUFDSixhQWJELE1BYU8sSUFBSTNGLEVBQUVtQyxNQUFGLENBQVNlLE9BQVQsS0FBcUIsS0FBekIsRUFBZ0M7QUFDbkNsRCxrQkFBRW1DLE1BQUYsQ0FBU2hFLFVBQVQsQ0FBb0JpRCxTQUFwQixDQUE4QmMsTUFBOUIsQ0FBcUMsVUFBckM7QUFDQSxxQkFBS3VELFNBQUwsQ0FBZSxPQUFmLElBQTBCLEtBQUtBLFNBQUwsQ0FBZSxPQUFmLEVBQXdCeEUsTUFBeEIsQ0FBK0Isa0JBQVU7QUFBRSwyQkFBTzJCLFdBQVc1QyxFQUFFbUMsTUFBRixDQUFTTixLQUEzQjtBQUFrQyxpQkFBN0UsQ0FBMUI7QUFDSDtBQUNKOzs7a0NBRVM7QUFDTixnQkFBTWIsU0FBU2hELFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjs7QUFFQSxnQkFBTWdELFNBQVNqRCxTQUFTa0QsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FGLG1CQUFPRyxXQUFQLENBQW1CRixNQUFuQjtBQUNBQSxtQkFBT0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0IsV0FBL0I7O0FBRUFtRSxtQkFBTzlCLGNBQVAsQ0FBc0IsS0FBS25CLGNBQTNCLEVBQTJDdEIsTUFBM0M7O0FBRUF1RSxtQkFBT3JDLFlBQVAsQ0FBb0IsS0FBS0MsV0FBekIsRUFBc0NuQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtRCxDQUFDLFdBQUQsRUFBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE1BQXRELENBQW5EOztBQUVBdUUsbUJBQU9oQyxZQUFQLENBQW9CLEtBQUtDLFlBQXpCLEVBQXVDeEMsTUFBdkMsRUFBK0MsUUFBL0M7O0FBR0EsZ0JBQU1RLGNBQWN6RCxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQk0sV0FBbkI7QUFDQUEsd0JBQVlMLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0FBQ0FJLHdCQUFZRixTQUFaLEdBQXdCLHNDQUF4QjtBQUNIOzs7Ozs7a0JBR1UzQyxVOztBQUdmLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDaEZlLFlBQU07QUFDakI7QUFDQSxRQUFNMEgsT0FBT3RJLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQW9GLFNBQUtsRixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkIsRUFBMkIsZUFBM0I7QUFDQXJELGFBQVN1SSxJQUFULENBQWNwRixXQUFkLENBQTBCbUYsSUFBMUI7O0FBRUEsUUFBTUUsUUFBUXhJLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQW9GLFNBQUtuRixXQUFMLENBQWlCcUYsS0FBakI7QUFDQUEsVUFBTXBGLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLGVBQTdCO0FBQ0E7O0FBRUE7QUFDQSxRQUFNb0YsUUFBUXpJLFNBQVNrRCxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXVGLFVBQU1sRixTQUFOLEdBQWtCLFlBQWxCO0FBQ0FrRixVQUFNckYsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsYUFBcEI7QUFDQW1GLFVBQU1yRixXQUFOLENBQWtCc0YsS0FBbEI7O0FBRUE7QUFDQSxRQUFNaEYsY0FBY3pELFNBQVNrRCxhQUFULENBQXVCLEdBQXZCLENBQXBCO0FBQ0FPLGdCQUFZRixTQUFaLEdBQXdCLGlLQUF4QjtBQUNBaUYsVUFBTXJGLFdBQU4sQ0FBa0JNLFdBQWxCO0FBQ0FBLGdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixtQkFBMUI7O0FBRUE7QUFDQSxRQUFNcUYsV0FBVzFJLFNBQVNrRCxhQUFULENBQXVCLEdBQXZCLENBQWpCO0FBQ0F3RixhQUFTbkYsU0FBVCxHQUFxQixxQ0FBckI7QUFDQWlGLFVBQU1yRixXQUFOLENBQWtCdUYsUUFBbEI7QUFDQUEsYUFBU3RGLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGdCQUF2Qjs7QUFFQTtBQUNBLFFBQU1zRixVQUFVM0ksU0FBU2tELGFBQVQsQ0FBdUIsU0FBdkIsQ0FBaEI7QUFDQXlGLFlBQVF2RixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixlQUF0QjtBQUNBbUYsVUFBTXJGLFdBQU4sQ0FBa0J3RixPQUFsQjs7QUFFQSxRQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQzlFLE1BQUQsRUFBUytFLFNBQVQsRUFBb0JDLElBQXBCLEVBQTBCQyxTQUExQjtBQUFBLGVBQXdDLGFBQUs7QUFDMUQvRyxjQUFFd0IsY0FBRjtBQUNBLGdCQUFNd0YsYUFBYWhKLFNBQVNDLGFBQVQsT0FBMkI2RCxNQUEzQixDQUFuQjtBQUNBa0YsdUJBQVc1RixTQUFYLENBQXFCYyxNQUFyQixDQUE0QjJFLFNBQTVCO0FBQ0EsZ0JBQUlDLElBQUosRUFBVTtBQUNOLG9CQUFNRyxXQUFXakosU0FBU0MsYUFBVCxPQUEyQjZJLElBQTNCLENBQWpCO0FBQ0FHLHlCQUFTN0YsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIwRixTQUF2QjtBQUNIO0FBQ0osU0FSZ0I7QUFBQSxLQUFqQjs7QUFVQTtBQUNBLFFBQU1HLGFBQWFsSixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBeUYsWUFBUXhGLFdBQVIsQ0FBb0IrRixVQUFwQjtBQUNBQSxlQUFXM0YsU0FBWCxHQUF1QixnQ0FBdkI7QUFDQTJGLGVBQVduSCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQzZHLFNBQVMsTUFBVCxFQUFpQixlQUFqQixDQUFyQzs7QUFFQTtBQUNBLFFBQU1PLFNBQVNuSixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0F5RixZQUFReEYsV0FBUixDQUFvQmdHLE1BQXBCO0FBQ0FBLFdBQU81RixTQUFQLEdBQW1CLGNBQW5CO0FBQ0E0RixXQUFPcEgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUM2RyxTQUFTLE9BQVQsRUFBa0IsZUFBbEIsRUFBbUMsd0JBQW5DLEVBQTZELHFCQUE3RCxDQUFqQzs7QUFFQTtBQUNBO0FBQ0EsUUFBTVEsWUFBWXBKLFNBQVNrRCxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0FvRixTQUFLbkYsV0FBTCxDQUFpQmlHLFNBQWpCO0FBQ0FBLGNBQVVoRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixrQkFBeEIsRUFBNEMsd0JBQTVDO0FBQ0ErRixjQUFVN0YsU0FBVixHQUFzQixpTEFBdEI7O0FBRUEsUUFBTThGLGNBQWNySixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUNBa0csY0FBVWpHLFdBQVYsQ0FBc0JrRyxXQUF0QjtBQUNBQSxnQkFBWWpHLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLHlCQUExQjtBQUNBZ0csZ0JBQVk5RixTQUFaLEdBQXdCLFFBQXhCO0FBQ0E4RixnQkFBWXRILGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDNkcsU0FBUyx3QkFBVCxFQUFtQyxxQkFBbkMsRUFBMEQseUJBQTFELEVBQXFGLHFCQUFyRixDQUF0Qzs7QUFFQSxRQUFNVSxnQkFBZ0J0SixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBb0csa0JBQWNsRyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixlQUE1QixFQUE2Qyw0QkFBN0M7QUFDQStGLGNBQVVqRyxXQUFWLENBQXNCbUcsYUFBdEI7O0FBRUE7QUFDQSxRQUFNQyxhQUFhdkosU0FBU2tELGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbkI7QUFDQW9GLFNBQUtuRixXQUFMLENBQWlCb0csVUFBakI7QUFDQUEsZUFBV25HLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGtCQUF6QixFQUE2Qyx5QkFBN0M7QUFDQWtHLGVBQVdoRyxTQUFYLEdBQXVCLGdJQUF2Qjs7QUFFQSxRQUFNaUcsZUFBZXhKLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FxRyxlQUFXcEcsV0FBWCxDQUF1QnFHLFlBQXZCO0FBQ0FBLGlCQUFhcEcsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIseUJBQTNCO0FBQ0FtRyxpQkFBYWpHLFNBQWIsR0FBeUIsT0FBekI7QUFDQWlHLGlCQUFhekgsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUM2RyxTQUFTLHlCQUFULEVBQW9DLHFCQUFwQyxFQUEyRCx3QkFBM0QsRUFBcUYscUJBQXJGLENBQXZDOztBQUVBLFFBQU1hLGlCQUFpQnpKLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0F1RyxtQkFBZXJHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGVBQTdCLEVBQThDLDZCQUE5QztBQUNBa0csZUFBV3BHLFdBQVgsQ0FBdUJzRyxjQUF2Qjs7QUFFQTtBQUNBLFFBQU1DLFlBQVkxSixTQUFTa0QsYUFBVCxDQUF1QixTQUF2QixDQUFsQjtBQUNBb0YsU0FBS25GLFdBQUwsQ0FBaUJ1RyxTQUFqQjtBQUNBQSxjQUFVdEcsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isa0JBQXhCLEVBQTRDLHdCQUE1QztBQUNBcUcsY0FBVW5HLFNBQVYsR0FBc0Isc01BQXRCOztBQUVBLFFBQU1vRyxjQUFjM0osU0FBU2tELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQXdHLGNBQVV2RyxXQUFWLENBQXNCd0csV0FBdEI7QUFDQUEsZ0JBQVl2RyxTQUFaLENBQXNCQyxHQUF0QixDQUEwQix5QkFBMUI7QUFDQXNHLGdCQUFZcEcsU0FBWixHQUF3QixTQUF4QjtBQUNBb0csZ0JBQVk1SCxnQkFBWixDQUE2QixPQUE3QixFQUFzQzZHLFNBQVMsd0JBQVQsRUFBbUMscUJBQW5DLEVBQTBELHlCQUExRCxFQUFxRixxQkFBckYsQ0FBdEM7O0FBRUEsUUFBTWdCLGlCQUFpQjVKLFNBQVNrRCxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0EwRyxtQkFBZXhHLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGdCQUE3QixFQUErQyw4QkFBL0M7QUFDQXFHLGNBQVV2RyxXQUFWLENBQXNCeUcsY0FBdEI7O0FBRUEsUUFBTUMsaUJBQWlCN0osU0FBU2tELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQTJHLG1CQUFlekcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsYUFBN0IsRUFBNEMsOEJBQTVDO0FBQ0FxRyxjQUFVdkcsV0FBVixDQUFzQjBHLGNBQXRCOztBQUVBO0FBQ0EsUUFBTUMsYUFBYTlKLFNBQVNrRCxhQUFULENBQXVCLFNBQXZCLENBQW5CO0FBQ0FvRixTQUFLbkYsV0FBTCxDQUFpQjJHLFVBQWpCO0FBQ0FBLGVBQVcxRyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekIsRUFBNkMseUJBQTdDO0FBQ0F5RyxlQUFXdkcsU0FBWCxHQUF1QixnQ0FBdkI7O0FBRUEsUUFBTXdHLGVBQWUvSixTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBNEcsZUFBVzNHLFdBQVgsQ0FBdUI0RyxZQUF2QjtBQUNBQSxpQkFBYTNHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLHlCQUEzQjtBQUNBMEcsaUJBQWF4RyxTQUFiLEdBQXlCLFdBQXpCO0FBQ0F3RyxpQkFBYWhJLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDNkcsU0FBUyxNQUFULEVBQWlCLGVBQWpCLENBQXZDOztBQUVBLFFBQU1vQixpQkFBaUJoSyxTQUFTa0QsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNBOEcsbUJBQWU1RyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixlQUE3QixFQUE4Qyw2QkFBOUM7QUFDQXlHLGVBQVczRyxXQUFYLENBQXVCNkcsY0FBdkI7QUFFSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0hLMUksZ0I7QUFDRixnQ0FBYztBQUFBOztBQUNWLGFBQUt6QixJQUFMLEdBQVksRUFBWjtBQUNIOzs7O3NDQUVhO0FBQUE7O0FBQ1YsZ0JBQU1tRCxTQUFTaEQsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNZ0QsU0FBU2pELFNBQVNrRCxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixhQUEvQjs7QUFFQSxnQkFBTUMsa0JBQWtCdEQsU0FBU2tELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJHLGVBQW5CO0FBQ0FBLDRCQUFnQkYsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGNBQTlCLEVBQThDLGNBQTlDO0FBQ0FDLDRCQUFnQkMsU0FBaEIsR0FBNEIsa0JBQTVCO0FBQ0FELDRCQUFnQnZCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxhQUFLO0FBQzNDQyxrQkFBRXdCLGNBQUY7QUFDQSxzQkFBSzNELElBQUwsR0FBWTtBQUNSLDJEQUF1QyxFQUQvQjtBQUVSLGdEQUE0QixDQUZwQjtBQUdSLDRDQUF3QixHQUhoQjtBQUlSLDJDQUF1QixHQUpmO0FBS1IsZ0VBQTRDLEdBTHBDO0FBTVIsd0RBQW9DLEdBTjVCO0FBT1IsbUVBQStDLEdBUHZDO0FBUVIsMENBQXNCLEdBUmQ7QUFTUixxREFBaUMsR0FUekI7QUFVUix3Q0FBb0IsR0FWWjtBQVdSLHVFQUFtRCxDQVgzQztBQVlSLDhDQUEwQjtBQVpsQixpQkFBWjtBQWNILGFBaEJEOztBQWtCQSxnQkFBTTRELGNBQWN6RCxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQk0sV0FBbkI7QUFDQUEsd0JBQVlMLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0FBQ0FJLHdCQUFZRixTQUFaLEdBQXdCLHVEQUF4Qjs7QUFFQSxnQkFBTTBHLFdBQVdqSyxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQjhHLFFBQW5CO0FBQ0FBLHFCQUFTN0csU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBdkI7QUFDQTRHLHFCQUFTMUcsU0FBVCxHQUFxQix5QkFBckI7QUFDQSxnQkFBTTJHLElBQUlsSyxTQUFTa0QsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0FnSCxjQUFFakYsWUFBRixDQUFlLE1BQWYsRUFBdUIsd0dBQXZCO0FBQ0FpRixjQUFFM0csU0FBRixHQUFjLHdHQUFkO0FBQ0EyRyxjQUFFakYsWUFBRixDQUFlLFFBQWYsRUFBeUIsUUFBekI7QUFDQWdGLHFCQUFTOUcsV0FBVCxDQUFxQitHLENBQXJCO0FBQ0g7Ozs7OztrQkFHVTVJLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuRFRoQixLO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixhQUFLNkosUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWN2SyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsYUFBS3dLLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnhLLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsYUFBS3lLLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQnpLLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsYUFBSzZCLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCN0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDQSxhQUFLMkMsa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0IzQyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNIOzs7O2lDQUdTMEssRyxFQUFLO0FBQ1gsZ0JBQUlDLE1BQU0sQ0FBVjtBQUNBLGlCQUFLLElBQUkxRixJQUFJLENBQWIsRUFBZ0JBLElBQUl5RixJQUFJRSxNQUF4QixFQUFnQzNGLEdBQWhDLEVBQXFDO0FBQ2pDMEYsdUJBQU9ELElBQUl6RixDQUFKLENBQVA7QUFDSDtBQUNELG1CQUFPMEYsR0FBUDtBQUNIOzs7cUNBRWFELEcsRUFBSztBQUNmLG1CQUFPLEtBQUtILFFBQUwsQ0FBY0csR0FBZCxJQUFxQkEsSUFBSUUsTUFBaEM7QUFDSDs7O3FDQUVzQjtBQUFBLDhDQUFSQyxNQUFRO0FBQVJBLHNCQUFRO0FBQUE7O0FBQ25CLGdCQUFJQyxRQUFRLEVBQVo7QUFDQSxnQkFBSUQsT0FBT0UsS0FBUCxDQUFjLGVBQU87QUFBRSx1QkFBT0wsSUFBSUUsTUFBSixLQUFlQyxPQUFPLENBQVAsRUFBVUQsTUFBaEM7QUFBeUMsYUFBaEUsTUFBc0UsS0FBMUUsRUFBaUY7QUFDN0VJLHdCQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQTtBQUNIOztBQUxrQix1Q0FPVmhHLENBUFU7QUFRZixvQkFBTWlHLFNBQVMsRUFBZjtBQUNBTCx1QkFBTzlHLE9BQVAsQ0FBZ0IsZUFBTztBQUNuQm1ILDJCQUFPbEQsSUFBUCxDQUFZMEMsSUFBSXpGLENBQUosQ0FBWjtBQUNILGlCQUZEO0FBR0E2RixzQkFBTTlDLElBQU4sQ0FBV2tELE1BQVg7QUFaZTs7QUFPbkIsaUJBQUssSUFBSWpHLElBQUksQ0FBYixFQUFnQkEsSUFBSTRGLE9BQU8sQ0FBUCxFQUFVRCxNQUE5QixFQUFzQzNGLEdBQXRDLEVBQTJDO0FBQUEsc0JBQWxDQSxDQUFrQztBQU0xQztBQUNELG1CQUFPNkYsS0FBUDtBQUNIOzs7MkNBRW1CL0ksVSxFQUFZQyxNLEVBQVFDLEssRUFBT2hDLEksRUFBTTtBQUFBOztBQUNqRCxnQkFBTWtMLGlCQUFpQixFQUF2QjtBQUNBcEosdUJBQVdnQyxPQUFYLENBQW9CLG9CQUFZO0FBQzVCb0gsK0JBQWVuRCxJQUFmLENBQW9CL0gsS0FBS3VDLFFBQUwsQ0FBcEI7QUFDSCxhQUZEO0FBR0EsZ0JBQU00SSxlQUFlRCxlQUFlRSxHQUFmLENBQW1CLGlCQUFTO0FBQzdDLDJDQUFVNUQsTUFBTWpGLFFBQWhCLEVBQTJCaUYsTUFBTXpGLE1BQU4sQ0FBM0I7QUFDSCxhQUZvQixDQUFyQjs7QUFJQSxnQkFBTXNKLFlBQVlGLGFBQWFDLEdBQWIsQ0FBaUIsaUJBQVM7QUFDeEMsb0JBQU1FLGVBQWUsRUFBckI7QUFDQXRKLHNCQUFNOEIsT0FBTixDQUFlLGdCQUFRO0FBQ25CLHdCQUFNeUgsV0FBV3hFLE9BQU95RSxNQUFQLENBQWNoRSxLQUFkLEVBQXFCLENBQXJCLENBQWpCO0FBQ0E4RCxpQ0FBYXZELElBQWIsQ0FBa0J3RCxTQUFTdEksSUFBVCxDQUFsQjtBQUNILGlCQUhEO0FBSUEsMkNBQVM4RCxPQUFPQyxJQUFQLENBQVlRLEtBQVosRUFBbUIsQ0FBbkIsQ0FBVCxFQUFpQyxNQUFLK0MsWUFBTCxDQUFrQmUsWUFBbEIsQ0FBakM7QUFFSCxhQVJpQixDQUFsQjs7QUFVQSxnQkFBTUcsU0FBU0osVUFBVXBFLElBQVYsQ0FBZSxVQUFDb0QsQ0FBRCxFQUFJcUIsQ0FBSixFQUFVO0FBQ3BDLHdCQUFRM0UsT0FBT3lFLE1BQVAsQ0FBY25CLENBQWQsRUFBaUIsQ0FBakIsSUFBc0J0RCxPQUFPeUUsTUFBUCxDQUFjRSxDQUFkLEVBQWlCLENBQWpCLENBQTlCO0FBQ0EseUJBQUssSUFBTDtBQUNJLCtCQUFPLENBQUMsQ0FBUjtBQUNKO0FBQ0ksK0JBQU8sQ0FBUDtBQUpKO0FBTUgsYUFQYyxDQUFmOztBQVVBLGdCQUFNN0osU0FBUyxFQUFmO0FBQ0E0SixtQkFBTzNILE9BQVAsQ0FBZ0IsaUJBQVM7QUFDckJqQyx1QkFBT2tGLE9BQU9DLElBQVAsQ0FBWVEsS0FBWixFQUFtQixDQUFuQixDQUFQLElBQWdDVCxPQUFPeUUsTUFBUCxDQUFjaEUsS0FBZCxFQUFxQixDQUFyQixDQUFoQztBQUNILGFBRkQ7O0FBSUEsbUJBQU8zRixNQUFQO0FBQ0g7OzsyQ0FFa0JDLFUsRUFBWWEsSSxFQUFNWCxLLEVBQU9oQyxJLEVBQU07QUFBQTs7QUFDOUMsZ0JBQU1rTCxpQkFBaUIsRUFBdkI7QUFDQXBKLHVCQUFXZ0MsT0FBWCxDQUFtQixvQkFBWTtBQUMzQm9ILCtCQUFlbkQsSUFBZixDQUFvQi9ILEtBQUt1QyxRQUFMLENBQXBCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNb0osYUFBYVQsZUFBZUUsR0FBZixDQUFtQixpQkFBUztBQUMzQywyQ0FBVTVELE1BQU1qRixRQUFoQixFQUEyQmlGLE1BQU03RSxJQUFOLENBQTNCO0FBQ0gsYUFGa0IsQ0FBbkI7O0FBSUEsZ0JBQU0wSSxZQUFZTSxXQUFXUCxHQUFYLENBQWUsaUJBQVM7QUFDdEMsb0JBQU1FLGVBQWUsRUFBckI7QUFDQXRKLHNCQUFNOEIsT0FBTixDQUFjLGdCQUFRO0FBQ2xCLHdCQUFNeUgsV0FBV3hFLE9BQU95RSxNQUFQLENBQWNoRSxLQUFkLEVBQXFCLENBQXJCLENBQWpCO0FBQ0E4RCxpQ0FBYXZELElBQWIsQ0FBa0J3RCxTQUFTdEksSUFBVCxDQUFsQjtBQUNILGlCQUhEO0FBSUEsMkNBQVU4RCxPQUFPQyxJQUFQLENBQVlRLEtBQVosRUFBbUIsQ0FBbkIsQ0FBVixFQUFrQyxPQUFLK0MsWUFBTCxDQUFrQmUsWUFBbEIsQ0FBbEM7QUFFSCxhQVJpQixDQUFsQjs7QUFVQSxnQkFBTUcsU0FBU0osVUFBVXBFLElBQVYsQ0FBZSxVQUFDb0QsQ0FBRCxFQUFJcUIsQ0FBSixFQUFVO0FBQ3BDLHdCQUFRM0UsT0FBT3lFLE1BQVAsQ0FBY25CLENBQWQsRUFBaUIsQ0FBakIsSUFBc0J0RCxPQUFPeUUsTUFBUCxDQUFjRSxDQUFkLEVBQWlCLENBQWpCLENBQTlCO0FBQ0kseUJBQUssSUFBTDtBQUNJLCtCQUFPLENBQUMsQ0FBUjtBQUNKO0FBQ0ksK0JBQU8sQ0FBUDtBQUpSO0FBTUgsYUFQYyxDQUFmOztBQVNBLGdCQUFNN0osU0FBUyxFQUFmO0FBQ0E0SixtQkFBTzNILE9BQVAsQ0FBZSxpQkFBUztBQUNwQmpDLHVCQUFPa0YsT0FBT0MsSUFBUCxDQUFZUSxLQUFaLEVBQW1CLENBQW5CLENBQVAsSUFBZ0NULE9BQU95RSxNQUFQLENBQWNoRSxLQUFkLEVBQXFCLENBQXJCLENBQWhDO0FBQ0gsYUFGRDs7QUFJQSxtQkFBTzNGLE1BQVA7QUFDSDs7O3lDQUVnQlUsUSxFQUFVUCxLLEVBQU9oQyxJLEVBQU07QUFDcEMsZ0JBQU1rTCxpQkFBaUJsTCxLQUFLdUMsUUFBTCxDQUF2Qjs7QUFFQSxnQkFBTXFKLFlBQVksRUFBRSxPQUFPVixlQUFlLEtBQWYsQ0FBVCxFQUFsQjtBQUNBLGdCQUFNVyxjQUFjLEVBQUUsU0FBU1gsZUFBZSxPQUFmLENBQVgsRUFBcEI7O0FBR0EsZ0JBQU1ZLGtCQUFrQixFQUF4QjtBQUNBLGdCQUFNQyxjQUFjaEYsT0FBT3lFLE1BQVAsQ0FBY0ksU0FBZCxFQUF5QixDQUF6QixDQUFwQjtBQUNBNUosa0JBQU04QixPQUFOLENBQWMsZ0JBQVE7QUFDbEJnSSxnQ0FBZ0IvRCxJQUFoQixDQUFxQmdFLFlBQVk5SSxJQUFaLENBQXJCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNK0ksVUFBVSxLQUFLekIsWUFBTCxDQUFrQnVCLGVBQWxCLENBQWhCOztBQUVBLGdCQUFNRyxvQkFBb0IsRUFBMUI7QUFDQSxnQkFBTUMsZ0JBQWdCbkYsT0FBT3lFLE1BQVAsQ0FBY0ssV0FBZCxFQUEyQixDQUEzQixDQUF0QjtBQUNBN0osa0JBQU04QixPQUFOLENBQWMsZ0JBQVE7QUFDbEJtSSxrQ0FBa0JsRSxJQUFsQixDQUF1Qm1FLGNBQWNqSixJQUFkLENBQXZCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNa0osWUFBWSxLQUFLNUIsWUFBTCxDQUFrQjBCLGlCQUFsQixDQUFsQjs7QUFFQSxnQkFBSUUsWUFBWUgsT0FBaEIsRUFBeUI7QUFDckIsdUJBQU87QUFDSCw2QkFBU0csU0FETjtBQUVILDJCQUFPSDtBQUZKLGlCQUFQO0FBSUgsYUFMRCxNQUtPO0FBQ0gsdUJBQU87QUFDSCwyQkFBT0EsT0FESjtBQUVILDZCQUFTRztBQUZOLGlCQUFQO0FBSUg7QUFDSjs7O3NDQUVhNUosUSxFQUFVUCxLLEVBQU9oQyxJLEVBQU07QUFDakMsZ0JBQU1rTCxpQkFBaUJsTCxLQUFLdUMsUUFBTCxDQUF2Qjs7QUFFQSxnQkFBTTZKLFlBQVksRUFBRSx1QkFBdUJsQixlQUFlLHFCQUFmLENBQXpCLEVBQWxCO0FBQ0EsZ0JBQU1tQixhQUFhLEVBQUUsNkJBQTZCbkIsZUFBZSwyQkFBZixDQUEvQixFQUFuQjs7QUFFQSxnQkFBTW9CLGtCQUFrQixFQUF4QjtBQUNBLGdCQUFNQyxjQUFjeEYsT0FBT3lFLE1BQVAsQ0FBY1ksU0FBZCxFQUF5QixDQUF6QixDQUFwQjtBQUNBcEssa0JBQU04QixPQUFOLENBQWMsZ0JBQVE7QUFDbEJ3SSxnQ0FBZ0J2RSxJQUFoQixDQUFxQndFLFlBQVl0SixJQUFaLENBQXJCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNdUosVUFBVSxLQUFLakMsWUFBTCxDQUFrQitCLGVBQWxCLENBQWhCOztBQUVBLGdCQUFNRyxtQkFBbUIsRUFBekI7QUFDQSxnQkFBTUMsZUFBZTNGLE9BQU95RSxNQUFQLENBQWNhLFVBQWQsRUFBMEIsQ0FBMUIsQ0FBckI7QUFDQXJLLGtCQUFNOEIsT0FBTixDQUFjLGdCQUFRO0FBQ2xCMkksaUNBQWlCMUUsSUFBakIsQ0FBc0IyRSxhQUFhekosSUFBYixDQUF0QjtBQUNILGFBRkQ7QUFHQSxnQkFBTTBKLFdBQVcsS0FBS3BDLFlBQUwsQ0FBa0JrQyxnQkFBbEIsQ0FBakI7O0FBRUEsZ0JBQUlFLFdBQVdILE9BQWYsRUFBd0I7QUFDcEIsdUJBQU87QUFDSCxpREFBNkJHLFFBRDFCO0FBRUgsMkNBQXVCSDtBQUZwQixpQkFBUDtBQUlILGFBTEQsTUFLTztBQUNILHVCQUFPO0FBQ0gsMkNBQXVCQSxPQURwQjtBQUVILGlEQUE2Qkc7QUFGMUIsaUJBQVA7QUFLSDtBQUNKOzs7Ozs7a0JBS1VsTSxLOztBQUVmO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TEE7O0FBQ0E7Ozs7OztrQkFFZSxVQUFDVCxJQUFELEVBQVU7QUFDckIsUUFBTTRNLFNBQVMsRUFBZjs7QUFFQSxRQUFJQyxjQUFKO0FBQUEsUUFBV0MsZUFBWDtBQUNBLFFBQU10TSxRQUFRLElBQUlDLGVBQUosRUFBZDs7QUFFQSxRQUFNUCxNQUFNNk0sR0FBR2hJLE1BQUgsQ0FBVSxRQUFWLEVBQ1BpSSxPQURPLENBQ0MsZUFERCxFQUNrQixJQURsQixFQUVQQyxNQUZPLENBRUEsS0FGQSxFQUdQQyxJQUhPLENBR0YsT0FIRSxFQUdPLFVBQVVDLENBQVYsRUFBYTtBQUFFTixnQkFBUSxLQUFLdk0sVUFBTCxDQUFnQjhNLFdBQXhCLENBQXFDLE9BQU9QLEtBQVA7QUFBYyxLQUh6RSxFQUlQSyxJQUpPLENBSUYsUUFKRSxFQUlRLFVBQVVDLENBQVYsRUFBYTtBQUFFTCxpQkFBUyxLQUFLeE0sVUFBTCxDQUFnQitNLFlBQXpCLENBQXVDLE9BQU9QLE1BQVA7QUFBZSxLQUo3RSxFQUtQRyxNQUxPLENBS0EsR0FMQSxFQU1QQyxJQU5PLENBTUYsV0FORSxFQU1XLGVBQWVMLFFBQVEsQ0FBdkIsR0FBMkIsR0FBM0IsR0FBaUNDLFNBQVMsQ0FBMUMsR0FBOEMsR0FOekQsQ0FBWjtBQU9BLFFBQU1RLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU1gsS0FBVCxFQUFnQkMsTUFBaEIsSUFBMEIsQ0FBMUIsR0FBOEJGLE1BQTdDOztBQUVBLFFBQU1hLE1BQU1WLEdBQUdVLEdBQUgsR0FDUHpKLEtBRE8sQ0FDRCxVQUFVbUosQ0FBVixFQUFhO0FBQUUsZUFBT0EsRUFBRW5KLEtBQVQ7QUFBaUIsS0FEL0IsQ0FBWjs7QUFHQSxRQUFNMEosaUJBQWlCWCxHQUFHWSxPQUFILENBQVczTixJQUFYLENBQXZCOztBQUVBLFFBQU00TixRQUFRcE4sTUFBTThKLFFBQU4sQ0FBZW9ELGVBQWV0QyxHQUFmLENBQW1CLGFBQUs7QUFBQyxlQUFPK0IsRUFBRW5KLEtBQVQ7QUFBZSxLQUF4QyxDQUFmLENBQWQ7O0FBRUEwSixtQkFBZTVKLE9BQWYsQ0FBdUIsYUFBSztBQUN4QnFKLFVBQUVVLFVBQUYsR0FBZVYsRUFBRW5KLEtBQUYsR0FBVTRKLEtBQXpCO0FBQ0gsS0FGRDs7QUFJQSxRQUFNRSxhQUFhTCxJQUFJQyxjQUFKLENBQW5COztBQUVBLFFBQU1LLE1BQU1oQixHQUFHZ0IsR0FBSCxHQUNQQyxXQURPLENBQ0tWLFNBQVMsR0FEZCxFQUVQVyxXQUZPLENBRUtYLE1BRkwsQ0FBWjs7QUFJQSxRQUFNWSxRQUFRaE8sSUFDVGlPLFNBRFMsR0FFVG5PLElBRlMsQ0FFSjhOLFVBRkksRUFHVE0sS0FIUyxHQUlUbkIsTUFKUyxDQUlGLE1BSkUsQ0FBZDs7QUFNQSxRQUFNMUYsUUFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RCxDQUFkOztBQUVBMkcsVUFDS0csSUFETCxDQUNXLFVBQVNsQixDQUFULEVBQVluSSxDQUFaLEVBQWU7QUFDbEIrSCxXQUFHaEksTUFBSCxDQUFVLElBQVYsRUFDS2lJLE9BREwsQ0FDYSxNQURiLEVBQ3FCLElBRHJCLEVBRUtzQixFQUZMLENBRVEsV0FGUixFQUVxQixVQUFTbkIsQ0FBVCxFQUFZO0FBQ3pCLGdCQUFNbEgsS0FBSzlGLFNBQVNDLGFBQVQsT0FBMkJtSCxNQUFNdkMsQ0FBTixDQUEzQixDQUFYO0FBQ0FpQixlQUFHMUMsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFNBQWpCO0FBQ0gsU0FMTCxFQU1LOEssRUFOTCxDQU1RLFVBTlIsRUFNb0IsVUFBU25CLENBQVQsRUFBWTtBQUN4QixnQkFBTWxILEtBQUs5RixTQUFTQyxhQUFULE9BQTJCbUgsTUFBTXZDLENBQU4sQ0FBM0IsQ0FBWDtBQUNBaUIsZUFBRzFDLFNBQUgsQ0FBYWMsTUFBYixDQUFvQixTQUFwQjtBQUNILFNBVEwsRUFVS2tLLFVBVkwsR0FXS0MsUUFYTCxDQVdjLFVBQVNyQixDQUFULEVBQVk7QUFBQyxtQkFBT0EsRUFBRW5OLElBQUYsQ0FBTzZOLFVBQVAsR0FBb0IsSUFBM0I7QUFBZ0MsU0FYM0QsRUFZS1ksS0FaTCxDQVlZLFVBQVN0QixDQUFULEVBQVk7QUFDaEIsbUJBQU8zTSxNQUFNOEosUUFBTixDQUFlNEQsTUFBTVEsS0FBTixHQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCM0osQ0FBdkIsRUFBMEJvRyxHQUExQixDQUE4QjtBQUFBLHVCQUFNMkIsR0FBR2hJLE1BQUgsQ0FBVWtCLEVBQVYsRUFBY2pHLElBQWQsR0FBcUIsQ0FBckIsRUFBd0JBLElBQXhCLENBQTZCNk4sVUFBbkM7QUFBQSxhQUE5QixDQUFmLElBQStGLElBQS9GLEdBQXNHLEdBQTdHO0FBQ0gsU0FkTCxFQWVLZSxTQWZMLENBZWUsR0FmZixFQWVvQixVQUFVekIsQ0FBVixFQUFhO0FBQ3pCLGdCQUFNbkksSUFBSStILEdBQUc4QixXQUFILENBQWUxQixFQUFFMkIsVUFBakIsRUFBNkIzQixFQUFFNEIsUUFBL0IsQ0FBVjtBQUNBLG1CQUFPLFVBQVVDLENBQVYsRUFBYTtBQUNoQjdCLGtCQUFFNEIsUUFBRixHQUFhL0osRUFBRWdLLENBQUYsQ0FBYjtBQUNBLHVCQUFPakIsSUFBSVosQ0FBSixDQUFQO0FBQ0gsYUFIRDtBQUlILFNBckJMO0FBc0JDLEtBeEJUO0FBeUJILEM7O0FBRUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgY29uc3QgZW1wbG95ZWRCeUdlbmRlciA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDguODgsXG4gICAgICAgICAgICBcIjIwMTRcIjogOC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA4Ljk5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDguODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogOC45NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA4LjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS40MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjQ4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4wNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjA2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4wNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS45NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjksXG4gICAgICAgICAgICBcIjIwMThcIjogMi4wMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjY3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LCBcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC44MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuOTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS40OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjU4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQ5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuMzUsXG4gICAgICAgICAgICBcIjIwMThcIjogNi40N1xuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNS42NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS43NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuMDYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjAxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuOTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuOTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy45MSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjg0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC4wMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjczLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNjgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy42NVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNDMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy4zOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMThcIjogMy4zNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBldmVyeW9uZUJ5RGF5ID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuMjQsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMTAuMDcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMTAuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMTAuMDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMTAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMTAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMTAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMTAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMTAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjU4NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuNjU1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuNjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS42NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjcwNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5Ljc0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5Ljc5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5Ljc2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNzY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjM2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4zOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4zNVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjI2NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI1NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yMDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS43LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuNjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjU5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjcxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuMDYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi4xMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMi4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS44MjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuODc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuODM1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjkzNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjkxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjg4IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuOTEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC44NFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC43NDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjc3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC43NTUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjUzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTE1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDg1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjUxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNDEsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC41NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMy4wNixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuODY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuOTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuODksXG4gICAgICAgICAgICBcIjIwMTNcIjogMi44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuODc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuOTMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMi44NzUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42MyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzc1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNiBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC42MixcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjcxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNjcsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC43MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0Ljg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjY5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjcyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNi40OCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA2LjUzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDYuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA2LjM0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogNi41NlxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA1LjU1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDUuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS42NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS41NixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjU5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNjRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTQgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjk1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI3NVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBcHAgZnJvbSAnLi9qcy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9uJ1xuaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICBpbnN0cnVjdGlvbnMoKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gQ2F0ZWdvcnlTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVkU2VsZWN0b3JzID0gbmV3IEVtcGxveWVkU2VsZWN0b3JzKCk7XG4gICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBnZW5kZXJDb21wID0gbmV3IEdlbmRlckNvbXAoKTtcbiAgICAgICAgZ2VuZGVyQ29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lU2VsZWN0b3JzID0gbmV3IEV2ZXJ5b25lU2VsZWN0b3JzKCk7XG4gICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBkYXlDb21wID0gbmV3IERheUNvbXAoKTtcbiAgICAgICAgZGF5Q29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGFwcEFjYWRlbXlTZWxlY3RvciA9IG5ldyBBcHBBY2FkZW15U2VsZWN0b3IoKTtcbiAgICAgICAgYXBwQWNhZGVteVNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG4gICAgICAgIGNvbnN0IHJlc2lkZW50U2VsZWN0b3IgPSBuZXcgUmVzaWRlbnRTZWxlY3RvcigpO1xuICAgICAgICByZXNpZGVudFNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFbXBsb3llZCBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXBsb3llZC1idG5cIik7XG4gICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICBjb25zdCBlbXBsb3llZFBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgZGVsZXRlIGVtcGxveWVkUGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgZW1wbG95ZWRQYXJhbXMpO1xuXG4gICAgICAgIGVtcGxveWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZ2VuZGVyIGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5kZXItYnRuXCIpO1xuICAgICAgICBnZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlckRhdGEgPSB1dGlscy5nZW5kZXJDb21wRmlsdGVyKGdlbmRlckNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGdlbmRlckNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhnZW5kZXJEYXRhLCBnZW5kZXJDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFdmVyeW9uZSBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVyeW9uZS1idG5cIik7XG4gICAgICAgIGV2ZXJ5b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBldmVyeW9uZURhdGEgPSB1dGlscy5ldmVyeW9uZURhdGFGaWx0ZXIoZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnR5cGUsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGV2ZXJ5b25lRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGRheSBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWJ0blwiKTtcbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gdXRpbHMuZGF5Q29tcEZpbHRlcihkYXlDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBkYXlDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZGF5RGF0YSwgZGF5Q29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgQXBwIEFjYWRlbXkgU3R1ZGVudFxuICAgICAgICBjb25zdCBhcHBhY2FkZW15ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtYWNhZGVteS1idG5cIik7XG4gICAgICAgIGFwcGFjYWRlbXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhhcHBBY2FkZW15U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsIHllYXI6IFwiMjAxOVwifSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBmaXJzdCB5ZWFyIHJlc2lkZW50IGFmdGVyIG1lZGljYWwgc2Nob29sXG4gICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpZGVudC1idG5cIik7XG4gICAgICAgIHJlc2lkZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcocmVzaWRlbnRTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwifSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiY2xhc3MgQXBwQWNhZGVteVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWFwcFwiKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXBwLWFjYWRlbXktYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxNC44LFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgdHlwaWNhbCBBcHAgQWNhZGVteSBzdHVkZW50LiBOb3QgZnJvbSBBVFVTLlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWNhZGVteVNlbGVjdG9yOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktZmlsdGVyXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFbXBsb3llZCBieSBHZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFdmVyeW9uZSBieSBEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiXVxuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIilcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24udmFsdWUgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gICAgfSlcblxuICAgIGNhdGVnb3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwianMtXCJdJylcbiAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIikpO1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRW1wbG95ZWQgYnkgR2VuZGVyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtcGxveWVkXCIpO1xuICAgICAgICAgICAgICAgIGVtcGxveWVkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdlbmRlclwiKTtcbiAgICAgICAgICAgICAgICBnZW5kZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRXZlcnlvbmUgYnkgRGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWV2ZXJ5b25lXCIpO1xuICAgICAgICAgICAgICAgIGV2ZXJ5b25lLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRheVwiKTtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXBwXCIpO1xuICAgICAgICAgICAgICAgIGFwcC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcmVzaWRlbnRcIik7XG4gICAgICAgICAgICAgICAgcmVzaWRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxufSIsImV4cG9ydCBjb25zdCBBQ1RJVklUSUVTID0gW1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiXG5dO1xuXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IFwicmVkXCIsXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IFwib3JhbmdlXCIsXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiBcInllbGxvd1wiLFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogXCJncmVlblwiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiBcImJsdWVcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogXCJpbmRpZ29cIixcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IFwidmlvbGV0XCIsXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IFwiZ3JheVwiLFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogXCJibGFja1wiLFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IFwiY3lhblwiLFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogXCJjaGFydHJldXNlXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IFwibWFnZW50YVwiLFxuICAgIFwiTWVuXCI6IFwiYmx1ZVwiLFxuICAgIFwiV29tZW5cIjogXCJyZWRcIixcbiAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogXCJncmVlblwiLFxuICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBcInBpbmtcIlxufSIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICBjb25zdCBhY3Rpdml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFjdGl2aXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJBY3Rpdml0aWVzXCI7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eUxhYmVsKVxuXG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3Rpb25zID0gW1wiQWxsIEFjdGl2aXRpZXNcIl0uY29uY2F0KEFDVElWSVRJRVMpO1xuICAgIGFjdGl2aXR5U2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVBY3Rpdml0eSlcbn1cblxuZXhwb3J0IGNvbnN0IHllYXJTZWxlY3RvciA9ICh1cGRhdGVZZWFycywgZmlsdGVyLCBwcmVmaXgsIHllYXJzKSA9PiB7XG4gICAgY29uc3QgeWVhclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdG9yKTtcbiAgICB5ZWFyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInllYXItc2VsZWN0b3JcIilcbiAgICBjb25zdCB5ZWFyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHllYXJzTGFiZWwuaW5uZXJUZXh0ID0gXCJZZWFyc1wiO1xuICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZCh5ZWFyc0xhYmVsKVxuXG4gICAgY29uc3QgeWVhclNlbGVjdGlvbnMgPSB5ZWFycztcbiAgICB5ZWFyU2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCB5ZWFyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB5ZWFyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZVllYXJzKVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKGhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3QgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcblxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBBQ1RJVklUSUVTO1xuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgZHJhd0hhbmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJjbG9jay1oYW5kc1wiXScpO1xuICAgIG9sZC5mb3JFYWNoKGVsID0+IHtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKX0pXG5cbiAgICBjb25zdCBoYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFuZHNcIik7XG4gICAgY29uc3QgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHNcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQobWludXRlcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzLWhvdXJcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya01vZGVCdG4gPSAoZHJhdywgZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKTtcbiAgICBpZiAob2xkKSB7XG4gICAgICAgIG9sZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gXCJEYXJrIE1vZGVcIjtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtZGFya1wiKSkge1xuICAgICAgICB0ZXh0ID0gXCJMaWdodCBNb2RlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRhcmstYnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1kYXJrXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1saWdodFwiKTtcbiAgICAgICAgZHJhdyhkYXRhLCBwYXJhbXMpO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggKGRhdHVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdHVtO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBhbHBoYVtpXSlcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZF95ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCB5ZWFycztcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1kYXlcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlcik7XG5cbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3Rvcih0aGlzLnVwZGF0ZVllYXJzLCBmaWx0ZXIsIFwiZFwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuZGVyID0gdGhpcy51cGRhdGVHZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBBQ1RJVklUSUVTLFxuICAgICAgICAgICAgZ2VuZGVyOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlX2FjdGl2aXR5T3B0aW9uXCIpLmZvckVhY2ggKG9wdGlvbiA9PiB7b3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlciggYWN0aXZpdHkgPT4ge3JldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wifSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4ge3JldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgZ2VuZGVyOiBzZWxlY3Rpb25zLmdlbmRlcixcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwiZGlzcGxheVwiLCBcImpzLWVtcGxveWVkXCIpO1xuXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlciwgXCJlXCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImVcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuXG4gICAgICAgIGNvbnN0IGdlbmRlclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGdlbmRlclNlbGVjdG9yKTtcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgICAgICBnZW5kZXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCBnZW5kZXJcIikpXG4gICAgICAgIGNvbnN0IGdlbmRlcnMgPSBbXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIiwgXCJXb21lblwiLCBcIk1lblwiXTtcbiAgICAgICAgZ2VuZGVycy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIGdlbmRlclNlbGVjdG9yLmFwcGVuZENoaWxkKGdlbmRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZUdlbmRlcilcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZW1wbG95ZWRcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkVtcGxveWVkIG1lbiBhbmQgd29tZW4gb24gYW4gYXZlcmFnZSBkYXlcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVkU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuXG5jbGFzcyBldmVyeW9uZVNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBbGwgZGF5c1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVHlwZSA9IHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNldl9hY3Rpdml0eU9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlcihhY3Rpdml0eSA9PiB7IHJldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzID0gdGhpcy5zZWxlY3Rpb24uYWN0aXZpdGllcy5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2V2X3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlIDsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2X3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bJ3llYXJzJ10gPSB0aGlzLnNlbGVjdGlvblsneWVhcnMnXS5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFdmVyeW9uZSBieSBkYXlcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZXZlcnlvbmVcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyLCBcImV2XCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImV2XCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0pO1xuXG5cbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHR5cGVTZWxlY3Rvcik7XG4gICAgICAgIHR5cGVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCB0eXBlXCIpKVxuICAgICAgICBjb25zdCB0eXBlcyA9IFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl07XG4gICAgICAgIHR5cGVzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgdHlwZU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgICAgIHR5cGVPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKHR5cGVPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMudXBkYXRlVHlwZSlcblxuXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQsIGZpbHRlciwgXCJldmVyeW9uZVwiKTtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJBbGwgcGVyc29ucyBvbiBub25ob2xpZGF5IHdlZWtkYXlzIG9yIHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZXJ5b25lU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuXG5jbGFzcyBHZW5kZXJDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgeWVhcnM7XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ195ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1nZW5kZXJcIik7XG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJnXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImdlbmRlclwiKTtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIGVtcGxveWVkIG1lbiBhbmQgd29tZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmRlckNvbXBcblxuXG4vLyBnb2FsOiB7XCJXb21lblwiOiAwLjUsIFwiTWVuXCI6IDQuM30iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgdGhlIG1vZGFsXG4gICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5jbGFzc0xpc3QuYWRkKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibHVyKTtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIiwgXCJtb2RhbC1kaXNwbGF5XCIpO1xuICAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUaW1lIFVzYWdlXCI7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vIERlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gVGltZSBVc2FnZSwgYSBkYXRhIHZpc3VhbGl6YXRpb24gb2YgaG93IEFtZXJpY2FucyB1c2UgdGhlaXIgdGltZSBvbiBhIGdpdmVuIGRheS4gVGhlIGRhdGEgaXMgZ2F0aGVyZWQgYnkgdGhlIEJ1cmVhdSBvZiBMYWJvciBTdGF0aXN0aWNzIG9uY2UgYSB5ZWFyLlwiXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kZXNjcmlwdGlvblwiKTtcblxuICAgIC8vIFF1ZXN0aW9uXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPSBcIldvdWxkIHlvdSBsaWtlIGEgYnJpZWYgd2Fsa3Rocm91Z2g/XCI7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xuICAgIHF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1xdWVzdGlvblwiKTtcblxuICAgIC8vIEJ1dHRvbnNcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICAgIGNvbnN0IG5leHRTdGVwID0gKG9wdGlvbiwgY2xhc3NOYW1lLCBuZXh0LCBuZXh0Q2xhc3MpID0+IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtvcHRpb259YCk7XG4gICAgICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXh0fWApO1xuICAgICAgICAgICAgbmV4dEl0ZW0uY2xhc3NMaXN0LmFkZChuZXh0Q2xhc3MpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUgYnV0dG9uLiBUYWtlcyB0aGVtIGRpcmVjdGx5IGludG8gdGhlIGFwcC5cbiAgICBjb25zdCBhbHJlYWR5YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFscmVhZHlidG4pO1xuICAgIGFscmVhZHlidG4uaW5uZXJUZXh0ID0gXCJJJ3ZlIGFscmVhZHkgdXNlZCB0aGlzIGJlZm9yZS5cIjtcbiAgICBhbHJlYWR5YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpKTtcblxuICAgIC8vIFdhbGt0aHJvdWdoIGJ1dHRvbi4gSXQgc2hvdWxkIHRha2UgdGhlbSB0aHJvdWdoIHRoZSB3YWxrdGhyb3VnaC4gXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHllc0J0bik7IFxuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllcywgcGxlYXNlLlwiO1xuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaFxuICAgIC8vIEZJUlNUXG4gICAgY29uc3QgZmlyc3RTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChmaXJzdFN0ZXApO1xuICAgIGZpcnN0U3RlcC5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcFwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIik7XG4gICAgZmlyc3RTdGVwLmlubmVyVGV4dCA9IFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3RTdGVwLmFwcGVuZENoaWxkKGZpcnN0QnV0dG9uKTtcbiAgICBmaXJzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcC1idXR0b25cIik7XG4gICAgZmlyc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJHb3QgaXRcIjtcbiAgICBmaXJzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiKSlcblxuICAgIGNvbnN0IGZpcnN0VHJpYW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpcnN0VHJpYW5nbGUuY2xhc3NMaXN0LmFkZChcImxlZnQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC1maXJzdC10cmlhbmdsZVwiKTtcbiAgICBmaXJzdFN0ZXAuYXBwZW5kQ2hpbGQoZmlyc3RUcmlhbmdsZSk7XG5cbiAgICAvLyBTRUNPTkRcbiAgICBjb25zdCBzZWNvbmRTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChzZWNvbmRTdGVwKTtcbiAgICBzZWNvbmRTdGVwLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIik7XG4gICAgc2Vjb25kU3RlcC5pbm5lclRleHQgPSAnU2VsZWN0IHlvdXIgcGFyYW1ldGVycy4gQXBwIEFjYWRlbXkgU3R1ZGVudCBhbmQgRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50IGhhdmUgbm8gcGFyYW1ldGVycy4gVGhlbiBjbGljayBcIlN1Ym1pdCBTZWxlY3Rpb24uXCInXG5cbiAgICBjb25zdCBzZWNvbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZFN0ZXAuYXBwZW5kQ2hpbGQoc2Vjb25kQnV0dG9uKTtcbiAgICBzZWNvbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXAtYnV0dG9uXCIpO1xuICAgIHNlY29uZEJ1dHRvbi5pbm5lclRleHQgPSBcIkdyZWF0XCI7XG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIpKVxuXG4gICAgY29uc3Qgc2Vjb25kVHJpYW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZFRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXRyaWFuZ2xlXCIsIFwid2Fsa3Rocm91Z2gtc2Vjb25kLXRyaWFuZ2xlXCIpO1xuICAgIHNlY29uZFN0ZXAuYXBwZW5kQ2hpbGQoc2Vjb25kVHJpYW5nbGUpO1xuXG4gICAgLy8gVEhJUkRcbiAgICBjb25zdCB0aGlyZFN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHRoaXJkU3RlcCk7XG4gICAgdGhpcmRTdGVwLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiKTtcbiAgICB0aGlyZFN0ZXAuaW5uZXJUZXh0ID0gJ0FzIHlvdSBob3ZlciBvdmVyIHRoZSBzbGljZXMgb2YgdGhlIGdyYXBoLCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHdpbGwgbGlnaHQgdXAuIE5vdGUgdGhhdCB0aGVzZSBzbGljZXMgYXJlIHRlY2huaWNhbGx5IHByb3BvcnRpb25zLCBhbmQgbm90IHN0cmljdGx5IG91dCBvZiAyNCBob3Vycy4gSXQgZGVwZW5kcyBvbiB0aGUgcGFyYW1ldGVycy4nXG5cbiAgICBjb25zdCB0aGlyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcmRTdGVwLmFwcGVuZENoaWxkKHRoaXJkQnV0dG9uKTtcbiAgICB0aGlyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcC1idXR0b25cIik7XG4gICAgdGhpcmRCdXR0b24uaW5uZXJUZXh0ID0gXCJBd2Vzb21lXCI7XG4gICAgdGhpcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZvdXJ0aFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIikpXG5cbiAgICBjb25zdCB0aGlyZFRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcmRUcmlhbmdsZUEuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXRyaWFuZ2xlXCIsIFwid2Fsa3Rocm91Z2gtdGhpcmQtdHJpYW5nbGUtYVwiKTtcbiAgICB0aGlyZFN0ZXAuYXBwZW5kQ2hpbGQodGhpcmRUcmlhbmdsZUEpO1xuXG4gICAgY29uc3QgdGhpcmRUcmlhbmdsZUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXJkVHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgdGhpcmRTdGVwLmFwcGVuZENoaWxkKHRoaXJkVHJpYW5nbGVCKTtcblxuICAgIC8vIEZPVVJUSFxuICAgIGNvbnN0IGZvdXJ0aFN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKGZvdXJ0aFN0ZXApO1xuICAgIGZvdXJ0aFN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZvdXJ0aFwiLCApO1xuICAgIGZvdXJ0aFN0ZXAuaW5uZXJUZXh0ID0gXCJUaGVyZSdzIGEgZGFyayBtb2RlIGlmIG5lZWRlZC5cIlxuXG4gICAgY29uc3QgZm91cnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3VydGhTdGVwLmFwcGVuZENoaWxkKGZvdXJ0aEJ1dHRvbik7XG4gICAgZm91cnRoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBmb3VydGhCdXR0b24uaW5uZXJUZXh0ID0gXCJJJ20gcmVhZHlcIjtcbiAgICBmb3VydGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIikpXG5cbiAgICBjb25zdCBmb3VydGhUcmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm91cnRoVHJpYW5nbGUuY2xhc3NMaXN0LmFkZChcImRvd24tdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC1mb3VydGgtdHJpYW5nbGVcIik7XG4gICAgZm91cnRoU3RlcC5hcHBlbmRDaGlsZChmb3VydGhUcmlhbmdsZSk7XG5cbn0iLCJjbGFzcyBSZXNpZGVudFNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLXJlc2lkZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2lkZW50LWJ0blwiLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjUsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjMsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkEgZmlyc3QteWVhciBtZWRpY2FsIHJlc2lkZW50IGF0IFVDU0YuIE5vdCBmcm9tIEFUVVMuXCI7XG5cbiAgICAgICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGNpdGF0aW9uKTtcbiAgICAgICAgY2l0YXRpb24uY2xhc3NMaXN0LmFkZChcImNpdGF0aW9uXCIpO1xuICAgICAgICBjaXRhdGlvbi5pbm5lclRleHQgPSBcIkRhdGEgYXBwcm94aW1hdGVkIGZyb20gXCI7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCIpO1xuICAgICAgICBhLmlubmVyVGV4dCA9IFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCI7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICBjaXRhdGlvbi5hcHBlbmRDaGlsZChhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2lkZW50U2VsZWN0b3I7IiwiY2xhc3MgVXRpbHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFycmF5U3VtID0gdGhpcy5hcnJheVN1bS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5QXZlcmFnZSA9IHRoaXMuYXJyYXlBdmVyYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlNZXJnZSA9IHRoaXMuYXJyYXlNZXJnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVtcGxveWVkRGF0YUZpbHRlciA9IHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXZlcnlvbmVEYXRhRmlsdGVyID0gdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIGFycmF5U3VtIChhcnIpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gYXJyW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgYXJyYXlBdmVyYWdlIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTdW0oYXJyKSAvIGFyci5sZW5ndGg7XG4gICAgfVxuXG4gICAgYXJyYXlNZXJnZSAoLi4uYXJyYXlzKSB7XG4gICAgICAgIGxldCBmaW5hbCA9IFtdO1xuICAgICAgICBpZiAoYXJyYXlzLmV2ZXJ5KCBhcnIgPT4geyByZXR1cm4gYXJyLmxlbmd0aCA9PT0gYXJyYXlzWzBdLmxlbmd0aDsgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheXMgYXJlIG5vdCB0aGUgc2FtZSBsZW5ndGhcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViQXJyID0gW107XG4gICAgICAgICAgICBhcnJheXMuZm9yRWFjaCggYXJyID0+IHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZpbmFsLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWw7XG4gICAgfVxuXG4gICAgZW1wbG95ZWREYXRhRmlsdGVyIChhY3Rpdml0aWVzLCBnZW5kZXIsIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gW107XG4gICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaCggYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGdlbmRlckZpbHRlciA9IGFjdGl2aXR5RmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbZGF0dW0uYWN0aXZpdHldOiBkYXR1bVtnZW5kZXJdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gZ2VuZGVyRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goIHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7W09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcil9O1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc29ydGVkID0gZmluYWxEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoT2JqZWN0LnZhbHVlcyhhKVswXSA+IE9iamVjdC52YWx1ZXMoYilbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoIChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmVyeW9uZURhdGFGaWx0ZXIoYWN0aXZpdGllcywgdHlwZSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgIGFjdGl2aXR5RmlsdGVyLnB1c2goZGF0YVthY3Rpdml0eV0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0eXBlRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW3R5cGVdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gdHlwZUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dOiB0aGlzLmFycmF5QXZlcmFnZSh5ZWFybHlGaWx0ZXIpIH07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBzb3J0ZWQuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZW5kZXJDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW5GaWx0ZXIgPSB7IFwiTWVuXCI6IGFjdGl2aXR5RmlsdGVyW1wiTWVuXCJdIH1cbiAgICAgICAgY29uc3Qgd29tZW5GaWx0ZXIgPSB7IFwiV29tZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJXb21lblwiXX1cblxuXG4gICAgICAgIGNvbnN0IG1lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxNZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMobWVuRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIG1lblllYXJseUZpbHRlci5wdXNoKGFsbE1lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVuRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKG1lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgY29uc3Qgd29tZW5ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsV29tZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMod29tZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgd29tZW5ZZWFybHlGaWx0ZXIucHVzaChhbGxXb21lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgd29tZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uod29tZW5ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmICh3b21lbkRhdGEgPiBtZW5EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiTWVuXCI6IG1lbkRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YSxcbiAgICAgICAgICAgICAgICBcIldvbWVuXCI6IHdvbWVuRGF0YSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkYXlDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG5cbiAgICAgICAgY29uc3Qgbm9uRmlsdGVyID0geyBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJOb25ob2xpZGF5IHdlZWtkYXlzXCJdIH1cbiAgICAgICAgY29uc3QgaG9saUZpbHRlciA9IHsgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGFjdGl2aXR5RmlsdGVyW1wiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiXSB9XG5cbiAgICAgICAgY29uc3Qgbm9uWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE5vblllYXJzID0gT2JqZWN0LnZhbHVlcyhub25GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbm9uWWVhcmx5RmlsdGVyLnB1c2goYWxsTm9uWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBub25EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uobm9uWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCBob2xpWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbEhvbGlZZWFycyA9IE9iamVjdC52YWx1ZXMoaG9saUZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBob2xpWWVhcmx5RmlsdGVyLnB1c2goYWxsSG9saVllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgaG9saURhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShob2xpWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBpZiAoaG9saURhdGEgPiBub25EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YSxcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YSxcbiAgICAgICAgICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogaG9saURhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xuXG4vLyBkYXRhRmlsdGVyKFtcIk90aGVyIGFjdGl2aXRpZXMsIG5vdCBlbHNld2hlcmUgY2xhc3NpZmllZCAoaW5jbHVkZXMgbWlzYy4gdHJhdmVsIGFuZCBkYXRhIGNvZGVzKVwiLCBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGUtbWFpbCAoaW5jbHVkZXMgdHJhdmVsKVwiXSxcbi8vIC4uLiAgICAgICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuLy8gLi4uW1wiMjAxM1wiLCBcIjIwMTRcIl0sXG4vLyAuLi5lbXBsb3llZEJ5R2VuZGVyKVxuIiwiaW1wb3J0IHtDT0xPUlN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFyZ2luID0gMTU7XG5cbiAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI3dhdGNoXCIpXG4gICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRhaW5lclwiLCB0cnVlKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHsgd2lkdGggPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7IHJldHVybiB3aWR0aCB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyBoZWlnaHQgPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0OyByZXR1cm4gaGVpZ2h0IH0pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAtIG1hcmdpbjtcblxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuICAgIGNvbnN0IHByb2Nlc3NlZF9kYXRhID0gZDMuZW50cmllcyhkYXRhKTtcblxuICAgIGNvbnN0IHRvdGFsID0gdXRpbHMuYXJyYXlTdW0ocHJvY2Vzc2VkX2RhdGEubWFwKGQgPT4ge3JldHVybiBkLnZhbHVlfSkpXG5cbiAgICBwcm9jZXNzZWRfZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLnBlcmNlbnRhZ2UgPSBkLnZhbHVlIC8gdG90YWw7XG4gICAgfSlcblxuICAgIGNvbnN0IGZpbmFsX2RhdGEgPSBwaWUocHJvY2Vzc2VkX2RhdGEpO1xuXG4gICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcblxuICAgIGNvbnN0IHBhdGhzID0gc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAuZGF0YShmaW5hbF9kYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcblxuICAgIGNvbnN0IGFscGhhID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCJdXG5cbiAgICBwYXRoc1xuICAgICAgICAuZWFjaCggZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FyY3MnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZnVuY3Rpb24oZCkge3JldHVybiBkLmRhdGEucGVyY2VudGFnZSAqIDMwMDB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSggZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwICsgMjAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI2NTEyMy9yZXNpemUtc3ZnLXdoZW4td2luZG93LWlzLXJlc2l6ZWQtaW4tZDMtanNcbiAgICAvLyBmb3IgcmVzcG9uc2l2ZSBTVkcgZGVzaWduXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NjI5ODIvaG93LXRvLWRpc3BsYXktcGVyY2VudGFnZS10by10aGUtZDMtanMtcGllY2hhcnRcbiAgICAvLyBmb3IgcGVyY2VudGFnZXNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL2ZhcmF6c2h1amEvZTJjYjUyODI4YzA4MGJhODVkYTU0NThlMjMwNGE2MWZcbiAgICAvLyBmb3IgbGFiZWxpbmcgc2xpY2VzIHdpdGggcGVyY2VudGFnZXNcbiAgICAvLyBodHRwOi8vYmwub2Nrcy5vcmcvbmFkaW5lc2svOTkzOTMwOTg5NTA2NjVjNDcxZTAzNWFjNTE3YzIyMjRcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjU5OTdcbiAgICAvLyBmb3IgY2hhaW5lZCB0cmFuc2l0aW9uc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==