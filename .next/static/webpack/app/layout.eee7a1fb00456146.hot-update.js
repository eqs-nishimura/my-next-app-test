"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/component/templates/MobileDrawer.tsx":
/*!**************************************************!*\
  !*** ./src/component/templates/MobileDrawer.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileDrawer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Close.js\");\n// use client\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst navLinks = [\n    {\n        text: \"トップ\",\n        url: \"/\"\n    },\n    {\n        text: \"みんちゅうSHARE-LINについて\",\n        url: \"/service\"\n    },\n    {\n        text: \"オーナーになるには\",\n        url: \"/owner\"\n    },\n    {\n        text: \"Q&A\",\n        url: \"/faq\"\n    }\n];\nfunction MobileDrawer() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDrawerOpen = ()=>{\n        setOpen(true);\n    };\n    const handleDrawerClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleDrawerOpen,\n                sx: {\n                    padding: \"0\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: open,\n                onClose: handleDrawerClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        width: \"60vw\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: navLinks.map((navLink)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        primary: navLink.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, this)\n                                }, navLink.text, false, {\n                                    fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            button: true,\n                            onClick: handleDrawerClose,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: \"閉じる\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kensuke/GoogleDrive/GoogleDrive_Sync/01_Doing/みんちゅうFC/my-next-app/src/component/templates/MobileDrawer.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MobileDrawer, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = MobileDrawer;\nvar _c;\n$RefreshReg$(_c, \"MobileDrawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGVzL01vYmlsZURyYXdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTs7O0FBRTJCO0FBQzhDO0FBQ3RDO0FBQ0U7QUFFbEQsTUFBTVUsV0FBVztJQUNmO1FBQUVDLE1BQU07UUFBT0MsS0FBSztJQUFJO0lBQ3hCO1FBQUVELE1BQU07UUFBc0JDLEtBQUs7SUFBVztJQUM5QztRQUFFRCxNQUFNO1FBQWFDLEtBQUs7SUFBUztJQUNuQztRQUFFRCxNQUFNO1FBQU9DLEtBQUs7SUFBTztDQUM1QjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFFakMsTUFBTWUsbUJBQW1CO1FBQ3ZCRCxRQUFRO0lBQ1Y7SUFFQSxNQUFNRSxvQkFBb0I7UUFDeEJGLFFBQVE7SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1oscURBQVVBO2dCQUFDZSxTQUFTRjtnQkFBa0JHLElBQUk7b0JBQUVDLFNBQVM7Z0JBQUk7MEJBQ3hELDRFQUFDWixnRUFBUUE7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNOLHFEQUFNQTtnQkFBQ1ksTUFBTUE7Z0JBQU1PLFNBQVNKOzBCQUMzQiw0RUFBQ1YscURBQUdBO29CQUFDWSxJQUFJO3dCQUFFRyxPQUFPO29CQUFPOztzQ0FDdkIsOERBQUNsQixxREFBSUE7c0NBQ0ZNLFNBQVNhLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ25CLHFEQUFRQTs4Q0FDUCw0RUFBQ0MscURBQVlBO3dDQUFDbUIsU0FBU0QsUUFBUWIsSUFBSTs7Ozs7O21DQUR0QmEsUUFBUWIsSUFBSTs7Ozs7Ozs7OztzQ0FLL0IsOERBQUNOLHFEQUFRQTs0QkFBQ3FCLE1BQU07NEJBQUNSLFNBQVNEOzs4Q0FDeEIsOERBQUNYLHFEQUFZQTtvQ0FBQ21CLFNBQVE7Ozs7Ozs4Q0FDdEIsOERBQUNoQixpRUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQWpDd0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvdGVtcGxhdGVzL01vYmlsZURyYXdlci50c3g/NWM2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2UgY2xpZW50XG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyLCBJY29uQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgdGV4dDogXCLjg4jjg4Pjg5dcIiwgdXJsOiBcIi9cIiB9LFxuICB7IHRleHQ6IFwi44G/44KT44Gh44KF44GGU0hBUkUtTElO44Gr44Gk44GE44GmXCIsIHVybDogXCIvc2VydmljZVwiIH0sXG4gIHsgdGV4dDogXCLjgqrjg7zjg4rjg7zjgavjgarjgovjgavjga9cIiwgdXJsOiBcIi9vd25lclwiIH0sXG4gIHsgdGV4dDogXCJRJkFcIiwgdXJsOiBcIi9mYXFcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlRHJhd2VyKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59IHN4PXt7IHBhZGRpbmc6ICcwJyB9fT5cbiAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RHJhd2VyIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfT5cbiAgICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChuYXZMaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e25hdkxpbmsudGV4dH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtuYXZMaW5rLnRleHR9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCLplonjgZjjgotcIiAvPlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHJhd2VyIiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIkJveCIsIk1lbnVJY29uIiwiQ2xvc2VJY29uIiwibmF2TGlua3MiLCJ0ZXh0IiwidXJsIiwiTW9iaWxlRHJhd2VyIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJvbkNsaWNrIiwic3giLCJwYWRkaW5nIiwib25DbG9zZSIsIndpZHRoIiwibWFwIiwibmF2TGluayIsInByaW1hcnkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/templates/MobileDrawer.tsx\n"));

/***/ })

});