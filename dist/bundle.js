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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImVtcGxveWVkU2VsZWN0b3JzIiwiRW1wbG95ZWRTZWxlY3RvcnMiLCJhZGRTZWxlY3RvcnMiLCJnZW5kZXJDb21wIiwiR2VuZGVyQ29tcCIsImFkZENvbXAiLCJldmVyeW9uZVNlbGVjdG9ycyIsIkV2ZXJ5b25lU2VsZWN0b3JzIiwiZGF5Q29tcCIsIkRheUNvbXAiLCJhcHBBY2FkZW15U2VsZWN0b3IiLCJBcHBBY2FkZW15U2VsZWN0b3IiLCJhZGRTZWxlY3RvciIsInJlc2lkZW50U2VsZWN0b3IiLCJSZXNpZGVudFNlbGVjdG9yIiwiZW1wbG95ZWQiLCJlbXBsb3llZERhdGEiLCJlbXBsb3llZERhdGFGaWx0ZXIiLCJyZXN1bHQiLCJhY3Rpdml0aWVzIiwiZ2VuZGVyIiwieWVhcnMiLCJlbXBsb3llZFBhcmFtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZGVyRGF0YSIsImdlbmRlckNvbXBGaWx0ZXIiLCJhY3Rpdml0eSIsImV2ZXJ5b25lIiwiZXZlcnlvbmVEYXRhIiwiZXZlcnlvbmVEYXRhRmlsdGVyIiwidHlwZSIsImRheSIsImRheURhdGEiLCJkYXlDb21wRmlsdGVyIiwiYXBwYWNhZGVteSIsInBlcnNvbiIsInllYXIiLCJyZXNpZGVudCIsIkNyZWF0ZSIsImF0dGFjaCIsImZpbHRlciIsImZpbHRlcnMiLCJzZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsImlubmVyVGV4dCIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsImVsIiwidG9VcHBlckNhc2UiLCJwYXJhbSIsImpvaW4iLCJkYXR1bSIsImkiLCJsaSIsInNldEF0dHJpYnV0ZSIsImFscGhhIiwic3BhbiIsInRvRml4ZWQiLCJhcmMiLCJzZWxlY3Rpb24iLCJzZWxlY3Rpb25zIiwiYWN0aXZpdHlTZWxlY3QiLCJ1cGRhdGVBY3Rpdml0eSIsInllYXJTZWxlY3RvciIsInN1Ym1pdEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsIkFDVElWSVRJRVMiLCJhY3Rpdml0eVNlbGVjdG9yIiwib3RoZXJTZWxlY3RvciIsInVwZGF0ZUdlbmRlciIsInVwZGF0ZVR5cGUiLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbHJlYWR5YnRuIiwibmV4dFN0ZXAiLCJ5ZXNCdG4iLCJjaXRhdGlvbiIsImEiLCJleGl0QnV0dG9uIiwiZmlyc3RCdXR0b24iLCJzdGVwcyIsInNlY29uZEJ1dHRvbiIsInRoaXJkQnV0dG9uIiwiZm91cnRoQnV0dG9uIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkMyIsInNlbGVjdCIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwiYXJyYXlTdW0iLCJtYXAiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsIm9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJub2RlcyIsInNsaWNlIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0IiwiVXBkYXRlIiwicHJlZml4IiwidGhhdCIsImFjdGl2aXR5TGFiZWwiLCJhY3Rpdml0eVNlbGVjdGlvbnMiLCJjb25jYXQiLCJkaXYiLCJhY3Rpdml0eU9wdGlvbiIsImNoZWNrZWQiLCJ5ZWFyc0xhYmVsIiwieWVhclNlbGVjdGlvbnMiLCJ5ZWFyT3B0aW9uIiwiZHJhd0hhbmRzIiwib2xkIiwiaGFuZHMiLCJtaW51dGVzIiwiaG91cnMiLCJkYXJrTW9kZUJ0biIsInRleHQiLCJwYWdlIiwiY29udGFpbnMiLCJidG4iLCJmb290ZXIiLCJodG1sIiwidG9nZ2xlIiwib3JkZXIiLCJzdGVwVGV4dCIsImJ1dHRvblRleHQiLCJ0cmlhbmdsZURpcmVjdGlvbiIsInN0ZXAiLCJidXR0b24iLCJ0cmlhbmdsZUEiLCJ0cmlhbmdsZUIiLCJ0cmlhbmdsZSIsIndvcmRzIiwib3B0aW9ucyIsInVwZGF0ZSIsImNyZWF0ZVRleHROb2RlIiwiYWxsIiwibmV3QXJyIiwicHVzaCIsImFycmF5QXZlcmFnZSIsImFycmF5TWVyZ2UiLCJhcnIiLCJzdW0iLCJsZW5ndGgiLCJhcnJheXMiLCJmaW5hbCIsImV2ZXJ5IiwiY29uc29sZSIsImxvZyIsInN1YkFyciIsImFjdGl2aXR5RmlsdGVyIiwiZ2VuZGVyRmlsdGVyIiwiZmluYWxEYXRhIiwieWVhcmx5RmlsdGVyIiwiYWxsWWVhcnMiLCJ2YWx1ZXMiLCJzb3J0ZWQiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJuZXh0Q29tcG9uZW50IiwicHJldkNvbXBvbmVudCIsImNsb3NlTW9kYWwiLCJuZXh0SXRlbSIsIm5leHRDb21wIiwicHJldkNvbXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElB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QUFDSCwyQ0FBdUJBLE9BRHBCO0FBRUgsaURBQTZCRztBQUYxQixpQkFBUDtBQUtIO0FBQ0o7OztpQ0FFUTFLLE0sRUFBUTJLLFMsRUFBV0MsSSxFQUFNQyxTLEVBQVdDLGEsRUFBZUMsYSxFQUFlO0FBQ3ZFLG1CQUFPLGFBQUs7QUFDUmhOLGtCQUFFc0IsY0FBRjtBQUNBLG9CQUFNMkwsYUFBYWhQLFNBQVNDLGFBQVQsT0FBMkIrRCxNQUEzQixDQUFuQjtBQUNBZ0wsMkJBQVd2TCxTQUFYLENBQXFCWSxNQUFyQixDQUE0QnNLLFNBQTVCO0FBQ0Esb0JBQUlDLElBQUosRUFBVTtBQUNOLHdCQUFNSyxXQUFXalAsU0FBU0MsYUFBVCxPQUEyQjJPLElBQTNCLENBQWpCO0FBQ0FLLDZCQUFTeEwsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJtTCxTQUF2QjtBQUNIO0FBQ0Qsb0JBQUlDLGFBQUosRUFBbUI7QUFDZix3QkFBTUksV0FBV2xQLFNBQVNtRSxnQkFBVCxNQUE2QjJLLGFBQTdCLENBQWpCO0FBQ0FJLDZCQUFTckwsT0FBVCxDQUFpQjtBQUFBLCtCQUFNaUIsR0FBR3JCLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixtQkFBakIsQ0FBTjtBQUFBLHFCQUFqQjtBQUNIO0FBQ0Qsb0JBQUlxTCxhQUFKLEVBQW1CO0FBQ2Ysd0JBQU1JLFdBQVduUCxTQUFTbUUsZ0JBQVQsTUFBNkI0SyxhQUE3QixDQUFqQjtBQUNBSSw2QkFBU3RMLE9BQVQsQ0FBaUI7QUFBQSwrQkFBTWlCLEdBQUdyQixTQUFILENBQWFZLE1BQWIsQ0FBb0IsbUJBQXBCLENBQU47QUFBQSxxQkFBakI7QUFDSDtBQUNKLGFBaEJEO0FBaUJIOzs7Ozs7a0JBSVUvRCxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcGxveWVkQnlHZW5kZXIgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA4Ljg4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDguOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOC45OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA4Ljg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDguOTYsXG4gICAgICAgICAgICBcIjIwMThcIjogOC45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNDEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS40OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMDQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMDZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuOTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC42MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41NlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSwgXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjk1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjAzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC44OFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNDgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS41OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjU1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjM1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNjQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1Ljg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNzcsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1Ljc0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjA2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS4wMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0Ljk3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjk3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuOTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy44NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuMDIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy43MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjY4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjQzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuMzgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuMzZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZXZlcnlvbmVCeURheSA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjI0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjMxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEwLjA3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEwLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEwLjA4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMTAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS41ODUsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjY1NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjY2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuNjcsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS43MDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS43NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS43OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS43NixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5Ljc2NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5Ljc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjEzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMzksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjM0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4yNjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjY4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS41OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS43MSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjY5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjA2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuMTIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuODI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjg3NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjgzNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS45MzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS45MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS44OCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjkxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjc5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNzQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzU1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQ3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40N1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjUxNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQ4NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQ4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTJcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0LjQxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogNC40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDMuMDYsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjg2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjkzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjg5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMi45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjg3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjkzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuODc1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM3NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM3NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzYgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC43MSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjY3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNzMsXG4gICAgICAgICAgICBcIjIwMTJcIjogNC44NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNC42OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogNC43MlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDYuNDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogNi41MyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA2LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNi4zNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNS41NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA1LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMTNcIjogNS42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNjQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuNTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS41OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1LjY0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE0IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzE1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNzVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQXBwIGZyb20gJy4vanMvY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9uJ1xuaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICAvLyBpbnN0cnVjdGlvbnMgbW9kYWxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zKCk7XG5cbiAgICAgICAgLy8gbWFraW5nIGFsbCB0aGUgc2VsZWN0b3JzXG4gICAgICAgIENhdGVnb3J5U2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCBlbXBsb3llZFNlbGVjdG9ycyA9IG5ldyBFbXBsb3llZFNlbGVjdG9ycygpO1xuICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZ2VuZGVyQ29tcCA9IG5ldyBHZW5kZXJDb21wKCk7XG4gICAgICAgIGdlbmRlckNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBldmVyeW9uZVNlbGVjdG9ycyA9IG5ldyBFdmVyeW9uZVNlbGVjdG9ycygpO1xuICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5hZGRTZWxlY3RvcnMoKTtcbiAgICAgICAgY29uc3QgZGF5Q29tcCA9IG5ldyBEYXlDb21wKCk7XG4gICAgICAgIGRheUNvbXAuYWRkQ29tcCgpO1xuICAgICAgICBjb25zdCBhcHBBY2FkZW15U2VsZWN0b3IgPSBuZXcgQXBwQWNhZGVteVNlbGVjdG9yKCk7XG4gICAgICAgIGFwcEFjYWRlbXlTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByZXNpZGVudFNlbGVjdG9yID0gbmV3IFJlc2lkZW50U2VsZWN0b3IoKTtcbiAgICAgICAgcmVzaWRlbnRTZWxlY3Rvci5hZGRTZWxlY3RvcigpO1xuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRW1wbG95ZWQgZGF0YXNldFxuICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wbG95ZWQtYnRuXCIpO1xuICAgICAgICBjb25zdCBlbXBsb3llZERhdGEgPSB1dGlscy5lbXBsb3llZERhdGFGaWx0ZXIoZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmFjdGl2aXRpZXMsXG4gICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcbiAgICAgICAgY29uc3QgZW1wbG95ZWRQYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgIGRlbGV0ZSBlbXBsb3llZFBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIGVtcGxveWVkUGFyYW1zKTtcblxuICAgICAgICBlbXBsb3llZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdDtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGVtcGxveWVkRGF0YSwgcGFyYW1zKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGdlbmRlciBjb21wYXJpc29uXG4gICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZGVyLWJ0blwiKTtcbiAgICAgICAgZ2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJEYXRhID0gdXRpbHMuZ2VuZGVyQ29tcEZpbHRlcihnZW5kZXJDb21wLnJlc3VsdC5hY3Rpdml0eSxcbiAgICAgICAgICAgICAgICBnZW5kZXJDb21wLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoZ2VuZGVyRGF0YSwgZ2VuZGVyQ29tcC5yZXN1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgRXZlcnlvbmUgZGF0YXNldFxuICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXZlcnlvbmUtYnRuXCIpO1xuICAgICAgICBldmVyeW9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZXZlcnlvbmVEYXRhID0gdXRpbHMuZXZlcnlvbmVEYXRhRmlsdGVyKGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC50eXBlLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZUJ5RGF5KVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhldmVyeW9uZURhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBkYXkgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1idG5cIik7XG4gICAgICAgIGRheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZGF5RGF0YSA9IHV0aWxzLmRheUNvbXBGaWx0ZXIoZGF5Q29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZGF5Q29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGRheURhdGEsIGRheUNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEFwcCBBY2FkZW15IFN0dWRlbnRcbiAgICAgICAgY29uc3QgYXBwYWNhZGVteSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWFjYWRlbXktYnRuXCIpO1xuICAgICAgICBhcHBhY2FkZW15LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoYXBwQWNhZGVteVNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLCB5ZWFyOiBcIjIwMTlcIn0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZmlyc3QgeWVhciByZXNpZGVudCBhZnRlciBtZWRpY2FsIHNjaG9vbFxuICAgICAgICBjb25zdCByZXNpZGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzaWRlbnQtYnRuXCIpO1xuICAgICAgICByZXNpZGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHJlc2lkZW50U2VsZWN0b3IuZGF0YSwge3BlcnNvbjogXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIn0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgQXBwQWNhZGVteVNlbGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJhcHBcIilcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gQ3JlYXRlLnNlbGVjdEJ1dHRvbihmaWx0ZXIsIFwiYXBwLWFjYWRlbXlcIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxNC44LFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJUaGUgdHlwaWNhbCBBcHAgQWNhZGVteSBzdHVkZW50LiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBBY2FkZW15U2VsZWN0b3I7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjYXRlZ29yeVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1maWx0ZXJcIik7XG4gICAgYXR0YWNoLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0b3IpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIkVtcGxveWVkIGJ5IEdlbmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV2ZXJ5b25lIGJ5IERheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJdXG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKVxuICAgICAgICBjYXRlZ29yeU9wdGlvbi52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeVNlbGVjdG9yLmFwcGVuZENoaWxkKGNhdGVnb3J5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJqcy1cIl0nKVxuICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKSk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFbXBsb3llZCBieSBHZW5kZXJcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1wbG95ZWRcIik7XG4gICAgICAgICAgICAgICAgZW1wbG95ZWQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZ2VuZGVyXCIpO1xuICAgICAgICAgICAgICAgIGdlbmRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFdmVyeW9uZSBieSBEYXlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZXZlcnlvbmVcIik7XG4gICAgICAgICAgICAgICAgZXZlcnlvbmUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcHAgQWNhZGVteSBTdHVkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hcHBcIik7XG4gICAgICAgICAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1yZXNpZGVudFwiKTtcbiAgICAgICAgICAgICAgICByZXNpZGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiaW1wb3J0IHthbHBoYX0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXlcIik7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWRhdGFcIilcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgY29uc3QgcGFyYW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHBhcmFtRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicGFyYW1zXCIpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYW1EaXNwbGF5KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLnNvcnQoKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHBhcmFtRGlzcGxheS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBgJHtlbC50b1VwcGVyQ2FzZSgpfTpgXG4gICAgICAgIGNvbnN0IHBhcmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFyYW0uaW5uZXJUZXh0ID0gdHlwZW9mIHBhcmFtc1tlbF0gPT09IFwib2JqZWN0XCIgPyBwYXJhbXNbZWxdLmpvaW4oXCIsIFwiKSA6IHBhcmFtc1tlbF07XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgICAgICBwLmFwcGVuZENoaWxkKHBhcmFtKTtcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggKGRhdHVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdHVtO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBhbHBoYVtpXSlcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbGlzdC1pdGVtc1wiKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGRhdGFbZGF0dW1dLnRvRml4ZWQoMik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb25zdCBhcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthbHBoYVtpXX1gKTtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QuYWRkKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgfSlcblxuXG59IiwiaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlJ1xuXG5cbmNsYXNzIERheUNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZpdHkoZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIgPyBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZGF5XCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlcik7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImRcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSwgZmlsdGVyLCBcImRheVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJDb21wYXJpc29uIG9mIG5vbmhvbGlkYXkgd2Vla2RheXMgYWdhaW5zdCB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IEFDVElWSVRJRVMsXG4gICAgICAgICAgICBnZW5kZXI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkVtcGxveWVkIGJ5IEdlbmRlclwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVHZW5kZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiZ2VuZGVyXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiID8gQUNUSVZJVElFUyA6IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIGdlbmRlcjogc2VsZWN0aW9ucy5nZW5kZXIsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IENyZWF0ZS5maWx0ZXJzKGF0dGFjaCwgXCJlbXBsb3llZFwiKVxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZVwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sIHRoaXMpO1xuICAgICAgICBDcmVhdGUub3RoZXJTZWxlY3RvcihmaWx0ZXIsIFwiZ2VuZGVyXCIsIFtcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLCBcIldvbWVuXCIsIFwiTWVuXCJdLCB0aGlzLnVwZGF0ZUdlbmRlci5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJlbXBsb3llZFwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJFbXBsb3llZCBtZW4gYW5kIHdvbWVuIG9uIGFuIGF2ZXJhZ2UgZGF5XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIiA/IEFDVElWSVRJRVMgOiBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIGNvbnN0IHllYXJzID0gc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIiA/IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0gOiBzZWxlY3Rpb25zW1wieWVhcnNcIl1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgdHlwZTogc2VsZWN0aW9ucy50eXBlLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkV2ZXJ5b25lIGJ5IGRheVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcImV2ZXJ5b25lXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZXZcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS5vdGhlclNlbGVjdG9yKGZpbHRlciwgXCJ0eXBlXCIsIFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0sIHRoaXMudXBkYXRlVHlwZS5iaW5kKHRoaXMpKVxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyksIGZpbHRlciwgXCJldmVyeW9uZVwiKTtcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBbGwgcGVyc29ucyBvbiBub25ob2xpZGF5IHdlZWtkYXlzIG9yIHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZXJ5b25lU2VsZWN0b3JzOyIsImltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuXG5jbGFzcyBHZW5kZXJDb21wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgeWVhcnMgPSBzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiID8gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdIDogc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBDcmVhdGUuZmlsdGVycyhhdHRhY2gsIFwiZ2VuZGVyXCIpXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyksIGZpbHRlciwgdGhpcyk7XG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IoZmlsdGVyLCBcImdcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdLCB0aGlzKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImltcG9ydCBXYWxrdGhyb3VnaCBmcm9tICcuL3dhbGt0aHJvdWdoJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcbiAgICAvLyBDcmVhdGluZyB0aGUgbW9kYWxcbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRpbWUgVXNhZ2VcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBUaW1lIFVzYWdlLCBhIGRhdGEgdmlzdWFsaXphdGlvbiBvZiBob3cgQW1lcmljYW5zIHVzZSB0aGVpciB0aW1lIG9uIGEgZ2l2ZW4gZGF5LiBUaGUgZGF0YSBpcyBnYXRoZXJlZCBieSB0aGUgQnVyZWF1IG9mIExhYm9yIFN0YXRpc3RpY3Mgb25jZSBhIHllYXIuXCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgLy8gUXVlc3Rpb25cbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IFwiV291bGQgeW91IGxpa2UgYSBicmllZiB3YWxrdGhyb3VnaD9cIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgcXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLXF1ZXN0aW9uXCIpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgLy8gRXhpdCBidXR0b25cbiAgIFxuICAgIC8vIEkndmUgYWxyZWFkeSB1c2VkIHRoaXMgYmVmb3JlIGJ1dHRvbi4gVGFrZXMgdGhlbSBkaXJlY3RseSBpbnRvIHRoZSBhcHAuXG4gICAgY29uc3QgYWxyZWFkeWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhbHJlYWR5YnRuKTtcbiAgICBhbHJlYWR5YnRuLmlubmVyVGV4dCA9IFwiSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUuXCI7XG4gICAgYWxyZWFkeWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaCBidXR0b24uIEl0IHNob3VsZCB0YWtlIHRoZW0gdGhyb3VnaCB0aGUgd2Fsa3Rocm91Z2guIFxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdG4pOyBcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXMsIHBsZWFzZS5cIjtcbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBXYWxrdGhyb3VnaChibHVyKTtcbiAgICAgICAgdXRpbHMubmV4dFN0ZXAoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikoZSk7XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gQ3JlYXRlLmZpbHRlcnMoYXR0YWNoLCBcInJlc2lkZW50XCIpXG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gQ3JlYXRlLnNlbGVjdEJ1dHRvbihmaWx0ZXIsIFwicmVzaWRlbnRcIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IDYsXG4gICAgICAgICAgICAgICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiAxLjUsXG4gICAgICAgICAgICAgICAgXCJFYXRpbmcgYW5kIGRyaW5raW5nXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjogMS4wLFxuICAgICAgICAgICAgICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjogMC41LFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4zLFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBIGZpcnN0LXllYXIgbWVkaWNhbCByZXNpZGVudCBhdCBVQ1NGLiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgICAgIGNvbnN0IGNpdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChjaXRhdGlvbik7XG4gICAgICAgIGNpdGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXRhdGlvblwiKTtcbiAgICAgICAgY2l0YXRpb24uaW5uZXJUZXh0ID0gXCJEYXRhIGFwcHJveGltYXRlZCBmcm9tIFwiO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiKTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgY2l0YXRpb24uYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpZGVudFNlbGVjdG9yOyIsImltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgYmx1ciA9PiB7XG4gICAgLy8gV2Fsa3Rocm91Z2hcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwiZXhpdFwiKTtcbiAgICBleGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRXhpdCB3YWxrdGhyb3VnaFwiO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJleGl0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBudWxsLCBcIipcIikpXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZpcnN0XCIsXG4gICAgICAgIFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiLFxuICAgICAgICBcIkdvdCBpdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3Qgc2Vjb25kQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwic2Vjb25kXCIsXG4gICAgICAgICdTZWxlY3QgeW91ciBwYXJhbWV0ZXJzLiBBcHAgQWNhZGVteSBTdHVkZW50IGFuZCBGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnQgaGF2ZSBubyBwYXJhbWV0ZXJzLiBUaGVuIGNsaWNrIFwiU3VibWl0IFNlbGVjdGlvbi5cIicsXG4gICAgICAgIFwiR3JlYXQhXCIsXG4gICAgICAgIFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IHRoaXJkQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwidGhpcmRcIixcbiAgICAgICAgJ0FzIHlvdSBob3ZlciBvdmVyIHRoZSBzbGljZXMgb2YgdGhlIGdyYXBoLCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHdpbGwgbGlnaHQgdXAsIGFuZCB2aWNlIHZlcnNhLiBOb3RlIHRoYXQgdGhlc2Ugc2xpY2VzIGFyZSB0ZWNobmljYWxseSBwcm9wb3J0aW9ucywgYW5kIG5vdCBzdHJpY3RseSBvdXQgb2YgMjQgaG91cnMuIEl0IGRlcGVuZHMgb24gdGhlIHBhcmFtZXRlcnMuJyxcbiAgICAgICAgXCJBd2Vzb21lIVwiXG4gICAgICAgIClcbiAgICBjb25zdCBmb3VydGhCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJmb3VydGhcIixcbiAgICAgICAgXCJUaGVyZSdzIGEgZGFyayBtb2RlIGlmIG5lZWRlZC5cIixcbiAgICAgICAgXCJJJ20gcmVhZHkuXCIsXG4gICAgICAgIFwiZG93blwiXG4gICAgKVxuICAgIGZpcnN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLnNlbGVjdG9yc1wiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikpXG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiI2NcIiwgXCIuc2VsZWN0b3JzXCIpKVxuICAgIHRoaXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1mb3VydGhcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmRhcmstYnRuXCIsIFwiI2NcIikpXG4gICAgZm91cnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIsIG51bGwsIG51bGwsIG51bGwsIFwiLmRhcmstYnRuXCIpKVxufSIsImltcG9ydCB7YWxwaGF9IGZyb20gJy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFyZ2luID0gMTU7XG5cbiAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI3dhdGNoXCIpXG4gICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRhaW5lclwiLCB0cnVlKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHsgd2lkdGggPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7IHJldHVybiB3aWR0aCB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyBoZWlnaHQgPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0OyByZXR1cm4gaGVpZ2h0IH0pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAtIG1hcmdpbjtcblxuICAgIC8vIHNldHRpbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHBpZVxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuICAgIC8vIGZvcm1hdHRpbmcgdGhlIGRhdGEgb2JqZWN0IHJlY2VpdmVkIGludG8gYW4gYXJyYXkgb2YgUE9KT1Mgd2l0aCB0aGUga2V5cyBcImtleVwiIGFuZCBcInZhbHVlXCIgYW5kIHZhbHVlcyBjb3JyZXNwb25kaW5nbHkuIFxuICAgIGNvbnN0IHByb2Nlc3NlZF9kYXRhID0gZDMuZW50cmllcyhkYXRhKTtcblxuICAgIC8vIHRvdGFsIG9mIHRoZSB2YWx1ZXMsIHVzZWQgdG8gY2FsY3VsYXRlIHBlcmNlbnRhZ2UuXG4gICAgY29uc3QgdG90YWwgPSB1dGlscy5hcnJheVN1bShwcm9jZXNzZWRfZGF0YS5tYXAoZCA9PiB7cmV0dXJuIGQudmFsdWV9KSlcblxuICAgIC8vIGFzc2lnbmluZyBlYWNoIGRhdGEgZW50cnkgYSBwZXJjZW50YWdlIHZhbHVlXG4gICAgcHJvY2Vzc2VkX2RhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5wZXJjZW50YWdlID0gZC52YWx1ZSAvIHRvdGFsO1xuICAgIH0pXG5cbiAgICAvLyB0dXJuaW5nIHRoZSBkYXRhIHZhbHVlcyBpbnRvIGEgcGllIGdyYXBoLCB3aXRoIHRoZSBkLnZhbHVlcyBiZWluZyBob3cgbXVjaCBvZiB0aGUgdG90YWwgZG9udXQuIFxuICAgIGNvbnN0IGZpbmFsX2RhdGEgPSBwaWUocHJvY2Vzc2VkX2RhdGEpO1xuXG4gICAgLy8gZGVmaW5pbmcgdGhlIG1ldGhvZCB0byBtYWtlIGFyY3MuIHNpbmNlIHdlIGhhdmUgYW4gaW5uZXIgcmFkaXVzIGFuZCBhbiBvdXRlciByYWRpdXMsIHRoaXMgaXMgYSBkb251dC4gXG4gICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcblxuICAgIC8vIGFsbCB0aGUgcGF0aHMgbWFkZSBmcm9tIHRoZSBkYXRhIHZhbHVlcy4gXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgLy8gbWFraW5nIHRoZSBhcmNzIGZvciBlYWNoIHBhdGgsIHNldHRpbmcgbGlzdGVuZXJzLCBhbmQgY3JlYXRpbmcgdGhlIHRyYW5zaXRpb25zLiBcbiAgICBwYXRoc1xuICAgICAgICAuZWFjaCggZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FyY3MnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKGFscGhhW2ldLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZnVuY3Rpb24oZCkge3JldHVybiBkLmRhdGEucGVyY2VudGFnZSAqIDMwMDB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSggZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwICsgMjAwOyAvLyB0aGlzIGxpbmUgaXMgbGl0ZXJhbGx5IGp1c3QgdG8gY2FsY3VsYXRlIHRoZSBkZWxheSBzdWNoIHRoYXQgdGhlIHRyYW5zaXRpb25zIGFyZSBvbmUgYWZ0ZXIgdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI2NTEyMy9yZXNpemUtc3ZnLXdoZW4td2luZG93LWlzLXJlc2l6ZWQtaW4tZDMtanNcbiAgICAvLyBmb3IgcmVzcG9uc2l2ZSBTVkcgZGVzaWduXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NjI5ODIvaG93LXRvLWRpc3BsYXktcGVyY2VudGFnZS10by10aGUtZDMtanMtcGllY2hhcnRcbiAgICAvLyBmb3IgcGVyY2VudGFnZXNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL2ZhcmF6c2h1amEvZTJjYjUyODI4YzA4MGJhODVkYTU0NThlMjMwNGE2MWZcbiAgICAvLyBmb3IgbGFiZWxpbmcgc2xpY2VzIHdpdGggcGVyY2VudGFnZXNcbiAgICAvLyBodHRwOi8vYmwub2Nrcy5vcmcvbmFkaW5lc2svOTkzOTMwOTg5NTA2NjVjNDcxZTAzNWFjNTE3YzIyMjRcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjU5OTdcbiAgICAvLyBmb3IgY2hhaW5lZCB0cmFuc2l0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIFVwZGF0ZSBmcm9tICcuL3VwZGF0ZSdcblxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IChmaWx0ZXIsIHByZWZpeCwgdGhhdCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICBjb25zdCBhY3Rpdml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFjdGl2aXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJBY3Rpdml0aWVzXCI7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eUxhYmVsKVxuXG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3Rpb25zID0gW1wiQWxsIEFjdGl2aXRpZXNcIl0uY29uY2F0KEFDVElWSVRJRVMpO1xuICAgIGFjdGl2aXR5U2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBVcGRhdGUuYWN0aXZpdHkocHJlZml4LCB0aGF0KSk7XG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyU2VsZWN0b3IgPSAoZmlsdGVyLCBwcmVmaXgsIHllYXJzLCB0aGF0KSA9PiB7XG4gICAgY29uc3QgeWVhclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdG9yKTtcbiAgICB5ZWFyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInllYXItc2VsZWN0b3JcIilcbiAgICBjb25zdCB5ZWFyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHllYXJzTGFiZWwuaW5uZXJUZXh0ID0gXCJZZWFyc1wiO1xuICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZCh5ZWFyc0xhYmVsKVxuXG4gICAgY29uc3QgeWVhclNlbGVjdGlvbnMgPSB5ZWFycztcbiAgICB5ZWFyU2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCB5ZWFyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB5ZWFyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFVwZGF0ZS55ZWFycyhwcmVmaXgsIHRoYXQpKVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKGhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3QgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25zID0gQUNUSVZJVElFUztcbiAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVBY3Rpdml0eSlcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdIYW5kcyA9ICgpID0+IHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiY2xvY2staGFuZHNcIl0nKTtcbiAgICBvbGQuZm9yRWFjaChlbCA9PiB7ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCl9KVxuXG4gICAgY29uc3QgaGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbmRzXCIpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbnV0ZXMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKG1pbnV0ZXMpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJjbG9jay1oYW5kcy1ob3VyXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKGhvdXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtNb2RlQnRuID0gKGRyYXcsIGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIik7XG4gICAgaWYgKG9sZCkge1xuICAgICAgICBvbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGQpO1xuICAgIH1cbiAgICBsZXQgdGV4dCA9IFwiRGFyayBNb2RlXCI7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLWRhcmtcIikpIHtcbiAgICAgICAgdGV4dCA9IFwiTGlnaHQgTW9kZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkYXJrLWJ0blwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtZGFya1wiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtbGlnaHRcIik7XG4gICAgICAgIGRyYXcoZGF0YSwgcGFyYW1zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoYmx1ciwgb3JkZXIsIHN0ZXBUZXh0LCBidXR0b25UZXh0LCB0cmlhbmdsZURpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgYHdhbGt0aHJvdWdoLXN0ZXAtJHtvcmRlcn1gKTtcbiAgICBzdGVwLmlubmVyVGV4dCA9IHN0ZXBUZXh0O1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgIGlmIChvcmRlciA9PT0gXCJ0aGlyZFwiKSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1hXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQSk7XG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoYCR7dHJpYW5nbGVEaXJlY3Rpb259LXRyaWFuZ2xlYCwgYHdhbGt0aHJvdWdoLSR7b3JkZXJ9LXRyaWFuZ2xlYCk7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSAoZmlsdGVyLCB3b3JkcykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd29yZHM7XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gKGF0dGFjaCwgY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBganMtJHtjYXRlZ29yeX1gKTtcbiAgICBpZiAoY2F0ZWdvcnkgPT09IFwiZW1wbG95ZWRcIikge1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdG9yID0gKGZpbHRlciwgY2F0ZWdvcnksIG9wdGlvbnMsIHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFNlbGVjdCAke2NhdGVnb3J5fWApKVxuICAgIG9wdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlKSBcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ1dHRvbiA9IChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgJHtjYXRlZ29yeX0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHJldHVybiBidXR0b247XG59IiwiZXhwb3J0IGNvbnN0IGFjdGl2aXR5ID0gKHByZWZpeCwgdGhhdCkgPT4gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICB0aGF0LnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0gPSBbXCJBbGwgQWN0aXZpdGllc1wiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoYWN0aXZpdHkgPT4geyByZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgdGhhdC5zZWxlY3Rpb24uYWN0aXZpdGllcyA9IHRoYXQuc2VsZWN0aW9uLmFjdGl2aXRpZXMuZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgeWVhcnMgPSAocHJlZml4LCB0aGF0KSA9PiBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cHJlZml4fV95ZWFyT3B0aW9uYCkuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1feWVhck9wdGlvbkFsbGApO1xuICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgdGhhdC5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoYXQuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGF0LnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn0iLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmV4dFN0ZXAob3B0aW9uLCBjbGFzc05hbWUsIG5leHQsIG5leHRDbGFzcywgbmV4dENvbXBvbmVudCwgcHJldkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7b3B0aW9ufWApO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmV4dH1gKTtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKG5leHRDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke25leHRDb21wb25lbnR9YCk7XG4gICAgICAgICAgICAgICAgbmV4dENvbXAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtwcmV2Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgICAgIHByZXZDb21wLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=