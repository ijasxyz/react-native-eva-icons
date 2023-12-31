import { Animated, ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;
export interface ZoomAnimationConfig extends AnimationConfig, TimingAnimationConfig {
    start?: number;
    end?: number;
}
export declare class ZoomAnimation extends Animation<ZoomAnimationConfig, ViewProps> {
    private value;
    protected get animation(): Animated.CompositeAnimation;
    constructor(config?: ZoomAnimationConfig);
    toProps(): ViewProps;
}
export {};
