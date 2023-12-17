import React, { useState } from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
    const [numColumns, setNumColumns] = useState(2);

    const changeNumColumns = (newNumColumns) => {
        setNumColumns(newNumColumns);
    };

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview');
        }
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
                
            />
        );
    }

    return (
        <FlatList 
            key={numColumns} 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={numColumns}
        />
    );
}

export default CategoriesScreen;
