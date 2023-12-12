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
        React.createElement(Svg.G, { "data-name": "droplet-off-outline" },
            React.createElement(Svg.Rect, { width: "24", height: "24", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M12 19a5.4 5.4 0 0 1-3.88-1.64 5.73 5.73 0 0 1-.69-7.11L6 8.82a7.74 7.74 0 0 0 .7 9.94A7.37 7.37 0 0 0 12 21a7.36 7.36 0 0 0 4.58-1.59L15.15 18A5.43 5.43 0 0 1 12 19z" }),
            React.createElement(Svg.Path, { d: "M12 5.43l3.88 4a5.71 5.71 0 0 1 1.49 5.15L19 16.15A7.72 7.72 0 0 0 17.31 8l-4.6-4.7A1 1 0 0 0 12 3a1 1 0 0 0-.72.3L8.73 5.9l1.42 1.42z" }),
            React.createElement(Svg.Path, { d: "M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" })))));
//# sourceMappingURL=DropletOffOutline.js.map