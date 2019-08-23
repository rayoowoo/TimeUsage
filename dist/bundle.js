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
    var margin = window.innerHeight * 0.11;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsImlubmVyVGV4dCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25zIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwieWVhckFsbCIsImNoZWNrZWQiLCJhY3Rpdml0eVNlbGVjdCIsInVwZGF0ZUFjdGl2aXR5IiwieWVhclNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwiaGFuZGxlU3VibWl0IiwiQUNUSVZJVElFUyIsImFjdEFsbCIsImFjdGl2aXR5U2VsZWN0b3IiLCJvdGhlclNlbGVjdG9yIiwidXBkYXRlR2VuZGVyIiwidXBkYXRlVHlwZSIsImJsdXIiLCJib2R5IiwibW9kYWwiLCJ0aXRsZSIsInF1ZXN0aW9uIiwiYnV0dG9ucyIsImFscmVhZHlidG4iLCJuZXh0U3RlcCIsInllc0J0biIsImNpdGF0aW9uIiwiYSIsImV4aXRCdXR0b24iLCJmaXJzdEJ1dHRvbiIsInN0ZXBzIiwic2Vjb25kQnV0dG9uIiwidGhpcmRCdXR0b24iLCJmb3VydGhCdXR0b24iLCJtYXJnaW4iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiZDMiLCJzZWxlY3QiLCJjbGFzc2VkIiwiYXBwZW5kIiwiYXR0ciIsImQiLCJjbGllbnRIZWlnaHQiLCJyYWRpdXMiLCJNYXRoIiwibWluIiwicGllIiwicHJvY2Vzc2VkX2RhdGEiLCJlbnRyaWVzIiwidG90YWwiLCJhcnJheVN1bSIsIm1hcCIsInBlcmNlbnRhZ2UiLCJmaW5hbF9kYXRhIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJlYWNoIiwic3R5bGUiLCJDT0xPUlMiLCJvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwibm9kZXMiLCJzbGljZSIsImF0dHJUd2VlbiIsImludGVycG9sYXRlIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwidCIsIlVwZGF0ZSIsInByZWZpeCIsInRoYXQiLCJhY3Rpdml0eUxhYmVsIiwiYWN0aXZpdHlTZWxlY3Rpb25zIiwiY29uY2F0IiwiZGl2IiwiYWN0aXZpdHlPcHRpb24iLCJ5ZWFyc0xhYmVsIiwieWVhclNlbGVjdGlvbnMiLCJ5ZWFyT3B0aW9uIiwiZHJhd0hhbmRzIiwib2xkIiwiaGFuZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXJrTW9kZUJ0biIsInRleHQiLCJwYWdlIiwiY29udGFpbnMiLCJidG4iLCJodG1sIiwidG9nZ2xlIiwib3JkZXIiLCJzdGVwVGV4dCIsImJ1dHRvblRleHQiLCJ0cmlhbmdsZURpcmVjdGlvbiIsInN0ZXAiLCJidXR0b24iLCJ0cmlhbmdsZUEiLCJ0cmlhbmdsZUIiLCJ0cmlhbmdsZSIsIndvcmRzIiwib3B0aW9ucyIsInVwZGF0ZSIsImNyZWF0ZVRleHROb2RlIiwiYWxsIiwibmV3QXJyIiwicHVzaCIsImFycmF5QXZlcmFnZSIsImFycmF5TWVyZ2UiLCJhcnIiLCJzdW0iLCJhcnJheXMiLCJmaW5hbCIsImV2ZXJ5IiwiY29uc29sZSIsImxvZyIsInN1YkFyciIsImFjdGl2aXR5RmlsdGVyIiwiZ2VuZGVyRmlsdGVyIiwiZmluYWxEYXRhIiwieWVhcmx5RmlsdGVyIiwiYWxsWWVhcnMiLCJ2YWx1ZXMiLCJzb3J0ZWQiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJuZXh0Q29tcG9uZW50IiwicHJldkNvbXBvbmVudCIsImNsb3NlTW9kYWwiLCJuZXh0SXRlbSIsIm5leHRDb21wIiwicHJldkNvbXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElB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QWU7QUFDdkUsbUJBQU8sYUFBSztBQUNSck4sa0JBQUVzQixjQUFGO0FBQ0Esb0JBQU1nTSxhQUFhclAsU0FBU0MsYUFBVCxPQUEyQitELE1BQTNCLENBQW5CO0FBQ0FxTCwyQkFBVzVMLFNBQVgsQ0FBcUJZLE1BQXJCLENBQTRCMkssU0FBNUI7QUFDQSxvQkFBSUMsSUFBSixFQUFVO0FBQ04sd0JBQU1LLFdBQVd0UCxTQUFTQyxhQUFULE9BQTJCZ1AsSUFBM0IsQ0FBakI7QUFDQUssNkJBQVM3TCxTQUFULENBQW1CQyxHQUFuQixDQUF1QndMLFNBQXZCO0FBQ0g7QUFDRCxvQkFBSUMsYUFBSixFQUFtQjtBQUNmLHdCQUFNSSxXQUFXdlAsU0FBU21FLGdCQUFULE1BQTZCZ0wsYUFBN0IsQ0FBakI7QUFDQUksNkJBQVMxTCxPQUFULENBQWlCO0FBQUEsK0JBQU1pQixHQUFHckIsU0FBSCxDQUFhQyxHQUFiLENBQWlCLG1CQUFqQixDQUFOO0FBQUEscUJBQWpCO0FBQ0g7QUFDRCxvQkFBSTBMLGFBQUosRUFBbUI7QUFDZix3QkFBTUksV0FBV3hQLFNBQVNtRSxnQkFBVCxNQUE2QmlMLGFBQTdCLENBQWpCO0FBQ0FJLDZCQUFTM0wsT0FBVCxDQUFpQjtBQUFBLCtCQUFNaUIsR0FBR3JCLFNBQUgsQ0FBYVksTUFBYixDQUFvQixtQkFBcEIsQ0FBTjtBQUFBLHFCQUFqQjtBQUNIO0FBQ0osYUFoQkQ7QUFpQkg7Ozs7OztrQkFJVS9ELEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgY29uc3QgZW1wbG95ZWRCeUdlbmRlciA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDguODgsXG4gICAgICAgICAgICBcIjIwMTRcIjogOC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA4Ljk5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDguODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogOC45NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA4LjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS40MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjQ4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4wNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjA2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4wNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS45NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjksXG4gICAgICAgICAgICBcIjIwMThcIjogMi4wMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjY3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LCBcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC44MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuOTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS40OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjU4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQ5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuMzUsXG4gICAgICAgICAgICBcIjIwMThcIjogNi40N1xuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNS42NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS43NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuMDYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjAxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuOTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuOTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy45MSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjg0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC4wMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjczLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNjgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy42NVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNDMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy4zOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMThcIjogMy4zNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBldmVyeW9uZUJ5RGF5ID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuMjQsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMTAuMDcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMTAuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMTAuMDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMTAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMTAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMTAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMTAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMTAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjU4NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuNjU1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuNjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS42NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjcwNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5Ljc0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5Ljc5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5Ljc2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNzY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjM2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4zOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4zNVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjI2NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI1NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yMDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS43LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuNjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjU5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjcxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuMDYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi4xMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMi4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS44MjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuODc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuODM1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjkzNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjkxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjg4IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuOTEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC44NFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC43NDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjc3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC43NTUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjUzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTE1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDg1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjUxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNDEsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC41NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMy4wNixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuODY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuOTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuODksXG4gICAgICAgICAgICBcIjIwMTNcIjogMi44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuODc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuOTMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMi44NzUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42MyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzc1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNiBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC42MixcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjcxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNjcsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC43MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0Ljg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjY5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjcyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNi40OCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA2LjUzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDYuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA2LjM0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogNi41NlxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA1LjU1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDUuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS42NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS41NixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjU5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNjRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTQgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjk1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI3NVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBcHAgZnJvbSAnLi9qcy9jb21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXIoKTsiLCJpbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb24nXG5pbXBvcnQgV2F0Y2ggZnJvbSAnLi93YXRjaCdcbmltcG9ydCBDYXRlZ29yeVNlbGVjdG9yIGZyb20gJy4vY2F0ZWdvcnlfc2VsZWN0b3InXG5pbXBvcnQgRW1wbG95ZWRTZWxlY3RvcnMgZnJvbSAnLi9lbXBsb3llZF9zZWxlY3RvcnMnXG5pbXBvcnQgRXZlcnlvbmVTZWxlY3RvcnMgZnJvbSAnLi9ldmVyeW9uZV9zZWxlY3RvcnMnXG5pbXBvcnQgRGF0YURpc3BsYXkgZnJvbSAnLi9kYXRhX2Rpc3BsYXknXG5pbXBvcnQgQXBwQWNhZGVteVNlbGVjdG9yIGZyb20gJy4vYXBwX2FjYWRlbXlfc2VsZWN0b3InO1xuaW1wb3J0IFJlc2lkZW50U2VsZWN0b3IgZnJvbSAnLi9yZXNpZGVudF9zZWxlY3Rvcic7XG5pbXBvcnQgR2VuZGVyQ29tcCBmcm9tICcuL2dlbmRlcl9jb21wJ1xuaW1wb3J0IERheUNvbXAgZnJvbSAnLi9kYXlfY29tcCdcbmltcG9ydCB7IGVtcGxveWVkQnlHZW5kZXIgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9lbXBsb3llZEJ5R2VuZGVyRGF0YVNoYXBlZCdcbmltcG9ydCB7IGV2ZXJ5b25lQnlEYXkgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge2RyYXdIYW5kcywgZGFya01vZGVCdG59IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJztcblxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXkgdWxcIik7XG4gICAgICAgIGlmIChzdmcpIHsgc3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTsgfVxuICAgICAgICBpZiAoZGlzcGxheSkgeyBkaXNwbGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlzcGxheSk7IH1cbiAgICAgICAgV2F0Y2goZGF0YSk7XG4gICAgICAgIERhdGFEaXNwbGF5KGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGRyYXdIYW5kcygpO1xuICAgICAgICBkYXJrTW9kZUJ0bih0aGlzLmRyYXcsIGRhdGEsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgICAgIC8vIGluc3RydWN0aW9ucyBtb2RhbFxuICAgICAgICBpbnN0cnVjdGlvbnMoKTtcblxuICAgICAgICAvLyBtYWtpbmcgYWxsIHRoZSBzZWxlY3RvcnNcbiAgICAgICAgQ2F0ZWdvcnlTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVkU2VsZWN0b3JzID0gbmV3IEVtcGxveWVkU2VsZWN0b3JzKCk7XG4gICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBnZW5kZXJDb21wID0gbmV3IEdlbmRlckNvbXAoKTtcbiAgICAgICAgZ2VuZGVyQ29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lU2VsZWN0b3JzID0gbmV3IEV2ZXJ5b25lU2VsZWN0b3JzKCk7XG4gICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBkYXlDb21wID0gbmV3IERheUNvbXAoKTtcbiAgICAgICAgZGF5Q29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGFwcEFjYWRlbXlTZWxlY3RvciA9IG5ldyBBcHBBY2FkZW15U2VsZWN0b3IoKTtcbiAgICAgICAgYXBwQWNhZGVteVNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG4gICAgICAgIGNvbnN0IHJlc2lkZW50U2VsZWN0b3IgPSBuZXcgUmVzaWRlbnRTZWxlY3RvcigpO1xuICAgICAgICByZXNpZGVudFNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFbXBsb3llZCBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXBsb3llZC1idG5cIik7XG4gICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICBjb25zdCBlbXBsb3llZFBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgZGVsZXRlIGVtcGxveWVkUGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgZW1wbG95ZWRQYXJhbXMpO1xuXG4gICAgICAgIGVtcGxveWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZ2VuZGVyIGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5kZXItYnRuXCIpO1xuICAgICAgICBnZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlckRhdGEgPSB1dGlscy5nZW5kZXJDb21wRmlsdGVyKGdlbmRlckNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGdlbmRlckNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhnZW5kZXJEYXRhLCBnZW5kZXJDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFdmVyeW9uZSBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVyeW9uZS1idG5cIik7XG4gICAgICAgIGV2ZXJ5b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBldmVyeW9uZURhdGEgPSB1dGlscy5ldmVyeW9uZURhdGFGaWx0ZXIoZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnR5cGUsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGV2ZXJ5b25lRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGRheSBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWJ0blwiKTtcbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gdXRpbHMuZGF5Q29tcEZpbHRlcihkYXlDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBkYXlDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZGF5RGF0YSwgZGF5Q29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgQXBwIEFjYWRlbXkgU3R1ZGVudFxuICAgICAgICBjb25zdCBhcHBhY2FkZW15ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtYWNhZGVteS1idG5cIik7XG4gICAgICAgIGFwcGFjYWRlbXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhhcHBBY2FkZW15U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsIHllYXI6IFwiMjAxOVwifSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBmaXJzdCB5ZWFyIHJlc2lkZW50IGFmdGVyIG1lZGljYWwgc2Nob29sXG4gICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpZGVudC1idG5cIik7XG4gICAgICAgIHJlc2lkZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcocmVzaWRlbnRTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwifSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5jbGFzcyBBcHBBY2FkZW15U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImFwcFwiKVxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBDcmVhdGUuc2VsZWN0QnV0dG9uKGZpbHRlciwgXCJhcHAtYWNhZGVteVwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDE0LjgsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIlRoZSB0eXBpY2FsIEFwcCBBY2FkZW15IHN0dWRlbnQuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjYWRlbXlTZWxlY3RvcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNhdGVnb3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWZpbHRlclwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wiRW1wbG95ZWQgYnkgR2VuZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXZlcnlvbmUgYnkgRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIl1cblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggb3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpXG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlPcHRpb24pO1xuICAgIH0pXG5cbiAgICBjYXRlZ29yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImpzLVwiXScpXG4gICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpKTtcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcIkVtcGxveWVkIGJ5IEdlbmRlclwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1lbXBsb3llZFwiKTtcbiAgICAgICAgICAgICAgICBlbXBsb3llZC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1nZW5kZXJcIik7XG4gICAgICAgICAgICAgICAgZ2VuZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkV2ZXJ5b25lIGJ5IERheVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1ldmVyeW9uZVwiKTtcbiAgICAgICAgICAgICAgICBldmVyeW9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFwcFwiKTtcbiAgICAgICAgICAgICAgICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXJlc2lkZW50XCIpO1xuICAgICAgICAgICAgICAgIHJlc2lkZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJpbXBvcnQge2FscGhhfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCAoZGF0dW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHAuaW5uZXJUZXh0ID0gZGF0dW07XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGFscGhhW2ldKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1saXN0LWl0ZW1zXCIpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gZGF0YVtkYXR1bV0udG9GaXhlZCgyKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNvbnN0IGFyYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FscGhhW2ldfWApO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5hZGQoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5yZW1vdmUoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiB8fCBzZWxlY3Rpb25zW1wieWVhcnNcIl1bMF0gPT09IHVuZGVmaW5lZCA/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZF95ZWFyT3B0aW9uQWxsYCk7XG4gICAgICAgICAgICB5ZWFyQWxsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgeWVhckFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbXAoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImRheVwiKVxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpLCBmaWx0ZXIpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJkXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJkYXlcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQ29tcGFyaXNvbiBvZiBub25ob2xpZGF5IHdlZWtkYXlzIGFnYWluc3Qgd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF5Q29tcCIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIEVtcGxveWVkU2VsZWN0b3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBcImFjdGl2aXRpZXNcIjogW1wiQWxsIEFjdGl2aXRpZXNcIl0sXG4gICAgICAgICAgICBcInllYXJzXCI6IFtcIkFsbCB5ZWFyc1wiXSxcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBBQ1RJVklUSUVTLFxuICAgICAgICAgICAgZ2VuZGVyOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2VuZGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltcImdlbmRlclwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIiB8fCBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gdW5kZWZpbmVkID8gQUNUSVZJVElFUyA6IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiIHx8IHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSB1bmRlZmluZWQgPyBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgZ2VuZGVyOiBzZWxlY3Rpb25zLmdlbmRlcixcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlX2FjdGl2aXR5T3B0aW9uQWxsYCk7XG4gICAgICAgICAgICBhY3RBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3RBbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZV95ZWFyT3B0aW9uQWxsYCk7XG4gICAgICAgICAgICB5ZWFyQWxsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgeWVhckFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJlbXBsb3llZFwiKVxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUub3RoZXJTZWxlY3RvcihmaWx0ZXIsIFwiZ2VuZGVyXCIsIFtcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLCBcIldvbWVuXCIsIFwiTWVuXCJdLCB0aGlzLnVwZGF0ZUdlbmRlci5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJlbXBsb3llZFwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJFbXBsb3llZCBtZW4gYW5kIHdvbWVuIG9uIGFuIGF2ZXJhZ2UgZGF5XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIiB8fCBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gdW5kZWZpbmVkID8gQUNUSVZJVElFUyA6IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiIHx8IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVswXSA9PT0gdW5kZWZpbmVkPyBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFdmVyeW9uZSBieSBkYXlcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNldl9hY3Rpdml0eU9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWN0QWxsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWN0QWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wieWVhcnNcIl0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2V2X3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIHllYXJBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyQWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3JzKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJldmVyeW9uZVwiKVxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3RvcihmaWx0ZXIsIFwiZXZcIiwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImV2XCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUub3RoZXJTZWxlY3RvcihmaWx0ZXIsIFwidHlwZVwiLCBbXCJBbGwgZGF5c1wiLCBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIiwgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdLCB0aGlzLnVwZGF0ZVR5cGUuYmluZCh0aGlzKSlcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCBmaWx0ZXIsIFwiZXZlcnlvbmVcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQWxsIHBlcnNvbnMgb24gbm9uaG9saWRheSB3ZWVrZGF5cyBvciB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVyeW9uZVNlbGVjdG9yczsiLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgR2VuZGVyQ29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiB8fCBzZWxlY3Rpb25zW1wieWVhcnNcIl1bMF0gPT09IHVuZGVmaW5lZCA/IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSA6IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHksXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIGZpbHRlcjogXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcInllYXJzXCJdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgeWVhckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNnX3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIHllYXJBbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyQWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZ2VuZGVyXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlciwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImdcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImltcG9ydCBXYWxrdGhyb3VnaCBmcm9tICcuL3dhbGt0aHJvdWdoJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcbiAgICAvLyBDcmVhdGluZyB0aGUgbW9kYWxcbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRpbWUgVXNhZ2VcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBUaW1lIFVzYWdlLCBhIGRhdGEgdmlzdWFsaXphdGlvbiBvZiBob3cgQW1lcmljYW5zIHVzZSB0aGVpciB0aW1lIG9uIGEgZ2l2ZW4gZGF5LiBUaGUgZGF0YSBpcyBnYXRoZXJlZCBieSB0aGUgQnVyZWF1IG9mIExhYm9yIFN0YXRpc3RpY3Mgb25jZSBhIHllYXIuXCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgLy8gUXVlc3Rpb25cbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IFwiV291bGQgeW91IGxpa2UgYSBicmllZiB3YWxrdGhyb3VnaD9cIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgcXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLXF1ZXN0aW9uXCIpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgLy8gRXhpdCBidXR0b25cbiAgIFxuICAgIC8vIEkndmUgYWxyZWFkeSB1c2VkIHRoaXMgYmVmb3JlIGJ1dHRvbi4gVGFrZXMgdGhlbSBkaXJlY3RseSBpbnRvIHRoZSBhcHAuXG4gICAgY29uc3QgYWxyZWFkeWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhbHJlYWR5YnRuKTtcbiAgICBhbHJlYWR5YnRuLmlubmVyVGV4dCA9IFwiSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUuXCI7XG4gICAgYWxyZWFkeWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaCBidXR0b24uIEl0IHNob3VsZCB0YWtlIHRoZW0gdGhyb3VnaCB0aGUgd2Fsa3Rocm91Z2guIFxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdG4pOyBcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXMsIHBsZWFzZS5cIjtcbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBXYWxrdGhyb3VnaChibHVyKTtcbiAgICAgICAgdXRpbHMubmV4dFN0ZXAoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikoZSk7XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcInJlc2lkZW50XCIpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gQ3JlYXRlLnNlbGVjdEJ1dHRvbihmaWx0ZXIsIFwicmVzaWRlbnRcIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC41LFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4zLFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBIGZpcnN0LXllYXIgbWVkaWNhbCByZXNpZGVudCBhdCBVQ1NGLiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgICAgIGNvbnN0IGNpdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChjaXRhdGlvbik7XG4gICAgICAgIGNpdGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXRhdGlvblwiKTtcbiAgICAgICAgY2l0YXRpb24uaW5uZXJUZXh0ID0gXCJEYXRhIGFwcHJveGltYXRlZCBmcm9tIFwiO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiKTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgY2l0YXRpb24uYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpZGVudFNlbGVjdG9yOyIsImltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgYmx1ciA9PiB7XG4gICAgLy8gV2Fsa3Rocm91Z2hcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwiZXhpdFwiKTtcbiAgICBleGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRXhpdCB3YWxrdGhyb3VnaFwiO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJleGl0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBudWxsLCBcIipcIikpXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZpcnN0XCIsXG4gICAgICAgIFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiLFxuICAgICAgICBcIkdvdCBpdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3Qgc2Vjb25kQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwic2Vjb25kXCIsXG4gICAgICAgICdTZWxlY3QgeW91ciBwYXJhbWV0ZXJzLiBBcHAgQWNhZGVteSBTdHVkZW50IGFuZCBGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnQgaGF2ZSBubyBwYXJhbWV0ZXJzLiBUaGVuIGNsaWNrIFwiU3VibWl0IFNlbGVjdGlvbi5cIicsXG4gICAgICAgIFwiR3JlYXQhXCIsXG4gICAgICAgIFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IHRoaXJkQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwidGhpcmRcIixcbiAgICAgICAgJ0FzIHlvdSBob3ZlciBvdmVyIHRoZSBzbGljZXMgb2YgdGhlIGdyYXBoLCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHdpbGwgbGlnaHQgdXAsIGFuZCB2aWNlIHZlcnNhLiBOb3RlIHRoYXQgdGhlc2Ugc2xpY2VzIGFyZSB0ZWNobmljYWxseSBwcm9wb3J0aW9ucywgYW5kIG5vdCBzdHJpY3RseSBvdXQgb2YgMjQgaG91cnMuIEl0IGRlcGVuZHMgb24gdGhlIHBhcmFtZXRlcnMuJyxcbiAgICAgICAgXCJBd2Vzb21lIVwiXG4gICAgICAgIClcbiAgICBjb25zdCBmb3VydGhCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJmb3VydGhcIixcbiAgICAgICAgXCJUaGVyZSdzIGEgZGFyayBtb2RlIGlmIG5lZWRlZC5cIixcbiAgICAgICAgXCJJJ20gcmVhZHkuXCIsXG4gICAgICAgIFwiZG93blwiXG4gICAgKVxuICAgIGZpcnN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLnNlbGVjdG9yc1wiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikpXG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiI2NcIiwgXCIuc2VsZWN0b3JzXCIpKVxuICAgIHRoaXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1mb3VydGhcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmRhcmstYnRuXCIsIFwiI2NcIikpXG4gICAgZm91cnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIsIG51bGwsIG51bGwsIG51bGwsIFwiLmRhcmstYnRuXCIpKVxufSIsImltcG9ydCB7YWxwaGEsIENPTE9SU30gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjExO1xuXG4gICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiN3YXRjaFwiKVxuICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250YWluZXJcIiwgdHJ1ZSlcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7IHdpZHRoID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgLy8gc2V0dGluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgcGllXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgLy8gZm9ybWF0dGluZyB0aGUgZGF0YSBvYmplY3QgcmVjZWl2ZWQgaW50byBhbiBhcnJheSBvZiBQT0pPUyB3aXRoIHRoZSBrZXlzIFwia2V5XCIgYW5kIFwidmFsdWVcIiBhbmQgdmFsdWVzIGNvcnJlc3BvbmRpbmdseS4gXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgLy8gdG90YWwgb2YgdGhlIHZhbHVlcywgdXNlZCB0byBjYWxjdWxhdGUgcGVyY2VudGFnZS5cbiAgICBjb25zdCB0b3RhbCA9IHV0aWxzLmFycmF5U3VtKHByb2Nlc3NlZF9kYXRhLm1hcChkID0+IHtyZXR1cm4gZC52YWx1ZX0pKVxuXG4gICAgLy8gYXNzaWduaW5nIGVhY2ggZGF0YSBlbnRyeSBhIHBlcmNlbnRhZ2UgdmFsdWVcbiAgICBwcm9jZXNzZWRfZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLnBlcmNlbnRhZ2UgPSBkLnZhbHVlIC8gdG90YWw7XG4gICAgfSlcblxuICAgIC8vIHR1cm5pbmcgdGhlIGRhdGEgdmFsdWVzIGludG8gYSBwaWUgZ3JhcGgsIHdpdGggdGhlIGQudmFsdWVzIGJlaW5nIGhvdyBtdWNoIG9mIHRoZSB0b3RhbCBkb251dC4gXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICAvLyBkZWZpbmluZyB0aGUgbWV0aG9kIHRvIG1ha2UgYXJjcy4gc2luY2Ugd2UgaGF2ZSBhbiBpbm5lciByYWRpdXMgYW5kIGFuIG91dGVyIHJhZGl1cywgdGhpcyBpcyBhIGRvbnV0LiBcbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgLy8gYWxsIHRoZSBwYXRocyBtYWRlIGZyb20gdGhlIGRhdGEgdmFsdWVzLiBcbiAgICBjb25zdCBwYXRocyA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgLmRhdGEoZmluYWxfZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG5cbiAgICAvLyBtYWtpbmcgdGhlIGFyY3MgZm9yIGVhY2ggcGF0aCwgc2V0dGluZyBsaXN0ZW5lcnMsIGFuZCBjcmVhdGluZyB0aGUgdHJhbnNpdGlvbnMuIFxuICAgIHBhdGhzXG4gICAgICAgIC5lYWNoKCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGByZ2IoJHsyNTUgKiAoMSAtIGQuZGF0YS5wZXJjZW50YWdlKX0sIDQyLCA1NSlgIH0pXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24oZCkge3JldHVybiBgcmdiYSgxNTcsIDQyLCA1NSwgJHtkLmRhdGEucGVyY2VudGFnZX0pYH0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgQ09MT1JTW2ldKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKGFscGhhW2ldLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZnVuY3Rpb24oZCkge3JldHVybiBkLmRhdGEucGVyY2VudGFnZSAqIDMwMDB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSggZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwICsgMjAwOyAvLyB0aGlzIGxpbmUgaXMgbGl0ZXJhbGx5IGp1c3QgdG8gY2FsY3VsYXRlIHRoZSBkZWxheSBzdWNoIHRoYXQgdGhlIHRyYW5zaXRpb25zIGFyZSBvbmUgYWZ0ZXIgdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI2NTEyMy9yZXNpemUtc3ZnLXdoZW4td2luZG93LWlzLXJlc2l6ZWQtaW4tZDMtanNcbiAgICAvLyBmb3IgcmVzcG9uc2l2ZSBTVkcgZGVzaWduXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NjI5ODIvaG93LXRvLWRpc3BsYXktcGVyY2VudGFnZS10by10aGUtZDMtanMtcGllY2hhcnRcbiAgICAvLyBmb3IgcGVyY2VudGFnZXNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL2ZhcmF6c2h1amEvZTJjYjUyODI4YzA4MGJhODVkYTU0NThlMjMwNGE2MWZcbiAgICAvLyBmb3IgbGFiZWxpbmcgc2xpY2VzIHdpdGggcGVyY2VudGFnZXNcbiAgICAvLyBodHRwOi8vYmwub2Nrcy5vcmcvbmFkaW5lc2svOTkzOTMwOTg5NTA2NjVjNDcxZTAzNWFjNTE3YzIyMjRcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjU5OTdcbiAgICAvLyBmb3IgY2hhaW5lZCB0cmFuc2l0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuXG5leHBvcnQgY29uc3QgQ09MT1JTID0gW1xuICAgICdyZ2IoODAsIDQyLCA1NSknLFxuICAgICdyZ2IoOTAsIDQyLCA1NSknLFxuICAgICdyZ2IoMTAxLCA0MiwgNTUpJyxcbiAgICAncmdiKDExOCwgNDIsIDU1KScsXG4gICAgJ3JnYigxMzMsIDQyLCA1NSknLFxuICAgICdyZ2IoMTUwLCA0MiwgNTUpJyxcbiAgICAncmdiKDE2MCwgNDIsIDU1KScsXG4gICAgJ3JnYigxNzcsIDQyLCA1NSknLFxuICAgICdyZ2IoMTkwLCA0MiwgNTUpJyxcbiAgICAncmdiKDIwMiwgNDIsIDU1KScsXG4gICAgJ3JnYigyMTYsIDQyLCA1NSknLFxuICAgICdyZ2IoMjIxLCA0MiwgNTUpJyxcbl1cbiIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBVcGRhdGUgZnJvbSAnLi91cGRhdGUnXG5cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSAoZmlsdGVyLCBwcmVmaXgsIHRoYXQpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgY29uc3QgYWN0aXZpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBhY3Rpdml0eUxhYmVsLmlubmVyVGV4dCA9IFwiQWN0aXZpdGllc1wiO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlMYWJlbClcblxuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0aW9ucyA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdLmNvbmNhdChBQ1RJVklUSUVTKTtcbiAgICBhY3Rpdml0eVNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgVXBkYXRlLmFjdGl2aXR5KHByZWZpeCwgdGhhdCkpO1xufVxuXG5leHBvcnQgY29uc3QgeWVhclNlbGVjdG9yID0gKGZpbHRlciwgcHJlZml4LCB5ZWFycywgdGhhdCkgPT4ge1xuICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHllYXJTZWxlY3Rvcik7XG4gICAgeWVhclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJ5ZWFyLXNlbGVjdG9yXCIpXG4gICAgY29uc3QgeWVhcnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB5ZWFyc0xhYmVsLmlubmVyVGV4dCA9IFwiWWVhcnNcIjtcbiAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoeWVhcnNMYWJlbClcblxuICAgIGNvbnN0IHllYXJTZWxlY3Rpb25zID0geWVhcnM7XG4gICAgeWVhclNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgeWVhck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgeWVhck9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHllYXJPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICB5ZWFyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBVcGRhdGUueWVhcnMocHJlZml4LCB0aGF0KSlcbn1cblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IChoYW5kbGVTdWJtaXQsIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWJ0bmAsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Ym1pdClcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0ID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwic2VsZWN0b3JzLXNlbGVjdFwiKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IEFDVElWSVRJRVM7XG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlQWN0aXZpdHkpXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3SGFuZHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImNsb2NrLWhhbmRzXCJdJyk7XG4gICAgb2xkLmZvckVhY2goZWwgPT4ge2VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpfSlcblxuICAgIGNvbnN0IGhhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW5kc1wiKTtcbiAgICBjb25zdCBtaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW51dGVzLmNsYXNzTGlzdC5hZGQoXCJjbG9jay1oYW5kc1wiKTtcbiAgICBoYW5kcy5hcHBlbmRDaGlsZChtaW51dGVzKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHMtaG91clwiKTtcbiAgICBoYW5kcy5hcHBlbmRDaGlsZChob3Vycyk7XG59XG5cbmV4cG9ydCBjb25zdCBkYXJrTW9kZUJ0biA9IChkcmF3LCBkYXRhLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpO1xuICAgIGlmIChvbGQpIHtcbiAgICAgICAgb2xkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkKTtcbiAgICB9XG4gICAgbGV0IHRleHQgPSBcIkRhcmsgTW9kZVwiO1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBpZiAocGFnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aGVtZS1kYXJrXCIpKSB7XG4gICAgICAgIHRleHQgPSBcIkxpZ2h0IE1vZGVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZGFyay1idG5cIik7XG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtZGFya1wiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtbGlnaHRcIik7XG4gICAgICAgIGRyYXcoZGF0YSwgcGFyYW1zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoYmx1ciwgb3JkZXIsIHN0ZXBUZXh0LCBidXR0b25UZXh0LCB0cmlhbmdsZURpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgYHdhbGt0aHJvdWdoLXN0ZXAtJHtvcmRlcn1gKTtcbiAgICBzdGVwLmlubmVyVGV4dCA9IHN0ZXBUZXh0O1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgIGlmIChvcmRlciA9PT0gXCJ0aGlyZFwiKSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1hXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQSk7XG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoYCR7dHJpYW5nbGVEaXJlY3Rpb259LXRyaWFuZ2xlYCwgYHdhbGt0aHJvdWdoLSR7b3JkZXJ9LXRyaWFuZ2xlYCk7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSAoZmlsdGVyLCB3b3JkcykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd29yZHM7XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gKGF0dGFjaCwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBganMtJHtjYXRlZ29yeX1gKTtcbiAgICBpZiAoY2F0ZWdvcnkgPT09IFwiZW1wbG95ZWRcIikge1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdG9yID0gKGZpbHRlciwgY2F0ZWdvcnksIG9wdGlvbnMsIHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFNlbGVjdCAke2NhdGVnb3J5fWApKVxuICAgIG9wdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlKSBcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ1dHRvbiA9IChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgJHtjYXRlZ29yeX0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHJldHVybiBidXR0b247XG59IiwiZXhwb3J0IGNvbnN0IGFjdGl2aXR5ID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoYWN0aXZpdHkgPT4geyByZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgdGhhdC5zZWxlY3Rpb24uYWN0aXZpdGllcyA9IHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMuZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgeWVhcnMgPSAocHJlZml4LCB0aGF0KSA9PiBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV95ZWFyT3B0aW9uYCkuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1feWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn0iLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmV4dFN0ZXAob3B0aW9uLCBjbGFzc05hbWUsIG5leHQsIG5leHRDbGFzcywgbmV4dENvbXBvbmVudCwgcHJldkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7b3B0aW9ufWApO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV4dH1gKTtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKG5leHRDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke25leHRDb21wb25lbnR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dENvbXAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtwcmV2Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIHByZXZDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=