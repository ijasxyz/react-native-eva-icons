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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const svgIcon_component_1 = require("./svgIcon.component");
const animation_1 = require("./animation");
/**
 * @property name {string} - The name of icon. See the list of available icons https://akveo.github.io/eva-icons
 * @property animation {string} - The name of animation. Could be `zoom`, `pulse` or `shake`. Default is `zoom`
 * @property animationConfig {AnimationConfig} - Animation config including number of cycles to run. Extends Animated.AnimationConfig.
 *
 * @method startAnimation {void} - Starts the passed animation.
 * @method stopAnimation {void} - Stops the passed animation.
 * @method isAnimating {boolean} - Indicates if animation is currently running.
 */
class Icon extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Starts the animation
         * @param callback {Animated.EndCallback} - function to execute on animation end.
         */
        this.startAnimation = (callback) => {
            this.animation.start(callback);
        };
        /**
         * Stops the animation
         */
        this.stopAnimation = () => {
            this.animation.stop();
        };
        /**
         * @returns true if animation is currently running
         */
        this.isAnimating = () => {
            return this.animation.isAnimating();
        };
        this.animation = (0, animation_1.getIconAnimation)(props.animation, props.animationConfig);
    }
    componentWillUnmount() {
        this.animation.release();
    }
    render() {
        const _a = this.props, { animation, animationConfig } = _a, svgIconProps = __rest(_a, ["animation", "animationConfig"]);
        return (React.createElement(react_native_1.Animated.View, Object.assign({}, this.animation.toProps()),
            React.createElement(svgIcon_component_1.SvgIcon, Object.assign({}, svgIconProps))));
    }
}
exports.Icon = Icon;
Icon.defaultProps = {
    animation: 'zoom',
};
//# sourceMappingURL=index.js.map