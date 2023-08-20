import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { COLOR_PRIMARY, COLOR_SECOND, COLOR_WHITE } from '../constants/colors';

export const PatientInfoScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.commonInputViewStyle}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Type de consultation</Text>
                    <Text>AC</Text>
                </View>
                <View style={{...styles.commonInputViewStyle, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND}}>Motif et Symdrome</Text>
                    <Text style={{marginTop: 5, fontSize: 16, textAlign: 'justify'}}>Le patient fiévreux et pâle s'est présenté à la clinique, évoquant des voyages dans une zone à risque, pointant vers le paludisme. L'examen confirme le diagnostic, offrant à la fois le fardeau de la maladie et l'espoir de guérison.</Text>
                </View>
                <View style={{...styles.commonInputViewStyle, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND, paddingBottom: 5}}>Analyse aux laboratoires</Text>
                    <View style={{ marginTop: 10}}>
                        <View style={styles.columnInputViewStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                Frottis sanguin épais et mince
                            </Text>
                            <Text>Positif: <Text style={{ color: 'red'}}>Oui</Text></Text>
                        </View>
                        <View style={styles.columnInputViewStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                Test de diagnostic rapide (TDR)
                            </Text>
                            <Text>Positif: <Text style={{ color: 'red'}}>Oui</Text></Text>
                        </View>
                        <View style={styles.columnInputViewStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                PCR (Réaction en chaîne par polymérase)
                            </Text>
                            <Text>Positif: <Text style={{ color: 'green'}}>NON</Text></Text>
                        </View>
                        <View style={styles.columnInputViewStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                Sérologie
                            </Text>
                            <Text>Positif: <Text style={{ color: 'green'}}>NON</Text></Text>
                        </View>
                        <View style={styles.columnInputViewStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                Microscopie à fluorescence
                            </Text>
                            <Text>Positif: <Text style={{ color: 'green'}}>NON</Text></Text>
                        </View>
                        <View style={{ ...styles.columnInputViewStyle, marginBottom: 0, paddingBottom: 0}}>
                            <Text style={{ fontSize: 16, fontWeight: 'normal', marginBottom: 3}}>
                                <Text style={{ color: COLOR_PRIMARY}}>Type - </Text>
                                Microscopie à contraste de phase
                            </Text>
                            <Text>Positif: <Text style={{ color: 'green'}}>NON</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={{...styles.commonInputViewStyle, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND, paddingBottom: 5}}>Diagnostiques</Text>
                    <Text style={{marginTop: 5, fontSize: 16, textAlign: 'justify'}}>Sur la base des résultats fournis, un diagnostic probable de paludisme est envisagé, principalement en se basant sur les frottis sanguins épais et minces ainsi que sur le test de diagnostic rapide (TDR) positifs. La PCR négative et la sérologie négative peuvent indiquer que le patient est actuellement infecté par le parasite du paludisme sans qu'il y ait une infection ancienne ou une réponse immunitaire significative en cours.</Text>
                </View>
                <View style={{...styles.commonInputViewStyle, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND, paddingBottom: 5}}>Traitements</Text>
                    <Text style={{marginTop: 5, fontSize: 16, textAlign: 'justify'}}>Sur la base des diagnostiques fournis, Un exemple de traitement antipaludique couramment utilisé est l'association d'artéméther et de luméfantrine, vendue sous le nom commercial de Coartem. Ce médicament est souvent prescrit pour traiter les infections à Plasmodium falciparum, l'une des souches les plus courantes et potentiellement graves du parasite responsable du paludisme.</Text>
                </View>
                <View style={{...styles.commonInputViewStyle, flexDirection: 'column'}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR_SECOND, paddingBottom: 5}}>Observations</Text>
                    <Text style={{marginTop: 5, fontSize: 16, textAlign: 'justify'}}>Le patient a montré une réponse positive au traitement à base d'artéméther et de luméfantrine (Coartem). Les symptômes de paludisme ont diminué rapidement, et les résultats de suivi ont confirmé la disparition des parasites du sang, indiquant un rétablissement réussi.</Text>
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
        paddingBottom: 3,
        marginBottom: 25
    },
    columnInputViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 10,
        marginLeft: 10
    },
    registerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    }
});
