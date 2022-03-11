import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from "../views/Homepage";

const Drawer = createDrawerNavigator();

const BurgerDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Homepage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default BurgerDrawer;