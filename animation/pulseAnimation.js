"use strict";
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
exports.PulseAnimation = void 0;
const react_native_1 = require("react-native");
const animation_1 = require("./animation");
const DEFAULT_CONFIG = {
    start: 1.0,
    end: 1.25,
    easing: react_native_1.Easing.linear,
    duration: 500,
    useNativeDriver: react_native_1.Platform.OS !== 'web',
};
class PulseAnimation extends animation_1.Animation {
    get animation() {
        const _a = this.config, { start, end } = _a, restConfig = __rest(_a, ["start", "end"]);
        const startAnimation = react_native_1.Animated.timing(this.value, Object.assign({ toValue: end }, restConfig));
        const endAnimation = react_native_1.Animated.timing(this.value, Object.assign({ toValue: start }, restConfig));
        return react_native_1.Animated.sequence([
            startAnimation,
            endAnimation,
        ]);
    }
    constructor(config) {
        super(Object.assign(Object.assign({}, DEFAULT_CONFIG), config));
        this.value = new react_native_1.Animated.Value(this.config.start);
    }
    toProps() {
        return {
            // @ts-ignore: Animated.Value is not assignable to a number, but it is a number
            style: {
                transform: [{ scale: this.value }],
            },
        };
    }
}
exports.PulseAnimation = PulseAnimation;
//# sourceMappingURL=pulseAnimation.js.map