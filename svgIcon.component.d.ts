import * as React from 'react';
import { SvgProps } from 'react-native-svg';
export interface SvgIconProps extends SvgProps {
    name: string;
}
export type SvgIconElement = React.ReactElement<SvgIconProps>;
export declare const SvgIcon: (props: SvgIconProps) => React.ReactElement<SvgProps>;
