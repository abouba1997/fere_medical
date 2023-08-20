import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoardingScreen } from '../screens/OnBoardingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PatientInfoScreen } from '../screens/PatientInfoScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Infos personnelles'}} />
            <Stack.Screen name="PatientInfoScreen" component={PatientInfoScreen} options={{ title: "Details d'enregistrement"}}/>
        </Stack.Navigator>
    );
}

export default AuthStack;