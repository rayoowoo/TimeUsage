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


var _App = __webpack_require__(/*! ./js/components/App */ "./src/js/components/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default();
app.render();

/***/ }),

/***/ "./src/js/components/App.js":
/*!**********************************!*\
  !*** ./src/js/components/App.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _instruction = __webpack_require__(/*! ./instruction */ "./src/js/components/instruction.js");

var _instruction2 = _interopRequireDefault(_instruction);

var _watch = __webpack_require__(/*! ./watch */ "./src/js/components/watch.js");

var _watch2 = _interopRequireDefault(_watch);

var _category_selector = __webpack_require__(/*! ./category_selector */ "./src/js/components/category_selector.js");

var _category_selector2 = _interopRequireDefault(_category_selector);

var _employed_selectors = __webpack_require__(/*! ./employed_selectors */ "./src/js/components/employed_selectors.js");

var _employed_selectors2 = _interopRequireDefault(_employed_selectors);

var _everyone_selectors = __webpack_require__(/*! ./everyone_selectors */ "./src/js/components/everyone_selectors.js");

var _everyone_selectors2 = _interopRequireDefault(_everyone_selectors);

var _data_display = __webpack_require__(/*! ./data_display */ "./src/js/components/data_display.js");

var _data_display2 = _interopRequireDefault(_data_display);

var _app_academy_selector = __webpack_require__(/*! ./app_academy_selector */ "./src/js/components/app_academy_selector.js");

var _app_academy_selector2 = _interopRequireDefault(_app_academy_selector);

var _resident_selector = __webpack_require__(/*! ./resident_selector */ "./src/js/components/resident_selector.js");

var _resident_selector2 = _interopRequireDefault(_resident_selector);

var _gender_comp = __webpack_require__(/*! ./gender_comp */ "./src/js/components/gender_comp.js");

var _gender_comp2 = _interopRequireDefault(_gender_comp);

var _day_comp = __webpack_require__(/*! ./day_comp */ "./src/js/components/day_comp.js");

var _day_comp2 = _interopRequireDefault(_day_comp);

var _employedByGenderDataShaped = __webpack_require__(/*! ../../assets/data/employedByGenderDataShaped */ "./src/assets/data/employedByGenderDataShaped.js");

var _everyoneByDayShaped = __webpack_require__(/*! ../../assets/data/everyoneByDayShaped */ "./src/assets/data/everyoneByDayShaped.js");

var _utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

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

            // instructions modal
            (0, _instruction2.default)();

            // making all the selectors
            (0, _category_selector2.default)();

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

/***/ "./src/js/components/app_academy_selector.js":
/*!***************************************************!*\
  !*** ./src/js/components/app_academy_selector.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            var filter = Create.filters(attach, "app");

            var selectionButton = Create.selectButton(filter, "app-academy");
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

            Create.description(filter, "The typical App Academy student. Not from ATUS.");
        }
    }]);

    return AppAcademySelector;
}();

exports.default = AppAcademySelector;

/***/ }),

/***/ "./src/js/components/category_selector.js":
/*!************************************************!*\
  !*** ./src/js/components/category_selector.js ***!
  \************************************************/
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

/***/ "./src/js/components/data_display.js":
/*!*******************************************!*\
  !*** ./src/js/components/data_display.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = __webpack_require__(/*! ../helpers/constants */ "./src/js/helpers/constants.js");

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

    Object.keys(data).forEach(function (datum, i) {
        var li = document.createElement("li");
        list.appendChild(li);
        var p = document.createElement("p");
        p.innerText = datum;
        li.setAttribute("id", _constants.alpha[i]);
        li.classList.add("display-list-items");
        li.appendChild(p);
        var span = document.createElement("span");
        span.innerText = data[datum].toFixed(2);
        li.appendChild(span);
        var arc = document.querySelector("." + _constants.alpha[i]);
        li.addEventListener("mouseover", function (e) {
            arc.classList.add("arc-display");
        });
        li.addEventListener("mouseout", function (e) {
            arc.classList.remove("arc-display");
        });
    });
};

/***/ }),

/***/ "./src/js/components/day_comp.js":
/*!***************************************!*\
  !*** ./src/js/components/day_comp.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayComp = function () {
    function DayComp() {
        _classCallCheck(this, DayComp);

        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        };
    }

    _createClass(DayComp, [{
        key: "updateActivity",
        value: function updateActivity(e) {
            this.selection.activity = e.target.value;
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var years = selections.years[0] === "All years" || selections["years"][0] === undefined ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Day Comparison (everyone)"
            };
            if (selections["years"].length === 0) {
                var yearAll = document.querySelector("#d_yearOptionAll");
                yearAll.checked = true;
                yearAll.parentNode.classList.add("selected");
            }
        }
    }, {
        key: "addComp",
        value: function addComp() {
            var attach = document.querySelector("#selector");
            var filter = Create.filters(attach, "day");
            Create.activitySelect(this.updateActivity.bind(this), filter);
            Create.yearSelector(filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.submitButton(this.handleSubmit.bind(this), filter, "day");
            Create.description(filter, "Comparison of nonholiday weekdays against weekend days and holidays");
        }
    }]);

    return DayComp;
}();

exports.default = DayComp;

/***/ }),

/***/ "./src/js/components/employed_selectors.js":
/*!*************************************************!*\
  !*** ./src/js/components/employed_selectors.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ../helpers/constants */ "./src/js/helpers/constants.js");

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

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
        this.result = {
            activities: _constants.ACTIVITIES,
            gender: "Total (men and women)",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"],
            filter: "Employed by Gender"
        };
    }

    _createClass(EmployedSelectors, [{
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
            var activities = selections["activities"][0] === "All Activities" || selections["activities"][0] === undefined ? _constants.ACTIVITIES : selections['activities'];
            var years = selections.years[0] === "All years" || selections["activities"][0] === undefined ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activities: activities,
                years: years,
                gender: selections.gender,
                filter: "Employed by Gender"
            };
            if (selections["activities"].length === 0) {
                var actAll = document.querySelector('#e_activityOptionAll');
                actAll.checked = true;
                actAll.parentNode.classList.add("selected");
            }
            if (selections["years"].length === 0) {
                var yearAll = document.querySelector('#e_yearOptionAll');
                yearAll.checked = true;
                yearAll.parentNode.classList.add("selected");
            }
        }
    }, {
        key: 'addSelectors',
        value: function addSelectors() {
            var attach = document.querySelector("#selector");
            var filter = Create.filters(attach, "employed");
            Create.activitySelector(filter, "e", this);
            Create.yearSelector(filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.otherSelector(filter, "gender", ["Total (men and women)", "Women", "Men"], this.updateGender.bind(this));
            Create.submitButton(this.handleSubmit.bind(this), filter, "employed");
            Create.description(filter, "Employed men and women on an average day");
        }
    }]);

    return EmployedSelectors;
}();

exports.default = EmployedSelectors;

/***/ }),

/***/ "./src/js/components/everyone_selectors.js":
/*!*************************************************!*\
  !*** ./src/js/components/everyone_selectors.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ../helpers/constants */ "./src/js/helpers/constants.js");

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

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
    }

    _createClass(everyoneSelectors, [{
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
            var activities = selections["activities"][0] === "All Activities" || selections["activities"][0] === undefined ? _constants.ACTIVITIES : selections['activities'];
            var years = selections.years[0] === "All years" || selections["years"][0] === undefined ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activities: activities,
                years: years,
                type: selections.type,
                filter: "Everyone by day"
            };
            if (selections["activities"].length === 0) {
                var actAll = document.querySelector('#ev_activityOptionAll');
                actAll.checked = true;
                actAll.parentNode.classList.add("selected");
            }
            if (selections["years"].length === 0) {
                var yearAll = document.querySelector('#ev_yearOptionAll');
                yearAll.checked = true;
                yearAll.parentNode.classList.add("selected");
            }
        }
    }, {
        key: 'addSelectors',
        value: function addSelectors() {
            var attach = document.querySelector("#selector");
            var filter = Create.filters(attach, "everyone");
            Create.activitySelector(filter, "ev", this);
            Create.yearSelector(filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.otherSelector(filter, "type", ["All days", "Nonholiday weekdays", "Weekend days and holidays"], this.updateType.bind(this));
            Create.submitButton(this.handleSubmit.bind(this), filter, "everyone");
            Create.description(filter, "All persons on nonholiday weekdays or weekend days and holidays");
        }
    }]);

    return everyoneSelectors;
}();

