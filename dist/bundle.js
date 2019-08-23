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
            var years = selections.years[0] === "All years" ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Day Comparison (everyone)"
            };
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
            var activities = selections["activities"][0] === "All Activities" ? _constants.ACTIVITIES : selections['activities'];
            var years = selections.years[0] === "All years" ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
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
            var activities = selections["activities"][0] === "All Activities" ? _constants.ACTIVITIES : selections['activities'];
            var years = selections.years[0] === "All years" ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
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
            var years = selections.years[0] === "All years" ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
            this.result = {
                activity: this.selection.activity,
                years: years,
                filter: "Gender Comparison (employed)"
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsImlubmVyVGV4dCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25zIiwiYWN0aXZpdHlTZWxlY3QiLCJ1cGRhdGVBY3Rpdml0eSIsInllYXJTZWxlY3RvciIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsIkFDVElWSVRJRVMiLCJhY3Rpdml0eVNlbGVjdG9yIiwib3RoZXJTZWxlY3RvciIsInVwZGF0ZUdlbmRlciIsInVwZGF0ZVR5cGUiLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbHJlYWR5YnRuIiwibmV4dFN0ZXAiLCJ5ZXNCdG4iLCJjaXRhdGlvbiIsImEiLCJleGl0QnV0dG9uIiwiZmlyc3RCdXR0b24iLCJzdGVwcyIsInNlY29uZEJ1dHRvbiIsInRoaXJkQnV0dG9uIiwiZm91cnRoQnV0dG9uIiwibWFyZ2luIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImQzIiwic2VsZWN0IiwiY2xhc3NlZCIsImFwcGVuZCIsImF0dHIiLCJkIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwiYXJyYXlTdW0iLCJtYXAiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsInN0eWxlIiwiQ09MT1JTIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIm5vZGVzIiwic2xpY2UiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiLCJVcGRhdGUiLCJwcmVmaXgiLCJ0aGF0IiwiYWN0aXZpdHlMYWJlbCIsImFjdGl2aXR5U2VsZWN0aW9ucyIsImNvbmNhdCIsImRpdiIsImFjdGl2aXR5T3B0aW9uIiwiY2hlY2tlZCIsInllYXJzTGFiZWwiLCJ5ZWFyU2VsZWN0aW9ucyIsInllYXJPcHRpb24iLCJkcmF3SGFuZHMiLCJvbGQiLCJoYW5kcyIsIm1pbnV0ZXMiLCJob3VycyIsImRhcmtNb2RlQnRuIiwidGV4dCIsInBhZ2UiLCJjb250YWlucyIsImJ0biIsImh0bWwiLCJ0b2dnbGUiLCJvcmRlciIsInN0ZXBUZXh0IiwiYnV0dG9uVGV4dCIsInRyaWFuZ2xlRGlyZWN0aW9uIiwic3RlcCIsImJ1dHRvbiIsInRyaWFuZ2xlQSIsInRyaWFuZ2xlQiIsInRyaWFuZ2xlIiwid29yZHMiLCJvcHRpb25zIiwidXBkYXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJhbGwiLCJuZXdBcnIiLCJwdXNoIiwiYXJyYXlBdmVyYWdlIiwiYXJyYXlNZXJnZSIsImFyciIsInN1bSIsImxlbmd0aCIsImFycmF5cyIsImZpbmFsIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwic3ViQXJyIiwiYWN0aXZpdHlGaWx0ZXIiLCJnZW5kZXJGaWx0ZXIiLCJmaW5hbERhdGEiLCJ5ZWFybHlGaWx0ZXIiLCJhbGxZZWFycyIsInZhbHVlcyIsInNvcnRlZCIsImIiLCJ0eXBlRmlsdGVyIiwibWVuRmlsdGVyIiwid29tZW5GaWx0ZXIiLCJtZW5ZZWFybHlGaWx0ZXIiLCJhbGxNZW5ZZWFycyIsIm1lbkRhdGEiLCJ3b21lblllYXJseUZpbHRlciIsImFsbFdvbWVuWWVhcnMiLCJ3b21lbkRhdGEiLCJub25GaWx0ZXIiLCJob2xpRmlsdGVyIiwibm9uWWVhcmx5RmlsdGVyIiwiYWxsTm9uWWVhcnMiLCJub25EYXRhIiwiaG9saVllYXJseUZpbHRlciIsImFsbEhvbGlZZWFycyIsImhvbGlEYXRhIiwiY2xhc3NOYW1lIiwibmV4dCIsIm5leHRDbGFzcyIsIm5leHRDb21wb25lbnQiLCJwcmV2Q29tcG9uZW50IiwiY2xvc2VNb2RhbCIsIm5leHRJdGVtIiwibmV4dENvbXAiLCJwcmV2Q29tcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLDhDQUFtQjtBQUM1QixnQ0FBNEI7QUFDeEIsb0JBQVksMEJBRFk7QUFFeEIsb0JBQVksR0FGWTtBQUd4QixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJ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QjtBQUNBSSw2QkFBU3hMLE9BQVQsQ0FBaUI7QUFBQSwrQkFBTWlCLEdBQUdyQixTQUFILENBQWFZLE1BQWIsQ0FBb0IsbUJBQXBCLENBQU47QUFBQSxxQkFBakI7QUFDSDtBQUNKLGFBaEJEO0FBaUJIOzs7Ozs7a0JBSVUvRCxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcGxveWVkQnlHZW5kZXIgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA4Ljg4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDguOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOC45OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA4Ljg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDguOTYsXG4gICAgICAgICAgICBcIjIwMThcIjogOC45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNDEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS40OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMDQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMDZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuOTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC42MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41NlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSwgXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjk1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjAzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC44OFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNDgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS41OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjU1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjM1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNjQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1Ljg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNzcsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1Ljc0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjA2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS4wMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0Ljk3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjk3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuOTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy44NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuMDIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy43MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjY4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjQzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuMzgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuMzZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZXZlcnlvbmVCeURheSA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjI0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjMxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEwLjA3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEwLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEwLjA4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMTAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS41ODUsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjY1NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjY2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuNjcsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS43MDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS43NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS43OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS43NixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5Ljc2NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5Ljc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjEzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMzksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjM0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4yNjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjY4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS41OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS43MSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjY5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjA2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuMTIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuODI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjg3NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjgzNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS45MzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS45MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS44OCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjkxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjc5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNzQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzU1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQ3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40N1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjUxNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQ4NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQ4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTJcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0LjQxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogNC40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDMuMDYsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjg2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjkzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjg5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMi45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjg3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjkzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuODc1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM3NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM3NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzYgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC43MSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjY3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNzMsXG4gICAgICAgICAgICBcIjIwMTJcIjogNC44NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNC42OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogNC43MlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDYuNDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogNi41MyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA2LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNi4zNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNS41NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA1LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMTNcIjogNS42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNjQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuNTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS41OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1LjY0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE0IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzE1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNzVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQXBwIGZyb20gJy4vanMvY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9uJ1xuaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICAvLyBpbnN0cnVjdGlvbnMgbW9kYWxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zKCk7XG5cbiAgICAgICAgLy8gbWFraW5nIGFsbCB0aGUgc2VsZWN0b3JzXG4gICAgICAgIENhdGVnb3J5U2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCBlbXBsb3llZFNlbGVjdG9ycyA9IG5ldyBFbXBsb3llZFNlbGVjdG9ycygpO1xuICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZ2VuZGVyQ29tcCA9IG5ldyBHZW5kZXJDb21wKCk7XG4gICAgICAgIGdlbmRlckNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBldmVyeW9uZVNlbGVjdG9ycyA9IG5ldyBFdmVyeW9uZVNlbGVjdG9ycygpO1xuICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZGF5Q29tcCA9IG5ldyBEYXlDb21wKCk7XG4gICAgICAgIGRheUNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBhcHBBY2FkZW15U2VsZWN0b3IgPSBuZXcgQXBwQWNhZGVteVNlbGVjdG9yKCk7XG4gICAgICAgIGFwcEFjYWRlbXlTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByZXNpZGVudFNlbGVjdG9yID0gbmV3IFJlc2lkZW50U2VsZWN0b3IoKTtcbiAgICAgICAgcmVzaWRlbnRTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRW1wbG95ZWQgZGF0YXNldFxuICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wbG95ZWQtYnRuXCIpO1xuICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcbiAgICAgICAgY29uc3QgZW1wbG95ZWRQYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgIGRlbGV0ZSBlbXBsb3llZFBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIGVtcGxveWVkUGFyYW1zKTtcblxuICAgICAgICBlbXBsb3llZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGdlbmRlciBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZGVyLWJ0blwiKTtcbiAgICAgICAgZ2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJEYXRhID0gdXRpbHMuZ2VuZGVyQ29tcEZpbHRlcihnZW5kZXJDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBnZW5kZXJDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZ2VuZGVyRGF0YSwgZ2VuZGVyQ29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRXZlcnlvbmUgZGF0YXNldFxuICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlcnlvbmUtYnRuXCIpO1xuICAgICAgICBldmVyeW9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZXZlcnlvbmVEYXRhID0gdXRpbHMuZXZlcnlvbmVEYXRhRmlsdGVyKGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC50eXBlLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhldmVyeW9uZURhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBkYXkgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1idG5cIik7XG4gICAgICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZGF5RGF0YSA9IHV0aWxzLmRheUNvbXBGaWx0ZXIoZGF5Q29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZGF5Q29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGRheURhdGEsIGRheUNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEFwcCBBY2FkZW15IFN0dWRlbnRcbiAgICAgICAgY29uc3QgYXBwYWNhZGVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWFjYWRlbXktYnRuXCIpO1xuICAgICAgICBhcHBhY2FkZW15LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoYXBwQWNhZGVteVNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLCB5ZWFyOiBcIjIwMTlcIn0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZmlyc3QgeWVhciByZXNpZGVudCBhZnRlciBtZWRpY2FsIHNjaG9vbFxuICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzaWRlbnQtYnRuXCIpO1xuICAgICAgICByZXNpZGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHJlc2lkZW50U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIn0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgQXBwQWNhZGVteVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJhcHBcIilcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gQ3JlYXRlLnNlbGVjdEJ1dHRvbihmaWx0ZXIsIFwiYXBwLWFjYWRlbXlcIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxNC44LFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJUaGUgdHlwaWNhbCBBcHAgQWNhZGVteSBzdHVkZW50LiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBBY2FkZW15U2VsZWN0b3I7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjYXRlZ29yeVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1maWx0ZXJcIik7XG4gICAgYXR0YWNoLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0b3IpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIkVtcGxveWVkIGJ5IEdlbmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV2ZXJ5b25lIGJ5IERheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJdXG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKVxuICAgICAgICBjYXRlZ29yeU9wdGlvbi52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeVNlbGVjdG9yLmFwcGVuZENoaWxkKGNhdGVnb3J5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJqcy1cIl0nKVxuICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKSk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFbXBsb3llZCBieSBHZW5kZXJcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1wbG95ZWRcIik7XG4gICAgICAgICAgICAgICAgZW1wbG95ZWQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZ2VuZGVyXCIpO1xuICAgICAgICAgICAgICAgIGdlbmRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFdmVyeW9uZSBieSBEYXlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZXZlcnlvbmVcIik7XG4gICAgICAgICAgICAgICAgZXZlcnlvbmUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcHAgQWNhZGVteSBTdHVkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hcHBcIik7XG4gICAgICAgICAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1yZXNpZGVudFwiKTtcbiAgICAgICAgICAgICAgICByZXNpZGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiaW1wb3J0IHthbHBoYX0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXlcIik7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWRhdGFcIilcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgY29uc3QgcGFyYW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHBhcmFtRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicGFyYW1zXCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYW1EaXNwbGF5KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLnNvcnQoKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHBhcmFtRGlzcGxheS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBgJHtlbC50b1VwcGVyQ2FzZSgpfTpgXG4gICAgICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFyYW0uaW5uZXJUZXh0ID0gdHlwZW9mIHBhcmFtc1tlbF0gPT09IFwib2JqZWN0XCIgPyBwYXJhbXNbZWxdLmpvaW4oXCIsIFwiKSA6IHBhcmFtc1tlbF07XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgICAgICBwLmFwcGVuZENoaWxkKHBhcmFtKTtcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggKGRhdHVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdHVtO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBhbHBoYVtpXSlcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbGlzdC1pdGVtc1wiKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGRhdGFbZGF0dW1dLnRvRml4ZWQoMik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb25zdCBhcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthbHBoYVtpXX1gKTtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QuYWRkKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgfSlcblxuXG59IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5cbmNsYXNzIERheUNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgPyBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZGF5XCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlcik7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImRcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImRheVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IEFDVElWSVRJRVMsXG4gICAgICAgICAgICBnZW5kZXI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkVtcGxveWVkIGJ5IEdlbmRlclwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiID8gQUNUSVZJVElFUyA6IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIGdlbmRlcjogc2VsZWN0aW9ucy5nZW5kZXIsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJlbXBsb3llZFwiKVxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUub3RoZXJTZWxlY3RvcihmaWx0ZXIsIFwiZ2VuZGVyXCIsIFtcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLCBcIldvbWVuXCIsIFwiTWVuXCJdLCB0aGlzLnVwZGF0ZUdlbmRlci5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJlbXBsb3llZFwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJFbXBsb3llZCBtZW4gYW5kIHdvbWVuIG9uIGFuIGF2ZXJhZ2UgZGF5XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIiA/IEFDVElWSVRJRVMgOiBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiA/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgdHlwZTogc2VsZWN0aW9ucy50eXBlLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkV2ZXJ5b25lIGJ5IGRheVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImV2ZXJ5b25lXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZXZcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJ0eXBlXCIsIFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0sIHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJldmVyeW9uZVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBbGwgcGVyc29ucyBvbiBub25ob2xpZGF5IHdlZWtkYXlzIG9yIHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZXJ5b25lU2VsZWN0b3JzOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBHZW5kZXJDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZ2VuZGVyXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlciwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImdcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImltcG9ydCBXYWxrdGhyb3VnaCBmcm9tICcuL3dhbGt0aHJvdWdoJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcbiAgICAvLyBDcmVhdGluZyB0aGUgbW9kYWxcbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRpbWUgVXNhZ2VcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBUaW1lIFVzYWdlLCBhIGRhdGEgdmlzdWFsaXphdGlvbiBvZiBob3cgQW1lcmljYW5zIHVzZSB0aGVpciB0aW1lIG9uIGEgZ2l2ZW4gZGF5LiBUaGUgZGF0YSBpcyBnYXRoZXJlZCBieSB0aGUgQnVyZWF1IG9mIExhYm9yIFN0YXRpc3RpY3Mgb25jZSBhIHllYXIuXCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgLy8gUXVlc3Rpb25cbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IFwiV291bGQgeW91IGxpa2UgYSBicmllZiB3YWxrdGhyb3VnaD9cIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgcXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLXF1ZXN0aW9uXCIpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgLy8gRXhpdCBidXR0b25cbiAgIFxuICAgIC8vIEkndmUgYWxyZWFkeSB1c2VkIHRoaXMgYmVmb3JlIGJ1dHRvbi4gVGFrZXMgdGhlbSBkaXJlY3RseSBpbnRvIHRoZSBhcHAuXG4gICAgY29uc3QgYWxyZWFkeWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhbHJlYWR5YnRuKTtcbiAgICBhbHJlYWR5YnRuLmlubmVyVGV4dCA9IFwiSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUuXCI7XG4gICAgYWxyZWFkeWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaCBidXR0b24uIEl0IHNob3VsZCB0YWtlIHRoZW0gdGhyb3VnaCB0aGUgd2Fsa3Rocm91Z2guIFxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdG4pOyBcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXMsIHBsZWFzZS5cIjtcbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBXYWxrdGhyb3VnaChibHVyKTtcbiAgICAgICAgdXRpbHMubmV4dFN0ZXAoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikoZSk7XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcInJlc2lkZW50XCIpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gQ3JlYXRlLnNlbGVjdEJ1dHRvbihmaWx0ZXIsIFwicmVzaWRlbnRcIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC41LFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4zLFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBIGZpcnN0LXllYXIgbWVkaWNhbCByZXNpZGVudCBhdCBVQ1NGLiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgICAgIGNvbnN0IGNpdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChjaXRhdGlvbik7XG4gICAgICAgIGNpdGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXRhdGlvblwiKTtcbiAgICAgICAgY2l0YXRpb24uaW5uZXJUZXh0ID0gXCJEYXRhIGFwcHJveGltYXRlZCBmcm9tIFwiO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiKTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgY2l0YXRpb24uYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpZGVudFNlbGVjdG9yOyIsImltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgYmx1ciA9PiB7XG4gICAgLy8gV2Fsa3Rocm91Z2hcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwiZXhpdFwiKTtcbiAgICBleGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRXhpdCB3YWxrdGhyb3VnaFwiO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJleGl0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBudWxsLCBcIipcIikpXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZpcnN0XCIsXG4gICAgICAgIFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiLFxuICAgICAgICBcIkdvdCBpdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3Qgc2Vjb25kQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwic2Vjb25kXCIsXG4gICAgICAgICdTZWxlY3QgeW91ciBwYXJhbWV0ZXJzLiBBcHAgQWNhZGVteSBTdHVkZW50IGFuZCBGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnQgaGF2ZSBubyBwYXJhbWV0ZXJzLiBUaGVuIGNsaWNrIFwiU3VibWl0IFNlbGVjdGlvbi5cIicsXG4gICAgICAgIFwiR3JlYXQhXCIsXG4gICAgICAgIFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IHRoaXJkQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwidGhpcmRcIixcbiAgICAgICAgJ0FzIHlvdSBob3ZlciBvdmVyIHRoZSBzbGljZXMgb2YgdGhlIGdyYXBoLCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHdpbGwgbGlnaHQgdXAsIGFuZCB2aWNlIHZlcnNhLiBOb3RlIHRoYXQgdGhlc2Ugc2xpY2VzIGFyZSB0ZWNobmljYWxseSBwcm9wb3J0aW9ucywgYW5kIG5vdCBzdHJpY3RseSBvdXQgb2YgMjQgaG91cnMuIEl0IGRlcGVuZHMgb24gdGhlIHBhcmFtZXRlcnMuJyxcbiAgICAgICAgXCJBd2Vzb21lIVwiXG4gICAgICAgIClcbiAgICBjb25zdCBmb3VydGhCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJmb3VydGhcIixcbiAgICAgICAgXCJUaGVyZSdzIGEgZGFyayBtb2RlIGlmIG5lZWRlZC5cIixcbiAgICAgICAgXCJJJ20gcmVhZHkuXCIsXG4gICAgICAgIFwiZG93blwiXG4gICAgKVxuICAgIGZpcnN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLnNlbGVjdG9yc1wiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikpXG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiI2NcIiwgXCIuc2VsZWN0b3JzXCIpKVxuICAgIHRoaXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1mb3VydGhcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmRhcmstYnRuXCIsIFwiI2NcIikpXG4gICAgZm91cnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIsIG51bGwsIG51bGwsIG51bGwsIFwiLmRhcmstYnRuXCIpKVxufSIsImltcG9ydCB7YWxwaGEsIENPTE9SU30gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjExO1xuXG4gICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiN3YXRjaFwiKVxuICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250YWluZXJcIiwgdHJ1ZSlcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7IHdpZHRoID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgLy8gc2V0dGluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgcGllXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgLy8gZm9ybWF0dGluZyB0aGUgZGF0YSBvYmplY3QgcmVjZWl2ZWQgaW50byBhbiBhcnJheSBvZiBQT0pPUyB3aXRoIHRoZSBrZXlzIFwia2V5XCIgYW5kIFwidmFsdWVcIiBhbmQgdmFsdWVzIGNvcnJlc3BvbmRpbmdseS4gXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgLy8gdG90YWwgb2YgdGhlIHZhbHVlcywgdXNlZCB0byBjYWxjdWxhdGUgcGVyY2VudGFnZS5cbiAgICBjb25zdCB0b3RhbCA9IHV0aWxzLmFycmF5U3VtKHByb2Nlc3NlZF9kYXRhLm1hcChkID0+IHtyZXR1cm4gZC52YWx1ZX0pKVxuXG4gICAgLy8gYXNzaWduaW5nIGVhY2ggZGF0YSBlbnRyeSBhIHBlcmNlbnRhZ2UgdmFsdWVcbiAgICBwcm9jZXNzZWRfZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLnBlcmNlbnRhZ2UgPSBkLnZhbHVlIC8gdG90YWw7XG4gICAgfSlcblxuICAgIC8vIHR1cm5pbmcgdGhlIGRhdGEgdmFsdWVzIGludG8gYSBwaWUgZ3JhcGgsIHdpdGggdGhlIGQudmFsdWVzIGJlaW5nIGhvdyBtdWNoIG9mIHRoZSB0b3RhbCBkb251dC4gXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICAvLyBkZWZpbmluZyB0aGUgbWV0aG9kIHRvIG1ha2UgYXJjcy4gc2luY2Ugd2UgaGF2ZSBhbiBpbm5lciByYWRpdXMgYW5kIGFuIG91dGVyIHJhZGl1cywgdGhpcyBpcyBhIGRvbnV0LiBcbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgLy8gYWxsIHRoZSBwYXRocyBtYWRlIGZyb20gdGhlIGRhdGEgdmFsdWVzLiBcbiAgICBjb25zdCBwYXRocyA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgLmRhdGEoZmluYWxfZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG5cbiAgICAvLyBtYWtpbmcgdGhlIGFyY3MgZm9yIGVhY2ggcGF0aCwgc2V0dGluZyBsaXN0ZW5lcnMsIGFuZCBjcmVhdGluZyB0aGUgdHJhbnNpdGlvbnMuIFxuICAgIHBhdGhzXG4gICAgICAgIC5lYWNoKCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGByZ2IoJHsyNTUgKiAoMSAtIGQuZGF0YS5wZXJjZW50YWdlKX0sIDQyLCA1NSlgIH0pXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24oZCkge3JldHVybiBgcmdiYSgxNTcsIDQyLCA1NSwgJHtkLmRhdGEucGVyY2VudGFnZX0pYH0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgQ09MT1JTW2ldKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKGFscGhhW2ldLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZnVuY3Rpb24oZCkge3JldHVybiBkLmRhdGEucGVyY2VudGFnZSAqIDMwMDB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSggZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwICsgMjAwOyAvLyB0aGlzIGxpbmUgaXMgbGl0ZXJhbGx5IGp1c3QgdG8gY2FsY3VsYXRlIHRoZSBkZWxheSBzdWNoIHRoYXQgdGhlIHRyYW5zaXRpb25zIGFyZSBvbmUgYWZ0ZXIgdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI2NTEyMy9yZXNpemUtc3ZnLXdoZW4td2luZG93LWlzLXJlc2l6ZWQtaW4tZDMtanNcbiAgICAvLyBmb3IgcmVzcG9uc2l2ZSBTVkcgZGVzaWduXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NjI5ODIvaG93LXRvLWRpc3BsYXktcGVyY2VudGFnZS10by10aGUtZDMtanMtcGllY2hhcnRcbiAgICAvLyBmb3IgcGVyY2VudGFnZXNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL2ZhcmF6c2h1amEvZTJjYjUyODI4YzA4MGJhODVkYTU0NThlMjMwNGE2MWZcbiAgICAvLyBmb3IgbGFiZWxpbmcgc2xpY2VzIHdpdGggcGVyY2VudGFnZXNcbiAgICAvLyBodHRwOi8vYmwub2Nrcy5vcmcvbmFkaW5lc2svOTkzOTMwOTg5NTA2NjVjNDcxZTAzNWFjNTE3YzIyMjRcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjU5OTdcbiAgICAvLyBmb3IgY2hhaW5lZCB0cmFuc2l0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuXG5leHBvcnQgY29uc3QgQ09MT1JTID0gW1xuICAgICdyZ2IoODAsIDQyLCA1NSknLFxuICAgICdyZ2IoOTAsIDQyLCA1NSknLFxuICAgICdyZ2IoMTAxLCA0MiwgNTUpJyxcbiAgICAncmdiKDExOCwgNDIsIDU1KScsXG4gICAgJ3JnYigxMzMsIDQyLCA1NSknLFxuICAgICdyZ2IoMTUwLCA0MiwgNTUpJyxcbiAgICAncmdiKDE2MCwgNDIsIDU1KScsXG4gICAgJ3JnYigxNzcsIDQyLCA1NSknLFxuICAgICdyZ2IoMTkwLCA0MiwgNTUpJyxcbiAgICAncmdiKDIwMiwgNDIsIDU1KScsXG4gICAgJ3JnYigyMTYsIDQyLCA1NSknLFxuICAgICdyZ2IoMjIxLCA0MiwgNTUpJyxcbl1cbiIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBVcGRhdGUgZnJvbSAnLi91cGRhdGUnXG5cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSAoZmlsdGVyLCBwcmVmaXgsIHRoYXQpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgY29uc3QgYWN0aXZpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBhY3Rpdml0eUxhYmVsLmlubmVyVGV4dCA9IFwiQWN0aXZpdGllc1wiO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlMYWJlbClcblxuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0aW9ucyA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdLmNvbmNhdChBQ1RJVklUSUVTKTtcbiAgICBhY3Rpdml0eVNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgVXBkYXRlLmFjdGl2aXR5KHByZWZpeCwgdGhhdCkpO1xufVxuXG5leHBvcnQgY29uc3QgeWVhclNlbGVjdG9yID0gKGZpbHRlciwgcHJlZml4LCB5ZWFycywgdGhhdCkgPT4ge1xuICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHllYXJTZWxlY3Rvcik7XG4gICAgeWVhclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJ5ZWFyLXNlbGVjdG9yXCIpXG4gICAgY29uc3QgeWVhcnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB5ZWFyc0xhYmVsLmlubmVyVGV4dCA9IFwiWWVhcnNcIjtcbiAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoeWVhcnNMYWJlbClcblxuICAgIGNvbnN0IHllYXJTZWxlY3Rpb25zID0geWVhcnM7XG4gICAgeWVhclNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgeWVhck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgeWVhck9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHllYXJPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICB5ZWFyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBVcGRhdGUueWVhcnMocHJlZml4LCB0aGF0KSlcbn1cblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IChoYW5kbGVTdWJtaXQsIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWJ0bmAsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Ym1pdClcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0ID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwic2VsZWN0b3JzLXNlbGVjdFwiKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IEFDVElWSVRJRVM7XG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlQWN0aXZpdHkpXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3SGFuZHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImNsb2NrLWhhbmRzXCJdJyk7XG4gICAgb2xkLmZvckVhY2goZWwgPT4ge2VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpfSlcblxuICAgIGNvbnN0IGhhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW5kc1wiKTtcbiAgICBjb25zdCBtaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtaW51dGVzLmNsYXNzTGlzdC5hZGQoXCJjbG9jay1oYW5kc1wiKTtcbiAgICBoYW5kcy5hcHBlbmRDaGlsZChtaW51dGVzKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHMtaG91clwiKTtcbiAgICBoYW5kcy5hcHBlbmRDaGlsZChob3Vycyk7XG59XG5cbmV4cG9ydCBjb25zdCBkYXJrTW9kZUJ0biA9IChkcmF3LCBkYXRhLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpO1xuICAgIGlmIChvbGQpIHtcbiAgICAgICAgb2xkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkKTtcbiAgICB9XG4gICAgbGV0IHRleHQgPSBcIkRhcmsgTW9kZVwiO1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBpZiAocGFnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aGVtZS1kYXJrXCIpKSB7XG4gICAgICAgIHRleHQgPSBcIkxpZ2h0IE1vZGVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZGFyay1idG5cIik7XG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtZGFya1wiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtbGlnaHRcIik7XG4gICAgICAgIGRyYXcoZGF0YSwgcGFyYW1zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoYmx1ciwgb3JkZXIsIHN0ZXBUZXh0LCBidXR0b25UZXh0LCB0cmlhbmdsZURpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgYHdhbGt0aHJvdWdoLXN0ZXAtJHtvcmRlcn1gKTtcbiAgICBzdGVwLmlubmVyVGV4dCA9IHN0ZXBUZXh0O1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgIGlmIChvcmRlciA9PT0gXCJ0aGlyZFwiKSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1hXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQSk7XG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoYCR7dHJpYW5nbGVEaXJlY3Rpb259LXRyaWFuZ2xlYCwgYHdhbGt0aHJvdWdoLSR7b3JkZXJ9LXRyaWFuZ2xlYCk7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSAoZmlsdGVyLCB3b3JkcykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd29yZHM7XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gKGF0dGFjaCwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBganMtJHtjYXRlZ29yeX1gKTtcbiAgICBpZiAoY2F0ZWdvcnkgPT09IFwiZW1wbG95ZWRcIikge1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdG9yID0gKGZpbHRlciwgY2F0ZWdvcnksIG9wdGlvbnMsIHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFNlbGVjdCAke2NhdGVnb3J5fWApKVxuICAgIG9wdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlKSBcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ1dHRvbiA9IChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgJHtjYXRlZ29yeX0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHJldHVybiBidXR0b247XG59IiwiZXhwb3J0IGNvbnN0IGFjdGl2aXR5ID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoYWN0aXZpdHkgPT4geyByZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgdGhhdC5zZWxlY3Rpb24uYWN0aXZpdGllcyA9IHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMuZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgeWVhcnMgPSAocHJlZml4LCB0aGF0KSA9PiBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV95ZWFyT3B0aW9uYCkuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1feWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn0iLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmV4dFN0ZXAob3B0aW9uLCBjbGFzc05hbWUsIG5leHQsIG5leHRDbGFzcywgbmV4dENvbXBvbmVudCwgcHJldkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7b3B0aW9ufWApO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV4dH1gKTtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKG5leHRDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke25leHRDb21wb25lbnR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dENvbXAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtwcmV2Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIHByZXZDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=