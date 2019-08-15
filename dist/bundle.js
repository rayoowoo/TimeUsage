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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.draw = this.draw.bind(this);
    }

    _createClass(App, [{
        key: 'draw',
        value: function draw(data) {
            var svg = document.querySelector("svg");
            var display = document.querySelector("#data-display ul");
            if (svg) {
                svg.parentNode.removeChild(svg);
            }
            if (display) {
                display.parentNode.removeChild(display);
            }
            (0, _watch2.default)(data);
            (0, _data_display2.default)(data);
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
            this.draw(employedData);

            employed.addEventListener("click", function (e) {
                e.stopPropagation();
                var employedData = utils.employedDataFilter(employedSelectors.result.activities, employedSelectors.result.gender, employedSelectors.result.years, _employedByGenderDataShaped.employedByGender);
                _this.draw(employedData);
            });

            // selecting the gender comparison
            var gender = document.querySelector(".gender-btn");
            gender.addEventListener("click", function (e) {
                e.stopPropagation();
                var genderData = utils.genderCompFilter(genderComp.result.activity, genderComp.result.years, _employedByGenderDataShaped.employedByGender);

                _this.draw(genderData);
            });

            // selecting the Everyone dataset
            var everyone = document.querySelector(".everyone-btn");
            everyone.addEventListener("click", function (e) {
                e.stopPropagation();
                var everyoneData = utils.everyoneDataFilter(everyoneSelectors.result.activities, everyoneSelectors.result.type, everyoneSelectors.result.years, _everyoneByDayShaped.everyoneByDay);
                _this.draw(everyoneData);
            });

            // selecting the day comparison
            var day = document.querySelector(".day-btn");
            day.addEventListener("click", function (e) {
                e.stopPropagation();
                var dayData = utils.dayCompFilter(dayComp.result.activity, dayComp.result.years, _everyoneByDayShaped.everyoneByDay);
                _this.draw(dayData);
            });

            // selecting the App Academy Student
            var appacademy = document.querySelector(".app-academy-btn");
            appacademy.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.draw(appAcademySelector.data);
            });

            // selecting the first year resident after medical school
            var resident = document.querySelector(".resident-btn");
            resident.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.draw(residentSelector.data);
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
            selectionButton.innerText = "App Academy Student";
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

    var categories = ["Employed by Gender", "Gender Comparison", "Everyone by Day", "Day Comparison", "App Academy Student", "First Year Medical Resident"];

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
            case "Gender Comparison":
                var gender = document.querySelector(".js-gender");
                gender.classList.add("display");
                break;
            case "Everyone by Day":
                var everyone = document.querySelector(".js-everyone");
                everyone.classList.add("display");
                break;
            case "Day Comparison":
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
exports.activitySelect = exports.submitButton = exports.yearSelector = exports.activitySelector = undefined;

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
    yearSelector.classList.add("selectors");
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

    var placeholder = document.createElement("option");
    placeholder.innerText = "Choose an activity";
    activitySelector.appendChild(placeholder);
    placeholder.setAttribute("disabled", true);

    var selections = _constants.ACTIVITIES;
    selections.forEach(function (select) {
        var activityOption = document.createElement("option");
        activityOption.value = select;
        activityOption.innerText = select;
        activitySelector.appendChild(activityOption);
    });
    activitySelector.addEventListener("change", updateActivity);
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

var _constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

exports.default = function (data) {
    var display = document.querySelector("#data-display");
    var list = document.createElement("ul");
    display.appendChild(list);

    Object.keys(data).forEach(function (datum) {
        var li = document.createElement("li");
        list.appendChild(li);
        var div = document.createElement("div");
        li.appendChild(div);
        div.style.backgroundColor = _constants.COLORS[datum];
        div.style.height = "10px";
        div.style.width = "10px";
        var p = document.createElement("p");
        p.innerText = datum + " - " + data[datum].toFixed(2);
        li.appendChild(p);
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
                years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }

            this.result = {
                activity: this.selection.activity,
                years: years
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

            Create.yearSelector(this.updateYears, filter, "d", ["All years", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

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
            years: ["2013", "2014", "2015", "2016", "2017", "2018"]
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
                this.selection = this.selection.filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
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
                gender: selections.gender
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
                if (e.target.value === "All Activities") {
                    document.querySelectorAll("#ev_activityOption").forEach(function (option) {
                        option.checked = false;option.parentNode.classList.remove("selected");
                    });
                    this.selection["activities"] = ["All Activities"];
                } else {
                    document.querySelector("#ev_activityOptionAll").checked = false;
                    var newArr = this.selection["activities"].filter(function (activity) {
                        return activity !== "All Activities";
                    });
                    newArr.push(e.target.value);
                    this.selection["activities"] = newArr;
                }
            } else if (e.target.checked === false) {
                this.selection = this.selection.filter(function (select) {
                    return select !== e.target.value;
                });
            }
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
                if (e.target.value === "All Years") {
                    document.querySelectorAll("#ev_yearOption").forEach(function (option) {
                        option.checked = false;
                    });
                    this.selection["years"] = ["All Years"];
                } else {
                    var all = document.querySelector("#ev_yearOptionAll");
                    all.checked = false;
                    all.parentNode.classList.remove("selected");
                    var newArr = this.selection["years"].filter(function (year) {
                        return year !== "All Years";
                    });
                    newArr.push(e.target.value);
                    this.selection["years"] = newArr;
                }
            } else if (e.target.checked === false) {
                this.selection = this.selection.filter(function (select) {
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
                years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
            } else {
                years = selections["years"];
            }
            this.result = {
                activities: activities,
                years: years,
                type: selections.type
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

            Create.yearSelector(this.updateYears, filter, "ev", ["All years", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

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
                years: years
            };
        }
    }, {
        key: 'updateYears',
        value: function updateYears(e) {
            e.preventDefault();
            if (e.target.checked) {
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
            selectionButton.innerText = "First Year Medical Resident";
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
            citation.innerText = "Data approximated from https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html";
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
    var margin = 10;

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

    processed_data.forEach(function (d) {
        d.percentage = d.value / 24;
    });

    var final_data = pie(processed_data);

    var arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

    var paths = svg.selectAll().data(final_data).enter().append('path');

    paths.each(function (d, i) {
        d3.select(this)
        // .style('fill', function (d) { return (COLORS[d.data.key]) })
        // .style('fill', 'gray')
        .classed('arcs', true).transition().duration(function (d) {
            return d.data.percentage * 3000;
        }).delay(function (d) {
            if (i === 0) {
                return 0;
            }
            return utils.arraySum(paths.nodes().slice(0, i).map(function (el) {
                return d3.select(el).data()[0].data.percentage;
            })) * 3000 - 200;
        }).attrTween('d', function (d) {
            var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            };
        });
    });
};

// .style("opacity", 0.9)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHBfYWNhZGVteV9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbXBsb3llZF9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZXJ5b25lX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jlc2lkZW50X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F0Y2guanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImNhdGVnb3J5U2VsZWN0b3IiLCJlbXBsb3llZFNlbGVjdG9ycyIsIkVtcGxveWVkU2VsZWN0b3JzIiwiYWRkU2VsZWN0b3JzIiwiZ2VuZGVyQ29tcCIsIkdlbmRlckNvbXAiLCJhZGRDb21wIiwiZXZlcnlvbmVTZWxlY3RvcnMiLCJFdmVyeW9uZVNlbGVjdG9ycyIsImRheUNvbXAiLCJEYXlDb21wIiwiYXBwQWNhZGVteVNlbGVjdG9yIiwiQXBwQWNhZGVteVNlbGVjdG9yIiwiYWRkU2VsZWN0b3IiLCJyZXNpZGVudFNlbGVjdG9yIiwiUmVzaWRlbnRTZWxlY3RvciIsImVtcGxveWVkIiwiZW1wbG95ZWREYXRhIiwiZW1wbG95ZWREYXRhRmlsdGVyIiwicmVzdWx0IiwiYWN0aXZpdGllcyIsImdlbmRlciIsInllYXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5kZXJEYXRhIiwiZ2VuZGVyQ29tcEZpbHRlciIsImFjdGl2aXR5IiwiZXZlcnlvbmUiLCJldmVyeW9uZURhdGEiLCJldmVyeW9uZURhdGFGaWx0ZXIiLCJ0eXBlIiwiZGF5IiwiZGF5RGF0YSIsImRheUNvbXBGaWx0ZXIiLCJhcHBhY2FkZW15IiwicmVzaWRlbnQiLCJhdHRhY2giLCJmaWx0ZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3Rpb25CdXR0b24iLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJjYXRlZ29yeU9wdGlvbiIsInZhbHVlIiwib3B0aW9uIiwic2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yIiwicmVtb3ZlIiwidGFyZ2V0IiwiQUNUSVZJVElFUyIsIkNPTE9SUyIsImFjdGl2aXR5U2VsZWN0b3IiLCJ1cGRhdGVBY3Rpdml0eSIsInByZWZpeCIsImFjdGl2aXR5TGFiZWwiLCJhY3Rpdml0eVNlbGVjdGlvbnMiLCJjb25jYXQiLCJzZWxlY3QiLCJpIiwiZGl2Iiwic3BhbiIsImFjdGl2aXR5T3B0aW9uIiwic2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsInllYXJTZWxlY3RvciIsInVwZGF0ZVllYXJzIiwieWVhcnNMYWJlbCIsInllYXJTZWxlY3Rpb25zIiwieWVhck9wdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImFjdGl2aXR5U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3Rpb25zIiwibGlzdCIsIk9iamVjdCIsImtleXMiLCJsaSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0dW0iLCJoZWlnaHQiLCJ3aWR0aCIsInAiLCJ0b0ZpeGVkIiwiQ3JlYXRlIiwic2VsZWN0aW9uIiwiYWxsIiwibmV3QXJyIiwieWVhciIsInB1c2giLCJ1cGRhdGVHZW5kZXIiLCJnZW5kZXJTZWxlY3RvciIsImNyZWF0ZVRleHROb2RlIiwiZ2VuZGVycyIsImdlbmRlck9wdGlvbiIsInVwZGF0ZVR5cGUiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlcyIsInR5cGVPcHRpb24iLCJjaXRhdGlvbiIsImFycmF5U3VtIiwiYXJyYXlBdmVyYWdlIiwiYXJyYXlNZXJnZSIsImFyciIsInN1bSIsImxlbmd0aCIsImFycmF5cyIsImZpbmFsIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwic3ViQXJyIiwiYWN0aXZpdHlGaWx0ZXIiLCJnZW5kZXJGaWx0ZXIiLCJtYXAiLCJmaW5hbERhdGEiLCJ5ZWFybHlGaWx0ZXIiLCJhbGxZZWFycyIsInZhbHVlcyIsInNvcnRlZCIsInNvcnQiLCJhIiwiYiIsInR5cGVGaWx0ZXIiLCJtZW5GaWx0ZXIiLCJ3b21lbkZpbHRlciIsIm1lblllYXJseUZpbHRlciIsImFsbE1lblllYXJzIiwibWVuRGF0YSIsIndvbWVuWWVhcmx5RmlsdGVyIiwiYWxsV29tZW5ZZWFycyIsIndvbWVuRGF0YSIsIm5vbkZpbHRlciIsImhvbGlGaWx0ZXIiLCJub25ZZWFybHlGaWx0ZXIiLCJhbGxOb25ZZWFycyIsIm5vbkRhdGEiLCJob2xpWWVhcmx5RmlsdGVyIiwiYWxsSG9saVllYXJzIiwiaG9saURhdGEiLCJtYXJnaW4iLCJkMyIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInBlcmNlbnRhZ2UiLCJmaW5hbF9kYXRhIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJlYWNoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJub2RlcyIsInNsaWNlIiwiZWwiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhpQjtBQVd4QixpQ0FBeUI7QUFDckIsb0JBQVEsR0FEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLEdBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYRDtBQW1CeEIsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQmUsS0FEQTtBQTZCNUIsMkJBQXVCO0FBQ25CLG9CQUFZLHFCQURPO0FBRW5CLG9CQUFZLEdBRk87QUFHbkIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhZO0FBV25CLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLElBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxJQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhOO0FBbUJuQixpQkFBUztBQUNMLG9CQUFRLElBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsSUFISDtBQUlMLG9CQUFRLElBSkg7QUFLTCxvQkFBUSxJQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5CVSxLQTdCSztBQXlENUIsNEJBQXdCO0FBQ3BCLG9CQUFZLHNCQURRO0FBRXBCLG9CQUFZLEdBRlE7QUFHcEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhhO0FBV3BCLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLElBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxJQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhMO0FBbUJwQixpQkFBUztBQUNMLG9CQUFRLElBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsSUFISDtBQUlMLG9CQUFRLENBSkg7QUFLTCxvQkFBUSxHQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5CVyxLQXpESTtBQXFGNUIscUNBQWlDO0FBQzdCLG9CQUFZLCtCQURpQjtBQUU3QixvQkFBWSxHQUZpQjtBQUc3QixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsSUFKTDtBQUtILG9CQUFRLEdBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSHNCO0FBVzdCLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLElBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxJQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhJO0FBbUI3QixpQkFBUztBQUNMLG9CQUFRLElBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsSUFISDtBQUlMLG9CQUFRLElBSkg7QUFLTCxvQkFBUSxJQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5Cb0IsS0FyRkw7QUFpSDVCLGdEQUE0QztBQUN4QyxvQkFBWSwwQ0FENEI7QUFFeEMsb0JBQVksR0FGNEI7QUFHeEMsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhpQztBQVd4QyxpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxHQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYZTtBQW1CeEMsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQitCLEtBakhoQjtBQTZJNUIsbURBQStDO0FBQzNDLG9CQUFZLDZDQUQrQjtBQUUzQyxvQkFBWSxHQUYrQjtBQUczQyxlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsR0FKTDtBQUtILG9CQUFRLEdBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSG9DO0FBVzNDLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLEdBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxHQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhrQjtBQW1CM0MsaUJBQVM7QUFDTCxvQkFBUSxHQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxHQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQmtDLEtBN0luQjtBQXlLNUIsMkNBQXVDO0FBQ25DLG9CQUFZLHFDQUR1QjtBQUVuQyxvQkFBWSxHQUZ1QjtBQUduQyxlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsSUFKTDtBQUtILG9CQUFRLElBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSDRCO0FBV25DLGlDQUF5QjtBQUNyQixvQkFBUSxJQURhO0FBRXJCLG9CQUFRLElBRmE7QUFHckIsb0JBQVEsSUFIYTtBQUlyQixvQkFBUSxJQUphO0FBS3JCLG9CQUFRLElBTGE7QUFNckIsb0JBQVE7QUFOYSxTQVhVO0FBbUJuQyxpQkFBUztBQUNMLG9CQUFRLElBREg7QUFFTCxvQkFBUSxJQUZIO0FBR0wsb0JBQVEsSUFISDtBQUlMLG9CQUFRLENBSkg7QUFLTCxvQkFBUSxJQUxIO0FBTUwsb0JBQVE7QUFOSDtBQW5CMEIsS0F6S1g7QUFxTTVCLDhCQUEwQjtBQUN0QixvQkFBWSx3QkFEVTtBQUV0QixvQkFBWSxHQUZVO0FBR3RCLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxHQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIZTtBQVd0QixpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYSDtBQW1CdEIsaUJBQVM7QUFDTCxvQkFBUSxHQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQmEsS0FyTUU7QUFpTzVCLHVEQUFtRDtBQUMvQyxvQkFBWSxpREFEbUM7QUFFL0Msb0JBQVksR0FGbUM7QUFHL0MsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxHQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUh3QztBQVcvQyxpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxHQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYc0I7QUFtQi9DLGlCQUFTO0FBQ0wsb0JBQVEsR0FESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxHQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLElBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJzQyxLQWpPdkI7QUE2UDVCLDBCQUFzQjtBQUNsQixvQkFBWSxvQkFETTtBQUVsQixvQkFBWSxHQUZNO0FBR2xCLGVBQU87QUFDSCxvQkFBUSxJQURMO0FBRUgsb0JBQVEsSUFGTDtBQUdILG9CQUFRLElBSEw7QUFJSCxvQkFBUSxJQUpMO0FBS0gsb0JBQVEsSUFMTDtBQU1ILG9CQUFRO0FBTkwsU0FIVztBQVdsQixpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYUDtBQW1CbEIsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQlMsS0E3UE07QUF5UjVCLHdDQUFvQztBQUNoQyxvQkFBWSxrQ0FEb0I7QUFFaEMsb0JBQVksR0FGb0I7QUFHaEMsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUh5QjtBQVdoQyxpQ0FBeUI7QUFDckIsb0JBQVEsSUFEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLElBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYTztBQW1CaEMsaUJBQVM7QUFDTCxvQkFBUSxJQURIO0FBRUwsb0JBQVEsSUFGSDtBQUdMLG9CQUFRLElBSEg7QUFJTCxvQkFBUSxJQUpIO0FBS0wsb0JBQVEsSUFMSDtBQU1MLG9CQUFRO0FBTkg7QUFuQnVCLEtBelJSO0FBcVQ1Qix3QkFBb0I7QUFDaEIsb0JBQVksa0JBREk7QUFFaEIsb0JBQVksR0FGSTtBQUdoQixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FBSUgsb0JBQVEsSUFKTDtBQUtILG9CQUFRLElBTEw7QUFNSCxvQkFBUTtBQU5MLFNBSFM7QUFXaEIsaUNBQXlCO0FBQ3JCLG9CQUFRLElBRGE7QUFFckIsb0JBQVEsSUFGYTtBQUdyQixvQkFBUSxJQUhhO0FBSXJCLG9CQUFRLElBSmE7QUFLckIsb0JBQVEsSUFMYTtBQU1yQixvQkFBUTtBQU5hLFNBWFQ7QUFtQmhCLGlCQUFTO0FBQ0wsb0JBQVEsSUFESDtBQUVMLG9CQUFRLElBRkg7QUFHTCxvQkFBUSxJQUhIO0FBSUwsb0JBQVEsSUFKSDtBQUtMLG9CQUFRLEdBTEg7QUFNTCxvQkFBUTtBQU5IO0FBbkJPO0FBclRRLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUMsd0NBQWdCO0FBQ3pCLGdDQUE0QjtBQUN4QixvQkFBWSwwQkFEWTtBQUV4QiwrQkFBdUI7QUFDbkIsb0JBQVEsR0FEVztBQUVuQixvQkFBUSxHQUZXO0FBR25CLG9CQUFRLEdBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLEdBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRkM7QUFleEIscUNBQTZCO0FBQ3pCLG9CQUFRLEtBRGlCO0FBRXpCLG9CQUFRLEtBRmlCO0FBR3pCLG9CQUFRLEtBSGlCO0FBSXpCLG9CQUFRLEtBSmlCO0FBS3pCLG9CQUFRLEtBTGlCO0FBTXpCLG9CQUFRLEtBTmlCO0FBT3pCLG9CQUFRLEtBUGlCO0FBUXpCLG9CQUFRLEtBUmlCO0FBU3pCLG9CQUFRLEtBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZkw7QUE0QnhCLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLElBRkE7QUFHUixvQkFBUSxLQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLElBTEE7QUFNUixvQkFBUSxLQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxJQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1QlksS0FESDtBQTJDekIsMkJBQXVCO0FBQ25CLG9CQUFZLHFCQURPO0FBRW5CLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLElBRlc7QUFHbkIsb0JBQVEsR0FIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsSUFUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGSjtBQWVuQixxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmVjtBQTRCbkIsb0JBQVk7QUFDUixvQkFBUSxLQURBO0FBRVIsb0JBQVEsS0FGQTtBQUdSLG9CQUFRLElBSEE7QUFJUixvQkFBUSxJQUpBO0FBS1Isb0JBQVEsSUFMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxJQVBBO0FBUVIsb0JBQVEsS0FSQTtBQVNSLG9CQUFRLEtBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCTyxLQTNDRTtBQXFGekIsNEJBQXdCO0FBQ3BCLG9CQUFZLHNCQURRO0FBRXBCLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLEdBRlc7QUFHbkIsb0JBQVEsSUFIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsSUFUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGSDtBQWVwQixxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsR0FWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmVDtBQTRCcEIsb0JBQVk7QUFDUixvQkFBUSxLQURBO0FBRVIsb0JBQVEsSUFGQTtBQUdSLG9CQUFRLElBSEE7QUFJUixvQkFBUSxLQUpBO0FBS1Isb0JBQVEsS0FMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxJQVBBO0FBUVIsb0JBQVEsS0FSQTtBQVNSLG9CQUFRLEtBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCUSxLQXJGQztBQStIekIscUNBQWlDO0FBQzdCLG9CQUFZLCtCQURpQjtBQUU3QiwrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLEdBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxHQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRk07QUFlN0IscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZkE7QUE0QjdCLG9CQUFZO0FBQ1Isb0JBQVEsSUFEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxLQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLEtBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxJQVRBO0FBVVIsb0JBQVEsSUFWQTtBQVdSLG9CQUFRO0FBWEE7QUE1QmlCLEtBL0hSO0FBeUt6QixnREFBNEM7QUFDeEMsb0JBQVksMENBRDRCO0FBRXhDLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLElBRlc7QUFHbkIsb0JBQVEsSUFIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsSUFUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGaUI7QUFleEMscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZlc7QUE0QnhDLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLEtBRkE7QUFHUixvQkFBUSxLQUhBO0FBSVIsb0JBQVEsSUFKQTtBQUtSLG9CQUFRLElBTEE7QUFNUixvQkFBUSxJQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxLQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1QjRCLEtBektuQjtBQW1OekIsbURBQStDO0FBQzNDLG9CQUFZLDZDQUQrQjtBQUUzQywrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLEdBSFc7QUFJbkIsb0JBQVEsR0FKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRm9CO0FBZTNDLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZjO0FBNEIzQyxvQkFBWTtBQUNSLG9CQUFRLElBREE7QUFFUixvQkFBUSxLQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLEtBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsSUFOQTtBQU9SLG9CQUFRLElBUEE7QUFRUixvQkFBUSxJQVJBO0FBU1Isb0JBQVEsSUFUQTtBQVVSLG9CQUFRLEtBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUIrQixLQW5OdEI7QUE2UHpCLDJDQUF1QztBQUNuQyxvQkFBWSxxQ0FEdUI7QUFFbkMsK0JBQXVCO0FBQ25CLG9CQUFRLElBRFc7QUFFbkIsb0JBQVEsR0FGVztBQUduQixvQkFBUSxHQUhXO0FBSW5CLG9CQUFRLElBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxJQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsSUFSVztBQVNuQixvQkFBUSxHQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZZO0FBZW5DLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZNO0FBNEJuQyxvQkFBWTtBQUNSLG9CQUFRLElBREE7QUFFUixvQkFBUSxJQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLEtBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsSUFOQTtBQU9SLG9CQUFRLElBUEE7QUFRUixvQkFBUSxLQVJBO0FBU1Isb0JBQVEsSUFUQTtBQVVSLG9CQUFRLEtBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUJ1QixLQTdQZDtBQXVTekIsOEJBQTBCO0FBQ3RCLG9CQUFZLHdCQURVO0FBRXRCLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLElBRlc7QUFHbkIsb0JBQVEsR0FIVztBQUluQixvQkFBUSxHQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsR0FOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsR0FUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGRDtBQWV0QixxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsR0FMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsR0FWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmUDtBQTRCdEIsb0JBQVk7QUFDUixvQkFBUSxLQURBO0FBRVIsb0JBQVEsS0FGQTtBQUdSLG9CQUFRLElBSEE7QUFJUixvQkFBUSxJQUpBO0FBS1Isb0JBQVEsS0FMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxLQVBBO0FBUVIsb0JBQVEsS0FSQTtBQVNSLG9CQUFRLEtBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCVSxLQXZTRDtBQWlWekIsdURBQW1EO0FBQy9DLG9CQUFZLGlEQURtQztBQUUvQywrQkFBdUI7QUFDbkIsb0JBQVEsSUFEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsSUFKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxJQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsSUFWVztBQVduQixvQkFBUTtBQVhXLFNBRndCO0FBZS9DLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxJQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxJQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZrQjtBQTRCL0Msb0JBQVk7QUFDUixvQkFBUSxJQURBO0FBRVIsb0JBQVEsS0FGQTtBQUdSLG9CQUFRLElBSEE7QUFJUixvQkFBUSxJQUpBO0FBS1Isb0JBQVEsS0FMQTtBQU1SLG9CQUFRLElBTkE7QUFPUixvQkFBUSxJQVBBO0FBUVIsb0JBQVEsS0FSQTtBQVNSLG9CQUFRLElBVEE7QUFVUixvQkFBUSxLQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCbUMsS0FqVjFCO0FBMlh6QiwwQkFBc0I7QUFDbEIsb0JBQVksb0JBRE07QUFFbEIsK0JBQXVCO0FBQ25CLG9CQUFRLElBRFc7QUFFbkIsb0JBQVEsSUFGVztBQUduQixvQkFBUSxJQUhXO0FBSW5CLG9CQUFRLElBSlc7QUFLbkIsb0JBQVEsSUFMVztBQU1uQixvQkFBUSxJQU5XO0FBT25CLG9CQUFRLElBUFc7QUFRbkIsb0JBQVEsSUFSVztBQVNuQixvQkFBUSxJQVRXO0FBVW5CLG9CQUFRLElBVlc7QUFXbkIsb0JBQVE7QUFYVyxTQUZMO0FBZWxCLHFDQUE2QjtBQUN6QixvQkFBUSxJQURpQjtBQUV6QixvQkFBUSxJQUZpQjtBQUd6QixvQkFBUSxHQUhpQjtBQUl6QixvQkFBUSxJQUppQjtBQUt6QixvQkFBUSxJQUxpQjtBQU16QixvQkFBUSxJQU5pQjtBQU96QixvQkFBUSxHQVBpQjtBQVF6QixvQkFBUSxJQVJpQjtBQVN6QixvQkFBUSxJQVRpQjtBQVV6QixvQkFBUSxJQVZpQjtBQVd6QixvQkFBUTtBQVhpQixTQWZYO0FBNEJsQixvQkFBWTtBQUNSLG9CQUFRLElBREE7QUFFUixvQkFBUSxJQUZBO0FBR1Isb0JBQVEsS0FIQTtBQUlSLG9CQUFRLEtBSkE7QUFLUixvQkFBUSxJQUxBO0FBTVIsb0JBQVEsR0FOQTtBQU9SLG9CQUFRLEtBUEE7QUFRUixvQkFBUSxJQVJBO0FBU1Isb0JBQVEsS0FUQTtBQVVSLG9CQUFRLElBVkE7QUFXUixvQkFBUTtBQVhBO0FBNUJNLEtBM1hHO0FBcWF6Qix3Q0FBb0M7QUFDaEMsb0JBQVksa0NBRG9CO0FBRWhDLCtCQUF1QjtBQUNuQixvQkFBUSxJQURXO0FBRW5CLG9CQUFRLEdBRlc7QUFHbkIsb0JBQVEsSUFIVztBQUluQixvQkFBUSxJQUpXO0FBS25CLG9CQUFRLElBTFc7QUFNbkIsb0JBQVEsSUFOVztBQU9uQixvQkFBUSxJQVBXO0FBUW5CLG9CQUFRLElBUlc7QUFTbkIsb0JBQVEsSUFUVztBQVVuQixvQkFBUSxJQVZXO0FBV25CLG9CQUFRO0FBWFcsU0FGUztBQWVoQyxxQ0FBNkI7QUFDekIsb0JBQVEsSUFEaUI7QUFFekIsb0JBQVEsSUFGaUI7QUFHekIsb0JBQVEsSUFIaUI7QUFJekIsb0JBQVEsSUFKaUI7QUFLekIsb0JBQVEsSUFMaUI7QUFNekIsb0JBQVEsSUFOaUI7QUFPekIsb0JBQVEsSUFQaUI7QUFRekIsb0JBQVEsSUFSaUI7QUFTekIsb0JBQVEsSUFUaUI7QUFVekIsb0JBQVEsSUFWaUI7QUFXekIsb0JBQVE7QUFYaUIsU0FmRztBQTRCaEMsb0JBQVk7QUFDUixvQkFBUSxLQURBO0FBRVIsb0JBQVEsS0FGQTtBQUdSLG9CQUFRLElBSEE7QUFJUixvQkFBUSxLQUpBO0FBS1Isb0JBQVEsS0FMQTtBQU1SLG9CQUFRLEtBTkE7QUFPUixvQkFBUSxLQVBBO0FBUVIsb0JBQVEsSUFSQTtBQVNSLG9CQUFRLEtBVEE7QUFVUixvQkFBUSxJQVZBO0FBV1Isb0JBQVE7QUFYQTtBQTVCb0IsS0FyYVg7QUErY3pCLHdCQUFvQjtBQUNoQixvQkFBWSxrQkFESTtBQUVoQiwrQkFBdUI7QUFDbkIsb0JBQVEsR0FEVztBQUVuQixvQkFBUSxJQUZXO0FBR25CLG9CQUFRLElBSFc7QUFJbkIsb0JBQVEsR0FKVztBQUtuQixvQkFBUSxJQUxXO0FBTW5CLG9CQUFRLElBTlc7QUFPbkIsb0JBQVEsSUFQVztBQVFuQixvQkFBUSxHQVJXO0FBU25CLG9CQUFRLElBVFc7QUFVbkIsb0JBQVEsR0FWVztBQVduQixvQkFBUTtBQVhXLFNBRlA7QUFlaEIscUNBQTZCO0FBQ3pCLG9CQUFRLElBRGlCO0FBRXpCLG9CQUFRLElBRmlCO0FBR3pCLG9CQUFRLElBSGlCO0FBSXpCLG9CQUFRLElBSmlCO0FBS3pCLG9CQUFRLElBTGlCO0FBTXpCLG9CQUFRLElBTmlCO0FBT3pCLG9CQUFRLElBUGlCO0FBUXpCLG9CQUFRLElBUmlCO0FBU3pCLG9CQUFRLElBVGlCO0FBVXpCLG9CQUFRLElBVmlCO0FBV3pCLG9CQUFRO0FBWGlCLFNBZmI7QUE0QmhCLG9CQUFZO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLG9CQUFRLElBRkE7QUFHUixvQkFBUSxLQUhBO0FBSVIsb0JBQVEsS0FKQTtBQUtSLG9CQUFRLElBTEE7QUFNUixvQkFBUSxLQU5BO0FBT1Isb0JBQVEsS0FQQTtBQVFSLG9CQUFRLEtBUkE7QUFTUixvQkFBUSxJQVRBO0FBVVIsb0JBQVEsS0FWQTtBQVdSLG9CQUFRO0FBWEE7QUE1Qkk7QUEvY0ssQ0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7O0FBRUEsSUFBTUMsTUFBTSxJQUFJQyxhQUFKLEVBQVo7QUFDQUQsSUFBSUUsTUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUdNRCxHO0FBQ0YsbUJBQWM7QUFBQTs7QUFDVixhQUFLRSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0g7Ozs7NkJBRUlDLEksRUFBTTtBQUNQLGdCQUFNQyxNQUFNQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQSxnQkFBTUMsVUFBVUYsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBaEI7QUFDQSxnQkFBSUYsR0FBSixFQUFTO0FBQUVBLG9CQUFJSSxVQUFKLENBQWVDLFdBQWYsQ0FBMkJMLEdBQTNCO0FBQWtDO0FBQzdDLGdCQUFJRyxPQUFKLEVBQWE7QUFBRUEsd0JBQVFDLFVBQVIsQ0FBbUJDLFdBQW5CLENBQStCRixPQUEvQjtBQUEwQztBQUN6RCxpQ0FBTUosSUFBTjtBQUNBLHdDQUFZQSxJQUFaO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFNTyxRQUFRLElBQUlDLGVBQUosRUFBZDs7QUFFQSxnQkFBTUMsbUJBQW1CLGtDQUF6Qjs7QUFFQSxnQkFBTUMsb0JBQW9CLElBQUlDLDRCQUFKLEVBQTFCO0FBQ0FELDhCQUFrQkUsWUFBbEI7QUFDQSxnQkFBTUMsYUFBYSxJQUFJQyxxQkFBSixFQUFuQjtBQUNBRCx1QkFBV0UsT0FBWDtBQUNBLGdCQUFNQyxvQkFBb0IsSUFBSUMsNEJBQUosRUFBMUI7QUFDQUQsOEJBQWtCSixZQUFsQjtBQUNBLGdCQUFNTSxVQUFVLElBQUlDLGtCQUFKLEVBQWhCO0FBQ0FELG9CQUFRSCxPQUFSO0FBQ0EsZ0JBQU1LLHFCQUFxQixJQUFJQyw4QkFBSixFQUEzQjtBQUNBRCwrQkFBbUJFLFdBQW5CO0FBQ0EsZ0JBQU1DLG1CQUFtQixJQUFJQywyQkFBSixFQUF6QjtBQUNBRCw2QkFBaUJELFdBQWpCOztBQUVBO0FBQ0EsZ0JBQU1HLFdBQVd2QixTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsZ0JBQU11QixlQUFlbkIsTUFBTW9CLGtCQUFOLENBQXlCakIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJDLFVBQWxELEVBQ2pCbkIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJFLE1BRFIsRUFFakJwQixrQkFBa0JrQixNQUFsQixDQUF5QkcsS0FGUixFQUdqQnRDLDRDQUhpQixDQUFyQjtBQUlBLGlCQUFLSyxJQUFMLENBQVU0QixZQUFWOztBQUVBRCxxQkFBU08sZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsYUFBSztBQUNwQ0Msa0JBQUVDLGVBQUY7QUFDQSxvQkFBTVIsZUFBZW5CLE1BQU1vQixrQkFBTixDQUF5QmpCLGtCQUFrQmtCLE1BQWxCLENBQXlCQyxVQUFsRCxFQUNqQm5CLGtCQUFrQmtCLE1BQWxCLENBQXlCRSxNQURSLEVBRWpCcEIsa0JBQWtCa0IsTUFBbEIsQ0FBeUJHLEtBRlIsRUFHakJ0Qyw0Q0FIaUIsQ0FBckI7QUFJQSxzQkFBS0ssSUFBTCxDQUFVNEIsWUFBVjtBQUNILGFBUEQ7O0FBU0E7QUFDQSxnQkFBTUksU0FBUzVCLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZjtBQUNBMkIsbUJBQU9FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLGFBQUs7QUFDbENDLGtCQUFFQyxlQUFGO0FBQ0Esb0JBQU1DLGFBQWE1QixNQUFNNkIsZ0JBQU4sQ0FBdUJ2QixXQUFXZSxNQUFYLENBQWtCUyxRQUF6QyxFQUNmeEIsV0FBV2UsTUFBWCxDQUFrQkcsS0FESCxFQUVmdEMsNENBRmUsQ0FBbkI7O0FBSUEsc0JBQUtLLElBQUwsQ0FBVXFDLFVBQVY7QUFDSCxhQVBEOztBQVNBO0FBQ0EsZ0JBQU1HLFdBQVdwQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0FtQyxxQkFBU04sZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsYUFBSztBQUNwQ0Msa0JBQUVDLGVBQUY7QUFDQSxvQkFBTUssZUFBZWhDLE1BQU1pQyxrQkFBTixDQUF5QnhCLGtCQUFrQlksTUFBbEIsQ0FBeUJDLFVBQWxELEVBQ2pCYixrQkFBa0JZLE1BQWxCLENBQXlCYSxJQURSLEVBRWpCekIsa0JBQWtCWSxNQUFsQixDQUF5QkcsS0FGUixFQUdqQnJDLGtDQUhpQixDQUFyQjtBQUlBLHNCQUFLSSxJQUFMLENBQVV5QyxZQUFWO0FBQ0gsYUFQRDs7QUFTQTtBQUNBLGdCQUFNRyxNQUFNeEMsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFaO0FBQ0F1QyxnQkFBSVYsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsYUFBSztBQUMvQkMsa0JBQUVDLGVBQUY7QUFDQSxvQkFBTVMsVUFBVXBDLE1BQU1xQyxhQUFOLENBQW9CMUIsUUFBUVUsTUFBUixDQUFlUyxRQUFuQyxFQUNabkIsUUFBUVUsTUFBUixDQUFlRyxLQURILEVBRVpyQyxrQ0FGWSxDQUFoQjtBQUdBLHNCQUFLSSxJQUFMLENBQVU2QyxPQUFWO0FBQ0gsYUFORDs7QUFRQTtBQUNBLGdCQUFNRSxhQUFhM0MsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbkI7QUFDQTBDLHVCQUFXYixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxhQUFLO0FBQ3RDQyxrQkFBRUMsZUFBRjtBQUNBLHNCQUFLcEMsSUFBTCxDQUFVc0IsbUJBQW1CcEIsSUFBN0I7QUFDSCxhQUhEOztBQUtBO0FBQ0EsZ0JBQU04QyxXQUFXNUMsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBMkMscUJBQVNkLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLGFBQUs7QUFDcENDLGtCQUFFQyxlQUFGO0FBQ0Esc0JBQUtwQyxJQUFMLENBQVV5QixpQkFBaUJ2QixJQUEzQjtBQUNILGFBSEQ7QUFJSDs7Ozs7O2tCQUdVSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0dUeUIsa0I7QUFDRixrQ0FBYztBQUFBOztBQUNWLGFBQUtyQixJQUFMLEdBQVksRUFBWjtBQUNIOzs7O3NDQUVhO0FBQUE7O0FBQ1YsZ0JBQU0rQyxTQUFTN0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNNkMsU0FBUzlDLFNBQVMrQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixRQUEvQjs7QUFFQSxnQkFBTUMsa0JBQWtCbkQsU0FBUytDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJHLGVBQW5CO0FBQ0FBLDRCQUFnQkYsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGlCQUE5QixFQUFpRCxjQUFqRDtBQUNBQyw0QkFBZ0JDLFNBQWhCLEdBQTRCLHFCQUE1QjtBQUNBRCw0QkFBZ0JyQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsYUFBSztBQUMzQ0Msa0JBQUVzQixjQUFGO0FBQ0Esc0JBQUt2RCxJQUFMLEdBQVk7QUFDUiwyREFBdUMsSUFEL0I7QUFFUixnREFBNEIsQ0FGcEI7QUFHUiw0Q0FBd0IsR0FIaEI7QUFJUiwyQ0FBdUIsQ0FKZjtBQUtSLG1FQUErQyxHQUx2QztBQU1SLHFEQUFpQyxHQU56QjtBQU9SLGdFQUE0QyxHQVBwQztBQVFSLHdEQUFvQyxHQVI1QjtBQVNSLDBDQUFzQixHQVRkO0FBVVIsd0NBQW9CLEdBVlo7QUFXUiw4Q0FBMEIsQ0FYbEI7QUFZUix1RUFBbUQ7QUFaM0MsaUJBQVo7QUFjSCxhQWhCRDs7QUFrQkEsZ0JBQU13RCxjQUFjdEQsU0FBUytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJNLFdBQW5CO0FBQ0FBLHdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixhQUExQjtBQUNBSSx3QkFBWUYsU0FBWixHQUF3QixpQ0FBeEI7QUFDSDs7Ozs7O2tCQUdVakMsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkN6Q0EsWUFBTTtBQUNqQixRQUFNMEIsU0FBUzdDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjs7QUFFQSxRQUFNTSxtQkFBbUJQLFNBQVMrQyxhQUFULENBQXVCLFFBQXZCLENBQXpCO0FBQ0F4QyxxQkFBaUIwQyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsaUJBQS9CO0FBQ0FMLFdBQU9HLFdBQVAsQ0FBbUJ6QyxnQkFBbkI7O0FBRUEsUUFBTWdELGFBQWEsQ0FBQyxvQkFBRCxFQUNDLG1CQURELEVBRUMsaUJBRkQsRUFHQyxnQkFIRCxFQUlDLHFCQUpELEVBS0MsNkJBTEQsQ0FBbkI7O0FBT0FBLGVBQVdDLE9BQVgsQ0FBb0Isa0JBQVU7QUFDMUIsWUFBTUMsaUJBQWlCekQsU0FBUytDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFDQVUsdUJBQWVSLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCO0FBQ0FPLHVCQUFlQyxLQUFmLEdBQXVCQyxNQUF2QjtBQUNBRix1QkFBZUwsU0FBZixHQUEyQk8sTUFBM0I7QUFDQXBELHlCQUFpQnlDLFdBQWpCLENBQTZCUyxjQUE3QjtBQUNILEtBTkQ7O0FBUUFsRCxxQkFBaUJ1QixnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEMsYUFBSztBQUM3Q0MsVUFBRXNCLGNBQUY7QUFDQSxZQUFNTyxZQUFZNUQsU0FBUzZELGdCQUFULENBQTBCLGdCQUExQixDQUFsQjtBQUNBRCxrQkFBVUosT0FBVixDQUFrQjtBQUFBLG1CQUFZTSxTQUFTYixTQUFULENBQW1CYyxNQUFuQixDQUEwQixTQUExQixDQUFaO0FBQUEsU0FBbEI7QUFDQSxnQkFBUWhDLEVBQUVpQyxNQUFGLENBQVNOLEtBQWpCO0FBQ0ksaUJBQUssb0JBQUw7QUFDSSxvQkFBTW5DLFdBQVd2QixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWpCO0FBQ0FzQix5QkFBUzBCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0E7QUFDSixpQkFBSyxtQkFBTDtBQUNJLG9CQUFNdEIsU0FBUzVCLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBMkIsdUJBQU9xQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixTQUFyQjtBQUNBO0FBQ0osaUJBQUssaUJBQUw7QUFDSSxvQkFBTWQsV0FBV3BDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQW1DLHlCQUFTYSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNBO0FBQ0osaUJBQUssZ0JBQUw7QUFDSSxvQkFBTVYsTUFBTXhDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBdUMsb0JBQUlTLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBO0FBQ0osaUJBQUsscUJBQUw7QUFDSSxvQkFBTXpELE1BQU1PLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtBQUNBUixvQkFBSXdELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBO0FBQ0osaUJBQUssNkJBQUw7QUFDSSxvQkFBTU4sV0FBVzVDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQTJDLHlCQUFTSyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixTQUF2QjtBQUNBO0FBQ0o7QUFDSTtBQTFCUjtBQTRCSCxLQWhDRDtBQWtDSCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hETSxJQUFNZSxrQ0FBYSxDQUN0QiwwQkFEc0IsRUFFdEIscUJBRnNCLEVBR3RCLHNCQUhzQixFQUl0QiwrQkFKc0IsRUFLdEIsMENBTHNCLEVBTXRCLDZDQU5zQixFQU90QixxQ0FQc0IsRUFRdEIsd0JBUnNCLEVBU3RCLGlEQVRzQixFQVV0QixvQkFWc0IsRUFXdEIsa0NBWHNCLEVBWXRCLGtCQVpzQixDQUFuQjs7QUFlQSxJQUFNQywwQkFBUztBQUNsQixnQ0FBNEIsS0FEVjtBQUVsQiwyQkFBdUIsUUFGTDtBQUdsQiw0QkFBd0IsUUFITjtBQUlsQixxQ0FBaUMsT0FKZjtBQUtsQixnREFBNEMsTUFMMUI7QUFNbEIsbURBQStDLFFBTjdCO0FBT2xCLDJDQUF1QyxRQVByQjtBQVFsQiw4QkFBMEIsTUFSUjtBQVNsQix1REFBbUQsT0FUakM7QUFVbEIsMEJBQXNCLE1BVko7QUFXbEIsd0NBQW9DLFlBWGxCO0FBWWxCLHdCQUFvQixTQVpGO0FBYWxCLFdBQU8sTUFiVztBQWNsQixhQUFTLEtBZFM7QUFlbEIsMkJBQXVCLE9BZkw7QUFnQmxCLGlDQUE2QjtBQWhCWCxDQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmUDs7QUFFTyxJQUFNQyw4Q0FBbUIsMEJBQUNDLGNBQUQsRUFBaUJ0QixNQUFqQixFQUF5QnVCLE1BQXpCLEVBQW9DO0FBQ2hFLFFBQU1GLG1CQUFtQm5FLFNBQVMrQyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0FELFdBQU9FLFdBQVAsQ0FBbUJtQixnQkFBbkI7QUFDQUEscUJBQWlCbEIsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLFdBQS9CO0FBQ0EsUUFBTW9CLGdCQUFnQnRFLFNBQVMrQyxhQUFULENBQXVCLE9BQXZCLENBQXRCO0FBQ0F1QixrQkFBY2xCLFNBQWQsR0FBMEIsWUFBMUI7QUFDQWUscUJBQWlCbkIsV0FBakIsQ0FBNkJzQixhQUE3Qjs7QUFFQSxRQUFNQyxxQkFBcUIsQ0FBQyxnQkFBRCxFQUFtQkMsTUFBbkIsQ0FBMEJQLHFCQUExQixDQUEzQjtBQUNBTSx1QkFBbUJmLE9BQW5CLENBQTJCLFVBQUNpQixNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN0QyxZQUFNQyxNQUFNM0UsU0FBUytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQUkyQixNQUFNLENBQVYsRUFBYTtBQUFFQyxnQkFBSTFCLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixVQUFsQjtBQUErQjtBQUM5Q2lCLHlCQUFpQm5CLFdBQWpCLENBQTZCMkIsR0FBN0I7QUFDQSxZQUFNQyxPQUFPNUUsU0FBUytDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBNkIsYUFBS3hCLFNBQUwsR0FBaUJxQixNQUFqQjtBQUNBLFlBQU1JLGlCQUFpQjdFLFNBQVMrQyxhQUFULENBQXVCLE9BQXZCLENBQXZCO0FBQ0E4Qix1QkFBZW5CLEtBQWYsR0FBdUJlLE1BQXZCO0FBQ0FJLHVCQUFlQyxZQUFmLENBQTRCLE1BQTVCLEVBQW9DLFVBQXBDO0FBQ0EsWUFBSUwsV0FBVyxnQkFBZixFQUFpQztBQUM3QkksMkJBQWVFLE9BQWYsR0FBeUIsSUFBekI7QUFDQUYsMkJBQWVDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBcUNULE1BQXJDO0FBQ0gsU0FIRCxNQUdPO0FBQ0hRLDJCQUFlQyxZQUFmLENBQTRCLElBQTVCLEVBQXFDVCxNQUFyQztBQUNIO0FBQ0RNLFlBQUkzQixXQUFKLENBQWdCNkIsY0FBaEI7QUFDQUYsWUFBSTNCLFdBQUosQ0FBZ0I0QixJQUFoQjtBQUNILEtBakJEO0FBa0JBVCxxQkFBaUJyQyxnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNENzQyxjQUE1QztBQUNILENBNUJNOztBQThCQSxJQUFNWSxzQ0FBZSxzQkFBQ0MsV0FBRCxFQUFjbkMsTUFBZCxFQUFzQnVCLE1BQXRCLEVBQThCeEMsS0FBOUIsRUFBd0M7QUFDaEUsUUFBTW1ELGVBQWVoRixTQUFTK0MsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CZ0MsWUFBbkI7QUFDQUEsaUJBQWEvQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixXQUEzQjtBQUNBLFFBQU1nQyxhQUFhbEYsU0FBUytDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQW1DLGVBQVc5QixTQUFYLEdBQXVCLE9BQXZCO0FBQ0E0QixpQkFBYWhDLFdBQWIsQ0FBeUJrQyxVQUF6Qjs7QUFFQSxRQUFNQyxpQkFBaUJ0RCxLQUF2QjtBQUNBc0QsbUJBQWUzQixPQUFmLENBQXVCLFVBQUNpQixNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNsQyxZQUFNQyxNQUFNM0UsU0FBUytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQUkyQixNQUFNLENBQVYsRUFBYTtBQUFFQyxnQkFBSTFCLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixVQUFsQjtBQUErQjtBQUM5QzhCLHFCQUFhaEMsV0FBYixDQUF5QjJCLEdBQXpCO0FBQ0EsWUFBTUMsT0FBTzVFLFNBQVMrQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQTZCLGFBQUt4QixTQUFMLEdBQWlCcUIsTUFBakI7QUFDQSxZQUFNVyxhQUFhcEYsU0FBUytDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQXFDLG1CQUFXMUIsS0FBWCxHQUFtQmUsTUFBbkI7QUFDQVcsbUJBQVdOLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBaEM7QUFDQSxZQUFJTCxXQUFXLFdBQWYsRUFBNEI7QUFDeEJXLHVCQUFXTCxPQUFYLEdBQXFCLElBQXJCO0FBQ0FLLHVCQUFXTixZQUFYLENBQXdCLElBQXhCLEVBQWlDVCxNQUFqQztBQUNILFNBSEQsTUFHTztBQUNIZSx1QkFBV04sWUFBWCxDQUF3QixJQUF4QixFQUFpQ1QsTUFBakM7QUFDSDtBQUNETSxZQUFJM0IsV0FBSixDQUFnQm9DLFVBQWhCO0FBQ0FULFlBQUkzQixXQUFKLENBQWdCNEIsSUFBaEI7QUFDSCxLQWpCRDtBQWtCQUksaUJBQWFsRCxnQkFBYixDQUE4QixRQUE5QixFQUF3Q21ELFdBQXhDO0FBQ0gsQ0E1Qk07O0FBOEJBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsWUFBRCxFQUFleEMsTUFBZixFQUF1QnVCLE1BQXZCLEVBQWtDO0FBQzFELFFBQU1sQixrQkFBa0JuRCxTQUFTK0MsYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CRyxlQUFuQjtBQUNBQSxvQkFBZ0JGLFNBQWhCLENBQTBCQyxHQUExQixDQUFpQ21CLE1BQWpDLFdBQStDLGNBQS9DO0FBQ0FsQixvQkFBZ0JDLFNBQWhCLEdBQTRCLGtCQUE1QjtBQUNBRCxvQkFBZ0JyQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEN3RCxZQUExQztBQUNILENBTk07O0FBUUEsSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDbkIsY0FBRCxFQUFpQnRCLE1BQWpCLEVBQTRCO0FBQ3RELFFBQU1xQixtQkFBbUJuRSxTQUFTK0MsYUFBVCxDQUF1QixRQUF2QixDQUF6QjtBQUNBRCxXQUFPRSxXQUFQLENBQW1CbUIsZ0JBQW5CO0FBQ0FBLHFCQUFpQmxCLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixXQUEvQjs7QUFFQSxRQUFNc0MsY0FBY3hGLFNBQVMrQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0F5QyxnQkFBWXBDLFNBQVosR0FBd0Isb0JBQXhCO0FBQ0FlLHFCQUFpQm5CLFdBQWpCLENBQTZCd0MsV0FBN0I7QUFDQUEsZ0JBQVlWLFlBQVosQ0FBeUIsVUFBekIsRUFBcUMsSUFBckM7O0FBR0EsUUFBTVcsYUFBYXhCLHFCQUFuQjtBQUNBd0IsZUFBV2pDLE9BQVgsQ0FBbUIsa0JBQVU7QUFDekIsWUFBTXFCLGlCQUFpQjdFLFNBQVMrQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0E4Qix1QkFBZW5CLEtBQWYsR0FBdUJlLE1BQXZCO0FBQ0FJLHVCQUFlekIsU0FBZixHQUEyQnFCLE1BQTNCO0FBQ0FOLHlCQUFpQm5CLFdBQWpCLENBQTZCNkIsY0FBN0I7QUFDSCxLQUxEO0FBTUFWLHFCQUFpQnJDLGdCQUFqQixDQUFrQyxRQUFsQyxFQUE0Q3NDLGNBQTVDO0FBQ0gsQ0FuQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVQOztrQkFFZSxVQUFDdEUsSUFBRCxFQUFVO0FBQ3JCLFFBQU1JLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBaEI7QUFDQSxRQUFNeUYsT0FBTzFGLFNBQVMrQyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQTdDLFlBQVE4QyxXQUFSLENBQW9CMEMsSUFBcEI7O0FBRUFDLFdBQU9DLElBQVAsQ0FBWTlGLElBQVosRUFBa0IwRCxPQUFsQixDQUEyQixpQkFBUztBQUNoQyxZQUFNcUMsS0FBSzdGLFNBQVMrQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQTJDLGFBQUsxQyxXQUFMLENBQWlCNkMsRUFBakI7QUFDQSxZQUFNbEIsTUFBTTNFLFNBQVMrQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQThDLFdBQUc3QyxXQUFILENBQWUyQixHQUFmO0FBQ0FBLFlBQUltQixLQUFKLENBQVVDLGVBQVYsR0FBNEI3QixrQkFBTzhCLEtBQVAsQ0FBNUI7QUFDQXJCLFlBQUltQixLQUFKLENBQVVHLE1BQVYsR0FBbUIsTUFBbkI7QUFDQXRCLFlBQUltQixLQUFKLENBQVVJLEtBQVYsR0FBa0IsTUFBbEI7QUFDQSxZQUFNQyxJQUFJbkcsU0FBUytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBb0QsVUFBRS9DLFNBQUYsR0FBYzRDLFFBQVEsS0FBUixHQUFnQmxHLEtBQUtrRyxLQUFMLEVBQVlJLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBOUI7QUFDQVAsV0FBRzdDLFdBQUgsQ0FBZW1ELENBQWY7QUFDSCxLQVhEO0FBY0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7O0FBQ0E7O0lBQVlFLE07Ozs7OztJQUdOcEYsTztBQUNGLHVCQUFjO0FBQUE7O0FBQ1YsYUFBS21ELGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQnZFLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsYUFBS29GLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnBGLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsYUFBS3lGLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnpGLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsYUFBS3lHLFNBQUwsR0FBaUI7QUFDYm5FLHNCQUFVLDBCQURHO0FBRWJOLG1CQUFPLENBQUMsV0FBRDtBQUZNLFNBQWpCO0FBSUg7Ozs7dUNBRWNFLEMsRUFBRztBQUNkLGlCQUFLdUUsU0FBTCxDQUFlbkUsUUFBZixHQUEwQkosRUFBRWlDLE1BQUYsQ0FBU04sS0FBbkM7QUFDSDs7O29DQUVXM0IsQyxFQUFHO0FBQ1hBLGNBQUVzQixjQUFGO0FBQ0EsZ0JBQUl0QixFQUFFaUMsTUFBRixDQUFTZSxPQUFiLEVBQXNCO0FBQ2xCLG9CQUFJaEQsRUFBRWlDLE1BQUYsQ0FBU04sS0FBVCxLQUFtQixXQUF2QixFQUFvQztBQUNoQzFELDZCQUFTNkQsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNMLE9BQTNDLENBQW1ELGtCQUFVO0FBQUVHLCtCQUFPb0IsT0FBUCxHQUFpQixLQUFqQixDQUF3QnBCLE9BQU94RCxVQUFQLENBQWtCOEMsU0FBbEIsQ0FBNEJjLE1BQTVCLENBQW1DLFVBQW5DO0FBQWdELHFCQUF2STtBQUNBLHlCQUFLdUMsU0FBTCxDQUFlLE9BQWYsSUFBMEIsQ0FBQyxXQUFELENBQTFCO0FBQ0gsaUJBSEQsTUFHTztBQUNILHdCQUFNQyxNQUFNdkcsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBWjtBQUNBc0csd0JBQUl4QixPQUFKLEdBQWMsS0FBZDtBQUNBd0Isd0JBQUlwRyxVQUFKLENBQWU4QyxTQUFmLENBQXlCYyxNQUF6QixDQUFnQyxVQUFoQztBQUNBLHdCQUFNeUMsU0FBUyxLQUFLRixTQUFMLENBQWUsT0FBZixFQUF3QnhELE1BQXhCLENBQStCLGdCQUFRO0FBQUUsK0JBQU8yRCxTQUFTLFdBQWhCO0FBQTZCLHFCQUF0RSxDQUFmO0FBQ0FELDJCQUFPRSxJQUFQLENBQVkzRSxFQUFFaUMsTUFBRixDQUFTTixLQUFyQjtBQUNBLHlCQUFLNEMsU0FBTCxDQUFlLE9BQWYsSUFBMEJFLE1BQTFCO0FBQ0g7QUFDSixhQVpELE1BWU8sSUFBSXpFLEVBQUVpQyxNQUFGLENBQVNlLE9BQVQsS0FBcUIsS0FBekIsRUFBZ0M7QUFDbkMscUJBQUt1QixTQUFMLENBQWUsT0FBZixJQUEwQixLQUFLQSxTQUFMLENBQWUsT0FBZixFQUF3QnhELE1BQXhCLENBQStCLGtCQUFVO0FBQUUsMkJBQU8yQixXQUFXMUMsRUFBRWlDLE1BQUYsQ0FBU04sS0FBM0I7QUFBa0MsaUJBQTdFLENBQTFCO0FBQ0g7QUFDSjs7O3FDQUVZM0IsQyxFQUFHO0FBQ1pBLGNBQUVzQixjQUFGO0FBQ0EsZ0JBQU1vQyxhQUFhLEtBQUthLFNBQXhCO0FBQ0EsZ0JBQUl6RSxjQUFKO0FBQ0EsZ0JBQUk0RCxXQUFXNUQsS0FBWCxDQUFpQixDQUFqQixNQUF3QixXQUE1QixFQUF5QztBQUNyQ0Esd0JBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxFQUFpRixNQUFqRixDQUFSO0FBQ0gsYUFGRCxNQUVPO0FBQ0hBLHdCQUFRNEQsV0FBVyxPQUFYLENBQVI7QUFDSDs7QUFFRCxpQkFBSy9ELE1BQUwsR0FBYztBQUNWUywwQkFBVSxLQUFLbUUsU0FBTCxDQUFlbkUsUUFEZjtBQUVWTjtBQUZVLGFBQWQ7QUFJSDs7O2tDQUVTO0FBQ04sZ0JBQU1nQixTQUFTN0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNNkMsU0FBUzlDLFNBQVMrQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixRQUEvQjs7QUFFQW1ELG1CQUFPZCxjQUFQLENBQXNCLEtBQUtuQixjQUEzQixFQUEyQ3RCLE1BQTNDOztBQUVBdUQsbUJBQU9yQixZQUFQLENBQW9CLEtBQUtDLFdBQXpCLEVBQXNDbkMsTUFBdEMsRUFBOEMsR0FBOUMsRUFBbUQsQ0FBQyxXQUFELEVBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxNQUF0RCxFQUE4RCxNQUE5RCxFQUFzRSxNQUF0RSxFQUE4RSxNQUE5RSxFQUFzRixNQUF0RixFQUE4RixNQUE5RixDQUFuRDs7QUFFQXVELG1CQUFPaEIsWUFBUCxDQUFvQixLQUFLQyxZQUF6QixFQUF1Q3hDLE1BQXZDLEVBQStDLEtBQS9DOztBQUVBLGdCQUFNUSxjQUFjdEQsU0FBUytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJNLFdBQW5CO0FBQ0FBLHdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixhQUExQjtBQUNBSSx3QkFBWUYsU0FBWixHQUF3QixxRUFBeEI7QUFDSDs7Ozs7O2tCQUdVbkMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWY7O0FBQ0E7O0lBQVlvRixNOzs7Ozs7SUFFTjVGLGlCO0FBQ0YsaUNBQWM7QUFBQTs7QUFDVixhQUFLNkYsU0FBTCxHQUFpQjtBQUNiLDBCQUFjLENBQUMsZ0JBQUQsQ0FERDtBQUViLHFCQUFTLENBQUMsV0FBRCxDQUZJO0FBR2Isc0JBQVU7QUFIRyxTQUFqQjtBQUtBLGFBQUtsQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0J2RSxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLGFBQUtvRixXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJwRixJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLGFBQUt5RixZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0J6RixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUs4RyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0I5RyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLGFBQUs2QixNQUFMLEdBQWM7QUFDVkMsd0JBQVlzQyxxQkFERjtBQUVWckMsb0JBQVEsdUJBRkU7QUFHVkMsbUJBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QztBQUhHLFNBQWQ7QUFLSDs7Ozt1Q0FFY0UsQyxFQUFHO0FBQ2RBLGNBQUVzQixjQUFGO0FBQ0EsZ0JBQUl0QixFQUFFaUMsTUFBRixDQUFTZSxPQUFiLEVBQXNCO0FBQ2xCaEQsa0JBQUVpQyxNQUFGLENBQVM3RCxVQUFULENBQW9COEMsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLFVBQWxDO0FBQ0Esb0JBQUluQixFQUFFaUMsTUFBRixDQUFTTixLQUFULEtBQW1CLGdCQUF2QixFQUF5QztBQUNyQzFELDZCQUFTNkQsZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDTCxPQUEvQyxDQUF3RCxrQkFBVTtBQUFDRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakIsQ0FBd0JwQixPQUFPeEQsVUFBUCxDQUFrQjhDLFNBQWxCLENBQTRCYyxNQUE1QixDQUFtQyxVQUFuQztBQUErQyxxQkFBMUk7QUFDQSx5QkFBS3VDLFNBQUwsQ0FBZSxZQUFmLElBQStCLENBQUMsZ0JBQUQsQ0FBL0I7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsd0JBQU1DLE1BQU12RyxTQUFTQyxhQUFULENBQXVCLHNCQUF2QixDQUFaO0FBQ0FzRyx3QkFBSXhCLE9BQUosR0FBYyxLQUFkO0FBQ0F3Qix3QkFBSXBHLFVBQUosQ0FBZThDLFNBQWYsQ0FBeUJjLE1BQXpCLENBQWdDLFVBQWhDO0FBQ0Esd0JBQU15QyxTQUFTLEtBQUtGLFNBQUwsQ0FBZSxZQUFmLEVBQTZCeEQsTUFBN0IsQ0FBcUMsb0JBQVk7QUFBQywrQkFBT1gsYUFBYSxnQkFBcEI7QUFBcUMscUJBQXZGLENBQWY7QUFDQXFFLDJCQUFPRSxJQUFQLENBQVkzRSxFQUFFaUMsTUFBRixDQUFTTixLQUFyQjtBQUNBLHlCQUFLNEMsU0FBTCxDQUFlLFlBQWYsSUFBK0JFLE1BQS9CO0FBQ0g7QUFDSixhQWJELE1BYU8sSUFBSXpFLEVBQUVpQyxNQUFGLENBQVNlLE9BQVQsS0FBcUIsS0FBekIsRUFBZ0M7QUFDbkNoRCxrQkFBRWlDLE1BQUYsQ0FBUzdELFVBQVQsQ0FBb0I4QyxTQUFwQixDQUE4QmMsTUFBOUIsQ0FBcUMsVUFBckM7QUFDQSxxQkFBS3VDLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFleEQsTUFBZixDQUFzQixrQkFBVTtBQUFDLDJCQUFPMkIsV0FBVzFDLEVBQUVpQyxNQUFGLENBQVNOLEtBQTNCO0FBQWlDLGlCQUFsRSxDQUFqQjtBQUNIO0FBQ0o7OztvQ0FFVzNCLEMsRUFBRztBQUNYQSxjQUFFc0IsY0FBRjtBQUNBLGdCQUFJdEIsRUFBRWlDLE1BQUYsQ0FBU2UsT0FBYixFQUFzQjtBQUNsQixvQkFBSWhELEVBQUVpQyxNQUFGLENBQVNOLEtBQVQsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEMxRCw2QkFBUzZELGdCQUFULENBQTBCLGVBQTFCLEVBQTJDTCxPQUEzQyxDQUFtRCxrQkFBVTtBQUFFRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakIsQ0FBd0JwQixPQUFPeEQsVUFBUCxDQUFrQjhDLFNBQWxCLENBQTRCYyxNQUE1QixDQUFtQyxVQUFuQztBQUFnRCxxQkFBdkk7QUFDQSx5QkFBS3VDLFNBQUwsQ0FBZSxPQUFmLElBQTBCLENBQUMsV0FBRCxDQUExQjtBQUNILGlCQUhELE1BR087QUFDSCx3QkFBTUMsTUFBTXZHLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7QUFDQXNHLHdCQUFJeEIsT0FBSixHQUFjLEtBQWQ7QUFDQXdCLHdCQUFJcEcsVUFBSixDQUFlOEMsU0FBZixDQUF5QmMsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDQSx3QkFBTXlDLFNBQVMsS0FBS0YsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RCxNQUF4QixDQUErQixnQkFBUTtBQUFFLCtCQUFPMkQsU0FBUyxXQUFoQjtBQUE2QixxQkFBdEUsQ0FBZjtBQUNBRCwyQkFBT0UsSUFBUCxDQUFZM0UsRUFBRWlDLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRDLFNBQUwsQ0FBZSxPQUFmLElBQTBCRSxNQUExQjtBQUNIO0FBQ0osYUFaRCxNQVlPLElBQUl6RSxFQUFFaUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DLHFCQUFLdUIsU0FBTCxDQUFlLE9BQWYsSUFBMEIsS0FBS0EsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RCxNQUF4QixDQUErQixrQkFBVTtBQUFFLDJCQUFPMkIsV0FBVzFDLEVBQUVpQyxNQUFGLENBQVNOLEtBQTNCO0FBQWtDLGlCQUE3RSxDQUExQjtBQUNIO0FBQ0o7OztxQ0FFWTNCLEMsRUFBRztBQUNaQSxjQUFFc0IsY0FBRjtBQUNBLGlCQUFLaUQsU0FBTCxDQUFlLFFBQWYsSUFBMkJ2RSxFQUFFaUMsTUFBRixDQUFTTixLQUFwQztBQUNIOzs7cUNBRVkzQixDLEVBQUc7QUFDWkEsY0FBRXNCLGNBQUY7QUFDQSxnQkFBTW9DLGFBQWEsS0FBS2EsU0FBeEI7QUFDQSxnQkFBSTNFLG1CQUFKO0FBQUEsZ0JBQWdCRSxjQUFoQjs7QUFFQSxnQkFBSTRELFdBQVcsWUFBWCxFQUF5QixDQUF6QixNQUFnQyxnQkFBcEMsRUFBc0Q7QUFDbEQ5RCw2QkFBYXNDLHFCQUFiO0FBQ0gsYUFGRCxNQUVPO0FBQ0h0Qyw2QkFBYThELFdBQVcsWUFBWCxDQUFiO0FBQ0g7O0FBRUQsZ0JBQUlBLFdBQVc1RCxLQUFYLENBQWlCLENBQWpCLE1BQXdCLFdBQTVCLEVBQXlDO0FBQ3JDQSx3QkFBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLENBQVI7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVE0RCxXQUFXLE9BQVgsQ0FBUjtBQUNIO0FBQ0QsaUJBQUsvRCxNQUFMLEdBQWM7QUFDVkMsNEJBQVlBLFVBREY7QUFFVkUsdUJBQU9BLEtBRkc7QUFHVkQsd0JBQVE2RCxXQUFXN0Q7QUFIVCxhQUFkO0FBS0g7Ozt1Q0FHYztBQUNYLGdCQUFNaUIsU0FBUzdDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjs7QUFFQSxnQkFBTTZDLFNBQVM5QyxTQUFTK0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FGLG1CQUFPRyxXQUFQLENBQW1CRixNQUFuQjtBQUNBQSxtQkFBT0csU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0IsU0FBL0IsRUFBMEMsYUFBMUM7O0FBRUFtRCxtQkFBT2xDLGdCQUFQLENBQXdCLEtBQUtDLGNBQTdCLEVBQTZDdEIsTUFBN0MsRUFBcUQsR0FBckQ7O0FBRUF1RCxtQkFBT3JCLFlBQVAsQ0FBb0IsS0FBS0MsV0FBekIsRUFBc0NuQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtRCxDQUFDLFdBQUQsRUFBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELE1BQXRELENBQW5EOztBQUdBLGdCQUFNOEQsaUJBQWlCNUcsU0FBUytDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUI0RCxjQUFuQjtBQUNBQSwyQkFBZTNELFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFdBQTdCO0FBQ0EwRCwyQkFBZTVELFdBQWYsQ0FBMkJoRCxTQUFTNkcsY0FBVCxDQUF3QixlQUF4QixDQUEzQjtBQUNBLGdCQUFNQyxVQUFVLENBQUMsdUJBQUQsRUFBMEIsT0FBMUIsRUFBbUMsS0FBbkMsQ0FBaEI7QUFDQUEsb0JBQVF0RCxPQUFSLENBQWdCLGtCQUFVO0FBQ3RCLG9CQUFNdUQsZUFBZS9HLFNBQVMrQyxhQUFULENBQXVCLFFBQXZCLENBQXJCO0FBQ0FnRSw2QkFBYXJELEtBQWIsR0FBcUJlLE1BQXJCO0FBQ0FzQyw2QkFBYTNELFNBQWIsR0FBeUJxQixNQUF6QjtBQUNBbUMsK0JBQWU1RCxXQUFmLENBQTJCK0QsWUFBM0I7QUFDSCxhQUxEO0FBTUFILDJCQUFlOUUsZ0JBQWYsQ0FBZ0MsUUFBaEMsRUFBMEMsS0FBSzZFLFlBQS9DOztBQUVBTixtQkFBT2hCLFlBQVAsQ0FBb0IsS0FBS0MsWUFBekIsRUFBdUN4QyxNQUF2QyxFQUErQyxVQUEvQzs7QUFFQSxnQkFBTVEsY0FBY3RELFNBQVMrQyxhQUFULENBQXVCLEdBQXZCLENBQXBCO0FBQ0FELG1CQUFPRSxXQUFQLENBQW1CTSxXQUFuQjtBQUNBQSx3QkFBWUwsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsYUFBMUI7QUFDQUksd0JBQVlGLFNBQVosR0FBd0IsMENBQXhCO0FBQ0g7Ozs7OztrQkFHVTNDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIZjs7QUFDQTs7SUFBWTRGLE07Ozs7OztJQUdOdkYsaUI7QUFDRixpQ0FBYztBQUFBOztBQUNWLGFBQUt3RixTQUFMLEdBQWlCO0FBQ2IsMEJBQWMsQ0FBQyxnQkFBRCxDQUREO0FBRWIscUJBQVMsQ0FBQyxXQUFELENBRkk7QUFHYixvQkFBUTtBQUhLLFNBQWpCO0FBS0EsYUFBS2xDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQnZFLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsYUFBS29GLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnBGLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsYUFBS21ILFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQm5ILElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsYUFBS3lGLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnpGLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0g7Ozs7dUNBRWNrQyxDLEVBQUc7QUFDZEEsY0FBRXNCLGNBQUY7QUFDQSxnQkFBSXRCLEVBQUVpQyxNQUFGLENBQVNlLE9BQWIsRUFBc0I7QUFDbEIsb0JBQUloRCxFQUFFaUMsTUFBRixDQUFTTixLQUFULEtBQW1CLGdCQUF2QixFQUF5QztBQUNyQzFELDZCQUFTNkQsZ0JBQVQsQ0FBMEIsb0JBQTFCLEVBQWdETCxPQUFoRCxDQUF3RCxrQkFBVTtBQUFFRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakIsQ0FBd0JwQixPQUFPeEQsVUFBUCxDQUFrQjhDLFNBQWxCLENBQTRCYyxNQUE1QixDQUFtQyxVQUFuQztBQUFnRCxxQkFBNUk7QUFDQSx5QkFBS3VDLFNBQUwsQ0FBZSxZQUFmLElBQStCLENBQUMsZ0JBQUQsQ0FBL0I7QUFDSCxpQkFIRCxNQUdPO0FBQ0h0Ryw2QkFBU0MsYUFBVCxDQUF1Qix1QkFBdkIsRUFBZ0Q4RSxPQUFoRCxHQUEwRCxLQUExRDtBQUNBLHdCQUFNeUIsU0FBUyxLQUFLRixTQUFMLENBQWUsWUFBZixFQUE2QnhELE1BQTdCLENBQW9DLG9CQUFZO0FBQUUsK0JBQU9YLGFBQWEsZ0JBQXBCO0FBQXNDLHFCQUF4RixDQUFmO0FBQ0FxRSwyQkFBT0UsSUFBUCxDQUFZM0UsRUFBRWlDLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRDLFNBQUwsQ0FBZSxZQUFmLElBQStCRSxNQUEvQjtBQUNIO0FBQ0osYUFWRCxNQVVPLElBQUl6RSxFQUFFaUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DLHFCQUFLdUIsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWV4RCxNQUFmLENBQXNCLGtCQUFVO0FBQUUsMkJBQU8yQixXQUFXMUMsRUFBRWlDLE1BQUYsQ0FBU04sS0FBM0I7QUFBa0MsaUJBQXBFLENBQWpCO0FBQ0g7QUFDSjs7O29DQUVXM0IsQyxFQUFHO0FBQ1hBLGNBQUVzQixjQUFGO0FBQ0EsZ0JBQUl0QixFQUFFaUMsTUFBRixDQUFTZSxPQUFiLEVBQXNCO0FBQ2xCLG9CQUFJaEQsRUFBRWlDLE1BQUYsQ0FBU04sS0FBVCxLQUFtQixXQUF2QixFQUFvQztBQUNoQzFELDZCQUFTNkQsZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDTCxPQUE1QyxDQUFvRCxrQkFBVTtBQUFFRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakI7QUFBd0IscUJBQXhGO0FBQ0EseUJBQUt1QixTQUFMLENBQWUsT0FBZixJQUEwQixDQUFDLFdBQUQsQ0FBMUI7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsd0JBQU1DLE1BQU12RyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFaO0FBQ0FzRyx3QkFBSXhCLE9BQUosR0FBYyxLQUFkO0FBQ0F3Qix3QkFBSXBHLFVBQUosQ0FBZThDLFNBQWYsQ0FBeUJjLE1BQXpCLENBQWdDLFVBQWhDO0FBQ0Esd0JBQU15QyxTQUFTLEtBQUtGLFNBQUwsQ0FBZSxPQUFmLEVBQXdCeEQsTUFBeEIsQ0FBK0IsZ0JBQVE7QUFBRSwrQkFBTzJELFNBQVMsV0FBaEI7QUFBNkIscUJBQXRFLENBQWY7QUFDQUQsMkJBQU9FLElBQVAsQ0FBWTNFLEVBQUVpQyxNQUFGLENBQVNOLEtBQXJCO0FBQ0EseUJBQUs0QyxTQUFMLENBQWUsT0FBZixJQUEwQkUsTUFBMUI7QUFDSDtBQUNKLGFBWkQsTUFZTyxJQUFJekUsRUFBRWlDLE1BQUYsQ0FBU2UsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUNuQyxxQkFBS3VCLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFleEQsTUFBZixDQUFzQixrQkFBVTtBQUFFLDJCQUFPMkIsV0FBVzFDLEVBQUVpQyxNQUFGLENBQVNOLEtBQTNCO0FBQWtDLGlCQUFwRSxDQUFqQjtBQUNIO0FBQ0o7OzttQ0FFVTNCLEMsRUFBRztBQUNWQSxjQUFFc0IsY0FBRjtBQUNBLGlCQUFLaUQsU0FBTCxDQUFlLE1BQWYsSUFBeUJ2RSxFQUFFaUMsTUFBRixDQUFTTixLQUFsQztBQUNIOzs7cUNBR1kzQixDLEVBQUc7QUFDWkEsY0FBRXNCLGNBQUY7QUFDQSxnQkFBTW9DLGFBQWEsS0FBS2EsU0FBeEI7QUFDQSxnQkFBSTNFLG1CQUFKO0FBQUEsZ0JBQWdCRSxjQUFoQjs7QUFFQSxnQkFBSTRELFdBQVcsWUFBWCxFQUF5QixDQUF6QixNQUFnQyxnQkFBcEMsRUFBc0Q7QUFDbEQ5RCw2QkFBYXNDLHFCQUFiO0FBQ0gsYUFGRCxNQUVPO0FBQ0h0Qyw2QkFBYThELFdBQVcsWUFBWCxDQUFiO0FBQ0g7O0FBRUQsZ0JBQUlBLFdBQVc1RCxLQUFYLENBQWlCLENBQWpCLE1BQXdCLFdBQTVCLEVBQXlDO0FBQ3JDQSx3QkFBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLEVBQWlGLE1BQWpGLENBQVI7QUFDSCxhQUZELE1BRU87QUFDSEEsd0JBQVE0RCxXQUFXLE9BQVgsQ0FBUjtBQUNIO0FBQ0QsaUJBQUsvRCxNQUFMLEdBQWM7QUFDVkMsNEJBQVlBLFVBREY7QUFFVkUsdUJBQU9BLEtBRkc7QUFHVlUsc0JBQU1rRCxXQUFXbEQ7QUFIUCxhQUFkO0FBS0g7Ozt1Q0FHYztBQUNYLGdCQUFNTSxTQUFTN0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNNkMsU0FBUzlDLFNBQVMrQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixhQUEvQjs7QUFFQW1ELG1CQUFPbEMsZ0JBQVAsQ0FBd0IsS0FBS0MsY0FBN0IsRUFBNkN0QixNQUE3QyxFQUFxRCxJQUFyRDs7QUFFQXVELG1CQUFPckIsWUFBUCxDQUFvQixLQUFLQyxXQUF6QixFQUFzQ25DLE1BQXRDLEVBQThDLElBQTlDLEVBQW9ELENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsTUFBOUMsRUFBc0QsTUFBdEQsRUFBOEQsTUFBOUQsRUFBc0UsTUFBdEUsRUFBOEUsTUFBOUUsRUFBc0YsTUFBdEYsRUFBOEYsTUFBOUYsQ0FBcEQ7O0FBR0EsZ0JBQU1tRSxlQUFlakgsU0FBUytDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJpRSxZQUFuQjtBQUNBQSx5QkFBYWhFLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFdBQTNCO0FBQ0ErRCx5QkFBYWpFLFdBQWIsQ0FBeUJoRCxTQUFTNkcsY0FBVCxDQUF3QixhQUF4QixDQUF6QjtBQUNBLGdCQUFNSyxRQUFRLENBQUMsVUFBRCxFQUFhLHFCQUFiLEVBQW9DLDJCQUFwQyxDQUFkO0FBQ0FBLGtCQUFNMUQsT0FBTixDQUFjLGtCQUFVO0FBQ3BCLG9CQUFNMkQsYUFBYW5ILFNBQVMrQyxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0FvRSwyQkFBV3pELEtBQVgsR0FBbUJlLE1BQW5CO0FBQ0EwQywyQkFBVy9ELFNBQVgsR0FBdUJxQixNQUF2QjtBQUNBd0MsNkJBQWFqRSxXQUFiLENBQXlCbUUsVUFBekI7QUFDSCxhQUxEO0FBTUFGLHlCQUFhbkYsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBS2tGLFVBQTdDOztBQUdBWCxtQkFBT2hCLFlBQVAsQ0FBb0IsS0FBS0MsWUFBekIsRUFBdUN4QyxNQUF2QyxFQUErQyxVQUEvQzs7QUFHQSxnQkFBTVEsY0FBY3RELFNBQVMrQyxhQUFULENBQXVCLEdBQXZCLENBQXBCO0FBQ0FELG1CQUFPRSxXQUFQLENBQW1CTSxXQUFuQjtBQUNBQSx3QkFBWUwsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsYUFBMUI7QUFDQUksd0JBQVlGLFNBQVosR0FBd0IsaUVBQXhCO0FBQ0g7Ozs7OztrQkFHVXRDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIZjs7QUFDQTs7SUFBWXVGLE07Ozs7OztJQUdOekYsVTtBQUNGLDBCQUFjO0FBQUE7O0FBQ1YsYUFBSzBFLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQnpGLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsYUFBS29GLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnBGLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsYUFBS3VFLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQnZFLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsYUFBS3lHLFNBQUwsR0FBaUI7QUFDYm5FLHNCQUFVLDBCQURHO0FBRWJOLG1CQUFPLENBQUMsV0FBRDtBQUZNLFNBQWpCO0FBSUg7Ozs7dUNBRWNFLEMsRUFBRztBQUNkLGlCQUFLdUUsU0FBTCxDQUFlbkUsUUFBZixHQUEwQkosRUFBRWlDLE1BQUYsQ0FBU04sS0FBbkM7QUFDSDs7O3FDQUVZM0IsQyxFQUFHO0FBQ1pBLGNBQUVzQixjQUFGO0FBQ0EsZ0JBQU1vQyxhQUFhLEtBQUthLFNBQXhCO0FBQ0EsZ0JBQUl6RSxjQUFKO0FBQ0EsZ0JBQUk0RCxXQUFXNUQsS0FBWCxDQUFpQixDQUFqQixNQUF3QixXQUE1QixFQUF5QztBQUNyQ0Esd0JBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxDQUFSO0FBQ0gsYUFGRCxNQUVPO0FBQ0hBLHdCQUFRNEQsV0FBVyxPQUFYLENBQVI7QUFDSDtBQUNELGlCQUFLL0QsTUFBTCxHQUFjO0FBQ1ZTLDBCQUFVLEtBQUttRSxTQUFMLENBQWVuRSxRQURmO0FBRVZOO0FBRlUsYUFBZDtBQUlIOzs7b0NBRVdFLEMsRUFBRztBQUNYQSxjQUFFc0IsY0FBRjtBQUNBLGdCQUFJdEIsRUFBRWlDLE1BQUYsQ0FBU2UsT0FBYixFQUFzQjtBQUNsQixvQkFBSWhELEVBQUVpQyxNQUFGLENBQVNOLEtBQVQsS0FBbUIsV0FBdkIsRUFBb0M7QUFDaEMxRCw2QkFBUzZELGdCQUFULENBQTBCLGVBQTFCLEVBQTJDTCxPQUEzQyxDQUFtRCxrQkFBVTtBQUFFRywrQkFBT29CLE9BQVAsR0FBaUIsS0FBakIsQ0FBd0JwQixPQUFPeEQsVUFBUCxDQUFrQjhDLFNBQWxCLENBQTRCYyxNQUE1QixDQUFtQyxVQUFuQztBQUFnRCxxQkFBdkk7QUFDQSx5QkFBS3VDLFNBQUwsQ0FBZSxPQUFmLElBQTBCLENBQUMsV0FBRCxDQUExQjtBQUNILGlCQUhELE1BR087QUFDSCx3QkFBTUMsTUFBTXZHLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7QUFDQXNHLHdCQUFJeEIsT0FBSixHQUFjLEtBQWQ7QUFDQXdCLHdCQUFJcEcsVUFBSixDQUFlOEMsU0FBZixDQUF5QmMsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDQSx3QkFBTXlDLFNBQVMsS0FBS0YsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RCxNQUF4QixDQUErQixnQkFBUTtBQUFFLCtCQUFPMkQsU0FBUyxXQUFoQjtBQUE2QixxQkFBdEUsQ0FBZjtBQUNBRCwyQkFBT0UsSUFBUCxDQUFZM0UsRUFBRWlDLE1BQUYsQ0FBU04sS0FBckI7QUFDQSx5QkFBSzRDLFNBQUwsQ0FBZSxPQUFmLElBQTBCRSxNQUExQjtBQUNIO0FBQ0osYUFaRCxNQVlPLElBQUl6RSxFQUFFaUMsTUFBRixDQUFTZSxPQUFULEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DLHFCQUFLdUIsU0FBTCxDQUFlLE9BQWYsSUFBMEIsS0FBS0EsU0FBTCxDQUFlLE9BQWYsRUFBd0J4RCxNQUF4QixDQUErQixrQkFBVTtBQUFFLDJCQUFPMkIsV0FBVzFDLEVBQUVpQyxNQUFGLENBQVNOLEtBQTNCO0FBQWtDLGlCQUE3RSxDQUExQjtBQUNIO0FBQ0o7OztrQ0FFUztBQUNOLGdCQUFNYixTQUFTN0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNNkMsU0FBUzlDLFNBQVMrQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixXQUEvQjs7QUFFQW1ELG1CQUFPZCxjQUFQLENBQXNCLEtBQUtuQixjQUEzQixFQUEyQ3RCLE1BQTNDOztBQUVBdUQsbUJBQU9yQixZQUFQLENBQW9CLEtBQUtDLFdBQXpCLEVBQXNDbkMsTUFBdEMsRUFBOEMsR0FBOUMsRUFBbUQsQ0FBQyxXQUFELEVBQWMsTUFBZCxFQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxNQUF0RCxDQUFuRDs7QUFFQXVELG1CQUFPaEIsWUFBUCxDQUFvQixLQUFLQyxZQUF6QixFQUF1Q3hDLE1BQXZDLEVBQStDLFFBQS9DOztBQUdBLGdCQUFNUSxjQUFjdEQsU0FBUytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBcEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJNLFdBQW5CO0FBQ0FBLHdCQUFZTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixhQUExQjtBQUNBSSx3QkFBWUYsU0FBWixHQUF3QixzQ0FBeEI7QUFDSDs7Ozs7O2tCQUdVeEMsVTs7QUFHZixtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdFTVUsZ0I7QUFDRixnQ0FBYztBQUFBOztBQUNWLGFBQUt4QixJQUFMLEdBQVksRUFBWjtBQUNIOzs7O3NDQUVhO0FBQUE7O0FBQ1YsZ0JBQU0rQyxTQUFTN0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLGdCQUFNNkMsU0FBUzlDLFNBQVMrQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQUYsbUJBQU9HLFdBQVAsQ0FBbUJGLE1BQW5CO0FBQ0FBLG1CQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQixFQUErQixhQUEvQjs7QUFFQSxnQkFBTUMsa0JBQWtCbkQsU0FBUytDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQUQsbUJBQU9FLFdBQVAsQ0FBbUJHLGVBQW5CO0FBQ0FBLDRCQUFnQkYsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGNBQTlCLEVBQThDLGNBQTlDO0FBQ0FDLDRCQUFnQkMsU0FBaEIsR0FBNEIsNkJBQTVCO0FBQ0FELDRCQUFnQnJCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxhQUFLO0FBQzNDQyxrQkFBRXNCLGNBQUY7QUFDQSxzQkFBS3ZELElBQUwsR0FBWTtBQUNSLDJEQUF1QyxFQUQvQjtBQUVSLGdEQUE0QixDQUZwQjtBQUdSLDRDQUF3QixHQUhoQjtBQUlSLDJDQUF1QixHQUpmO0FBS1IsZ0VBQTRDLEdBTHBDO0FBTVIsd0RBQW9DLEdBTjVCO0FBT1IsbUVBQStDLEdBUHZDO0FBUVIsMENBQXNCLEdBUmQ7QUFTUixxREFBaUMsR0FUekI7QUFVUix3Q0FBb0IsR0FWWjtBQVdSLHVFQUFtRCxDQVgzQztBQVlSLDhDQUEwQjtBQVpsQixpQkFBWjtBQWNILGFBaEJEOztBQWtCQSxnQkFBTXdELGNBQWN0RCxTQUFTK0MsYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQk0sV0FBbkI7QUFDQUEsd0JBQVlMLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGFBQTFCO0FBQ0FJLHdCQUFZRixTQUFaLEdBQXdCLHVDQUF4Qjs7QUFFQSxnQkFBTWdFLFdBQVdwSCxTQUFTK0MsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBRCxtQkFBT0UsV0FBUCxDQUFtQm9FLFFBQW5CO0FBQ0FBLHFCQUFTbkUsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBdkI7QUFDQWtFLHFCQUFTaEUsU0FBVCxHQUFxQiwrSEFBckI7QUFDSDs7Ozs7O2tCQUdVOUIsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzlDVGhCLEs7QUFDRixxQkFBYztBQUFBOztBQUNWLGFBQUsrRyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY3hILElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxhQUFLeUgsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCekgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxhQUFLMEgsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCMUgsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxhQUFLNEIsa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0I1QixJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNBLGFBQUt5QyxrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QnpDLElBQXhCLENBQTZCLElBQTdCLENBQTFCO0FBQ0g7Ozs7aUNBR1MySCxHLEVBQUs7QUFDWCxnQkFBSUMsTUFBTSxDQUFWO0FBQ0EsaUJBQUssSUFBSS9DLElBQUksQ0FBYixFQUFnQkEsSUFBSThDLElBQUlFLE1BQXhCLEVBQWdDaEQsR0FBaEMsRUFBcUM7QUFDakMrQyx1QkFBT0QsSUFBSTlDLENBQUosQ0FBUDtBQUNIO0FBQ0QsbUJBQU8rQyxHQUFQO0FBQ0g7OztxQ0FFYUQsRyxFQUFLO0FBQ2YsbUJBQU8sS0FBS0gsUUFBTCxDQUFjRyxHQUFkLElBQXFCQSxJQUFJRSxNQUFoQztBQUNIOzs7cUNBRXNCO0FBQUEsOENBQVJDLE1BQVE7QUFBUkEsc0JBQVE7QUFBQTs7QUFDbkIsZ0JBQUlDLFFBQVEsRUFBWjtBQUNBLGdCQUFJRCxPQUFPRSxLQUFQLENBQWMsZUFBTztBQUFFLHVCQUFPTCxJQUFJRSxNQUFKLEtBQWVDLE9BQU8sQ0FBUCxFQUFVRCxNQUFoQztBQUF5QyxhQUFoRSxNQUFzRSxLQUExRSxFQUFpRjtBQUM3RUksd0JBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBO0FBQ0g7O0FBTGtCLHVDQU9WckQsQ0FQVTtBQVFmLG9CQUFNc0QsU0FBUyxFQUFmO0FBQ0FMLHVCQUFPbkUsT0FBUCxDQUFnQixlQUFPO0FBQ25Cd0UsMkJBQU90QixJQUFQLENBQVljLElBQUk5QyxDQUFKLENBQVo7QUFDSCxpQkFGRDtBQUdBa0Qsc0JBQU1sQixJQUFOLENBQVdzQixNQUFYO0FBWmU7O0FBT25CLGlCQUFLLElBQUl0RCxJQUFJLENBQWIsRUFBZ0JBLElBQUlpRCxPQUFPLENBQVAsRUFBVUQsTUFBOUIsRUFBc0NoRCxHQUF0QyxFQUEyQztBQUFBLHNCQUFsQ0EsQ0FBa0M7QUFNMUM7QUFDRCxtQkFBT2tELEtBQVA7QUFDSDs7OzJDQUVtQmpHLFUsRUFBWUMsTSxFQUFRQyxLLEVBQU8vQixJLEVBQU07QUFBQTs7QUFDakQsZ0JBQU1tSSxpQkFBaUIsRUFBdkI7QUFDQXRHLHVCQUFXNkIsT0FBWCxDQUFvQixvQkFBWTtBQUM1QnlFLCtCQUFldkIsSUFBZixDQUFvQjVHLEtBQUtxQyxRQUFMLENBQXBCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNK0YsZUFBZUQsZUFBZUUsR0FBZixDQUFtQixpQkFBUztBQUM3QywyQ0FBVW5DLE1BQU03RCxRQUFoQixFQUEyQjZELE1BQU1wRSxNQUFOLENBQTNCO0FBQ0gsYUFGb0IsQ0FBckI7O0FBSUEsZ0JBQU13RyxZQUFZRixhQUFhQyxHQUFiLENBQWlCLGlCQUFTO0FBQ3hDLG9CQUFNRSxlQUFlLEVBQXJCO0FBQ0F4RyxzQkFBTTJCLE9BQU4sQ0FBZSxnQkFBUTtBQUNuQix3QkFBTThFLFdBQVczQyxPQUFPNEMsTUFBUCxDQUFjdkMsS0FBZCxFQUFxQixDQUFyQixDQUFqQjtBQUNBcUMsaUNBQWEzQixJQUFiLENBQWtCNEIsU0FBUzdCLElBQVQsQ0FBbEI7QUFDSCxpQkFIRDtBQUlBLDJDQUFTZCxPQUFPQyxJQUFQLENBQVlJLEtBQVosRUFBbUIsQ0FBbkIsQ0FBVCxFQUFpQyxNQUFLc0IsWUFBTCxDQUFrQmUsWUFBbEIsQ0FBakM7QUFFSCxhQVJpQixDQUFsQjs7QUFVQSxnQkFBTUcsU0FBU0osVUFBVUssSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BDLHdCQUFRaEQsT0FBTzRDLE1BQVAsQ0FBY0csQ0FBZCxFQUFpQixDQUFqQixJQUFzQi9DLE9BQU80QyxNQUFQLENBQWNJLENBQWQsRUFBaUIsQ0FBakIsQ0FBOUI7QUFDQSx5QkFBSyxJQUFMO0FBQ0ksK0JBQU8sQ0FBQyxDQUFSO0FBQ0o7QUFDSSwrQkFBTyxDQUFQO0FBSko7QUFNSCxhQVBjLENBQWY7O0FBVUEsZ0JBQU1qSCxTQUFTLEVBQWY7QUFDQThHLG1CQUFPaEYsT0FBUCxDQUFnQixpQkFBUztBQUNyQjlCLHVCQUFPaUUsT0FBT0MsSUFBUCxDQUFZSSxLQUFaLEVBQW1CLENBQW5CLENBQVAsSUFBZ0NMLE9BQU80QyxNQUFQLENBQWN2QyxLQUFkLEVBQXFCLENBQXJCLENBQWhDO0FBQ0gsYUFGRDs7QUFJQSxtQkFBT3RFLE1BQVA7QUFDSDs7OzJDQUVrQkMsVSxFQUFZWSxJLEVBQU1WLEssRUFBTy9CLEksRUFBTTtBQUFBOztBQUM5QyxnQkFBTW1JLGlCQUFpQixFQUF2QjtBQUNBdEcsdUJBQVc2QixPQUFYLENBQW1CLG9CQUFZO0FBQzNCeUUsK0JBQWV2QixJQUFmLENBQW9CNUcsS0FBS3FDLFFBQUwsQ0FBcEI7QUFDSCxhQUZEO0FBR0EsZ0JBQU15RyxhQUFhWCxlQUFlRSxHQUFmLENBQW1CLGlCQUFTO0FBQzNDLDJDQUFVbkMsTUFBTTdELFFBQWhCLEVBQTJCNkQsTUFBTXpELElBQU4sQ0FBM0I7QUFDSCxhQUZrQixDQUFuQjs7QUFJQSxnQkFBTTZGLFlBQVlRLFdBQVdULEdBQVgsQ0FBZSxpQkFBUztBQUN0QyxvQkFBTUUsZUFBZSxFQUFyQjtBQUNBeEcsc0JBQU0yQixPQUFOLENBQWMsZ0JBQVE7QUFDbEIsd0JBQU04RSxXQUFXM0MsT0FBTzRDLE1BQVAsQ0FBY3ZDLEtBQWQsRUFBcUIsQ0FBckIsQ0FBakI7QUFDQXFDLGlDQUFhM0IsSUFBYixDQUFrQjRCLFNBQVM3QixJQUFULENBQWxCO0FBQ0gsaUJBSEQ7QUFJQSwyQ0FBVWQsT0FBT0MsSUFBUCxDQUFZSSxLQUFaLEVBQW1CLENBQW5CLENBQVYsRUFBa0MsT0FBS3NCLFlBQUwsQ0FBa0JlLFlBQWxCLENBQWxDO0FBRUgsYUFSaUIsQ0FBbEI7O0FBVUEsZ0JBQU1HLFNBQVNKLFVBQVVLLElBQVYsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNwQyx3QkFBUWhELE9BQU80QyxNQUFQLENBQWNHLENBQWQsRUFBaUIsQ0FBakIsSUFBc0IvQyxPQUFPNEMsTUFBUCxDQUFjSSxDQUFkLEVBQWlCLENBQWpCLENBQTlCO0FBQ0kseUJBQUssSUFBTDtBQUNJLCtCQUFPLENBQUMsQ0FBUjtBQUNKO0FBQ0ksK0JBQU8sQ0FBUDtBQUpSO0FBTUgsYUFQYyxDQUFmOztBQVNBLGdCQUFNakgsU0FBUyxFQUFmO0FBQ0E4RyxtQkFBT2hGLE9BQVAsQ0FBZSxpQkFBUztBQUNwQjlCLHVCQUFPaUUsT0FBT0MsSUFBUCxDQUFZSSxLQUFaLEVBQW1CLENBQW5CLENBQVAsSUFBZ0NMLE9BQU80QyxNQUFQLENBQWN2QyxLQUFkLEVBQXFCLENBQXJCLENBQWhDO0FBQ0gsYUFGRDs7QUFJQSxtQkFBT3RFLE1BQVA7QUFDSDs7O3lDQUVnQlMsUSxFQUFVTixLLEVBQU8vQixJLEVBQU07QUFDcEMsZ0JBQU1tSSxpQkFBaUJuSSxLQUFLcUMsUUFBTCxDQUF2Qjs7QUFFQSxnQkFBTTBHLFlBQVksRUFBRSxPQUFPWixlQUFlLEtBQWYsQ0FBVCxFQUFsQjtBQUNBLGdCQUFNYSxjQUFjLEVBQUUsU0FBU2IsZUFBZSxPQUFmLENBQVgsRUFBcEI7O0FBR0EsZ0JBQU1jLGtCQUFrQixFQUF4QjtBQUNBLGdCQUFNQyxjQUFjckQsT0FBTzRDLE1BQVAsQ0FBY00sU0FBZCxFQUF5QixDQUF6QixDQUFwQjtBQUNBaEgsa0JBQU0yQixPQUFOLENBQWMsZ0JBQVE7QUFDbEJ1RixnQ0FBZ0JyQyxJQUFoQixDQUFxQnNDLFlBQVl2QyxJQUFaLENBQXJCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNd0MsVUFBVSxLQUFLM0IsWUFBTCxDQUFrQnlCLGVBQWxCLENBQWhCOztBQUVBLGdCQUFNRyxvQkFBb0IsRUFBMUI7QUFDQSxnQkFBTUMsZ0JBQWdCeEQsT0FBTzRDLE1BQVAsQ0FBY08sV0FBZCxFQUEyQixDQUEzQixDQUF0QjtBQUNBakgsa0JBQU0yQixPQUFOLENBQWMsZ0JBQVE7QUFDbEIwRixrQ0FBa0J4QyxJQUFsQixDQUF1QnlDLGNBQWMxQyxJQUFkLENBQXZCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNMkMsWUFBWSxLQUFLOUIsWUFBTCxDQUFrQjRCLGlCQUFsQixDQUFsQjs7QUFFQSxnQkFBSUUsWUFBWUgsT0FBaEIsRUFBeUI7QUFDckIsdUJBQU87QUFDSCw2QkFBU0csU0FETjtBQUVILDJCQUFPSDtBQUZKLGlCQUFQO0FBSUgsYUFMRCxNQUtPO0FBQ0gsdUJBQU87QUFDSCwyQkFBT0EsT0FESjtBQUVILDZCQUFTRztBQUZOLGlCQUFQO0FBSUg7QUFDSjs7O3NDQUVhakgsUSxFQUFVTixLLEVBQU8vQixJLEVBQU07QUFDakMsZ0JBQU1tSSxpQkFBaUJuSSxLQUFLcUMsUUFBTCxDQUF2Qjs7QUFFQSxnQkFBTWtILFlBQVksRUFBRSx1QkFBdUJwQixlQUFlLHFCQUFmLENBQXpCLEVBQWxCO0FBQ0EsZ0JBQU1xQixhQUFhLEVBQUUsNkJBQTZCckIsZUFBZSwyQkFBZixDQUEvQixFQUFuQjs7QUFFQSxnQkFBTXNCLGtCQUFrQixFQUF4QjtBQUNBLGdCQUFNQyxjQUFjN0QsT0FBTzRDLE1BQVAsQ0FBY2MsU0FBZCxFQUF5QixDQUF6QixDQUFwQjtBQUNBeEgsa0JBQU0yQixPQUFOLENBQWMsZ0JBQVE7QUFDbEIrRixnQ0FBZ0I3QyxJQUFoQixDQUFxQjhDLFlBQVkvQyxJQUFaLENBQXJCO0FBQ0gsYUFGRDtBQUdBLGdCQUFNZ0QsVUFBVSxLQUFLbkMsWUFBTCxDQUFrQmlDLGVBQWxCLENBQWhCOztBQUVBLGdCQUFNRyxtQkFBbUIsRUFBekI7QUFDQSxnQkFBTUMsZUFBZWhFLE9BQU80QyxNQUFQLENBQWNlLFVBQWQsRUFBMEIsQ0FBMUIsQ0FBckI7QUFDQXpILGtCQUFNMkIsT0FBTixDQUFjLGdCQUFRO0FBQ2xCa0csaUNBQWlCaEQsSUFBakIsQ0FBc0JpRCxhQUFhbEQsSUFBYixDQUF0QjtBQUNILGFBRkQ7QUFHQSxnQkFBTW1ELFdBQVcsS0FBS3RDLFlBQUwsQ0FBa0JvQyxnQkFBbEIsQ0FBakI7O0FBRUEsZ0JBQUlFLFdBQVdILE9BQWYsRUFBd0I7QUFDcEIsdUJBQU87QUFDSCxpREFBNkJHLFFBRDFCO0FBRUgsMkNBQXVCSDtBQUZwQixpQkFBUDtBQUlILGFBTEQsTUFLTztBQUNILHVCQUFPO0FBQ0gsMkNBQXVCQSxPQURwQjtBQUVILGlEQUE2Qkc7QUFGMUIsaUJBQVA7QUFLSDtBQUNKOzs7Ozs7a0JBS1V0SixLOztBQUVmO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TEE7O0FBQ0E7Ozs7OztrQkFFZSxVQUFDUixJQUFELEVBQVU7QUFDckIsUUFBTStKLFNBQVMsRUFBZjs7QUFFQSxRQUFJM0QsY0FBSjtBQUFBLFFBQVdELGVBQVg7QUFDQSxRQUFNNUYsUUFBUSxJQUFJQyxlQUFKLEVBQWQ7O0FBRUEsUUFBTVAsTUFBTStKLEdBQUdyRixNQUFILENBQVUsUUFBVixFQUNQc0YsT0FETyxDQUNDLGVBREQsRUFDa0IsSUFEbEIsRUFFUEMsTUFGTyxDQUVBLEtBRkEsRUFHUEMsSUFITyxDQUdGLE9BSEUsRUFHTyxVQUFVQyxDQUFWLEVBQWE7QUFBRWhFLGdCQUFRLEtBQUsvRixVQUFMLENBQWdCZ0ssV0FBeEIsQ0FBcUMsT0FBT2pFLEtBQVA7QUFBYyxLQUh6RSxFQUlQK0QsSUFKTyxDQUlGLFFBSkUsRUFJUSxVQUFVQyxDQUFWLEVBQWE7QUFBRWpFLGlCQUFTLEtBQUs5RixVQUFMLENBQWdCaUssWUFBekIsQ0FBdUMsT0FBT25FLE1BQVA7QUFBZSxLQUo3RSxFQUtQK0QsTUFMTyxDQUtBLEdBTEEsRUFNUEMsSUFOTyxDQU1GLFdBTkUsRUFNVyxlQUFlL0QsUUFBUSxDQUF2QixHQUEyQixHQUEzQixHQUFpQ0QsU0FBUyxDQUExQyxHQUE4QyxHQU56RCxDQUFaO0FBT0EsUUFBTW9FLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU3JFLEtBQVQsRUFBZ0JELE1BQWhCLElBQTBCLENBQTFCLEdBQThCNEQsTUFBN0M7O0FBRUEsUUFBTVcsTUFBTVYsR0FBR1UsR0FBSCxHQUNQOUcsS0FETyxDQUNELFVBQVV3RyxDQUFWLEVBQWE7QUFBRSxlQUFPQSxFQUFFeEcsS0FBVDtBQUFpQixLQUQvQixDQUFaOztBQUdBLFFBQU0rRyxpQkFBaUJYLEdBQUdZLE9BQUgsQ0FBVzVLLElBQVgsQ0FBdkI7O0FBRUEySyxtQkFBZWpILE9BQWYsQ0FBdUIsYUFBSztBQUN4QjBHLFVBQUVTLFVBQUYsR0FBZVQsRUFBRXhHLEtBQUYsR0FBVSxFQUF6QjtBQUNILEtBRkQ7O0FBSUEsUUFBTWtILGFBQWFKLElBQUlDLGNBQUosQ0FBbkI7O0FBRUEsUUFBTUksTUFBTWYsR0FBR2UsR0FBSCxHQUNQQyxXQURPLENBQ0tULFNBQVMsR0FEZCxFQUVQVSxXQUZPLENBRUtWLE1BRkwsQ0FBWjs7QUFJQSxRQUFNVyxRQUFRakwsSUFDVGtMLFNBRFMsR0FFVG5MLElBRlMsQ0FFSjhLLFVBRkksRUFHVE0sS0FIUyxHQUlUbEIsTUFKUyxDQUlGLE1BSkUsQ0FBZDs7QUFNQWdCLFVBQ0tHLElBREwsQ0FDVyxVQUFTakIsQ0FBVCxFQUFZeEYsQ0FBWixFQUFlO0FBQ2xCb0YsV0FBR3JGLE1BQUgsQ0FBVSxJQUFWO0FBQ0k7QUFDQTtBQUZKLFNBR0tzRixPQUhMLENBR2EsTUFIYixFQUdxQixJQUhyQixFQUlLcUIsVUFKTCxHQUtLQyxRQUxMLENBS2MsVUFBU25CLENBQVQsRUFBWTtBQUFDLG1CQUFPQSxFQUFFcEssSUFBRixDQUFPNkssVUFBUCxHQUFvQixJQUEzQjtBQUFnQyxTQUwzRCxFQU1LVyxLQU5MLENBTVksVUFBU3BCLENBQVQsRUFBWTtBQUNoQixnQkFBSXhGLE1BQU0sQ0FBVixFQUFhO0FBQ1QsdUJBQU8sQ0FBUDtBQUNIO0FBQ0QsbUJBQU9yRSxNQUFNZ0gsUUFBTixDQUFlMkQsTUFBTU8sS0FBTixHQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCOUcsQ0FBdkIsRUFBMEJ5RCxHQUExQixDQUE4QjtBQUFBLHVCQUFNMkIsR0FBR3JGLE1BQUgsQ0FBVWdILEVBQVYsRUFBYzNMLElBQWQsR0FBcUIsQ0FBckIsRUFBd0JBLElBQXhCLENBQTZCNkssVUFBbkM7QUFBQSxhQUE5QixDQUFmLElBQStGLElBQS9GLEdBQXNHLEdBQTdHO0FBQ0gsU0FYTCxFQVlLZSxTQVpMLENBWWUsR0FaZixFQVlvQixVQUFVeEIsQ0FBVixFQUFhO0FBQ3pCLGdCQUFNeEYsSUFBSW9GLEdBQUc2QixXQUFILENBQWV6QixFQUFFMEIsVUFBRixHQUFlLEdBQTlCLEVBQW1DMUIsRUFBRTJCLFFBQXJDLENBQVY7QUFDQSxtQkFBTyxVQUFVQyxDQUFWLEVBQWE7QUFDaEI1QixrQkFBRTJCLFFBQUYsR0FBYW5ILEVBQUVvSCxDQUFGLENBQWI7QUFDQSx1QkFBT2pCLElBQUlYLENBQUosQ0FBUDtBQUNILGFBSEQ7QUFJSCxTQWxCTDtBQW1CQyxLQXJCVDtBQXNCSCxDOztBQUtPOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcGxveWVkQnlHZW5kZXIgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA4Ljg4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDguOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOC45OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA4Ljg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDguOTYsXG4gICAgICAgICAgICBcIjIwMThcIjogOC45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNDEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS40OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMDQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMDZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuOTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC42MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41NlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSwgXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjk1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjAzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC44OFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNDgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS41OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjU1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjM1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNjQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1Ljg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNzcsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1Ljc0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjA2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS4wMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0Ljk3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjk3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuOTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy44NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuMDIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy43MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjY4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjQzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuMzgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuMzZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZXZlcnlvbmVCeURheSA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjI0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjMxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEwLjA3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEwLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEwLjA4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMTAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS41ODUsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjY1NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjY2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuNjcsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS43MDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS43NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS43OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS43NixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5Ljc2NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5Ljc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjEzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMzksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjM0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4yNjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjY4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS41OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS43MSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjY5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjA2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuMTIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuODI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjg3NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjgzNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS45MzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS45MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS44OCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjkxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjc5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNzQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzU1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQ3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40N1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjUxNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQ4NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQ4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTJcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0LjQxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogNC40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDMuMDYsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjg2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjkzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjg5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMi45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjg3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjkzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuODc1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM3NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM3NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzYgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC43MSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjY3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNzMsXG4gICAgICAgICAgICBcIjIwMTJcIjogNC44NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNC42OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogNC43MlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDYuNDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogNi41MyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA2LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNi4zNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNS41NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA1LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMTNcIjogNS42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNjQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuNTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS41OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1LjY0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE0IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzE1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNzVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQXBwIGZyb20gJy4vanMvQXBwJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnJlbmRlcigpOyIsImltcG9ydCBXYXRjaCBmcm9tICcuL3dhdGNoJ1xuaW1wb3J0IENhdGVnb3J5U2VsZWN0b3IgZnJvbSAnLi9jYXRlZ29yeV9zZWxlY3RvcidcbmltcG9ydCBFbXBsb3llZFNlbGVjdG9ycyBmcm9tICcuL2VtcGxveWVkX3NlbGVjdG9ycydcbmltcG9ydCBFdmVyeW9uZVNlbGVjdG9ycyBmcm9tICcuL2V2ZXJ5b25lX3NlbGVjdG9ycydcbmltcG9ydCBEYXRhRGlzcGxheSBmcm9tICcuL2RhdGFfZGlzcGxheSdcbmltcG9ydCBBcHBBY2FkZW15U2VsZWN0b3IgZnJvbSAnLi9hcHBfYWNhZGVteV9zZWxlY3Rvcic7XG5pbXBvcnQgUmVzaWRlbnRTZWxlY3RvciBmcm9tICcuL3Jlc2lkZW50X3NlbGVjdG9yJztcbmltcG9ydCBHZW5kZXJDb21wIGZyb20gJy4vZ2VuZGVyX2NvbXAnXG5pbXBvcnQgRGF5Q29tcCBmcm9tICcuL2RheV9jb21wJ1xuaW1wb3J0IHsgZW1wbG95ZWRCeUdlbmRlciB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkJ1xuaW1wb3J0IHsgZXZlcnlvbmVCeURheSB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2V2ZXJ5b25lQnlEYXlTaGFwZWQnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscydcblxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IENhdGVnb3J5U2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCBlbXBsb3llZFNlbGVjdG9ycyA9IG5ldyBFbXBsb3llZFNlbGVjdG9ycygpO1xuICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZ2VuZGVyQ29tcCA9IG5ldyBHZW5kZXJDb21wKCk7XG4gICAgICAgIGdlbmRlckNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBldmVyeW9uZVNlbGVjdG9ycyA9IG5ldyBFdmVyeW9uZVNlbGVjdG9ycygpO1xuICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZGF5Q29tcCA9IG5ldyBEYXlDb21wKCk7XG4gICAgICAgIGRheUNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBhcHBBY2FkZW15U2VsZWN0b3IgPSBuZXcgQXBwQWNhZGVteVNlbGVjdG9yKCk7XG4gICAgICAgIGFwcEFjYWRlbXlTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByZXNpZGVudFNlbGVjdG9yID0gbmV3IFJlc2lkZW50U2VsZWN0b3IoKTtcbiAgICAgICAgcmVzaWRlbnRTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRW1wbG95ZWQgZGF0YXNldFxuICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wbG95ZWQtYnRuXCIpO1xuICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcbiAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSk7XG5cbiAgICAgICAgZW1wbG95ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBnZW5kZXIgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmRlci1idG5cIik7XG4gICAgICAgIGdlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZ2VuZGVyRGF0YSA9IHV0aWxzLmdlbmRlckNvbXBGaWx0ZXIoZ2VuZGVyQ29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZ2VuZGVyQ29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGdlbmRlckRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFdmVyeW9uZSBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVyeW9uZS1idG5cIik7XG4gICAgICAgIGV2ZXJ5b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBldmVyeW9uZURhdGEgPSB1dGlscy5ldmVyeW9uZURhdGFGaWx0ZXIoZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnR5cGUsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG4gICAgICAgICAgICB0aGlzLmRyYXcoZXZlcnlvbmVEYXRhKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGRheSBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWJ0blwiKTtcbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gdXRpbHMuZGF5Q29tcEZpbHRlcihkYXlDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBkYXlDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuICAgICAgICAgICAgdGhpcy5kcmF3KGRheURhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBBcHAgQWNhZGVteSBTdHVkZW50XG4gICAgICAgIGNvbnN0IGFwcGFjYWRlbXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1hY2FkZW15LWJ0blwiKTtcbiAgICAgICAgYXBwYWNhZGVteS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGFwcEFjYWRlbXlTZWxlY3Rvci5kYXRhKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZmlyc3QgeWVhciByZXNpZGVudCBhZnRlciBtZWRpY2FsIHNjaG9vbFxuICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzaWRlbnQtYnRuXCIpO1xuICAgICAgICByZXNpZGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHJlc2lkZW50U2VsZWN0b3IuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJjbGFzcyBBcHBBY2FkZW15U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtYXBwXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhcHAtYWNhZGVteS1idG5cIiwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDE0LjgsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlRoZSB0eXBpY2FsIEFwcCBBY2FkZW15IHN0dWRlbnRcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjYWRlbXlTZWxlY3RvcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNhdGVnb3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWZpbHRlclwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wiRW1wbG95ZWQgYnkgR2VuZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdlbmRlciBDb21wYXJpc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV2ZXJ5b25lIGJ5IERheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXkgQ29tcGFyaXNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiXVxuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIilcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24udmFsdWUgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gICAgfSlcblxuICAgIGNhdGVnb3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwianMtXCJdJylcbiAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIikpO1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRW1wbG95ZWQgYnkgR2VuZGVyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtcGxveWVkXCIpO1xuICAgICAgICAgICAgICAgIGVtcGxveWVkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdlbmRlciBDb21wYXJpc29uXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1nZW5kZXJcIik7XG4gICAgICAgICAgICAgICAgZ2VuZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkV2ZXJ5b25lIGJ5IERheVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1ldmVyeW9uZVwiKTtcbiAgICAgICAgICAgICAgICBldmVyeW9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEYXkgQ29tcGFyaXNvblwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcHAgQWNhZGVteSBTdHVkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hcHBcIik7XG4gICAgICAgICAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1yZXNpZGVudFwiKTtcbiAgICAgICAgICAgICAgICByZXNpZGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogXCJyZWRcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogXCJvcmFuZ2VcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IFwieWVsbG93XCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiBcImdyZWVuXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IFwiYmx1ZVwiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiBcImluZGlnb1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogXCJ2aW9sZXRcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogXCJncmF5XCIsXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiBcImJsYWNrXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogXCJjeWFuXCIsXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiBcImNoYXJ0cmV1c2VcIixcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogXCJtYWdlbnRhXCIsXG4gICAgXCJNZW5cIjogXCJibHVlXCIsXG4gICAgXCJXb21lblwiOiBcInJlZFwiLFxuICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBcImdyZWVuXCIsXG4gICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IFwicGlua1wiXG59IiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgIGNvbnN0IGFjdGl2aXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWN0aXZpdHlMYWJlbC5pbm5lclRleHQgPSBcIkFjdGl2aXRpZXNcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5TGFiZWwpXG5cbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdGlvbnMgPSBbXCJBbGwgQWN0aXZpdGllc1wiXS5jb25jYXQoQUNUSVZJVElFUyk7XG4gICAgYWN0aXZpdHlTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgeWVhclNlbGVjdG9yID0gKHVwZGF0ZVllYXJzLCBmaWx0ZXIsIHByZWZpeCwgeWVhcnMpID0+IHtcbiAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0b3IpO1xuICAgIHllYXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgY29uc3QgeWVhcnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB5ZWFyc0xhYmVsLmlubmVyVGV4dCA9IFwiWWVhcnNcIjtcbiAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoeWVhcnNMYWJlbClcblxuICAgIGNvbnN0IHllYXJTZWxlY3Rpb25zID0geWVhcnM7XG4gICAgeWVhclNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgeWVhck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgeWVhck9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHllYXJPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICB5ZWFyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVZZWFycylcbn1cblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IChoYW5kbGVTdWJtaXQsIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWJ0bmAsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Ym1pdClcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0ID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG5cbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYW4gYWN0aXZpdHlcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcblxuXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IEFDVElWSVRJRVM7XG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlQWN0aXZpdHkpXG59IiwiaW1wb3J0IHtDT0xPUlN9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCBkYXR1bSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENPTE9SU1tkYXR1bV07XG4gICAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBcIjEwcHhcIjtcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gXCIxMHB4XCI7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC5pbm5lclRleHQgPSBkYXR1bSArIFwiIC0gXCIgKyBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZF95ZWFyT3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RfeWVhck9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHllYXJzO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDA4XCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWRheVwiKTtcblxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJkXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDhcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZGF5XCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuZGVyID0gdGhpcy51cGRhdGVHZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBBQ1RJVklUSUVTLFxuICAgICAgICAgICAgZ2VuZGVyOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlX2FjdGl2aXR5T3B0aW9uXCIpLmZvckVhY2ggKG9wdGlvbiA9PiB7b3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlciggYWN0aXZpdHkgPT4ge3JldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wifSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKHNlbGVjdCA9PiB7cmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWV9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlWWVhcnMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2VuZGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltcImdlbmRlclwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgYWN0aXZpdGllcywgeWVhcnM7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBBQ1RJVklUSUVTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIGdlbmRlcjogc2VsZWN0aW9ucy5nZW5kZXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImRpc3BsYXlcIiwgXCJqcy1lbXBsb3llZFwiKTtcblxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3Rvcih0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIFwiZVwiKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJlXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cblxuICAgICAgICBjb25zdCBnZW5kZXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChnZW5kZXJTZWxlY3Rvcik7XG4gICAgICAgIGdlbmRlclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZWxlY3QgZ2VuZGVyXCIpKVxuICAgICAgICBjb25zdCBnZW5kZXJzID0gW1wiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsIFwiV29tZW5cIiwgXCJNZW5cIl07XG4gICAgICAgIGdlbmRlcnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGdlbmRlck9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgICAgIGdlbmRlck9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgICAgICBnZW5kZXJTZWxlY3Rvci5hcHBlbmRDaGlsZChnZW5kZXJPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIGdlbmRlclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy51cGRhdGVHZW5kZXIpXG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImVtcGxveWVkXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJFbXBsb3llZCBtZW4gYW5kIHdvbWVuIG9uIGFuIGF2ZXJhZ2UgZGF5XCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVR5cGUgPSB0aGlzLnVwZGF0ZVR5cGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2V2X2FjdGl2aXR5T3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldl9hY3Rpdml0eU9wdGlvbkFsbFwiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlcihhY3Rpdml0eSA9PiB7IHJldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBZZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNldl95ZWFyT3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgWWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldl95ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgWWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVHlwZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ0eXBlXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IGFjdGl2aXRpZXMsIHllYXJzO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gQUNUSVZJVElFUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDA4XCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZXZlcnlvbmVcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyLCBcImV2XCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImV2XCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDhcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZCh0eXBlU2VsZWN0b3IpO1xuICAgICAgICB0eXBlU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgICAgICB0eXBlU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZWxlY3QgdHlwZVwiKSlcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXCJBbGwgZGF5c1wiLCBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIiwgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdO1xuICAgICAgICB0eXBlcy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHR5cGVPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgICAgICB0eXBlT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZCh0eXBlT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICB0eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZVR5cGUpXG5cblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZXZlcnlvbmVcIik7XG5cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQWxsIHBlcnNvbnMgb24gbm9uaG9saWRheSB3ZWVrZGF5cyBvciB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVyeW9uZVNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgR2VuZGVyQ29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHllYXJzO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFycyA9IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ195ZWFyT3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dfeWVhck9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWdlbmRlclwiKTtcbiAgICAgICAgXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImdcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtcmVzaWRlbnRcIik7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzaWRlbnQtYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC41LFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4zLFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJBIGZpcnN0LXllYXIgbWVkaWNhbCByZXNpZGVudCBhdCBVQ1NGXCI7XG5cbiAgICAgICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGNpdGF0aW9uKTtcbiAgICAgICAgY2l0YXRpb24uY2xhc3NMaXN0LmFkZChcImNpdGF0aW9uXCIpO1xuICAgICAgICBjaXRhdGlvbi5pbm5lclRleHQgPSBcIkRhdGEgYXBwcm94aW1hdGVkIGZyb20gaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpZGVudFNlbGVjdG9yOyIsImNsYXNzIFV0aWxzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcnJheVN1bSA9IHRoaXMuYXJyYXlTdW0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheUF2ZXJhZ2UgPSB0aGlzLmFycmF5QXZlcmFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5TWVyZ2UgPSB0aGlzLmFycmF5TWVyZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIgPSB0aGlzLmVtcGxveWVkRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlciA9IHRoaXMuZXZlcnlvbmVEYXRhRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBhcnJheVN1bSAoYXJyKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGFycltpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGFycmF5QXZlcmFnZSAoYXJyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5U3VtKGFycikgLyBhcnIubGVuZ3RoO1xuICAgIH1cblxuICAgIGFycmF5TWVyZ2UgKC4uLmFycmF5cykge1xuICAgICAgICBsZXQgZmluYWwgPSBbXTtcbiAgICAgICAgaWYgKGFycmF5cy5ldmVyeSggYXJyID0+IHsgcmV0dXJuIGFyci5sZW5ndGggPT09IGFycmF5c1swXS5sZW5ndGg7IH0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYXJyYXlzIGFyZSBub3QgdGhlIHNhbWUgbGVuZ3RoXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheXNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgYXJyYXlzLmZvckVhY2goIGFyciA9PiB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmaW5hbC5wdXNoKHN1YkFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH1cblxuICAgIGVtcGxveWVkRGF0YUZpbHRlciAoYWN0aXZpdGllcywgZ2VuZGVyLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goIGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgIGFjdGl2aXR5RmlsdGVyLnB1c2goZGF0YVthY3Rpdml0eV0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnZW5kZXJGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bZ2VuZGVyXSB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IGdlbmRlckZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgICAgICB5ZWFycy5mb3JFYWNoKCB5ZWFyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxZZWFycyA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdO1xuICAgICAgICAgICAgICAgIHllYXJseUZpbHRlci5wdXNoKGFsbFllYXJzW3llYXJdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1tPYmplY3Qua2V5cyhkYXR1bSlbMF1dOiB0aGlzLmFycmF5QXZlcmFnZSh5ZWFybHlGaWx0ZXIpfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBzb3J0ZWQuZm9yRWFjaCAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0W09iamVjdC5rZXlzKGRhdHVtKVswXV0gPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZlcnlvbmVEYXRhRmlsdGVyKGFjdGl2aXRpZXMsIHR5cGUsIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gW107XG4gICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdHlwZUZpbHRlciA9IGFjdGl2aXR5RmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbZGF0dW0uYWN0aXZpdHldOiBkYXR1bVt0eXBlXSB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IHR5cGVGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxZZWFycyA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdO1xuICAgICAgICAgICAgICAgIHllYXJseUZpbHRlci5wdXNoKGFsbFllYXJzW3llYXJdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKSB9O1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc29ydGVkID0gZmluYWxEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoT2JqZWN0LnZhbHVlcyhhKVswXSA+IE9iamVjdC52YWx1ZXMoYilbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0W09iamVjdC5rZXlzKGRhdHVtKVswXV0gPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2VuZGVyQ29tcEZpbHRlcihhY3Rpdml0eSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBkYXRhW2FjdGl2aXR5XVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWVuRmlsdGVyID0geyBcIk1lblwiOiBhY3Rpdml0eUZpbHRlcltcIk1lblwiXSB9XG4gICAgICAgIGNvbnN0IHdvbWVuRmlsdGVyID0geyBcIldvbWVuXCI6IGFjdGl2aXR5RmlsdGVyW1wiV29tZW5cIl19XG5cblxuICAgICAgICBjb25zdCBtZW5ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTWVuWWVhcnMgPSBPYmplY3QudmFsdWVzKG1lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBtZW5ZZWFybHlGaWx0ZXIucHVzaChhbGxNZW5ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShtZW5ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IHdvbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbFdvbWVuWWVhcnMgPSBPYmplY3QudmFsdWVzKHdvbWVuRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIHdvbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsV29tZW5ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdvbWVuRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKHdvbWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBpZiAod29tZW5EYXRhID4gbWVuRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIldvbWVuXCI6IHdvbWVuRGF0YSxcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTWVuXCI6IG1lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGF5Q29tcEZpbHRlcihhY3Rpdml0eSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBkYXRhW2FjdGl2aXR5XVxuXG4gICAgICAgIGNvbnN0IG5vbkZpbHRlciA9IHsgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IGFjdGl2aXR5RmlsdGVyW1wiTm9uaG9saWRheSB3ZWVrZGF5c1wiXSB9XG4gICAgICAgIGNvbnN0IGhvbGlGaWx0ZXIgPSB7IFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0gfVxuXG4gICAgICAgIGNvbnN0IG5vblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxOb25ZZWFycyA9IE9iamVjdC52YWx1ZXMobm9uRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIG5vblllYXJseUZpbHRlci5wdXNoKGFsbE5vblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgbm9uRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKG5vblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgY29uc3QgaG9saVllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxIb2xpWWVhcnMgPSBPYmplY3QudmFsdWVzKGhvbGlGaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgaG9saVllYXJseUZpbHRlci5wdXNoKGFsbEhvbGlZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGhvbGlEYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UoaG9saVllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKGhvbGlEYXRhID4gbm9uRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogaG9saURhdGEsXG4gICAgICAgICAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IG5vbkRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IG5vbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlscztcblxuLy8gZGF0YUZpbHRlcihbXCJPdGhlciBhY3Rpdml0aWVzLCBub3QgZWxzZXdoZXJlIGNsYXNzaWZpZWQgKGluY2x1ZGVzIG1pc2MuIHRyYXZlbCBhbmQgZGF0YSBjb2RlcylcIiwgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlLW1haWwgKGluY2x1ZGVzIHRyYXZlbClcIl0sXG4vLyAuLi4gICAgICAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIixcbi8vIC4uLltcIjIwMTNcIiwgXCIyMDE0XCJdLFxuLy8gLi4uZW1wbG95ZWRCeUdlbmRlcilcbiIsImltcG9ydCB7Q09MT1JTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG1hcmdpbiA9IDEwO1xuXG4gICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiN3YXRjaFwiKVxuICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250YWluZXJcIiwgdHJ1ZSlcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7IHdpZHRoID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoOyByZXR1cm4gd2lkdGggfSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgaGVpZ2h0ID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDsgcmV0dXJuIGhlaWdodCB9KVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHdpZHRoIC8gMiArIFwiLFwiICsgaGVpZ2h0IC8gMiArIFwiKVwiKTtcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSBtYXJnaW47XG5cbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWU7IH0pXG5cbiAgICBjb25zdCBwcm9jZXNzZWRfZGF0YSA9IGQzLmVudHJpZXMoZGF0YSk7XG5cbiAgICBwcm9jZXNzZWRfZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLnBlcmNlbnRhZ2UgPSBkLnZhbHVlIC8gMjQ7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBmaW5hbF9kYXRhID0gcGllKHByb2Nlc3NlZF9kYXRhKTtcblxuICAgIGNvbnN0IGFyYyA9IGQzLmFyYygpXG4gICAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgKiAwLjgpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpXG5cbiAgICBjb25zdCBwYXRocyA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgLmRhdGEoZmluYWxfZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG5cbiAgICBwYXRoc1xuICAgICAgICAuZWFjaCggZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChDT0xPUlNbZC5kYXRhLmtleV0pIH0pXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgJ2dyYXknKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhcmNzJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5kYXRhLnBlcmNlbnRhZ2UgKiAzMDAwfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5hcnJheVN1bShwYXRocy5ub2RlcygpLnNsaWNlKDAsIGkpLm1hcChlbCA9PiBkMy5zZWxlY3QoZWwpLmRhdGEoKVswXS5kYXRhLnBlcmNlbnRhZ2UpKSAqIDMwMDAgLSAyMDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSArIDAuMSwgZC5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG59XG4gICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAvLyAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuOSlcblxuICAgIC8vIHdpbmRvdy5vbnJlc2l6ZSA9IGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTYyNjUxMjMvcmVzaXplLXN2Zy13aGVuLXdpbmRvdy1pcy1yZXNpemVkLWluLWQzLWpzXG4gICAgLy8gZm9yIHJlc3BvbnNpdmUgU1ZHIGRlc2lnblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NzYyOTgyL2hvdy10by1kaXNwbGF5LXBlcmNlbnRhZ2UtdG8tdGhlLWQzLWpzLXBpZWNoYXJ0XG4gICAgLy8gZm9yIHBlcmNlbnRhZ2VzXG4gICAgLy8gaHR0cHM6Ly9ibC5vY2tzLm9yZy9mYXJhenNodWphL2UyY2I1MjgyOGMwODBiYTg1ZGE1NDU4ZTIzMDRhNjFmXG4gICAgLy8gZm9yIGxhYmVsaW5nIHNsaWNlcyB3aXRoIHBlcmNlbnRhZ2VzXG4gICAgLy8gaHR0cDovL2JsLm9ja3Mub3JnL25hZGluZXNrLzk5MzkzMDk4OTUwNjY1YzQ3MWUwMzVhYzUxN2MyMjI0XG4gICAgLy8gZm9yIHRyYW5zaXRpb25zXG4gICAgLy8gaHR0cHM6Ly9ibC5vY2tzLm9yZy9tYm9zdG9jay8xMTI1OTk3XG4gICAgLy8gZm9yIGNoYWluZWQgdHJhbnNpdGlvbnNcbiJdLCJzb3VyY2VSb290IjoiIn0=