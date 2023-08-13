import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { COLOR_PRIMARY, COLOR_SECOND, COLOR_WHITE } from '../constants/colors';
import LogoImg from '../../assets/logo_fere_medical.svg';
import Ionicons from '@expo/vector-icons/Ionicons';

export const OnBoardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
          <View style={{marginTop: 20}}>
            <Text style={styles.textStyle}>Gestionnaire médical</Text>
            <Text style={{...styles.textStyle, marginTop: 20, fontSize: 30}}>FERE MEDICAL</Text>
          </View>
          <View style={styles.logoStyles}>
            <LogoImg width={200} height={200} />
          </View>
          <TouchableOpacity 
            style={styles.touchableOpacityStyle}
            onPress={() => navigation.navigate('Login')}
          >
            <Text 
              style={{
                fontWeight: 'bold', 
                fontSize: 20, 
                color: COLOR_WHITE, 
                fontStyle: 'italic',
              }}>Allons-y !</Text>
            <Ionicons name="chevron-forward-outline" size={20} color={COLOR_WHITE}/>
          </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        opacity: 1,
        textAlign: 'center',
        color: COLOR_PRIMARY
    },
    touchableOpacityStyle: {
        backgroundColor: COLOR_PRIMARY,
        padding: 20,
        width: '80%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    logoStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});