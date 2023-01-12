import { ViewStyle, TextStyle } from 'react-native';
import { BorderRadius } from '../../../theming/borders';
import { Spacing } from '../../../theming/spacing';
import { PrimaryColor, GrayScaleColor } from '../../../theming/colors';
import {
  FontSize,
  getFontDimensions,
  getFontFace,
  FontWeight,
} from '../../../theming/fonts';

export interface IBaseButtonStyles {
  enabledLargeViewStyle: ViewStyle;
  disabledLargeViewStyle: ViewStyle;
  enabledLargeTextStyle: TextStyle;
  disabledLargeTextStyle: TextStyle;
  enabledMediumViewStyle: ViewStyle;
  disabledMediumViewStyle: ViewStyle;
  enabledMediumTextStyle: TextStyle;
  disabledMediumTextStyle: TextStyle;
  container: ViewStyle;
  background: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

const commonViewStyle: ViewStyle = {
  alignItems: 'center',
  flexGrow: 0,
  justifyContent: 'center',
  borderRadius: BorderRadius.rounded,
  borderColor: '#FDD3E5',
  borderWidth: 1
};

const commonLargeViewStyle: ViewStyle = {
  ...commonViewStyle,
  width: '100%',
  paddingTop: Spacing.base,
  paddingBottom: Spacing.base,
  paddingRight: 56,
  paddingLeft: 56,
};

const commonMediumViewStyle: ViewStyle = {
  ...commonViewStyle,
  width: 'fit-content',
  height: 32,
  paddingTop: Spacing.half,
  paddingBottom: Spacing.half,
  paddingRight: Spacing.times2,
  paddingLeft: Spacing.times2,
};

const commonTextStyle: TextStyle = {
  color: PrimaryColor.darkPink,
  ...getFontFace({ weight: FontWeight.semiBold }),
};

const commonLargeTextStyle: TextStyle = commonTextStyle;

const commonMediumTextStyle: TextStyle = {
  ...commonTextStyle,
  ...getFontDimensions(FontSize.small),
};

export const baseButtonStyles: IBaseButtonStyles = {
  enabledLargeViewStyle: {
    ...commonLargeViewStyle,
    backgroundColor: PrimaryColor.darkPurple,
  },
  disabledLargeViewStyle: {
    ...commonLargeViewStyle,
    backgroundColor: GrayScaleColor.disabledGray,
  },
  enabledMediumViewStyle: {
    ...commonMediumViewStyle,
    backgroundColor: PrimaryColor.darkBlue,
  },
  disabledMediumViewStyle: {
    ...commonMediumViewStyle,
    backgroundColor: GrayScaleColor.disabledGray,
  },
  enabledLargeTextStyle: commonLargeTextStyle,
  disabledLargeTextStyle: commonLargeTextStyle,
  enabledMediumTextStyle: commonMediumTextStyle,
  disabledMediumTextStyle: commonMediumTextStyle,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
};
