import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from "./screen/home.js"
import { NotificationScreen } from "./screen/notification.js"
import { SettingScreen } from "./screen/setting.js"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
     </Drawer.Navigator>
    </NavigationContainer>
  );
};


