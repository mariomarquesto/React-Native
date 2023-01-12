import { TextStyle } from "react-native";
import { GrayScaleColor } from "../../theming/colors";
import { FontSize, FontWeight, getFontDimensions, getFontFace } from "../../theming/fonts";
import { FontSize as LegacyFontSize } from '../../theming/theme';

export interface IBaseTextStyle {
  commonBaseTextStyle: TextStyle;
  smallSizeTextStyle: TextStyle;
  defaultSizeTextStyle: TextStyle;
  largeSizeTextStyle: TextStyle;
  extraLargeSizeTextStyle: TextStyle;
  regularWeightTextStyle: TextStyle;
  mediumWeightTextStyle: TextStyle;
  semiBoldWeightTextStyle: TextStyle;
  boldWeightTextStyle: TextStyle;
}

export const baseTextStyle: IBaseTextStyle = {
  commonBaseTextStyle: {
    ...getFontFace(),
    color: GrayScaleColor.primaryText,
  },
  smallSizeTextStyle: {
    ...getFontDimensions(FontSize.small),
  },
  defaultSizeTextStyle: {
    ...getFontDimensions(FontSize.body),
  },
  largeSizeTextStyle: {
    ...getFontDimensions(LegacyFontSize.mega),
  },
  extraLargeSizeTextStyle: {
    ...getFontDimensions(LegacyFontSize.ultraLarge),
  },
  regularWeightTextStyle: {
    ...getFontFace({ weight: FontWeight.regular }),
  },
  mediumWeightTextStyle: {
    ...getFontFace({ weight: FontWeight.medium }),
  },
  semiBoldWeightTextStyle: {
    ...getFontFace({ weight: FontWeight.semiBold }),
  },
  boldWeightTextStyle: {
    ...getFontFace({ weight: FontWeight.bold }),
  },
};
