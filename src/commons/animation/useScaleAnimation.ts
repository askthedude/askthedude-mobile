import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { size } from "../style";

export const useScale = (duration: number = 400) => {
  const scale = useSharedValue(1);
  const config = {
    duration: duration,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
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

  return { scale, animationStyle };
};
