import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Home';
import Product from './src/Product';
import Cart from './src/Cart';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: true, headerTitle: 'Giỏ hàng' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
