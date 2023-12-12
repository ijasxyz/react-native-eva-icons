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
        React.createElement(Svg.G, { "data-name": "thermometer" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 9 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4z" })))));
//# sourceMappingURL=ThermometerOutline.js.map