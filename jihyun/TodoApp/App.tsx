import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo'

const App = () => {
  const today = new Date();
  // console.log(today);
  // const d = new Date();
  // const year = d.getFullYear();
  // const month = d.getMonth() + 1;
  // const day = d.getDate();
  // // const formatted = year + '년 ' + month + '월 ' + day + '일';
  // const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({});

export default App;
