import { Animated, ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface ShakeAnimationConfig extends AnimationConfig, TimingAnimationConfig {
    start?: number;
    offset?: number;
}
export declare class ShakeAnimation extends Animation<ShakeAnimationConfig, ViewProps> {
    private value;
    protected get animation(): Animated.CompositeAnimation;
    constructor(config?: ShakeAnimationConfig);
    toProps(): ViewProps;
}
export {};
