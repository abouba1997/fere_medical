import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import { COLOR_PRIMARY, COLOR_SECOND, COLOR_WHITE } from '../constants/colors';
import LogoImg from '../../assets/logo_officiel_fere_medical.png';
import Ionicons from '@expo/vector-icons/Ionicons';

export const OnBoardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
          <View style={{marginTop: 20}}>
            <Text style={styles.textStyle}>Gestionnaire médical</Text>
            <Text style={{
              ...styles.textStyle,
              marginTop: 50,
              fontSize: 12,
              fontWeight: 'bold',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              paddingHorizontal: 20,
              textAlign: 'center',
              color: COLOR_SECOND
            }}>
              Ensemble, sauvons des vies avec fere medical
            </Text>
          </View>
          <View style={styles.logoStyles}>
            <Image source={LogoImg} style={{ width: 200, height: 200, resizeMode: 'contain'}} />
            {/* <LogoImg width={200} height={200} /> */}
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