exports.default = everyoneSelectors;

/***/ }),

/***/ "./src/js/components/gender_comp.js":
/*!******************************************!*\
  !*** ./src/js/components/gender_comp.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenderComp = function () {
    function GenderComp() {
        _classCallCheck(this, GenderComp);

        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        };
    }

    _createClass(GenderComp, [{
        key: "updateActivity",
        value: function updateActivity(e) {
            this.selection.activity = e.target.value;
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var selections = this.selection;
            var years = selections.years[0] === "All years" || selections["years"][0] === undefined ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Gender Comparison (employed)"
            };
            if (selections["years"].length === 0) {
                var yearAll = document.querySelector("#g_yearOptionAll");
                yearAll.checked = true;
                yearAll.parentNode.classList.add("selected");
            }
        }
    }, {
        key: "addComp",
        value: function addComp() {
            var attach = document.querySelector("#selector");
            var filter = Create.filters(attach, "gender");
            Create.activitySelect(this.updateActivity.bind(this), filter, this);
            Create.yearSelector(filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.submitButton(this.handleSubmit.bind(this), filter, "gender");
            Create.description(filter, "Comparison of employed men and women");
        }
    }]);

    return GenderComp;
}();

exports.default = GenderComp;

// goal: {"Women": 0.5, "Men": 4.3}

/***/ }),

/***/ "./src/js/components/instruction.js":
/*!******************************************!*\
  !*** ./src/js/components/instruction.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _walkthrough = __webpack_require__(/*! ./walkthrough */ "./src/js/components/walkthrough.js");

var _walkthrough2 = _interopRequireDefault(_walkthrough);

var _utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var utils = new _utils2.default();
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

    // Exit button

    // I've already used this before button. Takes them directly into the app.
    var alreadybtn = document.createElement("div");
    buttons.appendChild(alreadybtn);
    alreadybtn.innerText = "I've already used this before.";
    alreadybtn.addEventListener("click", utils.nextStep("blur", "modal-display"));

    // Walkthrough button. It should take them through the walkthrough. 
    var yesBtn = document.createElement("div");
    buttons.appendChild(yesBtn);
    yesBtn.innerText = "Yes, please.";
    yesBtn.addEventListener("click", function (e) {
        (0, _walkthrough2.default)(blur);
        utils.nextStep("modal", "modal-display", "walkthrough-step-first", "walkthrough-display", ".category-filter")(e);
    });
};

/***/ }),

/***/ "./src/js/components/resident_selector.js":
/*!************************************************!*\
  !*** ./src/js/components/resident_selector.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            var filter = Create.filters(attach, "resident");

            var selectionButton = Create.selectButton(filter, "resident");
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

            Create.description(filter, "A first-year medical resident at UCSF. Not from ATUS.");

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

/***/ "./src/js/components/walkthrough.js":
/*!******************************************!*\
  !*** ./src/js/components/walkthrough.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _create = __webpack_require__(/*! ../helpers/create */ "./src/js/helpers/create.js");

var Create = _interopRequireWildcard(_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (blur) {
    // Walkthrough
    var utils = new _utils2.default();

    var exitButton = document.createElement("div");
    blur.appendChild(exitButton);
    exitButton.classList.add("walkthrough-step", "exit");
    exitButton.innerText = "Exit walkthrough";
    exitButton.addEventListener("click", utils.nextStep("blur", "modal-display", "exit", "walkthrough-display", null, "*"));

    var firstButton = Create.steps(blur, "first", "Start by how you want to filter the data. Select a general category. Note that App Academy Student and First Year Medical Resident are not from the American Time Usage Survey.", "Got it!", "left");
    var secondButton = Create.steps(blur, "second", 'Select your parameters. App Academy Student and First Year Medical Resident have no parameters. Then click "Submit Selection."', "Great!", "left");
    var thirdButton = Create.steps(blur, "third", 'As you hover over the slices of the graph, the corresponding data will light up, and vice versa. Note that these slices are technically proportions, and not strictly out of 24 hours. It depends on the parameters.', "Awesome!");
    var fourthButton = Create.steps(blur, "fourth", "There's a dark mode if needed.", "I'm ready.", "down");
    firstButton.addEventListener("click", utils.nextStep("walkthrough-step-first", "walkthrough-display", "walkthrough-step-second", "walkthrough-display", ".selectors", ".category-filter"));
    secondButton.addEventListener("click", utils.nextStep("walkthrough-step-second", "walkthrough-display", "walkthrough-step-third", "walkthrough-display", "#c", ".selectors"));
    thirdButton.addEventListener("click", utils.nextStep("walkthrough-step-third", "walkthrough-display", "walkthrough-step-fourth", "walkthrough-display", ".dark-btn", "#c"));
    fourthButton.addEventListener("click", utils.nextStep("blur", "modal-display", null, null, null, ".dark-btn"));
};

/***/ }),

/***/ "./src/js/components/watch.js":
/*!************************************!*\
  !*** ./src/js/components/watch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(/*! ../helpers/constants */ "./src/js/helpers/constants.js");

var _utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    // const margin = window.innerHeight * 0.11;
    var margin = window.innerHeight * 0.04;

    var width = void 0,
        height = void 0;
    var utils = new _utils2.default();

    var svg = d3.select("#watch").classed("svg-container", true).append("svg").attr("width", function (d) {
        width = this.parentNode.clientHeight;return width;
    }).attr("height", function (d) {
        height = this.parentNode.clientHeight;return height;
    }).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var radius = Math.min(width, height) / 2 - margin;

    // setting the parameters of the pie
    var pie = d3.pie().value(function (d) {
        return d.value;
    });

    // formatting the data object received into an array of POJOS with the keys "key" and "value" and values correspondingly. 
    var processed_data = d3.entries(data);

    // total of the values, used to calculate percentage.
    var total = utils.arraySum(processed_data.map(function (d) {
        return d.value;
    }));

    // assigning each data entry a percentage value
    processed_data.forEach(function (d) {
        d.percentage = d.value / total;
    });

    // turning the data values into a pie graph, with the d.values being how much of the total donut. 
    var final_data = pie(processed_data);

    // defining the method to make arcs. since we have an inner radius and an outer radius, this is a donut. 
    var arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

    // all the paths made from the data values. 
    var paths = svg.selectAll().data(final_data).enter().append('path');

    // making the arcs for each path, setting listeners, and creating the transitions. 
    paths.each(function (d, i) {
        d3.select(this).classed('arcs', true)
        // .style('fill', function (d) { return `rgb(${255 * (1 - d.data.percentage)}, 42, 55)` })
        // .style('fill', function(d) {return `rgba(157, 42, 55, ${d.data.percentage})`})
        .style('fill', _constants.COLORS[i]).classed(_constants.alpha[i], true).on("mouseover", function (d) {
            var el = document.querySelector('#' + _constants.alpha[i]);
            el.classList.add("focused");
        }).on("mouseout", function (d) {
            var el = document.querySelector('#' + _constants.alpha[i]);
            el.classList.remove("focused");
        }).transition().duration(function (d) {
            return d.data.percentage * 3000;
        }).delay(function (d) {
            return utils.arraySum(paths.nodes().slice(0, i).map(function (el) {
                return d3.select(el).data()[0].data.percentage;
            })) * 3000 + 200; // this line is literally just to calculate the delay such that the transitions are one after the other.
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

/***/ }),

/***/ "./src/js/helpers/constants.js":
/*!*************************************!*\
  !*** ./src/js/helpers/constants.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ACTIVITIES = exports.ACTIVITIES = ["Personal care activities", "Eating and drinking", "Household activities", "Purchasing goods and services", "Caring for and helping household members", "Caring for and helping nonhousehold members", "Working and work-related activities", "Educational activities", "Organizational, civic, and religious activities", "Leisure and sports", "Telephone calls, mail, and email", "Other activities"];

var alpha = exports.alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

var COLORS = exports.COLORS = ['rgb(80, 42, 55)', 'rgb(90, 42, 55)', 'rgb(101, 42, 55)', 'rgb(118, 42, 55)', 'rgb(133, 42, 55)', 'rgb(150, 42, 55)', 'rgb(160, 42, 55)', 'rgb(177, 42, 55)', 'rgb(190, 42, 55)', 'rgb(202, 42, 55)', 'rgb(216, 42, 55)', 'rgb(221, 42, 55)'];

/***/ }),

