import { LinearGradient } from "expo-linear-gradient";
import React, { ReactElement, ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { BaseText } from "../../text/base.text";
import { baseButtonStyles } from "./base.button.styles";

export type ButtonSize = "large" | "medium";

export interface IBaseButtonProps extends TouchableOpacityProps {
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
  children: ReactNode;
  isGradient?: boolean;
}

export const BaseButton = ({
  viewStyle,
  textStyle,
  disabled = false,
  children,
  size = "large",
  onPress,
  isGradient = false,
  ...props
}: IBaseButtonProps): ReactElement => {
  const defaultViewStyle = getViewStyle(size, disabled);
  const defaultTextStyle = getTextStyle(size, disabled);

  const onTouchableOpacityPress = (_: GestureResponderEvent) => {
    if (onPress) {
      onPress();
    }
  };

  const renderGradient = (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={["#FDD3E5", "#FFFFFF"]}
        style={[defaultViewStyle]}
      >
        <BaseText style={[defaultTextStyle, textStyle]}>{children}</BaseText>
      </LinearGradient>
    </>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={!isGradient ? [defaultViewStyle, viewStyle] : { width: "100%" }}
      accessibilityRole="button"
      onPress={onTouchableOpacityPress}
      {...props}
    >
      {isGradient ? (
        renderGradient
      ) : (
        <BaseText style={[defaultTextStyle, textStyle]}>{children}</BaseText>
      )}
    </TouchableOpacity>
  );
};

const getViewStyle = (size: ButtonSize, disabled: boolean): ViewStyle => {
  switch (size) {
    case "medium": {
      return getMediumViewStyle(disabled);
    }
    default: {
      return getLargeViewStyle(disabled);
    }
  }
};

const getMediumViewStyle = (disabled: boolean): ViewStyle =>
  disabled
    ? baseButtonStyles.disabledMediumViewStyle
    : baseButtonStyles.enabledMediumViewStyle;

const getLargeViewStyle = (disabled: boolean): ViewStyle =>
  disabled
    ? baseButtonStyles.disabledLargeViewStyle
    : baseButtonStyles.enabledLargeViewStyle;

const getTextStyle = (size: ButtonSize, disabled: boolean): TextStyle => {
  switch (size) {
    case "medium": {
      return getMediumTextStyle(disabled);
    }
    default: {
      return getLargeTextStyle(disabled);
    }
  }
};

const getMediumTextStyle = (disabled: boolean): TextStyle =>
  disabled
    ? baseButtonStyles.disabledMediumTextStyle
    : baseButtonStyles.enabledMediumTextStyle;

const getLargeTextStyle = (disabled: boolean): TextStyle =>
  disabled
    ? baseButtonStyles.disabledLargeTextStyle
    : baseButtonStyles.enabledLargeTextStyle;
