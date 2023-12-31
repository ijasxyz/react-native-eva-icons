"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    cycles: 1,
    useNativeDriver: true,
};
/**
 * Base animation class. Creates `Animated.Value` and maps it to props of `Animated.View`
 */
class Animation {
    constructor(config) {
        this.counter = 0;
        this.running = false;
        /**
         * Default animation completion callback.
         * Will run animation again if it is not stopped or it should stop regarding to `cycles` property
         */
        this.onAnimationEnd = (result) => {
            this.counter += 1;
            if (this.counter === this.config.cycles) {
                this.stop();
            }
            if (this.running) {
                this.start(this.endCallback);
            }
            if (!this.running) {
                this.counter = 0;
                this.endCallback && this.endCallback(result);
                this.endCallback = null;
            }
        };
        this.config = Object.assign(Object.assign({}, exports.DEFAULT_CONFIG), config);
    }
    /**
     * Starts the animation
     * @param callback {Animated.EndCallback} - function to execute on animation end.
     */
    start(callback) {
        this.endCallback = callback;
        this.running = true;
        this.animation.start(this.onAnimationEnd);
    }
    /**
     * Stops the animation
     */
    stop() {
        this.running = false;
        this.animation.stop();
    }
    /**
     * @returns true if animation is currently running
     */
    isAnimating() {
        return this.running;
    }
    release() {
        this.stop();
    }
}
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map