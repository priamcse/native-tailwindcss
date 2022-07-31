import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View className="h-full flex-col flex-1 items-center justify-center space-y-4">
      <View className="bg-violet-500 rounded-full p-8">
        <Text className="font-bold text-2xl  text-white ">{count}</Text>
      </View>
      <View className="flex-row p-2 space-x-2">
        <Pressable
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 p-4"
          onPress={() => setCount((prevCount) => prevCount + 1)}
        >
          <Text className="text-white font-bold uppercase">Click Me!</Text>
        </Pressable>
        <Pressable
          className="bg-red-500 hover:bg-red-600 active:bg-red-700 p-4"
          onPress={() => setCount(0)}
        >
          <Text className="text-white font-bold uppercase">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;