/***/ "./src/js/helpers/create.js":
/*!**********************************!*\
  !*** ./src/js/helpers/create.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectButton = exports.otherSelector = exports.filters = exports.description = exports.steps = exports.darkModeBtn = exports.drawHands = exports.activitySelect = exports.submitButton = exports.yearSelector = exports.activitySelector = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/js/helpers/constants.js");

var _update = __webpack_require__(/*! ./update */ "./src/js/helpers/update.js");

var Update = _interopRequireWildcard(_update);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var activitySelector = exports.activitySelector = function activitySelector(filter, prefix, that) {
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
            activityOption.setAttribute("id", prefix + '_activityOptionAll');
        } else {
            activityOption.setAttribute("id", prefix + '_activityOption');
        }
        div.appendChild(activityOption);
        div.appendChild(span);
    });
    activitySelector.addEventListener("change", Update.activity(prefix, that));
};

var yearSelector = exports.yearSelector = function yearSelector(filter, prefix, years, that) {
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
            yearOption.setAttribute("id", prefix + '_yearOptionAll');
        } else {
            yearOption.setAttribute("id", prefix + '_yearOption');
        }
        div.appendChild(yearOption);
        div.appendChild(span);
    });
    yearSelector.addEventListener("change", Update.years(prefix, that));
};

var submitButton = exports.submitButton = function submitButton(handleSubmit, filter, prefix) {
    var selectionButton = document.createElement("button");
    filter.appendChild(selectionButton);
    selectionButton.classList.add(prefix + '-btn', "selector-btn");
    selectionButton.innerText = "Submit Selection";
    selectionButton.addEventListener("click", handleSubmit);
};

var activitySelect = exports.activitySelect = function activitySelect(updateActivity, filter) {
    var activitySelector = document.createElement("select");
    filter.appendChild(activitySelector);
    activitySelector.classList.add("selectors", "selectors-select");

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
    var body = document.querySelector("body");
    body.appendChild(btn);

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var html = document.querySelector("html");
        html.classList.toggle("theme-dark");
        html.classList.toggle("theme-light");
        draw(data, params);
    });
};

var steps = exports.steps = function steps(blur, order, stepText, buttonText, triangleDirection) {
    var step = document.createElement("section");
    blur.appendChild(step);
    step.classList.add("walkthrough-step", 'walkthrough-step-' + order);
    step.innerText = stepText;

    var button = document.createElement("div");
    step.appendChild(button);
    button.classList.add("walkthrough-step-button");
    button.innerText = buttonText;

    if (order === "third") {
        var triangleA = document.createElement("div");
        triangleA.classList.add("right-triangle", "walkthrough-third-triangle-a");
        step.appendChild(triangleA);

        var triangleB = document.createElement("div");
        triangleB.classList.add("up-triangle", "walkthrough-third-triangle-b");
        step.appendChild(triangleB);
    } else {
        var triangle = document.createElement("div");
        triangle.classList.add(triangleDirection + '-triangle', 'walkthrough-' + order + '-triangle');
        step.appendChild(triangle);
    }
    return button;
};

var description = exports.description = function description(filter, words) {
    var description = document.createElement("p");
    filter.appendChild(description);
    description.classList.add("description");
    description.innerText = words;
};

var filters = exports.filters = function filters(attach, category) {
    var filter = document.createElement("section");
    attach.appendChild(filter);
    filter.classList.add("filter", 'js-' + category);
    if (category === "employed") {
        filter.classList.add("display");
    }
    return filter;
};

var otherSelector = exports.otherSelector = function otherSelector(filter, category, options, update) {
    var selector = document.createElement("select");
    filter.appendChild(selector);
    selector.classList.add("selectors", "selectors-select");
    selector.appendChild(document.createTextNode('Select ' + category));
    options.forEach(function (select) {
        var option = document.createElement("option");
        option.value = select;
        option.innerText = select;
        selector.appendChild(option);
    });
    selector.addEventListener("change", update);
};

var selectButton = exports.selectButton = function selectButton(filter, category) {
    var button = document.createElement("button");
    filter.appendChild(button);
    button.classList.add(category + '-btn', "selector-btn");
    button.innerText = "Submit Selection";
    return button;
};

/***/ }),

/***/ "./src/js/helpers/update.js":
/*!**********************************!*\
  !*** ./src/js/helpers/update.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var activity = exports.activity = function activity(prefix, that) {
    return function (e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#" + prefix + "_activityOption").forEach(function (option) {
                    option.checked = false;option.parentNode.classList.remove("selected");
                });
                that.selection["activities"] = ["All Activities"];
            } else {
                var all = document.querySelector("#" + prefix + "_activityOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                var newArr = that.selection["activities"].filter(function (activity) {
                    return activity !== "All Activities";
                });
                newArr.push(e.target.value);
                that.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            that.selection.activities = that.selection.activities.filter(function (select) {
                return select !== e.target.value;
            });
        }
    };
};

var years = exports.years = function years(prefix, that) {
    return function (e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All years") {
                document.querySelectorAll("#" + prefix + "_yearOption").forEach(function (option) {
                    option.checked = false;option.parentNode.classList.remove("selected");
                });
                that.selection["years"] = ["All years"];
            } else {
                var all = document.querySelector("#" + prefix + "_yearOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                var newArr = that.selection["years"].filter(function (year) {
                    return year !== "All years";
                });
                newArr.push(e.target.value);
                that.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            that.selection["years"] = that.selection["years"].filter(function (select) {
                return select !== e.target.value;
            });
        }
    };
};

/***/ }),

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
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
    }, {
        key: "nextStep",
        value: function nextStep(option, className, next, nextClass, nextComponent, prevComponent) {
            return function (e) {
                e.preventDefault();
                var closeModal = document.querySelector("." + option);
                closeModal.classList.remove(className);
                if (next) {
                    var nextItem = document.querySelector("." + next);
                    nextItem.classList.add(nextClass);
                }
                if (nextComponent) {
                    var nextComp = document.querySelectorAll("" + nextComponent);
                    nextComp.forEach(function (el) {
                        return el.classList.add("component-display");
                    });
                }
                if (prevComponent) {
                    var prevComp = document.querySelectorAll("" + prevComponent);
                    prevComp.forEach(function (el) {
                        return el.classList.remove("component-display");
                    });
                }
            };
        }
    }]);

    return Utils;
}();

