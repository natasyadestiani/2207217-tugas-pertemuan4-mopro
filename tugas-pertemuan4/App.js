import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./little-lemon-starter-code/little-lemon-starter-code/navigators/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}