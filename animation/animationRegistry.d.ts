import { ViewProps } from 'react-native';
import { Animation, AnimationConfig } from './animation';
export type IconAnimation = Animation<any, ViewProps>;
export interface IconAnimationRegistry {
    zoom: IconAnimation;
    pulse: IconAnimation;
    shake: IconAnimation;
}
export declare function getIconAnimation(animation?: keyof IconAnimationRegistry, config?: AnimationConfig): IconAnimation;
