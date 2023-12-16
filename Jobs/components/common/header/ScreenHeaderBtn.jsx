import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
import { COLORS } from "../../../constants";

const ScreenHeaderBtn = ({ iconURL, dimension, handelPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handelPress}>
      <Image
        source={iconURL}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
