import { ScrollView, View } from "react-native";

import categories from "../../../data/categories";
import Category from "./Category";

const CategoryBar = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            backgroundColor={category.color}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryBar;
