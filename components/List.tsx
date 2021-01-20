import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import Animated from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash/lib/module/v1";
import Chevron from "./Chevron";
import Item, { LIST_ITEM_HEIGHT, ListItem } from "./ListItem";

const { interpolate } = Animated;
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20
  },
  items: {
    overflow: "hidden",
  },
});

export interface List {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list: List;
}

export default ({ list }: ListProps) => {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open);
  const height = mix(transition, 0, LIST_ITEM_HEIGHT * list.items.length);
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  });
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
          ]}
        >
        <Chevron {...{ transition }} />
          <Text style={styles.title}>Total Points</Text>
          
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        {list.items.map((item, key) => (
          <Item
            key={key}
            isLast={key === list.items.length - 1}
            {...{ item }}
          />
        ))}
      </Animated.View>
    </>
  );
};