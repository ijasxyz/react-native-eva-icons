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
        React.createElement(Svg.G, { "data-name": "browser" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z" }),
            React.createElement(Svg.Circle, { cx: "8", cy: "7.03", r: "1" }),
            React.createElement(Svg.Circle, { cx: "12", cy: "7.03", r: "1" })))));
//# sourceMappingURL=BrowserOutline.js.map