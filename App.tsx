import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { theme } from "@/styles/theme";

import AppLoading from "@/components/AppLoading";

import { HomeScreen } from "@/screens/Home";

export default function App() {
  const [fontsLoading] = useFonts({
    NunitoSansRegular: NunitoSans_400Regular,
    NunitoSansBold: NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoading ? <HomeScreen /> : <AppLoading />}
    </ThemeProvider>
  );
}
