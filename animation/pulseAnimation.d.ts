import { Animated, ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface PulseAnimationConfig extends AnimationConfig, TimingAnimationConfig {
    start?: number;
    end?: number;
}
export declare class PulseAnimation extends Animation<PulseAnimationConfig, ViewProps> {
    private value;
    protected get animation(): Animated.CompositeAnimation;
    constructor(config?: PulseAnimationConfig);
    toProps(): ViewProps;
}
export {};
