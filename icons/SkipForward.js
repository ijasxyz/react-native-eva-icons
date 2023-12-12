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
        React.createElement(Svg.G, { "data-name": "skip-forward" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z" })))));
//# sourceMappingURL=SkipForward.js.map