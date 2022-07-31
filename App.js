import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Counter from "./components/Counter";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <Counter />
      </SafeAreaView>
    </TailwindProvider>
  );
}
