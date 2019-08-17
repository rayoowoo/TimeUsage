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
        li.classList.add("display-list-items");
        li.appendChild(p);
        var span = document.createElement("span");
        span.innerText = data[datum].toFixed(2);
        li.appendChild(span);
        var arc = document.querySelector("." + alpha[i]);
        li.addEventListener("mouseover", function (e) {
            arc.classList.add("arc-display");
        });
        li.addEventListener("mouseout", function (e) {
            arc.classList.remove("arc-display");
        });
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
            genderSelector.classList.add("selectors", "selectors-select");
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

    var nextStep = function nextStep(option, className, next, nextClass, nextComponent, prevComponent) {
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
    yesBtn.addEventListener("click", function (e) {
        nextStep("modal", "modal-display", "walkthrough-step-first", "walkthrough-display", ".category-filter")(e);
        createExitButton();
    });

    // Exit button
    var createExitButton = function createExitButton() {
        var exitButton = document.createElement("div");
        blur.appendChild(exitButton);
        exitButton.classList.add("walkthrough-step", "exit");
        exitButton.innerText = "Exit walkthrough";
        exitButton.addEventListener("click", nextStep("blur", "modal-display", "exit", "walkthrough-display", null, "*"));
    };

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
    firstButton.addEventListener("click", nextStep("walkthrough-step-first", "walkthrough-display", "walkthrough-step-second", "walkthrough-display", ".selectors", ".category-filter"));

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
    secondButton.addEventListener("click", nextStep("walkthrough-step-second", "walkthrough-display", "walkthrough-step-third", "walkthrough-display", "#c", ".selectors"));

    var secondTriangle = document.createElement("div");
    secondTriangle.classList.add("left-triangle", "walkthrough-second-triangle");
    secondStep.appendChild(secondTriangle);

    // THIRD
    var thirdStep = document.createElement("section");
    blur.appendChild(thirdStep);
    thirdStep.classList.add("walkthrough-step", "walkthrough-step-third");
    thirdStep.innerText = 'As you hover over the slices of the graph, the corresponding data will light up, and vice versa. Note that these slices are technically proportions, and not strictly out of 24 hours. It depends on the parameters.';

    var thirdButton = document.createElement("div");
    thirdStep.appendChild(thirdButton);
    thirdButton.classList.add("walkthrough-step-button");
    thirdButton.innerText = "Awesome";
    thirdButton.addEventListener("click", nextStep("walkthrough-step-third", "walkthrough-display", "walkthrough-step-fourth", "walkthrough-display", ".dark-btn", "#c"));

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
    fourthButton.addEventListener("click", nextStep("blur", "modal-display", null, null, null, ".dark-btn"));

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
        d3.select(this).classed('arcs', true).classed(alpha[i], true).on("mouseover", function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHBfYWNhZGVteV9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbXBsb3llZF9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZXJ5b25lX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZXNpZGVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dhdGNoLmpzIl0sIm5hbWVzIjpbImVtcGxveWVkQnlHZW5kZXIiLCJldmVyeW9uZUJ5RGF5IiwiYXBwIiwiQXBwIiwicmVuZGVyIiwiZHJhdyIsImJpbmQiLCJkYXRhIiwicGFyYW1zIiwic3ZnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInV0aWxzIiwiVXRpbHMiLCJjYXRlZ29yeVNlbGVjdG9yIiwiZW1wbG95ZWRTZWxlY3RvcnMiLCJFbXBsb3llZFNlbGVjdG9ycyIsImFkZFNlbGVjdG9ycyIsImdlbmRlckNvbXAiLCJHZW5kZXJDb21wIiwiYWRkQ29tcCIsImV2ZXJ5b25lU2VsZWN0b3JzIiwiRXZlcnlvbmVTZWxlY3RvcnMiLCJkYXlDb21wIiwiRGF5Q29tcCIsImFwcEFjYWRlbXlTZWxlY3RvciIsIkFwcEFjYWRlbXlTZWxlY3RvciIsImFkZFNlbGVjdG9yIiwicmVzaWRlbnRTZWxlY3RvciIsIlJlc2lkZW50U2VsZWN0b3IiLCJlbXBsb3llZCIsImVtcGxveWVkRGF0YSIsImVtcGxveWVkRGF0YUZpbHRlciIsInJlc3VsdCIsImFjdGl2aXRpZXMiLCJnZW5kZXIiLCJ5ZWFycyIsImVtcGxveWVkUGFyYW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5kZXJEYXRhIiwiZ2VuZGVyQ29tcEZpbHRlciIsImFjdGl2aXR5IiwiZXZlcnlvbmUiLCJldmVyeW9uZURhdGEiLCJldmVyeW9uZURhdGFGaWx0ZXIiLCJ0eXBlIiwiZGF5IiwiZGF5RGF0YSIsImRheUNvbXBGaWx0ZXIiLCJhcHBhY2FkZW15IiwicGVyc29uIiwieWVhciIsInJlc2lkZW50IiwiYXR0YWNoIiwiZmlsdGVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VsZWN0aW9uQnV0dG9uIiwiaW5uZXJUZXh0IiwicHJldmVudERlZmF1bHQiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPcHRpb24iLCJ2YWx1ZSIsIm9wdGlvbiIsInNlbGVjdG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsInJlbW92ZSIsInRhcmdldCIsIkFDVElWSVRJRVMiLCJDT0xPUlMiLCJhY3Rpdml0eVNlbGVjdG9yIiwidXBkYXRlQWN0aXZpdHkiLCJwcmVmaXgiLCJhY3Rpdml0eUxhYmVsIiwiYWN0aXZpdHlTZWxlY3Rpb25zIiwiY29uY2F0Iiwic2VsZWN0IiwiaSIsImRpdiIsInNwYW4iLCJhY3Rpdml0eU9wdGlvbiIsInNldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJ5ZWFyU2VsZWN0b3IiLCJ1cGRhdGVZZWFycyIsInllYXJzTGFiZWwiLCJ5ZWFyU2VsZWN0aW9ucyIsInllYXJPcHRpb24iLCJzdWJtaXRCdXR0b24iLCJoYW5kbGVTdWJtaXQiLCJhY3Rpdml0eVNlbGVjdCIsInNlbGVjdGlvbnMiLCJkcmF3SGFuZHMiLCJvbGQiLCJlbCIsImhhbmRzIiwibWludXRlcyIsImhvdXJzIiwiZGFya01vZGVCdG4iLCJ0ZXh0IiwicGFnZSIsImNvbnRhaW5zIiwiYnRuIiwiZm9vdGVyIiwiaHRtbCIsInRvZ2dsZSIsImxpc3QiLCJwYXJhbURpc3BsYXkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInAiLCJjYXRlZ29yeSIsInRvVXBwZXJDYXNlIiwicGFyYW0iLCJqb2luIiwiYWxwaGEiLCJkYXR1bSIsImxpIiwidG9GaXhlZCIsImFyYyIsIkNyZWF0ZSIsInNlbGVjdGlvbiIsImFsbCIsIm5ld0FyciIsInB1c2giLCJ1cGRhdGVHZW5kZXIiLCJnZW5kZXJTZWxlY3RvciIsImNyZWF0ZVRleHROb2RlIiwiZ2VuZGVycyIsImdlbmRlck9wdGlvbiIsInVwZGF0ZVR5cGUiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlcyIsInR5cGVPcHRpb24iLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJuZXh0U3RlcCIsImNsYXNzTmFtZSIsIm5leHQiLCJuZXh0Q2xhc3MiLCJuZXh0Q29tcG9uZW50IiwicHJldkNvbXBvbmVudCIsImNsb3NlTW9kYWwiLCJuZXh0SXRlbSIsIm5leHRDb21wIiwicHJldkNvbXAiLCJhbHJlYWR5YnRuIiwieWVzQnRuIiwiY3JlYXRlRXhpdEJ1dHRvbiIsImV4aXRCdXR0b24iLCJmaXJzdFN0ZXAiLCJmaXJzdEJ1dHRvbiIsImZpcnN0VHJpYW5nbGUiLCJzZWNvbmRTdGVwIiwic2Vjb25kQnV0dG9uIiwic2Vjb25kVHJpYW5nbGUiLCJ0aGlyZFN0ZXAiLCJ0aGlyZEJ1dHRvbiIsInRoaXJkVHJpYW5nbGVBIiwidGhpcmRUcmlhbmdsZUIiLCJmb3VydGhTdGVwIiwiZm91cnRoQnV0dG9uIiwiZm91cnRoVHJpYW5nbGUiLCJjaXRhdGlvbiIsImEiLCJhcnJheVN1bSIsImFycmF5QXZlcmFnZSIsImFycmF5TWVyZ2UiLCJhcnIiLCJzdW0iLCJsZW5ndGgiLCJhcnJheXMiLCJmaW5hbCIsImV2ZXJ5IiwiY29uc29sZSIsImxvZyIsInN1YkFyciIsImFjdGl2aXR5RmlsdGVyIiwiZ2VuZGVyRmlsdGVyIiwibWFwIiwiZmluYWxEYXRhIiwieWVhcmx5RmlsdGVyIiwiYWxsWWVhcnMiLCJ2YWx1ZXMiLCJzb3J0ZWQiLCJiIiwidHlwZUZpbHRlciIsIm1lbkZpbHRlciIsIndvbWVuRmlsdGVyIiwibWVuWWVhcmx5RmlsdGVyIiwiYWxsTWVuWWVhcnMiLCJtZW5EYXRhIiwid29tZW5ZZWFybHlGaWx0ZXIiLCJhbGxXb21lblllYXJzIiwid29tZW5EYXRhIiwibm9uRmlsdGVyIiwiaG9saUZpbHRlciIsIm5vblllYXJseUZpbHRlciIsImFsbE5vblllYXJzIiwibm9uRGF0YSIsImhvbGlZZWFybHlGaWx0ZXIiLCJhbGxIb2xpWWVhcnMiLCJob2xpRGF0YSIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZDMiLCJjbGFzc2VkIiwiYXBwZW5kIiwiYXR0ciIsImQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJwaWUiLCJwcm9jZXNzZWRfZGF0YSIsImVudHJpZXMiLCJ0b3RhbCIsInBlcmNlbnRhZ2UiLCJmaW5hbF9kYXRhIiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJlYWNoIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIm5vZGVzIiwic2xpY2UiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSw4Q0FBbUI7QUFDNUIsZ0NBQTRCO0FBQ3hCLG9CQUFZLDBCQURZO0FBRXhCLG9CQUFZLEdBRlk7QUFHeEIsZUFBTztBQUNILG9CQUFRLElBREw7QUFFSCxvQkFBUSxJQUZMO0FBR0gsb0JBQVEsSUFITDtBQUlILG9CQUFRLElBSkw7QUFLSCxvQkFBUSxJQUxMO0FBTUgsb0JBQVE7QUFOTCxTQUhpQjtBQVd4QixpQ0FBeUI7QUFDckIsb0JBQVEsR0FEYTtBQUVyQixvQkFBUSxJQUZhO0FBR3JCLG9CQUFRLEdBSGE7QUFJckIsb0JBQVEsSUFKYTtBQUtyQixvQkFBUSxJQUxhO0FBTXJCLG9CQUFRO0FBTmEsU0FYRDtBQW1CeEIsaUJBQVM7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QS9CLENBQVY7QUFDQSxtQkFBTyxVQUFVQyxDQUFWLEVBQWE7QUFDaEI1QixrQkFBRTJCLFFBQUYsR0FBYXJLLEVBQUVzSyxDQUFGLENBQWI7QUFDQSx1QkFBTzNILElBQUkrRixDQUFKLENBQVA7QUFDSCxhQUhEO0FBSUgsU0F0Qkw7QUF1QkMsS0F6QlQ7QUEwQkgsQzs7QUFFRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeS5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBlbXBsb3llZEJ5R2VuZGVyID0ge1xuICAgIFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOC44OCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA4LjkzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDguOTksXG4gICAgICAgICAgICBcIjIwMTZcIjogOC44NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA4Ljk2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDguOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjEyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA5LjM2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuNDIsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjQxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuNDgsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4wOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjA0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMDYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4wNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjA2XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjIyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yMyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42MVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjk2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjAyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjY4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjY3XG4gICAgICAgIH0sIFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjgzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMThcIjogMC43OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC45NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjkzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODksXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjkzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODhcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjQ4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS41MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNThcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDYuNDksXG4gICAgICAgICAgICBcIjIwMTdcIjogNi4zNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA2LjQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA1LjY0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNS44NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1Ljc3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMThcIjogNS43NFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuOTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogNS4wNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuMDEsXG4gICAgICAgICAgICBcIjIwMThcIjogNC45N1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjZcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy45NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjkxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuODQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy44NSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjAyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuOTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuNzMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy42OCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjYyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMy43MixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjY1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDMuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMy40MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAzLjM4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDMuMzksXG4gICAgICAgICAgICBcIjIwMTdcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAzLjM2XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA1XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4wOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPdGhlciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjhcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGV2ZXJ5b25lQnlEYXkgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogOS4yNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA5LjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA5LjMzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNDIsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS4zMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5LjMzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDkuMzJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxMC4wNyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxMC4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxMC4xMSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxMC4wOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxMC4xNixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEwLjE4XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDkuNTg1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDkuNjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogOS42NTUsXG4gICAgICAgICAgICBcIjIwMTFcIjogOS42NixcbiAgICAgICAgICAgIFwiMjAxMlwiOiA5LjY3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDkuNzA1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuNzQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDkuNzk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNzYsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS43NjUsXG4gICAgICAgICAgICBcIjIwMThcIjogOS43NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMTcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4xMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjEyXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjM5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4zNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjM1XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMjY1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMjU1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMjgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjIyNSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjIwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjIzNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS41NyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS42OCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuNTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS42NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjYzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuNzEsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS42OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuNjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAyLjA4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDIuMDQsXG4gICAgICAgICAgICBcIjIwMTBcIjogMi4wNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjEyLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMTNcIjogMi4wOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAyLjExLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDIuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMi4xNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAyLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMi4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjgyNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS44NzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS44MzUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuOTM1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuOTE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuODggXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNzIsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC43LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjY3XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC45MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjg3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuODIsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjg0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43OTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC43NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjc0NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjc3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNzY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNzc1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzksXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43NCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc1NSBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjQ0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQyLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjQ5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNDUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC40NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41MTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40ODUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40OCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjQ5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI2LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMTUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yMCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNzQsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC41LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDQuNCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA0LjQ5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogNC40MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0LjU0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDQuNDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNC42LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNTgsXG4gICAgICAgICAgICBcIjIwMThcIjogNC42MVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjMzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMzgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI2LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4xNFxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAzLjA2LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDIuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMi44NjUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMi45MzUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi44OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjg0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuOTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi44NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMi45MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAyLjkyNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjg3NSBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjYxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC42LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjYzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41OFxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTdcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4zNzUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4zOTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDE1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zNDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zNzVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjI2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yM1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40OVxuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuNDA1LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNDEsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC40MyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMzgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4zOTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM2IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA0LjYyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDQuNzEsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC42NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA0LjczLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDQuODUsXG4gICAgICAgICAgICBcIjIwMTNcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA0Ljc5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDQuNjksXG4gICAgICAgICAgICBcIjIwMTZcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA0LjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDQuNzJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA2LjQ4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDYuNTMsXG4gICAgICAgICAgICBcIjIwMTBcIjogNi40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDYuMzQsXG4gICAgICAgICAgICBcIjIwMTJcIjogNi41NyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDYuNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA2LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTdcIjogNi40NixcbiAgICAgICAgICAgIFwiMjAxOFwiOiA2LjU2XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDUuNTUsXG4gICAgICAgICAgICBcIjIwMDlcIjogNS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA1LjUzNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA1LjUzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA1LjcxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiA1LjY0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjU2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNTA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDUuNTksXG4gICAgICAgICAgICBcIjIwMThcIjogNS42NFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMyxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjI1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMyLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4zNDUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMxNSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjc1XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEFwcCBmcm9tICcuL2pzL0FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5yZW5kZXIoKTsiLCJpbXBvcnQgaW5zdHJ1Y3Rpb25zIGZyb20gJy4vaW5zdHJ1Y3Rpb24nXG5pbXBvcnQgV2F0Y2ggZnJvbSAnLi93YXRjaCdcbmltcG9ydCBDYXRlZ29yeVNlbGVjdG9yIGZyb20gJy4vY2F0ZWdvcnlfc2VsZWN0b3InXG5pbXBvcnQgRW1wbG95ZWRTZWxlY3RvcnMgZnJvbSAnLi9lbXBsb3llZF9zZWxlY3RvcnMnXG5pbXBvcnQgRXZlcnlvbmVTZWxlY3RvcnMgZnJvbSAnLi9ldmVyeW9uZV9zZWxlY3RvcnMnXG5pbXBvcnQgRGF0YURpc3BsYXkgZnJvbSAnLi9kYXRhX2Rpc3BsYXknXG5pbXBvcnQgQXBwQWNhZGVteVNlbGVjdG9yIGZyb20gJy4vYXBwX2FjYWRlbXlfc2VsZWN0b3InO1xuaW1wb3J0IFJlc2lkZW50U2VsZWN0b3IgZnJvbSAnLi9yZXNpZGVudF9zZWxlY3Rvcic7XG5pbXBvcnQgR2VuZGVyQ29tcCBmcm9tICcuL2dlbmRlcl9jb21wJ1xuaW1wb3J0IERheUNvbXAgZnJvbSAnLi9kYXlfY29tcCdcbmltcG9ydCB7IGVtcGxveWVkQnlHZW5kZXIgfSBmcm9tICcuLi9hc3NldHMvZGF0YS9lbXBsb3llZEJ5R2VuZGVyRGF0YVNoYXBlZCdcbmltcG9ydCB7IGV2ZXJ5b25lQnlEYXkgfSBmcm9tICcuLi9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge2RyYXdIYW5kcywgZGFya01vZGVCdG59IGZyb20gJy4vY3JlYXRlJztcblxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KGRhdGEsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhLWRpc3BsYXkgdWxcIik7XG4gICAgICAgIGlmIChzdmcpIHsgc3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTsgfVxuICAgICAgICBpZiAoZGlzcGxheSkgeyBkaXNwbGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlzcGxheSk7IH1cbiAgICAgICAgV2F0Y2goZGF0YSk7XG4gICAgICAgIERhdGFEaXNwbGF5KGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGRyYXdIYW5kcygpO1xuICAgICAgICBkYXJrTW9kZUJ0bih0aGlzLmRyYXcsIGRhdGEsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgICAgIGluc3RydWN0aW9ucygpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBDYXRlZ29yeVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgZW1wbG95ZWRTZWxlY3RvcnMgPSBuZXcgRW1wbG95ZWRTZWxlY3RvcnMoKTtcbiAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGdlbmRlckNvbXAgPSBuZXcgR2VuZGVyQ29tcCgpO1xuICAgICAgICBnZW5kZXJDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgZXZlcnlvbmVTZWxlY3RvcnMgPSBuZXcgRXZlcnlvbmVTZWxlY3RvcnMoKTtcbiAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGRheUNvbXAgPSBuZXcgRGF5Q29tcCgpO1xuICAgICAgICBkYXlDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgYXBwQWNhZGVteVNlbGVjdG9yID0gbmV3IEFwcEFjYWRlbXlTZWxlY3RvcigpO1xuICAgICAgICBhcHBBY2FkZW15U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcbiAgICAgICAgY29uc3QgcmVzaWRlbnRTZWxlY3RvciA9IG5ldyBSZXNpZGVudFNlbGVjdG9yKCk7XG4gICAgICAgIHJlc2lkZW50U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEVtcGxveWVkIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcGxveWVkLWJ0blwiKTtcbiAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG4gICAgICAgIGNvbnN0IGVtcGxveWVkUGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICBkZWxldGUgZW1wbG95ZWRQYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBlbXBsb3llZFBhcmFtcyk7XG5cbiAgICAgICAgZW1wbG95ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBnZW5kZXIgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmRlci1idG5cIik7XG4gICAgICAgIGdlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZ2VuZGVyRGF0YSA9IHV0aWxzLmdlbmRlckNvbXBGaWx0ZXIoZ2VuZGVyQ29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZ2VuZGVyQ29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGdlbmRlckRhdGEsIGdlbmRlckNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEV2ZXJ5b25lIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZXJ5b25lLWJ0blwiKTtcbiAgICAgICAgZXZlcnlvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lRGF0YSA9IHV0aWxzLmV2ZXJ5b25lRGF0YUZpbHRlcihldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQudHlwZSxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZXZlcnlvbmVEYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZGF5IGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktYnRuXCIpO1xuICAgICAgICBkYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSB1dGlscy5kYXlDb21wRmlsdGVyKGRheUNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGRheUNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhkYXlEYXRhLCBkYXlDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBBcHAgQWNhZGVteSBTdHVkZW50XG4gICAgICAgIGNvbnN0IGFwcGFjYWRlbXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1hY2FkZW15LWJ0blwiKTtcbiAgICAgICAgYXBwYWNhZGVteS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGFwcEFjYWRlbXlTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIiwgeWVhcjogXCIyMDE5XCJ9KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGZpcnN0IHllYXIgcmVzaWRlbnQgYWZ0ZXIgbWVkaWNhbCBzY2hvb2xcbiAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2lkZW50LWJ0blwiKTtcbiAgICAgICAgcmVzaWRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhyZXNpZGVudFNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJ9KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJjbGFzcyBBcHBBY2FkZW15U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtYXBwXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhcHAtYWNhZGVteS1idG5cIiwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBTZWxlY3Rpb25cIjtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IDE0LjgsXG4gICAgICAgICAgICAgICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogNixcbiAgICAgICAgICAgICAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IDEuNSxcbiAgICAgICAgICAgICAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogMSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiUHVyY2hhc2luZyBnb29kcyBhbmQgc2VydmljZXNcIjogMC4yLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3RoZXIgYWN0aXZpdGllc1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlRoZSB0eXBpY2FsIEFwcCBBY2FkZW15IHN0dWRlbnQuIE5vdCBmcm9tIEFUVVMuXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBBY2FkZW15U2VsZWN0b3I7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjYXRlZ29yeVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1maWx0ZXJcIik7XG4gICAgYXR0YWNoLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0b3IpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIkVtcGxveWVkIGJ5IEdlbmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV2ZXJ5b25lIGJ5IERheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJdXG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKVxuICAgICAgICBjYXRlZ29yeU9wdGlvbi52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeVNlbGVjdG9yLmFwcGVuZENoaWxkKGNhdGVnb3J5T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY2F0ZWdvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJqcy1cIl0nKVxuICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBzZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKSk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFbXBsb3llZCBieSBHZW5kZXJcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBsb3llZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1wbG95ZWRcIik7XG4gICAgICAgICAgICAgICAgZW1wbG95ZWQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR2VuZGVyIENvbXBhcmlzb24gKGVtcGxveWVkKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZ2VuZGVyXCIpO1xuICAgICAgICAgICAgICAgIGdlbmRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFdmVyeW9uZSBieSBEYXlcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBldmVyeW9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZXZlcnlvbmVcIik7XG4gICAgICAgICAgICAgICAgZXZlcnlvbmUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF5XCIpO1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcHAgQWNhZGVteSBTdHVkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hcHBcIik7XG4gICAgICAgICAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2lkZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1yZXNpZGVudFwiKTtcbiAgICAgICAgICAgICAgICByZXNpZGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxuXG59IiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjogXCJyZWRcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIjogXCJvcmFuZ2VcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCI6IFwieWVsbG93XCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiBcImdyZWVuXCIsXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IFwiYmx1ZVwiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiBcImluZGlnb1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogXCJ2aW9sZXRcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogXCJncmF5XCIsXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiBcImJsYWNrXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjogXCJjeWFuXCIsXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiBcImNoYXJ0cmV1c2VcIixcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogXCJtYWdlbnRhXCIsXG4gICAgXCJNZW5cIjogXCJibHVlXCIsXG4gICAgXCJXb21lblwiOiBcInJlZFwiLFxuICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBcImdyZWVuXCIsXG4gICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IFwicGlua1wiXG59IiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlciwgcHJlZml4KSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiKVxuICAgIGNvbnN0IGFjdGl2aXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWN0aXZpdHlMYWJlbC5pbm5lclRleHQgPSBcIkFjdGl2aXRpZXNcIjtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5TGFiZWwpXG5cbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdGlvbnMgPSBbXCJBbGwgQWN0aXZpdGllc1wiXS5jb25jYXQoQUNUSVZJVElFUyk7XG4gICAgYWN0aXZpdHlTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV9hY3Rpdml0eU9wdGlvbmApXG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgeWVhclNlbGVjdG9yID0gKHVwZGF0ZVllYXJzLCBmaWx0ZXIsIHByZWZpeCwgeWVhcnMpID0+IHtcbiAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZCh5ZWFyU2VsZWN0b3IpO1xuICAgIHllYXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwieWVhci1zZWxlY3RvclwiKVxuICAgIGNvbnN0IHllYXJzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgeWVhcnNMYWJlbC5pbm5lclRleHQgPSBcIlllYXJzXCI7XG4gICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKHllYXJzTGFiZWwpXG5cbiAgICBjb25zdCB5ZWFyU2VsZWN0aW9ucyA9IHllYXJzO1xuICAgIHllYXJTZWxlY3Rpb25zLmZvckVhY2goKHNlbGVjdCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpZiAoaSA9PT0gMCkgeyBkaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cbiAgICAgICAgeWVhclNlbGVjdG9yLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGNvbnN0IHllYXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHllYXJPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBpZiAoc2VsZWN0ID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFyT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25BbGxgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X3llYXJPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh5ZWFyT3B0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pXG4gICAgeWVhclNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlWWVhcnMpXG59XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b24gPSAoaGFuZGxlU3VibWl0LCBmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1idG5gLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJtaXQpXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpdml0eVNlbGVjdCA9ICh1cGRhdGVBY3Rpdml0eSwgZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGFjdGl2aXR5U2VsZWN0b3IpO1xuICAgIGFjdGl2aXR5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInNlbGVjdG9ycy1zZWxlY3RcIilcblxuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBBQ1RJVklUSUVTO1xuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpdml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoYWN0aXZpdHlPcHRpb24pO1xuICAgIH0pXG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVwZGF0ZUFjdGl2aXR5KVxufVxuXG5leHBvcnQgY29uc3QgZHJhd0hhbmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJjbG9jay1oYW5kc1wiXScpO1xuICAgIG9sZC5mb3JFYWNoKGVsID0+IHtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKX0pXG5cbiAgICBjb25zdCBoYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFuZHNcIik7XG4gICAgY29uc3QgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKFwiY2xvY2staGFuZHNcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQobWludXRlcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzLWhvdXJcIik7XG4gICAgaGFuZHMuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuXG5leHBvcnQgY29uc3QgZGFya01vZGVCdG4gPSAoZHJhdywgZGF0YSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKTtcbiAgICBpZiAob2xkKSB7XG4gICAgICAgIG9sZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gXCJEYXJrIE1vZGVcIjtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtZGFya1wiKSkge1xuICAgICAgICB0ZXh0ID0gXCJMaWdodCBNb2RlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRhcmstYnRuXCIpO1xuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1kYXJrXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJ0aGVtZS1saWdodFwiKTtcbiAgICAgICAgZHJhdyhkYXRhLCBwYXJhbXMpO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCggKGRhdHVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwLmlubmVyVGV4dCA9IGRhdHVtO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBhbHBoYVtpXSlcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbGlzdC1pdGVtc1wiKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGRhdGFbZGF0dW1dLnRvRml4ZWQoMik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb25zdCBhcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthbHBoYVtpXX1gKTtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QuYWRkKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBlID0+IHtcbiAgICAgICAgICAgIGFyYy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJjLWRpc3BsYXlcIik7XG4gICAgICAgIH0pXG4gICAgfSlcblxuXG59IiwiaW1wb3J0IHsgQUNUSVZJVElFUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4vY3JlYXRlJ1xuXG5cbmNsYXNzIERheUNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2aXR5ID0gdGhpcy51cGRhdGVBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVllYXJzID0gdGhpcy51cGRhdGVZZWFycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgdXBkYXRlWWVhcnMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZF95ZWFyT3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RfeWVhck9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoc2VsZWN0ID0+IHsgcmV0dXJuIHNlbGVjdCAhPT0gZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgeWVhcnM7XG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMDlcIiwgXCIyMDEwXCIsIFwiMjAxMVwiLCBcIjIwMTJcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHksXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIGZpbHRlcjogXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbXAoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZGF5XCIpO1xuXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImRcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImRheVwiKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ29tcGFyaXNvbiBvZiBub25ob2xpZGF5IHdlZWtkYXlzIGFnYWluc3Qgd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF5Q29tcCIsImltcG9ydCB7QUNUSVZJVElFU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi9jcmVhdGUnXG5cbmNsYXNzIEVtcGxveWVkU2VsZWN0b3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBcImFjdGl2aXRpZXNcIjogW1wiQWxsIEFjdGl2aXRpZXNcIl0sXG4gICAgICAgICAgICBcInllYXJzXCI6IFtcIkFsbCB5ZWFyc1wiXSxcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdlbmRlciA9IHRoaXMudXBkYXRlR2VuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogQUNUSVZJVElFUyxcbiAgICAgICAgICAgIGdlbmRlcjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0sXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZV9hY3Rpdml0eU9wdGlvblwiKS5mb3JFYWNoIChvcHRpb24gPT4ge29wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKX0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX2FjdGl2aXR5T3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXS5maWx0ZXIoIGFjdGl2aXR5ID0+IHtyZXR1cm4gYWN0aXZpdHkgIT09IFwiQWxsIEFjdGl2aXRpZXNcIn0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzID0gdGhpcy5zZWxlY3Rpb24uYWN0aXZpdGllcy5maWx0ZXIoc2VsZWN0ID0+IHtyZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVZZWFycyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlX3llYXJPcHRpb25cIikuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uY2hlY2tlZCA9IGZhbHNlOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZV95ZWFyT3B0aW9uQWxsXCIpO1xuICAgICAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHllYXIgPT4geyByZXR1cm4geWVhciAhPT0gXCJBbGwgeWVhcnNcIiB9KVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2VuZGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltcImdlbmRlclwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgYWN0aXZpdGllcywgeWVhcnM7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBBQ1RJVklUSUVTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIGdlbmRlcjogc2VsZWN0aW9ucy5nZW5kZXIsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIik7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImRpc3BsYXlcIiwgXCJqcy1lbXBsb3llZFwiKTtcblxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3Rvcih0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIFwiZVwiKTtcblxuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKHRoaXMudXBkYXRlWWVhcnMsIGZpbHRlciwgXCJlXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cblxuICAgICAgICBjb25zdCBnZW5kZXJTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChnZW5kZXJTZWxlY3Rvcik7XG4gICAgICAgIGdlbmRlclNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgICAgIGdlbmRlclNlbGVjdG9yLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2VsZWN0IGdlbmRlclwiKSlcbiAgICAgICAgY29uc3QgZ2VuZGVycyA9IFtcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLCBcIldvbWVuXCIsIFwiTWVuXCJdO1xuICAgICAgICBnZW5kZXJzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBnZW5kZXJPcHRpb24udmFsdWUgPSBzZWxlY3Q7XG4gICAgICAgICAgICBnZW5kZXJPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYXBwZW5kQ2hpbGQoZ2VuZGVyT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICBnZW5kZXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMudXBkYXRlR2VuZGVyKVxuXG4gICAgICAgIENyZWF0ZS5zdWJtaXRCdXR0b24odGhpcy5oYW5kbGVTdWJtaXQsIGZpbHRlciwgXCJlbXBsb3llZFwiKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiRW1wbG95ZWQgbWVuIGFuZCB3b21lbiBvbiBhbiBhdmVyYWdlIGRheVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWRTZWxlY3RvcnM7IiwiaW1wb3J0IHsgQUNUSVZJVElFUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4vY3JlYXRlJ1xuXG5cbmNsYXNzIGV2ZXJ5b25lU2VsZWN0b3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBcImFjdGl2aXRpZXNcIjogW1wiQWxsIEFjdGl2aXRpZXNcIl0sXG4gICAgICAgICAgICBcInllYXJzXCI6IFtcIkFsbCB5ZWFyc1wiXSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkFsbCBkYXlzXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVZZWFycyA9IHRoaXMudXBkYXRlWWVhcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVUeXBlID0gdGhpcy51cGRhdGVUeXBlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2V2X2FjdGl2aXR5T3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHsgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTsgb3B0aW9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldl9hY3Rpdml0eU9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0uZmlsdGVyKGFjdGl2aXR5ID0+IHsgcmV0dXJuIGFjdGl2aXR5ICE9PSBcIkFsbCBBY3Rpdml0aWVzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gbmV3QXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlWWVhcnMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZXZfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2UgOyBvcHRpb24ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gW1wiQWxsIHllYXJzXCJdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXZfeWVhck9wdGlvbkFsbFwiKTtcbiAgICAgICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdLmZpbHRlcih5ZWFyID0+IHsgcmV0dXJuIHllYXIgIT09IFwiQWxsIHllYXJzXCIgfSlcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IG5ld0FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblsneWVhcnMnXSA9IHRoaXMuc2VsZWN0aW9uWyd5ZWFycyddLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVHlwZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ0eXBlXCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IGFjdGl2aXRpZXMsIHllYXJzO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zW1wiYWN0aXZpdGllc1wiXVswXSA9PT0gXCJBbGwgQWN0aXZpdGllc1wiKSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gQUNUSVZJVElFUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBzZWxlY3Rpb25zWydhY3Rpdml0aWVzJ107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzLFxuICAgICAgICAgICAgeWVhcnM6IHllYXJzLFxuICAgICAgICAgICAgdHlwZTogc2VsZWN0aW9ucy50eXBlLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkV2ZXJ5b25lIGJ5IGRheVwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1ldmVyeW9uZVwiKTtcblxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3Rvcih0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIsIFwiZXZcIik7XG5cbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3Rvcih0aGlzLnVwZGF0ZVllYXJzLCBmaWx0ZXIsIFwiZXZcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cblxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQodHlwZVNlbGVjdG9yKTtcbiAgICAgICAgdHlwZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2VsZWN0IHR5cGVcIikpXG4gICAgICAgIGNvbnN0IHR5cGVzID0gW1wiQWxsIGRheXNcIiwgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCIsIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiXTtcbiAgICAgICAgdHlwZXMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICB0eXBlT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICAgICAgdHlwZU9wdGlvbi5pbm5lclRleHQgPSBzZWxlY3Q7XG4gICAgICAgICAgICB0eXBlU2VsZWN0b3IuYXBwZW5kQ2hpbGQodHlwZU9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgdHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy51cGRhdGVUeXBlKVxuXG5cbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImV2ZXJ5b25lXCIpO1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkFsbCBwZXJzb25zIG9uIG5vbmhvbGlkYXkgd2Vla2RheXMgb3Igd2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZlcnlvbmVTZWxlY3RvcnM7IiwiaW1wb3J0IHsgQUNUSVZJVElFUyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgQ3JlYXRlIGZyb20gJy4vY3JlYXRlJ1xuXG5cbmNsYXNzIEdlbmRlckNvbXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhcnMgPSB0aGlzLnVwZGF0ZVllYXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgICAgICB5ZWFyczogW1wiQWxsIHllYXJzXCJdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBY3Rpdml0eShlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCB5ZWFycztcbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhcnMgPSBzZWxlY3Rpb25zW1wieWVhcnNcIl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHksXG4gICAgICAgICAgICB5ZWFycyxcbiAgICAgICAgICAgIGZpbHRlcjogXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVllYXJzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dfeWVhck9wdGlvblwiKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnX3llYXJPcHRpb25BbGxcIik7XG4gICAgICAgICAgICAgICAgYWxsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0gPSBuZXdBcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWdlbmRlclwiKTtcbiAgICAgICAgXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdCh0aGlzLnVwZGF0ZUFjdGl2aXR5LCBmaWx0ZXIpO1xuXG4gICAgICAgIENyZWF0ZS55ZWFyU2VsZWN0b3IodGhpcy51cGRhdGVZZWFycywgZmlsdGVyLCBcImdcIiwgW1wiQWxsIHllYXJzXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAvLyBDcmVhdGluZyB0aGUgbW9kYWxcbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRpbWUgVXNhZ2VcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBUaW1lIFVzYWdlLCBhIGRhdGEgdmlzdWFsaXphdGlvbiBvZiBob3cgQW1lcmljYW5zIHVzZSB0aGVpciB0aW1lIG9uIGEgZ2l2ZW4gZGF5LiBUaGUgZGF0YSBpcyBnYXRoZXJlZCBieSB0aGUgQnVyZWF1IG9mIExhYm9yIFN0YXRpc3RpY3Mgb25jZSBhIHllYXIuXCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgLy8gUXVlc3Rpb25cbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IFwiV291bGQgeW91IGxpa2UgYSBicmllZiB3YWxrdGhyb3VnaD9cIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgcXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLXF1ZXN0aW9uXCIpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgY29uc3QgbmV4dFN0ZXAgPSAob3B0aW9uLCBjbGFzc05hbWUsIG5leHQsIG5leHRDbGFzcywgbmV4dENvbXBvbmVudCwgcHJldkNvbXBvbmVudCkgPT4gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke29wdGlvbn1gKTtcbiAgICAgICAgY2xvc2VNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25leHR9YCk7XG4gICAgICAgICAgICBuZXh0SXRlbS5jbGFzc0xpc3QuYWRkKG5leHRDbGFzcylcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dENvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dENvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke25leHRDb21wb25lbnR9YCk7XG4gICAgICAgICAgICBuZXh0Q29tcC5mb3JFYWNoKCBlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtwcmV2Q29tcG9uZW50fWApO1xuICAgICAgICAgICAgcHJldkNvbXAuZm9yRWFjaCggZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvbmVudC1kaXNwbGF5XCIpKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEkndmUgYWxyZWFkeSB1c2VkIHRoaXMgYmVmb3JlIGJ1dHRvbi4gVGFrZXMgdGhlbSBkaXJlY3RseSBpbnRvIHRoZSBhcHAuXG4gICAgY29uc3QgYWxyZWFkeWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhbHJlYWR5YnRuKTtcbiAgICBhbHJlYWR5YnRuLmlubmVyVGV4dCA9IFwiSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUuXCI7XG4gICAgYWxyZWFkeWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaCBidXR0b24uIEl0IHNob3VsZCB0YWtlIHRoZW0gdGhyb3VnaCB0aGUgd2Fsa3Rocm91Z2guIFxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdG4pOyBcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXMsIHBsZWFzZS5cIjtcbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBuZXh0U3RlcChcIm1vZGFsXCIsIFwibW9kYWwtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmNhdGVnb3J5LWZpbHRlclwiKShlKTtcbiAgICAgICAgY3JlYXRlRXhpdEJ1dHRvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gRXhpdCBidXR0b25cbiAgICBjb25zdCBjcmVhdGVFeGl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmx1ci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICAgICAgZXhpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcFwiLCBcImV4aXRcIik7XG4gICAgICAgIGV4aXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeGl0IHdhbGt0aHJvdWdoXCI7XG4gICAgICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJleGl0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBudWxsLCBcIipcIikpXG4gICAgfVxuXG5cbiAgICAvLyBXYWxrdGhyb3VnaFxuICAgIC8vIEZJUlNUXG4gICAgY29uc3QgZmlyc3RTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChmaXJzdFN0ZXApO1xuICAgIGZpcnN0U3RlcC5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcFwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIik7XG4gICAgZmlyc3RTdGVwLmlubmVyVGV4dCA9IFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3RTdGVwLmFwcGVuZENoaWxkKGZpcnN0QnV0dG9uKTtcbiAgICBmaXJzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcC1idXR0b25cIik7XG4gICAgZmlyc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJHb3QgaXRcIjtcbiAgICBmaXJzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5zZWxlY3RvcnNcIiwgXCIuY2F0ZWdvcnktZmlsdGVyXCIpKVxuXG4gICAgY29uc3QgZmlyc3RUcmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3RUcmlhbmdsZS5jbGFzc0xpc3QuYWRkKFwibGVmdC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLWZpcnN0LXRyaWFuZ2xlXCIpO1xuICAgIGZpcnN0U3RlcC5hcHBlbmRDaGlsZChmaXJzdFRyaWFuZ2xlKTtcblxuICAgIC8vIFNFQ09ORFxuICAgIGNvbnN0IHNlY29uZFN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHNlY29uZFN0ZXApO1xuICAgIHNlY29uZFN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLXNlY29uZFwiKTtcbiAgICBzZWNvbmRTdGVwLmlubmVyVGV4dCA9ICdTZWxlY3QgeW91ciBwYXJhbWV0ZXJzLiBBcHAgQWNhZGVteSBTdHVkZW50IGFuZCBGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnQgaGF2ZSBubyBwYXJhbWV0ZXJzLiBUaGVuIGNsaWNrIFwiU3VibWl0IFNlbGVjdGlvbi5cIidcblxuICAgIGNvbnN0IHNlY29uZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kU3RlcC5hcHBlbmRDaGlsZChzZWNvbmRCdXR0b24pO1xuICAgIHNlY29uZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcC1idXR0b25cIik7XG4gICAgc2Vjb25kQnV0dG9uLmlubmVyVGV4dCA9IFwiR3JlYXRcIjtcbiAgICBzZWNvbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRTdGVwKFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC10aGlyZFwiLCBcIndhbGt0aHJvdWdoLWRpc3BsYXlcIiwgXCIjY1wiLFwiLnNlbGVjdG9yc1wiKSlcblxuICAgIGNvbnN0IHNlY29uZFRyaWFuZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmRUcmlhbmdsZS5jbGFzc0xpc3QuYWRkKFwibGVmdC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXNlY29uZC10cmlhbmdsZVwiKTtcbiAgICBzZWNvbmRTdGVwLmFwcGVuZENoaWxkKHNlY29uZFRyaWFuZ2xlKTtcblxuICAgIC8vIFRISVJEXG4gICAgY29uc3QgdGhpcmRTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZCh0aGlyZFN0ZXApO1xuICAgIHRoaXJkU3RlcC5jbGFzc0xpc3QuYWRkKFwid2Fsa3Rocm91Z2gtc3RlcFwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIik7XG4gICAgdGhpcmRTdGVwLmlubmVyVGV4dCA9ICdBcyB5b3UgaG92ZXIgb3ZlciB0aGUgc2xpY2VzIG9mIHRoZSBncmFwaCwgdGhlIGNvcnJlc3BvbmRpbmcgZGF0YSB3aWxsIGxpZ2h0IHVwLCBhbmQgdmljZSB2ZXJzYS4gTm90ZSB0aGF0IHRoZXNlIHNsaWNlcyBhcmUgdGVjaG5pY2FsbHkgcHJvcG9ydGlvbnMsIGFuZCBub3Qgc3RyaWN0bHkgb3V0IG9mIDI0IGhvdXJzLiBJdCBkZXBlbmRzIG9uIHRoZSBwYXJhbWV0ZXJzLidcblxuICAgIGNvbnN0IHRoaXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlyZFN0ZXAuYXBwZW5kQ2hpbGQodGhpcmRCdXR0b24pO1xuICAgIHRoaXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICB0aGlyZEJ1dHRvbi5pbm5lclRleHQgPSBcIkF3ZXNvbWVcIjtcbiAgICB0aGlyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJ3YWxrdGhyb3VnaC1zdGVwLXRoaXJkXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtZm91cnRoXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5kYXJrLWJ0blwiLCBcIiNjXCIpKVxuXG4gICAgY29uc3QgdGhpcmRUcmlhbmdsZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXJkVHJpYW5nbGVBLmNsYXNzTGlzdC5hZGQoXCJyaWdodC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWFcIik7XG4gICAgdGhpcmRTdGVwLmFwcGVuZENoaWxkKHRoaXJkVHJpYW5nbGVBKTtcblxuICAgIGNvbnN0IHRoaXJkVHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlyZFRyaWFuZ2xlQi5jbGFzc0xpc3QuYWRkKFwidXAtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1iXCIpO1xuICAgIHRoaXJkU3RlcC5hcHBlbmRDaGlsZCh0aGlyZFRyaWFuZ2xlQik7XG5cbiAgICAvLyBGT1VSVEhcbiAgICBjb25zdCBmb3VydGhTdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChmb3VydGhTdGVwKTtcbiAgICBmb3VydGhTdGVwLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1mb3VydGhcIik7XG4gICAgZm91cnRoU3RlcC5pbm5lclRleHQgPSBcIlRoZXJlJ3MgYSBkYXJrIG1vZGUgaWYgbmVlZGVkLlwiXG5cbiAgICBjb25zdCBmb3VydGhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvdXJ0aFN0ZXAuYXBwZW5kQ2hpbGQoZm91cnRoQnV0dG9uKTtcbiAgICBmb3VydGhCdXR0b24uY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXAtYnV0dG9uXCIpO1xuICAgIGZvdXJ0aEJ1dHRvbi5pbm5lclRleHQgPSBcIkknbSByZWFkeVwiO1xuICAgIGZvdXJ0aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiLCBudWxsLCBudWxsLCBudWxsLCBcIi5kYXJrLWJ0blwiKSlcblxuICAgIGNvbnN0IGZvdXJ0aFRyaWFuZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3VydGhUcmlhbmdsZS5jbGFzc0xpc3QuYWRkKFwiZG93bi10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLWZvdXJ0aC10cmlhbmdsZVwiKTtcbiAgICBmb3VydGhTdGVwLmFwcGVuZENoaWxkKGZvdXJ0aFRyaWFuZ2xlKTtcblxufSIsImNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtcmVzaWRlbnRcIik7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzaWRlbnQtYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxMyxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuNSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMyxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQSBmaXJzdC15ZWFyIG1lZGljYWwgcmVzaWRlbnQgYXQgVUNTRi4gTm90IGZyb20gQVRVUy5cIjtcblxuICAgICAgICBjb25zdCBjaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoY2l0YXRpb24pO1xuICAgICAgICBjaXRhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2l0YXRpb25cIik7XG4gICAgICAgIGNpdGF0aW9uLmlubmVyVGV4dCA9IFwiRGF0YSBhcHByb3hpbWF0ZWQgZnJvbSBcIjtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5rZXZpbm1kLmNvbS9ibG9nLzIwMTYvMDIvcXVhbnRpdGF0aXZlLWFuYWx5c2lzLWZpcnN0LXllYXItaW50ZXJuYWwtbWVkaWNpbmUtcmVzaWRlbmN5Lmh0bWxcIik7XG4gICAgICAgIGEuaW5uZXJUZXh0ID0gXCJodHRwczovL3d3dy5rZXZpbm1kLmNvbS9ibG9nLzIwMTYvMDIvcXVhbnRpdGF0aXZlLWFuYWx5c2lzLWZpcnN0LXllYXItaW50ZXJuYWwtbWVkaWNpbmUtcmVzaWRlbmN5Lmh0bWxcIjtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIGNpdGF0aW9uLmFwcGVuZENoaWxkKGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaWRlbnRTZWxlY3RvcjsiLCJjbGFzcyBVdGlscyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlTdW0gPSB0aGlzLmFycmF5U3VtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXlBdmVyYWdlID0gdGhpcy5hcnJheUF2ZXJhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheU1lcmdlID0gdGhpcy5hcnJheU1lcmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWREYXRhRmlsdGVyID0gdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVyeW9uZURhdGFGaWx0ZXIgPSB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgYXJyYXlTdW0gKGFycikge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBhcnJheUF2ZXJhZ2UgKGFycikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVN1bShhcnIpIC8gYXJyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhcnJheU1lcmdlICguLi5hcnJheXMpIHtcbiAgICAgICAgbGV0IGZpbmFsID0gW107XG4gICAgICAgIGlmIChhcnJheXMuZXZlcnkoIGFyciA9PiB7IHJldHVybiBhcnIubGVuZ3RoID09PSBhcnJheXNbMF0ubGVuZ3RoOyB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5cyBhcmUgbm90IHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJBcnIgPSBbXTtcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKCBhcnIgPT4ge1xuICAgICAgICAgICAgICAgIHN1YkFyci5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmluYWwucHVzaChzdWJBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9XG5cbiAgICBlbXBsb3llZERhdGFGaWx0ZXIgKGFjdGl2aXRpZXMsIGdlbmRlciwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKCBhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZ2VuZGVyRmlsdGVyID0gYWN0aXZpdHlGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtkYXR1bS5hY3Rpdml0eV06IGRhdHVtW2dlbmRlcl0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBnZW5kZXJGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCggeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHtbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKX07XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBmaW5hbERhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChPYmplY3QudmFsdWVzKGEpWzBdID4gT2JqZWN0LnZhbHVlcyhiKVswXSkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2ggKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2ZXJ5b25lRGF0YUZpbHRlcihhY3Rpdml0aWVzLCB0eXBlLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xuICAgICAgICAgICAgYWN0aXZpdHlGaWx0ZXIucHVzaChkYXRhW2FjdGl2aXR5XSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR5cGVGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bdHlwZV0gfTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB0eXBlRmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsWWVhcnMgPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXTtcbiAgICAgICAgICAgICAgICB5ZWFybHlGaWx0ZXIucHVzaChhbGxZZWFyc1t5ZWFyXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHsgW09iamVjdC5rZXlzKGRhdHVtKVswXV06IHRoaXMuYXJyYXlBdmVyYWdlKHllYXJseUZpbHRlcikgfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHNvcnRlZC5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhkYXR1bSlbMF1dID0gT2JqZWN0LnZhbHVlcyhkYXR1bSlbMF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdlbmRlckNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1lbkZpbHRlciA9IHsgXCJNZW5cIjogYWN0aXZpdHlGaWx0ZXJbXCJNZW5cIl0gfVxuICAgICAgICBjb25zdCB3b21lbkZpbHRlciA9IHsgXCJXb21lblwiOiBhY3Rpdml0eUZpbHRlcltcIldvbWVuXCJdfVxuXG5cbiAgICAgICAgY29uc3QgbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbE1lblllYXJzID0gT2JqZWN0LnZhbHVlcyhtZW5GaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsTWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW5EYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UobWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBjb25zdCB3b21lblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxXb21lblllYXJzID0gT2JqZWN0LnZhbHVlcyh3b21lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICB3b21lblllYXJseUZpbHRlci5wdXNoKGFsbFdvbWVuWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3b21lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZSh3b21lblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKHdvbWVuRGF0YSA+IG1lbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJNZW5cIjogbWVuRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhLFxuICAgICAgICAgICAgICAgIFwiV29tZW5cIjogd29tZW5EYXRhLFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRheUNvbXBGaWx0ZXIoYWN0aXZpdHksIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gZGF0YVthY3Rpdml0eV1cblxuICAgICAgICBjb25zdCBub25GaWx0ZXIgPSB7IFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIk5vbmhvbGlkYXkgd2Vla2RheXNcIl0gfVxuICAgICAgICBjb25zdCBob2xpRmlsdGVyID0geyBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogYWN0aXZpdHlGaWx0ZXJbXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCJdIH1cblxuICAgICAgICBjb25zdCBub25ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTm9uWWVhcnMgPSBPYmplY3QudmFsdWVzKG5vbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBub25ZZWFybHlGaWx0ZXIucHVzaChhbGxOb25ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShub25ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvbGlZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsSG9saVllYXJzID0gT2JqZWN0LnZhbHVlcyhob2xpRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIGhvbGlZZWFybHlGaWx0ZXIucHVzaChhbGxIb2xpWWVhcnNbeWVhcl0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBob2xpRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKGhvbGlZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGlmIChob2xpRGF0YSA+IG5vbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhLFxuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiBub25EYXRhLFxuICAgICAgICAgICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBob2xpRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG5cbi8vIGRhdGFGaWx0ZXIoW1wiT3RoZXIgYWN0aXZpdGllcywgbm90IGVsc2V3aGVyZSBjbGFzc2lmaWVkIChpbmNsdWRlcyBtaXNjLiB0cmF2ZWwgYW5kIGRhdGEgY29kZXMpXCIsIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZS1tYWlsIChpbmNsdWRlcyB0cmF2ZWwpXCJdLFxuLy8gLi4uICAgICAgICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCIsXG4vLyAuLi5bXCIyMDEzXCIsIFwiMjAxNFwiXSxcbi8vIC4uLmVtcGxveWVkQnlHZW5kZXIpXG4iLCJpbXBvcnQge0NPTE9SU30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJnaW4gPSAxNTtcblxuICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xuICAgIGNvbnN0IHV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjd2F0Y2hcIilcbiAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGFpbmVyXCIsIHRydWUpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyB3aWR0aCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aDsgcmV0dXJuIHdpZHRoIH0pXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IGhlaWdodCA9IHRoaXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7IHJldHVybiBoZWlnaHQgfSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luO1xuXG4gICAgY29uc3QgcGllID0gZDMucGllKClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlOyB9KVxuXG4gICAgY29uc3QgcHJvY2Vzc2VkX2RhdGEgPSBkMy5lbnRyaWVzKGRhdGEpO1xuXG4gICAgY29uc3QgdG90YWwgPSB1dGlscy5hcnJheVN1bShwcm9jZXNzZWRfZGF0YS5tYXAoZCA9PiB7cmV0dXJuIGQudmFsdWV9KSlcblxuICAgIHByb2Nlc3NlZF9kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgIGQucGVyY2VudGFnZSA9IGQudmFsdWUgLyB0b3RhbDtcbiAgICB9KVxuXG4gICAgY29uc3QgZmluYWxfZGF0YSA9IHBpZShwcm9jZXNzZWRfZGF0YSk7XG5cbiAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC44KVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgY29uc3QgYWxwaGEgPSBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIl1cblxuICAgIHBhdGhzXG4gICAgICAgIC5lYWNoKCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYXJjcycsIHRydWUpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoYWxwaGFbaV0sIHRydWUpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthbHBoYVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImZvY3VzZWRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihmdW5jdGlvbihkKSB7cmV0dXJuIGQuZGF0YS5wZXJjZW50YWdlICogMzAwMH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5hcnJheVN1bShwYXRocy5ub2RlcygpLnNsaWNlKDAsIGkpLm1hcChlbCA9PiBkMy5zZWxlY3QoZWwpLmRhdGEoKVswXS5kYXRhLnBlcmNlbnRhZ2UpKSAqIDMwMDAgKyAyMDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmRBbmdsZSA9IGkodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG59XG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjY1MTIzL3Jlc2l6ZS1zdmctd2hlbi13aW5kb3ctaXMtcmVzaXplZC1pbi1kMy1qc1xuICAgIC8vIGZvciByZXNwb25zaXZlIFNWRyBkZXNpZ25cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc2Mjk4Mi9ob3ctdG8tZGlzcGxheS1wZXJjZW50YWdlLXRvLXRoZS1kMy1qcy1waWVjaGFydFxuICAgIC8vIGZvciBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvZmFyYXpzaHVqYS9lMmNiNTI4MjhjMDgwYmE4NWRhNTQ1OGUyMzA0YTYxZlxuICAgIC8vIGZvciBsYWJlbGluZyBzbGljZXMgd2l0aCBwZXJjZW50YWdlc1xuICAgIC8vIGh0dHA6Ly9ibC5vY2tzLm9yZy9uYWRpbmVzay85OTM5MzA5ODk1MDY2NWM0NzFlMDM1YWM1MTdjMjIyNFxuICAgIC8vIGZvciB0cmFuc2l0aW9uc1xuICAgIC8vIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyNTk5N1xuICAgIC8vIGZvciBjaGFpbmVkIHRyYW5zaXRpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9