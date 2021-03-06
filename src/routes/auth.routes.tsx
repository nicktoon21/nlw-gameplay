import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        animationTypeForReplace:'pop',
        animation: 'fade',
        presentation: 'containedModal',
        contentStyle:{
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}
    >
      <Screen
      name="SignIn"
      component={SignIn}
      />
      <Screen
      name="Home"
      component={Home}
      />
    </Navigator>
  );
}