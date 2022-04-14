import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { size } from "../style";

export const useScale = (duration: number = 500) => {
  const componentSize = useSharedValue(1);
  const config = {
    duration: duration,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(size.width.big * componentSize.value, config),
      height: withTiming(size.height.big * componentSize.value, config),
    };
  });

  const scale = () => {
    console.log("icreasing");
    componentSize.value = 1.2;
  };

  return { scale, animationStyle };
};
