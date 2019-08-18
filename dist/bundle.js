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
        key: "addComp",
        value: function addComp() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-day");

            Create.activitySelect(this.updateActivity, filter);
            Create.yearSelector(filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);
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

            Create.activitySelector(filter, "e");
            Create.yearSelector(filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);

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

            Create.activitySelector(filter, "ev");
            Create.yearSelector(filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

            var typeSelector = document.createElement("select");
            filter.appendChild(typeSelector);
            typeSelector.classList.add("selectors", "selectors-select");
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
        key: "addComp",
        value: function addComp() {
            var attach = document.querySelector("#selector");

            var filter = document.createElement("section");
            attach.appendChild(filter);
            filter.classList.add("filter", "js-gender");

            Create.activitySelect(this.updateActivity, filter);
            Create.yearSelector(filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);
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
exports.description = exports.steps = exports.darkModeBtn = exports.drawHands = exports.activitySelect = exports.submitButton = exports.yearSelector = exports.activitySelector = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/js/helpers/constants.js");

var _update = __webpack_require__(/*! ./update */ "./src/js/helpers/update.js");

var Update = _interopRequireWildcard(_update);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var activitySelector = exports.activitySelector = function activitySelector(filter, prefix) {
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
    activitySelector.addEventListener("change", Update.activity(prefix));
};

var yearSelector = exports.yearSelector = function yearSelector(filter, prefix, years) {
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
    yearSelector.addEventListener("change", Update.years(prefix));
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
var activity = exports.activity = function activity(prefix) {
    return function (e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#" + prefix + "_activityOption").forEach(function (option) {
                    option.checked = false;option.parentNode.classList.remove("selected");
                });
                undefined.selection["activities"] = ["All Activities"];
            } else {
                var all = document.querySelector("#" + prefix + "_activityOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                var newArr = undefined.selection["activities"].filter(function (activity) {
                    return activity !== "All Activities";
                });
                newArr.push(e.target.value);
                undefined.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            undefined.selection.activities = undefined.selection.activities.filter(function (select) {
                return select !== e.target.value;
            });
        }
    };
};

