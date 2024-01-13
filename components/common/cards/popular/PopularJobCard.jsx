import { Text, TouchableOpacity, View } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
