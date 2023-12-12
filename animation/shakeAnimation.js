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
exports.ShakeAnimation = void 0;
const react_native_1 = require("react-native");
const animation_1 = require("./animation");
const DEFAULT_CONFIG = {
    start: 0.0,
    offset: 2.5,
    easing: react_native_1.Easing.linear,
    duration: 25,
    cycles: 8,
    useNativeDriver: react_native_1.Platform.OS !== 'web',
};
class ShakeAnimation extends animation_1.Animation {
    get animation() {
        const _a = this.config, { start, offset } = _a, restConfig = __rest(_a, ["start", "offset"]);
        const startAnimation = react_native_1.Animated.timing(this.value, Object.assign({ toValue: this.counter % 2 !== 0 ? -offset : offset }, restConfig));
        const endAnimation = react_native_1.Animated.timing(this.value, Object.assign({ toValue: this.counter % 2 !== 0 ? offset : -offset }, restConfig));
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
                transform: [{ translateX: this.value }],
            },
        };
    }
}
exports.ShakeAnimation = ShakeAnimation;
//# sourceMappingURL=shakeAnimation.js.map