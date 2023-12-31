"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconAnimation = void 0;
const zoomAnimation_1 = require("./zoomAnimation");
const pulseAnimation_1 = require("./pulseAnimation");
const shakeAnimation_1 = require("./shakeAnimation");
function getIconAnimation(animation, config) {
    switch (animation) {
        case 'zoom':
            return new zoomAnimation_1.ZoomAnimation(config);
        case 'pulse':
            return new pulseAnimation_1.PulseAnimation(config);
        case 'shake':
            return new shakeAnimation_1.ShakeAnimation(config);
    }
}
exports.getIconAnimation = getIconAnimation;
//# sourceMappingURL=animationRegistry.js.map