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
        React.createElement(Svg.G, { "data-name": "file-text" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" }),
            React.createElement(Svg.Path, { d: "M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z" }),
            React.createElement(Svg.Path, { d: "M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z" })))));
//# sourceMappingURL=FileTextOutline.js.map