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

        this.updateActivity = this.updateActivity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            var years = select.years[0] === "All years" ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
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
            Create.activitySelect(this.updateActivity, filter);
            Create.yearSelector(filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.submitButton(this.handleSubmit, filter, "day");
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
            var activities = selection["activities"][0] === "All Activities" ? _constants.ACTIVITIES : selections['activities'];
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
            Create.otherSelector(filter, "gender", ["Total (men and women)", "Women", "Men"], this.updateGender);
            Create.submitButton(this.handleSubmit, filter, "employed");
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
        this.updateType = this.updateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            var activities = selection["activities"][0] === "All Activities" ? _constants.ACTIVITIES : selections['activities'];
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
            Create.otherSelector(filter, "type", ["All days", "Nonholiday weekdays", "Weekend days and holidays"], this.updateType);
            Create.submitButton(this.handleSubmit, filter, "everyone");
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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
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
            var years = select.years[0] === "All years" ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
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
            Create.activitySelect(this.updateActivity, filter, this);
            Create.yearSelector(filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"], this);
            Create.submitButton(this.handleSubmit, filter, "gender");
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
        d3.select(this).classed('arcs', true).classed(_constants.alpha[i], true).on("mouseover", function (d) {
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
exports.otherSelector = exports.filters = exports.description = exports.steps = exports.darkModeBtn = exports.drawHands = exports.activitySelect = exports.submitButton = exports.yearSelector = exports.activitySelector = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJ1cGRhdGVBY3Rpdml0eSIsImhhbmRsZVN1Ym1pdCIsInNlbGVjdGlvbiIsInNlbGVjdGlvbnMiLCJzZWxlY3QiLCJhY3Rpdml0eVNlbGVjdCIsInllYXJTZWxlY3RvciIsInN1Ym1pdEJ1dHRvbiIsInVwZGF0ZUdlbmRlciIsIkFDVElWSVRJRVMiLCJhY3Rpdml0eVNlbGVjdG9yIiwib3RoZXJTZWxlY3RvciIsInVwZGF0ZVR5cGUiLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbHJlYWR5YnRuIiwibmV4dFN0ZXAiLCJ5ZXNCdG4iLCJjaXRhdGlvbiIsImEiLCJleGl0QnV0dG9uIiwiZmlyc3RCdXR0b24iLCJzdGVwcyIsInNlY29uZEJ1dHRvbiIsInRoaXJkQnV0dG9uIiwiZm91cnRoQnV0dG9uIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkMyIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwiYXJyYXlTdW0iLCJtYXAiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsIm9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJub2RlcyIsInNsaWNlIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0IiwiVXBkYXRlIiwicHJlZml4IiwidGhhdCIsImFjdGl2aXR5TGFiZWwiLCJhY3Rpdml0eVNlbGVjdGlvbnMiLCJjb25jYXQiLCJkaXYiLCJhY3Rpdml0eU9wdGlvbiIsImNoZWNrZWQiLCJ5ZWFyc0xhYmVsIiwieWVhclNlbGVjdGlvbnMiLCJ5ZWFyT3B0aW9uIiwiZHJhd0hhbmRzIiwib2xkIiwiaGFuZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXJrTW9kZUJ0biIsInRleHQiLCJwYWdlIiwiY29udGFpbnMiLCJidG4iLCJmb290ZXIiLCJodG1sIiwidG9nZ2xlIiwib3JkZXIiLCJzdGVwVGV4dCIsImJ1dHRvblRleHQiLCJ0cmlhbmdsZURpcmVjdGlvbiIsInN0ZXAiLCJidXR0b24iLCJ0cmlhbmdsZUEiLCJ0cmlhbmdsZUIiLCJ0cmlhbmdsZSIsIndvcmRzIiwib3B0aW9ucyIsInVwZGF0ZSIsImNyZWF0ZVRleHROb2RlIiwiYWxsIiwibmV3QXJyIiwicHVzaCIsImFycmF5QXZlcmFnZSIsImFycmF5TWVyZ2UiLCJhcnIiLCJzdW0iLCJsZW5ndGgiLCJhcnJheXMiLCJmaW5hbCIsImV2ZXJ5IiwiY29uc29sZSIsImxvZyIsInN1YkFyciIsImFjdGl2aXR5RmlsdGVyIiwiZ2VuZGVyRmlsdGVyIiwiZmluYWxEYXRhIiwieWVhcmx5RmlsdGVyIiwiYWxsWWVhcnMiLCJ2YWx1ZXMiLCJzb3J0ZWQiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJuZXh0Q29tcG9uZW50IiwicHJldkNvbXBvbmVudCIsImNsb3NlTW9kYWwiLCJuZXh0SXRlbSIsIm5leHRDb21wIiwicHJldkNvbXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJ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QSxxQkFBakI7QUFDSDtBQUNKLGFBaEJEO0FBaUJIOzs7Ozs7a0JBSVU5RCxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcGxveWVkQnlHZW5kZXIgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA4Ljg4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDguOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOC45OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA4Ljg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDguOTYsXG4gICAgICAgICAgICBcIjIwMThcIjogOC45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNDEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS40OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMDQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMDZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuOTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC42MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41NlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSwgXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjk1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjAzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC44OFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNDgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS41OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjU1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjM1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNjQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1Ljg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNzcsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1Ljc0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjA2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS4wMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0Ljk3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjk3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuOTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy44NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuMDIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy43MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjY4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjQzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuMzgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuMzZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZXZlcnlvbmVCeURheSA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjI0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjMxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEwLjA3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEwLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEwLjA4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMTAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS41ODUsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjY1NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjY2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuNjcsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS43MDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS43NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS43OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS43NixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5Ljc2NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5Ljc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjEzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMzksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjM0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4yNjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjY4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS41OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS43MSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjY5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjA2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuMTIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuODI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjg3NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjgzNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS45MzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS45MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS44OCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjkxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjc5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNzQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzU1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQ3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40N1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjUxNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQ4NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQ4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTJcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0LjQxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogNC40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDMuMDYsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjg2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjkzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjg5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMi45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjg3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjkzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuODc1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM3NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM3NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzYgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC43MSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjY3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNzMsXG4gICAgICAgICAgICBcIjIwMTJcIjogNC44NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNC42OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogNC43MlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDYuNDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogNi41MyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA2LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNi4zNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNS41NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA1LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMTNcIjogNS42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNjQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuNTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS41OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1LjY0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE0IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzE1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNzVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQXBwIGZyb20gJy4vanMvY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9uJ1xuaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICAvLyBpbnN0cnVjdGlvbnMgbW9kYWxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zKCk7XG5cbiAgICAgICAgLy8gbWFraW5nIGFsbCB0aGUgc2VsZWN0b3JzXG4gICAgICAgIENhdGVnb3J5U2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCBlbXBsb3llZFNlbGVjdG9ycyA9IG5ldyBFbXBsb3llZFNlbGVjdG9ycygpO1xuICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZ2VuZGVyQ29tcCA9IG5ldyBHZW5kZXJDb21wKCk7XG4gICAgICAgIGdlbmRlckNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBldmVyeW9uZVNlbGVjdG9ycyA9IG5ldyBFdmVyeW9uZVNlbGVjdG9ycygpO1xuICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZGF5Q29tcCA9IG5ldyBEYXlDb21wKCk7XG4gICAgICAgIGRheUNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBhcHBBY2FkZW15U2VsZWN0b3IgPSBuZXcgQXBwQWNhZGVteVNlbGVjdG9yKCk7XG4gICAgICAgIGFwcEFjYWRlbXlTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByZXNpZGVudFNlbGVjdG9yID0gbmV3IFJlc2lkZW50U2VsZWN0b3IoKTtcbiAgICAgICAgcmVzaWRlbnRTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRW1wbG95ZWQgZGF0YXNldFxuICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wbG95ZWQtYnRuXCIpO1xuICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcbiAgICAgICAgY29uc3QgZW1wbG95ZWRQYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgIGRlbGV0ZSBlbXBsb3llZFBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIGVtcGxveWVkUGFyYW1zKTtcblxuICAgICAgICBlbXBsb3llZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGdlbmRlciBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZGVyLWJ0blwiKTtcbiAgICAgICAgZ2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJEYXRhID0gdXRpbHMuZ2VuZGVyQ29tcEZpbHRlcihnZW5kZXJDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBnZW5kZXJDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZ2VuZGVyRGF0YSwgZ2VuZGVyQ29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRXZlcnlvbmUgZGF0YXNldFxuICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlcnlvbmUtYnRuXCIpO1xuICAgICAgICBldmVyeW9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZXZlcnlvbmVEYXRhID0gdXRpbHMuZXZlcnlvbmVEYXRhRmlsdGVyKGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC50eXBlLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhldmVyeW9uZURhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBkYXkgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1idG5cIik7XG4gICAgICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZGF5RGF0YSA9IHV0aWxzLmRheUNvbXBGaWx0ZXIoZGF5Q29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZGF5Q29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGRheURhdGEsIGRheUNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEFwcCBBY2FkZW15IFN0dWRlbnRcbiAgICAgICAgY29uc3QgYXBwYWNhZGVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWFjYWRlbXktYnRuXCIpO1xuICAgICAgICBhcHBhY2FkZW15LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoYXBwQWNhZGVteVNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLCB5ZWFyOiBcIjIwMTlcIn0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZmlyc3QgeWVhciByZXNpZGVudCBhZnRlciBtZWRpY2FsIHNjaG9vbFxuICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzaWRlbnQtYnRuXCIpO1xuICAgICAgICByZXNpZGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHJlc2lkZW50U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIn0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgQXBwQWNhZGVteVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJhcHBcIilcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXBwLWFjYWRlbXktYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxNC44LFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiVGhlIHR5cGljYWwgQXBwIEFjYWRlbXkgc3R1ZGVudC4gTm90IGZyb20gQVRVUy5cIilcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQWNhZGVteVNlbGVjdG9yOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktZmlsdGVyXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFbXBsb3llZCBieSBHZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFdmVyeW9uZSBieSBEYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgQWNhZGVteSBTdHVkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiXVxuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25cIilcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24udmFsdWUgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XG4gICAgfSlcblxuICAgIGNhdGVnb3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwianMtXCJdJylcbiAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gc2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIikpO1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRW1wbG95ZWQgYnkgR2VuZGVyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtcGxveWVkXCIpO1xuICAgICAgICAgICAgICAgIGVtcGxveWVkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdlbmRlclwiKTtcbiAgICAgICAgICAgICAgICBnZW5kZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRXZlcnlvbmUgYnkgRGF5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWV2ZXJ5b25lXCIpO1xuICAgICAgICAgICAgICAgIGV2ZXJ5b25lLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRheVwiKTtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXBwXCIpO1xuICAgICAgICAgICAgICAgIGFwcC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcmVzaWRlbnRcIik7XG4gICAgICAgICAgICAgICAgcmVzaWRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxufSIsImltcG9ydCB7YWxwaGF9IGZyb20gJy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCAoZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5XCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1kYXRhXCIpXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGNvbnN0IHBhcmFtRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwYXJhbURpc3BsYXkuY2xhc3NMaXN0LmFkZChcInBhcmFtc1wiKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmFtRGlzcGxheSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5zb3J0KCkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBwYXJhbURpc3BsYXkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gYCR7ZWwudG9VcHBlckNhc2UoKX06YFxuICAgICAgICBjb25zdCBwYXJhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhcmFtLmlubmVyVGV4dCA9IHR5cGVvZiBwYXJhbXNbZWxdID09PSBcIm9iamVjdFwiID8gcGFyYW1zW2VsXS5qb2luKFwiLCBcIikgOiBwYXJhbXNbZWxdO1xuICAgICAgICBwLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChwYXJhbSk7XG4gICAgfSlcblxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIChkYXR1bSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcC5pbm5lclRleHQgPSBkYXR1bTtcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYWxwaGFbaV0pXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWxpc3QtaXRlbXNcIilcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhW2RhdHVtXS50b0ZpeGVkKDIpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgY29uc3QgYXJjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YWxwaGFbaV19YCk7XG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZSA9PiB7XG4gICAgICAgICAgICBhcmMuY2xhc3NMaXN0LmFkZChcImFyYy1kaXNwbGF5XCIpO1xuICAgICAgICB9KVxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZSA9PiB7XG4gICAgICAgICAgICBhcmMuY2xhc3NMaXN0LnJlbW92ZShcImFyYy1kaXNwbGF5XCIpO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxufSIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBEYXlDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdC55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiA/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJkYXlcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0KHRoaXMudXBkYXRlQWN0aXZpdHksIGZpbHRlcik7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImRcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSx0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImRheVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF5Q29tcCIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIEVtcGxveWVkU2VsZWN0b3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBcImFjdGl2aXRpZXNcIjogW1wiQWxsIEFjdGl2aXRpZXNcIl0sXG4gICAgICAgICAgICBcInllYXJzXCI6IFtcIkFsbCB5ZWFyc1wiXSxcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdlbmRlciA9IHRoaXMudXBkYXRlR2VuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogQUNUSVZJVElFUyxcbiAgICAgICAgICAgIGdlbmRlcjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUdlbmRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJnZW5kZXJcIl0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgYWN0aXZpdGllcyA9IHNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIiA/IEFDVElWSVRJRVMgOiBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiA/IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSA6IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IGFjdGl2aXRpZXMsXG4gICAgICAgICAgICB5ZWFyczogeWVhcnMsXG4gICAgICAgICAgICBnZW5kZXI6IHNlbGVjdGlvbnMuZ2VuZGVyLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkVtcGxveWVkIGJ5IEdlbmRlclwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYWRkU2VsZWN0b3JzKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZW1wbG95ZWRcIilcbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IoZmlsdGVyLCBcImVcIiwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImVcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLm90aGVyU2VsZWN0b3IoZmlsdGVyLCBcImdlbmRlclwiLCBbXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIiwgXCJXb21lblwiLCBcIk1lblwiXSwgdGhpcy51cGRhdGVHZW5kZXIpXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQsIGZpbHRlciwgXCJlbXBsb3llZFwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJFbXBsb3llZCBtZW4gYW5kIHdvbWVuIG9uIGFuIGF2ZXJhZ2UgZGF5XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVR5cGUgPSB0aGlzLnVwZGF0ZVR5cGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdWzBdID09PSBcIkFsbCBBY3Rpdml0aWVzXCIgPyBBQ1RJVklUSUVTIDogc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgPyBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFdmVyeW9uZSBieSBkYXlcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImV2ZXJ5b25lXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZXZcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJ0eXBlXCIsIFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0sIHRoaXMudXBkYXRlVHlwZSlcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImV2ZXJ5b25lXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkFsbCBwZXJzb25zIG9uIG5vbmhvbGlkYXkgd2Vla2RheXMgb3Igd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlcnlvbmVTZWxlY3RvcnM7IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5cbmNsYXNzIEdlbmRlckNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0LnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZ2VuZGVyXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIHRoaXMpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJnXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQsIGZpbHRlciwgXCJnZW5kZXJcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQ29tcGFyaXNvbiBvZiBlbXBsb3llZCBtZW4gYW5kIHdvbWVuXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5kZXJDb21wXG5cblxuLy8gZ29hbDoge1wiV29tZW5cIjogMC41LCBcIk1lblwiOiA0LjN9IiwiaW1wb3J0IFdhbGt0aHJvdWdoIGZyb20gJy4vd2Fsa3Rocm91Z2gnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuICAgIC8vIENyZWF0aW5nIHRoZSBtb2RhbFxuICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuY2xhc3NMaXN0LmFkZChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICAvLyBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGltZSBVc2FnZVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFRpbWUgVXNhZ2UsIGEgZGF0YSB2aXN1YWxpemF0aW9uIG9mIGhvdyBBbWVyaWNhbnMgdXNlIHRoZWlyIHRpbWUgb24gYSBnaXZlbiBkYXkuIFRoZSBkYXRhIGlzIGdhdGhlcmVkIGJ5IHRoZSBCdXJlYXUgb2YgTGFib3IgU3RhdGlzdGljcyBvbmNlIGEgeWVhci5cIlxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGVzY3JpcHRpb25cIik7XG5cbiAgICAvLyBRdWVzdGlvblxuICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gXCJXb3VsZCB5b3UgbGlrZSBhIGJyaWVmIHdhbGt0aHJvdWdoP1wiO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcbiAgICBxdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtcXVlc3Rpb25cIik7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnNcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgICAvLyBFeGl0IGJ1dHRvblxuICAgXG4gICAgLy8gSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUgYnV0dG9uLiBUYWtlcyB0aGVtIGRpcmVjdGx5IGludG8gdGhlIGFwcC5cbiAgICBjb25zdCBhbHJlYWR5YnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFscmVhZHlidG4pO1xuICAgIGFscmVhZHlidG4uaW5uZXJUZXh0ID0gXCJJJ3ZlIGFscmVhZHkgdXNlZCB0aGlzIGJlZm9yZS5cIjtcbiAgICBhbHJlYWR5YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIpKTtcblxuICAgIC8vIFdhbGt0aHJvdWdoIGJ1dHRvbi4gSXQgc2hvdWxkIHRha2UgdGhlbSB0aHJvdWdoIHRoZSB3YWxrdGhyb3VnaC4gXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHllc0J0bik7IFxuICAgIHllc0J0bi5pbm5lclRleHQgPSBcIlllcywgcGxlYXNlLlwiO1xuICAgIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIFdhbGt0aHJvdWdoKGJsdXIpO1xuICAgICAgICB1dGlscy5uZXh0U3RlcChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKShlKTtcbiAgICB9KTtcblxufSIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgUmVzaWRlbnRTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwicmVzaWRlbnRcIilcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXNpZGVudC1idG5cIiwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC41LFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4zLFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkEgZmlyc3QteWVhciBtZWRpY2FsIHJlc2lkZW50IGF0IFVDU0YuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICAgICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGNpdGF0aW9uKTtcbiAgICAgICAgY2l0YXRpb24uY2xhc3NMaXN0LmFkZChcImNpdGF0aW9uXCIpO1xuICAgICAgICBjaXRhdGlvbi5pbm5lclRleHQgPSBcIkRhdGEgYXBwcm94aW1hdGVkIGZyb20gXCI7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCIpO1xuICAgICAgICBhLmlubmVyVGV4dCA9IFwiaHR0cHM6Ly93d3cua2V2aW5tZC5jb20vYmxvZy8yMDE2LzAyL3F1YW50aXRhdGl2ZS1hbmFseXNpcy1maXJzdC15ZWFyLWludGVybmFsLW1lZGljaW5lLXJlc2lkZW5jeS5odG1sXCI7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICBjaXRhdGlvbi5hcHBlbmRDaGlsZChhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2lkZW50U2VsZWN0b3I7IiwiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBibHVyID0+IHtcbiAgICAvLyBXYWxrdGhyb3VnaFxuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKGV4aXRCdXR0b24pO1xuICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgXCJleGl0XCIpO1xuICAgIGV4aXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeGl0IHdhbGt0aHJvdWdoXCI7XG4gICAgZXhpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcImV4aXRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIG51bGwsIFwiKlwiKSlcblxuICAgIGNvbnN0IGZpcnN0QnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwiZmlyc3RcIixcbiAgICAgICAgXCJTdGFydCBieSBob3cgeW91IHdhbnQgdG8gZmlsdGVyIHRoZSBkYXRhLiBTZWxlY3QgYSBnZW5lcmFsIGNhdGVnb3J5LiBOb3RlIHRoYXQgQXBwIEFjYWRlbXkgU3R1ZGVudCBhbmQgRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50IGFyZSBub3QgZnJvbSB0aGUgQW1lcmljYW4gVGltZSBVc2FnZSBTdXJ2ZXkuXCIsXG4gICAgICAgIFwiR290IGl0IVwiLFxuICAgICAgICBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBzZWNvbmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJzZWNvbmRcIixcbiAgICAgICAgJ1NlbGVjdCB5b3VyIHBhcmFtZXRlcnMuIEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBoYXZlIG5vIHBhcmFtZXRlcnMuIFRoZW4gY2xpY2sgXCJTdWJtaXQgU2VsZWN0aW9uLlwiJyxcbiAgICAgICAgXCJHcmVhdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgdGhpcmRCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJ0aGlyZFwiLFxuICAgICAgICAnQXMgeW91IGhvdmVyIG92ZXIgdGhlIHNsaWNlcyBvZiB0aGUgZ3JhcGgsIHRoZSBjb3JyZXNwb25kaW5nIGRhdGEgd2lsbCBsaWdodCB1cCwgYW5kIHZpY2UgdmVyc2EuIE5vdGUgdGhhdCB0aGVzZSBzbGljZXMgYXJlIHRlY2huaWNhbGx5IHByb3BvcnRpb25zLCBhbmQgbm90IHN0cmljdGx5IG91dCBvZiAyNCBob3Vycy4gSXQgZGVwZW5kcyBvbiB0aGUgcGFyYW1ldGVycy4nLFxuICAgICAgICBcIkF3ZXNvbWUhXCJcbiAgICAgICAgKVxuICAgIGNvbnN0IGZvdXJ0aEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZvdXJ0aFwiLFxuICAgICAgICBcIlRoZXJlJ3MgYSBkYXJrIG1vZGUgaWYgbmVlZGVkLlwiLFxuICAgICAgICBcIkknbSByZWFkeS5cIixcbiAgICAgICAgXCJkb3duXCJcbiAgICApXG4gICAgZmlyc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1maXJzdFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLXNlY29uZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuc2VsZWN0b3JzXCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKSlcbiAgICBzZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIjY1wiLCBcIi5zZWxlY3RvcnNcIikpXG4gICAgdGhpcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZvdXJ0aFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIuZGFyay1idG5cIiwgXCIjY1wiKSlcbiAgICBmb3VydGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIuZGFyay1idG5cIikpXG59IiwiaW1wb3J0IHthbHBoYX0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vaGVscGVycy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSAxNTtcblxuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjd2F0Y2hcIilcbiAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGFpbmVyXCIsIHRydWUpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyB3aWR0aCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgLy8gc2V0dGluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgcGllXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgLy8gZm9ybWF0dGluZyB0aGUgZGF0YSBvYmplY3QgcmVjZWl2ZWQgaW50byBhbiBhcnJheSBvZiBQT0pPUyB3aXRoIHRoZSBrZXlzIFwia2V5XCIgYW5kIFwidmFsdWVcIiBhbmQgdmFsdWVzIGNvcnJlc3BvbmRpbmdseS4gXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgLy8gdG90YWwgb2YgdGhlIHZhbHVlcywgdXNlZCB0byBjYWxjdWxhdGUgcGVyY2VudGFnZS5cbiAgICBjb25zdCB0b3RhbCA9IHV0aWxzLmFycmF5U3VtKHByb2Nlc3NlZF9kYXRhLm1hcChkID0+IHtyZXR1cm4gZC52YWx1ZX0pKVxuXG4gICAgLy8gYXNzaWduaW5nIGVhY2ggZGF0YSBlbnRyeSBhIHBlcmNlbnRhZ2UgdmFsdWVcbiAgICBwcm9jZXNzZWRfZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBkLnBlcmNlbnRhZ2UgPSBkLnZhbHVlIC8gdG90YWw7XG4gICAgfSlcblxuICAgIC8vIHR1cm5pbmcgdGhlIGRhdGEgdmFsdWVzIGludG8gYSBwaWUgZ3JhcGgsIHdpdGggdGhlIGQudmFsdWVzIGJlaW5nIGhvdyBtdWNoIG9mIHRoZSB0b3RhbCBkb251dC4gXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICAvLyBkZWZpbmluZyB0aGUgbWV0aG9kIHRvIG1ha2UgYXJjcy4gc2luY2Ugd2UgaGF2ZSBhbiBpbm5lciByYWRpdXMgYW5kIGFuIG91dGVyIHJhZGl1cywgdGhpcyBpcyBhIGRvbnV0LiBcbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgLy8gYWxsIHRoZSBwYXRocyBtYWRlIGZyb20gdGhlIGRhdGEgdmFsdWVzLiBcbiAgICBjb25zdCBwYXRocyA9IHN2Z1xuICAgICAgICAuc2VsZWN0QWxsKClcbiAgICAgICAgLmRhdGEoZmluYWxfZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG5cbiAgICAvLyBtYWtpbmcgdGhlIGFyY3MgZm9yIGVhY2ggcGF0aCwgc2V0dGluZyBsaXN0ZW5lcnMsIGFuZCBjcmVhdGluZyB0aGUgdHJhbnNpdGlvbnMuIFxuICAgIHBhdGhzXG4gICAgICAgIC5lYWNoKCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoYWxwaGFbaV0sIHRydWUpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthbHBoYVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImZvY3VzZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihmdW5jdGlvbihkKSB7cmV0dXJuIGQuZGF0YS5wZXJjZW50YWdlICogMzAwMH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5hcnJheVN1bShwYXRocy5ub2RlcygpLnNsaWNlKDAsIGkpLm1hcChlbCA9PiBkMy5zZWxlY3QoZWwpLmRhdGEoKVswXS5kYXRhLnBlcmNlbnRhZ2UpKSAqIDMwMDAgKyAyMDA7IC8vIHRoaXMgbGluZSBpcyBsaXRlcmFsbHkganVzdCB0byBjYWxjdWxhdGUgdGhlIGRlbGF5IHN1Y2ggdGhhdCB0aGUgdHJhbnNpdGlvbnMgYXJlIG9uZSBhZnRlciB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG59XG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjY1MTIzL3Jlc2l6ZS1zdmctd2hlbi13aW5kb3ctaXMtcmVzaXplZC1pbi1kMy1qc1xuICAgIC8vIGZvciByZXNwb25zaXZlIFNWRyBkZXNpZ25cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc2Mjk4Mi9ob3ctdG8tZGlzcGxheS1wZXJjZW50YWdlLXRvLXRoZS1kMy1qcy1waWVjaGFydFxuICAgIC8vIGZvciBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvZmFyYXpzaHVqYS9lMmNiNTI4MjhjMDgwYmE4NWRhNTQ1OGUyMzA0YTYxZlxuICAgIC8vIGZvciBsYWJlbGluZyBzbGljZXMgd2l0aCBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9uYWRpbmVzay85OTM5MzA5ODk1MDY2NWM0NzFlMDM1YWM1MTdjMjIyNFxuICAgIC8vIGZvciB0cmFuc2l0aW9uc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyNTk5N1xuICAgIC8vIGZvciBjaGFpbmVkIHRyYW5zaXRpb25zXG4iLCJleHBvcnQgY29uc3QgQUNUSVZJVElFUyA9IFtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IGFscGhhID0gW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLCBcImtcIiwgXCJsXCJdXG4iLCJpbXBvcnQge0FDVElWSVRJRVN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgVXBkYXRlIGZyb20gJy4vdXBkYXRlJ1xuXG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdG9yID0gKGZpbHRlciwgcHJlZml4LCB0aGF0KSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgIGNvbnN0IGFjdGl2aXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWN0aXZpdHlMYWJlbC5pbm5lclRleHQgPSBcIkFjdGl2aXRpZXNcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5TGFiZWwpXG5cbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdGlvbnMgPSBbXCJBbGwgQWN0aXZpdGllc1wiXS5jb25jYXQoQUNUSVZJVElFUyk7XG4gICAgYWN0aXZpdHlTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFVwZGF0ZS5hY3Rpdml0eShwcmVmaXgsIHRoYXQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHllYXJTZWxlY3RvciA9IChmaWx0ZXIsIHByZWZpeCwgeWVhcnMsIHRoYXQpID0+IHtcbiAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0b3IpO1xuICAgIHllYXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwieWVhci1zZWxlY3RvclwiKVxuICAgIGNvbnN0IHllYXJzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgeWVhcnNMYWJlbC5pbm5lclRleHQgPSBcIlllYXJzXCI7XG4gICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKHllYXJzTGFiZWwpXG5cbiAgICBjb25zdCB5ZWFyU2VsZWN0aW9ucyA9IHllYXJzO1xuICAgIHllYXJTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IHllYXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHllYXJPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh5ZWFyT3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgeWVhclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgVXBkYXRlLnllYXJzKHByZWZpeCwgdGhhdCkpXG59XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b24gPSAoaGFuZGxlU3VibWl0LCBmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1idG5gLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJtaXQpXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdCA9ICh1cGRhdGVBY3Rpdml0eSwgZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInNlbGVjdG9ycy1zZWxlY3RcIilcblxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBBQ1RJVklUSUVTO1xuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgZHJhd0hhbmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJjbG9jay1oYW5kc1wiXScpO1xuICAgIG9sZC5mb3JFYWNoKGVsID0+IHtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKX0pXG5cbiAgICBjb25zdCBoYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFuZHNcIik7XG4gICAgY29uc3QgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHNcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQobWludXRlcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzLWhvdXJcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya01vZGVCdG4gPSAoZHJhdywgZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKTtcbiAgICBpZiAob2xkKSB7XG4gICAgICAgIG9sZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gXCJEYXJrIE1vZGVcIjtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtZGFya1wiKSkge1xuICAgICAgICB0ZXh0ID0gXCJMaWdodCBNb2RlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRhcmstYnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1kYXJrXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1saWdodFwiKTtcbiAgICAgICAgZHJhdyhkYXRhLCBwYXJhbXMpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChibHVyLCBvcmRlciwgc3RlcFRleHQsIGJ1dHRvblRleHQsIHRyaWFuZ2xlRGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQoc3RlcCk7XG4gICAgc3RlcC5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcFwiLCBgd2Fsa3Rocm91Z2gtc3RlcC0ke29yZGVyfWApO1xuICAgIHN0ZXAuaW5uZXJUZXh0ID0gc3RlcFRleHQ7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0ZXAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXAtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBidXR0b25UZXh0O1xuXG4gICAgaWYgKG9yZGVyID09PSBcInRoaXJkXCIpIHtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVBLmNsYXNzTGlzdC5hZGQoXCJyaWdodC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWFcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVBKTtcblxuICAgICAgICBjb25zdCB0cmlhbmdsZUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0cmlhbmdsZUIuY2xhc3NMaXN0LmFkZChcInVwLXRyaWFuZ2xlXCIsIFwid2Fsa3Rocm91Z2gtdGhpcmQtdHJpYW5nbGUtYlwiKTtcbiAgICAgICAgc3RlcC5hcHBlbmRDaGlsZCh0cmlhbmdsZUIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGUuY2xhc3NMaXN0LmFkZChgJHt0cmlhbmdsZURpcmVjdGlvbn0tdHJpYW5nbGVgLCBgd2Fsa3Rocm91Z2gtJHtvcmRlcn0tdHJpYW5nbGVgKTtcbiAgICAgICAgc3RlcC5hcHBlbmRDaGlsZCh0cmlhbmdsZSk7XG4gICAgfVxuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbiA9IChmaWx0ZXIsIHdvcmRzKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB3b3Jkcztcbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlcnMgPSAoYXR0YWNoLCBjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIGBqcy0ke2NhdGVnb3J5fWApO1xuICAgIGlmIChjYXRlZ29yeSA9PT0gXCJlbXBsb3llZFwiKSB7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IG90aGVyU2VsZWN0b3IgPSAoZmlsdGVyLCBjYXRlZ29yeSwgb3B0aW9ucywgdXBkYXRlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInNlbGVjdG9ycy1zZWxlY3RcIilcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgU2VsZWN0ICR7Y2F0ZWdvcnl9YCkpXG4gICAgb3B0aW9ucy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGUpIFxufSIsImV4cG9ydCBjb25zdCBhY3Rpdml0eSA9IChwcmVmaXgsIHRoYXQpID0+IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0uZmlsdGVyKGFjdGl2aXR5ID0+IHsgcmV0dXJuIGFjdGl2aXR5ICE9PSBcIkFsbCBBY3Rpdml0aWVzXCIgfSlcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGF0LnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHllYXJzID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3ByZWZpeH1feWVhck9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmVmaXh9X3llYXJPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdID0gdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICB9XG59IiwiY2xhc3MgVXRpbHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFycmF5U3VtID0gdGhpcy5hcnJheVN1bS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5QXZlcmFnZSA9IHRoaXMuYXJyYXlBdmVyYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlNZXJnZSA9IHRoaXMuYXJyYXlNZXJnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVtcGxveWVkRGF0YUZpbHRlciA9IHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXZlcnlvbmVEYXRhRmlsdGVyID0gdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgIGFycmF5U3VtIChhcnIpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gYXJyW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgYXJyYXlBdmVyYWdlIChhcnIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTdW0oYXJyKSAvIGFyci5sZW5ndGg7XG4gICAgfVxuXG4gICAgYXJyYXlNZXJnZSAoLi4uYXJyYXlzKSB7XG4gICAgICAgIGxldCBmaW5hbCA9IFtdO1xuICAgICAgICBpZiAoYXJyYXlzLmV2ZXJ5KCBhcnIgPT4geyByZXR1cm4gYXJyLmxlbmd0aCA9PT0gYXJyYXlzWzBdLmxlbmd0aDsgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheXMgYXJlIG5vdCB0aGUgc2FtZSBsZW5ndGhcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5c1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViQXJyID0gW107XG4gICAgICAgICAgICBhcnJheXMuZm9yRWFjaCggYXJyID0+IHtcbiAgICAgICAgICAgICAgICBzdWJBcnIucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZpbmFsLnB1c2goc3ViQXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWw7XG4gICAgfVxuXG4gICAgZW1wbG95ZWREYXRhRmlsdGVyIChhY3Rpdml0aWVzLCBnZW5kZXIsIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gW107XG4gICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaCggYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGdlbmRlckZpbHRlciA9IGFjdGl2aXR5RmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbZGF0dW0uYWN0aXZpdHldOiBkYXR1bVtnZW5kZXJdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gZ2VuZGVyRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goIHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7W09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcil9O1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc29ydGVkID0gZmluYWxEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoT2JqZWN0LnZhbHVlcyhhKVswXSA+IE9iamVjdC52YWx1ZXMoYilbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoIChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmVyeW9uZURhdGFGaWx0ZXIoYWN0aXZpdGllcywgdHlwZSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgIGFjdGl2aXR5RmlsdGVyLnB1c2goZGF0YVthY3Rpdml0eV0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0eXBlRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW3R5cGVdIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0gdHlwZUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFllYXJzID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF07XG4gICAgICAgICAgICAgICAgeWVhcmx5RmlsdGVyLnB1c2goYWxsWWVhcnNbeWVhcl0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dOiB0aGlzLmFycmF5QXZlcmFnZSh5ZWFybHlGaWx0ZXIpIH07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBzb3J0ZWQuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbT2JqZWN0LmtleXMoZGF0dW0pWzBdXSA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZW5kZXJDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW5GaWx0ZXIgPSB7IFwiTWVuXCI6IGFjdGl2aXR5RmlsdGVyW1wiTWVuXCJdIH1cbiAgICAgICAgY29uc3Qgd29tZW5GaWx0ZXIgPSB7IFwiV29tZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJXb21lblwiXX1cblxuXG4gICAgICAgIGNvbnN0IG1lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxNZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMobWVuRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIG1lblllYXJseUZpbHRlci5wdXNoKGFsbE1lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVuRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKG1lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgY29uc3Qgd29tZW5ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsV29tZW5ZZWFycyA9IE9iamVjdC52YWx1ZXMod29tZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgd29tZW5ZZWFybHlGaWx0ZXIucHVzaChhbGxXb21lblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgd29tZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uod29tZW5ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmICh3b21lbkRhdGEgPiBtZW5EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiTWVuXCI6IG1lbkRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YSxcbiAgICAgICAgICAgICAgICBcIldvbWVuXCI6IHdvbWVuRGF0YSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkYXlDb21wRmlsdGVyKGFjdGl2aXR5LCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IGRhdGFbYWN0aXZpdHldXG5cbiAgICAgICAgY29uc3Qgbm9uRmlsdGVyID0geyBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJOb25ob2xpZGF5IHdlZWtkYXlzXCJdIH1cbiAgICAgICAgY29uc3QgaG9saUZpbHRlciA9IHsgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGFjdGl2aXR5RmlsdGVyW1wiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiXSB9XG5cbiAgICAgICAgY29uc3Qgbm9uWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE5vblllYXJzID0gT2JqZWN0LnZhbHVlcyhub25GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbm9uWWVhcmx5RmlsdGVyLnB1c2goYWxsTm9uWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBub25EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2Uobm9uWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCBob2xpWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbEhvbGlZZWFycyA9IE9iamVjdC52YWx1ZXMoaG9saUZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBob2xpWWVhcmx5RmlsdGVyLnB1c2goYWxsSG9saVllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgaG9saURhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShob2xpWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBpZiAoaG9saURhdGEgPiBub25EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YSxcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjogbm9uRGF0YSxcbiAgICAgICAgICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogaG9saURhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5leHRTdGVwKG9wdGlvbiwgY2xhc3NOYW1lLCBuZXh0LCBuZXh0Q2xhc3MsIG5leHRDb21wb25lbnQsIHByZXZDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke29wdGlvbn1gKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25leHR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0uY2xhc3NMaXN0LmFkZChuZXh0Q2xhc3MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtuZXh0Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIG5leHRDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q29tcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7cHJldkNvbXBvbmVudH1gKTtcbiAgICAgICAgICAgICAgICBwcmV2Q29tcC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wb25lbnQtZGlzcGxheVwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiXSwic291cmNlUm9vdCI6IiJ9