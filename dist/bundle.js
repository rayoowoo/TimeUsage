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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsImlubmVyVGV4dCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25zIiwiYWN0aXZpdHlTZWxlY3QiLCJ1cGRhdGVBY3Rpdml0eSIsInllYXJTZWxlY3RvciIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsIkFDVElWSVRJRVMiLCJhY3Rpdml0eVNlbGVjdG9yIiwib3RoZXJTZWxlY3RvciIsInVwZGF0ZUdlbmRlciIsInVwZGF0ZVR5cGUiLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbHJlYWR5YnRuIiwibmV4dFN0ZXAiLCJ5ZXNCdG4iLCJjaXRhdGlvbiIsImEiLCJleGl0QnV0dG9uIiwiZmlyc3RCdXR0b24iLCJzdGVwcyIsInNlY29uZEJ1dHRvbiIsInRoaXJkQnV0dG9uIiwiZm91cnRoQnV0dG9uIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkMyIsInNlbGVjdCIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwiYXJyYXlTdW0iLCJtYXAiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsInN0eWxlIiwiQ09MT1JTIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIm5vZGVzIiwic2xpY2UiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiLCJVcGRhdGUiLCJwcmVmaXgiLCJ0aGF0IiwiYWN0aXZpdHlMYWJlbCIsImFjdGl2aXR5U2VsZWN0aW9ucyIsImNvbmNhdCIsImRpdiIsImFjdGl2aXR5T3B0aW9uIiwiY2hlY2tlZCIsInllYXJzTGFiZWwiLCJ5ZWFyU2VsZWN0aW9ucyIsInllYXJPcHRpb24iLCJkcmF3SGFuZHMiLCJvbGQiLCJoYW5kcyIsIm1pbnV0ZXMiLCJob3VycyIsImRhcmtNb2RlQnRuIiwidGV4dCIsInBhZ2UiLCJjb250YWlucyIsImJ0biIsImZvb3RlciIsImh0bWwiLCJ0b2dnbGUiLCJvcmRlciIsInN0ZXBUZXh0IiwiYnV0dG9uVGV4dCIsInRyaWFuZ2xlRGlyZWN0aW9uIiwic3RlcCIsImJ1dHRvbiIsInRyaWFuZ2xlQSIsInRyaWFuZ2xlQiIsInRyaWFuZ2xlIiwid29yZHMiLCJvcHRpb25zIiwidXBkYXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJhbGwiLCJuZXdBcnIiLCJwdXNoIiwiYXJyYXlBdmVyYWdlIiwiYXJyYXlNZXJnZSIsImFyciIsInN1bSIsImxlbmd0aCIsImFycmF5cyIsImZpbmFsIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwic3ViQXJyIiwiYWN0aXZpdHlGaWx0ZXIiLCJnZW5kZXJGaWx0ZXIiLCJmaW5hbERhdGEiLCJ5ZWFybHlGaWx0ZXIiLCJhbGxZZWFycyIsInZhbHVlcyIsInNvcnRlZCIsImIiLCJ0eXBlRmlsdGVyIiwibWVuRmlsdGVyIiwid29tZW5GaWx0ZXIiLCJtZW5ZZWFybHlGaWx0ZXIiLCJhbGxNZW5ZZWFycyIsIm1lbkRhdGEiLCJ3b21lblllYXJseUZpbHRlciIsImFsbFdvbWVuWWVhcnMiLCJ3b21lbkRhdGEiLCJub25GaWx0ZXIiLCJob2xpRmlsdGVyIiwibm9uWWVhcmx5RmlsdGVyIiwiYWxsTm9uWWVhcnMiLCJub25EYXRhIiwiaG9saVllYXJseUZpbHRlciIsImFsbEhvbGlZZWFycyIsImhvbGlEYXRhIiwiY2xhc3NOYW1lIiwibmV4dCIsIm5leHRDbGFzcyIsIm5leHRDb21wb25lbnQiLCJwcmV2Q29tcG9uZW50IiwiY2xvc2VNb2RhbCIsIm5leHRJdGVtIiwibmV4dENvbXAiLCJwcmV2Q29tcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLDhDQUFtQjtBQUM1QixnQ0FBNEI7QUFDeEIsb0JBQVksMEJBRFk7QUFFeEIsb0JBQVksR0FGWTtBQUd4QixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJ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VCxDQUFpQjtBQUFBLCtCQUFNaUIsR0FBR3JCLFNBQUgsQ0FBYVksTUFBYixDQUFvQixtQkFBcEIsQ0FBTjtBQUFBLHFCQUFqQjtBQUNIO0FBQ0osYUFoQkQ7QUFpQkg7Ozs7OztrQkFJVS9ELEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgY29uc3QgZW1wbG95ZWRCeUdlbmRlciA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDguODgsXG4gICAgICAgICAgICBcIjIwMTRcIjogOC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA4Ljk5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDguODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogOC45NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA4LjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS40MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjQ4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4wNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjA2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4wNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS45NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjksXG4gICAgICAgICAgICBcIjIwMThcIjogMi4wMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjY3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LCBcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC44MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuOTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS40OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjU4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQ5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuMzUsXG4gICAgICAgICAgICBcIjIwMThcIjogNi40N1xuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNS42NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS43NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuMDYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjAxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuOTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuOTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy45MSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjg0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC4wMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjczLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNjgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy42NVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNDMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy4zOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMThcIjogMy4zNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBldmVyeW9uZUJ5RGF5ID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuMjQsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMTAuMDcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMTAuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMTAuMDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMTAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMTAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMTAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMTAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMTAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjU4NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuNjU1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuNjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS42NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjcwNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5Ljc0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5Ljc5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5Ljc2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNzY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjM2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4zOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4zNVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjI2NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI1NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yMDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS43LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuNjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjU5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjcxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuMDYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi4xMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMi4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS44MjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuODc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuODM1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjkzNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjkxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjg4IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuOTEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC44NFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC43NDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjc3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC43NTUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjUzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTE1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDg1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjUxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNDEsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC41NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMy4wNixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuODY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuOTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuODksXG4gICAgICAgICAgICBcIjIwMTNcIjogMi44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuODc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuOTMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMi44NzUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42MyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzc1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNiBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC42MixcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjcxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNjcsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC43MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0Ljg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjY5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjcyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNi40OCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA2LjUzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDYuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA2LjM0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogNi41NlxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA1LjU1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDUuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS42NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS41NixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjU5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNjRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTQgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjk1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI3NVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBcHAgZnJvbSAnLi9qcy9jb21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXIoKTsiLCJpbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb24nXG5pbXBvcnQgV2F0Y2ggZnJvbSAnLi93YXRjaCdcbmltcG9ydCBDYXRlZ29yeVNlbGVjdG9yIGZyb20gJy4vY2F0ZWdvcnlfc2VsZWN0b3InXG5pbXBvcnQgRW1wbG95ZWRTZWxlY3RvcnMgZnJvbSAnLi9lbXBsb3llZF9zZWxlY3RvcnMnXG5pbXBvcnQgRXZlcnlvbmVTZWxlY3RvcnMgZnJvbSAnLi9ldmVyeW9uZV9zZWxlY3RvcnMnXG5pbXBvcnQgRGF0YURpc3BsYXkgZnJvbSAnLi9kYXRhX2Rpc3BsYXknXG5pbXBvcnQgQXBwQWNhZGVteVNlbGVjdG9yIGZyb20gJy4vYXBwX2FjYWRlbXlfc2VsZWN0b3InO1xuaW1wb3J0IFJlc2lkZW50U2VsZWN0b3IgZnJvbSAnLi9yZXNpZGVudF9zZWxlY3Rvcic7XG5pbXBvcnQgR2VuZGVyQ29tcCBmcm9tICcuL2dlbmRlcl9jb21wJ1xuaW1wb3J0IERheUNvbXAgZnJvbSAnLi9kYXlfY29tcCdcbmltcG9ydCB7IGVtcGxveWVkQnlHZW5kZXIgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9lbXBsb3llZEJ5R2VuZGVyRGF0YVNoYXBlZCdcbmltcG9ydCB7IGV2ZXJ5b25lQnlEYXkgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge2RyYXdIYW5kcywgZGFya01vZGVCdG59IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJztcblxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXkgdWxcIik7XG4gICAgICAgIGlmIChzdmcpIHsgc3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTsgfVxuICAgICAgICBpZiAoZGlzcGxheSkgeyBkaXNwbGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlzcGxheSk7IH1cbiAgICAgICAgV2F0Y2goZGF0YSk7XG4gICAgICAgIERhdGFEaXNwbGF5KGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGRyYXdIYW5kcygpO1xuICAgICAgICBkYXJrTW9kZUJ0bih0aGlzLmRyYXcsIGRhdGEsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgICAgIC8vIGluc3RydWN0aW9ucyBtb2RhbFxuICAgICAgICBpbnN0cnVjdGlvbnMoKTtcblxuICAgICAgICAvLyBtYWtpbmcgYWxsIHRoZSBzZWxlY3RvcnNcbiAgICAgICAgQ2F0ZWdvcnlTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVkU2VsZWN0b3JzID0gbmV3IEVtcGxveWVkU2VsZWN0b3JzKCk7XG4gICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBnZW5kZXJDb21wID0gbmV3IEdlbmRlckNvbXAoKTtcbiAgICAgICAgZ2VuZGVyQ29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lU2VsZWN0b3JzID0gbmV3IEV2ZXJ5b25lU2VsZWN0b3JzKCk7XG4gICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBkYXlDb21wID0gbmV3IERheUNvbXAoKTtcbiAgICAgICAgZGF5Q29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGFwcEFjYWRlbXlTZWxlY3RvciA9IG5ldyBBcHBBY2FkZW15U2VsZWN0b3IoKTtcbiAgICAgICAgYXBwQWNhZGVteVNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG4gICAgICAgIGNvbnN0IHJlc2lkZW50U2VsZWN0b3IgPSBuZXcgUmVzaWRlbnRTZWxlY3RvcigpO1xuICAgICAgICByZXNpZGVudFNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFbXBsb3llZCBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXBsb3llZC1idG5cIik7XG4gICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICBjb25zdCBlbXBsb3llZFBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgZGVsZXRlIGVtcGxveWVkUGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgZW1wbG95ZWRQYXJhbXMpO1xuXG4gICAgICAgIGVtcGxveWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZ2VuZGVyIGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5kZXItYnRuXCIpO1xuICAgICAgICBnZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlckRhdGEgPSB1dGlscy5nZW5kZXJDb21wRmlsdGVyKGdlbmRlckNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGdlbmRlckNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhnZW5kZXJEYXRhLCBnZW5kZXJDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFdmVyeW9uZSBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVyeW9uZS1idG5cIik7XG4gICAgICAgIGV2ZXJ5b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBldmVyeW9uZURhdGEgPSB1dGlscy5ldmVyeW9uZURhdGFGaWx0ZXIoZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnR5cGUsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGV2ZXJ5b25lRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGRheSBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LWJ0blwiKTtcbiAgICAgICAgZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBkYXlEYXRhID0gdXRpbHMuZGF5Q29tcEZpbHRlcihkYXlDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBkYXlDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZGF5RGF0YSwgZGF5Q29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgQXBwIEFjYWRlbXkgU3R1ZGVudFxuICAgICAgICBjb25zdCBhcHBhY2FkZW15ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtYWNhZGVteS1idG5cIik7XG4gICAgICAgIGFwcGFjYWRlbXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhhcHBBY2FkZW15U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsIHllYXI6IFwiMjAxOVwifSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBmaXJzdCB5ZWFyIHJlc2lkZW50IGFmdGVyIG1lZGljYWwgc2Nob29sXG4gICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpZGVudC1idG5cIik7XG4gICAgICAgIHJlc2lkZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcocmVzaWRlbnRTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwifSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5jbGFzcyBBcHBBY2FkZW15U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImFwcFwiKVxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBDcmVhdGUuc2VsZWN0QnV0dG9uKGZpbHRlciwgXCJhcHAtYWNhZGVteVwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDE0LjgsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIlRoZSB0eXBpY2FsIEFwcCBBY2FkZW15IHN0dWRlbnQuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjYWRlbXlTZWxlY3RvcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNhdGVnb3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWZpbHRlclwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wiRW1wbG95ZWQgYnkgR2VuZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXZlcnlvbmUgYnkgRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIl1cblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggb3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpXG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlPcHRpb24pO1xuICAgIH0pXG5cbiAgICBjYXRlZ29yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImpzLVwiXScpXG4gICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpKTtcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcIkVtcGxveWVkIGJ5IEdlbmRlclwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1lbXBsb3llZFwiKTtcbiAgICAgICAgICAgICAgICBlbXBsb3llZC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1nZW5kZXJcIik7XG4gICAgICAgICAgICAgICAgZ2VuZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkV2ZXJ5b25lIGJ5IERheVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1ldmVyeW9uZVwiKTtcbiAgICAgICAgICAgICAgICBldmVyeW9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFwcFwiKTtcbiAgICAgICAgICAgICAgICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXJlc2lkZW50XCIpO1xuICAgICAgICAgICAgICAgIHJlc2lkZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJpbXBvcnQge2FscGhhfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCAoZGF0dW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHAuaW5uZXJUZXh0ID0gZGF0dW07XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGFscGhhW2ldKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1saXN0LWl0ZW1zXCIpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gZGF0YVtkYXR1bV0udG9GaXhlZCgyKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNvbnN0IGFyYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FscGhhW2ldfWApO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5hZGQoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5yZW1vdmUoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiA/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJkYXlcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKSwgZmlsdGVyKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZFwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCBmaWx0ZXIsIFwiZGF5XCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2Ygbm9uaG9saWRheSB3ZWVrZGF5cyBhZ2FpbnN0IHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheUNvbXAiLCJpbXBvcnQge0FDVElWSVRJRVN9IGZyb20gJy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5jbGFzcyBFbXBsb3llZFNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogQUNUSVZJVElFUyxcbiAgICAgICAgICAgIGdlbmRlcjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUdlbmRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJnZW5kZXJcIl0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aXZpdGllcyA9IHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSBcIkFsbCBBY3Rpdml0aWVzXCIgPyBBQ1RJVklUSUVTIDogc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgPyBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgZ2VuZGVyOiBzZWxlY3Rpb25zLmdlbmRlcixcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImVtcGxveWVkXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJlXCIsIHRoaXMpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJlXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJnZW5kZXJcIiwgW1wiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsIFwiV29tZW5cIiwgXCJNZW5cIl0sIHRoaXMudXBkYXRlR2VuZGVyLmJpbmQodGhpcykpXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImVtcGxveWVkXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkVtcGxveWVkIG1lbiBhbmQgd29tZW4gb24gYW4gYXZlcmFnZSBkYXlcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVkU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBldmVyeW9uZVNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBbGwgZGF5c1wiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlVHlwZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ0eXBlXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiID8gQUNUSVZJVElFUyA6IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSA6IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IGFjdGl2aXRpZXMsXG4gICAgICAgICAgICB5ZWFyczogeWVhcnMsXG4gICAgICAgICAgICB0eXBlOiBzZWxlY3Rpb25zLnR5cGUsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRXZlcnlvbmUgYnkgZGF5XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZXZlcnlvbmVcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IoZmlsdGVyLCBcImV2XCIsIHRoaXMpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLm90aGVyU2VsZWN0b3IoZmlsdGVyLCBcInR5cGVcIiwgW1wiQWxsIGRheXNcIiwgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCIsIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiXSwgdGhpcy51cGRhdGVUeXBlLmJpbmQodGhpcykpXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImV2ZXJ5b25lXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkFsbCBwZXJzb25zIG9uIG5vbmhvbGlkYXkgd2Vla2RheXMgb3Igd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlcnlvbmVTZWxlY3RvcnM7IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5cbmNsYXNzIEdlbmRlckNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgPyBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJnZW5kZXJcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKSwgZmlsdGVyLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZ1wiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJnZW5kZXJcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQ29tcGFyaXNvbiBvZiBlbXBsb3llZCBtZW4gYW5kIHdvbWVuXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5kZXJDb21wXG5cblxuLy8gZ29hbDoge1wiV29tZW5cIjogMC41LCBcIk1lblwiOiA0LjN9IiwiaW1wb3J0IFdhbGt0aHJvdWdoIGZyb20gJy4vd2Fsa3Rocm91Z2gnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuICAgIC8vIENyZWF0aW5nIHRoZSBtb2RhbFxuICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICAvLyBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGltZSBVc2FnZVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFRpbWUgVXNhZ2UsIGEgZGF0YSB2aXN1YWxpemF0aW9uIG9mIGhvdyBBbWVyaWNhbnMgdXNlIHRoZWlyIHRpbWUgb24gYSBnaXZlbiBkYXkuIFRoZSBkYXRhIGlzIGdhdGhlcmVkIGJ5IHRoZSBCdXJlYXUgb2YgTGFib3IgU3RhdGlzdGljcyBvbmNlIGEgeWVhci5cIlxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGVzY3JpcHRpb25cIik7XG5cbiAgICAvLyBRdWVzdGlvblxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJXb3VsZCB5b3UgbGlrZSBhIGJyaWVmIHdhbGt0aHJvdWdoP1wiO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtcXVlc3Rpb25cIik7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnNcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgICAvLyBFeGl0IGJ1dHRvblxuICAgXG4gICAgLy8gSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUgYnV0dG9uLiBUYWtlcyB0aGVtIGRpcmVjdGx5IGludG8gdGhlIGFwcC5cbiAgICBjb25zdCBhbHJlYWR5YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFscmVhZHlidG4pO1xuICAgIGFscmVhZHlidG4uaW5uZXJUZXh0ID0gXCJJJ3ZlIGFscmVhZHkgdXNlZCB0aGlzIGJlZm9yZS5cIjtcbiAgICBhbHJlYWR5YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpKTtcblxuICAgIC8vIFdhbGt0aHJvdWdoIGJ1dHRvbi4gSXQgc2hvdWxkIHRha2UgdGhlbSB0aHJvdWdoIHRoZSB3YWxrdGhyb3VnaC4gXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHllc0J0bik7IFxuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllcywgcGxlYXNlLlwiO1xuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIFdhbGt0aHJvdWdoKGJsdXIpO1xuICAgICAgICB1dGlscy5uZXh0U3RlcChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKShlKTtcbiAgICB9KTtcblxufSIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgUmVzaWRlbnRTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwicmVzaWRlbnRcIilcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBDcmVhdGUuc2VsZWN0QnV0dG9uKGZpbHRlciwgXCJyZXNpZGVudFwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjUsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjMsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkEgZmlyc3QteWVhciBtZWRpY2FsIHJlc2lkZW50IGF0IFVDU0YuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICAgICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGNpdGF0aW9uKTtcbiAgICAgICAgY2l0YXRpb24uY2xhc3NMaXN0LmFkZChcImNpdGF0aW9uXCIpO1xuICAgICAgICBjaXRhdGlvbi5pbm5lclRleHQgPSBcIkRhdGEgYXBwcm94aW1hdGVkIGZyb20gXCI7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCIpO1xuICAgICAgICBhLmlubmVyVGV4dCA9IFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCI7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICBjaXRhdGlvbi5hcHBlbmRDaGlsZChhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2lkZW50U2VsZWN0b3I7IiwiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBibHVyID0+IHtcbiAgICAvLyBXYWxrdGhyb3VnaFxuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xuICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgXCJleGl0XCIpO1xuICAgIGV4aXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeGl0IHdhbGt0aHJvdWdoXCI7XG4gICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcImV4aXRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIG51bGwsIFwiKlwiKSlcblxuICAgIGNvbnN0IGZpcnN0QnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwiZmlyc3RcIixcbiAgICAgICAgXCJTdGFydCBieSBob3cgeW91IHdhbnQgdG8gZmlsdGVyIHRoZSBkYXRhLiBTZWxlY3QgYSBnZW5lcmFsIGNhdGVnb3J5LiBOb3RlIHRoYXQgQXBwIEFjYWRlbXkgU3R1ZGVudCBhbmQgRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50IGFyZSBub3QgZnJvbSB0aGUgQW1lcmljYW4gVGltZSBVc2FnZSBTdXJ2ZXkuXCIsXG4gICAgICAgIFwiR290IGl0IVwiLFxuICAgICAgICBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBzZWNvbmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJzZWNvbmRcIixcbiAgICAgICAgJ1NlbGVjdCB5b3VyIHBhcmFtZXRlcnMuIEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBoYXZlIG5vIHBhcmFtZXRlcnMuIFRoZW4gY2xpY2sgXCJTdWJtaXQgU2VsZWN0aW9uLlwiJyxcbiAgICAgICAgXCJHcmVhdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgdGhpcmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJ0aGlyZFwiLFxuICAgICAgICAnQXMgeW91IGhvdmVyIG92ZXIgdGhlIHNsaWNlcyBvZiB0aGUgZ3JhcGgsIHRoZSBjb3JyZXNwb25kaW5nIGRhdGEgd2lsbCBsaWdodCB1cCwgYW5kIHZpY2UgdmVyc2EuIE5vdGUgdGhhdCB0aGVzZSBzbGljZXMgYXJlIHRlY2huaWNhbGx5IHByb3BvcnRpb25zLCBhbmQgbm90IHN0cmljdGx5IG91dCBvZiAyNCBob3Vycy4gSXQgZGVwZW5kcyBvbiB0aGUgcGFyYW1ldGVycy4nLFxuICAgICAgICBcIkF3ZXNvbWUhXCJcbiAgICAgICAgKVxuICAgIGNvbnN0IGZvdXJ0aEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZvdXJ0aFwiLFxuICAgICAgICBcIlRoZXJlJ3MgYSBkYXJrIG1vZGUgaWYgbmVlZGVkLlwiLFxuICAgICAgICBcIkknbSByZWFkeS5cIixcbiAgICAgICAgXCJkb3duXCJcbiAgICApXG4gICAgZmlyc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1maXJzdFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLXNlY29uZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuc2VsZWN0b3JzXCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKSlcbiAgICBzZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIjY1wiLCBcIi5zZWxlY3RvcnNcIikpXG4gICAgdGhpcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZvdXJ0aFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuZGFyay1idG5cIiwgXCIjY1wiKSlcbiAgICBmb3VydGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIuZGFyay1idG5cIikpXG59IiwiaW1wb3J0IHthbHBoYSwgQ09MT1JTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG1hcmdpbiA9IDE1O1xuXG4gICAgbGV0IHdpZHRoLCBoZWlnaHQ7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiN3YXRjaFwiKVxuICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250YWluZXJcIiwgdHJ1ZSlcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7IHdpZHRoID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoOyByZXR1cm4gd2lkdGggfSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgaGVpZ2h0ID0gdGhpcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDsgcmV0dXJuIGhlaWdodCB9KVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHdpZHRoIC8gMiArIFwiLFwiICsgaGVpZ2h0IC8gMiArIFwiKVwiKTtcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSBtYXJnaW47XG5cbiAgICAvLyBzZXR0aW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBwaWVcbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWU7IH0pXG5cbiAgICAvLyBmb3JtYXR0aW5nIHRoZSBkYXRhIG9iamVjdCByZWNlaXZlZCBpbnRvIGFuIGFycmF5IG9mIFBPSk9TIHdpdGggdGhlIGtleXMgXCJrZXlcIiBhbmQgXCJ2YWx1ZVwiIGFuZCB2YWx1ZXMgY29ycmVzcG9uZGluZ2x5LiBcbiAgICBjb25zdCBwcm9jZXNzZWRfZGF0YSA9IGQzLmVudHJpZXMoZGF0YSk7XG5cbiAgICAvLyB0b3RhbCBvZiB0aGUgdmFsdWVzLCB1c2VkIHRvIGNhbGN1bGF0ZSBwZXJjZW50YWdlLlxuICAgIGNvbnN0IHRvdGFsID0gdXRpbHMuYXJyYXlTdW0ocHJvY2Vzc2VkX2RhdGEubWFwKGQgPT4ge3JldHVybiBkLnZhbHVlfSkpXG5cbiAgICAvLyBhc3NpZ25pbmcgZWFjaCBkYXRhIGVudHJ5IGEgcGVyY2VudGFnZSB2YWx1ZVxuICAgIHByb2Nlc3NlZF9kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgIGQucGVyY2VudGFnZSA9IGQudmFsdWUgLyB0b3RhbDtcbiAgICB9KVxuXG4gICAgLy8gdHVybmluZyB0aGUgZGF0YSB2YWx1ZXMgaW50byBhIHBpZSBncmFwaCwgd2l0aCB0aGUgZC52YWx1ZXMgYmVpbmcgaG93IG11Y2ggb2YgdGhlIHRvdGFsIGRvbnV0LiBcbiAgICBjb25zdCBmaW5hbF9kYXRhID0gcGllKHByb2Nlc3NlZF9kYXRhKTtcblxuICAgIC8vIGRlZmluaW5nIHRoZSBtZXRob2QgdG8gbWFrZSBhcmNzLiBzaW5jZSB3ZSBoYXZlIGFuIGlubmVyIHJhZGl1cyBhbmQgYW4gb3V0ZXIgcmFkaXVzLCB0aGlzIGlzIGEgZG9udXQuIFxuICAgIGNvbnN0IGFyYyA9IGQzLmFyYygpXG4gICAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgKiAwLjgpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpXG5cbiAgICAvLyBhbGwgdGhlIHBhdGhzIG1hZGUgZnJvbSB0aGUgZGF0YSB2YWx1ZXMuIFxuICAgIGNvbnN0IHBhdGhzID0gc3ZnXG4gICAgICAgIC5zZWxlY3RBbGwoKVxuICAgICAgICAuZGF0YShmaW5hbF9kYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcblxuICAgIC8vIG1ha2luZyB0aGUgYXJjcyBmb3IgZWFjaCBwYXRoLCBzZXR0aW5nIGxpc3RlbmVycywgYW5kIGNyZWF0aW5nIHRoZSB0cmFuc2l0aW9ucy4gXG4gICAgcGF0aHNcbiAgICAgICAgLmVhY2goIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhcmNzJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAvLyAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gYHJnYigkezI1NSAqICgxIC0gZC5kYXRhLnBlcmNlbnRhZ2UpfSwgNDIsIDU1KWAgfSlcbiAgICAgICAgICAgICAgICAvLyAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7cmV0dXJuIGByZ2JhKDE1NywgNDIsIDU1LCAke2QuZGF0YS5wZXJjZW50YWdlfSlgfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBDT0xPUlNbaV0pXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoYWxwaGFbaV0sIHRydWUpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthbHBoYVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImZvY3VzZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihmdW5jdGlvbihkKSB7cmV0dXJuIGQuZGF0YS5wZXJjZW50YWdlICogMzAwMH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5hcnJheVN1bShwYXRocy5ub2RlcygpLnNsaWNlKDAsIGkpLm1hcChlbCA9PiBkMy5zZWxlY3QoZWwpLmRhdGEoKVswXS5kYXRhLnBlcmNlbnRhZ2UpKSAqIDMwMDAgKyAyMDA7IC8vIHRoaXMgbGluZSBpcyBsaXRlcmFsbHkganVzdCB0byBjYWxjdWxhdGUgdGhlIGRlbGF5IHN1Y2ggdGhhdCB0aGUgdHJhbnNpdGlvbnMgYXJlIG9uZSBhZnRlciB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG59XG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjY1MTIzL3Jlc2l6ZS1zdmctd2hlbi13aW5kb3ctaXMtcmVzaXplZC1pbi1kMy1qc1xuICAgIC8vIGZvciByZXNwb25zaXZlIFNWRyBkZXNpZ25cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc2Mjk4Mi9ob3ctdG8tZGlzcGxheS1wZXJjZW50YWdlLXRvLXRoZS1kMy1qcy1waWVjaGFydFxuICAgIC8vIGZvciBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvZmFyYXpzaHVqYS9lMmNiNTI4MjhjMDgwYmE4NWRhNTQ1OGUyMzA0YTYxZlxuICAgIC8vIGZvciBsYWJlbGluZyBzbGljZXMgd2l0aCBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9uYWRpbmVzay85OTM5MzA5ODk1MDY2NWM0NzFlMDM1YWM1MTdjMjIyNFxuICAgIC8vIGZvciB0cmFuc2l0aW9uc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyNTk5N1xuICAgIC8vIGZvciBjaGFpbmVkIHRyYW5zaXRpb25zXG4iLCJleHBvcnQgY29uc3QgQUNUSVZJVElFUyA9IFtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IGFscGhhID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCJdXG5cbmV4cG9ydCBjb25zdCBDT0xPUlMgPSBbXG4gICAgJ3JnYig4MCwgNDIsIDU1KScsXG4gICAgJ3JnYig5MCwgNDIsIDU1KScsXG4gICAgJ3JnYigxMDEsIDQyLCA1NSknLFxuICAgICdyZ2IoMTE4LCA0MiwgNTUpJyxcbiAgICAncmdiKDEzMywgNDIsIDU1KScsXG4gICAgJ3JnYigxNTAsIDQyLCA1NSknLFxuICAgICdyZ2IoMTYwLCA0MiwgNTUpJyxcbiAgICAncmdiKDE3NywgNDIsIDU1KScsXG4gICAgJ3JnYigxOTAsIDQyLCA1NSknLFxuICAgICdyZ2IoMjAyLCA0MiwgNTUpJyxcbiAgICAncmdiKDIxNiwgNDIsIDU1KScsXG4gICAgJ3JnYigyMjEsIDQyLCA1NSknLFxuXVxuIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIFVwZGF0ZSBmcm9tICcuL3VwZGF0ZSdcblxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IChmaWx0ZXIsIHByZWZpeCwgdGhhdCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICBjb25zdCBhY3Rpdml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFjdGl2aXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJBY3Rpdml0aWVzXCI7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eUxhYmVsKVxuXG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3Rpb25zID0gW1wiQWxsIEFjdGl2aXRpZXNcIl0uY29uY2F0KEFDVElWSVRJRVMpO1xuICAgIGFjdGl2aXR5U2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBVcGRhdGUuYWN0aXZpdHkocHJlZml4LCB0aGF0KSk7XG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyU2VsZWN0b3IgPSAoZmlsdGVyLCBwcmVmaXgsIHllYXJzLCB0aGF0KSA9PiB7XG4gICAgY29uc3QgeWVhclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdG9yKTtcbiAgICB5ZWFyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInllYXItc2VsZWN0b3JcIilcbiAgICBjb25zdCB5ZWFyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHllYXJzTGFiZWwuaW5uZXJUZXh0ID0gXCJZZWFyc1wiO1xuICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZCh5ZWFyc0xhYmVsKVxuXG4gICAgY29uc3QgeWVhclNlbGVjdGlvbnMgPSB5ZWFycztcbiAgICB5ZWFyU2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCB5ZWFyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB5ZWFyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFVwZGF0ZS55ZWFycyhwcmVmaXgsIHRoYXQpKVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKGhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3QgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25zID0gQUNUSVZJVElFUztcbiAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVBY3Rpdml0eSlcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdIYW5kcyA9ICgpID0+IHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiY2xvY2staGFuZHNcIl0nKTtcbiAgICBvbGQuZm9yRWFjaChlbCA9PiB7ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCl9KVxuXG4gICAgY29uc3QgaGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbmRzXCIpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbnV0ZXMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKG1pbnV0ZXMpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJjbG9jay1oYW5kcy1ob3VyXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKGhvdXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtNb2RlQnRuID0gKGRyYXcsIGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIik7XG4gICAgaWYgKG9sZCkge1xuICAgICAgICBvbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGQpO1xuICAgIH1cbiAgICBsZXQgdGV4dCA9IFwiRGFyayBNb2RlXCI7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLWRhcmtcIikpIHtcbiAgICAgICAgdGV4dCA9IFwiTGlnaHQgTW9kZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkYXJrLWJ0blwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtZGFya1wiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtbGlnaHRcIik7XG4gICAgICAgIGRyYXcoZGF0YSwgcGFyYW1zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoYmx1ciwgb3JkZXIsIHN0ZXBUZXh0LCBidXR0b25UZXh0LCB0cmlhbmdsZURpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgYHdhbGt0aHJvdWdoLXN0ZXAtJHtvcmRlcn1gKTtcbiAgICBzdGVwLmlubmVyVGV4dCA9IHN0ZXBUZXh0O1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgIGlmIChvcmRlciA9PT0gXCJ0aGlyZFwiKSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1hXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQSk7XG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoYCR7dHJpYW5nbGVEaXJlY3Rpb259LXRyaWFuZ2xlYCwgYHdhbGt0aHJvdWdoLSR7b3JkZXJ9LXRyaWFuZ2xlYCk7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSAoZmlsdGVyLCB3b3JkcykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd29yZHM7XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gKGF0dGFjaCwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBganMtJHtjYXRlZ29yeX1gKTtcbiAgICBpZiAoY2F0ZWdvcnkgPT09IFwiZW1wbG95ZWRcIikge1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdG9yID0gKGZpbHRlciwgY2F0ZWdvcnksIG9wdGlvbnMsIHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFNlbGVjdCAke2NhdGVnb3J5fWApKVxuICAgIG9wdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlKSBcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ1dHRvbiA9IChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgJHtjYXRlZ29yeX0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHJldHVybiBidXR0b247XG59IiwiZXhwb3J0IGNvbnN0IGFjdGl2aXR5ID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoYWN0aXZpdHkgPT4geyByZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgdGhhdC5zZWxlY3Rpb24uYWN0aXZpdGllcyA9IHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMuZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgeWVhcnMgPSAocHJlZml4LCB0aGF0KSA9PiBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV95ZWFyT3B0aW9uYCkuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1feWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn0iLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmV4dFN0ZXAob3B0aW9uLCBjbGFzc05hbWUsIG5leHQsIG5leHRDbGFzcywgbmV4dENvbXBvbmVudCwgcHJldkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7b3B0aW9ufWApO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV4dH1gKTtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKG5leHRDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke25leHRDb21wb25lbnR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dENvbXAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtwcmV2Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIHByZXZDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=