import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'react-native';

export default function App() {

  const [modalIsVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title="Add New Goals" 
          color="#5e0acc" 
          onPress={startAddGoalHandler} 
        />
        {modalIsVisible && 
          <GoalInput 
            onAddGoal={addGoalHandler} 
            visible={modalIsVisible} 
            onCancel={endAddGoalHandler}
          />
        }
        <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false} 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id} 
                onDeleteItem={deleteGoalHandler} 
              />
            );
          }}
        />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
  backgroundColor: '#1e085a'
 },
 goalsContainer: {
  flex: 4,
 },
});