exports.default = Utils;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsImlubmVyVGV4dCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25zIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwieWVhckFsbCIsImNoZWNrZWQiLCJhY3Rpdml0eVNlbGVjdCIsInVwZGF0ZUFjdGl2aXR5IiwieWVhclNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwiaGFuZGxlU3VibWl0IiwiQUNUSVZJVElFUyIsImFjdEFsbCIsImFjdGl2aXR5U2VsZWN0b3IiLCJvdGhlclNlbGVjdG9yIiwidXBkYXRlR2VuZGVyIiwidXBkYXRlVHlwZSIsImJsdXIiLCJib2R5IiwibW9kYWwiLCJ0aXRsZSIsInF1ZXN0aW9uIiwiYnV0dG9ucyIsImFscmVhZHlidG4iLCJuZXh0U3RlcCIsInllc0J0biIsImNpdGF0aW9uIiwiYSIsImV4aXRCdXR0b24iLCJmaXJzdEJ1dHRvbiIsInN0ZXBzIiwic2Vjb25kQnV0dG9uIiwidGhpcmRCdXR0b24iLCJmb3VydGhCdXR0b24iLCJtYXJnaW4iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiZDMiLCJzZWxlY3QiLCJjbGFzc2VkIiwiYXBwZW5kIiwiYXR0ciIsImQiLCJjbGllbnRIZWlnaHQiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwicGllIiwicHJvY2Vzc2VkX2RhdGEiLCJlbnRyaWVzIiwidG90YWwiLCJhcnJheVN1bSIsIm1hcCIsInBlcmNlbnRhZ2UiLCJmaW5hbF9kYXRhIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJlYWNoIiwic3R5bGUiLCJDT0xPUlMiLCJvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwibm9kZXMiLCJzbGljZSIsImF0dHJUd2VlbiIsImludGVycG9sYXRlIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwidCIsIlVwZGF0ZSIsInByZWZpeCIsInRoYXQiLCJhY3Rpdml0eUxhYmVsIiwiYWN0aXZpdHlTZWxlY3Rpb25zIiwiY29uY2F0IiwiZGl2IiwiYWN0aXZpdHlPcHRpb24iLCJ5ZWFyc0xhYmVsIiwieWVhclNlbGVjdGlvbnMiLCJ5ZWFyT3B0aW9uIiwiZHJhd0hhbmRzIiwib2xkIiwiaGFuZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXJrTW9kZUJ0biIsInRleHQiLCJwYWdlIiwiY29udGFpbnMiLCJidG4iLCJodG1sIiwidG9nZ2xlIiwib3JkZXIiLCJzdGVwVGV4dCIsImJ1dHRvblRleHQiLCJ0cmlhbmdsZURpcmVjdGlvbiIsInN0ZXAiLCJidXR0b24iLCJ0cmlhbmdsZUEiLCJ0cmlhbmdsZUIiLCJ0cmlhbmdsZSIsIndvcmRzIiwib3B0aW9ucyIsInVwZGF0ZSIsImNyZWF0ZVRleHROb2RlIiwiYWxsIiwibmV3QXJyIiwicHVzaCIsImFycmF5QXZlcmFnZSIsImFycmF5TWVyZ2UiLCJhcnIiLCJzdW0iLCJhcnJheXMiLCJmaW5hbCIsImV2ZXJ5IiwiY29uc29sZSIsImxvZyIsInN1YkFyciIsImFjdGl2aXR5RmlsdGVyIiwiZ2VuZGVyRmlsdGVyIiwiZmluYWxEYXRhIiwieWVhcmx5RmlsdGVyIiwiYWxsWWVhcnMiLCJ2YWx1ZXMiLCJzb3J0ZWQiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJuZXh0Q29tcG9uZW50IiwicHJldkNvbXBvbmVudCIsImNsb3NlTW9kYWwiLCJuZXh0SXRlbSIsIm5leHRDb21wIiwicHJldkNvbXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElB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LGEsRUFBZTtBQUN2RSxtQkFBTyxhQUFLO0FBQ1JyTixrQkFBRXNCLGNBQUY7QUFDQSxvQkFBTWdNLGFBQWFyUCxTQUFTQyxhQUFULE9BQTJCK0QsTUFBM0IsQ0FBbkI7QUFDQXFMLDJCQUFXNUwsU0FBWCxDQUFxQlksTUFBckIsQ0FBNEIySyxTQUE1QjtBQUNBLG9CQUFJQyxJQUFKLEVBQVU7QUFDTix3QkFBTUssV0FBV3RQLFNBQVNDLGFBQVQsT0FBMkJnUCxJQUEzQixDQUFqQjtBQUNBSyw2QkFBUzdMLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCd0wsU0FBdkI7QUFDSDtBQUNELG9CQUFJQyxhQUFKLEVBQW1CO0FBQ2Ysd0JBQU1JLFdBQVd2UCxTQUFTbUUsZ0JBQVQsTUFBNkJnTCxhQUE3QixDQUFqQjtBQUNBSSw2QkFBUzFMLE9BQVQsQ0FBaUI7QUFBQSwrQkFBTWlCLEdBQUdyQixTQUFILENBQWFDLEdBQWIsQ0FBaUIsbUJBQWpCLENBQU47QUFBQSxxQkFBakI7QUFDSDtBQUNELG9CQUFJMEwsYUFBSixFQUFtQjtBQUNmLHdCQUFNSSxXQUFXeFAsU0FBU21FLGdCQUFULE1BQTZCaUwsYUFBN0IsQ0FBakI7QUFDQUksNkJBQVMzTCxPQUFULENBQWlCO0FBQUEsK0JBQU1pQixHQUFHckIsU0FBSCxDQUFhWSxNQUFiLENBQW9CLG1CQUFwQixDQUFOO0FBQUEscUJBQWpCO0FBQ0g7QUFDSixhQWhCRDtBQWlCSDs7Ozs7O2tCQUlVL0QsSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeS5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBlbXBsb3llZEJ5R2VuZGVyID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOC44OCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA4LjkzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDguOTksXG4gICAgICAgICAgICBcIjIwMTZcIjogOC44NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA4Ljk2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDguOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjM2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuNDIsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjQxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNDgsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4wOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjA0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4wNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjA2XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjIyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42MVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjk2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjAyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjY3XG4gICAgICAgIH0sIFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjgzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC43OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC45NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjkzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjkzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODhcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjQ4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNThcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDYuNDksXG4gICAgICAgICAgICBcIjIwMTdcIjogNi4zNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA2LjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjY0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNS44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1Ljc3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMThcIjogNS43NFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuOTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS4wNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuMDEsXG4gICAgICAgICAgICBcIjIwMThcIjogNC45N1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy45NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjkxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuODQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy44NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjAyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuNzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy42OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMy43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjY1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy40MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjM4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMTdcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjM2XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA1XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGV2ZXJ5b25lQnlEYXkgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogOS4yNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjMzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4zMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjMzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxMC4wNyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxMC4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxMC4xMSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxMC4wOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxMC4xNixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEwLjE4XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuNTg1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDkuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS42NTUsXG4gICAgICAgICAgICBcIjIwMTFcIjogOS42NixcbiAgICAgICAgICAgIFwiMjAxMlwiOiA5LjY3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDkuNzA1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuNzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNzYsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS43NjUsXG4gICAgICAgICAgICBcIjIwMThcIjogOS43NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjEyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjM5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4zNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjM1XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMjY1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjU1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjIyNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjIwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIzNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS42OCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuNTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNzEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDIuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMi4wNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjEyLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMTNcIjogMi4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMi4xNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAyLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMi4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjgyNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS44NzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS44MzUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuOTM1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuOTE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuODggXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzIsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjY3XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC45MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43OTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC43NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjc0NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjc3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNzc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc1NSBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQyLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjQ5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC40NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41MTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40ODUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40OCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMTUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC41LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogNC40MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0LjU0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDQuNDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNC42LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMThcIjogNC42MVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAzLjA2LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDIuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMi44NjUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi45MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi44OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuOTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi44NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMi45MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAyLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjg3NSBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC42LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjYzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41OFxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTdcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zNzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4zOTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjI2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yM1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40OVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM2IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0LjYyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNzEsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC42NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA0LjczLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDQuODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDQuNjksXG4gICAgICAgICAgICBcIjIwMTZcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNzJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA2LjQ4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDYuNTMsXG4gICAgICAgICAgICBcIjIwMTBcIjogNi40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDYuMzQsXG4gICAgICAgICAgICBcIjIwMTJcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA2LjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDUuNTUsXG4gICAgICAgICAgICBcIjIwMDlcIjogNS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA1LjUzNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA1LjUzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1LjY0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjU2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuNTksXG4gICAgICAgICAgICBcIjIwMThcIjogNS42NFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNDUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjc1XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEFwcCBmcm9tICcuL2pzL2NvbXBvbmVudHMvQXBwJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnJlbmRlcigpOyIsImltcG9ydCBpbnN0cnVjdGlvbnMgZnJvbSAnLi9pbnN0cnVjdGlvbidcbmltcG9ydCBXYXRjaCBmcm9tICcuL3dhdGNoJ1xuaW1wb3J0IENhdGVnb3J5U2VsZWN0b3IgZnJvbSAnLi9jYXRlZ29yeV9zZWxlY3RvcidcbmltcG9ydCBFbXBsb3llZFNlbGVjdG9ycyBmcm9tICcuL2VtcGxveWVkX3NlbGVjdG9ycydcbmltcG9ydCBFdmVyeW9uZVNlbGVjdG9ycyBmcm9tICcuL2V2ZXJ5b25lX3NlbGVjdG9ycydcbmltcG9ydCBEYXRhRGlzcGxheSBmcm9tICcuL2RhdGFfZGlzcGxheSdcbmltcG9ydCBBcHBBY2FkZW15U2VsZWN0b3IgZnJvbSAnLi9hcHBfYWNhZGVteV9zZWxlY3Rvcic7XG5pbXBvcnQgUmVzaWRlbnRTZWxlY3RvciBmcm9tICcuL3Jlc2lkZW50X3NlbGVjdG9yJztcbmltcG9ydCBHZW5kZXJDb21wIGZyb20gJy4vZ2VuZGVyX2NvbXAnXG5pbXBvcnQgRGF5Q29tcCBmcm9tICcuL2RheV9jb21wJ1xuaW1wb3J0IHsgZW1wbG95ZWRCeUdlbmRlciB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkJ1xuaW1wb3J0IHsgZXZlcnlvbmVCeURheSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL2V2ZXJ5b25lQnlEYXlTaGFwZWQnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7ZHJhd0hhbmRzLCBkYXJrTW9kZUJ0bn0gZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnO1xuXG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheSB1bFwiKTtcbiAgICAgICAgaWYgKHN2ZykgeyBzdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmcpOyB9XG4gICAgICAgIGlmIChkaXNwbGF5KSB7IGRpc3BsYXkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXNwbGF5KTsgfVxuICAgICAgICBXYXRjaChkYXRhKTtcbiAgICAgICAgRGF0YURpc3BsYXkoZGF0YSwgcGFyYW1zKTtcbiAgICAgICAgZHJhd0hhbmRzKCk7XG4gICAgICAgIGRhcmtNb2RlQnRuKHRoaXMuZHJhdywgZGF0YSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICAgICAgLy8gaW5zdHJ1Y3Rpb25zIG1vZGFsXG4gICAgICAgIGluc3RydWN0aW9ucygpO1xuXG4gICAgICAgIC8vIG1ha2luZyBhbGwgdGhlIHNlbGVjdG9yc1xuICAgICAgICBDYXRlZ29yeVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgZW1wbG95ZWRTZWxlY3RvcnMgPSBuZXcgRW1wbG95ZWRTZWxlY3RvcnMoKTtcbiAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGdlbmRlckNvbXAgPSBuZXcgR2VuZGVyQ29tcCgpO1xuICAgICAgICBnZW5kZXJDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgZXZlcnlvbmVTZWxlY3RvcnMgPSBuZXcgRXZlcnlvbmVTZWxlY3RvcnMoKTtcbiAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGRheUNvbXAgPSBuZXcgRGF5Q29tcCgpO1xuICAgICAgICBkYXlDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgYXBwQWNhZGVteVNlbGVjdG9yID0gbmV3IEFwcEFjYWRlbXlTZWxlY3RvcigpO1xuICAgICAgICBhcHBBY2FkZW15U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcbiAgICAgICAgY29uc3QgcmVzaWRlbnRTZWxlY3RvciA9IG5ldyBSZXNpZGVudFNlbGVjdG9yKCk7XG4gICAgICAgIHJlc2lkZW50U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEVtcGxveWVkIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcGxveWVkLWJ0blwiKTtcbiAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG4gICAgICAgIGNvbnN0IGVtcGxveWVkUGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICBkZWxldGUgZW1wbG95ZWRQYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBlbXBsb3llZFBhcmFtcyk7XG5cbiAgICAgICAgZW1wbG95ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBnZW5kZXIgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmRlci1idG5cIik7XG4gICAgICAgIGdlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZ2VuZGVyRGF0YSA9IHV0aWxzLmdlbmRlckNvbXBGaWx0ZXIoZ2VuZGVyQ29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZ2VuZGVyQ29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGdlbmRlckRhdGEsIGdlbmRlckNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEV2ZXJ5b25lIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZXJ5b25lLWJ0blwiKTtcbiAgICAgICAgZXZlcnlvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lRGF0YSA9IHV0aWxzLmV2ZXJ5b25lRGF0YUZpbHRlcihldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQudHlwZSxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZXZlcnlvbmVEYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZGF5IGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktYnRuXCIpO1xuICAgICAgICBkYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSB1dGlscy5kYXlDb21wRmlsdGVyKGRheUNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGRheUNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhkYXlEYXRhLCBkYXlDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBBcHAgQWNhZGVteSBTdHVkZW50XG4gICAgICAgIGNvbnN0IGFwcGFjYWRlbXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1hY2FkZW15LWJ0blwiKTtcbiAgICAgICAgYXBwYWNhZGVteS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGFwcEFjYWRlbXlTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIiwgeWVhcjogXCIyMDE5XCJ9KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGZpcnN0IHllYXIgcmVzaWRlbnQgYWZ0ZXIgbWVkaWNhbCBzY2hvb2xcbiAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2lkZW50LWJ0blwiKTtcbiAgICAgICAgcmVzaWRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhyZXNpZGVudFNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJ9KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIEFwcEFjYWRlbXlTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiYXBwXCIpXG4gICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IENyZWF0ZS5zZWxlY3RCdXR0b24oZmlsdGVyLCBcImFwcC1hY2FkZW15XCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTQuOCxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiVGhlIHR5cGljYWwgQXBwIEFjYWRlbXkgc3R1ZGVudC4gTm90IGZyb20gQVRVUy5cIilcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWNhZGVteVNlbGVjdG9yOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktZmlsdGVyXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFbXBsb3llZCBieSBHZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFdmVyeW9uZSBieSBEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiXVxuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIilcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24udmFsdWUgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gICAgfSlcblxuICAgIGNhdGVnb3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwianMtXCJdJylcbiAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIikpO1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRW1wbG95ZWQgYnkgR2VuZGVyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtcGxveWVkXCIpO1xuICAgICAgICAgICAgICAgIGVtcGxveWVkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdlbmRlclwiKTtcbiAgICAgICAgICAgICAgICBnZW5kZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRXZlcnlvbmUgYnkgRGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWV2ZXJ5b25lXCIpO1xuICAgICAgICAgICAgICAgIGV2ZXJ5b25lLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRheVwiKTtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXBwXCIpO1xuICAgICAgICAgICAgICAgIGFwcC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcmVzaWRlbnRcIik7XG4gICAgICAgICAgICAgICAgcmVzaWRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxufSIsImltcG9ydCB7YWxwaGF9IGZyb20gJy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5XCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1kYXRhXCIpXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGNvbnN0IHBhcmFtRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwYXJhbURpc3BsYXkuY2xhc3NMaXN0LmFkZChcInBhcmFtc1wiKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmFtRGlzcGxheSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5zb3J0KCkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwYXJhbURpc3BsYXkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gYCR7ZWwudG9VcHBlckNhc2UoKX06YFxuICAgICAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhcmFtLmlubmVyVGV4dCA9IHR5cGVvZiBwYXJhbXNbZWxdID09PSBcIm9iamVjdFwiID8gcGFyYW1zW2VsXS5qb2luKFwiLCBcIikgOiBwYXJhbXNbZWxdO1xuICAgICAgICBwLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChwYXJhbSk7XG4gICAgfSlcblxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIChkYXR1bSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC5pbm5lclRleHQgPSBkYXR1bTtcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYWxwaGFbaV0pXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWxpc3QtaXRlbXNcIilcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgY29uc3QgYXJjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YWxwaGFbaV19YCk7XG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgICAgICAgICBhcmMuY2xhc3NMaXN0LmFkZChcImFyYy1kaXNwbGF5XCIpO1xuICAgICAgICB9KVxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZSA9PiB7XG4gICAgICAgICAgICBhcmMuY2xhc3NMaXN0LnJlbW92ZShcImFyYy1kaXNwbGF5XCIpO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxufSIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBEYXlDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiIHx8IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVswXSA9PT0gdW5kZWZpbmVkID8gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSA6IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHksXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIGZpbHRlcjogXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcInllYXJzXCJdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgeWVhckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkX3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIHllYXJBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyQWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZGF5XCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlcik7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImRcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImRheVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IEFDVElWSVRJRVMsXG4gICAgICAgICAgICBnZW5kZXI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkVtcGxveWVkIGJ5IEdlbmRlclwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiIHx8IHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSB1bmRlZmluZWQgPyBBQ1RJVklUSUVTIDogc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgfHwgc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IHVuZGVmaW5lZCA/IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSA6IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IGFjdGl2aXRpZXMsXG4gICAgICAgICAgICB5ZWFyczogeWVhcnMsXG4gICAgICAgICAgICBnZW5kZXI6IHNlbGVjdGlvbnMuZ2VuZGVyLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkVtcGxveWVkIGJ5IEdlbmRlclwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgYWN0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VfYWN0aXZpdHlPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFjdEFsbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdEFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcInllYXJzXCJdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgeWVhckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlX3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIHllYXJBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyQWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImVtcGxveWVkXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJlXCIsIHRoaXMpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJlXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJnZW5kZXJcIiwgW1wiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsIFwiV29tZW5cIiwgXCJNZW5cIl0sIHRoaXMudXBkYXRlR2VuZGVyLmJpbmQodGhpcykpXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImVtcGxveWVkXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkVtcGxveWVkIG1lbiBhbmQgd29tZW4gb24gYW4gYXZlcmFnZSBkYXlcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVkU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBldmVyeW9uZVNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBbGwgZGF5c1wiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlVHlwZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ0eXBlXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiIHx8IHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSB1bmRlZmluZWQgPyBBQ1RJVklUSUVTIDogc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgfHwgc2VsZWN0aW9uc1tcInllYXJzXCJdWzBdID09PSB1bmRlZmluZWQ/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgdHlwZTogc2VsZWN0aW9ucy50eXBlLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkV2ZXJ5b25lIGJ5IGRheVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgYWN0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V2X2FjdGl2aXR5T3B0aW9uQWxsYCk7XG4gICAgICAgICAgICBhY3RBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3RBbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZXZfeWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgeWVhckFsbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJBbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImV2ZXJ5b25lXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZXZcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJ0eXBlXCIsIFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0sIHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJldmVyeW9uZVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBbGwgcGVyc29ucyBvbiBub25ob2xpZGF5IHdlZWtkYXlzIG9yIHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZXJ5b25lU2VsZWN0b3JzOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBHZW5kZXJDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiIHx8IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVswXSA9PT0gdW5kZWZpbmVkID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wieWVhcnNcIl0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dfeWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgeWVhckFsbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJBbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJnZW5kZXJcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKSwgZmlsdGVyLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZ1wiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJnZW5kZXJcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQ29tcGFyaXNvbiBvZiBlbXBsb3llZCBtZW4gYW5kIHdvbWVuXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5kZXJDb21wXG5cblxuLy8gZ29hbDoge1wiV29tZW5cIjogMC41LCBcIk1lblwiOiA0LjN9IiwiaW1wb3J0IFdhbGt0aHJvdWdoIGZyb20gJy4vd2Fsa3Rocm91Z2gnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuICAgIC8vIENyZWF0aW5nIHRoZSBtb2RhbFxuICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICAvLyBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGltZSBVc2FnZVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFRpbWUgVXNhZ2UsIGEgZGF0YSB2aXN1YWxpemF0aW9uIG9mIGhvdyBBbWVyaWNhbnMgdXNlIHRoZWlyIHRpbWUgb24gYSBnaXZlbiBkYXkuIFRoZSBkYXRhIGlzIGdhdGhlcmVkIGJ5IHRoZSBCdXJlYXUgb2YgTGFib3IgU3RhdGlzdGljcyBvbmNlIGEgeWVhci5cIlxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGVzY3JpcHRpb25cIik7XG5cbiAgICAvLyBRdWVzdGlvblxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJXb3VsZCB5b3UgbGlrZSBhIGJyaWVmIHdhbGt0aHJvdWdoP1wiO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtcXVlc3Rpb25cIik7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnNcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgICAvLyBFeGl0IGJ1dHRvblxuICAgXG4gICAgLy8gSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUgYnV0dG9uLiBUYWtlcyB0aGVtIGRpcmVjdGx5IGludG8gdGhlIGFwcC5cbiAgICBjb25zdCBhbHJlYWR5YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFscmVhZHlidG4pO1xuICAgIGFscmVhZHlidG4uaW5uZXJUZXh0ID0gXCJJJ3ZlIGFscmVhZHkgdXNlZCB0aGlzIGJlZm9yZS5cIjtcbiAgICBhbHJlYWR5YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpKTtcblxuICAgIC8vIFdhbGt0aHJvdWdoIGJ1dHRvbi4gSXQgc2hvdWxkIHRha2UgdGhlbSB0aHJvdWdoIHRoZSB3YWxrdGhyb3VnaC4gXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHllc0J0bik7IFxuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllcywgcGxlYXNlLlwiO1xuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIFdhbGt0aHJvdWdoKGJsdXIpO1xuICAgICAgICB1dGlscy5uZXh0U3RlcChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKShlKTtcbiAgICB9KTtcblxufSIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgUmVzaWRlbnRTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwicmVzaWRlbnRcIilcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBDcmVhdGUuc2VsZWN0QnV0dG9uKGZpbHRlciwgXCJyZXNpZGVudFwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjUsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjMsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkEgZmlyc3QteWVhciBtZWRpY2FsIHJlc2lkZW50IGF0IFVDU0YuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICAgICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGNpdGF0aW9uKTtcbiAgICAgICAgY2l0YXRpb24uY2xhc3NMaXN0LmFkZChcImNpdGF0aW9uXCIpO1xuICAgICAgICBjaXRhdGlvbi5pbm5lclRleHQgPSBcIkRhdGEgYXBwcm94aW1hdGVkIGZyb20gXCI7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCIpO1xuICAgICAgICBhLmlubmVyVGV4dCA9IFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCI7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICBjaXRhdGlvbi5hcHBlbmRDaGlsZChhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2lkZW50U2VsZWN0b3I7IiwiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBibHVyID0+IHtcbiAgICAvLyBXYWxrdGhyb3VnaFxuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xuICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgXCJleGl0XCIpO1xuICAgIGV4aXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeGl0IHdhbGt0aHJvdWdoXCI7XG4gICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcImV4aXRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIG51bGwsIFwiKlwiKSlcblxuICAgIGNvbnN0IGZpcnN0QnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwiZmlyc3RcIixcbiAgICAgICAgXCJTdGFydCBieSBob3cgeW91IHdhbnQgdG8gZmlsdGVyIHRoZSBkYXRhLiBTZWxlY3QgYSBnZW5lcmFsIGNhdGVnb3J5LiBOb3RlIHRoYXQgQXBwIEFjYWRlbXkgU3R1ZGVudCBhbmQgRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50IGFyZSBub3QgZnJvbSB0aGUgQW1lcmljYW4gVGltZSBVc2FnZSBTdXJ2ZXkuXCIsXG4gICAgICAgIFwiR290IGl0IVwiLFxuICAgICAgICBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBzZWNvbmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJzZWNvbmRcIixcbiAgICAgICAgJ1NlbGVjdCB5b3VyIHBhcmFtZXRlcnMuIEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBoYXZlIG5vIHBhcmFtZXRlcnMuIFRoZW4gY2xpY2sgXCJTdWJtaXQgU2VsZWN0aW9uLlwiJyxcbiAgICAgICAgXCJHcmVhdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgdGhpcmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJ0aGlyZFwiLFxuICAgICAgICAnQXMgeW91IGhvdmVyIG92ZXIgdGhlIHNsaWNlcyBvZiB0aGUgZ3JhcGgsIHRoZSBjb3JyZXNwb25kaW5nIGRhdGEgd2lsbCBsaWdodCB1cCwgYW5kIHZpY2UgdmVyc2EuIE5vdGUgdGhhdCB0aGVzZSBzbGljZXMgYXJlIHRlY2huaWNhbGx5IHByb3BvcnRpb25zLCBhbmQgbm90IHN0cmljdGx5IG91dCBvZiAyNCBob3Vycy4gSXQgZGVwZW5kcyBvbiB0aGUgcGFyYW1ldGVycy4nLFxuICAgICAgICBcIkF3ZXNvbWUhXCJcbiAgICAgICAgKVxuICAgIGNvbnN0IGZvdXJ0aEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZvdXJ0aFwiLFxuICAgICAgICBcIlRoZXJlJ3MgYSBkYXJrIG1vZGUgaWYgbmVlZGVkLlwiLFxuICAgICAgICBcIkknbSByZWFkeS5cIixcbiAgICAgICAgXCJkb3duXCJcbiAgICApXG4gICAgZmlyc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1maXJzdFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLXNlY29uZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuc2VsZWN0b3JzXCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKSlcbiAgICBzZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIjY1wiLCBcIi5zZWxlY3RvcnNcIikpXG4gICAgdGhpcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZvdXJ0aFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuZGFyay1idG5cIiwgXCIjY1wiKSlcbiAgICBmb3VydGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIuZGFyay1idG5cIikpXG59IiwiaW1wb3J0IHthbHBoYSwgQ09MT1JTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuICAgIC8vIGNvbnN0IG1hcmdpbiA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMTE7XG4gICAgY29uc3QgbWFyZ2luID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wNDtcblxuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjd2F0Y2hcIilcbiAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGFpbmVyXCIsIHRydWUpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyB3aWR0aCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiB3aWR0aCB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyBoZWlnaHQgPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0OyByZXR1cm4gaGVpZ2h0IH0pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAtIG1hcmdpbjtcblxuICAgIC8vIHNldHRpbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHBpZVxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuICAgIC8vIGZvcm1hdHRpbmcgdGhlIGRhdGEgb2JqZWN0IHJlY2VpdmVkIGludG8gYW4gYXJyYXkgb2YgUE9KT1Mgd2l0aCB0aGUga2V5cyBcImtleVwiIGFuZCBcInZhbHVlXCIgYW5kIHZhbHVlcyBjb3JyZXNwb25kaW5nbHkuIFxuICAgIGNvbnN0IHByb2Nlc3NlZF9kYXRhID0gZDMuZW50cmllcyhkYXRhKTtcblxuICAgIC8vIHRvdGFsIG9mIHRoZSB2YWx1ZXMsIHVzZWQgdG8gY2FsY3VsYXRlIHBlcmNlbnRhZ2UuXG4gICAgY29uc3QgdG90YWwgPSB1dGlscy5hcnJheVN1bShwcm9jZXNzZWRfZGF0YS5tYXAoZCA9PiB7cmV0dXJuIGQudmFsdWV9KSlcblxuICAgIC8vIGFzc2lnbmluZyBlYWNoIGRhdGEgZW50cnkgYSBwZXJjZW50YWdlIHZhbHVlXG4gICAgcHJvY2Vzc2VkX2RhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5wZXJjZW50YWdlID0gZC52YWx1ZSAvIHRvdGFsO1xuICAgIH0pXG5cbiAgICAvLyB0dXJuaW5nIHRoZSBkYXRhIHZhbHVlcyBpbnRvIGEgcGllIGdyYXBoLCB3aXRoIHRoZSBkLnZhbHVlcyBiZWluZyBob3cgbXVjaCBvZiB0aGUgdG90YWwgZG9udXQuIFxuICAgIGNvbnN0IGZpbmFsX2RhdGEgPSBwaWUocHJvY2Vzc2VkX2RhdGEpO1xuXG4gICAgLy8gZGVmaW5pbmcgdGhlIG1ldGhvZCB0byBtYWtlIGFyY3MuIHNpbmNlIHdlIGhhdmUgYW4gaW5uZXIgcmFkaXVzIGFuZCBhbiBvdXRlciByYWRpdXMsIHRoaXMgaXMgYSBkb251dC4gXG4gICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcblxuICAgIC8vIGFsbCB0aGUgcGF0aHMgbWFkZSBmcm9tIHRoZSBkYXRhIHZhbHVlcy4gXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgLy8gbWFraW5nIHRoZSBhcmNzIGZvciBlYWNoIHBhdGgsIHNldHRpbmcgbGlzdGVuZXJzLCBhbmQgY3JlYXRpbmcgdGhlIHRyYW5zaXRpb25zLiBcbiAgICBwYXRoc1xuICAgICAgICAuZWFjaCggZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FyY3MnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBgcmdiKCR7MjU1ICogKDEgLSBkLmRhdGEucGVyY2VudGFnZSl9LCA0MiwgNTUpYCB9KVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gYHJnYmEoMTU3LCA0MiwgNTUsICR7ZC5kYXRhLnBlcmNlbnRhZ2V9KWB9KVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIENPTE9SU1tpXSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChhbHBoYVtpXSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthbHBoYVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImZvY3VzZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5kYXRhLnBlcmNlbnRhZ2UgKiAzMDAwfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5U3VtKHBhdGhzLm5vZGVzKCkuc2xpY2UoMCwgaSkubWFwKGVsID0+IGQzLnNlbGVjdChlbCkuZGF0YSgpWzBdLmRhdGEucGVyY2VudGFnZSkpICogMzAwMCArIDIwMDsgLy8gdGhpcyBsaW5lIGlzIGxpdGVyYWxseSBqdXN0IHRvIGNhbGN1bGF0ZSB0aGUgZGVsYXkgc3VjaCB0aGF0IHRoZSB0cmFuc2l0aW9ucyBhcmUgb25lIGFmdGVyIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmVuZEFuZ2xlID0gaSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmMoZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbn1cblxuICAgIC8vIHdpbmRvdy5vbnJlc2l6ZSA9IGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTYyNjUxMjMvcmVzaXplLXN2Zy13aGVuLXdpbmRvdy1pcy1yZXNpemVkLWluLWQzLWpzXG4gICAgLy8gZm9yIHJlc3BvbnNpdmUgU1ZHIGRlc2lnblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NzYyOTgyL2hvdy10by1kaXNwbGF5LXBlcmNlbnRhZ2UtdG8tdGhlLWQzLWpzLXBpZWNoYXJ0XG4gICAgLy8gZm9yIHBlcmNlbnRhZ2VzXG4gICAgLy8gaHR0cHM6Ly9ibC5vY2tzLm9yZy9mYXJhenNodWphL2UyY2I1MjgyOGMwODBiYTg1ZGE1NDU4ZTIzMDRhNjFmXG4gICAgLy8gZm9yIGxhYmVsaW5nIHNsaWNlcyB3aXRoIHBlcmNlbnRhZ2VzXG4gICAgLy8gaHR0cDovL2JsLm9ja3Mub3JnL25hZGluZXNrLzk5MzkzMDk4OTUwNjY1YzQ3MWUwMzVhYzUxN2MyMjI0XG4gICAgLy8gZm9yIHRyYW5zaXRpb25zXG4gICAgLy8gaHR0cHM6Ly9ibC5vY2tzLm9yZy9tYm9zdG9jay8xMTI1OTk3XG4gICAgLy8gZm9yIGNoYWluZWQgdHJhbnNpdGlvbnNcbiIsImV4cG9ydCBjb25zdCBBQ1RJVklUSUVTID0gW1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiXG5dO1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIl1cblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IFtcbiAgICAncmdiKDgwLCA0MiwgNTUpJyxcbiAgICAncmdiKDkwLCA0MiwgNTUpJyxcbiAgICAncmdiKDEwMSwgNDIsIDU1KScsXG4gICAgJ3JnYigxMTgsIDQyLCA1NSknLFxuICAgICdyZ2IoMTMzLCA0MiwgNTUpJyxcbiAgICAncmdiKDE1MCwgNDIsIDU1KScsXG4gICAgJ3JnYigxNjAsIDQyLCA1NSknLFxuICAgICdyZ2IoMTc3LCA0MiwgNTUpJyxcbiAgICAncmdiKDE5MCwgNDIsIDU1KScsXG4gICAgJ3JnYigyMDIsIDQyLCA1NSknLFxuICAgICdyZ2IoMjE2LCA0MiwgNTUpJyxcbiAgICAncmdiKDIyMSwgNDIsIDU1KScsXG5dXG4iLCJpbXBvcnQge0FDVElWSVRJRVN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgVXBkYXRlIGZyb20gJy4vdXBkYXRlJ1xuXG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gKGZpbHRlciwgcHJlZml4LCB0aGF0KSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgIGNvbnN0IGFjdGl2aXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWN0aXZpdHlMYWJlbC5pbm5lclRleHQgPSBcIkFjdGl2aXRpZXNcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5TGFiZWwpXG5cbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdGlvbnMgPSBbXCJBbGwgQWN0aXZpdGllc1wiXS5jb25jYXQoQUNUSVZJVElFUyk7XG4gICAgYWN0aXZpdHlTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFVwZGF0ZS5hY3Rpdml0eShwcmVmaXgsIHRoYXQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHllYXJTZWxlY3RvciA9IChmaWx0ZXIsIHByZWZpeCwgeWVhcnMsIHRoYXQpID0+IHtcbiAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0b3IpO1xuICAgIHllYXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwieWVhci1zZWxlY3RvclwiKVxuICAgIGNvbnN0IHllYXJzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgeWVhcnNMYWJlbC5pbm5lclRleHQgPSBcIlllYXJzXCI7XG4gICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKHllYXJzTGFiZWwpXG5cbiAgICBjb25zdCB5ZWFyU2VsZWN0aW9ucyA9IHllYXJzO1xuICAgIHllYXJTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IHllYXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHllYXJPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh5ZWFyT3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgeWVhclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgVXBkYXRlLnllYXJzKHByZWZpeCwgdGhhdCkpXG59XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b24gPSAoaGFuZGxlU3VibWl0LCBmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1idG5gLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJtaXQpXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdCA9ICh1cGRhdGVBY3Rpdml0eSwgZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInNlbGVjdG9ycy1zZWxlY3RcIilcblxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBBQ1RJVklUSUVTO1xuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgZHJhd0hhbmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJjbG9jay1oYW5kc1wiXScpO1xuICAgIG9sZC5mb3JFYWNoKGVsID0+IHtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKX0pXG5cbiAgICBjb25zdCBoYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFuZHNcIik7XG4gICAgY29uc3QgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHNcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQobWludXRlcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzLWhvdXJcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya01vZGVCdG4gPSAoZHJhdywgZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKTtcbiAgICBpZiAob2xkKSB7XG4gICAgICAgIG9sZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gXCJEYXJrIE1vZGVcIjtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtZGFya1wiKSkge1xuICAgICAgICB0ZXh0ID0gXCJMaWdodCBNb2RlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRhcmstYnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcInRoZW1lLWRhcmtcIik7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcInRoZW1lLWxpZ2h0XCIpO1xuICAgICAgICBkcmF3KGRhdGEsIHBhcmFtcyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gKGJsdXIsIG9yZGVyLCBzdGVwVGV4dCwgYnV0dG9uVGV4dCwgdHJpYW5nbGVEaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChzdGVwKTtcbiAgICBzdGVwLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIGB3YWxrdGhyb3VnaC1zdGVwLSR7b3JkZXJ9YCk7XG4gICAgc3RlcC5pbm5lclRleHQgPSBzdGVwVGV4dDtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RlcC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcC1idXR0b25cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IGJ1dHRvblRleHQ7XG5cbiAgICBpZiAob3JkZXIgPT09IFwidGhpcmRcIikge1xuICAgICAgICBjb25zdCB0cmlhbmdsZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0cmlhbmdsZUEuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXRyaWFuZ2xlXCIsIFwid2Fsa3Rocm91Z2gtdGhpcmQtdHJpYW5nbGUtYVwiKTtcbiAgICAgICAgc3RlcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUEpO1xuXG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQi5jbGFzc0xpc3QuYWRkKFwidXAtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1iXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHJpYW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0cmlhbmdsZS5jbGFzc0xpc3QuYWRkKGAke3RyaWFuZ2xlRGlyZWN0aW9ufS10cmlhbmdsZWAsIGB3YWxrdGhyb3VnaC0ke29yZGVyfS10cmlhbmdsZWApO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uID0gKGZpbHRlciwgd29yZHMpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHdvcmRzO1xufVxuXG5leHBvcnQgY29uc3QgZmlsdGVycyA9IChhdHRhY2gsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgYGpzLSR7Y2F0ZWdvcnl9YCk7XG4gICAgaWYgKGNhdGVnb3J5ID09PSBcImVtcGxveWVkXCIpIHtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyO1xufVxuXG5leHBvcnQgY29uc3Qgb3RoZXJTZWxlY3RvciA9IChmaWx0ZXIsIGNhdGVnb3J5LCBvcHRpb25zLCB1cGRhdGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcbiAgICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwic2VsZWN0b3JzLXNlbGVjdFwiKVxuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBTZWxlY3QgJHtjYXRlZ29yeX1gKSlcbiAgICBvcHRpb25zLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcbiAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZSkgXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RCdXR0b24gPSAoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYCR7Y2F0ZWdvcnl9LWJ0bmAsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImV4cG9ydCBjb25zdCBhY3Rpdml0eSA9IChwcmVmaXgsIHRoYXQpID0+IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0uZmlsdGVyKGFjdGl2aXR5ID0+IHsgcmV0dXJuIGFjdGl2aXR5ICE9PSBcIkFsbCBBY3Rpdml0aWVzXCIgfSlcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGF0LnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHllYXJzID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3ByZWZpeH1feWVhck9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmVmaXh9X3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdID0gdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICB9XG59IiwiY2xhc3MgVXRpbHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFycmF5U3VtID0gdGhpcy5hcnJheVN1bS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5QXZlcmFnZSA9IHRoaXMuYXJyYXlBdmVyYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlNZXJnZSA9IHRoaXMuYXJyYXlNZXJnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVtcGxveWVkRGF0YUZpbHRlciA9IHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXZlcnlvbmVEYXRhRmlsdGVyID0gdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIGFycmF5U3VtIChhcnIpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gYXJyW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgYXJyYXlBdmVyYWdlIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTdW0oYXJyKSAvIGFyci5sZW5ndGg7XG4gICAgfVxuXG4gICAgYXJyYXlNZXJnZSAoLi4uYXJyYXlzKSB7XG4gICAgICAgIGxldCBmaW5hbCA9IFtdO1xuICAgICAgICBpZiAoYXJyYXlzLmV2ZXJ5KCBhcnIgPT4geyByZXR1cm4gYXJyLmxlbmd0aCA9PT0gYXJyYXlzWzBdLmxlbmd0aDsgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheXMgYXJlIG5vdCB0aGUgc2FtZSBsZW5ndGhcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViQXJyID0gW107XG4gICAgICAgICAgICBhcnJheXMuZm9yRWFjaCggYXJyID0+IHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZpbmFsLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWw7XG4gICAgfVxuXG4gICAgZW1wbG95ZWREYXRhRmlsdGVyIChhY3Rpdml0aWVzLCBnZW5kZXIsIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gW107XG4gICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaCggYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGdlbmRlckZpbHRlciA9IGFjdGl2aXR5RmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbZGF0dW0uYWN0aXZpdHldOiBkYXR1bVtnZW5kZXJdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gZ2VuZGVyRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goIHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7W09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcil9O1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc29ydGVkID0gZmluYWxEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoT2JqZWN0LnZhbHVlcyhhKVswXSA+IE9iamVjdC52YWx1ZXMoYilbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoIChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmVyeW9uZURhdGFGaWx0ZXIoYWN0aXZpdGllcywgdHlwZSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgIGFjdGl2aXR5RmlsdGVyLnB1c2goZGF0YVthY3Rpdml0eV0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0eXBlRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW3R5cGVdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gdHlwZUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dOiB0aGlzLmFycmF5QXZlcmFnZSh5ZWFybHlGaWx0ZXIpIH07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBzb3J0ZWQuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZW5kZXJDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW5GaWx0ZXIgPSB7IFwiTWVuXCI6IGFjdGl2aXR5RmlsdGVyW1wiTWVuXCJdIH1cbiAgICAgICAgY29uc3Qgd29tZW5GaWx0ZXIgPSB7IFwiV29tZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJXb21lblwiXX1cblxuXG4gICAgICAgIGNvbnN0IG1lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxNZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMobWVuRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIG1lblllYXJseUZpbHRlci5wdXNoKGFsbE1lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVuRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKG1lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgY29uc3Qgd29tZW5ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsV29tZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMod29tZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgd29tZW5ZZWFybHlGaWx0ZXIucHVzaChhbGxXb21lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgd29tZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uod29tZW5ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmICh3b21lbkRhdGEgPiBtZW5EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiTWVuXCI6IG1lbkRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YSxcbiAgICAgICAgICAgICAgICBcIldvbWVuXCI6IHdvbWVuRGF0YSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkYXlDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG5cbiAgICAgICAgY29uc3Qgbm9uRmlsdGVyID0geyBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJOb25ob2xpZGF5IHdlZWtkYXlzXCJdIH1cbiAgICAgICAgY29uc3QgaG9saUZpbHRlciA9IHsgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGFjdGl2aXR5RmlsdGVyW1wiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiXSB9XG5cbiAgICAgICAgY29uc3Qgbm9uWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE5vblllYXJzID0gT2JqZWN0LnZhbHVlcyhub25GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbm9uWWVhcmx5RmlsdGVyLnB1c2goYWxsTm9uWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBub25EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uobm9uWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCBob2xpWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbEhvbGlZZWFycyA9IE9iamVjdC52YWx1ZXMoaG9saUZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBob2xpWWVhcmx5RmlsdGVyLnB1c2goYWxsSG9saVllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgaG9saURhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShob2xpWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBpZiAoaG9saURhdGEgPiBub25EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YSxcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YSxcbiAgICAgICAgICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogaG9saURhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5leHRTdGVwKG9wdGlvbiwgY2xhc3NOYW1lLCBuZXh0LCBuZXh0Q2xhc3MsIG5leHRDb21wb25lbnQsIHByZXZDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke29wdGlvbn1gKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25leHR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uY2xhc3NMaXN0LmFkZChuZXh0Q2xhc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtuZXh0Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIG5leHRDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q29tcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7cHJldkNvbXBvbmVudH1gKTtcbiAgICAgICAgICAgICAgICBwcmV2Q29tcC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wb25lbnQtZGlzcGxheVwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiXSwic291cmNlUm9vdCI6IiJ9