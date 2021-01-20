import React from "react";
import { StyleSheet, processColor } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import Animated from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash/lib/module/v1";

const size = 25;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ChevronProps {
  transition: Animated.Node<number>;
}

export default ({ transition }: ChevronProps) => {
  const rotateZ = mix(transition, Math.PI, 0);
  const backgroundColor = mixColor(
    transition,
    processColor("#525251"),
    processColor("#e45645")
  ) as Animated.Node<number>;
  return (
    <Animated.View
      style={[styles.container, { transform: [{ rotateZ }], backgroundColor }]}
    >
      <Icon name="chevron-up" size={20} color="white" />
    </Animated.View>
  );
};