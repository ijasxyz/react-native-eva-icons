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
        React.createElement(Svg.G, { "data-name": "arrow-upward" },
            React.createElement(Svg.Rect, { width: "24", height: "24", transform: "rotate(180 12 12)", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z" })))));
//# sourceMappingURL=ArrowUpwardOutline.js.map