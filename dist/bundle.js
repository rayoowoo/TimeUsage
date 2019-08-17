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
            selectionButton.innerText = "I can do this.";
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
            description.innerText = "The typical App Academy student";
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
            selectionButton.innerText = "I can also do this.";
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
            description.innerText = "A first-year medical resident at UCSF";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHBfYWNhZGVteV9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbXBsb3llZF9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZXJ5b25lX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jlc2lkZW50X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F0Y2guanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImNhdGVnb3J5U2VsZWN0b3IiLCJlbXBsb3llZFNlbGVjdG9ycyIsIkVtcGxveWVkU2VsZWN0b3JzIiwiYWRkU2VsZWN0b3JzIiwiZ2VuZGVyQ29tcCIsIkdlbmRlckNvbXAiLCJhZGRDb21wIiwiZXZlcnlvbmVTZWxlY3RvcnMiLCJFdmVyeW9uZVNlbGVjdG9ycyIsImRheUNvbXAiLCJEYXlDb21wIiwiYXBwQWNhZGVteVNlbGVjdG9yIiwiQXBwQWNhZGVteVNlbGVjdG9yIiwiYWRkU2VsZWN0b3IiLCJyZXNpZGVudFNlbGVjdG9yIiwiUmVzaWRlbnRTZWxlY3RvciIsImVtcGxveWVkIiwiZW1wbG95ZWREYXRhIiwiZW1wbG95ZWREYXRhRmlsdGVyIiwicmVzdWx0IiwiYWN0aXZpdGllcyIsImdlbmRlciIsInllYXJzIiwiZW1wbG95ZWRQYXJhbXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImdlbmRlckRhdGEiLCJnZW5kZXJDb21wRmlsdGVyIiwiYWN0aXZpdHkiLCJldmVyeW9uZSIsImV2ZXJ5b25lRGF0YSIsImV2ZXJ5b25lRGF0YUZpbHRlciIsInR5cGUiLCJkYXkiLCJkYXlEYXRhIiwiZGF5Q29tcEZpbHRlciIsImFwcGFjYWRlbXkiLCJwZXJzb24iLCJ5ZWFyIiwicmVzaWRlbnQiLCJhdHRhY2giLCJmaWx0ZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3Rpb25CdXR0b24iLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJjYXRlZ29yeU9wdGlvbiIsInZhbHVlIiwib3B0aW9uIiwic2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yIiwicmVtb3ZlIiwidGFyZ2V0IiwiQUNUSVZJVElFUyIsIkNPTE9SUyIsImFjdGl2aXR5U2VsZWN0b3IiLCJ1cGRhdGVBY3Rpdml0eSIsInByZWZpeCIsImFjdGl2aXR5TGFiZWwiLCJhY3Rpdml0eVNlbGVjdGlvbnMiLCJjb25jYXQiLCJzZWxlY3QiLCJpIiwiZGl2Iiwic3BhbiIsImFjdGl2aXR5T3B0aW9uIiwic2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsInllYXJTZWxlY3RvciIsInVwZGF0ZVllYXJzIiwieWVhcnNMYWJlbCIsInllYXJTZWxlY3Rpb25zIiwieWVhck9wdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImFjdGl2aXR5U2VsZWN0Iiwic2VsZWN0aW9ucyIsImRyYXdIYW5kcyIsIm9sZCIsImVsIiwiaGFuZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXJrTW9kZUJ0biIsInRleHQiLCJwYWdlIiwiY29udGFpbnMiLCJidG4iLCJmb290ZXIiLCJodG1sIiwidG9nZ2xlIiwibGlzdCIsInBhcmFtRGlzcGxheSIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwicCIsImNhdGVnb3J5IiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJhbHBoYSIsImRhdHVtIiwibGkiLCJ0b0ZpeGVkIiwiQ3JlYXRlIiwic2VsZWN0aW9uIiwiYWxsIiwibmV3QXJyIiwicHVzaCIsInVwZGF0ZUdlbmRlciIsImdlbmRlclNlbGVjdG9yIiwiY3JlYXRlVGV4dE5vZGUiLCJnZW5kZXJzIiwiZ2VuZGVyT3B0aW9uIiwidXBkYXRlVHlwZSIsInR5cGVTZWxlY3RvciIsInR5cGVzIiwidHlwZU9wdGlvbiIsImNpdGF0aW9uIiwiYSIsImFycmF5U3VtIiwiYXJyYXlBdmVyYWdlIiwiYXJyYXlNZXJnZSIsImFyciIsInN1bSIsImxlbmd0aCIsImFycmF5cyIsImZpbmFsIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwic3ViQXJyIiwiYWN0aXZpdHlGaWx0ZXIiLCJnZW5kZXJGaWx0ZXIiLCJtYXAiLCJmaW5hbERhdGEiLCJ5ZWFybHlGaWx0ZXIiLCJhbGxZZWFycyIsInZhbHVlcyIsInNvcnRlZCIsImIiLCJ0eXBlRmlsdGVyIiwibWVuRmlsdGVyIiwid29tZW5GaWx0ZXIiLCJtZW5ZZWFybHlGaWx0ZXIiLCJhbGxNZW5ZZWFycyIsIm1lbkRhdGEiLCJ3b21lblllYXJseUZpbHRlciIsImFsbFdvbWVuWWVhcnMiLCJ3b21lbkRhdGEiLCJub25GaWx0ZXIiLCJob2xpRmlsdGVyIiwibm9uWWVhcmx5RmlsdGVyIiwiYWxsTm9uWWVhcnMiLCJub25EYXRhIiwiaG9saVllYXJseUZpbHRlciIsImFsbEhvbGlZZWFycyIsImhvbGlEYXRhIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkMyIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwicGVyY2VudGFnZSIsImZpbmFsX2RhdGEiLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwicGF0aHMiLCJzZWxlY3RBbGwiLCJlbnRlciIsImVhY2giLCJvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwibm9kZXMiLCJzbGljZSIsImF0dHJUd2VlbiIsImludGVycG9sYXRlIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwidCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtR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T0EsRUFBRXhMLElBQUYsQ0FBT2tNLFVBQVAsR0FBb0IsSUFBM0I7QUFBZ0MsU0FYM0QsRUFZS1ksS0FaTCxDQVlZLFVBQVN0QixDQUFULEVBQVk7QUFDaEIsbUJBQU9oTCxNQUFNbUksUUFBTixDQUFlNEQsTUFBTVEsS0FBTixHQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCaEksQ0FBdkIsRUFBMEJ5RSxHQUExQixDQUE4QjtBQUFBLHVCQUFNMkIsR0FBR3JHLE1BQUgsQ0FBVWtCLEVBQVYsRUFBY2pHLElBQWQsR0FBcUIsQ0FBckIsRUFBd0JBLElBQXhCLENBQTZCa00sVUFBbkM7QUFBQSxhQUE5QixDQUFmLElBQStGLElBQS9GLEdBQXNHLEdBQTdHO0FBQ0gsU0FkTCxFQWVLZSxTQWZMLENBZWUsR0FmZixFQWVvQixVQUFVekIsQ0FBVixFQUFhO0FBQ3pCLGdCQUFNeEcsSUFBSW9HLEdBQUc4QixXQUFILENBQWUxQixFQUFFMkIsVUFBakIsRUFBNkIzQixFQUFFNEIsUUFBL0IsQ0FBVjtBQUNBLG1CQUFPLFVBQVVDLENBQVYsRUFBYTtBQUNoQjdCLGtCQUFFNEIsUUFBRixHQUFhcEksRUFBRXFJLENBQUYsQ0FBYjtBQUNBLHVCQUFPakIsSUFBSVosQ0FBSixDQUFQO0FBQ0gsYUFIRDtBQUlILFNBckJMO0FBc0JDLEtBeEJUO0FBeUJILEM7O0FBRUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgY29uc3QgZW1wbG95ZWRCeUdlbmRlciA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDguODgsXG4gICAgICAgICAgICBcIjIwMTRcIjogOC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA4Ljk5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDguODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogOC45NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA4LjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS40MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjQ4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4wNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjA2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4wNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS45NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjksXG4gICAgICAgICAgICBcIjIwMThcIjogMi4wMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjY3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LCBcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC44MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuOTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS40OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjU4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQ5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuMzUsXG4gICAgICAgICAgICBcIjIwMThcIjogNi40N1xuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNS42NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS43NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuMDYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjAxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuOTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuOTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy45MSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjg0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC4wMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjczLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNjgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy42NVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNDMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy4zOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMThcIjogMy4zNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBldmVyeW9uZUJ5RGF5ID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuMjQsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMTAuMDcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMTAuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMTAuMDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMTAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMTAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMTAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMTAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMTAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjU4NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuNjU1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuNjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS42NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjcwNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5Ljc0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5Ljc5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5Ljc2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNzY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjM2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4zOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4zNVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjI2NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI1NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yMDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS43LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuNjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjU5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjcxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuMDYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi4xMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMi4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS44MjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuODc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuODM1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjkzNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjkxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjg4IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuOTEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC44NFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC43NDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjc3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC43NTUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjUzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTE1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDg1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjUxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNDEsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC41NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMy4wNixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuODY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuOTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuODksXG4gICAgICAgICAgICBcIjIwMTNcIjogMi44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuODc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuOTMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMi44NzUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42MyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzc1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNiBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC42MixcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjcxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNjcsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC43MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0Ljg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjY5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjcyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNi40OCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA2LjUzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDYuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA2LjM0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogNi41NlxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA1LjU1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDUuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS42NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS41NixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjU5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNjRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTQgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjk1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI3NVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBcHAgZnJvbSAnLi9qcy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gQ2F0ZWdvcnlTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVkU2VsZWN0b3JzID0gbmV3IEVtcGxveWVkU2VsZWN0b3JzKCk7XG4gICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBnZW5kZXJDb21wID0gbmV3IEdlbmRlckNvbXAoKTtcbiAgICAgICAgZ2VuZGVyQ29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lU2VsZWN0b3JzID0gbmV3IEV2ZXJ5b25lU2VsZWN0b3JzKCk7XG4gICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBkYXlDb21wID0gbmV3IERheUNvbXAoKTtcbiAgICAgICAgZGF5Q29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGFwcEFjYWRlbXlTZWxlY3RvciA9IG5ldyBBcHBBY2FkZW15U2VsZWN0b3IoKTtcbiAgICAgICAgYXBwQWNhZGVteVNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG4gICAgICAgIGNvbnN0IHJlc2lkZW50U2VsZWN0b3IgPSBuZXcgUmVzaWRlbnRTZWxlY3RvcigpO1xuICAgICAgICByZXNpZGVudFNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFbXBsb3llZCBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXBsb3llZC1idG5cIik7XG4gICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICBjb25zdCBlbXBsb3llZFBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgZGVsZXRlIGVtcGxveWVkUGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgZW1wbG95ZWRQYXJhbXMpO1xuXG4gICAgICAgIGVtcGxveWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZ2VuZGVyIGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5kZXItYnRuXCIpO1xuICAgICAgICBnZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlckRhdGEgPSB1dGlscy5nZW5kZXJDb21wRmlsdGVyKGdlbmRlckNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGdlbmRlckNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhnZW5kZXJEYXRhLCBnZW5kZXJDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFdmVyeW9uZSBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVyeW9uZS1idG5cIik7XG4gICAgICAgIGV2ZXJ5b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBldmVyeW9uZURhdGEgPSB1dGlscy5ldmVyeW9uZURhdGFGaWx0ZXIoZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnR5cGUsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGV2ZXJ5b25lRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGRheSBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWJ0blwiKTtcbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gdXRpbHMuZGF5Q29tcEZpbHRlcihkYXlDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBkYXlDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZGF5RGF0YSwgZGF5Q29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgQXBwIEFjYWRlbXkgU3R1ZGVudFxuICAgICAgICBjb25zdCBhcHBhY2FkZW15ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtYWNhZGVteS1idG5cIik7XG4gICAgICAgIGFwcGFjYWRlbXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhhcHBBY2FkZW15U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsIHllYXI6IFwiMjAxOVwifSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBmaXJzdCB5ZWFyIHJlc2lkZW50IGFmdGVyIG1lZGljYWwgc2Nob29sXG4gICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpZGVudC1idG5cIik7XG4gICAgICAgIHJlc2lkZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcocmVzaWRlbnRTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwifSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiY2xhc3MgQXBwQWNhZGVteVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWFwcFwiKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXBwLWFjYWRlbXktYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJJIGNhbiBkbyB0aGlzLlwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTQuOCxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIHR5cGljYWwgQXBwIEFjYWRlbXkgc3R1ZGVudFwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWNhZGVteVNlbGVjdG9yOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktZmlsdGVyXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFbXBsb3llZCBieSBHZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFdmVyeW9uZSBieSBEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiXVxuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIilcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24udmFsdWUgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gICAgfSlcblxuICAgIGNhdGVnb3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwianMtXCJdJylcbiAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIikpO1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRW1wbG95ZWQgYnkgR2VuZGVyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtcGxveWVkXCIpO1xuICAgICAgICAgICAgICAgIGVtcGxveWVkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdlbmRlclwiKTtcbiAgICAgICAgICAgICAgICBnZW5kZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRXZlcnlvbmUgYnkgRGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWV2ZXJ5b25lXCIpO1xuICAgICAgICAgICAgICAgIGV2ZXJ5b25lLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRheVwiKTtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXBwXCIpO1xuICAgICAgICAgICAgICAgIGFwcC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcmVzaWRlbnRcIik7XG4gICAgICAgICAgICAgICAgcmVzaWRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxufSIsImV4cG9ydCBjb25zdCBBQ1RJVklUSUVTID0gW1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiXG5dO1xuXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IFwicmVkXCIsXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IFwib3JhbmdlXCIsXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiBcInllbGxvd1wiLFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogXCJncmVlblwiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiBcImJsdWVcIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogXCJpbmRpZ29cIixcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IFwidmlvbGV0XCIsXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IFwiZ3JheVwiLFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogXCJibGFja1wiLFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IFwiY3lhblwiLFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogXCJjaGFydHJldXNlXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IFwibWFnZW50YVwiLFxuICAgIFwiTWVuXCI6IFwiYmx1ZVwiLFxuICAgIFwiV29tZW5cIjogXCJyZWRcIixcbiAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogXCJncmVlblwiLFxuICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBcInBpbmtcIlxufSIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICBjb25zdCBhY3Rpdml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFjdGl2aXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJBY3Rpdml0aWVzXCI7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eUxhYmVsKVxuXG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3Rpb25zID0gW1wiQWxsIEFjdGl2aXRpZXNcIl0uY29uY2F0KEFDVElWSVRJRVMpO1xuICAgIGFjdGl2aXR5U2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVBY3Rpdml0eSlcbn1cblxuZXhwb3J0IGNvbnN0IHllYXJTZWxlY3RvciA9ICh1cGRhdGVZZWFycywgZmlsdGVyLCBwcmVmaXgsIHllYXJzKSA9PiB7XG4gICAgY29uc3QgeWVhclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdG9yKTtcbiAgICB5ZWFyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInllYXItc2VsZWN0b3JcIilcbiAgICBjb25zdCB5ZWFyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHllYXJzTGFiZWwuaW5uZXJUZXh0ID0gXCJZZWFyc1wiO1xuICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZCh5ZWFyc0xhYmVsKVxuXG4gICAgY29uc3QgeWVhclNlbGVjdGlvbnMgPSB5ZWFycztcbiAgICB5ZWFyU2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCB5ZWFyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB5ZWFyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZVllYXJzKVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKGhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3QgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcblxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBBQ1RJVklUSUVTO1xuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgZHJhd0hhbmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJjbG9jay1oYW5kc1wiXScpO1xuICAgIG9sZC5mb3JFYWNoKGVsID0+IHtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKX0pXG5cbiAgICBjb25zdCBoYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFuZHNcIik7XG4gICAgY29uc3QgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHNcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQobWludXRlcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzLWhvdXJcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya01vZGVCdG4gPSAoZHJhdywgZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKTtcbiAgICBpZiAob2xkKSB7XG4gICAgICAgIG9sZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gXCJEYXJrIE1vZGVcIjtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtZGFya1wiKSkge1xuICAgICAgICB0ZXh0ID0gXCJMaWdodCBNb2RlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRhcmstYnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1kYXJrXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1saWdodFwiKTtcbiAgICAgICAgZHJhdyhkYXRhLCBwYXJhbXMpO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggKGRhdHVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdHVtO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBhbHBoYVtpXSlcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZF95ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCB5ZWFycztcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1kYXlcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlcik7XG5cbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3Rvcih0aGlzLnVwZGF0ZVllYXJzLCBmaWx0ZXIsIFwiZFwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuZGVyID0gdGhpcy51cGRhdGVHZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBBQ1RJVklUSUVTLFxuICAgICAgICAgICAgZ2VuZGVyOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlX2FjdGl2aXR5T3B0aW9uXCIpLmZvckVhY2ggKG9wdGlvbiA9PiB7b3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlciggYWN0aXZpdHkgPT4ge3JldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wifSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4ge3JldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgZ2VuZGVyOiBzZWxlY3Rpb25zLmdlbmRlcixcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwiZGlzcGxheVwiLCBcImpzLWVtcGxveWVkXCIpO1xuXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlciwgXCJlXCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImVcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuXG4gICAgICAgIGNvbnN0IGdlbmRlclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGdlbmRlclNlbGVjdG9yKTtcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgICAgICBnZW5kZXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCBnZW5kZXJcIikpXG4gICAgICAgIGNvbnN0IGdlbmRlcnMgPSBbXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIiwgXCJXb21lblwiLCBcIk1lblwiXTtcbiAgICAgICAgZ2VuZGVycy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIGdlbmRlclNlbGVjdG9yLmFwcGVuZENoaWxkKGdlbmRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZUdlbmRlcilcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZW1wbG95ZWRcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkVtcGxveWVkIG1lbiBhbmQgd29tZW4gb24gYW4gYXZlcmFnZSBkYXlcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVkU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuXG5jbGFzcyBldmVyeW9uZVNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBbGwgZGF5c1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVHlwZSA9IHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNldl9hY3Rpdml0eU9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlcihhY3Rpdml0eSA9PiB7IHJldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzID0gdGhpcy5zZWxlY3Rpb24uYWN0aXZpdGllcy5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2V2X3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlIDsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V2X3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bJ3llYXJzJ10gPSB0aGlzLnNlbGVjdGlvblsneWVhcnMnXS5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFdmVyeW9uZSBieSBkYXlcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZXZlcnlvbmVcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyLCBcImV2XCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImV2XCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0pO1xuXG5cbiAgICAgICAgY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHR5cGVTZWxlY3Rvcik7XG4gICAgICAgIHR5cGVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCB0eXBlXCIpKVxuICAgICAgICBjb25zdCB0eXBlcyA9IFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl07XG4gICAgICAgIHR5cGVzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgdHlwZU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgICAgIHR5cGVPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKHR5cGVPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMudXBkYXRlVHlwZSlcblxuXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQsIGZpbHRlciwgXCJldmVyeW9uZVwiKTtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJBbGwgcGVyc29ucyBvbiBub25ob2xpZGF5IHdlZWtkYXlzIG9yIHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZXJ5b25lU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuXG5jbGFzcyBHZW5kZXJDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgeWVhcnM7XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ195ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1nZW5kZXJcIik7XG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJnXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImdlbmRlclwiKTtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIGVtcGxveWVkIG1lbiBhbmQgd29tZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmRlckNvbXBcblxuXG4vLyBnb2FsOiB7XCJXb21lblwiOiAwLjUsIFwiTWVuXCI6IDQuM30iLCJjbGFzcyBSZXNpZGVudFNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLXJlc2lkZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2lkZW50LWJ0blwiLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiSSBjYW4gYWxzbyBkbyB0aGlzLlwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjUsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjMsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkEgZmlyc3QteWVhciBtZWRpY2FsIHJlc2lkZW50IGF0IFVDU0ZcIjtcblxuICAgICAgICBjb25zdCBjaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoY2l0YXRpb24pO1xuICAgICAgICBjaXRhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2l0YXRpb25cIik7XG4gICAgICAgIGNpdGF0aW9uLmlubmVyVGV4dCA9IFwiRGF0YSBhcHByb3hpbWF0ZWQgZnJvbSBcIjtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5rZXZpbm1kLmNvbS9ibG9nLzIwMTYvMDIvcXVhbnRpdGF0aXZlLWFuYWx5c2lzLWZpcnN0LXllYXItaW50ZXJuYWwtbWVkaWNpbmUtcmVzaWRlbmN5Lmh0bWxcIik7XG4gICAgICAgIGEuaW5uZXJUZXh0ID0gXCJodHRwczovL3d3dy5rZXZpbm1kLmNvbS9ibG9nLzIwMTYvMDIvcXVhbnRpdGF0aXZlLWFuYWx5c2lzLWZpcnN0LXllYXItaW50ZXJuYWwtbWVkaWNpbmUtcmVzaWRlbmN5Lmh0bWxcIjtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIGNpdGF0aW9uLmFwcGVuZENoaWxkKGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaWRlbnRTZWxlY3RvcjsiLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG5cbi8vIGRhdGFGaWx0ZXIoW1wiT3RoZXIgYWN0aXZpdGllcywgbm90IGVsc2V3aGVyZSBjbGFzc2lmaWVkIChpbmNsdWRlcyBtaXNjLiB0cmF2ZWwgYW5kIGRhdGEgY29kZXMpXCIsIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZS1tYWlsIChpbmNsdWRlcyB0cmF2ZWwpXCJdLFxuLy8gLi4uICAgICAgICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4vLyAuLi5bXCIyMDEzXCIsIFwiMjAxNFwiXSxcbi8vIC4uLmVtcGxveWVkQnlHZW5kZXIpXG4iLCJpbXBvcnQge0NPTE9SU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSAxNTtcblxuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjd2F0Y2hcIilcbiAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGFpbmVyXCIsIHRydWUpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyB3aWR0aCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgY29uc3QgdG90YWwgPSB1dGlscy5hcnJheVN1bShwcm9jZXNzZWRfZGF0YS5tYXAoZCA9PiB7cmV0dXJuIGQudmFsdWV9KSlcblxuICAgIHByb2Nlc3NlZF9kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgIGQucGVyY2VudGFnZSA9IGQudmFsdWUgLyB0b3RhbDtcbiAgICB9KVxuXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgY29uc3QgYWxwaGEgPSBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIl1cblxuICAgIHBhdGhzXG4gICAgICAgIC5lYWNoKCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthbHBoYVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImZvY3VzZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihmdW5jdGlvbihkKSB7cmV0dXJuIGQuZGF0YS5wZXJjZW50YWdlICogMzAwMH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5hcnJheVN1bShwYXRocy5ub2RlcygpLnNsaWNlKDAsIGkpLm1hcChlbCA9PiBkMy5zZWxlY3QoZWwpLmRhdGEoKVswXS5kYXRhLnBlcmNlbnRhZ2UpKSAqIDMwMDAgKyAyMDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG59XG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjY1MTIzL3Jlc2l6ZS1zdmctd2hlbi13aW5kb3ctaXMtcmVzaXplZC1pbi1kMy1qc1xuICAgIC8vIGZvciByZXNwb25zaXZlIFNWRyBkZXNpZ25cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc2Mjk4Mi9ob3ctdG8tZGlzcGxheS1wZXJjZW50YWdlLXRvLXRoZS1kMy1qcy1waWVjaGFydFxuICAgIC8vIGZvciBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvZmFyYXpzaHVqYS9lMmNiNTI4MjhjMDgwYmE4NWRhNTQ1OGUyMzA0YTYxZlxuICAgIC8vIGZvciBsYWJlbGluZyBzbGljZXMgd2l0aCBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9uYWRpbmVzay85OTM5MzA5ODk1MDY2NWM0NzFlMDM1YWM1MTdjMjIyNFxuICAgIC8vIGZvciB0cmFuc2l0aW9uc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyNTk5N1xuICAgIC8vIGZvciBjaGFpbmVkIHRyYW5zaXRpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9