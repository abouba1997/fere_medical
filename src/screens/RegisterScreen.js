import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <Text>Login Page</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
