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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n// UserSearch Input\r\nconst UserSearch = document.getElementById(\"userSearchBtn\");\r\n\r\n// Event Listener\r\nUserSearch.addEventListener(\"click\", runSearch);\r\n\r\n// Have a function that reloads the gif\r\n// Append the image src every time it is clicked\r\n\r\nfunction gifLoad(){\r\n\r\n    // Solution 3 - Use template strings to create div and add classes\r\n    let output = document.querySelector('.mainClass');\r\n\r\n    let  gifDiv = `\r\n    <div class=\"loader\">\r\n            <img src=\"loading.gif\" alt=\"\" class=\"imgLoader hidden\">\r\n          </div>\r\n    `;\r\n\r\n    output.innerHTML += gifDiv;\r\n\r\n    // Settimeout to remove class after 3 seconds\r\n\r\n    setTimeout(function(){\r\n        givDiv.remove();\r\n    },3000)\r\n\r\n}\r\n\r\n// Add spinner to render box \r\n\r\n// Function that runs on search\r\nfunction runSearch(){\r\n\r\n    gifLoad();\r\n\r\n     const UserInput = document.getElementById(\"userSearchSkill\").value;\r\n       \r\n        // Add a isNot a number\r\n\r\n        // Add a for in to the inner JS functions/object to loop through it, once the data has been fetched\r\n        \r\n           if(UserInput === \"\" || !isNaN(UserInput)){\r\n            //    alert(\"Please Enter a Skill\")\r\n                displayErr()\r\n                clearInput()\r\n\r\n           } else if(UserInput === \"js\" || UserInput === \"javascript\" || UserInput === \"Javascript\"){\r\n               fetch('stock.json').\r\n               then(function(res){\r\n                   return res.json();\r\n               }).then(function(data){\r\n \r\n              \r\n\r\n                   let jsData = data[1];\r\n\r\n                   console.log(jsData);\r\n\r\n                  let output = '';\r\n\r\n                  output+= `\r\n                  <ol>\r\n                   <h4 class = \"mb-4\">Top 10 JavaScript Courses</h4>\r\n                        <li>${jsData.course1}</li>\r\n                        <li>${jsData.course2}</li>\r\n                        <li>${jsData.course3}</li>\r\n                        <li>${jsData.course4}</li>\r\n                        <li>${jsData.course5}</li>\r\n                        <li>${jsData.course6}</li>\r\n                        <li>${jsData.course7}</li>\r\n                        <li>${jsData.course8}</li>\r\n                        <li>${jsData.course9}</li>\r\n                        <li>${jsData.course10}</li>\r\n                  </ol>\r\n\r\n                  `\r\n                    document.querySelector('#render').innerHTML = output;\r\n\r\n                //    })\r\n               })\r\n\r\n            \r\n           } else if(UserInput === \"Python\" || UserInput === \"python\" || UserInput === \"py\"){\r\n                fetch('stock.json').\r\n                then(function(res){\r\n                 return res.json()   \r\n                }).then(function(pyData){\r\n                    \r\n                    let pyResources = pyData[2];\r\n\r\n                      let output = '';\r\n\r\n                        output+= `\r\n                        <h4 class = \"mb-4\"> Top 10 Python Resources</h4> \r\n                        <ol>\r\n                        <li>${pyResources.course1}</li>\r\n                        <li>${pyResources.course2}</li>\r\n                        <li>${pyResources.course3}</li>\r\n                        <li>${pyResources.course4}</li>\r\n                        <li>${pyResources.course5}</li>\r\n                        <li>${pyResources.course6}</li>\r\n                        <li>${pyResources.course7}</li>\r\n                        <li>${pyResources.course8}</li>\r\n                        <li>${pyResources.course9}</li>\r\n                        <li>${pyResources.course10}</li>\r\n                        </ol> \r\n                        `;\r\n\r\n                        document.querySelector('#render').innerHTML = output;\r\n                })\r\n\r\n\r\n           } else if(UserInput === \"React\" || UserInput === \"react\" || UserInput === \"REACT\"){\r\n\r\n            // fetch('stock.json').\r\n            // then(function(res){\r\n            //     return res.json();\r\n            // }).then(function(reactData){\r\n            //     console.log(reactData.React)\r\n            // })\r\n\r\n            fetch('stock.json').\r\n            then(res => res.json()).\r\n            then(reactData =>\r\n                 {let rData = reactData[3]\r\n\r\n                    let output = '';\r\n\r\n                    output+=`\r\n                    <h4 class = \"mb-4\"> Top 8 React Courses</h4>\r\n                    <ol>\r\n                    <li>${rData.course1}</li>\r\n                    <li>${rData.course2}</li>\r\n                    <li>${rData.course3}</li>\r\n                    <li>${rData.course4}</li>\r\n                    <li>${rData.course5}</li>\r\n                    <li>${rData.course6}</li>\r\n                    <li>${rData.course7}</li>\r\n                    </ol>\r\n                    `\r\n                    document.querySelector('#render').innerHTML = output;\r\n                } \r\n                 )\r\n\r\n           } else if(UserInput === \"Vue\" || UserInput === \"VUE\" || UserInput === \"VueJS\" || UserInput === \"vue\" || UserInput === \"vuejs\" || UserInput === \"vue js\"){\r\n\r\n            fetch('stock.json')\r\n            .then(res => res.json()).\r\n            then(vueData => {\r\n               let vue = vueData[0];\r\n\r\n               console.log(vue);\r\n                let output = '';\r\n\r\n                    output+=`\r\n                    <h4 class=\"mb-4\">Top 5 Vue Courses</h4>\r\n\r\n                    <ol>\r\n                    <li>${vue.course1}</li>\r\n                    <li>${vue.course2}</li>\r\n                    <li>${vue.course3}</li>\r\n                    <li>${vue.course3}</li>\r\n                    <li>${vue.course5}</li>\r\n                    </ol>\r\n                    `;\r\n\r\n                    document.querySelector('#render').innerHTML= output;\r\n\r\n                    clearInput();\r\n            })\r\n\r\n           } else if(UserInput === \"digital marketing\" || UserInput === \"Digital Marketing\"){\r\n              \r\n            fetch('stock.json').\r\n            then(res => res.json()).\r\n            then(dMarketing => {\r\n                let dmData = dMarketing[5];  \r\n                let output = '';\r\n\r\n                output+= `\r\n                \r\n                <h3> Top 5 Digital Marketing Courses</h3>\r\n\r\n                <ol>\r\n                <li>${dmData.course1}</li>\r\n                <li>${dmData.course2}</li>\r\n                <li>${dmData.course3}</li>\r\n                <li>${dmData.course4}</li>\r\n                <li>${dmData.course5}</li>\r\n                </ol>\r\n                `\r\n                document.querySelector(\"#render\").innerHTML = output;\r\n            })\r\n\r\n\r\n           } else if(UserInput === \"Game dev\" || UserInput === \"game dev\" || UserInput === \"game development\" ){\r\n            \r\n            fetch('stock.json').\r\n            then(res => res.json()).\r\n            then( \r\n                gmd => {\r\n                    let gmdData = gmd[6];\r\n\r\n                    let output = '';\r\n\r\n                    output+= `\r\n                    <h1> Top Game Development Resources </h1>\r\n                    <ol>\r\n                    <li>${gmdData.course1}</li>\r\n                    <li>${gmdData.course2}</li>\r\n                    <li>${gmdData.course3}</li>\r\n                    <li>${gmdData.course4}</li>\r\n                    <li>${gmdData.course5}</li>\r\n                    </ol>\r\n                    `\r\n\r\n                    document.querySelector('#render').innerHTML = output\r\n                }\r\n             )\r\n\r\n        }  else if(UserInput.length < 2 && UserInput != \"c\"){\r\n            lowTextLength();\r\n        }\r\n\r\n}\r\n\r\n        function displayErr(){\r\n            // Create div that will hold data\r\n                 let displayDiv = document.createElement(\"div\");\r\n\r\n           //    Add class of danger to displayDiv\r\n\r\n                   displayDiv.className = 'alert alert-danger';\r\n\r\n          // Append text\r\n\r\n                   displayDiv.appendChild(document.createTextNode('Please enter a skill. No numbers or special characters permitted'))  \r\n\r\n                  let mainContainer = document.querySelector('#mainContainer');\r\n\r\n                  let render = document.querySelector('#render');\r\n\r\n                 mainContainer.insertBefore(displayDiv, render);\r\n\r\n                setTimeout(function(){ \r\n                    document.querySelector('.alert').remove();\r\n                }, 4700);\r\n\r\n        }\r\n\r\n        function lowTextLength(){\r\n\r\n            let lowTextAlert = document.createElement('div');\r\n\r\n            lowTextAlert.className = 'alert alert-warning';\r\n\r\n            lowTextAlert.appendChild(document.createTextNode(\"Search criteria must be at least 2 characters\"));\r\n\r\n            let mainContainer = document.querySelector('#mainContainer');\r\n\r\n            let render = document.querySelector('#render');\r\n\r\n            mainContainer.insertBefore(lowTextAlert, render);\r\n\r\n            setTimeout(function(){\r\n                document.querySelector('.alert-warning').remove();\r\n            },4700);\r\n\r\n            clearInput()\r\n\r\n        }\r\n\r\n\r\n        // Clear Input Box\r\n        function clearInput(){\r\n\r\n            setTimeout(function(){\r\n                let input = document.querySelector(\"#userSearchSkill\");\r\n\r\n                input.value = '';\r\n            },4000)\r\n           \r\n        }\r\n\r\n      \r\n\r\n\r\n// Things to add\r\n// // Add a loading animation\r\n\r\n\r\n\r\n // As one whole object or as an array of objects\r\n    //     \"Python\": \"Colt Steele Python Bootcamp\",\r\n    \r\n    //     \"Data Analysis\": \"\",\r\n    \r\n    //     \"Cyber Security\": \"\"\r\n    // \r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });