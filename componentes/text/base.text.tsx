import { ReactElement, ReactNode } from "react";
import { TextProps, Text, TextStyle } from "react-native";
import { baseTextStyle, IBaseTextStyle } from "./base.text.styles";

export type BaseTextSize = 'small' | 'default' | 'large' | 'extraLarge';
export type BaseTextWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface IBaseTextProps extends TextProps {
  inheritStyle?: boolean;
  weight?: BaseTextWeight;
  size?: BaseTextSize;
  children: ReactNode;
  isSkeleton?: boolean;
}

export const BaseText = ({
  children,
  size = 'default',
  weight = 'regular',
  inheritStyle,
  style,
  isSkeleton,
  ...props
}: IBaseTextProps): ReactElement => {
  const styles = baseTextStyle;

  const commonBaseTextStyle = inheritStyle
    ? undefined
    : styles.commonBaseTextStyle;

  const sizeTextStyle = inheritStyle
    ? undefined
    : getSizeTextStyle(styles, size);

  const weightTextStyle = inheritStyle
    ? undefined
    : getWeightTextStyle(styles, weight);

  const layoutStyleList: any[] = [];

  return (
    <Text
      {...props}
      style={[commonBaseTextStyle, sizeTextStyle, weightTextStyle, style]}
    >
      {children}
    </Text>
  );
};

const getSizeTextStyle = (
  styles: IBaseTextStyle,
  size: BaseTextSize
): TextStyle => {
  const fontSizeMap = new Map<BaseTextSize, TextStyle>([
    ['small', styles.smallSizeTextStyle],
    ['default', styles.defaultSizeTextStyle],
    ['large', styles.largeSizeTextStyle],
    ['extraLarge', styles.extraLargeSizeTextStyle],
  ]);

  return fontSizeMap.get(size) ?? styles.defaultSizeTextStyle;
};

const getWeightTextStyle = (
  styles: IBaseTextStyle,
  weight: BaseTextWeight
): TextStyle => {
  const fontWeightMap = new Map<BaseTextWeight, TextStyle>([
    ['regular', styles.regularWeightTextStyle],
    ['medium', styles.mediumWeightTextStyle],
    ['semiBold', styles.semiBoldWeightTextStyle],
    ['bold', styles.boldWeightTextStyle],
  ]);

  return fontWeightMap.get(weight) ?? styles.regularWeightTextStyle;
};
