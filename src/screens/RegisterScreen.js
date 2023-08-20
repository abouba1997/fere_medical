import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import { COLOR_BLACK, COLOR_PRIMARY, COLOR_SECOND, COLOR_WHITE } from '../constants/colors';
import QRCode from '../../assets/qr_code_sample.png';
import Avatar from '../../assets/avatar_fere_medical.png';

export const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoContainerStyle}>
                    <Image source={QRCode} style={{ width: 200, height: 200 }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20}}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign:'center',
                        color: COLOR_BLACK,
                        marginBottom: 5
                    }}>
                        Bienvenue
                    </Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        textAlign: 'center',
                        color: COLOR_PRIMARY
                    }}>
                        Moussa Sangare
                    </Text>
                </View>
                <View style={styles.logoContainerStyle}>
                    <Image source={Avatar} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>NINA/National</Text>
                    <Text>1 50 047 01 112 115 D</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Telephone</Text>
                    <Text>77000000/66000000</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Date de naissance</Text>
                    <Text>20/12/1990</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Genre</Text>
                    <Text>Masculin</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Residence</Text>
                    <Text>Kalaban Coura ACI, R.600 P.900</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Ethnie</Text>
                    <Text>Peulh</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Profession</Text>
                    <Text>Etudiant</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Poids</Text>
                    <Text>65Kg</Text>
                </View>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Taille</Text>
                    <Text>1m65</Text>
                </View>
                <View style={{paddingTop: 20}}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: COLOR_PRIMARY, marginBottom: 10}}>Mes enregistrements medicaux</Text>
                </View>
                <View style={styles.registerViewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientInfoScreen')}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Enregistrement du 06/08/2022</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerViewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientInfoScreen')}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Enregistrement du 05/07/2022</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerViewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientInfoScreen')}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Enregistrement du 22/05/2022</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registerViewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientInfoScreen')}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Enregistrement du 18/03/2022</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30, marginTop: 20}}>
                    <Text>Vous avez besoin d'aide?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 5 }}>
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
        paddingTop: 15,
        paddingHorizontal: 25,
        justifyContent: 'center',
    },
    logoContainerStyle : {
        alignItems: 'center',
        marginBottom: 30
    },
    titleTextStyle: {
        fontSize: 28,
        fontWeight: '500',
        color: COLOR_PRIMARY,
        marginBottom: 30,
        textAlign: 'center'
    },
    commonInputViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    registerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    }
});
