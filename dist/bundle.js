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

exports.default = function (data) {
    var display = document.querySelector("#data-display");
    var list = document.createElement("ul");
    list.classList.add("display-data");
    display.appendChild(list);

    Object.keys(data).forEach(function (datum) {
        var li = document.createElement("li");
        list.appendChild(li);
        var p = document.createElement("p");
        p.innerText = datum;
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
                e.target.parentNode.classList.add("selected");
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
                e.target.parentNode.classList.remove("selected");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHBfYWNhZGVteV9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbXBsb3llZF9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZXJ5b25lX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Jlc2lkZW50X3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F0Y2guanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImNhdGVnb3J5U2VsZWN0b3IiLCJlbXBsb3llZFNlbGVjdG9ycyIsIkVtcGxveWVkU2VsZWN0b3JzIiwiYWRkU2VsZWN0b3JzIiwiZ2VuZGVyQ29tcCIsIkdlbmRlckNvbXAiLCJhZGRDb21wIiwiZXZlcnlvbmVTZWxlY3RvcnMiLCJFdmVyeW9uZVNlbGVjdG9ycyIsImRheUNvbXAiLCJEYXlDb21wIiwiYXBwQWNhZGVteVNlbGVjdG9yIiwiQXBwQWNhZGVteVNlbGVjdG9yIiwiYWRkU2VsZWN0b3IiLCJyZXNpZGVudFNlbGVjdG9yIiwiUmVzaWRlbnRTZWxlY3RvciIsImVtcGxveWVkIiwiZW1wbG95ZWREYXRhIiwiZW1wbG95ZWREYXRhRmlsdGVyIiwicmVzdWx0IiwiYWN0aXZpdGllcyIsImdlbmRlciIsInllYXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5kZXJEYXRhIiwiZ2VuZGVyQ29tcEZpbHRlciIsImFjdGl2aXR5IiwiZXZlcnlvbmUiLCJldmVyeW9uZURhdGEiLCJldmVyeW9uZURhdGFGaWx0ZXIiLCJ0eXBlIiwiZGF5IiwiZGF5RGF0YSIsImRheUNvbXBGaWx0ZXIiLCJhcHBhY2FkZW15IiwicmVzaWRlbnQiLCJhdHRhY2giLCJmaWx0ZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3Rpb25CdXR0b24iLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJjYXRlZ29yeU9wdGlvbiIsInZhbHVlIiwib3B0aW9uIiwic2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yIiwicmVtb3ZlIiwidGFyZ2V0IiwiQUNUSVZJVElFUyIsIkNPTE9SUyIsImFjdGl2aXR5U2VsZWN0b3IiLCJ1cGRhdGVBY3Rpdml0eSIsInByZWZpeCIsImFjdGl2aXR5TGFiZWwiLCJhY3Rpdml0eVNlbGVjdGlvbnMiLCJjb25jYXQiLCJzZWxlY3QiLCJpIiwiZGl2Iiwic3BhbiIsImFjdGl2aXR5T3B0aW9uIiwic2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsInllYXJTZWxlY3RvciIsInVwZGF0ZVllYXJzIiwieWVhcnNMYWJlbCIsInllYXJTZWxlY3Rpb25zIiwieWVhck9wdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImFjdGl2aXR5U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3Rpb25zIiwibGlzdCIsIk9iamVjdCIsImtleXMiLCJsaSIsInAiLCJkYXR1bSIsInRvRml4ZWQiLCJDcmVhdGUiLCJzZWxlY3Rpb24iLCJhbGwiLCJuZXdBcnIiLCJ5ZWFyIiwicHVzaCIsInVwZGF0ZUdlbmRlciIsImdlbmRlclNlbGVjdG9yIiwiY3JlYXRlVGV4dE5vZGUiLCJnZW5kZXJzIiwiZ2VuZGVyT3B0aW9uIiwidXBkYXRlVHlwZSIsInR5cGVTZWxlY3RvciIsInR5cGVzIiwidHlwZU9wdGlvbiIsImNpdGF0aW9uIiwiYXJyYXlTdW0iLCJhcnJheUF2ZXJhZ2UiLCJhcnJheU1lcmdlIiwiYXJyIiwic3VtIiwibGVuZ3RoIiwiYXJyYXlzIiwiZmluYWwiLCJldmVyeSIsImNvbnNvbGUiLCJsb2ciLCJzdWJBcnIiLCJhY3Rpdml0eUZpbHRlciIsImdlbmRlckZpbHRlciIsIm1hcCIsImZpbmFsRGF0YSIsInllYXJseUZpbHRlciIsImFsbFllYXJzIiwidmFsdWVzIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZDMiLCJjbGFzc2VkIiwiYXBwZW5kIiwiYXR0ciIsImQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJwaWUiLCJwcm9jZXNzZWRfZGF0YSIsImVudHJpZXMiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwibm9kZXMiLCJzbGljZSIsImVsIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sSUFBTUEsOENBQW1CO0FBQzVCLGdDQUE0QjtBQUN4QixvQkFBWSwwQkFEWTtBQUV4QixvQkFBWSxHQUZZO0FBR3hCLGVBQU87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bUJBQU9BLEVBQUVsSyxJQUFGLENBQU8ySyxVQUFQLEdBQW9CLElBQTNCO0FBQWdDLFNBTDNELEVBTUtXLEtBTkwsQ0FNWSxVQUFTcEIsQ0FBVCxFQUFZO0FBQ2hCLGdCQUFJdEYsTUFBTSxDQUFWLEVBQWE7QUFDVCx1QkFBTyxDQUFQO0FBQ0g7QUFDRCxtQkFBT3JFLE1BQU00RyxRQUFOLENBQWU2RCxNQUFNTyxLQUFOLEdBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUI1RyxDQUF2QixFQUEwQnFELEdBQTFCLENBQThCO0FBQUEsdUJBQU02QixHQUFHbkYsTUFBSCxDQUFVOEcsRUFBVixFQUFjekwsSUFBZCxHQUFxQixDQUFyQixFQUF3QkEsSUFBeEIsQ0FBNkIySyxVQUFuQztBQUFBLGFBQTlCLENBQWYsSUFBK0YsSUFBL0YsR0FBc0csR0FBN0c7QUFDSCxTQVhMLEVBWUtlLFNBWkwsQ0FZZSxHQVpmLEVBWW9CLFVBQVV4QixDQUFWLEVBQWE7QUFDekIsZ0JBQU10RixJQUFJa0YsR0FBRzZCLFdBQUgsQ0FBZXpCLEVBQUUwQixVQUFGLEdBQWUsR0FBOUIsRUFBbUMxQixFQUFFMkIsUUFBckMsQ0FBVjtBQUNBLG1CQUFPLFVBQVVDLENBQVYsRUFBYTtBQUNoQjVCLGtCQUFFMkIsUUFBRixHQUFhakgsRUFBRWtILENBQUYsQ0FBYjtBQUNBLHVCQUFPakIsSUFBSVgsQ0FBSixDQUFQO0FBQ0gsYUFIRDtBQUlILFNBbEJMO0FBbUJDLEtBckJUO0FBc0JILEM7O0FBS087O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgY29uc3QgZW1wbG95ZWRCeUdlbmRlciA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDguODgsXG4gICAgICAgICAgICBcIjIwMTRcIjogOC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA4Ljk5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDguODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogOC45NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA4LjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS40MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjQ4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4wNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjA2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4wNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjMsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS45NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjksXG4gICAgICAgICAgICBcIjIwMThcIjogMi4wMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjY3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LCBcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC44MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzhcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuOTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC45MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg4XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS40OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjU4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQ5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuMzUsXG4gICAgICAgICAgICBcIjIwMThcIjogNi40N1xuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNS42NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS43NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuMDYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjAxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuOTdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuOTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy45MSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjg0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuODUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC4wMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjkyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjczLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNjgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy42NVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuNDMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy4zOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMThcIjogMy4zNlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBldmVyeW9uZUJ5RGF5ID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuMjQsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4zMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMTAuMDcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMTAuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMTAuMDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMTAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMTAuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMTAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMTAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMTAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMTAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxMC4xOFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjU4NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA5LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuNjU1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDkuNjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogOS42NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjcwNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5Ljc0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5Ljc5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5Ljc2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNzY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjM2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4zOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4zNVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjI2NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI1NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yMDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS43LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuNjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjU5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS42MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjcxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuMDYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi4xMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMi4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS44MjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuODc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuODM1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjkzNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjkxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjg4IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjcyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMThcIjogMC42N1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuOTEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC44NFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC43NDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjc3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC43NTUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjUzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTE1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDg1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjUxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNDEsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC41NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjQ3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMy4wNixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAyLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDIuODY1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuOTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuODksXG4gICAgICAgICAgICBcIjIwMTNcIjogMi44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjk2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuODc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIuOTMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMi45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMi44NzUgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42MyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNThcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE3XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzc1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDlcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNiBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC42MixcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjcxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNjcsXG4gICAgICAgICAgICBcIjIwMTFcIjogNC43MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA0Ljg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA0LjY5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjcyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNi40OCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA2LjUzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDYuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA2LjM0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTNcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogNi41NlxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA1LjU1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDUuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogNS41MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS42NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS41NixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA1LjU5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDUuNjRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTQgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQ1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjk1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMTUsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI3NVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBcHAgZnJvbSAnLi9qcy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJ1xuXG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoZGF0YSkge1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXkgdWxcIik7XG4gICAgICAgIGlmIChzdmcpIHsgc3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTsgfVxuICAgICAgICBpZiAoZGlzcGxheSkgeyBkaXNwbGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlzcGxheSk7IH1cbiAgICAgICAgV2F0Y2goZGF0YSk7XG4gICAgICAgIERhdGFEaXNwbGF5KGRhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gQ2F0ZWdvcnlTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVkU2VsZWN0b3JzID0gbmV3IEVtcGxveWVkU2VsZWN0b3JzKCk7XG4gICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBnZW5kZXJDb21wID0gbmV3IEdlbmRlckNvbXAoKTtcbiAgICAgICAgZ2VuZGVyQ29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGV2ZXJ5b25lU2VsZWN0b3JzID0gbmV3IEV2ZXJ5b25lU2VsZWN0b3JzKCk7XG4gICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLmFkZFNlbGVjdG9ycygpO1xuICAgICAgICBjb25zdCBkYXlDb21wID0gbmV3IERheUNvbXAoKTtcbiAgICAgICAgZGF5Q29tcC5hZGRDb21wKCk7XG4gICAgICAgIGNvbnN0IGFwcEFjYWRlbXlTZWxlY3RvciA9IG5ldyBBcHBBY2FkZW15U2VsZWN0b3IoKTtcbiAgICAgICAgYXBwQWNhZGVteVNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG4gICAgICAgIGNvbnN0IHJlc2lkZW50U2VsZWN0b3IgPSBuZXcgUmVzaWRlbnRTZWxlY3RvcigpO1xuICAgICAgICByZXNpZGVudFNlbGVjdG9yLmFkZFNlbGVjdG9yKCk7XG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBFbXBsb3llZCBkYXRhc2V0XG4gICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXBsb3llZC1idG5cIik7XG4gICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhKTtcblxuICAgICAgICBlbXBsb3llZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG4gICAgICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGdlbmRlciBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZGVyLWJ0blwiKTtcbiAgICAgICAgZ2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJEYXRhID0gdXRpbHMuZ2VuZGVyQ29tcEZpbHRlcihnZW5kZXJDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBnZW5kZXJDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZ2VuZGVyRGF0YSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEV2ZXJ5b25lIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZXJ5b25lLWJ0blwiKTtcbiAgICAgICAgZXZlcnlvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lRGF0YSA9IHV0aWxzLmV2ZXJ5b25lRGF0YUZpbHRlcihldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQudHlwZSxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcbiAgICAgICAgICAgIHRoaXMuZHJhdyhldmVyeW9uZURhdGEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZGF5IGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktYnRuXCIpO1xuICAgICAgICBkYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSB1dGlscy5kYXlDb21wRmlsdGVyKGRheUNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGRheUNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG4gICAgICAgICAgICB0aGlzLmRyYXcoZGF5RGF0YSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEFwcCBBY2FkZW15IFN0dWRlbnRcbiAgICAgICAgY29uc3QgYXBwYWNhZGVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWFjYWRlbXktYnRuXCIpO1xuICAgICAgICBhcHBhY2FkZW15LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoYXBwQWNhZGVteVNlbGVjdG9yLmRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBmaXJzdCB5ZWFyIHJlc2lkZW50IGFmdGVyIG1lZGljYWwgc2Nob29sXG4gICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNpZGVudC1idG5cIik7XG4gICAgICAgIHJlc2lkZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcocmVzaWRlbnRTZWxlY3Rvci5kYXRhKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImNsYXNzIEFwcEFjYWRlbXlTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1hcHBcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcImFwcC1hY2FkZW15LWJ0blwiLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTQuOCxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIHR5cGljYWwgQXBwIEFjYWRlbXkgc3R1ZGVudFwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWNhZGVteVNlbGVjdG9yOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktZmlsdGVyXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFbXBsb3llZCBieSBHZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZGVyIENvbXBhcmlzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXZlcnlvbmUgYnkgRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRheSBDb21wYXJpc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJdXG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKVxuICAgICAgICBjYXRlZ29yeU9wdGlvbi52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeVNlbGVjdG9yLmFwcGVuZENoaWxkKGNhdGVnb3J5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJqcy1cIl0nKVxuICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKSk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFbXBsb3llZCBieSBHZW5kZXJcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1wbG95ZWRcIik7XG4gICAgICAgICAgICAgICAgZW1wbG95ZWQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR2VuZGVyIENvbXBhcmlzb25cIjpcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdlbmRlclwiKTtcbiAgICAgICAgICAgICAgICBnZW5kZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRXZlcnlvbmUgYnkgRGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWV2ZXJ5b25lXCIpO1xuICAgICAgICAgICAgICAgIGV2ZXJ5b25lLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRheSBDb21wYXJpc29uXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFwcFwiKTtcbiAgICAgICAgICAgICAgICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXJlc2lkZW50XCIpO1xuICAgICAgICAgICAgICAgIHJlc2lkZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJleHBvcnQgY29uc3QgQUNUSVZJVElFUyA9IFtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiBcInJlZFwiLFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiBcIm9yYW5nZVwiLFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogXCJ5ZWxsb3dcIixcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IFwiZ3JlZW5cIixcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogXCJibHVlXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IFwiaW5kaWdvXCIsXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiBcInZpb2xldFwiLFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiBcImdyYXlcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IFwiYmxhY2tcIixcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiBcImN5YW5cIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IFwiY2hhcnRyZXVzZVwiLFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiBcIm1hZ2VudGFcIixcbiAgICBcIk1lblwiOiBcImJsdWVcIixcbiAgICBcIldvbWVuXCI6IFwicmVkXCIsXG4gICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IFwiZ3JlZW5cIixcbiAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogXCJwaW5rXCJcbn0iLCJpbXBvcnQge0FDVElWSVRJRVN9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9ICh1cGRhdGVBY3Rpdml0eSwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG4gICAgY29uc3QgYWN0aXZpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBhY3Rpdml0eUxhYmVsLmlubmVyVGV4dCA9IFwiQWN0aXZpdGllc1wiO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlMYWJlbClcblxuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0aW9ucyA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdLmNvbmNhdChBQ1RJVklUSUVTKTtcbiAgICBhY3Rpdml0eVNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlQWN0aXZpdHkpXG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyU2VsZWN0b3IgPSAodXBkYXRlWWVhcnMsIGZpbHRlciwgcHJlZml4LCB5ZWFycykgPT4ge1xuICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHllYXJTZWxlY3Rvcik7XG4gICAgeWVhclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJ5ZWFyLXNlbGVjdG9yXCIpXG4gICAgY29uc3QgeWVhcnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB5ZWFyc0xhYmVsLmlubmVyVGV4dCA9IFwiWWVhcnNcIjtcbiAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoeWVhcnNMYWJlbClcblxuICAgIGNvbnN0IHllYXJTZWxlY3Rpb25zID0geWVhcnM7XG4gICAgeWVhclNlbGVjdGlvbnMuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIikgfVxuICAgICAgICB5ZWFyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgeWVhck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgeWVhck9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbkFsbGApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1feWVhck9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHllYXJPcHRpb24pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSlcbiAgICB5ZWFyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVZZWFycylcbn1cblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IChoYW5kbGVTdWJtaXQsIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWJ0bmAsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Ym1pdClcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0ID0gKHVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYWN0aXZpdHlTZWxlY3Rvcik7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIpXG5cbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYW4gYWN0aXZpdHlcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcblxuXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IEFDVElWSVRJRVM7XG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgfSlcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlQWN0aXZpdHkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXlcIik7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWRhdGFcIilcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggZGF0dW0gPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC5pbm5lclRleHQgPSBkYXR1bTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZF95ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCB5ZWFycztcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOFwiLCBcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHksXG4gICAgICAgICAgICB5ZWFyc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1kYXlcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlcik7XG5cbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3Rvcih0aGlzLnVwZGF0ZVllYXJzLCBmaWx0ZXIsIFwiZFwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA4XCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImRheVwiKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ29tcGFyaXNvbiBvZiBub25ob2xpZGF5IHdlZWtkYXlzIGFnYWluc3Qgd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF5Q29tcCIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cbmNsYXNzIEVtcGxveWVkU2VsZWN0b3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBcImFjdGl2aXRpZXNcIjogW1wiQWxsIEFjdGl2aXRpZXNcIl0sXG4gICAgICAgICAgICBcInllYXJzXCI6IFtcIkFsbCB5ZWFyc1wiXSxcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdlbmRlciA9IHRoaXMudXBkYXRlR2VuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogQUNUSVZJVElFUyxcbiAgICAgICAgICAgIGdlbmRlcjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZV9hY3Rpdml0eU9wdGlvblwiKS5mb3JFYWNoIChvcHRpb24gPT4ge29wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKX0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX2FjdGl2aXR5T3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoIGFjdGl2aXR5ID0+IHtyZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIn0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihzZWxlY3QgPT4ge3JldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgZ2VuZGVyOiBzZWxlY3Rpb25zLmdlbmRlclxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwiZGlzcGxheVwiLCBcImpzLWVtcGxveWVkXCIpO1xuXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlciwgXCJlXCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImVcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuXG4gICAgICAgIGNvbnN0IGdlbmRlclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGdlbmRlclNlbGVjdG9yKTtcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgICAgICBnZW5kZXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCBnZW5kZXJcIikpXG4gICAgICAgIGNvbnN0IGdlbmRlcnMgPSBbXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIiwgXCJXb21lblwiLCBcIk1lblwiXTtcbiAgICAgICAgZ2VuZGVycy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIGdlbmRlclNlbGVjdG9yLmFwcGVuZENoaWxkKGdlbmRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZUdlbmRlcilcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZW1wbG95ZWRcIik7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkVtcGxveWVkIG1lbiBhbmQgd29tZW4gb24gYW4gYXZlcmFnZSBkYXlcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVkU2VsZWN0b3JzOyIsImltcG9ydCB7IEFDVElWSVRJRVMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuL2NyZWF0ZSdcblxuXG5jbGFzcyBldmVyeW9uZVNlbGVjdG9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgXCJhY3Rpdml0aWVzXCI6IFtcIkFsbCBBY3Rpdml0aWVzXCJdLFxuICAgICAgICAgICAgXCJ5ZWFyc1wiOiBbXCJBbGwgeWVhcnNcIl0sXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBbGwgZGF5c1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlVHlwZSA9IHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNldl9hY3Rpdml0eU9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IFtcIkFsbCBBY3Rpdml0aWVzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZfYWN0aXZpdHlPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdLmZpbHRlcihhY3Rpdml0eSA9PiB7IHJldHVybiBhY3Rpdml0eSAhPT0gXCJBbGwgQWN0aXZpdGllc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlWWVhcnMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgWWVhcnNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZXZfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIFllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZfeWVhck9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIFllYXJzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVHlwZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ0eXBlXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IGFjdGl2aXRpZXMsIHllYXJzO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gQUNUSVZJVElFUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDA4XCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZXZlcnlvbmVcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyLCBcImV2XCIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImV2XCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMDhcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuXG4gICAgICAgIGNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZCh0eXBlU2VsZWN0b3IpO1xuICAgICAgICB0eXBlU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgICAgICB0eXBlU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZWxlY3QgdHlwZVwiKSlcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXCJBbGwgZGF5c1wiLCBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIiwgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdO1xuICAgICAgICB0eXBlcy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHR5cGVPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgICAgICB0eXBlT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZCh0eXBlT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICB0eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZVR5cGUpXG5cblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZXZlcnlvbmVcIik7XG5cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQWxsIHBlcnNvbnMgb24gbm9uaG9saWRheSB3ZWVrZGF5cyBvciB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVyeW9uZVNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cblxuY2xhc3MgR2VuZGVyQ29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHllYXJzO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFycyA9IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNnX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ195ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1nZW5kZXJcIik7XG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJnXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImdlbmRlclwiKTtcblxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJDb21wYXJpc29uIG9mIGVtcGxveWVkIG1lbiBhbmQgd29tZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmRlckNvbXBcblxuXG4vLyBnb2FsOiB7XCJXb21lblwiOiAwLjUsIFwiTWVuXCI6IDQuM30iLCJjbGFzcyBSZXNpZGVudFNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLXJlc2lkZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2lkZW50LWJ0blwiLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCI7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxMyxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuNSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMyxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQSBmaXJzdC15ZWFyIG1lZGljYWwgcmVzaWRlbnQgYXQgVUNTRlwiO1xuXG4gICAgICAgIGNvbnN0IGNpdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChjaXRhdGlvbik7XG4gICAgICAgIGNpdGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXRhdGlvblwiKTtcbiAgICAgICAgY2l0YXRpb24uaW5uZXJUZXh0ID0gXCJEYXRhIGFwcHJveGltYXRlZCBmcm9tIGh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaWRlbnRTZWxlY3RvcjsiLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG5cbi8vIGRhdGFGaWx0ZXIoW1wiT3RoZXIgYWN0aXZpdGllcywgbm90IGVsc2V3aGVyZSBjbGFzc2lmaWVkIChpbmNsdWRlcyBtaXNjLiB0cmF2ZWwgYW5kIGRhdGEgY29kZXMpXCIsIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZS1tYWlsIChpbmNsdWRlcyB0cmF2ZWwpXCJdLFxuLy8gLi4uICAgICAgICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4vLyAuLi5bXCIyMDEzXCIsIFwiMjAxNFwiXSxcbi8vIC4uLmVtcGxveWVkQnlHZW5kZXIpXG4iLCJpbXBvcnQge0NPTE9SU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSAxMDtcblxuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjd2F0Y2hcIilcbiAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGFpbmVyXCIsIHRydWUpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyB3aWR0aCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgcHJvY2Vzc2VkX2RhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5wZXJjZW50YWdlID0gZC52YWx1ZSAvIDI0O1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgcGF0aHNcbiAgICAgICAgLmVhY2goIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7IHJldHVybiAoQ09MT1JTW2QuZGF0YS5rZXldKSB9KVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsICdncmF5JylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihmdW5jdGlvbihkKSB7cmV0dXJuIGQuZGF0YS5wZXJjZW50YWdlICogMzAwMH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwIC0gMjAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUgKyAwLjEsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gLnN0eWxlKFwib3BhY2l0eVwiLCAwLjkpXG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjY1MTIzL3Jlc2l6ZS1zdmctd2hlbi13aW5kb3ctaXMtcmVzaXplZC1pbi1kMy1qc1xuICAgIC8vIGZvciByZXNwb25zaXZlIFNWRyBkZXNpZ25cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc2Mjk4Mi9ob3ctdG8tZGlzcGxheS1wZXJjZW50YWdlLXRvLXRoZS1kMy1qcy1waWVjaGFydFxuICAgIC8vIGZvciBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvZmFyYXpzaHVqYS9lMmNiNTI4MjhjMDgwYmE4NWRhNTQ1OGUyMzA0YTYxZlxuICAgIC8vIGZvciBsYWJlbGluZyBzbGljZXMgd2l0aCBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9uYWRpbmVzay85OTM5MzA5ODk1MDY2NWM0NzFlMDM1YWM1MTdjMjIyNFxuICAgIC8vIGZvciB0cmFuc2l0aW9uc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyNTk5N1xuICAgIC8vIGZvciBjaGFpbmVkIHRyYW5zaXRpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9