var years = exports.years = function years(prefix) {
    return function (e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All years") {
                document.querySelectorAll("#" + prefix + "_yearOption").forEach(function (option) {
                    option.checked = false;option.parentNode.classList.remove("selected");
                });
                undefined.selection["years"] = ["All years"];
            } else {
                var all = document.querySelector("#" + prefix + "_yearOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                var newArr = undefined.selection["years"].filter(function (year) {
                    return year !== "All years";
                });
                newArr.push(e.target.value);
                undefined.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            undefined.selection["years"] = undefined.selection["years"].filter(function (select) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2VtcGxveWVkQnlHZW5kZXJEYXRhU2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9ldmVyeW9uZUJ5RGF5U2hhcGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYXBwX2FjYWRlbXlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2F0ZWdvcnlfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGF0YV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RheV9jb21wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2VtcGxveWVkX3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ldmVyeW9uZV9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2VuZGVyX2NvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzaWRlbnRfc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXRpbHMuanMiXSwibmFtZXMiOlsiZW1wbG95ZWRCeUdlbmRlciIsImV2ZXJ5b25lQnlEYXkiLCJhcHAiLCJBcHAiLCJyZW5kZXIiLCJkcmF3IiwiYmluZCIsImRhdGEiLCJwYXJhbXMiLCJzdmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidXRpbHMiLCJVdGlscyIsImNhdGVnb3J5U2VsZWN0b3IiLCJlbXBsb3llZFNlbGVjdG9ycyIsIkVtcGxveWVkU2VsZWN0b3JzIiwiYWRkU2VsZWN0b3JzIiwiZ2VuZGVyQ29tcCIsIkdlbmRlckNvbXAiLCJhZGRDb21wIiwiZXZlcnlvbmVTZWxlY3RvcnMiLCJFdmVyeW9uZVNlbGVjdG9ycyIsImRheUNvbXAiLCJEYXlDb21wIiwiYXBwQWNhZGVteVNlbGVjdG9yIiwiQXBwQWNhZGVteVNlbGVjdG9yIiwiYWRkU2VsZWN0b3IiLCJyZXNpZGVudFNlbGVjdG9yIiwiUmVzaWRlbnRTZWxlY3RvciIsImVtcGxveWVkIiwiZW1wbG95ZWREYXRhIiwiZW1wbG95ZWREYXRhRmlsdGVyIiwicmVzdWx0IiwiYWN0aXZpdGllcyIsImdlbmRlciIsInllYXJzIiwiZW1wbG95ZWRQYXJhbXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImdlbmRlckRhdGEiLCJnZW5kZXJDb21wRmlsdGVyIiwiYWN0aXZpdHkiLCJldmVyeW9uZSIsImV2ZXJ5b25lRGF0YSIsImV2ZXJ5b25lRGF0YUZpbHRlciIsInR5cGUiLCJkYXkiLCJkYXlEYXRhIiwiZGF5Q29tcEZpbHRlciIsImFwcGFjYWRlbXkiLCJwZXJzb24iLCJ5ZWFyIiwicmVzaWRlbnQiLCJDcmVhdGUiLCJhdHRhY2giLCJmaWx0ZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3Rpb25CdXR0b24iLCJpbm5lclRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJjYXRlZ29yeU9wdGlvbiIsInZhbHVlIiwib3B0aW9uIiwic2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yIiwicmVtb3ZlIiwidGFyZ2V0IiwibGlzdCIsInBhcmFtRGlzcGxheSIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwicCIsImNhdGVnb3J5IiwiZWwiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtIiwiam9pbiIsImRhdHVtIiwiaSIsImxpIiwic2V0QXR0cmlidXRlIiwiYWxwaGEiLCJzcGFuIiwidG9GaXhlZCIsImFyYyIsInVwZGF0ZUFjdGl2aXR5IiwiaGFuZGxlU3VibWl0Iiwic2VsZWN0aW9uIiwic2VsZWN0aW9ucyIsImFjdGl2aXR5U2VsZWN0IiwieWVhclNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwidXBkYXRlR2VuZGVyIiwiQUNUSVZJVElFUyIsImFjdGl2aXR5U2VsZWN0b3IiLCJnZW5kZXJTZWxlY3RvciIsImNyZWF0ZVRleHROb2RlIiwiZ2VuZGVycyIsImdlbmRlck9wdGlvbiIsInNlbGVjdCIsInVwZGF0ZVR5cGUiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlcyIsInR5cGVPcHRpb24iLCJibHVyIiwiYm9keSIsIm1vZGFsIiwidGl0bGUiLCJxdWVzdGlvbiIsImJ1dHRvbnMiLCJhbHJlYWR5YnRuIiwibmV4dFN0ZXAiLCJ5ZXNCdG4iLCJjaXRhdGlvbiIsImEiLCJleGl0QnV0dG9uIiwiZmlyc3RCdXR0b24iLCJzdGVwcyIsInNlY29uZEJ1dHRvbiIsInRoaXJkQnV0dG9uIiwiZm91cnRoQnV0dG9uIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkMyIsImNsYXNzZWQiLCJhcHBlbmQiLCJhdHRyIiwiZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZSIsInByb2Nlc3NlZF9kYXRhIiwiZW50cmllcyIsInRvdGFsIiwiYXJyYXlTdW0iLCJtYXAiLCJwZXJjZW50YWdlIiwiZmluYWxfZGF0YSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwYXRocyIsInNlbGVjdEFsbCIsImVudGVyIiwiZWFjaCIsIm9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJub2RlcyIsInNsaWNlIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0IiwiVXBkYXRlIiwicHJlZml4IiwiYWN0aXZpdHlMYWJlbCIsImFjdGl2aXR5U2VsZWN0aW9ucyIsImNvbmNhdCIsImRpdiIsImFjdGl2aXR5T3B0aW9uIiwiY2hlY2tlZCIsInllYXJzTGFiZWwiLCJ5ZWFyU2VsZWN0aW9ucyIsInllYXJPcHRpb24iLCJkcmF3SGFuZHMiLCJvbGQiLCJoYW5kcyIsIm1pbnV0ZXMiLCJob3VycyIsImRhcmtNb2RlQnRuIiwidGV4dCIsInBhZ2UiLCJjb250YWlucyIsImJ0biIsImZvb3RlciIsImh0bWwiLCJ0b2dnbGUiLCJvcmRlciIsInN0ZXBUZXh0IiwiYnV0dG9uVGV4dCIsInRyaWFuZ2xlRGlyZWN0aW9uIiwic3RlcCIsImJ1dHRvbiIsInRyaWFuZ2xlQSIsInRyaWFuZ2xlQiIsInRyaWFuZ2xlIiwid29yZHMiLCJhbGwiLCJuZXdBcnIiLCJwdXNoIiwiYXJyYXlBdmVyYWdlIiwiYXJyYXlNZXJnZSIsImFyciIsInN1bSIsImxlbmd0aCIsImFycmF5cyIsImZpbmFsIiwiZXZlcnkiLCJjb25zb2xlIiwibG9nIiwic3ViQXJyIiwiYWN0aXZpdHlGaWx0ZXIiLCJnZW5kZXJGaWx0ZXIiLCJmaW5hbERhdGEiLCJ5ZWFybHlGaWx0ZXIiLCJhbGxZZWFycyIsInZhbHVlcyIsInNvcnRlZCIsImIiLCJ0eXBlRmlsdGVyIiwibWVuRmlsdGVyIiwid29tZW5GaWx0ZXIiLCJtZW5ZZWFybHlGaWx0ZXIiLCJhbGxNZW5ZZWFycyIsIm1lbkRhdGEiLCJ3b21lblllYXJseUZpbHRlciIsImFsbFdvbWVuWWVhcnMiLCJ3b21lbkRhdGEiLCJub25GaWx0ZXIiLCJob2xpRmlsdGVyIiwibm9uWWVhcmx5RmlsdGVyIiwiYWxsTm9uWWVhcnMiLCJub25EYXRhIiwiaG9saVllYXJseUZpbHRlciIsImFsbEhvbGlZZWFycyIsImhvbGlEYXRhIiwiY2xhc3NOYW1lIiwibmV4dCIsIm5leHRDbGFzcyIsIm5leHRDb21wb25lbnQiLCJwcmV2Q29tcG9uZW50IiwiY2xvc2VNb2RhbCIsIm5leHRJdGVtIiwibmV4dENvbXAiLCJwcmV2Q29tcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLDhDQUFtQjtBQUM1QixnQ0FBNEI7QUFDeEIsb0JBQVksMEJBRFk7QUFFeEIsb0JBQVksR0FGWTtBQUd4QixlQUFPO0FBQ0gsb0JBQVEsSUFETDtBQUVILG9CQUFRLElBRkw7QUFHSCxvQkFBUSxJQUhMO0FB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LGEsRUFBZUMsYSxFQUFlO0FBQ3ZFLG1CQUFPLGFBQUs7QUFDUi9NLGtCQUFFeUIsY0FBRjtBQUNBLG9CQUFNdUwsYUFBYWhQLFNBQVNDLGFBQVQsT0FBMkI4RCxNQUEzQixDQUFuQjtBQUNBaUwsMkJBQVczTCxTQUFYLENBQXFCYyxNQUFyQixDQUE0QndLLFNBQTVCO0FBQ0Esb0JBQUlDLElBQUosRUFBVTtBQUNOLHdCQUFNSyxXQUFXalAsU0FBU0MsYUFBVCxPQUEyQjJPLElBQTNCLENBQWpCO0FBQ0FLLDZCQUFTNUwsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJ1TCxTQUF2QjtBQUNIO0FBQ0Qsb0JBQUlDLGFBQUosRUFBbUI7QUFDZix3QkFBTUksV0FBV2xQLFNBQVNpRSxnQkFBVCxNQUE2QjZLLGFBQTdCLENBQWpCO0FBQ0FJLDZCQUFTdEwsT0FBVCxDQUFpQjtBQUFBLCtCQUFNZ0IsR0FBR3ZCLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixtQkFBakIsQ0FBTjtBQUFBLHFCQUFqQjtBQUNIO0FBQ0Qsb0JBQUl5TCxhQUFKLEVBQW1CO0FBQ2Ysd0JBQU1JLFdBQVduUCxTQUFTaUUsZ0JBQVQsTUFBNkI4SyxhQUE3QixDQUFqQjtBQUNBSSw2QkFBU3ZMLE9BQVQsQ0FBaUI7QUFBQSwrQkFBTWdCLEdBQUd2QixTQUFILENBQWFjLE1BQWIsQ0FBb0IsbUJBQXBCLENBQU47QUFBQSxxQkFBakI7QUFDSDtBQUNKLGFBaEJEO0FBaUJIOzs7Ozs7a0JBSVU3RCxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcGxveWVkQnlHZW5kZXIgPSB7XG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiUGVyc29uYWwgY2FyZSBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiA4Ljg4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDguOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOC45OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA4Ljg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDguOTYsXG4gICAgICAgICAgICBcIjIwMThcIjogOC45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogOS4xLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuMTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDkuMzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA5LjQzLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDkuNDEsXG4gICAgICAgICAgICBcIjIwMTdcIjogOS40OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5LjMxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjE0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjEyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMDQsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4wNixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMDZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJIb3VzZWhvbGQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjIzLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS41MyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjU0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS41NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDEuOTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS44NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjg5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuMDJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC42MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41NlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjY1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuNjgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC42NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSwgXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuODMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjgyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNzQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjc4XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjk1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC44OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjAzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuOTMsXG4gICAgICAgICAgICBcIjIwMThcIjogMC44OFxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjEsXG4gICAgICAgICAgICBcIjIwMThcIjogMS4yMlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNDgsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjUyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMS41OFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xMVxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMTFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiA2LjU1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNTcsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjM1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDUuNjQsXG4gICAgICAgICAgICBcIjIwMTRcIjogNS43OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1Ljg1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUuNzcsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS43MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1Ljc0XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDQuNzYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNC45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiA1LjA2LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS4wMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0Ljk3XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFZHVjYXRpb25hbCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjA4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjExXG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNlxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJPcmdhbml6YXRpb25hbCwgY2l2aWMsIGFuZCByZWxpZ2lvdXMgYWN0aXZpdGllc1wiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMjcsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yNyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjI5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiTGVpc3VyZSBhbmQgc3BvcnRzXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJZXCIsXG4gICAgICAgIFwiTWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAzLjk3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDMuOTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMy44NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAzLjg1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuMDIsXG4gICAgICAgICAgICBcIjIwMThcIjogMy45MlxuICAgICAgICB9LFxuICAgICAgICBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy43MyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjY4LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuNjIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy42MixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjcyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuNjVcbiAgICAgICAgfSxcbiAgICAgICAgXCJXb21lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMy40NixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAzLjQzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDMuMzgsXG4gICAgICAgICAgICBcIjIwMTZcIjogMy4zOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAzLjM5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDMuMzZcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJUZWxlcGhvbmUgY2FsbHMsIG1haWwsIGFuZCBlbWFpbFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiWVwiLFxuICAgICAgICBcIk1lblwiOiB7XG4gICAgICAgICAgICBcIjIwMTNcIjogMC4wNixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjA0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMDcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4wOCxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjA1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMDVcbiAgICAgICAgfSxcbiAgICAgICAgXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMDksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjA5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjA4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV29tZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjEyLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMDgsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4wOSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk90aGVyIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIllcIixcbiAgICAgICAgXCJNZW5cIjoge1xuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI2XG4gICAgICAgIH0sXG4gICAgICAgIFwiVG90YWwgKG1lbiBhbmQgd29tZW4pXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjI4LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yOFxuICAgICAgICB9LFxuICAgICAgICBcIldvbWVuXCI6IHtcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjMzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZXZlcnlvbmVCeURheSA9IHtcbiAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiA5LjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS4yLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDkuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjI0LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS4zLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS40MixcbiAgICAgICAgICAgIFwiMjAxNlwiOiA5LjMxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDkuMzMsXG4gICAgICAgICAgICBcIjIwMThcIjogOS4zMlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEwLjA3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEwLjA0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDExXCI6IDEwLjA4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEwLjEzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEwLjExLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEwLjIxLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMTAuMThcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogOS41ODUsXG4gICAgICAgICAgICBcIjIwMDlcIjogOS42MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiA5LjY1NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiA5LjY2LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDkuNjcsXG4gICAgICAgICAgICBcIjIwMTNcIjogOS43MDUsXG4gICAgICAgICAgICBcIjIwMTRcIjogOS43NDUsXG4gICAgICAgICAgICBcIjIwMTVcIjogOS43OTUsXG4gICAgICAgICAgICBcIjIwMTZcIjogOS43NixcbiAgICAgICAgICAgIFwiMjAxN1wiOiA5Ljc2NSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA5Ljc1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJFYXRpbmcgYW5kIGRyaW5raW5nXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4xOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjE4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjE5LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMTksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4xNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjEzLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMTIsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4xMixcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjExLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjM1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4zNixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjM3LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMzksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4zNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS4yOSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAxLjM0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMzVcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4yNjUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMS4yNTUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS4yOCxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDEuMjksXG4gICAgICAgICAgICBcIjIwMTNcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAxLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjA1LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuMjI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDEuMjM1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAxLjU3LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuNyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAxLjY4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTJcIjogMS41OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjY1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuNjMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS43MSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAxLjY5LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDEuNjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS42M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDIuMDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi4wNCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjA2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDIuMTIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMi4wOCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAyLjA5LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDIuMTEsXG4gICAgICAgICAgICBcIjIwMTVcIjogMi4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAyLjEzXG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDEuODI1LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMS44NyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAxLjg3NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjgzNSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAxLjg3LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDEuODcsXG4gICAgICAgICAgICBcIjIwMTVcIjogMS45MzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMS45MTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS45MjUsXG4gICAgICAgICAgICBcIjIwMThcIjogMS44OCBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiB7XG4gICAgICAgIFwiYWN0aXZpdHlcIjogXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNzEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC43MixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjcxLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNjksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC42OCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC42OSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjcsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43MSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjY5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNjdcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjkxLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuODcsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC44MixcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjgxLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuODEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC44NCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjg0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuODUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC44NyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc5LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuODRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC44MSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjc5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjc2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjc1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNzQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNzcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC43NjUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC43NzUsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC43OSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjc0LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuNzU1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgaG91c2Vob2xkIG1lbWJlcnNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNTcsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNTQsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjU2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41NCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjU0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC41M1xuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNDQsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40NixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuNDIsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40NCxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjQ2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTVcIjogMC40NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQ3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuNDYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC40N1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjUxNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjQ4NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQ4LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNDksXG4gICAgICAgICAgICBcIjIwMTNcIjogMC41MSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjUyNSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjQ5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjUwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIG5vbmhvdXNlaG9sZCBtZW1iZXJzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yLFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjJcbiAgICAgICAgfSxcbiAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4yMixcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIyNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjIxNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjAsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjIwLFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjEsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xOTUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIldvcmtpbmcgYW5kIHdvcmstcmVsYXRlZCBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNC43NCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA0LjUsXG4gICAgICAgICAgICBcIjIwMTBcIjogNC40LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNDksXG4gICAgICAgICAgICBcIjIwMTJcIjogNC40OSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0LjQxLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogNC40NyxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogNC41OCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA0LjYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAxLjI0LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDEuMzMsXG4gICAgICAgICAgICBcIjIwMTFcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAxLjI5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDEuMjcsXG4gICAgICAgICAgICBcIjIwMTRcIjogMS4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAxLjI4LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDEuMjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMS4yNyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAxLjE0XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDMuMDYsXG4gICAgICAgICAgICBcIjIwMDlcIjogMi44NyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAyLjg2NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAyLjkzNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAyLjg5LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDIuODQsXG4gICAgICAgICAgICBcIjIwMTRcIjogMi45NixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAyLjg3NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAyLjkzLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDIuOTI1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDIuODc1IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiRWR1Y2F0aW9uYWwgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuNjEsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuNjMsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuNTMsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC41OCxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjYsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjU4XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4xOCxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTksXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4yMyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xN1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjM3NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM5LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTJcIjogMC40MTUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zOSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM4NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjQxNSxcbiAgICAgICAgICAgIFwiMjAxN1wiOiAwLjQwNSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjM3NVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMjYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMjIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjU4LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC42MSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuNTYsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC41MixcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjU1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuNTIsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC41MyxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjQ5XG4gICAgICAgIH0sXG4gICAgICAgIFwiQWxsIGRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMDlcIjogMC40MDUsXG4gICAgICAgICAgICBcIjIwMTBcIjogMC40MSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjQzLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzksXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4zOCxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjM5NSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjM4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMzg1LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDAuMzYgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IHtcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDQuNjIsXG4gICAgICAgICAgICBcIjIwMDlcIjogNC43MSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA0LjY3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDQuNzMsXG4gICAgICAgICAgICBcIjIwMTJcIjogNC44NSxcbiAgICAgICAgICAgIFwiMjAxM1wiOiA0Ljc0LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDQuNzksXG4gICAgICAgICAgICBcIjIwMTVcIjogNC42OSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiA0LjU4LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDQuNzIsXG4gICAgICAgICAgICBcIjIwMThcIjogNC43MlxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDYuNDgsXG4gICAgICAgICAgICBcIjIwMDlcIjogNi41MyxcbiAgICAgICAgICAgIFwiMjAxMFwiOiA2LjQsXG4gICAgICAgICAgICBcIjIwMTFcIjogNi4zNCxcbiAgICAgICAgICAgIFwiMjAxMlwiOiA2LjU3LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDYuNDYsXG4gICAgICAgICAgICBcIjIwMTRcIjogNi41LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDYuNDMsXG4gICAgICAgICAgICBcIjIwMTZcIjogNi40MyxcbiAgICAgICAgICAgIFwiMjAxN1wiOiA2LjQ2LFxuICAgICAgICAgICAgXCIyMDE4XCI6IDYuNTZcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogNS41NSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiA1LjYyLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDExXCI6IDUuNTM1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDUuNzEsXG4gICAgICAgICAgICBcIjIwMTNcIjogNS42LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDUuNjQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDUuNTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogNS41MDUsXG4gICAgICAgICAgICBcIjIwMTdcIjogNS41OSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiA1LjY0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiVGVsZXBob25lIGNhbGxzLCBtYWlsLCBhbmQgZW1haWxcIixcbiAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDA5XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE4LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xNVxuICAgICAgICB9LFxuICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMTgsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4xOSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE2LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTUsXG4gICAgICAgICAgICBcIjIwMTJcIjogMC4xMyxcbiAgICAgICAgICAgIFwiMjAxM1wiOiAwLjEzLFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQsXG4gICAgICAgICAgICBcIjIwMTVcIjogMC4xNixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjE0LFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMTIsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4xM1xuICAgICAgICB9LFxuICAgICAgICBcIkFsbCBkYXlzXCI6IHtcbiAgICAgICAgICAgIFwiMjAwOFwiOiAwLjIwNSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjE5NSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjE3LFxuICAgICAgICAgICAgXCIyMDExXCI6IDAuMTU1LFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMTQ1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTYsXG4gICAgICAgICAgICBcIjIwMTZcIjogMC4xNTUsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4xNCxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjE0IFxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjoge1xuICAgICAgICBcImFjdGl2aXR5XCI6IFwiT3RoZXIgYWN0aXZpdGllc1wiLFxuICAgICAgICBcIk5vbmhvbGlkYXkgd2Vla2RheXNcIjoge1xuICAgICAgICAgICAgXCIyMDA4XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzUsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4zLFxuICAgICAgICAgICAgXCIyMDEyXCI6IDAuMjUsXG4gICAgICAgICAgICBcIjIwMTNcIjogMC4zMSxcbiAgICAgICAgICAgIFwiMjAxNFwiOiAwLjI0LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxNlwiOiAwLjIyLFxuICAgICAgICAgICAgXCIyMDE3XCI6IDAuMixcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAwOVwiOiAwLjI3LFxuICAgICAgICAgICAgXCIyMDEwXCI6IDAuMzQsXG4gICAgICAgICAgICBcIjIwMTFcIjogMC4yOSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIxLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzIsXG4gICAgICAgICAgICBcIjIwMTRcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxNVwiOiAwLjE5LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjQsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMSxcbiAgICAgICAgICAgIFwiMjAxOFwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJBbGwgZGF5c1wiOiB7XG4gICAgICAgICAgICBcIjIwMDhcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMDlcIjogMC4yNSxcbiAgICAgICAgICAgIFwiMjAxMFwiOiAwLjM0NSxcbiAgICAgICAgICAgIFwiMjAxMVwiOiAwLjI5NSxcbiAgICAgICAgICAgIFwiMjAxMlwiOiAwLjIzLFxuICAgICAgICAgICAgXCIyMDEzXCI6IDAuMzE1LFxuICAgICAgICAgICAgXCIyMDE0XCI6IDAuMjI1LFxuICAgICAgICAgICAgXCIyMDE1XCI6IDAuMTk1LFxuICAgICAgICAgICAgXCIyMDE2XCI6IDAuMjMsXG4gICAgICAgICAgICBcIjIwMTdcIjogMC4yMDUsXG4gICAgICAgICAgICBcIjIwMThcIjogMC4yNzVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQXBwIGZyb20gJy4vanMvY29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucmVuZGVyKCk7IiwiaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9uJ1xuaW1wb3J0IFdhdGNoIGZyb20gJy4vd2F0Y2gnXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3RvciBmcm9tICcuL2NhdGVnb3J5X3NlbGVjdG9yJ1xuaW1wb3J0IEVtcGxveWVkU2VsZWN0b3JzIGZyb20gJy4vZW1wbG95ZWRfc2VsZWN0b3JzJ1xuaW1wb3J0IEV2ZXJ5b25lU2VsZWN0b3JzIGZyb20gJy4vZXZlcnlvbmVfc2VsZWN0b3JzJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4vZGF0YV9kaXNwbGF5J1xuaW1wb3J0IEFwcEFjYWRlbXlTZWxlY3RvciBmcm9tICcuL2FwcF9hY2FkZW15X3NlbGVjdG9yJztcbmltcG9ydCBSZXNpZGVudFNlbGVjdG9yIGZyb20gJy4vcmVzaWRlbnRfc2VsZWN0b3InO1xuaW1wb3J0IEdlbmRlckNvbXAgZnJvbSAnLi9nZW5kZXJfY29tcCdcbmltcG9ydCBEYXlDb21wIGZyb20gJy4vZGF5X2NvbXAnXG5pbXBvcnQgeyBlbXBsb3llZEJ5R2VuZGVyIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZW1wbG95ZWRCeUdlbmRlckRhdGFTaGFwZWQnXG5pbXBvcnQgeyBldmVyeW9uZUJ5RGF5IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvZXZlcnlvbmVCeURheVNoYXBlZCdcbmltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtkcmF3SGFuZHMsIGRhcmtNb2RlQnRufSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSc7XG5cblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YS1kaXNwbGF5IHVsXCIpO1xuICAgICAgICBpZiAoc3ZnKSB7IHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7IH1cbiAgICAgICAgaWYgKGRpc3BsYXkpIHsgZGlzcGxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpc3BsYXkpOyB9XG4gICAgICAgIFdhdGNoKGRhdGEpO1xuICAgICAgICBEYXRhRGlzcGxheShkYXRhLCBwYXJhbXMpO1xuICAgICAgICBkcmF3SGFuZHMoKTtcbiAgICAgICAgZGFya01vZGVCdG4odGhpcy5kcmF3LCBkYXRhLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICAgICAgICAvLyBpbnN0cnVjdGlvbnMgbW9kYWxcbiAgICAgICAgaW5zdHJ1Y3Rpb25zKCk7XG5cbiAgICAgICAgLy8gbWFraW5nIGFsbCB0aGUgc2VsZWN0b3JzXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBDYXRlZ29yeVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgZW1wbG95ZWRTZWxlY3RvcnMgPSBuZXcgRW1wbG95ZWRTZWxlY3RvcnMoKTtcbiAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGdlbmRlckNvbXAgPSBuZXcgR2VuZGVyQ29tcCgpO1xuICAgICAgICBnZW5kZXJDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgZXZlcnlvbmVTZWxlY3RvcnMgPSBuZXcgRXZlcnlvbmVTZWxlY3RvcnMoKTtcbiAgICAgICAgZXZlcnlvbmVTZWxlY3RvcnMuYWRkU2VsZWN0b3JzKCk7XG4gICAgICAgIGNvbnN0IGRheUNvbXAgPSBuZXcgRGF5Q29tcCgpO1xuICAgICAgICBkYXlDb21wLmFkZENvbXAoKTtcbiAgICAgICAgY29uc3QgYXBwQWNhZGVteVNlbGVjdG9yID0gbmV3IEFwcEFjYWRlbXlTZWxlY3RvcigpO1xuICAgICAgICBhcHBBY2FkZW15U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcbiAgICAgICAgY29uc3QgcmVzaWRlbnRTZWxlY3RvciA9IG5ldyBSZXNpZGVudFNlbGVjdG9yKCk7XG4gICAgICAgIHJlc2lkZW50U2VsZWN0b3IuYWRkU2VsZWN0b3IoKTtcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEVtcGxveWVkIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZW1wbG95ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcGxveWVkLWJ0blwiKTtcbiAgICAgICAgY29uc3QgZW1wbG95ZWREYXRhID0gdXRpbHMuZW1wbG95ZWREYXRhRmlsdGVyKGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC5hY3Rpdml0aWVzLFxuICAgICAgICAgICAgZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0LmdlbmRlcixcbiAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgIGVtcGxveWVkQnlHZW5kZXIpXG4gICAgICAgIGNvbnN0IGVtcGxveWVkUGFyYW1zID0gZW1wbG95ZWRTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICBkZWxldGUgZW1wbG95ZWRQYXJhbXNbXCJhY3Rpdml0aWVzXCJdO1xuICAgICAgICB0aGlzLmRyYXcoZW1wbG95ZWREYXRhLCBlbXBsb3llZFBhcmFtcyk7XG5cbiAgICAgICAgZW1wbG95ZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkRGF0YSA9IHV0aWxzLmVtcGxveWVkRGF0YUZpbHRlcihlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGVtcGxveWVkU2VsZWN0b3JzLnJlc3VsdC55ZWFycyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZEJ5R2VuZGVyKVxuXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBlbXBsb3llZFNlbGVjdG9ycy5yZXN1bHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zW1wiYWN0aXZpdGllc1wiXTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhlbXBsb3llZERhdGEsIHBhcmFtcyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBnZW5kZXIgY29tcGFyaXNvblxuICAgICAgICBjb25zdCBnZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmRlci1idG5cIik7XG4gICAgICAgIGdlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZ2VuZGVyRGF0YSA9IHV0aWxzLmdlbmRlckNvbXBGaWx0ZXIoZ2VuZGVyQ29tcC5yZXN1bHQuYWN0aXZpdHksXG4gICAgICAgICAgICAgICAgZ2VuZGVyQ29tcC5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZW1wbG95ZWRCeUdlbmRlcilcblxuICAgICAgICAgICAgdGhpcy5kcmF3KGdlbmRlckRhdGEsIGdlbmRlckNvbXAucmVzdWx0KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIEV2ZXJ5b25lIGRhdGFzZXRcbiAgICAgICAgY29uc3QgZXZlcnlvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV2ZXJ5b25lLWJ0blwiKTtcbiAgICAgICAgZXZlcnlvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lRGF0YSA9IHV0aWxzLmV2ZXJ5b25lRGF0YUZpbHRlcihldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQuYWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQudHlwZSxcbiAgICAgICAgICAgICAgICBldmVyeW9uZVNlbGVjdG9ycy5yZXN1bHQueWVhcnMsXG4gICAgICAgICAgICAgICAgZXZlcnlvbmVCeURheSlcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZXZlcnlvbmVTZWxlY3RvcnMucmVzdWx0O1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1tcImFjdGl2aXRpZXNcIl07XG4gICAgICAgICAgICB0aGlzLmRyYXcoZXZlcnlvbmVEYXRhLCBwYXJhbXMpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNlbGVjdGluZyB0aGUgZGF5IGNvbXBhcmlzb25cbiAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktYnRuXCIpO1xuICAgICAgICBkYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSB1dGlscy5kYXlDb21wRmlsdGVyKGRheUNvbXAucmVzdWx0LmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgIGRheUNvbXAucmVzdWx0LnllYXJzLFxuICAgICAgICAgICAgICAgIGV2ZXJ5b25lQnlEYXkpXG5cbiAgICAgICAgICAgIHRoaXMuZHJhdyhkYXlEYXRhLCBkYXlDb21wLnJlc3VsdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc2VsZWN0aW5nIHRoZSBBcHAgQWNhZGVteSBTdHVkZW50XG4gICAgICAgIGNvbnN0IGFwcGFjYWRlbXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1hY2FkZW15LWJ0blwiKTtcbiAgICAgICAgYXBwYWNhZGVteS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KGFwcEFjYWRlbXlTZWxlY3Rvci5kYXRhLCB7cGVyc29uOiBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIiwgeWVhcjogXCIyMDE5XCJ9KTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGZpcnN0IHllYXIgcmVzaWRlbnQgYWZ0ZXIgbWVkaWNhbCBzY2hvb2xcbiAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2lkZW50LWJ0blwiKTtcbiAgICAgICAgcmVzaWRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhyZXNpZGVudFNlbGVjdG9yLmRhdGEsIHtwZXJzb246IFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCJ9KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIEFwcEFjYWRlbXlTZWxlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdG9yKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1hcHBcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcImFwcC1hY2FkZW15LWJ0blwiLCBcInNlbGVjdG9yLWJ0blwiKTtcbiAgICAgICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIjogMTQuOCxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiOiAwLjQsXG4gICAgICAgICAgICAgICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiOiAwLjIsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkxlaXN1cmUgYW5kIHNwb3J0c1wiOiAwLjEsXG4gICAgICAgICAgICAgICAgXCJPdGhlciBhY3Rpdml0aWVzXCI6IDAuMSxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIlRoZSB0eXBpY2FsIEFwcCBBY2FkZW15IHN0dWRlbnQuIE5vdCBmcm9tIEFUVVMuXCIpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjYWRlbXlTZWxlY3RvcjsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNhdGVnb3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWZpbHRlclwiKTtcbiAgICBhdHRhY2guYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wiRW1wbG95ZWQgYnkgR2VuZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRXZlcnlvbmUgYnkgRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRheSBDb21wYXJpc29uIChldmVyeW9uZSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXBwIEFjYWRlbXkgU3R1ZGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnRcIl1cblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggb3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpXG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICBjYXRlZ29yeU9wdGlvbi5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlPcHRpb24pO1xuICAgIH0pXG5cbiAgICBjYXRlZ29yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImpzLVwiXScpXG4gICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpKTtcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcIkVtcGxveWVkIGJ5IEdlbmRlclwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcGxveWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1lbXBsb3llZFwiKTtcbiAgICAgICAgICAgICAgICBlbXBsb3llZC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHZW5kZXIgQ29tcGFyaXNvbiAoZW1wbG95ZWQpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1nZW5kZXJcIik7XG4gICAgICAgICAgICAgICAgZ2VuZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkV2ZXJ5b25lIGJ5IERheVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1ldmVyeW9uZVwiKTtcbiAgICAgICAgICAgICAgICBldmVyeW9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJEYXkgQ29tcGFyaXNvbiAoZXZlcnlvbmUpXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kYXlcIik7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFwcCBBY2FkZW15IFN0dWRlbnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFwcFwiKTtcbiAgICAgICAgICAgICAgICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmlyc3QgWWVhciBNZWRpY2FsIFJlc2lkZW50XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzaWRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXJlc2lkZW50XCIpO1xuICAgICAgICAgICAgICAgIHJlc2lkZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG5cbn0iLCJpbXBvcnQge2FscGhhfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGEtZGlzcGxheVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktZGF0YVwiKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBjb25zdCBwYXJhbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcGFyYW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJhbXNcIik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhbURpc3BsYXkpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuc29ydCgpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcGFyYW1EaXNwbGF5LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGAke2VsLnRvVXBwZXJDYXNlKCl9OmBcbiAgICAgICAgY29uc3QgcGFyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXJhbS5pbm5lclRleHQgPSB0eXBlb2YgcGFyYW1zW2VsXSA9PT0gXCJvYmplY3RcIiA/IHBhcmFtc1tlbF0uam9pbihcIiwgXCIpIDogcGFyYW1zW2VsXTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH0pXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCAoZGF0dW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHAuaW5uZXJUZXh0ID0gZGF0dW07XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGFscGhhW2ldKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1saXN0LWl0ZW1zXCIpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gZGF0YVtkYXR1bV0udG9GaXhlZCgyKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGNvbnN0IGFyYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FscGhhW2ldfWApO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5hZGQoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgYXJjLmNsYXNzTGlzdC5yZW1vdmUoXCJhcmMtZGlzcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgRGF5Q29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZpdHkgPSB0aGlzLnVwZGF0ZUFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHllYXJzO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFycyA9IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHRoaXMuc2VsZWN0aW9uLmFjdGl2aXR5LFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRGF5IENvbXBhcmlzb24gKGV2ZXJ5b25lKVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDb21wKCkge1xuICAgICAgICBjb25zdCBhdHRhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpXG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGF0dGFjaC5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZChcImZpbHRlclwiLCBcImpzLWRheVwiKTtcblxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZFwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcbiAgICAgICAgQ3JlYXRlLnN1Ym1pdEJ1dHRvbih0aGlzLmhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBcImRheVwiKTtcblxuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2Ygbm9uaG9saWRheSB3ZWVrZGF5cyBhZ2FpbnN0IHdlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIilcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXlDb21wIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuY2xhc3MgRW1wbG95ZWRTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlR2VuZGVyID0gdGhpcy51cGRhdGVHZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzOiBBQ1RJVklUSUVTLFxuICAgICAgICAgICAgZ2VuZGVyOiBcIlRvdGFsIChtZW4gYW5kIHdvbWVuKVwiLFxuICAgICAgICAgICAgeWVhcnM6IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFbXBsb3llZCBieSBHZW5kZXJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2VuZGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltcImdlbmRlclwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9ucyA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgYWN0aXZpdGllcywgeWVhcnM7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnNbXCJhY3Rpdml0aWVzXCJdWzBdID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGFjdGl2aXRpZXMgPSBBQ1RJVklUSUVTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IHNlbGVjdGlvbnNbJ2FjdGl2aXRpZXMnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rpb25zLnllYXJzWzBdID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICB5ZWFycyA9IFtcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIGdlbmRlcjogc2VsZWN0aW9ucy5nZW5kZXIsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiRW1wbG95ZWQgYnkgR2VuZGVyXCJcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxuICAgIGFkZFNlbGVjdG9ycygpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwiZGlzcGxheVwiLCBcImpzLWVtcGxveWVkXCIpO1xuXG4gICAgICAgIENyZWF0ZS5hY3Rpdml0eVNlbGVjdG9yKGZpbHRlciwgXCJlXCIpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJlXCIsIFtcIkFsbCB5ZWFyc1wiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXSk7XG5cbiAgICAgICAgY29uc3QgZ2VuZGVyU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZ2VuZGVyU2VsZWN0b3IpO1xuICAgICAgICBnZW5kZXJTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0b3JzXCIsIFwic2VsZWN0b3JzLXNlbGVjdFwiKVxuICAgICAgICBnZW5kZXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCBnZW5kZXJcIikpXG4gICAgICAgIGNvbnN0IGdlbmRlcnMgPSBbXCJUb3RhbCAobWVuIGFuZCB3b21lbilcIiwgXCJXb21lblwiLCBcIk1lblwiXTtcbiAgICAgICAgZ2VuZGVycy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZW5kZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICAgICAgZ2VuZGVyT3B0aW9uLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgICAgIGdlbmRlclNlbGVjdG9yLmFwcGVuZENoaWxkKGdlbmRlck9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgZ2VuZGVyU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnVwZGF0ZUdlbmRlcilcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZW1wbG95ZWRcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiRW1wbG95ZWQgbWVuIGFuZCB3b21lbiBvbiBhbiBhdmVyYWdlIGRheVwiKVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZFNlbGVjdG9yczsiLCJpbXBvcnQgeyBBQ1RJVklUSUVTIH0gZnJvbSAnLi4vaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgZXZlcnlvbmVTZWxlY3RvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIFwiYWN0aXZpdGllc1wiOiBbXCJBbGwgQWN0aXZpdGllc1wiXSxcbiAgICAgICAgICAgIFwieWVhcnNcIjogW1wiQWxsIHllYXJzXCJdLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWxsIGRheXNcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVR5cGUgPSB0aGlzLnVwZGF0ZVR5cGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVR5cGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW1widHlwZVwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGxldCBhY3Rpdml0aWVzLCB5ZWFycztcblxuICAgICAgICBpZiAoc2VsZWN0aW9uc1tcImFjdGl2aXRpZXNcIl1bMF0gPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdGllcyA9IEFDVElWSVRJRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpdml0aWVzID0gc2VsZWN0aW9uc1snYWN0aXZpdGllcyddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbnMueWVhcnNbMF0gPT09IFwiQWxsIHllYXJzXCIpIHtcbiAgICAgICAgICAgIHllYXJzID0gW1wiMjAwOVwiLCBcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJzID0gc2VsZWN0aW9uc1tcInllYXJzXCJdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyxcbiAgICAgICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbnMudHlwZSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJFdmVyeW9uZSBieSBkYXlcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRTZWxlY3RvcnMoKSB7XG4gICAgICAgIGNvbnN0IGF0dGFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0b3JcIilcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtZXZlcnlvbmVcIik7XG5cbiAgICAgICAgQ3JlYXRlLmFjdGl2aXR5U2VsZWN0b3IoZmlsdGVyLCBcImV2XCIpO1xuICAgICAgICBDcmVhdGUueWVhclNlbGVjdG9yKGZpbHRlciwgXCJldlwiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDA5XCIsIFwiMjAxMFwiLCBcIjIwMTFcIiwgXCIyMDEyXCIsIFwiMjAxM1wiLCBcIjIwMTRcIiwgXCIyMDE1XCIsIFwiMjAxNlwiLCBcIjIwMTdcIiwgXCIyMDE4XCJdKTtcblxuICAgICAgICBjb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQodHlwZVNlbGVjdG9yKTtcbiAgICAgICAgdHlwZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbGVjdCB0eXBlXCIpKVxuICAgICAgICBjb25zdCB0eXBlcyA9IFtcIkFsbCBkYXlzXCIsIFwiTm9uaG9saWRheSB3ZWVrZGF5c1wiLCBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl07XG4gICAgICAgIHR5cGVzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgdHlwZU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgICAgIHR5cGVPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICAgICAgdHlwZVNlbGVjdG9yLmFwcGVuZENoaWxkKHR5cGVPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMudXBkYXRlVHlwZSlcblxuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZXZlcnlvbmVcIik7XG4gICAgICAgIENyZWF0ZS5kZXNjcmlwdGlvbihmaWx0ZXIsIFwiQWxsIHBlcnNvbnMgb24gbm9uaG9saWRheSB3ZWVrZGF5cyBvciB3ZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVyeW9uZVNlbGVjdG9yczsiLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cblxuY2xhc3MgR2VuZGVyQ29tcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3Rpdml0eSA9IHRoaXMudXBkYXRlQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpdml0eTogXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICAgICAgICAgIHllYXJzOiBbXCJBbGwgeWVhcnNcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2aXR5KGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHllYXJzO1xuICAgICAgICBpZiAoc2VsZWN0aW9ucy55ZWFyc1swXSA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhcnMgPSBbXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFycyA9IHNlbGVjdGlvbnNbXCJ5ZWFyc1wiXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0eSxcbiAgICAgICAgICAgIHllYXJzLFxuICAgICAgICAgICAgZmlsdGVyOiBcIkdlbmRlciBDb21wYXJpc29uIChlbXBsb3llZClcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ29tcCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKVxuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBhdHRhY2guYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIiwgXCJqcy1nZW5kZXJcIik7XG4gICAgICAgIFxuICAgICAgICBDcmVhdGUuYWN0aXZpdHlTZWxlY3QodGhpcy51cGRhdGVBY3Rpdml0eSwgZmlsdGVyKTtcbiAgICAgICAgQ3JlYXRlLnllYXJTZWxlY3RvcihmaWx0ZXIsIFwiZ1wiLCBbXCJBbGwgeWVhcnNcIiwgXCIyMDEzXCIsIFwiMjAxNFwiLCBcIjIwMTVcIiwgXCIyMDE2XCIsIFwiMjAxN1wiLCBcIjIwMThcIl0pO1xuICAgICAgICBDcmVhdGUuc3VibWl0QnV0dG9uKHRoaXMuaGFuZGxlU3VibWl0LCBmaWx0ZXIsIFwiZ2VuZGVyXCIpO1xuICAgICAgICBDcmVhdGUuZGVzY3JpcHRpb24oZmlsdGVyLCBcIkNvbXBhcmlzb24gb2YgZW1wbG95ZWQgbWVuIGFuZCB3b21lblwiKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZGVyQ29tcFxuXG5cbi8vIGdvYWw6IHtcIldvbWVuXCI6IDAuNSwgXCJNZW5cIjogNC4zfSIsImltcG9ydCBXYWxrdGhyb3VnaCBmcm9tICcuL3dhbGt0aHJvdWdoJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcbiAgICAvLyBDcmVhdGluZyB0aGUgbW9kYWxcbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibHVyLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsdXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIik7XG4gICAgLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRpbWUgVXNhZ2VcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBUaW1lIFVzYWdlLCBhIGRhdGEgdmlzdWFsaXphdGlvbiBvZiBob3cgQW1lcmljYW5zIHVzZSB0aGVpciB0aW1lIG9uIGEgZ2l2ZW4gZGF5LiBUaGUgZGF0YSBpcyBnYXRoZXJlZCBieSB0aGUgQnVyZWF1IG9mIExhYm9yIFN0YXRpc3RpY3Mgb25jZSBhIHllYXIuXCJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgLy8gUXVlc3Rpb25cbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9IFwiV291bGQgeW91IGxpa2UgYSBicmllZiB3YWxrdGhyb3VnaD9cIjtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgcXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vZGFsLXF1ZXN0aW9uXCIpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgLy8gRXhpdCBidXR0b25cbiAgIFxuICAgIC8vIEkndmUgYWxyZWFkeSB1c2VkIHRoaXMgYmVmb3JlIGJ1dHRvbi4gVGFrZXMgdGhlbSBkaXJlY3RseSBpbnRvIHRoZSBhcHAuXG4gICAgY29uc3QgYWxyZWFkeWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhbHJlYWR5YnRuKTtcbiAgICBhbHJlYWR5YnRuLmlubmVyVGV4dCA9IFwiSSd2ZSBhbHJlYWR5IHVzZWQgdGhpcyBiZWZvcmUuXCI7XG4gICAgYWxyZWFkeWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXRpbHMubmV4dFN0ZXAoXCJibHVyXCIsIFwibW9kYWwtZGlzcGxheVwiKSk7XG5cbiAgICAvLyBXYWxrdGhyb3VnaCBidXR0b24uIEl0IHNob3VsZCB0YWtlIHRoZW0gdGhyb3VnaCB0aGUgd2Fsa3Rocm91Z2guIFxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdG4pOyBcbiAgICB5ZXNCdG4uaW5uZXJUZXh0ID0gXCJZZXMsIHBsZWFzZS5cIjtcbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBXYWxrdGhyb3VnaChibHVyKTtcbiAgICAgICAgdXRpbHMubmV4dFN0ZXAoXCJtb2RhbFwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJ3YWxrdGhyb3VnaC1zdGVwLWZpcnN0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikoZSk7XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgKiBhcyBDcmVhdGUgZnJvbSAnLi4vaGVscGVycy9jcmVhdGUnXG5cbmNsYXNzIFJlc2lkZW50U2VsZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgYXR0YWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RvclwiKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgYXR0YWNoLmFwcGVuZENoaWxkKGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIsIFwianMtcmVzaWRlbnRcIik7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzaWRlbnQtYnRuXCIsIFwic2VsZWN0b3ItYnRuXCIpO1xuICAgICAgICBzZWxlY3Rpb25CdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgU2VsZWN0aW9uXCI7XG4gICAgICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJXb3JraW5nIGFuZCB3b3JrLXJlbGF0ZWQgYWN0aXZpdGllc1wiOiAxMyxcbiAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIGNhcmUgYWN0aXZpdGllc1wiOiA2LFxuICAgICAgICAgICAgICAgIFwiSG91c2Vob2xkIGFjdGl2aXRpZXNcIjogMS41LFxuICAgICAgICAgICAgICAgIFwiRWF0aW5nIGFuZCBkcmlua2luZ1wiOiAxLjAsXG4gICAgICAgICAgICAgICAgXCJDYXJpbmcgZm9yIGFuZCBoZWxwaW5nIGhvdXNlaG9sZCBtZW1iZXJzXCI6IDEuMCxcbiAgICAgICAgICAgICAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCI6IDAuNSxcbiAgICAgICAgICAgICAgICBcIkNhcmluZyBmb3IgYW5kIGhlbHBpbmcgbm9uaG91c2Vob2xkIG1lbWJlcnNcIjogMC40LFxuICAgICAgICAgICAgICAgIFwiTGVpc3VyZSBhbmQgc3BvcnRzXCI6IDAuMyxcbiAgICAgICAgICAgICAgICBcIlB1cmNoYXNpbmcgZ29vZHMgYW5kIHNlcnZpY2VzXCI6IDAuMixcbiAgICAgICAgICAgICAgICBcIk90aGVyIGFjdGl2aXRpZXNcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiT3JnYW5pemF0aW9uYWwsIGNpdmljLCBhbmQgcmVsaWdpb3VzIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIjogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgQ3JlYXRlLmRlc2NyaXB0aW9uKGZpbHRlciwgXCJBIGZpcnN0LXllYXIgbWVkaWNhbCByZXNpZGVudCBhdCBVQ1NGLiBOb3QgZnJvbSBBVFVTLlwiKVxuXG4gICAgICAgIGNvbnN0IGNpdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChjaXRhdGlvbik7XG4gICAgICAgIGNpdGF0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXRhdGlvblwiKTtcbiAgICAgICAgY2l0YXRpb24uaW5uZXJUZXh0ID0gXCJEYXRhIGFwcHJveGltYXRlZCBmcm9tIFwiO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiKTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBcImh0dHBzOi8vd3d3LmtldmlubWQuY29tL2Jsb2cvMjAxNi8wMi9xdWFudGl0YXRpdmUtYW5hbHlzaXMtZmlyc3QteWVhci1pbnRlcm5hbC1tZWRpY2luZS1yZXNpZGVuY3kuaHRtbFwiO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgY2l0YXRpb24uYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpZGVudFNlbGVjdG9yOyIsImltcG9ydCBVdGlscyBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIENyZWF0ZSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgYmx1ciA9PiB7XG4gICAgLy8gV2Fsa3Rocm91Z2hcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3QgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1ci5hcHBlbmRDaGlsZChleGl0QnV0dG9uKTtcbiAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwXCIsIFwiZXhpdFwiKTtcbiAgICBleGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRXhpdCB3YWxrdGhyb3VnaFwiO1xuICAgIGV4aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLm5leHRTdGVwKFwiYmx1clwiLCBcIm1vZGFsLWRpc3BsYXlcIiwgXCJleGl0XCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBudWxsLCBcIipcIikpXG5cbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IENyZWF0ZS5zdGVwcyhibHVyLCBcImZpcnN0XCIsXG4gICAgICAgIFwiU3RhcnQgYnkgaG93IHlvdSB3YW50IHRvIGZpbHRlciB0aGUgZGF0YS4gU2VsZWN0IGEgZ2VuZXJhbCBjYXRlZ29yeS4gTm90ZSB0aGF0IEFwcCBBY2FkZW15IFN0dWRlbnQgYW5kIEZpcnN0IFllYXIgTWVkaWNhbCBSZXNpZGVudCBhcmUgbm90IGZyb20gdGhlIEFtZXJpY2FuIFRpbWUgVXNhZ2UgU3VydmV5LlwiLFxuICAgICAgICBcIkdvdCBpdCFcIixcbiAgICAgICAgXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3Qgc2Vjb25kQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwic2Vjb25kXCIsXG4gICAgICAgICdTZWxlY3QgeW91ciBwYXJhbWV0ZXJzLiBBcHAgQWNhZGVteSBTdHVkZW50IGFuZCBGaXJzdCBZZWFyIE1lZGljYWwgUmVzaWRlbnQgaGF2ZSBubyBwYXJhbWV0ZXJzLiBUaGVuIGNsaWNrIFwiU3VibWl0IFNlbGVjdGlvbi5cIicsXG4gICAgICAgIFwiR3JlYXQhXCIsXG4gICAgICAgIFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IHRoaXJkQnV0dG9uID0gQ3JlYXRlLnN0ZXBzKGJsdXIsIFwidGhpcmRcIixcbiAgICAgICAgJ0FzIHlvdSBob3ZlciBvdmVyIHRoZSBzbGljZXMgb2YgdGhlIGdyYXBoLCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHdpbGwgbGlnaHQgdXAsIGFuZCB2aWNlIHZlcnNhLiBOb3RlIHRoYXQgdGhlc2Ugc2xpY2VzIGFyZSB0ZWNobmljYWxseSBwcm9wb3J0aW9ucywgYW5kIG5vdCBzdHJpY3RseSBvdXQgb2YgMjQgaG91cnMuIEl0IGRlcGVuZHMgb24gdGhlIHBhcmFtZXRlcnMuJyxcbiAgICAgICAgXCJBd2Vzb21lIVwiXG4gICAgICAgIClcbiAgICBjb25zdCBmb3VydGhCdXR0b24gPSBDcmVhdGUuc3RlcHMoYmx1ciwgXCJmb3VydGhcIixcbiAgICAgICAgXCJUaGVyZSdzIGEgZGFyayBtb2RlIGlmIG5lZWRlZC5cIixcbiAgICAgICAgXCJJJ20gcmVhZHkuXCIsXG4gICAgICAgIFwiZG93blwiXG4gICAgKVxuICAgIGZpcnN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtZmlyc3RcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1zZWNvbmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLnNlbGVjdG9yc1wiLCBcIi5jYXRlZ29yeS1maWx0ZXJcIikpXG4gICAgc2Vjb25kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtc2Vjb25kXCIsIFwid2Fsa3Rocm91Z2gtZGlzcGxheVwiLCBcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiI2NcIiwgXCIuc2VsZWN0b3JzXCIpKVxuICAgIHRoaXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcIndhbGt0aHJvdWdoLXN0ZXAtdGhpcmRcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwid2Fsa3Rocm91Z2gtc3RlcC1mb3VydGhcIiwgXCJ3YWxrdGhyb3VnaC1kaXNwbGF5XCIsIFwiLmRhcmstYnRuXCIsIFwiI2NcIikpXG4gICAgZm91cnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1dGlscy5uZXh0U3RlcChcImJsdXJcIiwgXCJtb2RhbC1kaXNwbGF5XCIsIG51bGwsIG51bGwsIG51bGwsIFwiLmRhcmstYnRuXCIpKVxufSIsImltcG9ydCB7YWxwaGF9IGZyb20gJy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFyZ2luID0gMTU7XG5cbiAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgICBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI3dhdGNoXCIpXG4gICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRhaW5lclwiLCB0cnVlKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHsgd2lkdGggPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7IHJldHVybiB3aWR0aCB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyBoZWlnaHQgPSB0aGlzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0OyByZXR1cm4gaGVpZ2h0IH0pXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAtIG1hcmdpbjtcblxuICAgIC8vIHNldHRpbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHBpZVxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZTsgfSlcblxuICAgIC8vIGZvcm1hdHRpbmcgdGhlIGRhdGEgb2JqZWN0IHJlY2VpdmVkIGludG8gYW4gYXJyYXkgb2YgUE9KT1Mgd2l0aCB0aGUga2V5cyBcImtleVwiIGFuZCBcInZhbHVlXCIgYW5kIHZhbHVlcyBjb3JyZXNwb25kaW5nbHkuIFxuICAgIGNvbnN0IHByb2Nlc3NlZF9kYXRhID0gZDMuZW50cmllcyhkYXRhKTtcblxuICAgIC8vIHRvdGFsIG9mIHRoZSB2YWx1ZXMsIHVzZWQgdG8gY2FsY3VsYXRlIHBlcmNlbnRhZ2UuXG4gICAgY29uc3QgdG90YWwgPSB1dGlscy5hcnJheVN1bShwcm9jZXNzZWRfZGF0YS5tYXAoZCA9PiB7cmV0dXJuIGQudmFsdWV9KSlcblxuICAgIC8vIGFzc2lnbmluZyBlYWNoIGRhdGEgZW50cnkgYSBwZXJjZW50YWdlIHZhbHVlXG4gICAgcHJvY2Vzc2VkX2RhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgZC5wZXJjZW50YWdlID0gZC52YWx1ZSAvIHRvdGFsO1xuICAgIH0pXG5cbiAgICAvLyB0dXJuaW5nIHRoZSBkYXRhIHZhbHVlcyBpbnRvIGEgcGllIGdyYXBoLCB3aXRoIHRoZSBkLnZhbHVlcyBiZWluZyBob3cgbXVjaCBvZiB0aGUgdG90YWwgZG9udXQuIFxuICAgIGNvbnN0IGZpbmFsX2RhdGEgPSBwaWUocHJvY2Vzc2VkX2RhdGEpO1xuXG4gICAgLy8gZGVmaW5pbmcgdGhlIG1ldGhvZCB0byBtYWtlIGFyY3MuIHNpbmNlIHdlIGhhdmUgYW4gaW5uZXIgcmFkaXVzIGFuZCBhbiBvdXRlciByYWRpdXMsIHRoaXMgaXMgYSBkb251dC4gXG4gICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcblxuICAgIC8vIGFsbCB0aGUgcGF0aHMgbWFkZSBmcm9tIHRoZSBkYXRhIHZhbHVlcy4gXG4gICAgY29uc3QgcGF0aHMgPSBzdmdcbiAgICAgICAgLnNlbGVjdEFsbCgpXG4gICAgICAgIC5kYXRhKGZpbmFsX2RhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuXG4gICAgLy8gbWFraW5nIHRoZSBhcmNzIGZvciBlYWNoIHBhdGgsIHNldHRpbmcgbGlzdGVuZXJzLCBhbmQgY3JlYXRpbmcgdGhlIHRyYW5zaXRpb25zLiBcbiAgICBwYXRoc1xuICAgICAgICAuZWFjaCggZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FyY3MnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKGFscGhhW2ldLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YWxwaGFbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FscGhhW2ldfWApO1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oZnVuY3Rpb24oZCkge3JldHVybiBkLmRhdGEucGVyY2VudGFnZSAqIDMwMDB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSggZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlTdW0ocGF0aHMubm9kZXMoKS5zbGljZSgwLCBpKS5tYXAoZWwgPT4gZDMuc2VsZWN0KGVsKS5kYXRhKClbMF0uZGF0YS5wZXJjZW50YWdlKSkgKiAzMDAwICsgMjAwOyAvLyB0aGlzIGxpbmUgaXMgbGl0ZXJhbGx5IGp1c3QgdG8gY2FsY3VsYXRlIHRoZSBkZWxheSBzdWNoIHRoYXQgdGhlIHRyYW5zaXRpb25zIGFyZSBvbmUgYWZ0ZXIgdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxufVxuXG4gICAgLy8gd2luZG93Lm9ucmVzaXplID0gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI2NTEyMy9yZXNpemUtc3ZnLXdoZW4td2luZG93LWlzLXJlc2l6ZWQtaW4tZDMtanNcbiAgICAvLyBmb3IgcmVzcG9uc2l2ZSBTVkcgZGVzaWduXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NjI5ODIvaG93LXRvLWRpc3BsYXktcGVyY2VudGFnZS10by10aGUtZDMtanMtcGllY2hhcnRcbiAgICAvLyBmb3IgcGVyY2VudGFnZXNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL2ZhcmF6c2h1amEvZTJjYjUyODI4YzA4MGJhODVkYTU0NThlMjMwNGE2MWZcbiAgICAvLyBmb3IgbGFiZWxpbmcgc2xpY2VzIHdpdGggcGVyY2VudGFnZXNcbiAgICAvLyBodHRwOi8vYmwub2Nrcy5vcmcvbmFkaW5lc2svOTkzOTMwOTg5NTA2NjVjNDcxZTAzNWFjNTE3YzIyMjRcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICAvLyBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjU5OTdcbiAgICAvLyBmb3IgY2hhaW5lZCB0cmFuc2l0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEFDVElWSVRJRVMgPSBbXG4gICAgXCJQZXJzb25hbCBjYXJlIGFjdGl2aXRpZXNcIixcbiAgICBcIkVhdGluZyBhbmQgZHJpbmtpbmdcIixcbiAgICBcIkhvdXNlaG9sZCBhY3Rpdml0aWVzXCIsXG4gICAgXCJQdXJjaGFzaW5nIGdvb2RzIGFuZCBzZXJ2aWNlc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiQ2FyaW5nIGZvciBhbmQgaGVscGluZyBub25ob3VzZWhvbGQgbWVtYmVyc1wiLFxuICAgIFwiV29ya2luZyBhbmQgd29yay1yZWxhdGVkIGFjdGl2aXRpZXNcIixcbiAgICBcIkVkdWNhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICBcIk9yZ2FuaXphdGlvbmFsLCBjaXZpYywgYW5kIHJlbGlnaW91cyBhY3Rpdml0aWVzXCIsXG4gICAgXCJMZWlzdXJlIGFuZCBzcG9ydHNcIixcbiAgICBcIlRlbGVwaG9uZSBjYWxscywgbWFpbCwgYW5kIGVtYWlsXCIsXG4gICAgXCJPdGhlciBhY3Rpdml0aWVzXCJcbl07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiXVxuIiwiaW1wb3J0IHtBQ1RJVklUSUVTfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCAqIGFzIFVwZGF0ZSBmcm9tICcuL3VwZGF0ZSdcblxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3RvciA9IChmaWx0ZXIsIHByZWZpeCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIilcbiAgICBjb25zdCBhY3Rpdml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFjdGl2aXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJBY3Rpdml0aWVzXCI7XG4gICAgYWN0aXZpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChhY3Rpdml0eUxhYmVsKVxuXG4gICAgY29uc3QgYWN0aXZpdHlTZWxlY3Rpb25zID0gW1wiQWxsIEFjdGl2aXRpZXNcIl0uY29uY2F0KEFDVElWSVRJRVMpO1xuICAgIGFjdGl2aXR5U2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIGFjdGl2aXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHNlbGVjdDtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFjdGl2aXR5T3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGlmIChzZWxlY3QgPT09IFwiQWxsIEFjdGl2aXRpZXNcIikge1xuICAgICAgICAgICAgYWN0aXZpdHlPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBhY3Rpdml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmVmaXh9X2FjdGl2aXR5T3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2aXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhY3Rpdml0eU9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBVcGRhdGUuYWN0aXZpdHkocHJlZml4KSk7XG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyU2VsZWN0b3IgPSAoZmlsdGVyLCBwcmVmaXgsIHllYXJzKSA9PiB7XG4gICAgY29uc3QgeWVhclNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoeWVhclNlbGVjdG9yKTtcbiAgICB5ZWFyU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yc1wiLCBcInllYXItc2VsZWN0b3JcIilcbiAgICBjb25zdCB5ZWFyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHllYXJzTGFiZWwuaW5uZXJUZXh0ID0gXCJZZWFyc1wiO1xuICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZCh5ZWFyc0xhYmVsKVxuXG4gICAgY29uc3QgeWVhclNlbGVjdGlvbnMgPSB5ZWFycztcbiAgICB5ZWFyU2VsZWN0aW9ucy5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHsgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSB9XG4gICAgICAgIHllYXJTZWxlY3Rvci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBjb25zdCB5ZWFyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB5ZWFyT3B0aW9uLnZhbHVlID0gc2VsZWN0O1xuICAgICAgICB5ZWFyT3B0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgaWYgKHNlbGVjdCA9PT0gXCJBbGwgeWVhcnNcIikge1xuICAgICAgICAgICAgeWVhck9wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJPcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cHJlZml4fV95ZWFyT3B0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9KVxuICAgIHllYXJTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIFVwZGF0ZS55ZWFycyhwcmVmaXgpKVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKGhhbmRsZVN1Ym1pdCwgZmlsdGVyLCBwcmVmaXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChzZWxlY3Rpb25CdXR0b24pO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tYnRuYCwgXCJzZWxlY3Rvci1idG5cIik7XG4gICAgc2VsZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0IFNlbGVjdGlvblwiO1xuICAgIHNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU3VibWl0KVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZpdHlTZWxlY3QgPSAodXBkYXRlQWN0aXZpdHksIGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZpbHRlci5hcHBlbmRDaGlsZChhY3Rpdml0eVNlbGVjdG9yKTtcbiAgICBhY3Rpdml0eVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvcnNcIiwgXCJzZWxlY3RvcnMtc2VsZWN0XCIpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25zID0gQUNUSVZJVElFUztcbiAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBhY3Rpdml0eU9wdGlvbi52YWx1ZSA9IHNlbGVjdDtcbiAgICAgICAgYWN0aXZpdHlPcHRpb24uaW5uZXJUZXh0ID0gc2VsZWN0O1xuICAgICAgICBhY3Rpdml0eVNlbGVjdG9yLmFwcGVuZENoaWxkKGFjdGl2aXR5T3B0aW9uKTtcbiAgICB9KVxuICAgIGFjdGl2aXR5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVBY3Rpdml0eSlcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdIYW5kcyA9ICgpID0+IHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiY2xvY2staGFuZHNcIl0nKTtcbiAgICBvbGQuZm9yRWFjaChlbCA9PiB7ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCl9KVxuXG4gICAgY29uc3QgaGFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbmRzXCIpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1pbnV0ZXMuY2xhc3NMaXN0LmFkZChcImNsb2NrLWhhbmRzXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKG1pbnV0ZXMpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJjbG9jay1oYW5kcy1ob3VyXCIpO1xuICAgIGhhbmRzLmFwcGVuZENoaWxkKGhvdXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtNb2RlQnRuID0gKGRyYXcsIGRhdGEsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIik7XG4gICAgaWYgKG9sZCkge1xuICAgICAgICBvbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGQpO1xuICAgIH1cbiAgICBsZXQgdGV4dCA9IFwiRGFyayBNb2RlXCI7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLWRhcmtcIikpIHtcbiAgICAgICAgdGV4dCA9IFwiTGlnaHQgTW9kZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkYXJrLWJ0blwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtZGFya1wiKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwidGhlbWUtbGlnaHRcIik7XG4gICAgICAgIGRyYXcoZGF0YSwgcGFyYW1zKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoYmx1ciwgb3JkZXIsIHN0ZXBUZXh0LCBidXR0b25UZXh0LCB0cmlhbmdsZURpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBibHVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChcIndhbGt0aHJvdWdoLXN0ZXBcIiwgYHdhbGt0aHJvdWdoLXN0ZXAtJHtvcmRlcn1gKTtcbiAgICBzdGVwLmlubmVyVGV4dCA9IHN0ZXBUZXh0O1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ3YWxrdGhyb3VnaC1zdGVwLWJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgIGlmIChvcmRlciA9PT0gXCJ0aGlyZFwiKSB7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlQS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdHJpYW5nbGVcIiwgXCJ3YWxrdGhyb3VnaC10aGlyZC10cmlhbmdsZS1hXCIpO1xuICAgICAgICBzdGVwLmFwcGVuZENoaWxkKHRyaWFuZ2xlQSk7XG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJpYW5nbGVCLmNsYXNzTGlzdC5hZGQoXCJ1cC10cmlhbmdsZVwiLCBcIndhbGt0aHJvdWdoLXRoaXJkLXRyaWFuZ2xlLWJcIik7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGVCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0cmlhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRyaWFuZ2xlLmNsYXNzTGlzdC5hZGQoYCR7dHJpYW5nbGVEaXJlY3Rpb259LXRyaWFuZ2xlYCwgYHdhbGt0aHJvdWdoLSR7b3JkZXJ9LXRyaWFuZ2xlYCk7XG4gICAgICAgIHN0ZXAuYXBwZW5kQ2hpbGQodHJpYW5nbGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPSAoZmlsdGVyLCB3b3JkcykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd29yZHM7XG59IiwiZXhwb3J0IGNvbnN0IGFjdGl2aXR5ID0gcHJlZml4ID0+IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCBBY3Rpdml0aWVzXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25gKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJhY3Rpdml0aWVzXCJdID0gW1wiQWxsIEFjdGl2aXRpZXNcIl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH1fYWN0aXZpdHlPcHRpb25BbGxgKTtcbiAgICAgICAgICAgIGFsbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBhbGwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSB0aGlzLnNlbGVjdGlvbltcImFjdGl2aXRpZXNcIl0uZmlsdGVyKGFjdGl2aXR5ID0+IHsgcmV0dXJuIGFjdGl2aXR5ICE9PSBcIkFsbCBBY3Rpdml0aWVzXCIgfSlcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uW1wiYWN0aXZpdGllc1wiXSA9IG5ld0FycjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmFjdGl2aXRpZXMgPSB0aGlzLnNlbGVjdGlvbi5hY3Rpdml0aWVzLmZpbHRlcihzZWxlY3QgPT4geyByZXR1cm4gc2VsZWN0ICE9PSBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHllYXJzID0gcHJlZml4ID0+IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbCB5ZWFyc1wiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtwcmVmaXh9X3llYXJPcHRpb25gKS5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5jaGVja2VkID0gZmFsc2U7IG9wdGlvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSB9KVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IFtcIkFsbCB5ZWFyc1wiXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fV95ZWFyT3B0aW9uQWxsYCk7XG4gICAgICAgICAgICBhbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXS5maWx0ZXIoeWVhciA9PiB7IHJldHVybiB5ZWFyICE9PSBcIkFsbCB5ZWFyc1wiIH0pXG4gICAgICAgICAgICBuZXdBcnIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbltcInllYXJzXCJdID0gbmV3QXJyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25bXCJ5ZWFyc1wiXSA9IHRoaXMuc2VsZWN0aW9uW1wieWVhcnNcIl0uZmlsdGVyKHNlbGVjdCA9PiB7IHJldHVybiBzZWxlY3QgIT09IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxufSIsImNsYXNzIFV0aWxzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcnJheVN1bSA9IHRoaXMuYXJyYXlTdW0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcnJheUF2ZXJhZ2UgPSB0aGlzLmFycmF5QXZlcmFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFycmF5TWVyZ2UgPSB0aGlzLmFycmF5TWVyZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbXBsb3llZERhdGFGaWx0ZXIgPSB0aGlzLmVtcGxveWVkRGF0YUZpbHRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmV2ZXJ5b25lRGF0YUZpbHRlciA9IHRoaXMuZXZlcnlvbmVEYXRhRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBhcnJheVN1bSAoYXJyKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGFycltpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGFycmF5QXZlcmFnZSAoYXJyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5U3VtKGFycikgLyBhcnIubGVuZ3RoO1xuICAgIH1cblxuICAgIGFycmF5TWVyZ2UgKC4uLmFycmF5cykge1xuICAgICAgICBsZXQgZmluYWwgPSBbXTtcbiAgICAgICAgaWYgKGFycmF5cy5ldmVyeSggYXJyID0+IHsgcmV0dXJuIGFyci5sZW5ndGggPT09IGFycmF5c1swXS5sZW5ndGg7IH0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYXJyYXlzIGFyZSBub3QgdGhlIHNhbWUgbGVuZ3RoXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheXNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgYXJyYXlzLmZvckVhY2goIGFyciA9PiB7XG4gICAgICAgICAgICAgICAgc3ViQXJyLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmaW5hbC5wdXNoKHN1YkFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH1cblxuICAgIGVtcGxveWVkRGF0YUZpbHRlciAoYWN0aXZpdGllcywgZ2VuZGVyLCB5ZWFycywgZGF0YSkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eUZpbHRlciA9IFtdO1xuICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goIGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgIGFjdGl2aXR5RmlsdGVyLnB1c2goZGF0YVthY3Rpdml0eV0pO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnZW5kZXJGaWx0ZXIgPSBhY3Rpdml0eUZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdHVtLmFjdGl2aXR5XTogZGF0dW1bZ2VuZGVyXSB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IGdlbmRlckZpbHRlci5tYXAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgeWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgICAgICB5ZWFycy5mb3JFYWNoKCB5ZWFyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxZZWFycyA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdO1xuICAgICAgICAgICAgICAgIHllYXJseUZpbHRlci5wdXNoKGFsbFllYXJzW3llYXJdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4ge1tPYmplY3Qua2V5cyhkYXR1bSlbMF1dOiB0aGlzLmFycmF5QXZlcmFnZSh5ZWFybHlGaWx0ZXIpfTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGZpbmFsRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKE9iamVjdC52YWx1ZXMoYSlbMF0gPiBPYmplY3QudmFsdWVzKGIpWzBdKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBzb3J0ZWQuZm9yRWFjaCAoZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0W09iamVjdC5rZXlzKGRhdHVtKVswXV0gPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZlcnlvbmVEYXRhRmlsdGVyKGFjdGl2aXRpZXMsIHR5cGUsIHllYXJzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5RmlsdGVyID0gW107XG4gICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUZpbHRlci5wdXNoKGRhdGFbYWN0aXZpdHldKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdHlwZUZpbHRlciA9IGFjdGl2aXR5RmlsdGVyLm1hcChkYXR1bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbZGF0dW0uYWN0aXZpdHldOiBkYXR1bVt0eXBlXSB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IHR5cGVGaWx0ZXIubWFwKGRhdHVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxZZWFycyA9IE9iamVjdC52YWx1ZXMoZGF0dW0pWzBdO1xuICAgICAgICAgICAgICAgIHllYXJseUZpbHRlci5wdXNoKGFsbFllYXJzW3llYXJdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBbT2JqZWN0LmtleXMoZGF0dW0pWzBdXTogdGhpcy5hcnJheUF2ZXJhZ2UoeWVhcmx5RmlsdGVyKSB9O1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc29ydGVkID0gZmluYWxEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoT2JqZWN0LnZhbHVlcyhhKVswXSA+IE9iamVjdC52YWx1ZXMoYilbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgc29ydGVkLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0W09iamVjdC5rZXlzKGRhdHVtKVswXV0gPSBPYmplY3QudmFsdWVzKGRhdHVtKVswXVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2VuZGVyQ29tcEZpbHRlcihhY3Rpdml0eSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBkYXRhW2FjdGl2aXR5XVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWVuRmlsdGVyID0geyBcIk1lblwiOiBhY3Rpdml0eUZpbHRlcltcIk1lblwiXSB9XG4gICAgICAgIGNvbnN0IHdvbWVuRmlsdGVyID0geyBcIldvbWVuXCI6IGFjdGl2aXR5RmlsdGVyW1wiV29tZW5cIl19XG5cblxuICAgICAgICBjb25zdCBtZW5ZZWFybHlGaWx0ZXIgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsTWVuWWVhcnMgPSBPYmplY3QudmFsdWVzKG1lbkZpbHRlcilbMF07XG4gICAgICAgIHllYXJzLmZvckVhY2goeWVhciA9PiB7XG4gICAgICAgICAgICBtZW5ZZWFybHlGaWx0ZXIucHVzaChhbGxNZW5ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1lbkRhdGEgPSB0aGlzLmFycmF5QXZlcmFnZShtZW5ZZWFybHlGaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IHdvbWVuWWVhcmx5RmlsdGVyID0gW107XG4gICAgICAgIGNvbnN0IGFsbFdvbWVuWWVhcnMgPSBPYmplY3QudmFsdWVzKHdvbWVuRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIHdvbWVuWWVhcmx5RmlsdGVyLnB1c2goYWxsV29tZW5ZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdvbWVuRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKHdvbWVuWWVhcmx5RmlsdGVyKTtcblxuICAgICAgICBpZiAod29tZW5EYXRhID4gbWVuRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIldvbWVuXCI6IHdvbWVuRGF0YSxcbiAgICAgICAgICAgICAgICBcIk1lblwiOiBtZW5EYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiTWVuXCI6IG1lbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJXb21lblwiOiB3b21lbkRhdGEsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGF5Q29tcEZpbHRlcihhY3Rpdml0eSwgeWVhcnMsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlGaWx0ZXIgPSBkYXRhW2FjdGl2aXR5XVxuXG4gICAgICAgIGNvbnN0IG5vbkZpbHRlciA9IHsgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IGFjdGl2aXR5RmlsdGVyW1wiTm9uaG9saWRheSB3ZWVrZGF5c1wiXSB9XG4gICAgICAgIGNvbnN0IGhvbGlGaWx0ZXIgPSB7IFwiV2Vla2VuZCBkYXlzIGFuZCBob2xpZGF5c1wiOiBhY3Rpdml0eUZpbHRlcltcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIl0gfVxuXG4gICAgICAgIGNvbnN0IG5vblllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxOb25ZZWFycyA9IE9iamVjdC52YWx1ZXMobm9uRmlsdGVyKVswXTtcbiAgICAgICAgeWVhcnMuZm9yRWFjaCh5ZWFyID0+IHtcbiAgICAgICAgICAgIG5vblllYXJseUZpbHRlci5wdXNoKGFsbE5vblllYXJzW3llYXJdKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgbm9uRGF0YSA9IHRoaXMuYXJyYXlBdmVyYWdlKG5vblllYXJseUZpbHRlcik7XG5cbiAgICAgICAgY29uc3QgaG9saVllYXJseUZpbHRlciA9IFtdO1xuICAgICAgICBjb25zdCBhbGxIb2xpWWVhcnMgPSBPYmplY3QudmFsdWVzKGhvbGlGaWx0ZXIpWzBdO1xuICAgICAgICB5ZWFycy5mb3JFYWNoKHllYXIgPT4ge1xuICAgICAgICAgICAgaG9saVllYXJseUZpbHRlci5wdXNoKGFsbEhvbGlZZWFyc1t5ZWFyXSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGhvbGlEYXRhID0gdGhpcy5hcnJheUF2ZXJhZ2UoaG9saVllYXJseUZpbHRlcik7XG5cbiAgICAgICAgaWYgKGhvbGlEYXRhID4gbm9uRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIldlZWtlbmQgZGF5cyBhbmQgaG9saWRheXNcIjogaG9saURhdGEsXG4gICAgICAgICAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IG5vbkRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJOb25ob2xpZGF5IHdlZWtkYXlzXCI6IG5vbkRhdGEsXG4gICAgICAgICAgICAgICAgXCJXZWVrZW5kIGRheXMgYW5kIGhvbGlkYXlzXCI6IGhvbGlEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZXh0U3RlcChvcHRpb24sIGNsYXNzTmFtZSwgbmV4dCwgbmV4dENsYXNzLCBuZXh0Q29tcG9uZW50LCBwcmV2Q29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtvcHRpb259YCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuZXh0fWApO1xuICAgICAgICAgICAgICAgIG5leHRJdGVtLmNsYXNzTGlzdC5hZGQobmV4dENsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q29tcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7bmV4dENvbXBvbmVudH1gKTtcbiAgICAgICAgICAgICAgICBuZXh0Q29tcC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoXCJjb21wb25lbnQtZGlzcGxheVwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3ByZXZDb21wb25lbnR9YCk7XG4gICAgICAgICAgICAgICAgcHJldkNvbXAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcG9uZW50LWRpc3BsYXlcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==