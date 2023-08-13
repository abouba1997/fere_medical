import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import OnboardingScreen from '../navigation/OnboardingScreen';
// import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} /> */}
        </Stack.Navigator>
    );
}

export default AppStack;