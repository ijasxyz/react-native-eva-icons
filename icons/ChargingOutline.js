"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Svg = __importStar(require("react-native-svg"));
exports.default = (props) => (React.createElement(Svg.Svg, Object.assign({}, props, { viewBox: "0 0 24 24" }),
    React.createElement(Svg.G, { "data-name": "Layer 2" },
        React.createElement(Svg.G, { "data-name": "charging" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z" }),
            React.createElement(Svg.Path, { d: "M15.83 6h-3.1l-1.14 2h4.23a.5.5 0 0 1 .18.43v7.14a.52.52 0 0 1-.17.43H13l-1.15 2h4A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z" }),
            React.createElement(Svg.Path, { d: "M4 15.57V8.43A.53.53 0 0 1 4.17 8H7l1.13-2h-4A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h3.1l1.14-2H4.18a.5.5 0 0 1-.18-.43z" }),
            React.createElement(Svg.Path, { d: "M9 20a1 1 0 0 1-.87-1.5l3.15-5.5H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1l4-7a1 1 0 0 1 1.74 1L8.72 11H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1l-4 7A1 1 0 0 1 9 20z" })))));
//# sourceMappingURL=ChargingOutline.js.map