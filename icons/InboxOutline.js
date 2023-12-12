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
        React.createElement(Svg.G, { "data-name": "inbox" },
            React.createElement(Svg.Rect, { width: "24", height: "24", transform: "rotate(180 12 12)", opacity: "0" }),
            React.createElement(Svg.Path, { d: "M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v3H9v-3a1 1 0 0 0-1-1H5.62zM18 19H6a1 1 0 0 1-1-1v-5h2v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h2v5a1 1 0 0 1-1 1z" })))));
//# sourceMappingURL=InboxOutline.js.map