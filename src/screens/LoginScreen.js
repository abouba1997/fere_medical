import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { COLOR_PRIMARY, COLOR_SECOND, COLOR_WHITE } from '../constants/colors';
import LogoImg from '../../assets/logo_officiel_fere_medical.png';

export const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainerStyle}>
                    <Image source={LogoImg} style={{ width: 200, height: 200, resizeMode: 'contain'}} />
                </View>
                <Text style={styles.titleTextStyle}>Connectez-vous pour suivre vos antécédents médicaux</Text>
                <View style={styles.emailInputViewStyle}>
                    <Ionicons
                        name='call-outline'
                        size={20}
                        color={COLOR_SECOND}
                        style={{marginRight: 5}}
                    />
                    <TextInput
                        placeholder='Téléphone'
                        style={{
                            flex: 1,
                            paddingVertical: 0
                        }}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.emailInputViewStyle}>
                    <Ionicons
                        name='document-outline'
                        size={20}
                        color={COLOR_SECOND}
                        style={{marginRight: 5}}
                    />
                    <TextInput
                        placeholder="Numéro d'identification (NINA/National)"
                        style={{
                            flex: 1,
                            paddingVertical: 0
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.connectionButtonStyle}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: COLOR_WHITE
                        }}
                    >Se connecter</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
                    <Text>Besoin d'aide?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginLeft: 5 }}>
                        <Text style={{ color: COLOR_PRIMARY }}>Contactez-nous!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLOR_WHITE
    },
    container: {
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    logoContainerStyle : {
        alignItems: 'center',
        marginBottom: 30
    },
    titleTextStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: COLOR_PRIMARY,
        marginBottom: 30,
        textAlign: 'center'
    },
    emailInputViewStyle: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    connectionButtonStyle: {
        backgroundColor: COLOR_PRIMARY,
        padding: 15,
        borderRadius: 10,
        marginBottom: 30
    }
});
