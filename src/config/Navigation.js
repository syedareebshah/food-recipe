import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChefLogin from '../screens/chef/chefLogin';
import Home from '../screens/user/Home';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Home',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            
                        },
                    }}
                />

                <Stack.Screen name="ChefLogin" component={ChefLogin}
                    options={{
                        title: 'Chef Login',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            
                        },
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;