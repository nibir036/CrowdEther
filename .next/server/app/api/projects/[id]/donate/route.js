"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/projects/[id]/donate/route";
exports.ids = ["app/api/projects/[id]/donate/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&page=%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute.ts&appDir=D%3A%5Cdev%5CCrowdEther%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cdev%5CCrowdEther&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&page=%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute.ts&appDir=D%3A%5Cdev%5CCrowdEther%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cdev%5CCrowdEther&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_dev_CrowdEther_app_api_projects_id_donate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/projects/[id]/donate/route.ts */ \"(rsc)/./app/api/projects/[id]/donate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/projects/[id]/donate/route\",\n        pathname: \"/api/projects/[id]/donate\",\n        filename: \"route\",\n        bundlePath: \"app/api/projects/[id]/donate/route\"\n    },\n    resolvedPagePath: \"D:\\\\dev\\\\CrowdEther\\\\app\\\\api\\\\projects\\\\[id]\\\\donate\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_dev_CrowdEther_app_api_projects_id_donate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/projects/[id]/donate/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9qZWN0cyUyRiU1QmlkJTVEJTJGZG9uYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9qZWN0cyUyRiU1QmlkJTVEJTJGZG9uYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvamVjdHMlMkYlNUJpZCU1RCUyRmRvbmF0ZSUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDZGV2JTVDQ3Jvd2RFdGhlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q2RldiU1Q0Nyb3dkRXRoZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm93ZGV0aGVyLz9mNTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGRldlxcXFxDcm93ZEV0aGVyXFxcXGFwcFxcXFxhcGlcXFxccHJvamVjdHNcXFxcW2lkXVxcXFxkb25hdGVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2plY3RzL1tpZF0vZG9uYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvamVjdHMvW2lkXS9kb25hdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2plY3RzL1tpZF0vZG9uYXRlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcZGV2XFxcXENyb3dkRXRoZXJcXFxcYXBwXFxcXGFwaVxcXFxwcm9qZWN0c1xcXFxbaWRdXFxcXGRvbmF0ZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJvamVjdHMvW2lkXS9kb25hdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&page=%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute.ts&appDir=D%3A%5Cdev%5CCrowdEther%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cdev%5CCrowdEther&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/projects/[id]/donate/route.ts":
/*!***********************************************!*\
  !*** ./app/api/projects/[id]/donate/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nasync function POST(req, { params }) {\n    try {\n        const auth = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getAuthFromRequest)(req);\n        if (!auth) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n        const { amount } = await req.json();\n        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Enter a valid donation amount\"\n            }, {\n                status: 400\n            });\n        }\n        const project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.project.findUnique({\n            where: {\n                id: params.id\n            }\n        });\n        if (!project) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Project not found\"\n        }, {\n            status: 404\n        });\n        const donationAmount = Number(amount);\n        // Create donation record and update project atomically\n        const [donation, updatedProject] = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.$transaction([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.donation.create({\n                data: {\n                    amount: donationAmount,\n                    userId: auth.userId,\n                    projectId: params.id\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.project.update({\n                where: {\n                    id: params.id\n                },\n                data: {\n                    raised: {\n                        increment: donationAmount\n                    },\n                    backerCount: {\n                        increment: 1\n                    }\n                }\n            })\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            donation,\n            project: updatedProject\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2plY3RzL1tpZF0vZG9uYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDUjtBQUNWO0FBRS9CLGVBQWVHLEtBQUtDLEdBQWdCLEVBQUUsRUFBRUMsTUFBTSxFQUE4QjtJQUNqRixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNTCw2REFBa0JBLENBQUNHO1FBQ3RDLElBQUksQ0FBQ0UsTUFBTSxPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUU3RSxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1OLElBQUlHLElBQUk7UUFDakMsSUFBSSxDQUFDRyxVQUFVQyxNQUFNQyxPQUFPRixZQUFZRSxPQUFPRixXQUFXLEdBQUc7WUFDM0QsT0FBT1YscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFnQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckY7UUFFQSxNQUFNSSxVQUFVLE1BQU1YLCtDQUFNQSxDQUFDVyxPQUFPLENBQUNDLFVBQVUsQ0FBQztZQUFFQyxPQUFPO2dCQUFFQyxJQUFJWCxPQUFPVyxFQUFFO1lBQUM7UUFBRTtRQUMzRSxJQUFJLENBQUNILFNBQVMsT0FBT2IscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBRXJGLE1BQU1RLGlCQUFpQkwsT0FBT0Y7UUFFOUIsdURBQXVEO1FBQ3ZELE1BQU0sQ0FBQ1EsVUFBVUMsZUFBZSxHQUFHLE1BQU1qQiwrQ0FBTUEsQ0FBQ2tCLFlBQVksQ0FBQztZQUMzRGxCLCtDQUFNQSxDQUFDZ0IsUUFBUSxDQUFDRyxNQUFNLENBQUM7Z0JBQ3JCQyxNQUFNO29CQUFFWixRQUFRTztvQkFBZ0JNLFFBQVFqQixLQUFLaUIsTUFBTTtvQkFBRUMsV0FBV25CLE9BQU9XLEVBQUU7Z0JBQUM7WUFDNUU7WUFDQWQsK0NBQU1BLENBQUNXLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDO2dCQUNwQlYsT0FBTztvQkFBRUMsSUFBSVgsT0FBT1csRUFBRTtnQkFBQztnQkFDdkJNLE1BQU07b0JBQ0pJLFFBQVE7d0JBQUVDLFdBQVdWO29CQUFlO29CQUNwQ1csYUFBYTt3QkFBRUQsV0FBVztvQkFBRTtnQkFDOUI7WUFDRjtTQUNEO1FBRUQsT0FBTzNCLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRVc7WUFBVUwsU0FBU007UUFBZTtJQUMvRCxFQUFFLE9BQU9VLEtBQUs7UUFDWkMsUUFBUXRCLEtBQUssQ0FBQ3FCO1FBQ2QsT0FBTzdCLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Jvd2RldGhlci8uL2FwcC9hcGkvcHJvamVjdHMvW2lkXS9kb25hdGUvcm91dGUudHM/ZjE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBdXRoRnJvbVJlcXVlc3QgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0LCB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkge1xuICB0cnkge1xuICAgIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoRnJvbVJlcXVlc3QocmVxKTtcbiAgICBpZiAoIWF1dGgpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBpZiAoIWFtb3VudCB8fCBpc05hTihOdW1iZXIoYW1vdW50KSkgfHwgTnVtYmVyKGFtb3VudCkgPD0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRW50ZXIgYSB2YWxpZCBkb25hdGlvbiBhbW91bnRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBwcmlzbWEucHJvamVjdC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcmFtcy5pZCB9IH0pO1xuICAgIGlmICghcHJvamVjdCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiUHJvamVjdCBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuXG4gICAgY29uc3QgZG9uYXRpb25BbW91bnQgPSBOdW1iZXIoYW1vdW50KTtcblxuICAgIC8vIENyZWF0ZSBkb25hdGlvbiByZWNvcmQgYW5kIHVwZGF0ZSBwcm9qZWN0IGF0b21pY2FsbHlcbiAgICBjb25zdCBbZG9uYXRpb24sIHVwZGF0ZWRQcm9qZWN0XSA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xuICAgICAgcHJpc21hLmRvbmF0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHsgYW1vdW50OiBkb25hdGlvbkFtb3VudCwgdXNlcklkOiBhdXRoLnVzZXJJZCwgcHJvamVjdElkOiBwYXJhbXMuaWQgfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLnByb2plY3QudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBhcmFtcy5pZCB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcmFpc2VkOiB7IGluY3JlbWVudDogZG9uYXRpb25BbW91bnQgfSxcbiAgICAgICAgICBiYWNrZXJDb3VudDogeyBpbmNyZW1lbnQ6IDEgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZG9uYXRpb24sIHByb2plY3Q6IHVwZGF0ZWRQcm9qZWN0IH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGhGcm9tUmVxdWVzdCIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJwYXJhbXMiLCJhdXRoIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYW1vdW50IiwiaXNOYU4iLCJOdW1iZXIiLCJwcm9qZWN0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJkb25hdGlvbkFtb3VudCIsImRvbmF0aW9uIiwidXBkYXRlZFByb2plY3QiLCIkdHJhbnNhY3Rpb24iLCJjcmVhdGUiLCJkYXRhIiwidXNlcklkIiwicHJvamVjdElkIiwidXBkYXRlIiwicmFpc2VkIiwiaW5jcmVtZW50IiwiYmFja2VyQ291bnQiLCJlcnIiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/projects/[id]/donate/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COOKIE_NAME: () => (/* binding */ COOKIE_NAME),\n/* harmony export */   cookieOptions: () => (/* binding */ cookieOptions),\n/* harmony export */   getAuthFromCookie: () => (/* binding */ getAuthFromCookie),\n/* harmony export */   getAuthFromRequest: () => (/* binding */ getAuthFromRequest),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst SECRET = new TextEncoder().encode(process.env.JWT_SECRET || \"fallback-dev-secret-change-in-production\");\nconst COOKIE_NAME = \"ce_token\";\nasync function signToken(payload) {\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n        ...payload\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"7d\").sign(SECRET);\n}\nasync function verifyToken(token) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token, SECRET);\n        return payload;\n    } catch  {\n        return null;\n    }\n}\n/** Read token from the request cookie (API routes) */ async function getAuthFromRequest(req) {\n    const token = req.cookies.get(COOKIE_NAME)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\n/** Read token from the server-side cookie store (server components) */ async function getAuthFromCookie() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const token = cookieStore.get(COOKIE_NAME)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\nfunction cookieOptions(maxAge) {\n    return {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        path: \"/\",\n        maxAge: maxAge ?? 60 * 60 * 24 * 7\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSDtBQUd2QyxNQUFNRyxTQUFTLElBQUlDLGNBQWNDLE1BQU0sQ0FDckNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0FBR3JCLE1BQU1DLGNBQWMsV0FBVztBQU8vQixlQUFlQyxVQUFVQyxPQUFxQjtJQUNuRCxPQUFPLElBQUlYLHlDQUFPQSxDQUFDO1FBQUUsR0FBR1csT0FBTztJQUFDLEdBQzdCQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsTUFDbEJDLElBQUksQ0FBQ2I7QUFDVjtBQUVPLGVBQWVjLFlBQVlDLEtBQWE7SUFDN0MsSUFBSTtRQUNGLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTVYsK0NBQVNBLENBQUNpQixPQUFPZjtRQUMzQyxPQUFPUTtJQUNULEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRUEsb0RBQW9ELEdBQzdDLGVBQWVRLG1CQUNwQkMsR0FBZ0I7SUFFaEIsTUFBTUYsUUFBUUUsSUFBSWxCLE9BQU8sQ0FBQ21CLEdBQUcsQ0FBQ1osY0FBY2E7SUFDNUMsSUFBSSxDQUFDSixPQUFPLE9BQU87SUFDbkIsT0FBT0QsWUFBWUM7QUFDckI7QUFFQSxxRUFBcUUsR0FDOUQsZUFBZUs7SUFDcEIsTUFBTUMsY0FBY3RCLHFEQUFPQTtJQUMzQixNQUFNZ0IsUUFBUU0sWUFBWUgsR0FBRyxDQUFDWixjQUFjYTtJQUM1QyxJQUFJLENBQUNKLE9BQU8sT0FBTztJQUNuQixPQUFPRCxZQUFZQztBQUNyQjtBQUVPLFNBQVNPLGNBQWNDLE1BQWU7SUFDM0MsT0FBTztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVF0QixrQkFBeUI7UUFDakN1QixVQUFVO1FBQ1ZDLE1BQU07UUFDTkosUUFBUUEsVUFBVSxLQUFLLEtBQUssS0FBSztJQUNuQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Jvd2RldGhlci8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5jb25zdCBTRUNSRVQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoXG4gIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJmYWxsYmFjay1kZXYtc2VjcmV0LWNoYW5nZS1pbi1wcm9kdWN0aW9uXCJcbik7XG5cbmV4cG9ydCBjb25zdCBDT09LSUVfTkFNRSA9IFwiY2VfdG9rZW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBUb2tlblBheWxvYWQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkOiBUb2tlblBheWxvYWQpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFNpZ25KV1QoeyAuLi5wYXlsb2FkIH0pXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiIH0pXG4gICAgLnNldElzc3VlZEF0KClcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoXCI3ZFwiKVxuICAgIC5zaWduKFNFQ1JFVCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxUb2tlblBheWxvYWQgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIFNFQ1JFVCk7XG4gICAgcmV0dXJuIHBheWxvYWQgYXMgdW5rbm93biBhcyBUb2tlblBheWxvYWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKiBSZWFkIHRva2VuIGZyb20gdGhlIHJlcXVlc3QgY29va2llIChBUEkgcm91dGVzKSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhGcm9tUmVxdWVzdChcbiAgcmVxOiBOZXh0UmVxdWVzdFxuKTogUHJvbWlzZTxUb2tlblBheWxvYWQgfCBudWxsPiB7XG4gIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMuZ2V0KENPT0tJRV9OQU1FKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICByZXR1cm4gdmVyaWZ5VG9rZW4odG9rZW4pO1xufVxuXG4vKiogUmVhZCB0b2tlbiBmcm9tIHRoZSBzZXJ2ZXItc2lkZSBjb29raWUgc3RvcmUgKHNlcnZlciBjb21wb25lbnRzKSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhGcm9tQ29va2llKCk6IFByb21pc2U8VG9rZW5QYXlsb2FkIHwgbnVsbD4ge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoQ09PS0lFX05BTUUpPy52YWx1ZTtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIHJldHVybiB2ZXJpZnlUb2tlbih0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb29raWVPcHRpb25zKG1heEFnZT86IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIHNhbWVTaXRlOiBcImxheFwiIGFzIGNvbnN0LFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogbWF4QWdlID8/IDYwICogNjAgKiAyNCAqIDcsIC8vIDcgZGF5c1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJjb29raWVzIiwiU0VDUkVUIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsIkNPT0tJRV9OQU1FIiwic2lnblRva2VuIiwicGF5bG9hZCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImdldEF1dGhGcm9tUmVxdWVzdCIsInJlcSIsImdldCIsInZhbHVlIiwiZ2V0QXV0aEZyb21Db29raWUiLCJjb29raWVTdG9yZSIsImNvb2tpZU9wdGlvbnMiLCJtYXhBZ2UiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"error\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUFFSSxLQUFLO1FBQUM7S0FBUTtBQUFDLEdBQUc7QUFFdkMsSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Jvd2RldGhlci8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7IGxvZzogW1wiZXJyb3JcIl0gfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&page=%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2F%5Bid%5D%2Fdonate%2Froute.ts&appDir=D%3A%5Cdev%5CCrowdEther%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cdev%5CCrowdEther&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();