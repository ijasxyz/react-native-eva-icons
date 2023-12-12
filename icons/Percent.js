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
        React.createElement(Svg.G, { "data-name": "percent" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z" }),
            React.createElement(Svg.Path, { d: "M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z" }),
            React.createElement(Svg.Path, { d: "M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z" })))));
//# sourceMappingURL=Percent.js.map