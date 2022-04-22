import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { size } from "../style";

const SCALE_CONSTANT = 1.2;

export const useScale = (
  trigger: any,
  errorMessage: string,
  duration: number = 400
) => {
  const scale = useSharedValue(1);
  const config = {
    duration: duration,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  useEffect(() => {
    if (errorMessage != "") {
      scale.value = SCALE_CONSTANT;
    }
  }, [trigger]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        size.width.big * scale.value,
        config,
        () => (scale.value = 1)
      ),
      height: withTiming(
        size.height.big * scale.value,
        config,
        () => (scale.value = 1)
      ),
    };
  });

  return { animationStyle };
};
