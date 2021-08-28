import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Restaurant,
  OrderDelivery,
  Employer,
  HomeEmployer,
  Network,
} from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Employer" component={Employer} />
        <Stack.Screen name="HomeEmployer" component={Tabs} />
        <Stack.Screen name="Network" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
