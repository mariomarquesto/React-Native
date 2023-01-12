import { Dimensions, Platform, ViewStyle } from 'react-native';
import { GrayScaleColor } from './colors';
import { getFontFace } from './fonts';

export const LocalDimensions = {
  maxWidth: 800,
  width: Platform.select({
    ios: Dimensions.get('window').width,
    android: Dimensions.get('window').width,
    web: Dimensions.get('window').width,
    default: Dimensions.get('window').width,
  }),
  height: Platform.select({
    web: Dimensions.get('window').height,
    default: Dimensions.get('window').height,
  }),
};

/**
 * @deprecated Use values from **colors.ts**
 */
export enum GreenScale {
  lighter = '#dcefde',
  medium = '#468C81',
}

/**
 * @deprecated Use values from **colors.ts**
 */
export enum PurpleScale {
  lighter = '#f2e9f4',
  lightMedium = '#F3F0FA',
  darker = '#88498f',
  darkest = '#6240a3',
}

/**
 * @deprecated Use values from **colors.ts**
 */
export enum BlueScale {
  lighter = '#f0f5f7',
  darker = '#00a3d9',
}

/**
 * @deprecated Use values from **colors.ts**
 */
export enum GreyScale {
  lightest = '#ffffff',
  lightWhite = '#f5f5fa',
  lighter = '#e6e6e6',
  light = '#ccced9',
  regular = '#999999',
  lighterDark = '#6c6f80',
  lightDark = '#4C4C4C',
  dark = '#4d4d4d',
  darker = '#404040',
  darkest = '#000000',
}

/**
 * @deprecated Use values from **colors.ts**
 */
export enum RedScale {
  regular = '#ed1c24',
}

/**
 * @deprecated Use values from **colors.ts**
 */
export enum YellowScale {
  regular = '#ff8000',
  lighter = '#FFD700',
}

/**
 * @deprecated Use values from **fonts.ts**
 */
export enum FontSize {
  ultra = 22,
  mega = 20,
  largest = 19,
  larger = 18,
  large = 17,
  regular = 16,
  small = 14,
  smaller = 13,
  smallest = 12,
  ultraLarge = 24,
  impact = 32,
}

export const FontStyles = {
  DefaultDarkFont: {
    color: GrayScaleColor.primaryText,
    fontSize: FontSize.smaller,
    ...getFontFace(),
  },
};

// TODO: Removing this (unused constant) causes API build to fail due to its current
// reliance on Response and Request object definitions from React Native.
export const unused: ViewStyle = {};

export const getDimension = (
  dimensionSize: number,
  dimensionType: 'width' | 'height',
  dimensionScale?: number
) => {
  const localDimensions = LocalDimensions[dimensionType];
  const dimension =
    localDimensions > dimensionSize ? dimensionSize : localDimensions;
  return dimension * (dimensionScale || 1);
};
